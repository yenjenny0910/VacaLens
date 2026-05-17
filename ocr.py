from PIL import Image
import pytesseract
import argparse
import sys
import os
import shutil


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


def main():
    p = argparse.ArgumentParser(description="OCR an image using Tesseract via pytesseract")
    p.add_argument('image', help='Path to image file')
    p.add_argument('--lang', help='Tesseract language code (e.g. eng, chi_sim)', default=None)
    p.add_argument('--config', help='Tesseract config string (e.g. --psm 6)', default='')
    args = p.parse_args()

    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')

    if not os.path.exists(args.image):
        print('Image not found:', args.image, file=sys.stderr)
        sys.exit(2)

    ensure_tesseract_on_windows()

    try:
        result = ocr_image(args.image, lang=args.lang, config=args.config)
    except Exception as e:
        print('OCR failed:', e, file=sys.stderr)
        sys.exit(3)

    print(result)


if __name__ == '__main__':
    main()
