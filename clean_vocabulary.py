import re
import os
import json

def clean_line(line):
    # Strip leading/trailing whitespaces
    line = line.strip()
    if not line:
        return ""
    
    # Remove line numbers if they were somehow captured, but the raw file shouldn't have them
    # Let's inspect raw lines. Raw lines don't have line numbers, they are just text.
    
    # The KK phonetic symbols are enclosed in square brackets [ ... ]
    # Sometimes there are multiple brackets like: [ˋæktɚ]/ [ˋæktrɪs]
    # We find the first '[' and the last ']' and remove everything in between (inclusive)
    first_bracket = line.find('[')
    last_bracket = line.rfind(']')
    
    if first_bracket != -1 and last_bracket != -1 and last_bracket > first_bracket:
        # Extract everything before the first bracket and everything after the last bracket
        before = line[:first_bracket]
        after = line[last_bracket+1:]
        
        # Sometimes there's a leftover slash before or after the brackets
        before = before.rstrip(' /')
        after = after.lstrip(' /')
        
        line = before + " " + after
    
    # Clean up multiple spaces
    line = re.sub(r'\s+', ' ', line).strip()
    return line

def parse_cleaned_line(line):
    """
    Parses a cleaned line into a structured word, POS, and definition.
    Example input: "able adj. 能，可以"
    Example input: "according to 根據"
    Example input: "agree(ment) vi. 同意"
    """
    if not line:
        return None
    
    # List of common parts of speech
    pos_list = ['n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', 'pron.', 'art.', 'aux.', 'vi.', 'vt.', 'a.', 'ad.', 'int.', 'num.']
    
    # Try to find if any POS is in the line
    pos_found = None
    pos_idx = -1
    
    # Search for POS. We look for POS with spaces around them or at the boundaries
    for pos in pos_list:
        # Use regex to find pos as a distinct token
        pattern = r'\b' + re.escape(pos) + r'\b'
        match = re.search(pattern, line)
        if match:
            pos_found = pos
            pos_idx = match.start()
            break
            
    if pos_found and pos_idx != -1:
        word = line[:pos_idx].strip()
        # Clean word from numbering if any (e.g. "account (1)" -> "account")
        word = re.sub(r'\s*\(\d+\)\s*$', '', word).strip()
        word = re.sub(r'\d+$', '', word).strip() # e.g. "beam1" -> "beam"
        
        pos_part = pos_found
        definition = line[pos_idx + len(pos_found):].strip()
        
        # Map a. -> adj. and ad. -> adv.
        standard_pos = pos_part
        if standard_pos == 'a.':
            standard_pos = 'adj.'
        elif standard_pos == 'ad.':
            standard_pos = 'adv.'
            
        return {
            'word': word,
            'pos': standard_pos,
            'def': definition
        }
    else:
        # No POS found, split by space between English and Chinese
        # Find where Chinese characters start
        chinese_start = -1
        for i, char in enumerate(line):
            if '\u4e00' <= char <= '\u9fff':
                chinese_start = i
                break
        
        if chinese_start != -1:
            word = line[:chinese_start].strip()
            word = re.sub(r'\s*\(\d+\)\s*$', '', word).strip()
            word = re.sub(r'\d+$', '', word).strip()
            definition = line[chinese_start:].strip()
            return {
                'word': word,
                'pos': '',
                'def': definition
            }
        else:
            return {
                'word': line.strip(),
                'pos': '',
                'def': ''
            }

def process_file(file_path):
    print(f"Processing {file_path}...")
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found!")
        return [], []

    with open(file_path, 'r', encoding='utf-8') as f:
        raw_lines = f.readlines()
        
    cleaned_lines = []
    structured_words = []
    
    # First, let's filter and merge split lines
    merged_lines = []
    i = 0
    while i < len(raw_lines):
        line = raw_lines[i].strip()
        # Skip header lines
        if "大考中心字彙表" in line or "LEVEL" in line:
            i += 1
            continue
        if not line:
            i += 1
            continue
            
        # Check if this line is just a word or a number (like beam1 or 1 or 2)
        # and the next line has phonetic symbols or details
        if i + 1 < len(raw_lines):
            next_line = raw_lines[i+1].strip()
            # If current line is very short and only has word/number, and next line has brackets
            is_word_only = not '[' in line and not any('\u4e00' <= c <= '\u9fff' for c in line)
            has_brackets_next = '[' in next_line
            
            if is_word_only and has_brackets_next:
                # Merge them
                line = line + " " + next_line
                i += 1
                
        merged_lines.append(line)
        i += 1
        
    for line in merged_lines:
        cleaned = clean_line(line)
        if cleaned:
            cleaned_lines.append(cleaned)
            parsed = parse_cleaned_line(cleaned)
            if parsed and parsed['word']:
                structured_words.append(parsed)
                
    return cleaned_lines, structured_words

def main():
    base_dir = r"c:\Vacalens"
    all_levels = {}
    
    for lvl in range(1, 7):
        file_name = f"Level{lvl}.txt"
        file_path = os.path.join(base_dir, file_name)
        
        cleaned_lines, structured_words = process_file(file_path)
        
        # Save cleaned file
        cleaned_file_name = f"Level{lvl}_clean.txt"
        cleaned_file_path = os.path.join(base_dir, cleaned_file_name)
        with open(cleaned_file_path, 'w', encoding='utf-8') as f:
            f.write(f"大考中心字彙表 LEVEL {lvl} (整理後，無KK音標)\n\n")
            for line in cleaned_lines:
                f.write(line + "\n")
        print(f"Saved cleaned file to {cleaned_file_path}")
        
        all_levels[lvl] = structured_words
        print(f"Level {lvl} parsed {len(structured_words)} words.")
        
    # Generate ceec_words.js
    js_path = os.path.join(base_dir, "ceec_words.js")
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write("// 大考中心 7000 單字表 (Level 1-6) - 整理後無KK音標\n")
        f.write("const CEEC_WORDS = ")
        json.dump(all_levels, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Saved combined JS data to {js_path}")

if __name__ == "__main__":
    main()
