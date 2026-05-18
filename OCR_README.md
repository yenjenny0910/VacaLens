簡短說明 - 使用 `ocr.py` 進行圖片文字辨識

前置作業：
- 安裝系統級 Tesseract OCR 引擎（Windows 範例）：建議安裝至預設路徑 `C:\Program Files\Tesseract-OCR\` 或使用 Chocolatey：

```powershell
choco install tesseract -y
```

- 安裝 Python 套件：

```powershell
python -m pip install -r requirements.txt
```

使用方法：

```powershell
python ocr.py path\to\image.png --lang chi_sim
```

若要改用 Gemini API 進行英文單字辨識：

1. 在 `ocr.py` 裡面填入你的 API Key：
   - `GEMINI_API_KEY = "你的API_KEY"`
2. 執行：

```powershell
python ocr.py path\to\image.png --lang eng --use-gemini
```

或者直接從命令列傳入 API Key：

```powershell
python ocr.py path\to\image.png --lang eng --use-gemini --api-key YOUR_API_KEY
```

說明：
- `ocr.py` 會嘗試在 Windows 上自動指向 `C:\Program Files\Tesseract-OCR\tesseract.exe`（若該可執行檔存在且未在 PATH）。
- 若 Tesseract 安裝在其他位置，可以在程式中指定 `pytesseract.pytesseract.tesseract_cmd`，或把安裝路徑加入系統 PATH。

範例：

```powershell
python ocr.py sample.png --lang eng
```

在英文模式下，如果你已填入 API Key，程式也會自動嘗試使用 Gemini API。