const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');
const fs = require('fs');
const os = require('os');
const multer = require('multer');

let fetch = globalThis.fetch;
try {
    if (!fetch) {
        fetch = require('node-fetch');
    }
} catch (err) {
    fetch = globalThis.fetch;
}

const app = express();
const PORT = process.env.PORT || 3001;
const GEMINI_MODEL = 'gemini-2.5-flash';

app.use(cors({
    origin: true,
    allowedHeaders: ['Content-Type', 'x-user-id'],
    exposedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// 加入日誌，讓你在終端機看到請求紀錄
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
    next();
});

let db;

(async () => {
    db = await open({
        filename: './vacalens.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT
        );

        CREATE TABLE IF NOT EXISTS books (
            id TEXT PRIMARY KEY,
            user_id TEXT,
            name TEXT NOT NULL,
            FOREIGN KEY(user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            book_id TEXT,
            word TEXT NOT NULL,
            def TEXT NOT NULL,
            pos TEXT,
            FOREIGN KEY(book_id) REFERENCES books(id)
        );

        CREATE TABLE IF NOT EXISTS mastery (
            user_id TEXT,
            word TEXT,
            status TEXT NOT NULL,
            PRIMARY KEY(user_id, word),
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
    `);

    const userCount = await db.get('SELECT COUNT(*) as count FROM users');
    if (userCount.count === 0) {
        await db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', ['u1', 'aaaaa', '12345']);
        await db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', ['u2', 'bbbbb', '54321']);
        await db.run('INSERT INTO books (id, user_id, name) VALUES (?, ?, ?)', ['mistakes-u1', 'u1', '測驗錯題本']);
        await db.run('INSERT INTO books (id, user_id, name) VALUES (?, ?, ?)', ['mistakes-u2', 'u2', '測驗錯題本']);
    }
    console.log('Database initialized.');
})();

const auth = (req, res, next) => {
    const userId = req.headers['x-user-id'];
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });
    req.userId = userId;
    next();
};

// --- API Endpoints ---

app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running on 3001!' });
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userId = 'u' + Date.now();
        await db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [userId, username, password]);
        
        // 為新使用者建立預設錯題本
        await db.run('INSERT INTO books (id, user_id, name) VALUES (?, ?, ?)', [`mistakes-${userId}`, userId, '測驗錯題本']);
        
        res.json({ success: true, message: '註冊成功！' });
    } catch (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
            res.status(400).json({ success: false, message: '此帳號已被使用' });
        } else {
            res.status(500).json({ success: false, message: '伺服器錯誤' });
        }
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for: ${username}`);
    const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (user) {
        res.json({ success: true, user: { id: user.id, username: user.username } });
    } else {
        res.status(401).json({ success: false, message: '帳號或密碼錯誤' });
    }
});

app.get('/api/books', auth, async (req, res) => {
    const books = await db.all('SELECT * FROM books WHERE user_id = ?', [req.userId]);
    for (let book of books) {
        const words = await db.all('SELECT * FROM words WHERE book_id = ?', [book.id]);
        book.words = words;
    }
    res.json(books);
});

app.post('/api/books', auth, async (req, res) => {
    const { id, name } = req.body;
    await db.run('INSERT INTO books (id, user_id, name) VALUES (?, ?, ?)', [id, req.userId, name]);
    res.json({ success: true });
});

app.delete('/api/books/:id', auth, async (req, res) => {
    const { id } = req.params;
    const book = await db.get('SELECT * FROM books WHERE id = ? AND user_id = ?', [id, req.userId]);
    if (!book) return res.status(403).json({ error: 'Forbidden' });
    await db.run('DELETE FROM words WHERE book_id = ?', [id]);
    await db.run('DELETE FROM books WHERE id = ?', [id]);
    res.json({ success: true });
});

app.post('/api/books/:id/words', auth, async (req, res) => {
    const { id } = req.params;
    const { word, def, pos } = req.body;
    const book = await db.get('SELECT * FROM books WHERE id = ? AND user_id = ?', [id, req.userId]);
    if (!book) return res.status(403).json({ error: 'Forbidden' });
    await db.run('INSERT INTO words (book_id, word, def, pos) VALUES (?, ?, ?, ?)', [id, word, def, pos]);
    res.json({ success: true });
});

app.delete('/api/words/:id', auth, async (req, res) => {
    const { id } = req.params;
    const word = await db.get(`
        SELECT words.* FROM words 
        JOIN books ON words.book_id = books.id 
        WHERE words.id = ? AND books.user_id = ?
    `, [id, req.userId]);
    if (!word) return res.status(403).json({ error: 'Forbidden' });
    await db.run('DELETE FROM words WHERE id = ?', [id]);
    res.json({ success: true });
});

app.get('/api/mastery', auth, async (req, res) => {
    const data = await db.all('SELECT * FROM mastery WHERE user_id = ?', [req.userId]);
    const result = {};
    data.forEach(row => {
        result[row.word] = row.status;
    });
    res.json(result);
});

app.post('/api/mastery', auth, async (req, res) => {
    const { word, status } = req.body;
    await db.run('INSERT OR REPLACE INTO mastery (user_id, word, status) VALUES (?, ?, ?)', [req.userId, word, status]);
    res.json({ success: true });
});

const uploadDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });
const upload = multer({ dest: uploadDir });

function parseGeminiResponse(data) {
    if (!data || typeof data !== 'object') return '';

    if (Array.isArray(data.predictions) && data.predictions.length > 0) {
        const first = data.predictions[0];
        if (typeof first === 'string') {
            return first;
        }
        if (first && typeof first === 'object') {
            if (Array.isArray(first.output) && first.output.length > 0) {
                const item = first.output[0];
                if (typeof item === 'string') return item;
                if (item && typeof item === 'object') return item.content || item.text || '';
            }
            return first.content || first.text || '';
        }
    }

    if (Array.isArray(data.output) && data.output.length > 0) {
        const first = data.output[0];
        if (typeof first === 'string') return first;
        if (first && typeof first === 'object') return first.content || first.text || '';
    }

    return '';
}

const { GoogleGenerativeAI } = require('@google/generative-ai');

app.post('/api/ocr', auth, upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const imagePath = req.file.path;
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

    if (!apiKey) {
        fs.unlink(imagePath, () => {});
        return res.status(500).json({ error: 'Gemini API key is not configured' });
    }

    try {
        const imageBytes = await fs.promises.readFile(imagePath);
        const imagePart = {
            inlineData: {
                data: imageBytes.toString('base64'),
                mimeType: req.file.mimetype
            }
        };

        // 核心修正點
        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: modelName });
        
        const result = await model.generateContent([
            imagePart,
            'Extract the text from this image and return only the recognized text.'
        ]);

        fs.unlink(imagePath, () => {});

        const text = result.response.text();
        if (!text) {
            return res.status(500).json({ error: 'Gemini OCR returned no text' });
        }

        res.json({ text });

    } catch (error) {
        fs.unlink(imagePath, () => {});
        console.error('Gemini OCR 發生錯誤:', error);
        return res.status(500).json({ error: 'Gemini OCR failed', details: error.message });
    }
});
app.use(express.static(path.join(__dirname, './')));

const HOST = '0.0.0.0';
const lanUrls = Object.values(os.networkInterfaces())
    .flat()
    .filter(iface => iface && iface.family === 'IPv4' && !iface.internal)
    .map(iface => `http://${iface.address}:${PORT}`);

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    if (lanUrls.length > 0) {
        console.log('LAN access URLs:');
        lanUrls.forEach(url => console.log(`  ${url}`));
    }
});
