const fs = require('fs');
const path = require('path');

function cleanLine(line) {
    line = line.trim();
    if (!line) return "";

    // Safely remove all individual square bracket blocks [ ... ]
    line = line.replace(/\[[^\]]*\]/g, ' ');

    // Remove leftover slashes and spaces
    line = line.replace(/[\s\/]+$/, '');
    line = line.replace(/^[\s\/]+/, '');

    // Clean up multiple spaces
    line = line.replace(/\s+/g, ' ').trim();
    return line;
}

function parseSingleWord(line) {
    const posList = ['n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', 'pron.', 'art.', 'aux.', 'vi.', 'vt.', 'a.', 'ad.', 'int.', 'num.'];

    let posFound = null;
    let posIdx = -1;

    for (const pos of posList) {
        const regex = new RegExp(`\\b${pos.replace('.', '\\.')}(?:\\b|\\s|$)`);
        const match = line.match(regex);
        if (match) {
            posFound = pos;
            posIdx = match.index;
            break;
        }
    }

    if (posFound && posIdx !== -1) {
        let word = line.slice(0, posIdx).trim();
        word = word.replace(/\s*\(\d+\)\s*$/, '');
        word = word.replace(/\d+$/, '').trim();

        const posPart = posFound;
        const definition = line.slice(posIdx + posFound.length).trim();

        let standardPos = posPart;
        if (standardPos === 'a.') {
            standardPos = 'adj.';
        } else if (standardPos === 'ad.') {
            standardPos = 'adv.';
        }

        return {
            word: word,
            pos: standardPos,
            def: definition
        };
    } else {
        // No POS found, split by English and Chinese transition
        let chineseStart = -1;
        for (let i = 0; i < line.length; i++) {
            if (line.charCodeAt(i) >= 0x4e00 && line.charCodeAt(i) <= 0x9fff) {
                chineseStart = i;
                break;
            }
        }

        if (chineseStart !== -1) {
            let word = line.slice(0, chineseStart).trim();
            word = word.replace(/\s*\(\d+\)\s*$/, '');
            word = word.replace(/\d+$/, '').trim();
            const definition = line.slice(chineseStart).trim();
            return {
                word: word,
                pos: '',
                def: definition
            };
        } else {
            return {
                word: line.trim(),
                pos: '',
                def: ''
            };
        }
    }
}

function parseCleanedLine(line) {
    if (!line) return [];

    // Split line dynamically if it contains two distinct English words
    // Pattern: [Chinese character] followed by optional spaces and then [English letters] representing Word 2
    const splitRegex = /([\u4e00-\u9fff]+[^a-zA-Z]*?)\s*([a-zA-Z]{2,}(?:\/[a-zA-Z]{2,})*(?:\([a-zA-Z\s]+\))?)\s+(art\.|adj\.|adv\.|prep\.|conj\.|pron\.|n\.|vi\.|vt\.|aux\.|v\.|a\.|[\u4e00-\u9fff])/g;
    
    const wordsFound = [];
    let lastIndex = 0;
    let match;
    
    while ((match = splitRegex.exec(line)) !== null) {
        const splitIndex = match.index + match[1].length;
        const segment = line.slice(lastIndex, splitIndex).trim();
        if (segment) {
            wordsFound.push(segment);
        }
        lastIndex = splitIndex;
    }
    
    const remaining = line.slice(lastIndex).trim();
    if (remaining) {
        wordsFound.push(remaining);
    }
    
    const results = [];
    for (const segment of wordsFound) {
        const parsed = parseSingleWord(segment);
        if (parsed && parsed.word) {
            results.push(parsed);
        }
    }
    
    return results;
}

function processFile(filePath) {
    console.log(`Processing ${filePath}...`);
    if (!fs.existsSync(filePath)) {
        console.error(`Error: ${filePath} not found!`);
        return { cleanedLines: [], structuredWords: [] };
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const rawLines = content.split(/\r?\n/).map(l => l.trim()).filter(l => l);

    const posList = ['n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', 'pron.', 'art.', 'aux.', 'vi.', 'vt.', 'a.', 'ad.', 'int.', 'num.'];

    // Pre-processing pass to merge lines where an English word is at the end and its definition continues next line
    const mergedLines = [];
    let idx = 0;
    while (idx < rawLines.length) {
        let line = rawLines[idx].trim();
        if (!line || line.includes("大考中心字彙表") || line.includes("LEVEL")) {
            idx++;
            continue;
        }

        line = cleanLine(line);

        while (idx + 1 < rawLines.length) {
            const nextRaw = rawLines[idx + 1].trim();
            if (!nextRaw) {
                idx++;
                continue;
            }
            const nextClean = cleanLine(nextRaw);
            
            // Check if current line ends with English letters (ignoring trailing POS indicators)
            const endsWithEnglish = /[a-zA-Z\/-]+$/.test(line);
            
            // Check if next line is a continuation (starts with POS or has no English)
            let nextIsContinuation = false;
            for (const pos of posList) {
                const regex = new RegExp(`^${pos.replace('.', '\\.')}(?:[^a-zA-Z]|$)`);
                if (regex.test(nextClean)) {
                    nextIsContinuation = true;
                    break;
                }
            }
            if (!nextIsContinuation) {
                const hasEnglishLetters = /[a-zA-Z]{2,}/.test(nextClean);
                if (!hasEnglishLetters) {
                    nextIsContinuation = true;
                }
            }
            
            if (endsWithEnglish && nextIsContinuation) {
                line = line + " " + nextClean;
                idx++;
            } else {
                break;
            }
        }
        
        mergedLines.push(line);
        idx++;
    }

    const structuredWords = [];
    let currentWord = null;

    for (let i = 0; i < mergedLines.length; i++) {
        const line = mergedLines[i];
        if (!line) continue;

        // Check if this entire line is a continuation of the previous word
        let isContinuation = false;
        let posFound = null;

        for (const pos of posList) {
            const regex = new RegExp(`^${pos.replace('.', '\\.')}(?:[^a-zA-Z]|$)`);
            const match = line.match(regex);
            if (match) {
                posFound = pos;
                isContinuation = true;
                break;
            }
        }

        // If no POS at start, check if it has NO English letters at all (just Chinese meaning)
        if (!isContinuation && currentWord) {
            const hasEnglishLetters = /[a-zA-Z]{2,}/.test(line);
            if (!hasEnglishLetters) {
                isContinuation = true;
            }
        }

        if (isContinuation && currentWord) {
            if (posFound) {
                const newDef = line.slice(posFound.length).trim();
                let standardPos = posFound;
                if (standardPos === 'a.') standardPos = 'adj.';
                else if (standardPos === 'ad.') standardPos = 'adv.';

                if (!currentWord.pos.includes(standardPos)) {
                    currentWord.pos = currentWord.pos ? `${currentWord.pos}, ${standardPos}` : standardPos;
                }
                currentWord.def = currentWord.def ? `${currentWord.def}；${newDef}` : newDef;
            } else {
                currentWord.def = currentWord.def ? `${currentWord.def}；${line}` : line;
            }
            continue;
        }

        // Otherwise, parse it normally as a new word entry (or entries)!
        const parsedList = parseCleanedLine(line);
        if (parsedList.length > 0) {
            parsedList.forEach(w => {
                structuredWords.push(w);
            });
            currentWord = structuredWords[structuredWords.length - 1];
        }
    }

    // Post-cleaning step
    structuredWords.forEach(item => {
        // Clean word field from stray trailing POS
        const posRegex = /\s+(art\.|adj\.|adv\.|prep\.|conj\.|pron\.|n\.|vi\.|vt\.|aux\.|v\.|a\.)\s*$/i;
        let match;
        while (match = item.word.match(posRegex)) {
            const foundPos = match[1];
            item.word = item.word.replace(posRegex, '').trim();
            if (!item.pos.includes(foundPos)) {
                item.pos = item.pos ? `${item.pos}, ${foundPos}` : foundPos;
            }
        }

        item.word = item.word.replace(/\s*\(\d+\)\s*/g, ' ').replace(/\s+\d+\s*$/g, '').trim();
        item.word = item.word.replace(/\/+$/, '').trim();
        item.word = item.word.replace(/\s*vt\.\s*\(\s*$/, '').trim();
        item.def = item.def.replace(/^[；;；]+|[；;；]+$/g, '').replace(/[；;；]+/g, '；').trim();
    });

    const cleanedLines = structuredWords.map(item => {
        const posStr = item.pos ? `${item.pos} ` : '';
        return `${item.word} ${posStr}${item.def}`;
    });

    return { cleanedLines, structuredWords };
}

function main() {
    const baseDir = "c:\\Vacalens";
    const allLevels = {};

    for (let lvl = 1; lvl <= 6; lvl++) {
        const fileName = `Level${lvl}.txt`;
        const filePath = path.join(baseDir, fileName);

        const { cleanedLines, structuredWords } = processFile(filePath);

        // Save cleaned file
        const cleanedFileName = `Level${lvl}_clean.txt`;
        const cleanedFilePath = path.join(baseDir, cleanedFileName);
        
        let cleanedContent = `大考中心字彙表 LEVEL ${lvl} (整理後，無KK音標)\n\n`;
        cleanedContent += cleanedLines.join('\n');
        
        fs.writeFileSync(cleanedFilePath, cleanedContent, 'utf-8');
        console.log(`Saved cleaned file to ${cleanedFilePath}`);

        allLevels[lvl] = structuredWords;
        console.log(`Level ${lvl} parsed ${structuredWords.length} words.`);
    }

    // Generate ceec_words.js
    const jsPath = path.join(baseDir, "ceec_words.js");
    let jsContent = "// 大考中心 7000 單字表 (Level 1-6) - 整理後無KK音標\n";
    jsContent += "const CEEC_WORDS = " + JSON.stringify(allLevels, null, 2) + ";\n";
    fs.writeFileSync(jsPath, jsContent, 'utf-8');
    console.log(`Saved combined JS data to ${jsPath}`);
}

main();
