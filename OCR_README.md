簡短說明 - 使用 Gemini API 進行圖片文字辨識

前置作業：
- 安裝 Python 套件：

```powershell
python -m pip install -r requirements.txt
```

使用方法：

```powershell
python ocr.py path\to\image.png --api-key YOUR_API_KEY
```

或者先在 `ocr.py` 中填入 API Key：

```python
GEMINI_API_KEY = "你的API_KEY"
```

然後執行：

```powershell
python ocr.py path\to\image.png
```

說明：
- 這個專案已改為使用 Gemini API 進行影像文字辨識，完全不再依賴 Tesseract OCR。
- 若要指定模型，請使用 `--model` 參數，例如 `--model gemini-2.5flash`。
- 只要提供合法的 Gemini API Key，就能直接辨識影像中的文字。
