import argparse
import sys
import os
import base64
import json
import requests

GEMINI_MODEL = "gemini-2.5-flash"


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
                "input": "Extract the text from this image and return only the recognized text."
            }
        ],
        "parameters": {
            "temperature": 0.0,
            "maxOutputTokens": 1024
        }
    }

    use_bearer = api_key.startswith('ya29.')
    url = f"https://gemini.googleapis.com/v1/models/{model}:predict"
    headers = {
        "Content-Type": "application/json"
    }
    params = None
    if use_bearer:
        headers["Authorization"] = f"Bearer {api_key}"
    else:
        params = {"key": api_key}

    response = requests.post(url, json=body, headers=headers, params=params, timeout=30)
    response.raise_for_status()
    data = response.json()

    text = None
    if isinstance(data, dict):
        if "predictions" in data and len(data["predictions"]) > 0:
            pred = data["predictions"][0]
            if isinstance(pred, str):
                text = pred
            elif isinstance(pred, dict):
                if "output" in pred and isinstance(pred["output"], list) and len(pred["output"]) > 0:
                    first = pred["output"][0]
                    if isinstance(first, dict):
                        text = first.get("content") or first.get("text")
                    elif isinstance(first, str):
                        text = first
                text = text or pred.get("content") or pred.get("text")
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
    p = argparse.ArgumentParser(description="Use Gemini API to extract text from an image")
    p.add_argument('image', help='Path to image file')
    p.add_argument('--api-key', help='Gemini API key, if not set in environment variables', default=None)
    p.add_argument('--model', help='Gemini model to use', default=GEMINI_MODEL)
    args = p.parse_args()

    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')

    if not os.path.exists(args.image):
        print('Image not found:', args.image, file=sys.stderr)
        sys.exit(2)

    api_key = args.api_key or os.environ.get('API_KEY')
    if not api_key:
        print('Gemini API key is not configured. Set API_KEY in the environment.', file=sys.stderr)
        sys.exit(1)

    try:
        result = gemini_image_to_text(args.image, api_key, model=args.model)
    except Exception as e:
        print('Gemini OCR failed:', e, file=sys.stderr)
        sys.exit(3)

    print(result)


if __name__ == '__main__':
    main()
