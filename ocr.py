from PIL import Image
import pytesseract
import argparse
import sys
import os
import shutil
import base64
import json
import requests

# 如果你要直接把 API Key 填在程式裡，請在這裡填寫：
GEMINI_API_KEY = "AIzaSyBtRqWFSYtkgSFj4wVeu2NAPtB7NcjIDHI"  # <-- 在這裡填入你的 Gemini API Key
GEMINI_MODEL = "gemini-2.5flash"


def ensure_tesseract_on_windows():
    if sys.platform.startswith("win"):
        # prefer system PATH; otherwise try common install location
        if shutil.which("tesseract") is None:
            default = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
            if os.path.exists(default):
                pytesseract.pytesseract.tesseract_cmd = default


def ocr_image(path, lang=None, config=''):
    img = Image.open(path)
    text = pytesseract.image_to_string(img, lang=lang, config=config)
    return text


def gemini_image_to_text(path, api_key, model=GEMINI_MODEL):
    if not api_key:
        raise ValueError("請先填入 Gemini API Key，或使用 --api-key 參數")

    with open(path, 'rb') as f:
        image_bytes = f.read()

    body = {
        "instances": [
            {
                "image": {
                    "imageBytes": base64.b64encode(image_bytes).decode('utf-8')
                },
                "input": "Please recognize the English words in this image and return only the recognized text."
            }
        ],
        "parameters": {
            "temperature": 0.0,
            "maxOutputTokens": 1024
        }
    }

    url = f"https://gemini.googleapis.com/v1/models/{model}:predict"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=body, headers=headers, timeout=30)
    response.raise_for_status()
    data = response.json()

    text = None
    if isinstance(data, dict):
        if "predictions" in data and len(data["predictions"]) > 0:
            pred = data["predictions"][0]
            if isinstance(pred, dict):
                if "output" in pred:
                    out = pred["output"]
                    if isinstance(out, list) and len(out) > 0:
                        first = out[0]
                        if isinstance(first, dict):
                            text = first.get("content") or first.get("text")
                        elif isinstance(first, str):
                            text = first
                text = text or pred.get("content") or pred.get("text")
            elif isinstance(pred, str):
                text = pred
        elif "output" in data:
            out = data["output"]
            if isinstance(out, str):
                text = out
            elif isinstance(out, list) and len(out) > 0:
                first = out[0]
                if isinstance(first, dict):
                    text = first.get("content") or first.get("text")
                elif isinstance(first, str):
                    text = first

    if not text:
        raise ValueError(f"Gemini 回傳格式無法解析，請檢查 API Key 與模型設定。原始回應: {json.dumps(data, ensure_ascii=False)}")

    return text.strip()


def main():
    p = argparse.ArgumentParser(description="OCR an image using Tesseract or Gemini API for English recognition")
    p.add_argument('image', help='Path to image file')
    p.add_argument('--lang', help='Tesseract language code (e.g. eng, chi_sim)', default=None)
    p.add_argument('--config', help='Tesseract config string (e.g. --psm 6)', default='')
    p.add_argument('--use-gemini', action='store_true', help='Use Gemini API for English text recognition')
    p.add_argument('--api-key', help='Gemini API key, if not set in GEMINI_API_KEY constant', default=None)
    args = p.parse_args()

    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')

    if not os.path.exists(args.image):
        print('Image not found:', args.image, file=sys.stderr)
        sys.exit(2)

    ensure_tesseract_on_windows()
    api_key = args.api_key or GEMINI_API_KEY or os.environ.get('GEMINI_API_KEY')

    if args.use_gemini or (args.lang == 'eng' and api_key):
        try:
            result = gemini_image_to_text(args.image, api_key)
        except Exception as e:
            print('Gemini OCR failed:', e, file=sys.stderr)
            sys.exit(3)
    else:
        try:
            result = ocr_image(args.image, lang=args.lang, config=args.config)
        except Exception as e:
            print('OCR failed:', e, file=sys.stderr)
            sys.exit(3)

    print(result)


if __name__ == '__main__':
    main()
