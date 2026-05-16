// --- Data ---
const CEEC_WORDS = {
    1: [
        { word: 'apple', def: '蘋果' }, { word: 'banana', def: '香蕉' }, { word: 'cat', def: '貓' },
        { word: 'dog', def: '狗' }, { word: 'elephant', def: '大象' }, { word: 'fish', def: '魚' },
        { word: 'grape', def: '葡萄' }, { word: 'house', def: '房子' }, { word: 'ice', def: '冰' },
        { word: 'juice', def: '果汁' }, { word: 'kite', def: '風箏' }, { word: 'lemon', def: '檸檬' }
    ],
    2: [
        { word: 'abandon', def: '放棄' }, { word: 'ability', def: '能力' }, { word: 'abroad', def: '在國外' },
        { word: 'absence', def: '缺席' }, { word: 'accent', def: '口音' }, { word: 'accept', def: '接受' },
        { word: 'accident', def: '事故' }, { word: 'account', def: '帳戶' }, { word: 'achieve', def: '達成' },
        { word: 'active', def: '活躍的' }, { word: 'admire', def: '欽佩' }, { word: 'advice', def: '建議' }
    ],
    3: [
        { word: 'barrier', def: '障礙' }, { word: 'battery', def: '電池' }, { word: 'beneath', def: '在...之下' },
        { word: 'benefit', def: '利益' }, { word: 'beyond', def: '超出' }, { word: 'biology', def: '生物學' },
        { word: 'blanket', def: '毯子' }, { word: 'blessing', def: '祝福' }, { word: 'boundary', def: '邊界' },
        { word: 'bravery', def: '勇氣' }, { word: 'brilliant', def: '輝煌的' }, { word: 'broadcast', def: '廣播' }
    ],
    4: [
        { word: 'calculate', def: '計算' }, { word: 'campaign', def: '活動' }, { word: 'capacity', def: '容量' },
        { word: 'category', def: '類別' }, { word: 'celebrate', def: '慶祝' }, { word: 'champion', def: '冠軍' },
        { word: 'character', def: '角色' }, { word: 'charity', def: '慈善' }, { word: 'chemical', def: '化學的' },
        { word: 'cherish', def: '珍惜' }, { word: 'civilized', def: '文明的' }, { word: 'classical', def: '古典的' }
    ],
    5: [
        { word: 'democracy', def: '民主' }, { word: 'departure', def: '離開' }, { word: 'desperate', def: '拼命的' },
        { word: 'determine', def: '決定' }, { word: 'diagnosis', def: '診斷' }, { word: 'discipline', def: '紀律' },
        { word: 'discovery', def: '發現' }, { word: 'distinction', def: '區別' }, { word: 'dominate', def: '支配' },
        { word: 'dramatic', def: '戲劇性的' }, { word: 'efficient', def: '有效率的' }, { word: 'elaborate', def: '精心的' }
    ],
    6: [
        { word: 'ambiguous', def: '模稜兩可的' }, { word: 'benevolent', def: '仁慈的' }, { word: 'capricious', def: '反覆無常的' },
        { word: 'deference', def: '尊崇' }, { word: 'eloquence', def: '雄辯' }, { word: 'fastidious', def: '挑剔的' },
        { word: 'gregarious', def: '群居的' }, { word: 'hierarchy', def: '階級制度' }, { word: 'immutable', def: '不可變的' },
        { word: 'juxtapose', def: '並列' }, { word: 'laconic', def: '簡潔的' }, { word: 'magnanimous', def: '寬宏大量的' }
    ]
};

// --- State ---
let books = JSON.parse(localStorage.getItem('vaca-books')) || [
    { id: 'mistakes', name: '測驗錯題本', words: [] }
];
let currentBookId = null;
let currentQuiz = {
    words: [],
    currentIndex: 0,
    score: 0,
    wrongWords: [],
    level: null
};

// --- DOM Elements ---
const pages = {
    dashboard: document.getElementById('dashboard'),
    bookDetail: document.getElementById('book-detail'),
    quizPage: document.getElementById('quiz-page')
};

// --- Core Functions ---
function saveBooks() {
    localStorage.setItem('vaca-books', JSON.stringify(books));
}

function navigateTo(pageId) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageId].classList.add('active');
    window.scrollTo(0, 0);
}

// --- Dashboard Logic ---
function renderBookList() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="count">${book.words.length} 單字</div>
            <h3>${book.name}</h3>
        `;
        card.onclick = () => openBook(book.id);
        list.appendChild(card);
    });
}

function openBook(bookId) {
    currentBookId = bookId;
    const book = books.find(b => b.id === bookId);
    document.getElementById('current-book-name').textContent = book.name;
    renderWordList();
    navigateTo('bookDetail');
}

function renderWordList() {
    const book = books.find(b => b.id === currentBookId);
    const list = document.getElementById('word-list');
    list.innerHTML = '';
    
    if (book.words.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">目前沒有單字，快點新增吧！</p>';
        return;
    }

    book.words.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'word-item';
        div.innerHTML = `
            <div class="word-info">
                <h4>${item.word}</h4>
                <p>${item.def}</p>
            </div>
            <div class="word-actions">
                <button class="icon-btn delete-word" data-index="${index}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
            </div>
        `;
        div.querySelector('.delete-word').onclick = (e) => {
            e.stopPropagation();
            deleteWord(index);
        };
        list.appendChild(div);
    });
}

function deleteWord(index) {
    const book = books.find(b => b.id === currentBookId);
    book.words.splice(index, 1);
    saveBooks();
    renderWordList();
    renderBookList();
}

// --- Quiz Logic ---
function startQuiz(level = null, bookWords = null) {
    let quizWords = [];
    if (level) {
        // 7000 words quiz: pick 10 random
        const source = CEEC_WORDS[level];
        quizWords = [...source].sort(() => 0.5 - Math.random()).slice(0, 10);
        currentQuiz.level = `Level ${level}`;
    } else if (bookWords) {
        // Book quiz: pick all or max 20
        quizWords = [...bookWords].sort(() => 0.5 - Math.random()).slice(0, 20);
        currentQuiz.level = '單字本測驗';
    }

    if (quizWords.length < 4 && !level) {
        alert('單字量不足（至少需要 4 個單字才能測驗）');
        return;
    }

    currentQuiz.words = quizWords;
    currentQuiz.currentIndex = 0;
    currentQuiz.score = 0;
    currentQuiz.wrongWords = [];
    
    navigateTo('quizPage');
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz.words[currentQuiz.currentIndex];
    const total = currentQuiz.words.length;
    
    document.getElementById('progress-bar').style.width = `${(currentQuiz.currentIndex / total) * 100}%`;
    document.getElementById('q-count').textContent = `${currentQuiz.currentIndex + 1} / ${total}`;
    document.getElementById('q-category').textContent = currentQuiz.level;
    document.getElementById('q-word').textContent = q.word;

    // Generate options
    const options = [q.def];
    // Pick 3 random decoys from the same level or current book
    const allWords = currentQuiz.level.includes('Level') 
        ? CEEC_WORDS[currentQuiz.level.split(' ')[1]] 
        : currentQuiz.words;
    
    const decoys = allWords
        .filter(w => w.def !== q.def)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.def);
    
    options.push(...decoys);
    options.sort(() => 0.5 - Math.random());

    const grid = document.getElementById('q-options');
    grid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(opt, q.def, btn);
        grid.appendChild(btn);
    });
}

function handleAnswer(selected, correct, btn) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        currentQuiz.score++;
    } else {
        btn.classList.add('wrong');
        // Find and highlight correct answer
        buttons.forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
        });
        // Save to wrong words for later storage
        currentQuiz.wrongWords.push(currentQuiz.words[currentQuiz.currentIndex]);
    }

    setTimeout(() => {
        currentQuiz.currentIndex++;
        if (currentQuiz.currentIndex < currentQuiz.words.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 1200);
}

function finishQuiz() {
    // Add wrong words to "Mistakes" book if from 7000 words
    if (currentQuiz.wrongWords.length > 0) {
        const mistakeBook = books.find(b => b.id === 'mistakes');
        currentQuiz.wrongWords.forEach(w => {
            if (!mistakeBook.words.find(mw => mw.word === w.word)) {
                mistakeBook.words.push(w);
            }
        });
        saveBooks();
    }

    alert(`測驗結束！得分：${currentQuiz.score} / ${currentQuiz.words.length}\n${currentQuiz.wrongWords.length} 個錯題已加入錯題本。`);
    renderBookList();
    navigateTo('dashboard');
}

// --- Camera & AI Logic ---
let stream = null;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        document.getElementById('video').srcObject = stream;
        document.getElementById('camera-modal').classList.add('active');
    } catch (err) {
        alert('無法開啟相機: ' + err.message);
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    document.getElementById('camera-modal').classList.remove('active');
}

async function captureAndScan() {
    // Capture frame (simulated)
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    // UI Feedback
    const btn = document.getElementById('capture-btn');
    btn.textContent = '掃描中...';
    btn.disabled = true;

    // Simulate AI scanning (Gemini 2.5 Flash placeholder)
    console.log('Sending to Gemini AI...');
    await new Promise(r => setTimeout(r, 2000)); // Simulate delay

    // Fake results for demonstration
    const scannedWords = [
        { word: 'innovation', def: '創新' },
        { word: 'perspective', def: '觀點' }
    ];

    const book = books.find(b => b.id === currentBookId);
    scannedWords.forEach(w => {
        if (!book.words.find(bw => bw.word === w.word)) {
            book.words.push(w);
        }
    });

    saveBooks();
    renderWordList();
    renderBookList();
    stopCamera();
    btn.textContent = '';
    btn.disabled = false;
    alert('AI 掃描完成！已加入 2 個單字。');
}

// --- Event Listeners ---
document.getElementById('create-book-btn').onclick = () => {
    document.getElementById('book-modal').classList.add('active');
};

document.getElementById('cancel-book').onclick = () => {
    document.getElementById('book-modal').classList.remove('active');
};

document.getElementById('save-book').onclick = () => {
    const name = document.getElementById('input-book-name').value.trim();
    if (name) {
        const newBook = {
            id: Date.now().toString(),
            name: name,
            words: []
        };
        books.push(newBook);
        saveBooks();
        renderBookList();
        document.getElementById('book-modal').classList.remove('active');
        document.getElementById('input-book-name').value = '';
    }
};

document.querySelectorAll('.level-btn').forEach(btn => {
    btn.onclick = () => startQuiz(parseInt(btn.dataset.level));
});

document.querySelector('.back-btn').onclick = () => navigateTo('dashboard');
document.getElementById('home-btn').onclick = () => navigateTo('dashboard');
document.getElementById('books-btn').onclick = () => navigateTo('dashboard');

document.getElementById('add-word-btn').onclick = () => {
    document.getElementById('word-modal').classList.add('active');
};

document.getElementById('cancel-word').onclick = () => {
    document.getElementById('word-modal').classList.remove('active');
};

document.getElementById('save-word').onclick = () => {
    const word = document.getElementById('input-word').value.trim();
    const def = document.getElementById('input-def').value.trim();
    if (word && def) {
        const book = books.find(b => b.id === currentBookId);
        book.words.push({ word, def });
        saveBooks();
        renderWordList();
        renderBookList();
        document.getElementById('word-modal').classList.remove('active');
        document.getElementById('input-word').value = '';
        document.getElementById('input-def').value = '';
    }
};

document.getElementById('quiz-book-btn').onclick = () => {
    const book = books.find(b => b.id === currentBookId);
    startQuiz(null, book.words);
};

document.getElementById('scan-btn').onclick = startCamera;
document.getElementById('close-camera').onclick = stopCamera;
document.getElementById('capture-btn').onclick = captureAndScan;

// --- Init ---
renderBookList();
