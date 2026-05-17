// 大考中心 7000 單字表 (Level 1-6) - 整理後無KK音標
const CEEC_WORDS = {
  "1": [
    {
      "word": "a/an",
      "pos": "art.",
      "def": "一"
    },
    {
      "word": "able",
      "pos": "adj.",
      "def": "能，可以"
    },
    {
      "word": "about",
      "pos": "prep.",
      "def": "關於"
    },
    {
      "word": "above",
      "pos": "adv., prep.",
      "def": "在…上面"
    },
    {
      "word": "according to",
      "pos": "",
      "def": "根據"
    },
    {
      "word": "across",
      "pos": "prep.",
      "def": "穿過"
    },
    {
      "word": "act",
      "pos": "vt.",
      "def": "扮演"
    },
    {
      "word": "action",
      "pos": "n.",
      "def": "行動"
    },
    {
      "word": "actor/actress",
      "pos": "n.",
      "def": "男演員/女演員"
    },
    {
      "word": "add",
      "pos": "vt.",
      "def": "添加"
    },
    {
      "word": "address",
      "pos": "n.",
      "def": "地址"
    },
    {
      "word": "adult",
      "pos": "n.",
      "def": "成人"
    },
    {
      "word": "afraid",
      "pos": "adj.",
      "def": "害怕"
    },
    {
      "word": "after",
      "pos": "prep.",
      "def": "在…以後"
    },
    {
      "word": "afternoon",
      "pos": "n.",
      "def": "午後"
    },
    {
      "word": "again",
      "pos": "adv.",
      "def": "再"
    },
    {
      "word": "against",
      "pos": "prep.",
      "def": "反對"
    },
    {
      "word": "age",
      "pos": "n.",
      "def": "年齡"
    },
    {
      "word": "ago",
      "pos": "adv.",
      "def": "在…之前"
    },
    {
      "word": "agree(ment)",
      "pos": "vi.",
      "def": "同意"
    },
    {
      "word": "ahead",
      "pos": "adv.",
      "def": "在前"
    },
    {
      "word": "air",
      "pos": "n.",
      "def": "空氣"
    },
    {
      "word": "airmail",
      "pos": "n.",
      "def": "航空郵政"
    },
    {
      "word": "airplane/plane",
      "pos": "n.",
      "def": "飛機"
    },
    {
      "word": "airport",
      "pos": "n.",
      "def": "機場"
    },
    {
      "word": "all",
      "pos": "adj.",
      "def": "一切的"
    },
    {
      "word": "allow",
      "pos": "vt.",
      "def": "允許"
    },
    {
      "word": "almost",
      "pos": "adv.",
      "def": "幾乎"
    },
    {
      "word": "alone",
      "pos": "adj.",
      "def": "adv. 單獨的"
    },
    {
      "word": "along",
      "pos": "prep.",
      "def": "沿著"
    },
    {
      "word": "already",
      "pos": "adv.",
      "def": "已經"
    },
    {
      "word": "also",
      "pos": "adv.",
      "def": "也"
    },
    {
      "word": "always",
      "pos": "adv.",
      "def": "總是"
    },
    {
      "word": "am (第一人稱)",
      "pos": "vi.",
      "def": "是"
    },
    {
      "word": "among",
      "pos": "prep.",
      "def": "在…之中"
    },
    {
      "word": "and",
      "pos": "conj.",
      "def": "和"
    },
    {
      "word": "anger",
      "pos": "n.",
      "def": "憤怒"
    },
    {
      "word": "angry",
      "pos": "adj.",
      "def": "生氣的"
    },
    {
      "word": "animal",
      "pos": "n.",
      "def": "動物"
    },
    {
      "word": "another",
      "pos": "adj.",
      "def": "另外的"
    },
    {
      "word": "answer",
      "pos": "n.",
      "def": "/ vt. 回答"
    },
    {
      "word": "ant",
      "pos": "n.",
      "def": "螞蟻"
    },
    {
      "word": "any",
      "pos": "adj.",
      "def": "任何的"
    },
    {
      "word": "anything",
      "pos": "n.",
      "def": "任何東西"
    },
    {
      "word": "ape",
      "pos": "n.",
      "def": "大猩猩"
    },
    {
      "word": "appear",
      "pos": "vi.",
      "def": "出現"
    },
    {
      "word": "apple",
      "pos": "n.",
      "def": "蘋果"
    },
    {
      "word": "April/Apr.",
      "pos": "n.",
      "def": "四月"
    },
    {
      "word": "are (第二人稱)",
      "pos": "vi.",
      "def": "是"
    },
    {
      "word": "area",
      "pos": "n.",
      "def": "面積"
    },
    {
      "word": "arm",
      "pos": "n.",
      "def": "手臂"
    },
    {
      "word": "army",
      "pos": "n.",
      "def": "軍隊"
    },
    {
      "word": "around",
      "pos": "adv.",
      "def": "/ prep. 到處"
    },
    {
      "word": "art",
      "pos": "n.",
      "def": "藝術"
    },
    {
      "word": "as",
      "pos": "adv., prep.",
      "def": "conj. 當作、如同"
    },
    {
      "word": "ask",
      "pos": "vt.",
      "def": "詢問"
    },
    {
      "word": "at",
      "pos": "prep.",
      "def": "在…地點"
    },
    {
      "word": "August/Aug.",
      "pos": "n.",
      "def": "八月"
    },
    {
      "word": "aunt/auntie/aunty",
      "pos": "n.",
      "def": "伯母"
    },
    {
      "word": "autumn/fall",
      "pos": "n.",
      "def": "秋天"
    },
    {
      "word": "away",
      "pos": "adv.",
      "def": "隔開"
    },
    {
      "word": "baby",
      "pos": "n.",
      "def": "嬰兒"
    },
    {
      "word": "back",
      "pos": "n.",
      "def": "背部"
    },
    {
      "word": "bad",
      "pos": "adj.",
      "def": "壞的"
    },
    {
      "word": "bag",
      "pos": "n.",
      "def": "袋子"
    },
    {
      "word": "ball",
      "pos": "n.",
      "def": "球"
    },
    {
      "word": "balloon",
      "pos": "n.",
      "def": "氣球"
    },
    {
      "word": "banana",
      "pos": "n.",
      "def": "香蕉"
    },
    {
      "word": "band",
      "pos": "n.",
      "def": "綁帶"
    },
    {
      "word": "bank",
      "pos": "n.",
      "def": "(1)銀行 (2) 河堤"
    },
    {
      "word": "bar",
      "pos": "n.",
      "def": "棒；酒吧"
    },
    {
      "word": "barber",
      "pos": "n.",
      "def": "理髮師"
    },
    {
      "word": "base",
      "pos": "n.",
      "def": "基底"
    },
    {
      "word": "baseball",
      "pos": "n.",
      "def": "棒球"
    },
    {
      "word": "basic",
      "pos": "adj.",
      "def": "基礎的"
    },
    {
      "word": "basket",
      "pos": "n.",
      "def": "籃子"
    },
    {
      "word": "basketball",
      "pos": "n.",
      "def": "籃球"
    },
    {
      "word": "bat",
      "pos": "n.",
      "def": "(1)球棒 (2)蝙蝠"
    },
    {
      "word": "bath",
      "pos": "n.",
      "def": "沐浴；浴缸"
    },
    {
      "word": "bathe",
      "pos": "vt.",
      "def": "浸洗"
    },
    {
      "word": "bathroom",
      "pos": "n.",
      "def": "浴室"
    },
    {
      "word": "be",
      "pos": "vi.",
      "def": "是"
    },
    {
      "word": "beach",
      "pos": "n.",
      "def": "海灘"
    },
    {
      "word": "bear",
      "pos": "n.",
      "def": "(1) 熊"
    },
    {
      "word": "beat",
      "pos": "vt.",
      "def": "打、擊"
    },
    {
      "word": "beautiful",
      "pos": "adj.",
      "def": "美麗的"
    },
    {
      "word": "beauty",
      "pos": "n.",
      "def": "美麗"
    },
    {
      "word": "because",
      "pos": "conj.",
      "def": "因為"
    },
    {
      "word": "become",
      "pos": "vi.",
      "def": "成為"
    },
    {
      "word": "bed",
      "pos": "n.",
      "def": "床"
    },
    {
      "word": "bee",
      "pos": "n.",
      "def": "蜜蜂"
    },
    {
      "word": "before",
      "pos": "prep.",
      "def": "在…之前"
    },
    {
      "word": "begin",
      "pos": "vt.",
      "def": "開始"
    },
    {
      "word": "behind",
      "pos": "prep.",
      "def": "在…後面"
    },
    {
      "word": "believe",
      "pos": "vt.",
      "def": "相信"
    },
    {
      "word": "bell",
      "pos": "n.",
      "def": "鈴"
    },
    {
      "word": "belong",
      "pos": "vi.",
      "def": "屬於"
    },
    {
      "word": "below",
      "pos": "prep.",
      "def": "在…下面"
    },
    {
      "word": "beside",
      "pos": "prep.",
      "def": "在旁邊"
    },
    {
      "word": "best",
      "pos": "adj.",
      "def": "最好的"
    },
    {
      "word": "better",
      "pos": "adj.",
      "def": "較好的"
    },
    {
      "word": "between",
      "pos": "prep.",
      "def": "在…之間"
    },
    {
      "word": "bicycle/bike",
      "pos": "n.",
      "def": "腳踏車"
    },
    {
      "word": "big",
      "pos": "adj.",
      "def": "大的"
    },
    {
      "word": "bird",
      "pos": "n.",
      "def": "鳥"
    },
    {
      "word": "birth",
      "pos": "n.",
      "def": "出生"
    },
    {
      "word": "bit",
      "pos": "n.",
      "def": "一點"
    },
    {
      "word": "bite",
      "pos": "vt.",
      "def": "咬"
    },
    {
      "word": "black",
      "pos": "adj.",
      "def": "黑色的"
    },
    {
      "word": "block",
      "pos": "n.",
      "def": "街區"
    },
    {
      "word": "blood",
      "pos": "n.",
      "def": "血"
    },
    {
      "word": "blow",
      "pos": "vt.",
      "def": "吹"
    },
    {
      "word": "blue",
      "pos": "adj.",
      "def": "藍色的"
    },
    {
      "word": "boat",
      "pos": "n.",
      "def": "小船"
    },
    {
      "word": "body",
      "pos": "n.",
      "def": "身體"
    },
    {
      "word": "bone",
      "pos": "n.",
      "def": "骨頭"
    },
    {
      "word": "book",
      "pos": "n.",
      "def": "書 (2) vt.預定"
    },
    {
      "word": "born",
      "pos": "adj.",
      "def": "出生的"
    },
    {
      "word": "both adj./adv.",
      "pos": "",
      "def": "兩者都"
    },
    {
      "word": "bottom",
      "pos": "n.",
      "def": "底部"
    },
    {
      "word": "bowl",
      "pos": "n.",
      "def": "碗"
    },
    {
      "word": "box",
      "pos": "n.",
      "def": "箱子"
    },
    {
      "word": "boy",
      "pos": "n.",
      "def": "男孩"
    },
    {
      "word": "brave",
      "pos": "adj.",
      "def": "勇敢的"
    },
    {
      "word": "bread",
      "pos": "n.",
      "def": "麵包"
    },
    {
      "word": "break",
      "pos": "vt.",
      "def": "打破"
    },
    {
      "word": "breakfast",
      "pos": "n.",
      "def": "早餐"
    },
    {
      "word": "bridge",
      "pos": "n.",
      "def": "橋"
    },
    {
      "word": "bright",
      "pos": "adj.",
      "def": "明亮的"
    },
    {
      "word": "bring",
      "pos": "vt.",
      "def": "帶來"
    },
    {
      "word": "brother",
      "pos": "n.",
      "def": "兄弟"
    },
    {
      "word": "brown",
      "pos": "adj.",
      "def": "褐色"
    },
    {
      "word": "bug",
      "pos": "n.",
      "def": "蟲子"
    },
    {
      "word": "build",
      "pos": "vt.",
      "def": "建造"
    },
    {
      "word": "building",
      "pos": "n.",
      "def": "建築物"
    },
    {
      "word": "bus",
      "pos": "n.",
      "def": "巴士"
    },
    {
      "word": "busy",
      "pos": "adj.",
      "def": "忙碌的"
    },
    {
      "word": "but",
      "pos": "conj.",
      "def": "但是"
    },
    {
      "word": "butter",
      "pos": "n.",
      "def": "奶油"
    },
    {
      "word": "butterfly",
      "pos": "n.",
      "def": "蝴蝶"
    },
    {
      "word": "buy",
      "pos": "vt.",
      "def": "買"
    },
    {
      "word": "by",
      "pos": "prep.",
      "def": "透過；在…旁邊"
    },
    {
      "word": "cage",
      "pos": "n.",
      "def": "獸籠"
    },
    {
      "word": "cake",
      "pos": "n.",
      "def": "蛋糕"
    },
    {
      "word": "call",
      "pos": "vt.",
      "def": "呼叫"
    },
    {
      "word": "camel",
      "pos": "n.",
      "def": "駱駝"
    },
    {
      "word": "camera",
      "pos": "n.",
      "def": "照相機"
    },
    {
      "word": "camp",
      "pos": "n.",
      "def": "營地"
    },
    {
      "word": "can",
      "pos": "aux.",
      "def": "可以 (2) n.罐頭"
    },
    {
      "word": "candy/sweet",
      "pos": "n.",
      "def": "糖果"
    },
    {
      "word": "cap",
      "pos": "n.",
      "def": "棒球帽"
    },
    {
      "word": "car",
      "pos": "n.",
      "def": "汽車"
    },
    {
      "word": "card",
      "pos": "n.",
      "def": "紙牌"
    },
    {
      "word": "care",
      "pos": "vi.",
      "def": "關心"
    },
    {
      "word": "careful",
      "pos": "adj.",
      "def": "小心的"
    },
    {
      "word": "carry",
      "pos": "",
      "def": "用手)提、搬、扛"
    },
    {
      "word": "case",
      "pos": "n.",
      "def": "(1)箱子 (2)案件"
    },
    {
      "word": "cat",
      "pos": "n.",
      "def": "貓"
    },
    {
      "word": "catch",
      "pos": "vt.",
      "def": "接住、抓住"
    },
    {
      "word": "cause",
      "pos": "n.",
      "def": "原因"
    },
    {
      "word": "cent",
      "pos": "n.",
      "def": "分(美元)"
    },
    {
      "word": "center",
      "pos": "n.",
      "def": "中心"
    },
    {
      "word": "certain",
      "pos": "adj.",
      "def": "確切的"
    },
    {
      "word": "chair",
      "pos": "n.",
      "def": "椅子"
    },
    {
      "word": "chance",
      "pos": "n.",
      "def": "機會"
    },
    {
      "word": "chart",
      "pos": "n.",
      "def": "圖表"
    },
    {
      "word": "chase",
      "pos": "vt.",
      "def": "追捕"
    },
    {
      "word": "check",
      "pos": "vt.",
      "def": "檢查"
    },
    {
      "word": "chick",
      "pos": "n.",
      "def": "小雞"
    },
    {
      "word": "chicken",
      "pos": "n.",
      "def": "雞"
    },
    {
      "word": "chief",
      "pos": "n.",
      "def": "領袖"
    },
    {
      "word": "child",
      "pos": "n.",
      "def": "小孩"
    },
    {
      "word": "Christmas/Xmas",
      "pos": "n.",
      "def": "聖誕節"
    },
    {
      "word": "church",
      "pos": "n.",
      "def": "教堂"
    },
    {
      "word": "city",
      "pos": "n.",
      "def": "城市"
    },
    {
      "word": "class",
      "pos": "n.",
      "def": "班級、等級"
    },
    {
      "word": "clean",
      "pos": "adj.",
      "def": "乾淨的"
    },
    {
      "word": "clear",
      "pos": "adj.",
      "def": "清晰的"
    },
    {
      "word": "climb",
      "pos": "vi.",
      "def": "/vt. 爬"
    },
    {
      "word": "clock",
      "pos": "n.",
      "def": "時鐘"
    },
    {
      "word": "close",
      "pos": "adj.",
      "def": "接近的 (2) vt. 關"
    },
    {
      "word": "cloud",
      "pos": "n.",
      "def": "雲"
    },
    {
      "word": "coast",
      "pos": "n.",
      "def": "海岸"
    },
    {
      "word": "coat",
      "pos": "n.",
      "def": "大衣"
    },
    {
      "word": "cocoa",
      "pos": "n.",
      "def": "可可豆"
    },
    {
      "word": "coffee",
      "pos": "n.",
      "def": "咖啡"
    },
    {
      "word": "cola/Coke",
      "pos": "n.",
      "def": "可樂"
    },
    {
      "word": "cold",
      "pos": "adj.",
      "def": "冷的"
    },
    {
      "word": "color",
      "pos": "n.",
      "def": "顏色"
    },
    {
      "word": "come",
      "pos": "vi.",
      "def": "來"
    },
    {
      "word": "common",
      "pos": "adj.",
      "def": "普通的"
    },
    {
      "word": "continue",
      "pos": "vi.",
      "def": "繼續"
    },
    {
      "word": "cook",
      "pos": "vt.",
      "def": "煮"
    },
    {
      "word": "cookie/cooky",
      "pos": "n.",
      "def": "餅乾"
    },
    {
      "word": "cool",
      "pos": "adj.",
      "def": "酷的"
    },
    {
      "word": "corn",
      "pos": "n.",
      "def": "玉米"
    },
    {
      "word": "correct",
      "pos": "adj.",
      "def": "正確的"
    },
    {
      "word": "cost vi.",
      "pos": "n.",
      "def": "花費"
    },
    {
      "word": "count",
      "pos": "vt.",
      "def": "計算"
    },
    {
      "word": "country",
      "pos": "n.",
      "def": "國家"
    },
    {
      "word": "course",
      "pos": "n.",
      "def": "路線"
    },
    {
      "word": "cover",
      "pos": "vt.",
      "def": "覆蓋"
    },
    {
      "word": "cow",
      "pos": "n.",
      "def": "母牛"
    },
    {
      "word": "cowboy",
      "pos": "n.",
      "def": "牛仔"
    },
    {
      "word": "crow",
      "pos": "n.",
      "def": "(1) 烏鴉；啼叫聲"
    },
    {
      "word": "cry",
      "pos": "vi.",
      "def": "哭"
    },
    {
      "word": "cub",
      "pos": "n.",
      "def": "幼獸"
    },
    {
      "word": "cup",
      "pos": "n.",
      "def": "杯子"
    },
    {
      "word": "cut",
      "pos": "vt.",
      "def": "切、剪"
    },
    {
      "word": "cute",
      "pos": "adj.",
      "def": "可愛的"
    },
    {
      "word": "daddy/dad/papa/pa/pop / / /",
      "pos": "n.",
      "def": "爸爸"
    },
    {
      "word": "dance",
      "pos": "vi.",
      "def": "跳舞"
    },
    {
      "word": "dancer",
      "pos": "n.",
      "def": "舞蹈家"
    },
    {
      "word": "danger",
      "pos": "n.",
      "def": "危險"
    },
    {
      "word": "dark",
      "pos": "adj.",
      "def": "黑暗的"
    },
    {
      "word": "date",
      "pos": "n.",
      "def": "日期"
    },
    {
      "word": "daughter",
      "pos": "n.",
      "def": "女兒"
    },
    {
      "word": "day",
      "pos": "n.",
      "def": "一天"
    },
    {
      "word": "dead",
      "pos": "adj.",
      "def": "死的"
    },
    {
      "word": "deal",
      "pos": "vi.",
      "def": "處理"
    },
    {
      "word": "dear",
      "pos": "adj.",
      "def": "親愛的"
    },
    {
      "word": "death",
      "pos": "n.",
      "def": "死亡"
    },
    {
      "word": "December/Dec.",
      "pos": "n.",
      "def": "十二月"
    },
    {
      "word": "decide",
      "pos": "vt.",
      "def": "決定"
    },
    {
      "word": "deep",
      "pos": "adj.",
      "def": "深的"
    },
    {
      "word": "deer",
      "pos": "n.",
      "def": "鹿"
    },
    {
      "word": "desk",
      "pos": "n.",
      "def": "桌子"
    },
    {
      "word": "die",
      "pos": "vi.",
      "def": "死"
    },
    {
      "word": "different",
      "pos": "adj.",
      "def": "不同的"
    },
    {
      "word": "difficult",
      "pos": "adj.",
      "def": "困難的"
    },
    {
      "word": "dig",
      "pos": "vt.",
      "def": "挖"
    },
    {
      "word": "dinner",
      "pos": "n.",
      "def": "晚餐"
    },
    {
      "word": "direct",
      "pos": "vt.",
      "def": "指揮"
    },
    {
      "word": "dirty",
      "pos": "adj.",
      "def": "髒的"
    },
    {
      "word": "discover",
      "pos": "vt.",
      "def": "發現"
    },
    {
      "word": "dish",
      "pos": "n.",
      "def": "碟"
    },
    {
      "word": "do",
      "pos": "vt.",
      "def": "做"
    },
    {
      "word": "doctor/doc",
      "pos": "n.",
      "def": "醫生"
    },
    {
      "word": "dog",
      "pos": "n.",
      "def": "狗"
    },
    {
      "word": "doll",
      "pos": "n.",
      "def": "玩偶"
    },
    {
      "word": "dollar/buck",
      "pos": "n.",
      "def": "元"
    },
    {
      "word": "door",
      "pos": "n.",
      "def": "門"
    },
    {
      "word": "dove",
      "pos": "n.",
      "def": "鴿子"
    },
    {
      "word": "down",
      "pos": "adv.",
      "def": "向下"
    },
    {
      "word": "downstairs",
      "pos": "adj.",
      "def": "adv.樓下的"
    },
    {
      "word": "dozen",
      "pos": "n.",
      "def": "一打"
    },
    {
      "word": "draw",
      "pos": "vt.",
      "def": "畫"
    },
    {
      "word": "dream",
      "pos": "n.",
      "def": "夢"
    },
    {
      "word": "drink",
      "pos": "vt.",
      "def": "喝"
    },
    {
      "word": "drive",
      "pos": "vt.",
      "def": "開車"
    },
    {
      "word": "driver",
      "pos": "n.",
      "def": "司機"
    },
    {
      "word": "dry",
      "pos": "adj.",
      "def": "乾的"
    },
    {
      "word": "duck",
      "pos": "n.",
      "def": "鴨子"
    },
    {
      "word": "duckling",
      "pos": "n.",
      "def": "小鴨"
    },
    {
      "word": "during",
      "pos": "prep.",
      "def": "在…期間"
    },
    {
      "word": "each",
      "pos": "adj.",
      "def": "每個"
    },
    {
      "word": "eagle",
      "pos": "n.",
      "def": "老鷹"
    },
    {
      "word": "ear",
      "pos": "n.",
      "def": "耳朵"
    },
    {
      "word": "early",
      "pos": "adj.",
      "def": "早的"
    },
    {
      "word": "earth",
      "pos": "n.",
      "def": "地球"
    },
    {
      "word": "ease",
      "pos": "n.",
      "def": "容易"
    },
    {
      "word": "east",
      "pos": "n.",
      "def": "東"
    },
    {
      "word": "easy",
      "pos": "adj.",
      "def": "容易的"
    },
    {
      "word": "eat",
      "pos": "vt.",
      "def": "吃"
    },
    {
      "word": "edge",
      "pos": "n.",
      "def": "邊緣"
    },
    {
      "word": "egg",
      "pos": "n.",
      "def": "蛋"
    },
    {
      "word": "eight",
      "pos": "n.",
      "def": "八"
    },
    {
      "word": "eighteen",
      "pos": "n.",
      "def": "十八"
    },
    {
      "word": "eighty",
      "pos": "n.",
      "def": "八十"
    },
    {
      "word": "either",
      "pos": "adj.",
      "def": "任一的 (2) adv.也"
    },
    {
      "word": "elephant",
      "pos": "n.",
      "def": "大象"
    },
    {
      "word": "eleven",
      "pos": "n.",
      "def": "十一"
    },
    {
      "word": "else",
      "pos": "adv.",
      "def": "其他"
    },
    {
      "word": "end",
      "pos": "n.",
      "def": "最後"
    },
    {
      "word": "English",
      "pos": "n.",
      "def": "英文、英國的"
    },
    {
      "word": "enough",
      "pos": "adj.",
      "def": "adv. 足夠的"
    },
    {
      "word": "enter",
      "pos": "vt.",
      "def": "進入"
    },
    {
      "word": "equal",
      "pos": "adj.",
      "def": "相等的"
    },
    {
      "word": "even",
      "pos": "adv.",
      "def": "甚至 (2) adj.偶數的"
    },
    {
      "word": "evening",
      "pos": "n.",
      "def": "傍晚"
    },
    {
      "word": "ever",
      "pos": "adv.",
      "def": "從來"
    },
    {
      "word": "every",
      "pos": "adj.",
      "def": "每個"
    },
    {
      "word": "examination/exam",
      "pos": "n.",
      "def": "考試"
    },
    {
      "word": "examine",
      "pos": "vt.",
      "def": "檢查"
    },
    {
      "word": "example",
      "pos": "n.",
      "def": "例子"
    },
    {
      "word": "except",
      "pos": "prep.",
      "def": "除了…之外"
    },
    {
      "word": "eye",
      "pos": "n.",
      "def": "眼睛"
    },
    {
      "word": "face",
      "pos": "n.",
      "def": "臉"
    },
    {
      "word": "fact",
      "pos": "n.",
      "def": "事實"
    },
    {
      "word": "factory",
      "pos": "n.",
      "def": "工廠"
    },
    {
      "word": "fall",
      "pos": "vi.",
      "def": "落下"
    },
    {
      "word": "false",
      "pos": "adj.",
      "def": "錯誤的"
    },
    {
      "word": "family",
      "pos": "n.",
      "def": "家庭"
    },
    {
      "word": "fan",
      "pos": "n.",
      "def": "(1)扇子"
    },
    {
      "word": "far",
      "pos": "adj.",
      "def": "adv. 遠的"
    },
    {
      "word": "farm",
      "pos": "n.",
      "def": "農場"
    },
    {
      "word": "farmer",
      "pos": "n.",
      "def": "農夫"
    },
    {
      "word": "fast",
      "pos": "adj.",
      "def": "adv. 快的"
    },
    {
      "word": "fat",
      "pos": "adj.",
      "def": "肥胖的"
    },
    {
      "word": "father",
      "pos": "n.",
      "def": "父親"
    },
    {
      "word": "fear",
      "pos": "n.",
      "def": "恐懼"
    },
    {
      "word": "February/Feb.",
      "pos": "n.",
      "def": "二月"
    },
    {
      "word": "feed",
      "pos": "vt.",
      "def": "餵食"
    },
    {
      "word": "feel",
      "pos": "n.",
      "def": "vt. 觸摸；感覺"
    },
    {
      "word": "feeling",
      "pos": "n.",
      "def": "感覺；看法"
    },
    {
      "word": "feelings",
      "pos": "n.",
      "def": "感情；心情"
    },
    {
      "word": "few",
      "pos": "adj.",
      "def": "很少的"
    },
    {
      "word": "fifteen",
      "pos": "n.",
      "def": "十五"
    },
    {
      "word": "fifty",
      "pos": "n.",
      "def": "五十"
    },
    {
      "word": "fight",
      "pos": "vi.",
      "def": "打架"
    },
    {
      "word": "fill",
      "pos": "vt.",
      "def": "填滿"
    },
    {
      "word": "final",
      "pos": "adj.",
      "def": "最後的"
    },
    {
      "word": "find",
      "pos": "vt.",
      "def": "尋找"
    },
    {
      "word": "fine adj.美好的；健康的",
      "pos": "n.",
      "def": "罰金 v. 使純；處以罰金"
    },
    {
      "word": "finger",
      "pos": "n.",
      "def": "手指"
    },
    {
      "word": "finish",
      "pos": "vt.",
      "def": "完成"
    },
    {
      "word": "fire n.火",
      "pos": "vi., vt.",
      "def": "開火 (2) vt.開除"
    },
    {
      "word": "first",
      "pos": "adj.",
      "def": "第一的"
    },
    {
      "word": "fish",
      "pos": "n.",
      "def": "魚"
    },
    {
      "word": "five",
      "pos": "n.",
      "def": "五"
    },
    {
      "word": "floor",
      "pos": "n.",
      "def": "地板"
    },
    {
      "word": "flower",
      "pos": "n.",
      "def": "花"
    },
    {
      "word": "fly",
      "pos": "n.",
      "def": "蒼蠅 (2) vi.飛"
    },
    {
      "word": "fog",
      "pos": "n.",
      "def": "霧"
    },
    {
      "word": "follow",
      "pos": "vt.",
      "def": "跟隨"
    },
    {
      "word": "food",
      "pos": "n.",
      "def": "食物"
    },
    {
      "word": "foot",
      "pos": "n.",
      "def": "腳"
    },
    {
      "word": "for",
      "pos": "prep.",
      "def": "為了"
    },
    {
      "word": "force",
      "pos": "n.",
      "def": "力量"
    },
    {
      "word": "foreign",
      "pos": "adj.",
      "def": "外國的"
    },
    {
      "word": "forest",
      "pos": "n.",
      "def": "森林"
    },
    {
      "word": "forget",
      "pos": "vt.",
      "def": "忘記"
    },
    {
      "word": "fork",
      "pos": "n.",
      "def": "叉子"
    },
    {
      "word": "forty",
      "pos": "n.",
      "def": "四十"
    },
    {
      "word": "four",
      "pos": "n.",
      "def": "四"
    },
    {
      "word": "fourteen",
      "pos": "n.",
      "def": "十四"
    },
    {
      "word": "free",
      "pos": "adj.",
      "def": "自由的"
    },
    {
      "word": "fresh",
      "pos": "adj.",
      "def": "新鮮的"
    },
    {
      "word": "Friday/Fri.",
      "pos": "n.",
      "def": "星期五"
    },
    {
      "word": "friend",
      "pos": "n.",
      "def": "朋友"
    },
    {
      "word": "frog",
      "pos": "n.",
      "def": "青蛙"
    },
    {
      "word": "from",
      "pos": "prep.",
      "def": "從"
    },
    {
      "word": "front",
      "pos": "n.",
      "def": "前面"
    },
    {
      "word": "fruit",
      "pos": "n.",
      "def": "水果"
    },
    {
      "word": "full",
      "pos": "adj.",
      "def": "滿的"
    },
    {
      "word": "fun",
      "pos": "n.",
      "def": "樂趣"
    },
    {
      "word": "funny",
      "pos": "adj.",
      "def": "有趣的"
    },
    {
      "word": "game",
      "pos": "n.",
      "def": "遊戲"
    },
    {
      "word": "garden",
      "pos": "n.",
      "def": "花園"
    },
    {
      "word": "gas",
      "pos": "n.",
      "def": "汽油"
    },
    {
      "word": "general",
      "pos": "adj.",
      "def": "一般的"
    },
    {
      "word": "get",
      "pos": "vt.",
      "def": "獲得"
    },
    {
      "word": "ghost",
      "pos": "n.",
      "def": "幽靈"
    },
    {
      "word": "gift",
      "pos": "n.",
      "def": "禮物"
    },
    {
      "word": "girl",
      "pos": "n.",
      "def": "女孩"
    },
    {
      "word": "give",
      "pos": "vt.",
      "def": "給"
    },
    {
      "word": "glad",
      "pos": "adj.",
      "def": "高興的"
    },
    {
      "word": "glass",
      "pos": "n.",
      "def": "玻璃"
    },
    {
      "word": "glasses",
      "pos": "n.",
      "def": "眼鏡"
    },
    {
      "word": "go",
      "pos": "vi.",
      "def": "去"
    },
    {
      "word": "god/goddess",
      "pos": "n.",
      "def": "神/女神"
    },
    {
      "word": "gold",
      "pos": "n.",
      "def": "黃金"
    },
    {
      "word": "good",
      "pos": "adj.",
      "def": "好的"
    },
    {
      "word": "good-bye/goodbye/bye-bye/bye",
      "pos": "n.",
      "def": "再見"
    },
    {
      "word": "goose",
      "pos": "n.",
      "def": "鵝"
    },
    {
      "word": "grand",
      "pos": "adj.",
      "def": "雄偉的"
    },
    {
      "word": "grandchild",
      "pos": "n.",
      "def": "孫子女"
    },
    {
      "word": "granddaughter n",
      "pos": "",
      "def": "孫女"
    },
    {
      "word": "grandfather/grandpa / n",
      "pos": "",
      "def": "爺爺"
    },
    {
      "word": "grandmother/grandma",
      "pos": "n.",
      "def": "奶奶"
    },
    {
      "word": "grandson",
      "pos": "n.",
      "def": "孫子"
    },
    {
      "word": "grass",
      "pos": "n.",
      "def": "草"
    },
    {
      "word": "gray/grey",
      "pos": "adj.",
      "def": "灰色的"
    },
    {
      "word": "great",
      "pos": "adj.",
      "def": "極好的"
    },
    {
      "word": "green",
      "pos": "adj.",
      "def": "綠色的"
    },
    {
      "word": "ground",
      "pos": "n.",
      "def": "地面"
    },
    {
      "word": "group",
      "pos": "n.",
      "def": "群組"
    },
    {
      "word": "grow",
      "pos": "vi.",
      "def": "生長"
    },
    {
      "word": "guess",
      "pos": "vt.",
      "def": "猜測"
    },
    {
      "word": "guest",
      "pos": "n.",
      "def": "客人"
    },
    {
      "word": "guide",
      "pos": "n.",
      "def": "導遊"
    },
    {
      "word": "gun",
      "pos": "n.",
      "def": "槍"
    },
    {
      "word": "hair",
      "pos": "n.",
      "def": "毛髮"
    },
    {
      "word": "haircut",
      "pos": "n.",
      "def": "理髮"
    },
    {
      "word": "half",
      "pos": "n.",
      "def": "一半"
    },
    {
      "word": "ham",
      "pos": "n.",
      "def": "火腿"
    },
    {
      "word": "hand",
      "pos": "n.",
      "def": "手"
    },
    {
      "word": "happen",
      "pos": "vi.",
      "def": "發生"
    },
    {
      "word": "happy",
      "pos": "adj.",
      "def": "高興的"
    },
    {
      "word": "hard",
      "pos": "adj.",
      "def": "堅硬的 adv. 努力地"
    },
    {
      "word": "hat",
      "pos": "n.",
      "def": "帽子"
    },
    {
      "word": "hate",
      "pos": "vt.",
      "def": "討厭"
    },
    {
      "word": "have",
      "pos": "vt.",
      "def": "擁有"
    },
    {
      "word": "he",
      "pos": "n.",
      "def": "他"
    },
    {
      "word": "head",
      "pos": "n.",
      "def": "頭"
    },
    {
      "word": "health",
      "pos": "n.",
      "def": "健康"
    },
    {
      "word": "hear",
      "pos": "vt.",
      "def": "聽見"
    },
    {
      "word": "heart",
      "pos": "n.",
      "def": "心臟"
    },
    {
      "word": "heat",
      "pos": "vt.",
      "def": "使…加熱"
    },
    {
      "word": "heavy",
      "pos": "adj.",
      "def": "重的"
    },
    {
      "word": "hello",
      "pos": "n.",
      "def": "嗨"
    },
    {
      "word": "help",
      "pos": "vt.",
      "def": "幫助"
    },
    {
      "word": "her(s)",
      "pos": "pron.",
      "def": "她的"
    },
    {
      "word": "here",
      "pos": "adv.",
      "def": "這裡"
    },
    {
      "word": "high",
      "pos": "adj.",
      "def": "高的"
    },
    {
      "word": "hill",
      "pos": "n.",
      "def": "小山"
    },
    {
      "word": "him",
      "pos": "pron.",
      "def": "他(受格)"
    },
    {
      "word": "his",
      "pos": "pron.",
      "def": "他的"
    },
    {
      "word": "history",
      "pos": "n.",
      "def": "歷史"
    },
    {
      "word": "hit",
      "pos": "vt.",
      "def": "打；擊中"
    },
    {
      "word": "hold",
      "pos": "vt.",
      "def": "握著"
    },
    {
      "word": "hole",
      "pos": "n.",
      "def": "洞"
    },
    {
      "word": "holiday",
      "pos": "n.",
      "def": "假日"
    },
    {
      "word": "home",
      "pos": "n.",
      "def": "家"
    },
    {
      "word": "homework",
      "pos": "n.",
      "def": "家庭作業"
    },
    {
      "word": "hope",
      "pos": "vt.",
      "def": "希望"
    },
    {
      "word": "horse",
      "pos": "n.",
      "def": "馬"
    },
    {
      "word": "hot",
      "pos": "adj.",
      "def": "熱的"
    },
    {
      "word": "hour",
      "pos": "n.",
      "def": "小時"
    },
    {
      "word": "house",
      "pos": "n.",
      "def": "房子"
    },
    {
      "word": "how",
      "pos": "adv.",
      "def": "如何"
    },
    {
      "word": "huge",
      "pos": "adj.",
      "def": "巨大的"
    },
    {
      "word": "human",
      "pos": "n.",
      "def": "人類"
    },
    {
      "word": "hundred",
      "pos": "n.",
      "def": "一百"
    },
    {
      "word": "hungry",
      "pos": "adj.",
      "def": "飢餓的"
    },
    {
      "word": "hurt",
      "pos": "n., vi., vt.",
      "def": "(使)受傷"
    },
    {
      "word": "husband",
      "pos": "n.",
      "def": "丈夫；I n. (主格)我"
    },
    {
      "word": "ice",
      "pos": "n.",
      "def": "冰"
    },
    {
      "word": "idea",
      "pos": "n.",
      "def": "主意"
    },
    {
      "word": "if",
      "pos": "conj.",
      "def": "如果"
    },
    {
      "word": "important",
      "pos": "adj.",
      "def": "重要的"
    },
    {
      "word": "in",
      "pos": "prep.",
      "def": "在…裡面"
    },
    {
      "word": "inch",
      "pos": "n.",
      "def": "英吋"
    },
    {
      "word": "inside",
      "pos": "n.",
      "def": "內部"
    },
    {
      "word": "interest",
      "pos": "n.",
      "def": "興趣"
    },
    {
      "word": "into",
      "pos": "prep.",
      "def": "到…裡"
    },
    {
      "word": "iron",
      "pos": "n.",
      "def": "鐵"
    },
    {
      "word": "is",
      "pos": "vi.",
      "def": "(第三人稱)是"
    },
    {
      "word": "it",
      "pos": "pron.",
      "def": "它"
    },
    {
      "word": "its",
      "pos": "pron.",
      "def": "它的"
    },
    {
      "word": "jam",
      "pos": "n.",
      "def": "(1) 堵塞；果醬"
    },
    {
      "word": "January/Jan.",
      "pos": "n.",
      "def": "一月"
    },
    {
      "word": "job",
      "pos": "n.",
      "def": "工作"
    },
    {
      "word": "join",
      "pos": "vt.",
      "def": "參加"
    },
    {
      "word": "joke",
      "pos": "n.",
      "def": "玩笑"
    },
    {
      "word": "joy",
      "pos": "n.",
      "def": "歡樂"
    },
    {
      "word": "juice",
      "pos": "n.",
      "def": "果汁"
    },
    {
      "word": "July/Jul.",
      "pos": "n.",
      "def": "七月"
    },
    {
      "word": "jump",
      "pos": "vi.",
      "def": "跳"
    },
    {
      "word": "June/Jun.",
      "pos": "n.",
      "def": "六月"
    },
    {
      "word": "just adj.正直的",
      "pos": "adv.",
      "def": "只是"
    },
    {
      "word": "keep",
      "pos": "vt.",
      "def": "保有"
    },
    {
      "word": "keeper",
      "pos": "n.",
      "def": "管理者"
    },
    {
      "word": "key",
      "pos": "n.",
      "def": "鑰匙 vt.鍵入 (2) adv.關鍵的"
    },
    {
      "word": "kick",
      "pos": "vt.",
      "def": "踢"
    },
    {
      "word": "kid",
      "pos": "n.",
      "def": "小孩"
    },
    {
      "word": "kill",
      "pos": "vt.",
      "def": "殺死"
    },
    {
      "word": "kind",
      "pos": "adj.",
      "def": "善良 (2) n.種類"
    },
    {
      "word": "king",
      "pos": "n.",
      "def": "國王"
    },
    {
      "word": "kiss",
      "pos": "vt.",
      "def": "吻"
    },
    {
      "word": "kitchen",
      "pos": "n.",
      "def": "廚房"
    },
    {
      "word": "kite",
      "pos": "n.",
      "def": "風箏"
    },
    {
      "word": "kitten/kitty",
      "pos": "n.",
      "def": "小貓"
    },
    {
      "word": "knee",
      "pos": "n.",
      "def": "膝蓋"
    },
    {
      "word": "knife",
      "pos": "n.",
      "def": "刀"
    },
    {
      "word": "know",
      "pos": "vt.",
      "def": "知道"
    },
    {
      "word": "lack",
      "pos": "vt.",
      "def": "缺少"
    },
    {
      "word": "lady",
      "pos": "n.",
      "def": "女士"
    },
    {
      "word": "lake",
      "pos": "n.",
      "def": "湖泊"
    },
    {
      "word": "lamb",
      "pos": "n.",
      "def": "小羊"
    },
    {
      "word": "lamp",
      "pos": "n.",
      "def": "燈"
    },
    {
      "word": "land n.陸地",
      "pos": "vi., vt.",
      "def": "(使)降落"
    },
    {
      "word": "large",
      "pos": "adj.",
      "def": "寬的"
    },
    {
      "word": "last",
      "pos": "adj.",
      "def": "最後的 (2) vi.持續"
    },
    {
      "word": "late",
      "pos": "adj.",
      "def": "遲的"
    },
    {
      "word": "laugh",
      "pos": "vi.",
      "def": "笑"
    },
    {
      "word": "law",
      "pos": "n.",
      "def": "法律"
    },
    {
      "word": "lay",
      "pos": "vt.",
      "def": "放；下蛋"
    },
    {
      "word": "lazy",
      "pos": "adj.",
      "def": "懶散的"
    },
    {
      "word": "lead",
      "pos": "n.",
      "def": "領先；線索"
    },
    {
      "word": "leader",
      "pos": "n.",
      "def": "領袖"
    },
    {
      "word": "leaf",
      "pos": "n.",
      "def": "葉子"
    },
    {
      "word": "learn",
      "pos": "vt.",
      "def": "學習"
    },
    {
      "word": "least",
      "pos": "adj.",
      "def": "最小的"
    },
    {
      "word": "leave",
      "pos": "vt.",
      "def": "離開"
    },
    {
      "word": "left",
      "pos": "adj.",
      "def": "左方的"
    },
    {
      "word": "leg",
      "pos": "n.",
      "def": "腿"
    },
    {
      "word": "less",
      "pos": "adj.",
      "def": "較少的"
    },
    {
      "word": "lesson",
      "pos": "n.",
      "def": "一課"
    },
    {
      "word": "let",
      "pos": "vt.",
      "def": "讓"
    },
    {
      "word": "letter",
      "pos": "n.",
      "def": "(1)信件 (2)字母"
    },
    {
      "word": "level",
      "pos": "n.",
      "def": "階級"
    },
    {
      "word": "lie",
      "pos": "vi.",
      "def": "躺"
    },
    {
      "word": "life",
      "pos": "n.",
      "def": "生命"
    },
    {
      "word": "lift",
      "pos": "vt.",
      "def": "舉起"
    },
    {
      "word": "light n.光 vt. vi.照亮",
      "pos": "adj.",
      "def": "明亮的 (2) adj. 淺色的；輕的"
    },
    {
      "word": "like",
      "pos": "prep.",
      "def": "像 (2) vt.喜歡"
    },
    {
      "word": "likely",
      "pos": "adj.",
      "def": "很可能的"
    },
    {
      "word": "lily",
      "pos": "n.",
      "def": "百合"
    },
    {
      "word": "line",
      "pos": "n.",
      "def": "線"
    },
    {
      "word": "lion",
      "pos": "n.",
      "def": "獅子"
    },
    {
      "word": "lip",
      "pos": "n.",
      "def": "嘴唇"
    },
    {
      "word": "list",
      "pos": "n.",
      "def": "表單"
    },
    {
      "word": "listen",
      "pos": "vt.",
      "def": "聽"
    },
    {
      "word": "little",
      "pos": "adj.",
      "def": "小的 adv. 少"
    },
    {
      "word": "live",
      "pos": "adj.",
      "def": "活的 (2) vi.活著"
    },
    {
      "word": "long",
      "pos": "adj.",
      "def": "長的 (2) vi.渴望"
    },
    {
      "word": "look",
      "pos": "vi.",
      "def": "vt. 看"
    },
    {
      "word": "lot",
      "pos": "n.",
      "def": "很多；籤；一塊地"
    },
    {
      "word": "loud",
      "pos": "adj.",
      "def": "大聲的"
    },
    {
      "word": "love",
      "pos": "n., vt.",
      "def": "愛"
    },
    {
      "word": "low",
      "pos": "adj.",
      "def": "低的"
    },
    {
      "word": "lucky",
      "pos": "adj.",
      "def": "幸運的"
    },
    {
      "word": "lunch/luncheon",
      "pos": "n.",
      "def": "午餐"
    },
    {
      "word": "machine",
      "pos": "n.",
      "def": "機器"
    },
    {
      "word": "mad",
      "pos": "adj.",
      "def": "發飆的"
    },
    {
      "word": "mail",
      "pos": "n.",
      "def": "郵件"
    },
    {
      "word": "make",
      "pos": "vt.",
      "def": "做"
    },
    {
      "word": "man",
      "pos": "n.",
      "def": "男人"
    },
    {
      "word": "many",
      "pos": "adj.",
      "def": "許多的"
    },
    {
      "word": "map",
      "pos": "n.",
      "def": "地圖"
    },
    {
      "word": "March/Mar.",
      "pos": "n.",
      "def": "三月"
    },
    {
      "word": "market",
      "pos": "n.",
      "def": "市場"
    },
    {
      "word": "marry",
      "pos": "vt.",
      "def": "嫁娶"
    },
    {
      "word": "master",
      "pos": "n.",
      "def": "主人(2) vt. 精通"
    },
    {
      "word": "match",
      "pos": "n.",
      "def": "(1) 比賽"
    },
    {
      "word": "matter",
      "pos": "n.",
      "def": "事件 (2) vi.重要"
    },
    {
      "word": "May",
      "pos": "n.",
      "def": "五月"
    },
    {
      "word": "may",
      "pos": "aux.",
      "def": "可能"
    },
    {
      "word": "maybe",
      "pos": "adv.",
      "def": "或許"
    },
    {
      "word": "me",
      "pos": "pron.",
      "def": "(受格)我"
    },
    {
      "word": "mean",
      "pos": "vt.",
      "def": "表…意思 (2) adj.吝嗇"
    },
    {
      "word": "meat",
      "pos": "n.",
      "def": "肉"
    },
    {
      "word": "meet",
      "pos": "vt.",
      "def": "遇見"
    },
    {
      "word": "middle",
      "pos": "adj.",
      "def": "中間的"
    },
    {
      "word": "mile",
      "pos": "n.",
      "def": "英里"
    },
    {
      "word": "milk",
      "pos": "n.",
      "def": "牛奶"
    },
    {
      "word": "mind",
      "pos": "n.",
      "def": "心智"
    },
    {
      "word": "minute",
      "pos": "n.",
      "def": "分鐘"
    },
    {
      "word": "Miss/miss",
      "pos": "n.",
      "def": "小姐"
    },
    {
      "word": "miss",
      "pos": "vt.",
      "def": "想念"
    },
    {
      "word": "mistake",
      "pos": "n.",
      "def": "錯誤"
    },
    {
      "word": "moment",
      "pos": "n.",
      "def": "瞬間"
    },
    {
      "word": "mommy/momma/mom",
      "pos": "n.",
      "def": "媽媽"
    },
    {
      "word": "Monday/Mon.",
      "pos": "n.",
      "def": "星期一"
    },
    {
      "word": "money",
      "pos": "n.",
      "def": "錢"
    },
    {
      "word": "monkey",
      "pos": "n.",
      "def": "猴子"
    },
    {
      "word": "month",
      "pos": "n.",
      "def": "月"
    },
    {
      "word": "moon",
      "pos": "n.",
      "def": "月亮"
    },
    {
      "word": "more",
      "pos": "adj.",
      "def": "adv. pron. 更多(的)"
    },
    {
      "word": "morning",
      "pos": "n.",
      "def": "早晨"
    },
    {
      "word": "most",
      "pos": "adj.",
      "def": "adv. pron. 最多(的)"
    },
    {
      "word": "mother",
      "pos": "n.",
      "def": "媽媽"
    },
    {
      "word": "mountain",
      "pos": "n.",
      "def": "山"
    },
    {
      "word": "mouse",
      "pos": "n.",
      "def": "老鼠"
    },
    {
      "word": "mouth",
      "pos": "n.",
      "def": "嘴巴"
    },
    {
      "word": "move(ment)",
      "pos": "vi.",
      "def": "動作"
    },
    {
      "word": "movie/(motion) picture/film",
      "pos": "",
      "def": ""
    },
    {
      "word": "cinema",
      "pos": "n.",
      "def": "電影"
    },
    {
      "word": "Mr./mister",
      "pos": "n.",
      "def": "先生"
    },
    {
      "word": "Mrs.",
      "pos": "n.",
      "def": "太太"
    },
    {
      "word": "Ms.",
      "pos": "n.",
      "def": "女士(婚姻狀況不明)"
    },
    {
      "word": "much",
      "pos": "adj.",
      "def": "adv. pron. 許多(的)"
    },
    {
      "word": "mud",
      "pos": "n.",
      "def": "泥巴"
    },
    {
      "word": "mug",
      "pos": "n.",
      "def": "大杯子"
    },
    {
      "word": "music",
      "pos": "n.",
      "def": "音樂"
    },
    {
      "word": "must",
      "pos": "aux.",
      "def": "必須"
    },
    {
      "word": "my",
      "pos": "pron.",
      "def": "我的"
    },
    {
      "word": "name",
      "pos": "n.",
      "def": "名字"
    },
    {
      "word": "nation",
      "pos": "n.",
      "def": "國家"
    },
    {
      "word": "nature",
      "pos": "n.",
      "def": "大自然"
    },
    {
      "word": "near",
      "pos": "adj.",
      "def": "adv. prep. 近(…的)"
    },
    {
      "word": "neck",
      "pos": "n.",
      "def": "脖子"
    },
    {
      "word": "need",
      "pos": "vt.",
      "def": "需要"
    },
    {
      "word": "never",
      "pos": "adv.",
      "def": "從不"
    },
    {
      "word": "new",
      "pos": "adj.",
      "def": "新的"
    },
    {
      "word": "news",
      "pos": "n.",
      "def": "新聞"
    },
    {
      "word": "newspaper",
      "pos": "n.",
      "def": "報紙"
    },
    {
      "word": "next",
      "pos": "adj.",
      "def": "adv. prep. 緊接在後的"
    },
    {
      "word": "nice",
      "pos": "adj.",
      "def": "好的"
    },
    {
      "word": "night",
      "pos": "n.",
      "def": "晚上"
    },
    {
      "word": "nine",
      "pos": "n.",
      "def": "九"
    },
    {
      "word": "nineteen",
      "pos": "n.",
      "def": "十九"
    },
    {
      "word": "ninety",
      "pos": "n.",
      "def": "九十"
    },
    {
      "word": "no/nope",
      "pos": "adv.",
      "def": "不是"
    },
    {
      "word": "noise",
      "pos": "n.",
      "def": "噪音"
    },
    {
      "word": "noisy",
      "pos": "adj.",
      "def": "喧鬧的"
    },
    {
      "word": "noon",
      "pos": "n.",
      "def": "中午"
    },
    {
      "word": "nor conj.（",
      "pos": "",
      "def": "用在"
    },
    {
      "word": "neither",
      "pos": "",
      "def": "之後）也不"
    },
    {
      "word": "north",
      "pos": "n.",
      "def": "北"
    },
    {
      "word": "nose",
      "pos": "n.",
      "def": "鼻子"
    },
    {
      "word": "not",
      "pos": "adv.",
      "def": "不"
    },
    {
      "word": "note",
      "pos": "n.",
      "def": "筆記"
    },
    {
      "word": "nothing",
      "pos": "n.",
      "def": "沒什麼"
    },
    {
      "word": "notice",
      "pos": "vt.",
      "def": "注意"
    },
    {
      "word": "November/Nov.",
      "pos": "n.",
      "def": "11 月"
    },
    {
      "word": "now",
      "pos": "adv.",
      "def": "現在"
    },
    {
      "word": "number",
      "pos": "n.",
      "def": "數字"
    },
    {
      "word": "nurse",
      "pos": "n.",
      "def": "護士"
    },
    {
      "word": "O.K./OK/okay",
      "pos": "adj.",
      "def": "adv.可以"
    },
    {
      "word": "ocean",
      "pos": "n.",
      "def": "海洋"
    },
    {
      "word": "o’clock",
      "pos": "n.",
      "def": "…點鐘"
    },
    {
      "word": "October/Oct.",
      "pos": "n.",
      "def": "十月"
    },
    {
      "word": "of",
      "pos": "prep.",
      "def": "…的；屬於"
    },
    {
      "word": "off",
      "pos": "adj., prep., adv.",
      "def": "離開(…)"
    },
    {
      "word": "office",
      "pos": "n.",
      "def": "辦公室"
    },
    {
      "word": "officer",
      "pos": "n.",
      "def": "公務員"
    },
    {
      "word": "often",
      "pos": "adv.",
      "def": "常常"
    },
    {
      "word": "oil",
      "pos": "n.",
      "def": "油"
    },
    {
      "word": "old",
      "pos": "adj.",
      "def": "老的"
    },
    {
      "word": "on",
      "pos": "prep.",
      "def": "在…上"
    },
    {
      "word": "once",
      "pos": "adv.",
      "def": "一次；一旦"
    },
    {
      "word": "one",
      "pos": "n.",
      "def": "一"
    },
    {
      "word": "only",
      "pos": "adj.",
      "def": "唯一的"
    },
    {
      "word": "open",
      "pos": "adj.",
      "def": "打開的"
    },
    {
      "word": "or",
      "pos": "conj.",
      "def": "或者"
    },
    {
      "word": "orange",
      "pos": "n.",
      "def": "柳橙"
    },
    {
      "word": "order",
      "pos": "n.",
      "def": "順序"
    },
    {
      "word": "other",
      "pos": "adj.",
      "def": "其餘的"
    },
    {
      "word": "our(s)",
      "pos": "pron.",
      "def": "我們的"
    },
    {
      "word": "out",
      "pos": "prep.",
      "def": "在外"
    },
    {
      "word": "outside",
      "pos": "n.",
      "def": "外面"
    },
    {
      "word": "over prep. 在…之上",
      "pos": "adv., adj.",
      "def": "在上方；結束的"
    },
    {
      "word": "own",
      "pos": "adj.",
      "def": "自己的 vt. 擁有"
    },
    {
      "word": "page",
      "pos": "n.",
      "def": "頁"
    },
    {
      "word": "paint",
      "pos": "vt.",
      "def": "塗"
    },
    {
      "word": "pair",
      "pos": "n.",
      "def": "一對"
    },
    {
      "word": "pants /trousers",
      "pos": "n.",
      "def": "褲子"
    },
    {
      "word": "paper",
      "pos": "n.",
      "def": "紙"
    },
    {
      "word": "parent(s)",
      "pos": "n.",
      "def": "雙親"
    },
    {
      "word": "park",
      "pos": "n.",
      "def": "公園 (2) vt. vi. 停車"
    },
    {
      "word": "part",
      "pos": "n.",
      "def": "一部分(2) vt.使分開"
    },
    {
      "word": "party",
      "pos": "n.",
      "def": "派對"
    },
    {
      "word": "pass",
      "pos": "vi.",
      "def": "vt. 經過"
    },
    {
      "word": "past prep.",
      "pos": "",
      "def": "經過(2)n.往昔 adj.過去的"
    },
    {
      "word": "pay (ment)",
      "pos": "n., vi., vt.",
      "def": "支付；薪水"
    },
    {
      "word": "pen",
      "pos": "n.",
      "def": "筆"
    },
    {
      "word": "pencil",
      "pos": "n.",
      "def": "鉛筆"
    },
    {
      "word": "people",
      "pos": "n.",
      "def": "人們"
    },
    {
      "word": "perhaps",
      "pos": "adv.",
      "def": "大概"
    },
    {
      "word": "person",
      "pos": "n.",
      "def": "人"
    },
    {
      "word": "pet",
      "pos": "n.",
      "def": "寵物"
    },
    {
      "word": "piano",
      "pos": "n.",
      "def": "鋼琴"
    },
    {
      "word": "picture",
      "pos": "n.",
      "def": "圖像"
    },
    {
      "word": "pie",
      "pos": "n.",
      "def": "派"
    },
    {
      "word": "piece",
      "pos": "n.",
      "def": "一片"
    },
    {
      "word": "pig",
      "pos": "n.",
      "def": "豬"
    },
    {
      "word": "place",
      "pos": "n.",
      "def": "地方"
    },
    {
      "word": "plan",
      "pos": "n.",
      "def": "計畫"
    },
    {
      "word": "plant n.植物 vt.栽種",
      "pos": "n.",
      "def": "工廠"
    },
    {
      "word": "play",
      "pos": "vi.",
      "def": "玩耍"
    },
    {
      "word": "player",
      "pos": "n.",
      "def": "遊戲的人"
    },
    {
      "word": "playground",
      "pos": "n.",
      "def": "操場"
    },
    {
      "word": "please",
      "pos": "vt.",
      "def": "使高興"
    },
    {
      "word": "pocket",
      "pos": "n.",
      "def": "口袋"
    },
    {
      "word": "poetry",
      "pos": "n.",
      "def": "詩(總稱)"
    },
    {
      "word": "point",
      "pos": "vi.",
      "def": "指向 (2) n.尖端"
    },
    {
      "word": "police",
      "pos": "n.",
      "def": "警察"
    },
    {
      "word": "policeman/cop",
      "pos": "n.",
      "def": "警察"
    },
    {
      "word": "pond",
      "pos": "n.",
      "def": "池塘"
    },
    {
      "word": "pool",
      "pos": "n.",
      "def": "水池"
    },
    {
      "word": "poor",
      "pos": "adj.",
      "def": "貧窮的"
    },
    {
      "word": "popcorn",
      "pos": "n.",
      "def": "爆米花"
    },
    {
      "word": "position",
      "pos": "n.",
      "def": "位置"
    },
    {
      "word": "possible",
      "pos": "adj.",
      "def": "可能的"
    },
    {
      "word": "power",
      "pos": "n.",
      "def": "力量"
    },
    {
      "word": "practice",
      "pos": "vt.",
      "def": "練習"
    },
    {
      "word": "prepare",
      "pos": "vt.",
      "def": "準備"
    },
    {
      "word": "pretty",
      "pos": "adj.",
      "def": "漂亮的 (2) adv.非常"
    },
    {
      "word": "price",
      "pos": "n.",
      "def": "價格"
    },
    {
      "word": "print",
      "pos": "vt.",
      "def": "印"
    },
    {
      "word": "problem",
      "pos": "n.",
      "def": "問題"
    },
    {
      "word": "prove",
      "pos": "vt.",
      "def": "證明"
    },
    {
      "word": "public",
      "pos": "adj.",
      "def": "公眾的"
    },
    {
      "word": "pull",
      "pos": "vt.",
      "def": "拉；拖"
    },
    {
      "word": "purple",
      "pos": "adj.",
      "def": "紫色的"
    },
    {
      "word": "purpose",
      "pos": "n.",
      "def": "目的"
    },
    {
      "word": "push",
      "pos": "vt.",
      "def": "推"
    },
    {
      "word": "put",
      "pos": "vt.",
      "def": "放"
    },
    {
      "word": "queen",
      "pos": "n.",
      "def": "女王"
    },
    {
      "word": "question",
      "pos": "n.",
      "def": "問題"
    },
    {
      "word": "quick",
      "pos": "adj.",
      "def": "adv.快(的)"
    },
    {
      "word": "quiet",
      "pos": "adj.",
      "def": "安靜的"
    },
    {
      "word": "quite",
      "pos": "adv.",
      "def": "相當；很"
    },
    {
      "word": "race vt. vi. n.競賽",
      "pos": "n.",
      "def": "種族"
    },
    {
      "word": "radio",
      "pos": "n.",
      "def": "收音機"
    },
    {
      "word": "railroad",
      "pos": "n.",
      "def": "鐵路"
    },
    {
      "word": "rain",
      "pos": "n.",
      "def": "雨"
    },
    {
      "word": "rainbow",
      "pos": "n.",
      "def": "彩虹"
    },
    {
      "word": "raise",
      "pos": "vt.",
      "def": "舉起"
    },
    {
      "word": "rat",
      "pos": "n.",
      "def": "老鼠"
    },
    {
      "word": "reach",
      "pos": "vi., vt.",
      "def": "抵達；伸出手或腳"
    },
    {
      "word": "read",
      "pos": "vt.",
      "def": "閱讀"
    },
    {
      "word": "ready",
      "pos": "adj.",
      "def": "準備好的"
    },
    {
      "word": "real",
      "pos": "adj.",
      "def": "真的：衷心的"
    },
    {
      "word": "reason",
      "pos": "n.",
      "def": "理由"
    },
    {
      "word": "receive",
      "pos": "vt.",
      "def": "接收"
    },
    {
      "word": "red",
      "pos": "adj.",
      "def": "紅色的"
    },
    {
      "word": "remember",
      "pos": "vi., vt.",
      "def": "記得"
    },
    {
      "word": "report",
      "pos": "n.",
      "def": "報告"
    },
    {
      "word": "rest",
      "pos": "vi.",
      "def": "休息"
    },
    {
      "word": "return",
      "pos": "vi., vt.",
      "def": "返回"
    },
    {
      "word": "rice",
      "pos": "n.",
      "def": "米"
    },
    {
      "word": "rich",
      "pos": "adj.",
      "def": "有錢的"
    },
    {
      "word": "ride",
      "pos": "vt.",
      "def": "騎乘"
    },
    {
      "word": "right",
      "pos": "n.",
      "def": "adj.右邊(的) (2) n.正確"
    },
    {
      "word": "ring",
      "pos": "n.",
      "def": "(1) v. n. 搖鈴；鳴響；(2) v. n. 打電話 n. 戒指"
    },
    {
      "word": "rise",
      "pos": "vi.",
      "def": "上升"
    },
    {
      "word": "river",
      "pos": "n.",
      "def": "河"
    },
    {
      "word": "road",
      "pos": "n.",
      "def": "道路"
    },
    {
      "word": "robot",
      "pos": "n.",
      "def": "機器人"
    },
    {
      "word": "rock",
      "pos": "n.",
      "def": "岩石"
    },
    {
      "word": "roll",
      "pos": "vi.",
      "def": "滾動"
    },
    {
      "word": "roof",
      "pos": "n.",
      "def": "屋頂"
    },
    {
      "word": "room",
      "pos": "n.",
      "def": "房間"
    },
    {
      "word": "rooster",
      "pos": "n.",
      "def": "公雞"
    },
    {
      "word": "root",
      "pos": "n.",
      "def": "根"
    },
    {
      "word": "rope",
      "pos": "n.",
      "def": "繩子"
    },
    {
      "word": "rose",
      "pos": "n.",
      "def": "玫瑰"
    },
    {
      "word": "round",
      "pos": "adj.",
      "def": "圓的"
    },
    {
      "word": "row",
      "pos": "n.",
      "def": "列；排 (2) vt.划船"
    },
    {
      "word": "rub",
      "pos": "vt.",
      "def": "摩擦"
    },
    {
      "word": "rubber",
      "pos": "n.",
      "def": "橡膠"
    },
    {
      "word": "rule",
      "pos": "n.",
      "def": "規則"
    },
    {
      "word": "run",
      "pos": "vi.",
      "def": "跑"
    },
    {
      "word": "sad",
      "pos": "adj.",
      "def": "悲哀的"
    },
    {
      "word": "safe",
      "pos": "adj.",
      "def": "安全的 (2) n.保險櫃"
    },
    {
      "word": "sail",
      "pos": "vi.",
      "def": "vt. 航行"
    },
    {
      "word": "sale",
      "pos": "n.",
      "def": "賣"
    },
    {
      "word": "salt",
      "pos": "n.",
      "def": "鹽巴"
    },
    {
      "word": "same",
      "pos": "adj.",
      "def": "同樣的"
    },
    {
      "word": "sand",
      "pos": "n.",
      "def": "沙子"
    },
    {
      "word": "Saturday/Sat.",
      "pos": "n.",
      "def": "星期六"
    },
    {
      "word": "save",
      "pos": "vt.",
      "def": "挽救；儲存"
    },
    {
      "word": "saw",
      "pos": "n.",
      "def": "鋸子"
    },
    {
      "word": "say",
      "pos": "vt.",
      "def": "說"
    },
    {
      "word": "scare",
      "pos": "vt.",
      "def": "使恐懼"
    },
    {
      "word": "scene",
      "pos": "n.",
      "def": "場景"
    },
    {
      "word": "school",
      "pos": "n.",
      "def": "學校"
    },
    {
      "word": "sea",
      "pos": "n.",
      "def": "海洋"
    },
    {
      "word": "season",
      "pos": "n.",
      "def": "季節"
    },
    {
      "word": "seat",
      "pos": "n.",
      "def": "座位"
    },
    {
      "word": "second",
      "pos": "",
      "def": ""
    },
    {
      "word": "",
      "pos": "n., adj.",
      "def": "第二(的) (2) n.秒"
    },
    {
      "word": "see",
      "pos": "vt.",
      "def": "看見"
    },
    {
      "word": "seed",
      "pos": "n.",
      "def": "種子"
    },
    {
      "word": "seem",
      "pos": "vi.",
      "def": "似乎"
    },
    {
      "word": "seesaw",
      "pos": "n.",
      "def": "蹺蹺板"
    },
    {
      "word": "self",
      "pos": "n.",
      "def": "自己"
    },
    {
      "word": "selfish",
      "pos": "adj.",
      "def": "自私的"
    },
    {
      "word": "sell",
      "pos": "vt.",
      "def": "賣"
    },
    {
      "word": "send",
      "pos": "vt.",
      "def": "發送：寄"
    },
    {
      "word": "sense",
      "pos": "n.",
      "def": "感官；感覺"
    },
    {
      "word": "sentence",
      "pos": "n.",
      "def": "句子"
    },
    {
      "word": "September/Sept.",
      "pos": "n.",
      "def": "九月"
    },
    {
      "word": "serve",
      "pos": "vt.",
      "def": "為…服務"
    },
    {
      "word": "service",
      "pos": "n.",
      "def": "服務"
    },
    {
      "word": "set",
      "pos": "vt.",
      "def": "設立 (2) n.一套"
    },
    {
      "word": "seven",
      "pos": "n.",
      "def": "七"
    },
    {
      "word": "seventeen",
      "pos": "n.",
      "def": "十七"
    },
    {
      "word": "seventy",
      "pos": "n.",
      "def": "七十"
    },
    {
      "word": "several",
      "pos": "adj.",
      "def": "幾個的"
    },
    {
      "word": "shake",
      "pos": "vt.",
      "def": "搖動"
    },
    {
      "word": "shall",
      "pos": "aux.",
      "def": "將：會"
    },
    {
      "word": "shape",
      "pos": "n.",
      "def": "形狀"
    },
    {
      "word": "shark",
      "pos": "n.",
      "def": "鯊魚"
    },
    {
      "word": "sharp",
      "pos": "adj.",
      "def": "尖銳的"
    },
    {
      "word": "she",
      "pos": "pron.",
      "def": "(主格)她"
    },
    {
      "word": "sheep",
      "pos": "n.",
      "def": "綿羊"
    },
    {
      "word": "sheet",
      "pos": "n.",
      "def": "一張"
    },
    {
      "word": "shine vi. 發光 vt. 擦亮",
      "pos": "n.",
      "def": "光亮"
    },
    {
      "word": "ship",
      "pos": "n.",
      "def": "船"
    },
    {
      "word": "shirt",
      "pos": "n.",
      "def": "襯衫"
    },
    {
      "word": "shoe(s)",
      "pos": "n.",
      "def": "鞋子"
    },
    {
      "word": "shop store",
      "pos": "n.",
      "def": "商店"
    },
    {
      "word": "shop",
      "pos": "n.",
      "def": "商店 (2) vi. 購物"
    },
    {
      "word": "shore",
      "pos": "n.",
      "def": "海濱"
    },
    {
      "word": "short",
      "pos": "adj.",
      "def": "短的；矮的"
    },
    {
      "word": "shot",
      "pos": "vt.",
      "def": "射擊"
    },
    {
      "word": "shoulder",
      "pos": "n.",
      "def": "肩膀"
    },
    {
      "word": "shout",
      "pos": "vi.",
      "def": "呼喊"
    },
    {
      "word": "show",
      "pos": "n., vt.",
      "def": "顯示；演出"
    },
    {
      "word": "shut",
      "pos": "vt.",
      "def": "關上"
    },
    {
      "word": "shy",
      "pos": "adj.",
      "def": "害羞的"
    },
    {
      "word": "sick",
      "pos": "adj.",
      "def": "生病的"
    },
    {
      "word": "side",
      "pos": "n.",
      "def": "邊；面"
    },
    {
      "word": "sight",
      "pos": "n.",
      "def": "視界"
    },
    {
      "word": "silly",
      "pos": "adj.",
      "def": "愚蠢的"
    },
    {
      "word": "silver",
      "pos": "n.",
      "def": "銀"
    },
    {
      "word": "simple",
      "pos": "adj.",
      "def": "簡單的"
    },
    {
      "word": "since",
      "pos": "prep.",
      "def": "conj. 此後；因為"
    },
    {
      "word": "sing",
      "pos": "vi.",
      "def": "唱歌"
    },
    {
      "word": "singer",
      "pos": "n.",
      "def": "歌手"
    },
    {
      "word": "sir",
      "pos": "n.",
      "def": "先生"
    },
    {
      "word": "sister",
      "pos": "n.",
      "def": "姊妹"
    },
    {
      "word": "sit",
      "pos": "vi.",
      "def": "坐下"
    },
    {
      "word": "six",
      "pos": "n.",
      "def": "六"
    },
    {
      "word": "sixteen",
      "pos": "n.",
      "def": "十六"
    },
    {
      "word": "sixty",
      "pos": "n.",
      "def": "十六"
    },
    {
      "word": "size",
      "pos": "n.",
      "def": "尺寸"
    },
    {
      "word": "skill",
      "pos": "n.",
      "def": "技術"
    },
    {
      "word": "skin",
      "pos": "n.",
      "def": "皮膚"
    },
    {
      "word": "sky",
      "pos": "n.",
      "def": "天空"
    },
    {
      "word": "sleep",
      "pos": "vi.",
      "def": "睡覺"
    },
    {
      "word": "slow",
      "pos": "adj.",
      "def": "緩慢的"
    },
    {
      "word": "small",
      "pos": "adj.",
      "def": "小的"
    },
    {
      "word": "smart",
      "pos": "adj.",
      "def": "聰明的"
    },
    {
      "word": "smell",
      "pos": "n., vt.",
      "def": "聞"
    },
    {
      "word": "smile",
      "pos": "n., vi.",
      "def": "微笑"
    },
    {
      "word": "smoke",
      "pos": "n.",
      "def": "煙 vt. 抽(菸) vi. 冒煙"
    },
    {
      "word": "snake",
      "pos": "n.",
      "def": "蛇"
    },
    {
      "word": "snow",
      "pos": "n.",
      "def": "雪"
    },
    {
      "word": "so",
      "pos": "conj.",
      "def": "所以 (2) adv.非常"
    },
    {
      "word": "soap",
      "pos": "n.",
      "def": "肥皂"
    },
    {
      "word": "soda",
      "pos": "n.",
      "def": "蘇打"
    },
    {
      "word": "sofa",
      "pos": "n.",
      "def": "沙發"
    },
    {
      "word": "soft",
      "pos": "adj.",
      "def": "柔軟的"
    },
    {
      "word": "soil",
      "pos": "n.",
      "def": "土壤"
    },
    {
      "word": "some",
      "pos": "adj.",
      "def": "某些"
    },
    {
      "word": "someone",
      "pos": "pron.",
      "def": "某人"
    },
    {
      "word": "something",
      "pos": "pron.",
      "def": "某事"
    },
    {
      "word": "sometimes",
      "pos": "pron.",
      "def": "有時候"
    },
    {
      "word": "son",
      "pos": "n.",
      "def": "兒子"
    },
    {
      "word": "song",
      "pos": "n.",
      "def": "歌"
    },
    {
      "word": "soon",
      "pos": "adv.",
      "def": "不久"
    },
    {
      "word": "sorry",
      "pos": "adj.",
      "def": "感到難過的 int. 抱歉"
    },
    {
      "word": "soul",
      "pos": "n.",
      "def": "靈魂"
    },
    {
      "word": "sound",
      "pos": "n.",
      "def": "聲音"
    },
    {
      "word": "",
      "pos": "vi., vt.",
      "def": "(使) 響起 vi.聽起來"
    },
    {
      "word": "soup",
      "pos": "n.",
      "def": "湯"
    },
    {
      "word": "sour",
      "pos": "adj.",
      "def": "酸的"
    },
    {
      "word": "south",
      "pos": "n.",
      "def": "南"
    },
    {
      "word": "space",
      "pos": "n.",
      "def": "空間"
    },
    {
      "word": "speak",
      "pos": "vi.",
      "def": "vt. 說話"
    },
    {
      "word": "special",
      "pos": "adj.",
      "def": "特別的"
    },
    {
      "word": "speech",
      "pos": "n.",
      "def": "演說"
    },
    {
      "word": "spell",
      "pos": "vt.",
      "def": "拼寫"
    },
    {
      "word": "spend",
      "pos": "vt.",
      "def": "花費"
    },
    {
      "word": "spoon",
      "pos": "n.",
      "def": "湯匙"
    },
    {
      "word": "sport",
      "pos": "n.",
      "def": "運動"
    },
    {
      "word": "spring",
      "pos": "n.",
      "def": "(1) 春天"
    },
    {
      "word": "stair",
      "pos": "n.",
      "def": "階梯"
    },
    {
      "word": "stand",
      "pos": "vi.",
      "def": "站著"
    },
    {
      "word": "star",
      "pos": "n.",
      "def": "星星"
    },
    {
      "word": "start",
      "pos": "vi.",
      "def": "vt. 開始"
    },
    {
      "word": "state",
      "pos": "n.",
      "def": "狀態；國家"
    },
    {
      "word": "state(ment)",
      "pos": "vt.",
      "def": "(n.) 陳述"
    },
    {
      "word": "station",
      "pos": "n.",
      "def": "車站"
    },
    {
      "word": "stay",
      "pos": "vi.",
      "def": "停留"
    },
    {
      "word": "step",
      "pos": "n.",
      "def": "腳步"
    },
    {
      "word": "still",
      "pos": "adj.",
      "def": "靜止的 (2) adv.仍舊"
    },
    {
      "word": "stone",
      "pos": "n.",
      "def": "石頭"
    },
    {
      "word": "stop",
      "pos": "vt.",
      "def": "停止"
    },
    {
      "word": "store",
      "pos": "vt.",
      "def": "儲藏"
    },
    {
      "word": "story",
      "pos": "n.",
      "def": "(1) 故事 (2) 樓層"
    },
    {
      "word": "strange",
      "pos": "adj.",
      "def": "奇怪的"
    },
    {
      "word": "street",
      "pos": "n.",
      "def": "街道"
    },
    {
      "word": "strong",
      "pos": "adj.",
      "def": "強壯的"
    },
    {
      "word": "student",
      "pos": "n.",
      "def": "學生"
    },
    {
      "word": "study",
      "pos": "n.",
      "def": "學習 (2) vt. vi. 研究"
    },
    {
      "word": "stupid",
      "pos": "adj.",
      "def": "愚笨的"
    },
    {
      "word": "such",
      "pos": "adj.",
      "def": "如此的"
    },
    {
      "word": "sugar",
      "pos": "n.",
      "def": "糖"
    },
    {
      "word": "summer",
      "pos": "n.",
      "def": "夏天"
    },
    {
      "word": "sun",
      "pos": "n.",
      "def": "太陽"
    },
    {
      "word": "Sunday/Sun.",
      "pos": "n.",
      "def": "星期日"
    },
    {
      "word": "super",
      "pos": "adj.",
      "def": "極度的"
    },
    {
      "word": "supper",
      "pos": "n.",
      "def": "晚餐"
    },
    {
      "word": "sure",
      "pos": "adj.",
      "def": "確信的 adv.當然"
    },
    {
      "word": "surprise",
      "pos": "vt.",
      "def": "使吃驚"
    },
    {
      "word": "sweet",
      "pos": "adj.",
      "def": "甜蜜的"
    },
    {
      "word": "swim",
      "pos": "vi.",
      "def": "游泳"
    },
    {
      "word": "table",
      "pos": "n.",
      "def": "桌子"
    },
    {
      "word": "tail",
      "pos": "n.",
      "def": "尾巴"
    },
    {
      "word": "take",
      "pos": "vt.",
      "def": "拿；取；握"
    },
    {
      "word": "tale",
      "pos": "n.",
      "def": "故事"
    },
    {
      "word": "talk",
      "pos": "vi.",
      "def": "講話"
    },
    {
      "word": "tall",
      "pos": "adj.",
      "def": "高大的"
    },
    {
      "word": "taste",
      "pos": "vi., vt.",
      "def": "嚐"
    },
    {
      "word": "taxicab/taxi/cab",
      "pos": "n.",
      "def": "計程車"
    },
    {
      "word": "tea",
      "pos": "n.",
      "def": "茶"
    },
    {
      "word": "teach",
      "pos": "vi., vt.",
      "def": "教授"
    },
    {
      "word": "teacher",
      "pos": "n.",
      "def": "教師"
    },
    {
      "word": "tell",
      "pos": "vt.",
      "def": "告訴；分辨"
    },
    {
      "word": "ten",
      "pos": "n.",
      "def": "十"
    },
    {
      "word": "than conj. 比",
      "pos": "prep.",
      "def": "超過"
    },
    {
      "word": "thank",
      "pos": "vt.",
      "def": "感謝"
    },
    {
      "word": "that",
      "pos": "adj., pron.",
      "def": "那個"
    },
    {
      "word": "the",
      "pos": "art.",
      "def": "這(個)"
    },
    {
      "word": "their(s)",
      "pos": "pron.",
      "def": "他們的"
    },
    {
      "word": "them",
      "pos": "pron.",
      "def": "他們"
    },
    {
      "word": "then",
      "pos": "n., adv.",
      "def": "那時"
    },
    {
      "word": "there",
      "pos": "n., adv.",
      "def": "(在)那裡 int. 好啦!"
    },
    {
      "word": "these",
      "pos": "adj., pron.",
      "def": "這些"
    },
    {
      "word": "they",
      "pos": "pron.",
      "def": "他們"
    },
    {
      "word": "thing",
      "pos": "n.",
      "def": "物品"
    },
    {
      "word": "think",
      "pos": "vi.",
      "def": "vt. 想"
    },
    {
      "word": "third",
      "pos": "adj.",
      "def": "第三的"
    },
    {
      "word": "thirteen",
      "pos": "n.",
      "def": "十三"
    },
    {
      "word": "thirty",
      "pos": "n.",
      "def": "三十"
    },
    {
      "word": "this",
      "pos": "adj., pron.",
      "def": "這個"
    },
    {
      "word": "those",
      "pos": "adj., pron.",
      "def": "那些"
    },
    {
      "word": "though conj. 雖然",
      "pos": "adv.",
      "def": "不過"
    },
    {
      "word": "thought",
      "pos": "n.",
      "def": "想法"
    },
    {
      "word": "thousand",
      "pos": "n.",
      "def": "千"
    },
    {
      "word": "three",
      "pos": "n.",
      "def": "三"
    },
    {
      "word": "throw",
      "pos": "vi., vt.",
      "def": "投；拋"
    },
    {
      "word": "Thursday/Thurs./Thur.",
      "pos": "n.",
      "def": "星期四"
    },
    {
      "word": "thus",
      "pos": "adv.",
      "def": "因此"
    },
    {
      "word": "ticket",
      "pos": "n.",
      "def": "票"
    },
    {
      "word": "tie vt. vi. 栓；繫",
      "pos": "n.",
      "def": "領帶"
    },
    {
      "word": "tiger",
      "pos": "n.",
      "def": "虎"
    },
    {
      "word": "time",
      "pos": "n.",
      "def": "時間"
    },
    {
      "word": "tiny",
      "pos": "adj.",
      "def": "極小的"
    },
    {
      "word": "tire",
      "pos": "n.",
      "def": "輪胎 (2) vt.使疲倦"
    },
    {
      "word": "to",
      "pos": "prep.",
      "def": "向；往；到"
    },
    {
      "word": "today",
      "pos": "n.",
      "def": "今天"
    },
    {
      "word": "together",
      "pos": "adv.",
      "def": "一起"
    },
    {
      "word": "tomorrow",
      "pos": "n.",
      "def": "明天"
    },
    {
      "word": "tone",
      "pos": "n.",
      "def": "音調"
    },
    {
      "word": "tonight",
      "pos": "n.",
      "def": "今晚"
    },
    {
      "word": "too",
      "pos": "adv.",
      "def": "也"
    },
    {
      "word": "tool",
      "pos": "n.",
      "def": "工具"
    },
    {
      "word": "top",
      "pos": "n.",
      "def": "頂部"
    },
    {
      "word": "total",
      "pos": "adj.",
      "def": "總計的"
    },
    {
      "word": "touch",
      "pos": "vt.",
      "def": "觸摸"
    },
    {
      "word": "toward(s)",
      "pos": "prep.",
      "def": "朝向"
    },
    {
      "word": "town",
      "pos": "n.",
      "def": "城鎮"
    },
    {
      "word": "toy",
      "pos": "n.",
      "def": "玩具"
    },
    {
      "word": "train",
      "pos": "n.",
      "def": "火車 (2) vt.訓練"
    },
    {
      "word": "tree",
      "pos": "n.",
      "def": "樹"
    },
    {
      "word": "trip",
      "pos": "n.",
      "def": "旅行"
    },
    {
      "word": "trouble",
      "pos": "n.",
      "def": "麻煩"
    },
    {
      "word": "true",
      "pos": "adj.",
      "def": "真實的"
    },
    {
      "word": "try",
      "pos": "vi., vt.",
      "def": "嘗試"
    },
    {
      "word": "T-shirt",
      "pos": "n.",
      "def": "短袖圓領汗衫"
    },
    {
      "word": "Tuesday/ Tue.",
      "pos": "n.",
      "def": "星期二"
    },
    {
      "word": "tummy",
      "pos": "n.",
      "def": "肚子"
    },
    {
      "word": "turn",
      "pos": "vi.",
      "def": "vt. 使轉動"
    },
    {
      "word": "twelve",
      "pos": "n.",
      "def": "十二"
    },
    {
      "word": "twenty",
      "pos": "n.",
      "def": "二十"
    },
    {
      "word": "twice",
      "pos": "adv.",
      "def": "兩次"
    },
    {
      "word": "two",
      "pos": "n.",
      "def": "二"
    },
    {
      "word": "uncle",
      "pos": "n.",
      "def": "叔叔；伯父；舅舅"
    },
    {
      "word": "under",
      "pos": "prep.",
      "def": "在…下面"
    },
    {
      "word": "understand",
      "pos": "vt.",
      "def": "理解"
    },
    {
      "word": "unit",
      "pos": "n.",
      "def": "單位"
    },
    {
      "word": "until/till",
      "pos": "prep.",
      "def": "直到…為止"
    },
    {
      "word": "up",
      "pos": "adv.",
      "def": "向上"
    },
    {
      "word": "upstairs",
      "pos": "adv.",
      "def": "在樓上"
    },
    {
      "word": "us",
      "pos": "pron.",
      "def": "(受格)我們"
    },
    {
      "word": "use",
      "pos": "vt.",
      "def": "使用"
    },
    {
      "word": "useful",
      "pos": "adj.",
      "def": "有用的"
    },
    {
      "word": "vegetable",
      "pos": "n.",
      "def": "蔬菜"
    },
    {
      "word": "very",
      "pos": "adv.",
      "def": "(1) 非常"
    },
    {
      "word": "view",
      "pos": "n.",
      "def": "視野"
    },
    {
      "word": "visit",
      "pos": "vt.",
      "def": "參觀"
    },
    {
      "word": "voice",
      "pos": "n.",
      "def": "聲音"
    },
    {
      "word": "wait",
      "pos": "vi.",
      "def": "等待"
    },
    {
      "word": "walk",
      "pos": "vi.",
      "def": "vt. 走"
    },
    {
      "word": "wall",
      "pos": "n.",
      "def": "牆"
    },
    {
      "word": "want",
      "pos": "vt.",
      "def": "想要"
    },
    {
      "word": "war",
      "pos": "n.",
      "def": "戰爭"
    },
    {
      "word": "warm",
      "pos": "adj.",
      "def": "溫暖的"
    },
    {
      "word": "wash",
      "pos": "vt.",
      "def": "洗"
    },
    {
      "word": "waste",
      "pos": "vt.",
      "def": "浪費"
    },
    {
      "word": "watch",
      "pos": "n.",
      "def": "手錶；監視"
    },
    {
      "word": "",
      "pos": "vt.",
      "def": "觀看 vi.注視"
    },
    {
      "word": "water",
      "pos": "n.",
      "def": "水"
    },
    {
      "word": "way",
      "pos": "n.",
      "def": "路"
    },
    {
      "word": "we",
      "pos": "pron.",
      "def": "(主格)我們"
    },
    {
      "word": "weak",
      "pos": "adj.",
      "def": "虛弱的"
    },
    {
      "word": "wear",
      "pos": "vt.",
      "def": "穿"
    },
    {
      "word": "weather",
      "pos": "n.",
      "def": "天氣"
    },
    {
      "word": "wedding",
      "pos": "n.",
      "def": "婚禮"
    },
    {
      "word": "Wednesday/Wed. n",
      "pos": "",
      "def": "星期三"
    },
    {
      "word": "week",
      "pos": "n.",
      "def": "週"
    },
    {
      "word": "weekend",
      "pos": "n.",
      "def": "週末"
    },
    {
      "word": "weigh",
      "pos": "vt.",
      "def": "秤…的重量"
    },
    {
      "word": "weight",
      "pos": "n.",
      "def": "重量"
    },
    {
      "word": "welcome",
      "pos": "vt.",
      "def": "歡迎"
    },
    {
      "word": "well adv.",
      "pos": "",
      "def": "很好地 (2)n.井 adj.健康的"
    },
    {
      "word": "west",
      "pos": "n.",
      "def": "西"
    },
    {
      "word": "what",
      "pos": "pron.",
      "def": "什麼"
    },
    {
      "word": "when",
      "pos": "adv.",
      "def": "conj. pron. 何時"
    },
    {
      "word": "where",
      "pos": "adv.",
      "def": "conj. pron. 在哪裡"
    },
    {
      "word": "whether",
      "pos": "conj.",
      "def": "是否"
    },
    {
      "word": "which",
      "pos": "pron.",
      "def": "哪一個"
    },
    {
      "word": "while",
      "pos": "conj.",
      "def": "當…時；然而 (2) n.一會兒 (3) vt.消磨(時光)"
    },
    {
      "word": "white",
      "pos": "adj.",
      "def": "白色的"
    },
    {
      "word": "who",
      "pos": "pron.",
      "def": "誰"
    },
    {
      "word": "whole",
      "pos": "adj.",
      "def": "全部的"
    },
    {
      "word": "whom pron.(who",
      "pos": "",
      "def": "的受格)誰"
    },
    {
      "word": "whose",
      "pos": "pron.",
      "def": "誰的"
    },
    {
      "word": "why",
      "pos": "adv.",
      "def": "為什麼"
    },
    {
      "word": "wide",
      "pos": "adj.",
      "def": "寬闊的"
    },
    {
      "word": "wife",
      "pos": "n.",
      "def": "妻子"
    },
    {
      "word": "will",
      "pos": "n.",
      "def": "意志；遺囑 (2) aux.將"
    },
    {
      "word": "win",
      "pos": "vt.",
      "def": "贏"
    },
    {
      "word": "wind",
      "pos": "n.",
      "def": "風"
    },
    {
      "word": "window",
      "pos": "n.",
      "def": "窗戶"
    },
    {
      "word": "wine",
      "pos": "n.",
      "def": "紅酒"
    },
    {
      "word": "winter",
      "pos": "n.",
      "def": "冬天"
    },
    {
      "word": "wish",
      "pos": "vt.",
      "def": "但願"
    },
    {
      "word": "with prpe.",
      "pos": "",
      "def": "與…一起"
    },
    {
      "word": "woman",
      "pos": "n.",
      "def": "女人"
    },
    {
      "word": "wood(s)",
      "pos": "n.",
      "def": "木頭"
    },
    {
      "word": "word",
      "pos": "n.",
      "def": "字"
    },
    {
      "word": "work",
      "pos": "n.",
      "def": "vi. vt.工作"
    },
    {
      "word": "worker",
      "pos": "n.",
      "def": "工人"
    },
    {
      "word": "world",
      "pos": "n.",
      "def": "世界"
    },
    {
      "word": "worm",
      "pos": "n.",
      "def": "蠕蟲"
    },
    {
      "word": "worry",
      "pos": "vt.",
      "def": "使擔心"
    },
    {
      "word": "worse",
      "pos": "adj.",
      "def": "更壞的"
    },
    {
      "word": "worst",
      "pos": "adj.",
      "def": "最壞的"
    },
    {
      "word": "write",
      "pos": "vt.",
      "def": "寫下"
    },
    {
      "word": "writer",
      "pos": "n.",
      "def": "作者"
    },
    {
      "word": "wrong",
      "pos": "adj.",
      "def": "錯誤的"
    },
    {
      "word": "yam/sweet potato",
      "pos": "n.",
      "def": "番薯"
    },
    {
      "word": "year",
      "pos": "n.",
      "def": "年"
    },
    {
      "word": "yellow",
      "pos": "adj.",
      "def": "黃色的"
    },
    {
      "word": "yes/yeah",
      "pos": "n., adv.",
      "def": "是"
    },
    {
      "word": "yesterday",
      "pos": "n.",
      "def": "昨天"
    },
    {
      "word": "yet",
      "pos": "adv.",
      "def": "然而；還(沒)"
    },
    {
      "word": "you",
      "pos": "pron.",
      "def": "(主格)你"
    },
    {
      "word": "young",
      "pos": "adj.",
      "def": "年輕的"
    },
    {
      "word": "your(s)",
      "pos": "adj.",
      "def": "你的；你們的"
    },
    {
      "word": "yucky",
      "pos": "adj.",
      "def": "噁心的"
    }
  ],
  "2": [
    {
      "word": "ability",
      "pos": "n.",
      "def": "能力"
    },
    {
      "word": "abroad",
      "pos": "adv.",
      "def": "在國外"
    },
    {
      "word": "absence",
      "pos": "n.",
      "def": "缺席"
    },
    {
      "word": "absent",
      "pos": "adj.",
      "def": "缺席的"
    },
    {
      "word": "accept",
      "pos": "vt.",
      "def": "vi.接受"
    },
    {
      "word": "active",
      "pos": "adj.",
      "def": "活潑的"
    },
    {
      "word": "addition",
      "pos": "n.",
      "def": "附加"
    },
    {
      "word": "advance",
      "pos": "vt.",
      "def": "vi.促進"
    },
    {
      "word": "affair",
      "pos": "n.",
      "def": "事情"
    },
    {
      "word": "aid",
      "pos": "vt.",
      "def": "vi.幫助"
    },
    {
      "word": "aim",
      "pos": "vt.",
      "def": "vi.把……瞄準"
    },
    {
      "word": "aircraft",
      "pos": "n.",
      "def": "飛機"
    },
    {
      "word": "airline",
      "pos": "n.",
      "def": "航線； 航空公司"
    },
    {
      "word": "alarm",
      "pos": "n.",
      "def": "警報器"
    },
    {
      "word": "album",
      "pos": "n.",
      "def": "相簿；專輯"
    },
    {
      "word": "alike",
      "pos": "adj.",
      "def": "相同的"
    },
    {
      "word": "alive",
      "pos": "adj.",
      "def": "活著的"
    },
    {
      "word": "almond",
      "pos": "n.",
      "def": "杏仁"
    },
    {
      "word": "aloud",
      "pos": "adv.",
      "def": "大聲地"
    },
    {
      "word": "alphabet",
      "pos": "n.",
      "def": "字母系統"
    },
    {
      "word": "although",
      "pos": "conj.",
      "def": "儘管"
    },
    {
      "word": "altogether",
      "pos": "adv.",
      "def": "完全"
    },
    {
      "word": "amount",
      "pos": "n.",
      "def": "數量"
    },
    {
      "word": "ancient",
      "pos": "adj.",
      "def": "古代的"
    },
    {
      "word": "ankle",
      "pos": "n.",
      "def": "足踝"
    },
    {
      "word": "anybody/anyone",
      "pos": "pron.",
      "def": "任何人"
    },
    {
      "word": "anyhow",
      "pos": "adv.",
      "def": "無論如何"
    },
    {
      "word": "anytime",
      "pos": "adv.",
      "def": "任何時候"
    },
    {
      "word": "anyway",
      "pos": "adv.",
      "def": "無論如何"
    },
    {
      "word": "anywhere/anyplace",
      "pos": "adv.",
      "def": "在任何地方"
    },
    {
      "word": "apartment",
      "pos": "n.",
      "def": "公寓房間"
    },
    {
      "word": "appearance",
      "pos": "n.",
      "def": "顯露"
    },
    {
      "word": "appetite",
      "pos": "n.",
      "def": "食慾"
    },
    {
      "word": "apply",
      "pos": "vt.",
      "def": "vi.塗；申請"
    },
    {
      "word": "apron",
      "pos": "n.",
      "def": "圍裙"
    },
    {
      "word": "argue(ment)",
      "pos": "vi.",
      "def": "vt. (n.)爭吵"
    },
    {
      "word": "arm",
      "pos": "vi., vt.",
      "def": "武裝；備戰"
    },
    {
      "word": "armchair",
      "pos": "n.",
      "def": "扶手椅"
    },
    {
      "word": "arrange(ment)",
      "pos": "vt.",
      "def": "vi.(n.)安排"
    },
    {
      "word": "arrest",
      "pos": "n., vt.",
      "def": "逮捕"
    },
    {
      "word": "arrive",
      "pos": "vi.",
      "def": "到達"
    },
    {
      "word": "arrow",
      "pos": "n.",
      "def": "箭"
    },
    {
      "word": "article /essay",
      "pos": "n.",
      "def": "文章"
    },
    {
      "word": "artist",
      "pos": "n.",
      "def": "藝術家"
    },
    {
      "word": "asleep",
      "pos": "adj.",
      "def": "睡著的"
    },
    {
      "word": "assistant",
      "pos": "n.",
      "def": "助手"
    },
    {
      "word": "attack",
      "pos": "vi., vt.",
      "def": "襲擊"
    },
    {
      "word": "attend",
      "pos": "vt.",
      "def": "vi.出席"
    },
    {
      "word": "attention",
      "pos": "n.",
      "def": "注意力"
    },
    {
      "word": "avoid",
      "pos": "vt.",
      "def": "避開"
    },
    {
      "word": "baby-sit",
      "pos": "vi.",
      "def": "當臨時保姆"
    },
    {
      "word": "baby-sitter",
      "pos": "n.",
      "def": "臨時替人看小孩者"
    },
    {
      "word": "backward",
      "pos": "adj.",
      "def": "向後的"
    },
    {
      "word": "backward(s)",
      "pos": "adj.",
      "def": "向後"
    },
    {
      "word": "bake",
      "pos": "vt.",
      "def": "烘，烤"
    },
    {
      "word": "bakery",
      "pos": "n.",
      "def": "麵包店"
    },
    {
      "word": "balcony",
      "pos": "n.",
      "def": "陽臺"
    },
    {
      "word": "bamboo",
      "pos": "n.",
      "def": "竹子"
    },
    {
      "word": "banker",
      "pos": "n.",
      "def": "銀行家"
    },
    {
      "word": "barbecue/BBQ",
      "pos": "n.",
      "def": "烤肉"
    },
    {
      "word": "bark",
      "pos": "n.",
      "def": "vt. vi. 吠叫 (2) n. 樹皮"
    },
    {
      "word": "basement",
      "pos": "n.",
      "def": "地下室"
    },
    {
      "word": "basics",
      "pos": "a.",
      "def": "基礎的"
    },
    {
      "word": "basis",
      "pos": "n.",
      "def": "基礎"
    },
    {
      "word": "battle",
      "pos": "n.",
      "def": "戰鬥"
    },
    {
      "word": "bead",
      "pos": "n.",
      "def": "有孔小珠"
    },
    {
      "word": "bean",
      "pos": "n.",
      "def": "豆"
    },
    {
      "word": "bear",
      "pos": "vi., vt.",
      "def": "搬運；帶有；承受"
    },
    {
      "word": "beard n.（",
      "pos": "",
      "def": "下巴上的）鬍鬚"
    },
    {
      "word": "bedroom",
      "pos": "n.",
      "def": "臥室"
    },
    {
      "word": "beef",
      "pos": "n.",
      "def": "牛肉"
    },
    {
      "word": "beep",
      "pos": "n.",
      "def": "嗶嗶的聲音"
    },
    {
      "word": "beer",
      "pos": "n.",
      "def": "啤酒"
    },
    {
      "word": "beetle",
      "pos": "n.",
      "def": "甲蟲"
    },
    {
      "word": "beg",
      "pos": "vt.",
      "def": "乞討"
    },
    {
      "word": "beginner",
      "pos": "n.",
      "def": "初學者"
    },
    {
      "word": "belief",
      "pos": "n.",
      "def": "相信"
    },
    {
      "word": "believable",
      "pos": "adj.",
      "def": "可信的"
    },
    {
      "word": "belt",
      "pos": "n.",
      "def": "腰帶"
    },
    {
      "word": "bench",
      "pos": "n.",
      "def": "長椅"
    },
    {
      "word": "bend",
      "pos": "vt.",
      "def": "使彎曲"
    },
    {
      "word": "besides",
      "pos": "adv.",
      "def": "此外"
    },
    {
      "word": "bet",
      "pos": "n.",
      "def": "v. 打賭"
    },
    {
      "word": "beyond",
      "pos": "adv.",
      "def": "prep. 在更遠處"
    },
    {
      "word": "bill",
      "pos": "n.",
      "def": "帳單"
    },
    {
      "word": "bind",
      "pos": "n., vi., vt.",
      "def": "捆"
    },
    {
      "word": "bitter",
      "pos": "adj.",
      "def": "苦的"
    },
    {
      "word": "blackboard",
      "pos": "n.",
      "def": "黑板"
    },
    {
      "word": "blank",
      "pos": "adj.",
      "def": "空白的"
    },
    {
      "word": "blind",
      "pos": "adj.",
      "def": "瞎的"
    },
    {
      "word": "bloody",
      "pos": "adj.",
      "def": "流血的"
    },
    {
      "word": "board n.木板；伙食；委員會 vt. 用木板覆蓋；上(船、飛機等)；供…膳宿",
      "pos": "vi.",
      "def": "搭伙"
    },
    {
      "word": "boil",
      "pos": "n., vt., vi.",
      "def": "沸騰"
    },
    {
      "word": "bomb",
      "pos": "n.",
      "def": "vt. vi. 炸(彈)"
    },
    {
      "word": "bony",
      "pos": "adj.",
      "def": "骨的"
    },
    {
      "word": "bookcase",
      "pos": "n.",
      "def": "書架"
    },
    {
      "word": "borrow",
      "pos": "vt.",
      "def": "借"
    },
    {
      "word": "boss",
      "pos": "n.",
      "def": "老板"
    },
    {
      "word": "bother",
      "pos": "vi., vt.",
      "def": "打攪"
    },
    {
      "word": "bottle",
      "pos": "n.",
      "def": "瓶子"
    },
    {
      "word": "bow n.弓；蝴蝶結",
      "pos": "vi.",
      "def": "vt.鞠躬"
    },
    {
      "word": "bowling",
      "pos": "n.",
      "def": "保齡球運動"
    },
    {
      "word": "brain",
      "pos": "n.",
      "def": "腦袋"
    },
    {
      "word": "branch",
      "pos": "n.",
      "def": "樹枝"
    },
    {
      "word": "brand",
      "pos": "n.",
      "def": "商標"
    },
    {
      "word": "brick",
      "pos": "n.",
      "def": "磚塊"
    },
    {
      "word": "brief",
      "pos": "adj.",
      "def": "短暫的"
    },
    {
      "word": "broad",
      "pos": "adj.",
      "def": "寬的"
    },
    {
      "word": "broadcast",
      "pos": "n.",
      "def": "vt. vi. 廣播"
    },
    {
      "word": "brunch",
      "pos": "n.",
      "def": "早午餐"
    },
    {
      "word": "brush",
      "pos": "n.",
      "def": "vt. vi. 刷(子)"
    },
    {
      "word": "bun /roll",
      "pos": "n.",
      "def": "小圓麵包"
    },
    {
      "word": "bundle",
      "pos": "n.",
      "def": "vt. vi. 捆"
    },
    {
      "word": "burn",
      "pos": "n., vi., vt.",
      "def": "發熱；燒傷"
    },
    {
      "word": "burst",
      "pos": "n., vt., vi.",
      "def": "爆炸"
    },
    {
      "word": "business",
      "pos": "n.",
      "def": "職業；生意"
    },
    {
      "word": "button",
      "pos": "n.",
      "def": "鈕扣"
    },
    {
      "word": "cabbage",
      "pos": "n.",
      "def": "甘藍菜"
    },
    {
      "word": "cable",
      "pos": "n.",
      "def": "鋼索"
    },
    {
      "word": "café/cafe",
      "pos": "n.",
      "def": "咖啡廳"
    },
    {
      "word": "cafeteria",
      "pos": "n.",
      "def": "自助餐館"
    },
    {
      "word": "calendar",
      "pos": "n.",
      "def": "日曆"
    },
    {
      "word": "calm",
      "pos": "adj.",
      "def": "n.沉著(的) vi. vt. (使)鎮定"
    },
    {
      "word": "cancel",
      "pos": "vt.",
      "def": "取消；刪去"
    },
    {
      "word": "cancer",
      "pos": "n.",
      "def": "癌"
    },
    {
      "word": "candle",
      "pos": "n.",
      "def": "蠟燭"
    },
    {
      "word": "captain",
      "pos": "n.",
      "def": "船長"
    },
    {
      "word": "carpet",
      "pos": "n.",
      "def": "地毯"
    },
    {
      "word": "carrot",
      "pos": "n.",
      "def": "胡蘿蔔"
    },
    {
      "word": "cart",
      "pos": "n.",
      "def": "手推車"
    },
    {
      "word": "cartoon",
      "pos": "n.",
      "def": "卡通"
    },
    {
      "word": "cash",
      "pos": "n.",
      "def": "現金"
    },
    {
      "word": "cassette",
      "pos": "n.",
      "def": "卡式磁帶"
    },
    {
      "word": "castle",
      "pos": "n.",
      "def": "城堡"
    },
    {
      "word": "cave",
      "pos": "n.",
      "def": "洞穴"
    },
    {
      "word": "ceiling",
      "pos": "n.",
      "def": "天花板"
    },
    {
      "word": "cell",
      "pos": "n.",
      "def": "細胞"
    },
    {
      "word": "central",
      "pos": "adj.",
      "def": "中心的"
    },
    {
      "word": "century",
      "pos": "n.",
      "def": "世紀"
    },
    {
      "word": "cereal",
      "pos": "n.",
      "def": "麥片"
    },
    {
      "word": "chalk",
      "pos": "n.",
      "def": "粉筆"
    },
    {
      "word": "change",
      "pos": "vi., vt.",
      "def": "n.改變 (2) n.零錢"
    },
    {
      "word": "character",
      "pos": "n.",
      "def": "性格"
    },
    {
      "word": "charge",
      "pos": "n., vi., vt.",
      "def": "索價"
    },
    {
      "word": "cheap",
      "pos": "adj.",
      "def": "便宜的"
    },
    {
      "word": "cheat",
      "pos": "vi., vt.",
      "def": "欺騙"
    },
    {
      "word": "chemical",
      "pos": "adj.",
      "def": "化學的"
    },
    {
      "word": "chess",
      "pos": "n.",
      "def": "西洋棋"
    },
    {
      "word": "childish",
      "pos": "adj.",
      "def": "孩子的"
    },
    {
      "word": "childlike",
      "pos": "adj.",
      "def": "天真的"
    },
    {
      "word": "chin",
      "pos": "n.",
      "def": "下巴"
    },
    {
      "word": "chocolate",
      "pos": "n.",
      "def": "巧克力"
    },
    {
      "word": "choice",
      "pos": "n.",
      "def": "選擇"
    },
    {
      "word": "choose",
      "pos": "vi., vt.",
      "def": "挑選"
    },
    {
      "word": "chopstick(s)",
      "pos": "n.",
      "def": "筷子"
    },
    {
      "word": "circle",
      "pos": "n.",
      "def": "圓圈"
    },
    {
      "word": "citizen",
      "pos": "n.",
      "def": "公民"
    },
    {
      "word": "claim",
      "pos": "n., vi., vt.",
      "def": "要求"
    },
    {
      "word": "clap",
      "pos": "n., vi., vt.",
      "def": "拍（手）"
    },
    {
      "word": "classic",
      "pos": "adj.",
      "def": "典型的"
    },
    {
      "word": "claw",
      "pos": "n.",
      "def": "腳爪"
    },
    {
      "word": "clay",
      "pos": "n.",
      "def": "黏土"
    },
    {
      "word": "cleaner",
      "pos": "n.",
      "def": "清潔工"
    },
    {
      "word": "clerk",
      "pos": "n.",
      "def": "職員"
    },
    {
      "word": "clever",
      "pos": "adj.",
      "def": "伶俐的"
    },
    {
      "word": "climate",
      "pos": "n.",
      "def": "氣候"
    },
    {
      "word": "closet",
      "pos": "n.",
      "def": "衣櫥"
    },
    {
      "word": "cloth",
      "pos": "n.",
      "def": "布"
    },
    {
      "word": "clothe",
      "pos": "vt.",
      "def": "給……穿衣"
    },
    {
      "word": "clothes",
      "pos": "n.",
      "def": "服裝"
    },
    {
      "word": "clothing",
      "pos": "n.",
      "def": "衣服"
    },
    {
      "word": "cloudy",
      "pos": "adj.",
      "def": "多雲的"
    },
    {
      "word": "clown",
      "pos": "n.",
      "def": "小丑"
    },
    {
      "word": "club",
      "pos": "n.",
      "def": "社團"
    },
    {
      "word": "coach",
      "pos": "n.",
      "def": "馬車；教練"
    },
    {
      "word": "coal",
      "pos": "n.",
      "def": "煤"
    },
    {
      "word": "cock",
      "pos": "n.",
      "def": "公雞"
    },
    {
      "word": "cockroach/roach",
      "pos": "n.",
      "def": "蟑螂"
    },
    {
      "word": "coin",
      "pos": "n.",
      "def": "硬幣"
    },
    {
      "word": "collect",
      "pos": "vt.",
      "def": "收集"
    },
    {
      "word": "colorful",
      "pos": "adj.",
      "def": "鮮豔的"
    },
    {
      "word": "comb",
      "pos": "n.",
      "def": "vt. 梳(子)"
    },
    {
      "word": "comfortable",
      "pos": "adj.",
      "def": "舒適的"
    },
    {
      "word": "company",
      "pos": "n.",
      "def": "公司"
    },
    {
      "word": "compare",
      "pos": "vi., vt.",
      "def": "比較"
    },
    {
      "word": "complain",
      "pos": "vi.",
      "def": "vt. 抱怨"
    },
    {
      "word": "complete",
      "pos": "adj.",
      "def": "vt. 完整(的)"
    },
    {
      "word": "computer",
      "pos": "n.",
      "def": "電腦"
    },
    {
      "word": "confirm",
      "pos": "vt.",
      "def": "確定"
    },
    {
      "word": "conflict",
      "pos": "n., vi.",
      "def": "衝突"
    },
    {
      "word": "Confucius",
      "pos": "n.",
      "def": "孔子"
    },
    {
      "word": "congratulation(s)",
      "pos": "n.",
      "def": "祝賀"
    },
    {
      "word": "consider",
      "pos": "vi., vt.",
      "def": "考慮"
    },
    {
      "word": "contact",
      "pos": "n., vt.",
      "def": "接觸"
    },
    {
      "word": "contain",
      "pos": "vt.",
      "def": "包含"
    },
    {
      "word": "control",
      "pos": "n., vt.",
      "def": "控制"
    },
    {
      "word": "controller",
      "pos": "n.",
      "def": "管制者"
    },
    {
      "word": "convenient",
      "pos": "adj.",
      "def": "便利的"
    },
    {
      "word": "conversation",
      "pos": "n.",
      "def": "會話"
    },
    {
      "word": "cooker",
      "pos": "n.",
      "def": "烹調器具"
    },
    {
      "word": "copy/Xerox",
      "pos": "vi., vt.",
      "def": "n.複製(品)"
    },
    {
      "word": "corner",
      "pos": "n.",
      "def": "vt. 角落；使陷困境"
    },
    {
      "word": "costly",
      "pos": "adj.",
      "def": "貴重的"
    },
    {
      "word": "cotton",
      "pos": "n.",
      "def": "棉花"
    },
    {
      "word": "cough",
      "pos": "n.",
      "def": "vi. vt. 咳嗽"
    },
    {
      "word": "countryside",
      "pos": "n.",
      "def": "鄉間"
    },
    {
      "word": "county",
      "pos": "n.",
      "def": "郡"
    },
    {
      "word": "couple",
      "pos": "n.",
      "def": "雙； 夫婦"
    },
    {
      "word": "courage",
      "pos": "n.",
      "def": "勇氣"
    },
    {
      "word": "court",
      "pos": "n.",
      "def": "法院"
    },
    {
      "word": "cousin",
      "pos": "n.",
      "def": "堂(表)兄弟/姐妹"
    },
    {
      "word": "crab",
      "pos": "n.",
      "def": "蟹"
    },
    {
      "word": "crane",
      "pos": "n.",
      "def": "鶴"
    },
    {
      "word": "crayon",
      "pos": "n.",
      "def": "蠟筆"
    },
    {
      "word": "crazy",
      "pos": "adj.",
      "def": "瘋狂的"
    },
    {
      "word": "cream",
      "pos": "n.",
      "def": "奶油"
    },
    {
      "word": "create",
      "pos": "vt.",
      "def": "創造"
    },
    {
      "word": "crime",
      "pos": "n.",
      "def": "罪行"
    },
    {
      "word": "crisis",
      "pos": "n.",
      "def": "危機"
    },
    {
      "word": "crop",
      "pos": "n.",
      "def": "作物"
    },
    {
      "word": "cross n.十字形",
      "pos": "vt.",
      "def": "vi 橫越 adj.發怒的"
    },
    {
      "word": "crow",
      "pos": "vi.",
      "def": "啼叫"
    },
    {
      "word": "crowd",
      "pos": "n.",
      "def": "人群"
    },
    {
      "word": "cruel",
      "pos": "adj.",
      "def": "殘忍的"
    },
    {
      "word": "culture",
      "pos": "n.",
      "def": "文化"
    },
    {
      "word": "cure vt. 治癒",
      "pos": "n.",
      "def": "療法"
    },
    {
      "word": "curious",
      "pos": "adj.",
      "def": "好奇的"
    },
    {
      "word": "curtain/drape",
      "pos": "n.",
      "def": "窗簾"
    },
    {
      "word": "custom",
      "pos": "n.",
      "def": "慣例"
    },
    {
      "word": "customer",
      "pos": "n.",
      "def": "顧客"
    },
    {
      "word": "daily",
      "pos": "adj.",
      "def": "每日的"
    },
    {
      "word": "damage",
      "pos": "n.",
      "def": "vt. 損害"
    },
    {
      "word": "dangerous",
      "pos": "adj.",
      "def": "危險的"
    },
    {
      "word": "data",
      "pos": "n.",
      "def": "資料"
    },
    {
      "word": "dawn",
      "pos": "n.",
      "def": "黎明"
    },
    {
      "word": "deaf",
      "pos": "adj.",
      "def": "聾的"
    },
    {
      "word": "debate",
      "pos": "n.",
      "def": "vt. vi. 辯論"
    },
    {
      "word": "debt",
      "pos": "n.",
      "def": "債"
    },
    {
      "word": "decision",
      "pos": "n.",
      "def": "決定"
    },
    {
      "word": "decorate",
      "pos": "vi., vt.",
      "def": "裝飾"
    },
    {
      "word": "degree",
      "pos": "n.",
      "def": "度數"
    },
    {
      "word": "delay",
      "pos": "n., vi., vt.",
      "def": "延緩"
    },
    {
      "word": "delicious",
      "pos": "adj.",
      "def": "美味的"
    },
    {
      "word": "deliver",
      "pos": "vi., vt.",
      "def": "投遞"
    },
    {
      "word": "dentist",
      "pos": "n.",
      "def": "牙醫"
    },
    {
      "word": "deny",
      "pos": "vt.",
      "def": "否認"
    },
    {
      "word": "department",
      "pos": "n.",
      "def": "部"
    },
    {
      "word": "depend",
      "pos": "vi.",
      "def": "信賴"
    },
    {
      "word": "depth",
      "pos": "n.",
      "def": "深度"
    },
    {
      "word": "describe",
      "pos": "vt.",
      "def": "描寫"
    },
    {
      "word": "desert",
      "pos": "n.",
      "def": "沙漠 (2) vt.拋棄"
    },
    {
      "word": "design",
      "pos": "n., vi., vt.",
      "def": "設計"
    },
    {
      "word": "desire",
      "pos": "n., vt.",
      "def": "渴望"
    },
    {
      "word": "dessert",
      "pos": "n.",
      "def": "甜點"
    },
    {
      "word": "detect",
      "pos": "vt.",
      "def": "察覺"
    },
    {
      "word": "develop(ment)",
      "pos": "vt.",
      "def": "vi.(n)發展"
    },
    {
      "word": "dew",
      "pos": "n.",
      "def": "露水"
    },
    {
      "word": "dial",
      "pos": "n.",
      "def": "刻度盤 vt. vi. 調頻；撥號"
    },
    {
      "word": "diamond",
      "pos": "n.",
      "def": "鑽石"
    },
    {
      "word": "diary",
      "pos": "n.",
      "def": "日記"
    },
    {
      "word": "dictionary",
      "pos": "n.",
      "def": "字典"
    },
    {
      "word": "difference",
      "pos": "n.",
      "def": "差異"
    },
    {
      "word": "difficulty",
      "pos": "n.",
      "def": "困難"
    },
    {
      "word": "dinosaur",
      "pos": "n.",
      "def": "恐龍"
    },
    {
      "word": "direction",
      "pos": "n.",
      "def": "方向"
    },
    {
      "word": "director",
      "pos": "n.",
      "def": "主管"
    },
    {
      "word": "disagree(ment) vi.(n.)",
      "pos": "",
      "def": "意見不一"
    },
    {
      "word": "disappear",
      "pos": "vi.",
      "def": "消失"
    },
    {
      "word": "discuss",
      "pos": "vt.",
      "def": "討論"
    },
    {
      "word": "discussion",
      "pos": "n.",
      "def": "討論"
    },
    {
      "word": "dishonest",
      "pos": "adj.",
      "def": "不誠實的"
    },
    {
      "word": "display",
      "pos": "n., vt.",
      "def": "陳列"
    },
    {
      "word": "distance",
      "pos": "n.",
      "def": "距離"
    },
    {
      "word": "distant",
      "pos": "adj.",
      "def": "遠的"
    },
    {
      "word": "divide",
      "pos": "n., vi., vt.",
      "def": "劃分；分水嶺"
    },
    {
      "word": "division",
      "pos": "n.",
      "def": "分割"
    },
    {
      "word": "dizzy",
      "pos": "adj.",
      "def": "頭暈目眩的"
    },
    {
      "word": "dolphin",
      "pos": "n.",
      "def": "海豚"
    },
    {
      "word": "donkey",
      "pos": "n.",
      "def": "驢"
    },
    {
      "word": "dot",
      "pos": "n.",
      "def": "vt. vi. (打)點"
    },
    {
      "word": "double",
      "pos": "adj.",
      "def": "n.兩倍(的) vt. vi. 加倍"
    },
    {
      "word": "doubt",
      "pos": "n., vi., vt.",
      "def": "懷疑"
    },
    {
      "word": "doughnut",
      "pos": "n.",
      "def": "甜甜圈"
    },
    {
      "word": "downtown",
      "pos": "n.",
      "def": "城市商業區"
    },
    {
      "word": "Dr.",
      "pos": "n.",
      "def": "醫生"
    },
    {
      "word": "drag",
      "pos": "n., vi., vt.",
      "def": "拖"
    },
    {
      "word": "dragon",
      "pos": "n.",
      "def": "龍"
    },
    {
      "word": "dragonfly",
      "pos": "n.",
      "def": "蜻蜓"
    },
    {
      "word": "drama",
      "pos": "n.",
      "def": "戲劇"
    },
    {
      "word": "drawer",
      "pos": "n.",
      "def": "抽屜"
    },
    {
      "word": "drawing",
      "pos": "n.",
      "def": "圖畫"
    },
    {
      "word": "dress vt. vi. 打扮",
      "pos": "n.",
      "def": "女裝"
    },
    {
      "word": "drop",
      "pos": "n.",
      "def": "滴 vt. vi. (使)滴下"
    },
    {
      "word": "drug",
      "pos": "n.",
      "def": "藥品 vt. vi. (使)服麻醉藥"
    },
    {
      "word": "drugstore",
      "pos": "n.",
      "def": "藥房"
    },
    {
      "word": "drum",
      "pos": "n.",
      "def": "鼓"
    },
    {
      "word": "dryer",
      "pos": "n.",
      "def": "烘乾機"
    },
    {
      "word": "dull",
      "pos": "adj.",
      "def": "乏味的"
    },
    {
      "word": "dumb",
      "pos": "adj.",
      "def": "不能說話的"
    },
    {
      "word": "dumpling",
      "pos": "n.",
      "def": "餃子"
    },
    {
      "word": "duty",
      "pos": "n.",
      "def": "義務"
    },
    {
      "word": "earn",
      "pos": "vt.",
      "def": "賺得"
    },
    {
      "word": "earthquake",
      "pos": "n.",
      "def": "地震"
    },
    {
      "word": "eastern",
      "pos": "adj.",
      "def": "東方的"
    },
    {
      "word": "education",
      "pos": "n.",
      "def": "教育"
    },
    {
      "word": "effect",
      "pos": "n.",
      "def": "影響"
    },
    {
      "word": "effective",
      "pos": "adj.",
      "def": "有效的"
    },
    {
      "word": "effort",
      "pos": "n.",
      "def": "努力"
    },
    {
      "word": "elder",
      "pos": "adj.",
      "def": "年齡較大的"
    },
    {
      "word": "elect",
      "pos": "vt.",
      "def": "推選"
    },
    {
      "word": "element",
      "pos": "n.",
      "def": "要素"
    },
    {
      "word": "elevator",
      "pos": "n.",
      "def": "電梯"
    },
    {
      "word": "emotion",
      "pos": "n.",
      "def": "情感"
    },
    {
      "word": "encourage(ment)",
      "pos": "vt.",
      "def": "(n.)鼓勵"
    },
    {
      "word": "ending",
      "pos": "n.",
      "def": "結局"
    },
    {
      "word": "enemy",
      "pos": "n.",
      "def": "敵人"
    },
    {
      "word": "energy",
      "pos": "n.",
      "def": "活力"
    },
    {
      "word": "enjoy(ment)",
      "pos": "vt.",
      "def": "(n.) 樂趣"
    },
    {
      "word": "entire",
      "pos": "adj.",
      "def": "全部的"
    },
    {
      "word": "entrance",
      "pos": "n.",
      "def": "入口"
    },
    {
      "word": "envelope",
      "pos": "n.",
      "def": "信封"
    },
    {
      "word": "environment",
      "pos": "n.",
      "def": "環境"
    },
    {
      "word": "eraser",
      "pos": "n.",
      "def": "橡皮擦"
    },
    {
      "word": "error",
      "pos": "n.",
      "def": "失誤"
    },
    {
      "word": "especially",
      "pos": "adv.",
      "def": "尤其"
    },
    {
      "word": "event",
      "pos": "n.",
      "def": "事件"
    },
    {
      "word": "exact",
      "pos": "adj.",
      "def": "確切的"
    },
    {
      "word": "excellent",
      "pos": "adj.",
      "def": "傑出的"
    },
    {
      "word": "excite(ment)",
      "pos": "vt.",
      "def": "(n.) 興奮"
    },
    {
      "word": "excuse",
      "pos": "n.",
      "def": "藉口"
    },
    {
      "word": "exercise",
      "pos": "n., v.",
      "def": "運動"
    },
    {
      "word": "exist",
      "pos": "vi.",
      "def": "存在"
    },
    {
      "word": "expect",
      "pos": "vt.",
      "def": "預期"
    },
    {
      "word": "expensive",
      "pos": "adj.",
      "def": "昂貴的"
    },
    {
      "word": "experience",
      "pos": "n.",
      "def": "經驗"
    },
    {
      "word": "expert",
      "pos": "n.",
      "def": "專家"
    },
    {
      "word": "explain",
      "pos": "vi.",
      "def": "vt. 解釋"
    },
    {
      "word": "express",
      "pos": "vt.",
      "def": "表達"
    },
    {
      "word": "extra",
      "pos": "adj.",
      "def": "額外的"
    },
    {
      "word": "eyebrow/brow",
      "pos": "n.",
      "def": "眉毛"
    },
    {
      "word": "fail",
      "pos": "vi.",
      "def": "vt. 失敗"
    },
    {
      "word": "failure",
      "pos": "n.",
      "def": "失敗"
    },
    {
      "word": "fair",
      "pos": "adj.",
      "def": "公正的；美麗的；(2) n. 美好的事物；市集"
    },
    {
      "word": "famous",
      "pos": "adj.",
      "def": "著名的"
    },
    {
      "word": "fault",
      "pos": "n.",
      "def": "缺點"
    },
    {
      "word": "favor",
      "pos": "n.",
      "def": "vt. 贊成"
    },
    {
      "word": "favorite",
      "pos": "adj.",
      "def": "特別喜愛的"
    },
    {
      "word": "fearful",
      "pos": "adj.",
      "def": "可怕的"
    },
    {
      "word": "fee",
      "pos": "n.",
      "def": "費用"
    },
    {
      "word": "fellow",
      "pos": "n.",
      "def": "夥伴"
    },
    {
      "word": "female",
      "pos": "n., adj.",
      "def": "女性(的)"
    },
    {
      "word": "fence",
      "pos": "n.",
      "def": "柵欄"
    },
    {
      "word": "festival",
      "pos": "n.",
      "def": "節日"
    },
    {
      "word": "fever",
      "pos": "n.",
      "def": "發燒"
    },
    {
      "word": "field",
      "pos": "n.",
      "def": "原野"
    },
    {
      "word": "fighter",
      "pos": "n.",
      "def": "鬥士"
    },
    {
      "word": "figure",
      "pos": "n.",
      "def": "體形"
    },
    {
      "word": "film",
      "pos": "n.",
      "def": "電影"
    },
    {
      "word": "fireman/firewoman",
      "pos": "n.",
      "def": "消防隊員"
    },
    {
      "word": "firm",
      "pos": "adj.",
      "def": "穩固的"
    },
    {
      "word": "fisherman",
      "pos": "n.",
      "def": "漁夫"
    },
    {
      "word": "fit",
      "pos": "adj., vi., vt.",
      "def": "合身"
    },
    {
      "word": "fix",
      "pos": "vi., vt.",
      "def": "固定；修理"
    },
    {
      "word": "flag",
      "pos": "n.",
      "def": "旗"
    },
    {
      "word": "flash",
      "pos": "n., vi., vt.",
      "def": "閃爍"
    },
    {
      "word": "flashlight/flash",
      "pos": "n.",
      "def": "手電筒"
    },
    {
      "word": "flat",
      "pos": "adj.",
      "def": "平坦的"
    },
    {
      "word": "flight",
      "pos": "n.",
      "def": "飛行"
    },
    {
      "word": "flood",
      "pos": "n.",
      "def": "水災 vt. vi. 淹沒"
    },
    {
      "word": "flour",
      "pos": "n.",
      "def": "麵粉"
    },
    {
      "word": "flow",
      "pos": "n., vt., vi.",
      "def": "流動"
    },
    {
      "word": "flu",
      "pos": "n.",
      "def": "流行性感冒"
    },
    {
      "word": "flute",
      "pos": "n.",
      "def": "長笛"
    },
    {
      "word": "focus",
      "pos": "n.",
      "def": "焦點 vt. vi. 聚焦"
    },
    {
      "word": "foggy",
      "pos": "adj.",
      "def": "有霧的"
    },
    {
      "word": "following",
      "pos": "adj.",
      "def": "接著的"
    },
    {
      "word": "fool",
      "pos": "n.",
      "def": "(1)傻瓜 vt. (2)欺騙"
    },
    {
      "word": "foolish",
      "pos": "adj.",
      "def": "愚蠢的"
    },
    {
      "word": "football",
      "pos": "n.",
      "def": "橄欖球；足球"
    },
    {
      "word": "foreigner",
      "pos": "n.",
      "def": "外國人"
    },
    {
      "word": "forgive",
      "pos": "vt.",
      "def": "原諒"
    },
    {
      "word": "form",
      "pos": "n.",
      "def": "形狀 vt. 形成"
    },
    {
      "word": "formal",
      "pos": "adj.",
      "def": "正式的"
    },
    {
      "word": "former",
      "pos": "adj.",
      "def": "從前的"
    },
    {
      "word": "forward",
      "pos": "adj., adv.",
      "def": "向前 vt. 轉交"
    },
    {
      "word": "forward(s)",
      "pos": "adv.",
      "def": "向前"
    },
    {
      "word": "fox",
      "pos": "n.",
      "def": "狐"
    },
    {
      "word": "frank",
      "pos": "adj.",
      "def": "坦白的"
    },
    {
      "word": "freedom",
      "pos": "n.",
      "def": "自由"
    },
    {
      "word": "freezer",
      "pos": "n.",
      "def": "冰箱；冷凍櫃"
    },
    {
      "word": "friendly",
      "pos": "adj.",
      "def": "親切的"
    },
    {
      "word": "fright",
      "pos": "n.",
      "def": "驚嚇"
    },
    {
      "word": "frighten",
      "pos": "vt.",
      "def": "使驚恐"
    },
    {
      "word": "function",
      "pos": "n.",
      "def": "功能"
    },
    {
      "word": "further",
      "pos": "adj.",
      "def": "adv. 更遠的"
    },
    {
      "word": "future",
      "pos": "n.",
      "def": "未來"
    },
    {
      "word": "gain",
      "pos": "n., vi., vt.",
      "def": "獲得"
    },
    {
      "word": "garage",
      "pos": "n.",
      "def": "車庫"
    },
    {
      "word": "garbage",
      "pos": "n.",
      "def": "垃圾"
    },
    {
      "word": "gardener",
      "pos": "n.",
      "def": "園丁"
    },
    {
      "word": "gate",
      "pos": "n.",
      "def": "大門"
    },
    {
      "word": "gather",
      "pos": "vt.",
      "def": "收集"
    },
    {
      "word": "general",
      "pos": "n.",
      "def": "將軍"
    },
    {
      "word": "generous",
      "pos": "adj.",
      "def": "慷慨的"
    },
    {
      "word": "gentle",
      "pos": "adj.",
      "def": "溫和的"
    },
    {
      "word": "gentleman",
      "pos": "n.",
      "def": "紳士"
    },
    {
      "word": "geography",
      "pos": "n.",
      "def": "地理學"
    },
    {
      "word": "giant",
      "pos": "n.",
      "def": "巨人 adj. 巨大的"
    },
    {
      "word": "giraffe",
      "pos": "n.",
      "def": "長頸鹿"
    },
    {
      "word": "glove(s)",
      "pos": "n.",
      "def": "手套"
    },
    {
      "word": "glue",
      "pos": "n.",
      "def": "膠水"
    },
    {
      "word": "goal",
      "pos": "n.",
      "def": "終點；目標"
    },
    {
      "word": "goat",
      "pos": "n.",
      "def": "山羊"
    },
    {
      "word": "golden",
      "pos": "adj.",
      "def": "金色的"
    },
    {
      "word": "golf",
      "pos": "n.",
      "def": "高爾夫球運動"
    },
    {
      "word": "govern",
      "pos": "vi., vt.",
      "def": "管理"
    },
    {
      "word": "government",
      "pos": "n.",
      "def": "政府"
    },
    {
      "word": "grade",
      "pos": "n.",
      "def": "vt. vi. (分)等級"
    },
    {
      "word": "grape",
      "pos": "n.",
      "def": "葡萄"
    },
    {
      "word": "grassy",
      "pos": "adj.",
      "def": "長滿草的"
    },
    {
      "word": "greedy",
      "pos": "adj.",
      "def": "貪食的"
    },
    {
      "word": "greet",
      "pos": "vt.",
      "def": "問候"
    },
    {
      "word": "growth",
      "pos": "n.",
      "def": "成長"
    },
    {
      "word": "guard",
      "pos": "n.",
      "def": "vt. vi. 守衛"
    },
    {
      "word": "guava",
      "pos": "n.",
      "def": "芭樂"
    },
    {
      "word": "guitar",
      "pos": "n.",
      "def": "吉他"
    },
    {
      "word": "guy",
      "pos": "n.",
      "def": "傢伙"
    },
    {
      "word": "habit",
      "pos": "n.",
      "def": "習慣"
    },
    {
      "word": "hall",
      "pos": "n.",
      "def": "大廳"
    },
    {
      "word": "hamburger/burger",
      "pos": "n.",
      "def": "漢堡"
    },
    {
      "word": "hammer",
      "pos": "n.",
      "def": "鐵鎚"
    },
    {
      "word": "handkerchief",
      "pos": "n.",
      "def": "手帕"
    },
    {
      "word": "handle",
      "pos": "n.",
      "def": "把手 (2) vt. 處理"
    },
    {
      "word": "handsome",
      "pos": "adj.",
      "def": "英俊的"
    },
    {
      "word": "hang",
      "pos": "vi., vt.",
      "def": "懸掛"
    },
    {
      "word": "hanger",
      "pos": "n.",
      "def": "衣架"
    },
    {
      "word": "hardly",
      "pos": "adv.",
      "def": "幾乎不"
    },
    {
      "word": "hateful",
      "pos": "adj.",
      "def": "可恨的"
    },
    {
      "word": "healthy",
      "pos": "adj.",
      "def": "健康的"
    },
    {
      "word": "heater",
      "pos": "n.",
      "def": "暖氣機"
    },
    {
      "word": "height",
      "pos": "n.",
      "def": "高度"
    },
    {
      "word": "helpful",
      "pos": "adj.",
      "def": "有幫助的"
    },
    {
      "word": "hen",
      "pos": "n.",
      "def": "母雞"
    },
    {
      "word": "hero n",
      "pos": "",
      "def": "英雄"
    },
    {
      "word": "heroine",
      "pos": "n.",
      "def": "女英雄"
    },
    {
      "word": "hide",
      "pos": "vi., vt.",
      "def": "隱藏"
    },
    {
      "word": "highway",
      "pos": "n.",
      "def": "公路"
    },
    {
      "word": "hip",
      "pos": "n.",
      "def": "臀部"
    },
    {
      "word": "hippopotamus/hippo",
      "pos": "n.",
      "def": "河馬"
    },
    {
      "word": "hire",
      "pos": "n., vt.",
      "def": "租借；僱用"
    },
    {
      "word": "hobby",
      "pos": "n.",
      "def": "嗜好"
    },
    {
      "word": "holder",
      "pos": "n.",
      "def": "持有者"
    },
    {
      "word": "homesick",
      "pos": "adj.",
      "def": "懷鄉病的"
    },
    {
      "word": "honest",
      "pos": "adj.",
      "def": "誠實的"
    },
    {
      "word": "honey",
      "pos": "n.",
      "def": "蜂蜜"
    },
    {
      "word": "hop",
      "pos": "vi.",
      "def": "vt. 單足跳"
    },
    {
      "word": "hospital",
      "pos": "n.",
      "def": "醫院"
    },
    {
      "word": "host /hostess",
      "pos": "n.",
      "def": "主人； 男女主持人"
    },
    {
      "word": "hotel",
      "pos": "n.",
      "def": "旅館"
    },
    {
      "word": "however",
      "pos": "adv.",
      "def": "然而"
    },
    {
      "word": "hum",
      "pos": "n., vt., vi.",
      "def": "發嗡嗡聲"
    },
    {
      "word": "humble",
      "pos": "adj.",
      "def": "謙遜的"
    },
    {
      "word": "humid",
      "pos": "adj.",
      "def": "潮濕的"
    },
    {
      "word": "humor",
      "pos": "n.",
      "def": "幽默感"
    },
    {
      "word": "hunger",
      "pos": "n.",
      "def": "飢餓"
    },
    {
      "word": "hunt",
      "pos": "n., vi., vt.",
      "def": "追獵"
    },
    {
      "word": "hunter",
      "pos": "n.",
      "def": "獵人"
    },
    {
      "word": "hurry",
      "pos": "n., vi., vt.",
      "def": "催促"
    },
    {
      "word": "ignore",
      "pos": "vt.",
      "def": "忽視"
    },
    {
      "word": "ill",
      "pos": "adj.",
      "def": "生病的"
    },
    {
      "word": "imagine",
      "pos": "vi., vt.",
      "def": "想像"
    },
    {
      "word": "importance",
      "pos": "n.",
      "def": "重要性"
    },
    {
      "word": "improve(ment)",
      "pos": "vi., vt.",
      "def": "改善"
    },
    {
      "word": "include",
      "pos": "vt.",
      "def": "包含"
    },
    {
      "word": "income",
      "pos": "n.",
      "def": "收入"
    },
    {
      "word": "increase",
      "pos": "n., vi., vt.",
      "def": "增加"
    },
    {
      "word": "independence",
      "pos": "n.",
      "def": "獨立"
    },
    {
      "word": "independent",
      "pos": "adj.",
      "def": "獨立的"
    },
    {
      "word": "indicate",
      "pos": "vt.",
      "def": "指出"
    },
    {
      "word": "industry",
      "pos": "n.",
      "def": "工業"
    },
    {
      "word": "influence",
      "pos": "n.",
      "def": "vt. 影響"
    },
    {
      "word": "ink",
      "pos": "n.",
      "def": "墨水"
    },
    {
      "word": "insect",
      "pos": "n.",
      "def": "昆蟲"
    },
    {
      "word": "insist",
      "pos": "vi., vt.",
      "def": "堅持"
    },
    {
      "word": "instance",
      "pos": "n.",
      "def": "例子"
    },
    {
      "word": "instant",
      "pos": "adj.",
      "def": "即刻的"
    },
    {
      "word": "instrument",
      "pos": "n.",
      "def": "儀器； 樂器"
    },
    {
      "word": "international",
      "pos": "adj.",
      "def": "國際性的"
    },
    {
      "word": "interview",
      "pos": "n.",
      "def": "vt. 訪談"
    },
    {
      "word": "introduce",
      "pos": "vt.",
      "def": "介紹"
    },
    {
      "word": "invent",
      "pos": "vt.",
      "def": "發明"
    },
    {
      "word": "invitation",
      "pos": "n.",
      "def": "邀請"
    },
    {
      "word": "invite",
      "pos": "vt.",
      "def": "邀請"
    },
    {
      "word": "island",
      "pos": "n.",
      "def": "島"
    },
    {
      "word": "item",
      "pos": "n.",
      "def": "項目"
    },
    {
      "word": "jacket",
      "pos": "n.",
      "def": "夾克"
    },
    {
      "word": "jam vt.",
      "pos": "vi.",
      "def": "(使)塞滿 n.堵塞；果醬"
    },
    {
      "word": "jazz",
      "pos": "n.",
      "def": "爵士樂"
    },
    {
      "word": "jeans",
      "pos": "n.",
      "def": "牛仔褲"
    },
    {
      "word": "jeep",
      "pos": "n.",
      "def": "吉普車"
    },
    {
      "word": "jog",
      "pos": "vi.",
      "def": "慢跑"
    },
    {
      "word": "joint",
      "pos": "n.",
      "def": "關節"
    },
    {
      "word": "judge",
      "pos": "n.",
      "def": "法官 (2) vt. vi. 判決"
    },
    {
      "word": "juicy",
      "pos": "adj.",
      "def": "多汁的"
    },
    {
      "word": "ketchup /catsup",
      "pos": "n.",
      "def": "番茄醬"
    },
    {
      "word": "kindergarten",
      "pos": "n.",
      "def": "幼稚園"
    },
    {
      "word": "kingdom",
      "pos": "n.",
      "def": "王國"
    },
    {
      "word": "knock",
      "pos": "n., vt., vi.",
      "def": "相撞"
    },
    {
      "word": "knowledge",
      "pos": "n.",
      "def": "知識"
    },
    {
      "word": "koala",
      "pos": "n.",
      "def": "無尾熊"
    },
    {
      "word": "ladybug /ladybird",
      "pos": "n.",
      "def": "瓢蟲"
    },
    {
      "word": "lane",
      "pos": "n.",
      "def": "小路"
    },
    {
      "word": "language",
      "pos": "n.",
      "def": "語言"
    },
    {
      "word": "lantern",
      "pos": "n.",
      "def": "燈籠"
    },
    {
      "word": "lap",
      "pos": "n.",
      "def": "vt. vi. 重疊部分"
    },
    {
      "word": "latest",
      "pos": "adj.",
      "def": "最新的"
    },
    {
      "word": "lawyer",
      "pos": "n.",
      "def": "律師"
    },
    {
      "word": "leadership",
      "pos": "n.",
      "def": "領導"
    },
    {
      "word": "legal",
      "pos": "adj.",
      "def": "法律上的"
    },
    {
      "word": "lemon",
      "pos": "n.",
      "def": "檸檬"
    },
    {
      "word": "lemonade",
      "pos": "n.",
      "def": "檸檬水"
    },
    {
      "word": "lend",
      "pos": "vt.",
      "def": "把……借給"
    },
    {
      "word": "length",
      "pos": "n.",
      "def": "長度"
    },
    {
      "word": "leopard",
      "pos": "n.",
      "def": "豹"
    },
    {
      "word": "lettuce",
      "pos": "n.",
      "def": "萵苣"
    },
    {
      "word": "library",
      "pos": "n.",
      "def": "圖書館"
    },
    {
      "word": "lick",
      "pos": "n., vi., vt.",
      "def": "舔"
    },
    {
      "word": "lid",
      "pos": "n.",
      "def": "蓋子"
    },
    {
      "word": "lightning",
      "pos": "n.",
      "def": "閃電"
    },
    {
      "word": "limit",
      "pos": "n.",
      "def": "界限 vt. 限制"
    },
    {
      "word": "link",
      "pos": "n.",
      "def": "vt. vi. 聯繫"
    },
    {
      "word": "liquid",
      "pos": "n.",
      "def": "液體"
    },
    {
      "word": "listener",
      "pos": "n.",
      "def": "傾聽者"
    },
    {
      "word": "loaf",
      "pos": "n.",
      "def": "一條"
    },
    {
      "word": "local",
      "pos": "adj.",
      "def": "地方性的"
    },
    {
      "word": "locate",
      "pos": "vt.",
      "def": "確定……的地點"
    },
    {
      "word": "lock",
      "pos": "n.",
      "def": "vt. vi. 鎖"
    },
    {
      "word": "log",
      "pos": "n.",
      "def": "圓木"
    },
    {
      "word": "lone",
      "pos": "adj.",
      "def": "孤單的"
    },
    {
      "word": "lonely",
      "pos": "adj.",
      "def": "孤獨的"
    },
    {
      "word": "lose",
      "pos": "vi., vt.",
      "def": "丟失"
    },
    {
      "word": "loser",
      "pos": "n.",
      "def": "失敗者"
    },
    {
      "word": "loss",
      "pos": "n.",
      "def": "遺失"
    },
    {
      "word": "lovely",
      "pos": "adj.",
      "def": "可愛的"
    },
    {
      "word": "lover",
      "pos": "n.",
      "def": "戀人"
    },
    {
      "word": "lower",
      "pos": "adj.",
      "def": "較低的"
    },
    {
      "word": "luck",
      "pos": "n.",
      "def": "運氣"
    },
    {
      "word": "magazine",
      "pos": "n.",
      "def": "雜誌"
    },
    {
      "word": "magic",
      "pos": "n.",
      "def": "魔法"
    },
    {
      "word": "magician",
      "pos": "n.",
      "def": "魔術師"
    },
    {
      "word": "main",
      "pos": "adj.",
      "def": "主要的"
    },
    {
      "word": "maintain",
      "pos": "vt.",
      "def": "保持"
    },
    {
      "word": "male",
      "pos": "n., adj.",
      "def": "男性(的)"
    },
    {
      "word": "Mandarin",
      "pos": "n.",
      "def": "華語"
    },
    {
      "word": "mango",
      "pos": "n.",
      "def": "芒果"
    },
    {
      "word": "manner",
      "pos": "n.",
      "def": "方法； 舉止"
    },
    {
      "word": "mark",
      "pos": "n.",
      "def": "vt. vi. (留)痕跡：(做)標記"
    },
    {
      "word": "marriage",
      "pos": "n.",
      "def": "婚姻"
    },
    {
      "word": "mask",
      "pos": "n.",
      "def": "假面具； 口罩"
    },
    {
      "word": "mass",
      "pos": "n.",
      "def": "眾多 adj. 大眾的"
    },
    {
      "word": "mat",
      "pos": "n.",
      "def": "墊子"
    },
    {
      "word": "match",
      "pos": "vi., vt.",
      "def": "相配"
    },
    {
      "word": "mate",
      "pos": "n.",
      "def": "伙伴"
    },
    {
      "word": "material",
      "pos": "n.",
      "def": "材料"
    },
    {
      "word": "meal",
      "pos": "n.",
      "def": "一餐"
    },
    {
      "word": "meaning",
      "pos": "n.",
      "def": "含義"
    },
    {
      "word": "means",
      "pos": "n.",
      "def": "手段"
    },
    {
      "word": "measurable",
      "pos": "adj.",
      "def": "可測量的"
    },
    {
      "word": "measure (ment)",
      "pos": "vt.",
      "def": "vi. (n.) 測量"
    },
    {
      "word": "medicine",
      "pos": "n.",
      "def": "藥"
    },
    {
      "word": "meeting",
      "pos": "n.",
      "def": "會議"
    },
    {
      "word": "melody",
      "pos": "n.",
      "def": "旋律"
    },
    {
      "word": "melon",
      "pos": "n.",
      "def": "瓜"
    },
    {
      "word": "member",
      "pos": "n.",
      "def": "成員"
    },
    {
      "word": "memory",
      "pos": "n.",
      "def": "記憶"
    },
    {
      "word": "menu",
      "pos": "n.",
      "def": "菜單"
    },
    {
      "word": "message",
      "pos": "n.",
      "def": "消息"
    },
    {
      "word": "metal",
      "pos": "n.",
      "def": "金屬"
    },
    {
      "word": "meter",
      "pos": "n.",
      "def": "計量器"
    },
    {
      "word": "method",
      "pos": "n.",
      "def": "方法"
    },
    {
      "word": "military",
      "pos": "n.",
      "def": "軍事的"
    },
    {
      "word": "million",
      "pos": "n.",
      "def": "百萬"
    },
    {
      "word": "mine",
      "pos": "n.",
      "def": "礦山 vt. vi. 開礦 (2) pron. 我的"
    },
    {
      "word": "minus",
      "pos": "prep.",
      "def": "adj.減去；負的 n.負號"
    },
    {
      "word": "mirror",
      "pos": "n.",
      "def": "鏡子"
    },
    {
      "word": "mix",
      "pos": "n., vi., vt.",
      "def": "(使)混和"
    },
    {
      "word": "model",
      "pos": "n.",
      "def": "模型"
    },
    {
      "word": "modern",
      "pos": "adj.",
      "def": "現代的"
    },
    {
      "word": "monster",
      "pos": "n.",
      "def": "怪物"
    },
    {
      "word": "mosquito",
      "pos": "n.",
      "def": "蚊子"
    },
    {
      "word": "moth",
      "pos": "n.",
      "def": "蛾"
    },
    {
      "word": "motion n.姿態; 提議",
      "pos": "vi., vt.",
      "def": "示意"
    },
    {
      "word": "motorcycle",
      "pos": "n.",
      "def": "摩托車"
    },
    {
      "word": "movable",
      "pos": "adj.",
      "def": "可移動的"
    },
    {
      "word": "MRT/mass rapid transit",
      "pos": "n.",
      "def": "大眾捷運系統"
    },
    {
      "word": "subway",
      "pos": "n.",
      "def": "地下鐵/underground /metro"
    },
    {
      "word": "mule",
      "pos": "n.",
      "def": "騾"
    },
    {
      "word": "multiply",
      "pos": "vi., vt.",
      "def": "乘"
    },
    {
      "word": "museum",
      "pos": "n.",
      "def": "博物館"
    },
    {
      "word": "musician",
      "pos": "n.",
      "def": "音樂家"
    },
    {
      "word": "nail",
      "pos": "n.",
      "def": "釘子(2) vt.釘；揭穿 n.指甲"
    },
    {
      "word": "naked",
      "pos": "adj.",
      "def": "裸體的"
    },
    {
      "word": "napkin",
      "pos": "n.",
      "def": "餐巾"
    },
    {
      "word": "narrow",
      "pos": "adj.",
      "def": "狹窄的"
    },
    {
      "word": "national",
      "pos": "adj.",
      "def": "全國性的"
    },
    {
      "word": "natural",
      "pos": "adj.",
      "def": "自然的"
    },
    {
      "word": "naughty",
      "pos": "adj.",
      "def": "頑皮的"
    },
    {
      "word": "nearby",
      "pos": "adj.",
      "def": "附近的 adv.在附近"
    },
    {
      "word": "nearly",
      "pos": "adv.",
      "def": "差不多"
    },
    {
      "word": "neat",
      "pos": "adj.",
      "def": "整齊的"
    },
    {
      "word": "necessary",
      "pos": "adj.",
      "def": "必要的"
    },
    {
      "word": "necklace",
      "pos": "n.",
      "def": "項鍊"
    },
    {
      "word": "needle",
      "pos": "n.",
      "def": "針"
    },
    {
      "word": "negative",
      "pos": "adj.",
      "def": "否定的"
    },
    {
      "word": "neighbor",
      "pos": "n.",
      "def": "鄰居"
    },
    {
      "word": "neither",
      "pos": "adj.",
      "def": "conj. adv. 兩者都不"
    },
    {
      "word": "nephew",
      "pos": "n.",
      "def": "姪兒；外甥"
    },
    {
      "word": "nest",
      "pos": "n.",
      "def": "巢"
    },
    {
      "word": "net",
      "pos": "n.",
      "def": "網"
    },
    {
      "word": "niece",
      "pos": "n.",
      "def": "姪女； 外甥女"
    },
    {
      "word": "nobody",
      "pos": "n.",
      "def": "pron. 沒有人"
    },
    {
      "word": "nod",
      "pos": "n., vt., vi.",
      "def": "點頭"
    },
    {
      "word": "none",
      "pos": "adj., pron.",
      "def": "adv. 一個也沒"
    },
    {
      "word": "noodle",
      "pos": "n.",
      "def": "麵條"
    },
    {
      "word": "northern",
      "pos": "adj.",
      "def": "北方的"
    },
    {
      "word": "notebook",
      "pos": "n.",
      "def": "筆記本"
    },
    {
      "word": "novel adj. 新奇的",
      "pos": "n.",
      "def": "小說"
    },
    {
      "word": "nut",
      "pos": "n.",
      "def": "堅果"
    },
    {
      "word": "obey",
      "pos": "vi., vt.",
      "def": "服從"
    },
    {
      "word": "object n.物體",
      "pos": "vi.",
      "def": "vt.反對"
    },
    {
      "word": "occur",
      "pos": "vi.",
      "def": "發生"
    },
    {
      "word": "offer",
      "pos": "n., vi., vt.",
      "def": "提供"
    },
    {
      "word": "official",
      "pos": "adj.",
      "def": "官方的"
    },
    {
      "word": "omit",
      "pos": "vt.",
      "def": "省略"
    },
    {
      "word": "onion",
      "pos": "n.",
      "def": "洋蔥"
    },
    {
      "word": "operate",
      "pos": "vi., vt.",
      "def": "營運"
    },
    {
      "word": "opinion",
      "pos": "n.",
      "def": "見解"
    },
    {
      "word": "ordinary",
      "pos": "adj.",
      "def": "普通的"
    },
    {
      "word": "organ",
      "pos": "n.",
      "def": "器官"
    },
    {
      "word": "organization",
      "pos": "n.",
      "def": "機構"
    },
    {
      "word": "organize",
      "pos": "vi., vt.",
      "def": "組織"
    },
    {
      "word": "oven",
      "pos": "n.",
      "def": "烤箱"
    },
    {
      "word": "overpass",
      "pos": "n., vt.",
      "def": "越過"
    },
    {
      "word": "overseas",
      "pos": "adj., adv.",
      "def": "在海外(的)"
    },
    {
      "word": "owl",
      "pos": "n.",
      "def": "貓頭鷹"
    },
    {
      "word": "owner",
      "pos": "n.",
      "def": "所有人"
    },
    {
      "word": "ox",
      "pos": "n.",
      "def": "公牛"
    },
    {
      "word": "pack",
      "pos": "n.",
      "def": "vt. vi.包(裝)"
    },
    {
      "word": "package",
      "pos": "n.",
      "def": "包裹"
    },
    {
      "word": "pain",
      "pos": "n.",
      "def": "疼痛"
    },
    {
      "word": "painful",
      "pos": "adj.",
      "def": "疼痛的"
    },
    {
      "word": "painter",
      "pos": "n.",
      "def": "畫家"
    },
    {
      "word": "painting",
      "pos": "n.",
      "def": "繪畫"
    },
    {
      "word": "pajamas",
      "pos": "n.",
      "def": "睡衣褲"
    },
    {
      "word": "palm",
      "pos": "n.",
      "def": "手心"
    },
    {
      "word": "pan",
      "pos": "n.",
      "def": "平底鍋"
    },
    {
      "word": "panda",
      "pos": "n.",
      "def": "貓熊"
    },
    {
      "word": "papaya",
      "pos": "n.",
      "def": "木瓜"
    },
    {
      "word": "pardon",
      "pos": "n.",
      "def": "vt. 原諒"
    },
    {
      "word": "parrot",
      "pos": "n.",
      "def": "鸚鵡"
    },
    {
      "word": "particular",
      "pos": "adj.",
      "def": "特定的"
    },
    {
      "word": "partner",
      "pos": "n.",
      "def": "伙伴"
    },
    {
      "word": "passenger",
      "pos": "n.",
      "def": "乘客"
    },
    {
      "word": "paste vt. 用漿糊黏貼",
      "pos": "n.",
      "def": "糊狀物"
    },
    {
      "word": "pat",
      "pos": "n., vi., vt.",
      "def": "輕拍"
    },
    {
      "word": "path",
      "pos": "n.",
      "def": "小徑"
    },
    {
      "word": "patient adj.",
      "pos": "",
      "def": "有耐心的 (2 ) n.病人"
    },
    {
      "word": "pattern",
      "pos": "n.",
      "def": "圖案"
    },
    {
      "word": "peace",
      "pos": "n.",
      "def": "和平"
    },
    {
      "word": "peaceful",
      "pos": "adj.",
      "def": "和平的"
    },
    {
      "word": "peach",
      "pos": "n.",
      "def": "桃子"
    },
    {
      "word": "peanut",
      "pos": "n.",
      "def": "花生"
    },
    {
      "word": "pear",
      "pos": "n.",
      "def": "洋梨"
    },
    {
      "word": "penguin",
      "pos": "n.",
      "def": "企鵝"
    },
    {
      "word": "pepper",
      "pos": "n.",
      "def": "胡椒粉"
    },
    {
      "word": "per",
      "pos": "prep.",
      "def": "透過；每"
    },
    {
      "word": "perfect",
      "pos": "adj.",
      "def": "完美的"
    },
    {
      "word": "period",
      "pos": "n.",
      "def": "期間；句號"
    },
    {
      "word": "personal",
      "pos": "adj.",
      "def": "私人的"
    },
    {
      "word": "photograph/photo",
      "pos": "n.",
      "def": "照片"
    },
    {
      "word": "photographer",
      "pos": "n.",
      "def": "攝影師"
    },
    {
      "word": "phrase",
      "pos": "n.",
      "def": "片語"
    },
    {
      "word": "pick",
      "pos": "n., vi., vt.",
      "def": "挑選"
    },
    {
      "word": "picnic",
      "pos": "n.",
      "def": "野餐"
    },
    {
      "word": "pigeon",
      "pos": "n.",
      "def": "鴿子"
    },
    {
      "word": "pile",
      "pos": "n.",
      "def": "vt. vi. 堆"
    },
    {
      "word": "pillow",
      "pos": "n.",
      "def": "枕頭"
    },
    {
      "word": "pin",
      "pos": "n.",
      "def": "大頭針 vt. 釘住"
    },
    {
      "word": "pineapple",
      "pos": "n.",
      "def": "鳳梨"
    },
    {
      "word": "ping-pong/table tennis",
      "pos": "n.",
      "def": "桌球"
    },
    {
      "word": "pink",
      "pos": "n.",
      "def": "adj. 粉紅色(的)"
    },
    {
      "word": "pipe",
      "pos": "n.",
      "def": "管"
    },
    {
      "word": "pitch",
      "pos": "n.",
      "def": "音高 vt. vi. 扔"
    },
    {
      "word": "pizza",
      "pos": "n.",
      "def": "披薩"
    },
    {
      "word": "plain",
      "pos": "adj.",
      "def": "樸素的 (2) n.平原"
    },
    {
      "word": "planet",
      "pos": "n.",
      "def": "行星"
    },
    {
      "word": "plate",
      "pos": "n.",
      "def": "盤子"
    },
    {
      "word": "platform",
      "pos": "n.",
      "def": "平臺"
    },
    {
      "word": "playful",
      "pos": "adj.",
      "def": "愛玩耍的"
    },
    {
      "word": "pleasant",
      "pos": "adj.",
      "def": "舒適的"
    },
    {
      "word": "pleasure",
      "pos": "n.",
      "def": "愉快"
    },
    {
      "word": "plus",
      "pos": "n., adj., prep.",
      "def": "加上"
    },
    {
      "word": "poem",
      "pos": "n.",
      "def": "詩"
    },
    {
      "word": "poet",
      "pos": "n.",
      "def": "詩人"
    },
    {
      "word": "poison",
      "pos": "n.",
      "def": "毒藥"
    },
    {
      "word": "policy",
      "pos": "n.",
      "def": "政策"
    },
    {
      "word": "polite",
      "pos": "adj.",
      "def": "有禮貌的"
    },
    {
      "word": "popular",
      "pos": "adj.",
      "def": "大眾的"
    },
    {
      "word": "population",
      "pos": "n.",
      "def": "人口"
    },
    {
      "word": "pork",
      "pos": "n.",
      "def": "豬肉"
    },
    {
      "word": "port",
      "pos": "n.",
      "def": "港"
    },
    {
      "word": "pose",
      "pos": "n.",
      "def": "vi. vt. (擺)姿勢"
    },
    {
      "word": "positive",
      "pos": "adj.",
      "def": "積極的"
    },
    {
      "word": "possibility",
      "pos": "n.",
      "def": "可能性"
    },
    {
      "word": "post n.崗位 vt.布置(崗哨等) n.樁 vt.分發 n.郵政",
      "pos": "vt.",
      "def": "郵寄；貼出"
    },
    {
      "word": "postcard",
      "pos": "n.",
      "def": "明信片"
    },
    {
      "word": "pot",
      "pos": "n.",
      "def": "壺"
    },
    {
      "word": "potato",
      "pos": "n.",
      "def": "馬鈴薯"
    },
    {
      "word": "pound",
      "pos": "n.",
      "def": "磅 (2) vt. vi. 猛擊"
    },
    {
      "word": "powerful",
      "pos": "adj.",
      "def": "強大的"
    },
    {
      "word": "praise",
      "pos": "n.",
      "def": "vt. 讚揚"
    },
    {
      "word": "pray",
      "pos": "vi., vt.",
      "def": "祈禱"
    },
    {
      "word": "prefer",
      "pos": "vt.",
      "def": "寧可"
    },
    {
      "word": "presence",
      "pos": "n.",
      "def": "出席"
    },
    {
      "word": "present adj. 出席的",
      "pos": "n.",
      "def": "禮物 (2) n. 現在 (3) vt. 呈現；贈送"
    },
    {
      "word": "president",
      "pos": "n.",
      "def": "總統"
    },
    {
      "word": "press",
      "pos": "n.",
      "def": "新聞界 (2) n. vt. vi. 壓"
    },
    {
      "word": "pride",
      "pos": "n.",
      "def": "得意"
    },
    {
      "word": "prince",
      "pos": "n.",
      "def": "王子"
    },
    {
      "word": "princess",
      "pos": "n.",
      "def": "公主"
    },
    {
      "word": "principal",
      "pos": "adj.",
      "def": "主要的(2)n.校長"
    },
    {
      "word": "principle",
      "pos": "n.",
      "def": "原理"
    },
    {
      "word": "printer",
      "pos": "n.",
      "def": "列印機"
    },
    {
      "word": "prison",
      "pos": "n.",
      "def": "監獄"
    },
    {
      "word": "prisoner",
      "pos": "n.",
      "def": "囚犯"
    },
    {
      "word": "private",
      "pos": "adj.",
      "def": "私人的"
    },
    {
      "word": "prize",
      "pos": "n.",
      "def": "獎賞"
    },
    {
      "word": "produce",
      "pos": "vi., n., vt.",
      "def": "出產；農產品"
    },
    {
      "word": "producer",
      "pos": "n.",
      "def": "生產者"
    },
    {
      "word": "progress",
      "pos": "vi., n.",
      "def": "進行；進步"
    },
    {
      "word": "project n.企劃 vt.計畫",
      "pos": "vt.",
      "def": "vi.投射；伸出"
    },
    {
      "word": "promise",
      "pos": "n.",
      "def": "vt. vi. 承諾"
    },
    {
      "word": "pronounce",
      "pos": "vi., vt.",
      "def": "發音"
    },
    {
      "word": "propose",
      "pos": "vi., vt.",
      "def": "提議"
    },
    {
      "word": "protect",
      "pos": "vt.",
      "def": "保護"
    },
    {
      "word": "proud",
      "pos": "adj.",
      "def": "驕傲的"
    },
    {
      "word": "provide",
      "pos": "vi., vt.",
      "def": "提供"
    },
    {
      "word": "pudding",
      "pos": "n.",
      "def": "布丁"
    },
    {
      "word": "pump",
      "pos": "n.",
      "def": "vt. vi. 打氣"
    },
    {
      "word": "pumpkin",
      "pos": "n.",
      "def": "南瓜"
    },
    {
      "word": "punish(ment)",
      "pos": "vt.",
      "def": "(n) 懲罰"
    },
    {
      "word": "pupil",
      "pos": "n.",
      "def": "學生；瞳孔"
    },
    {
      "word": "puppet",
      "pos": "n.",
      "def": "木偶"
    },
    {
      "word": "puppy",
      "pos": "n.",
      "def": "小狗"
    },
    {
      "word": "purse",
      "pos": "n.",
      "def": "錢包"
    },
    {
      "word": "puzzle vt. vi. 感到迷惑",
      "pos": "n.",
      "def": "難題"
    },
    {
      "word": "quality",
      "pos": "n.",
      "def": "品質"
    },
    {
      "word": "quantity",
      "pos": "n.",
      "def": "數量"
    },
    {
      "word": "quarter",
      "pos": "n.",
      "def": "四分之一"
    },
    {
      "word": "quit",
      "pos": "vi.",
      "def": "vt. 退出"
    },
    {
      "word": "quiz",
      "pos": "n.",
      "def": "vt. 測驗"
    },
    {
      "word": "rabbit",
      "pos": "n.",
      "def": "兔"
    },
    {
      "word": "rainy",
      "pos": "adj.",
      "def": "下雨的"
    },
    {
      "word": "range",
      "pos": "n.",
      "def": "山脈 vt. vi. 排列；變動"
    },
    {
      "word": "rapid",
      "pos": "adj.",
      "def": "迅速的"
    },
    {
      "word": "rare",
      "pos": "adj.",
      "def": "罕見的"
    },
    {
      "word": "rather",
      "pos": "adv.",
      "def": "相當"
    },
    {
      "word": "reality",
      "pos": "n.",
      "def": "現實"
    },
    {
      "word": "realize",
      "pos": "vt.",
      "def": "了解"
    },
    {
      "word": "recent",
      "pos": "adj.",
      "def": "最近的"
    },
    {
      "word": "record",
      "pos": "",
      "def": "記錄；唱片 (2) 記錄"
    },
    {
      "word": "rectangle",
      "pos": "n.",
      "def": "矩形"
    },
    {
      "word": "refrigerator/fridge/icebox",
      "pos": "n.",
      "def": "冰箱"
    },
    {
      "word": "refuse",
      "pos": "vi., vt.",
      "def": "拒絕"
    },
    {
      "word": "regard",
      "pos": "n.",
      "def": "關心 vt. vi. 注重"
    },
    {
      "word": "region",
      "pos": "n.",
      "def": "地區"
    },
    {
      "word": "regular",
      "pos": "adj.",
      "def": "有規律的"
    },
    {
      "word": "reject",
      "pos": "vt.",
      "def": "拒絕"
    },
    {
      "word": "relation n,",
      "pos": "",
      "def": "關係"
    },
    {
      "word": "relationship",
      "pos": "n.",
      "def": "關係"
    },
    {
      "word": "repeat",
      "pos": "n., vi., vt.",
      "def": "重複"
    },
    {
      "word": "reply",
      "pos": "n., vt., vi.",
      "def": "答覆"
    },
    {
      "word": "reporter",
      "pos": "n.",
      "def": "記者"
    },
    {
      "word": "require(ment)",
      "pos": "vt.",
      "def": "(n.)必需(品)"
    },
    {
      "word": "respect",
      "pos": "n.",
      "def": "vt. 敬重"
    },
    {
      "word": "responsible",
      "pos": "adj.",
      "def": "負責任的"
    },
    {
      "word": "restaurant",
      "pos": "n.",
      "def": "餐館"
    },
    {
      "word": "restroom/rest room",
      "pos": "n.",
      "def": "洗手間"
    },
    {
      "word": "result vi. 發生",
      "pos": "n.",
      "def": "結果"
    },
    {
      "word": "review",
      "pos": "n., vi., vt.",
      "def": "複習"
    },
    {
      "word": "riches",
      "pos": "n.",
      "def": "財富"
    },
    {
      "word": "rock",
      "pos": "vt.",
      "def": "搖動"
    },
    {
      "word": "rocky",
      "pos": "adj.",
      "def": "多岩石的；搖晃的"
    },
    {
      "word": "role",
      "pos": "n.",
      "def": "角色"
    },
    {
      "word": "royal",
      "pos": "adj.",
      "def": "王室的"
    },
    {
      "word": "rude",
      "pos": "adj.",
      "def": "無禮的"
    },
    {
      "word": "ruler",
      "pos": "n.",
      "def": "統治者"
    },
    {
      "word": "runner",
      "pos": "n.",
      "def": "跑步者"
    },
    {
      "word": "rush",
      "pos": "n., vt., vi.",
      "def": "奔"
    },
    {
      "word": "safety",
      "pos": "n.",
      "def": "安全"
    },
    {
      "word": "sailor",
      "pos": "n.",
      "def": "水手"
    },
    {
      "word": "salad",
      "pos": "n.",
      "def": "沙拉"
    },
    {
      "word": "salty",
      "pos": "adj.",
      "def": "有鹽分的"
    },
    {
      "word": "sample",
      "pos": "n.",
      "def": "樣本"
    },
    {
      "word": "sandwich",
      "pos": "n.",
      "def": "三明治"
    },
    {
      "word": "satisfy",
      "pos": "vt.",
      "def": "使滿意"
    },
    {
      "word": "sauce",
      "pos": "n.",
      "def": "醬汁"
    },
    {
      "word": "science",
      "pos": "n.",
      "def": "科學"
    },
    {
      "word": "scientist",
      "pos": "n.",
      "def": "科學家"
    },
    {
      "word": "scissors",
      "pos": "n.",
      "def": "剪刀"
    },
    {
      "word": "score",
      "pos": "n.",
      "def": "vt. vi. 得分"
    },
    {
      "word": "screen",
      "pos": "n.",
      "def": "幕"
    },
    {
      "word": "search",
      "pos": "n., vi., vt.",
      "def": "搜查"
    },
    {
      "word": "secret",
      "pos": "adj.",
      "def": "祕密的"
    },
    {
      "word": "secretary",
      "pos": "n.",
      "def": "祕書"
    },
    {
      "word": "section",
      "pos": "n.",
      "def": "部分"
    },
    {
      "word": "select",
      "pos": "vi., vt.",
      "def": "挑選"
    },
    {
      "word": "selection",
      "pos": "n.",
      "def": "選拔"
    },
    {
      "word": "semester",
      "pos": "n.",
      "def": "一學期"
    },
    {
      "word": "separate vt. vi.區分",
      "pos": "adj.",
      "def": "個別的"
    },
    {
      "word": "serious",
      "pos": "adj.",
      "def": "嚴重的"
    },
    {
      "word": "servant",
      "pos": "n.",
      "def": "僕人"
    },
    {
      "word": "settle(ment)",
      "pos": "vi., vt.",
      "def": "(n)安頓；定居"
    },
    {
      "word": "share",
      "pos": "n.",
      "def": "vt. vi.分攤"
    },
    {
      "word": "shelf",
      "pos": "n.",
      "def": "架子"
    },
    {
      "word": "shell",
      "pos": "n.",
      "def": "殼"
    },
    {
      "word": "shock",
      "pos": "n.",
      "def": "vt. vi. 衝撞"
    },
    {
      "word": "shoot",
      "pos": "n., vi., vt.",
      "def": "發射"
    },
    {
      "word": "shorts",
      "pos": "n.",
      "def": "運動短褲"
    },
    {
      "word": "shower",
      "pos": "n.",
      "def": "vi. vt. 淋浴"
    },
    {
      "word": "shrimp",
      "pos": "n.",
      "def": "蝦"
    },
    {
      "word": "sidewalk",
      "pos": "n.",
      "def": "人行道"
    },
    {
      "word": "sign",
      "pos": "n.",
      "def": "招牌"
    },
    {
      "word": "silence",
      "pos": "n.",
      "def": "寂靜"
    },
    {
      "word": "silent",
      "pos": "adj.",
      "def": "沉默的"
    },
    {
      "word": "silk",
      "pos": "n.",
      "def": "蠶絲"
    },
    {
      "word": "similar",
      "pos": "adj.",
      "def": "相像的"
    },
    {
      "word": "simply",
      "pos": "adv.",
      "def": "簡單地"
    },
    {
      "word": "single",
      "pos": "adj.",
      "def": "單一的"
    },
    {
      "word": "sink vi. vt. 下沉",
      "pos": "n.",
      "def": "水槽"
    },
    {
      "word": "skillful/skilled",
      "pos": "adj.",
      "def": "熟練的"
    },
    {
      "word": "skinny",
      "pos": "adj.",
      "def": "極瘦的"
    },
    {
      "word": "skirt",
      "pos": "n.",
      "def": "裙子"
    },
    {
      "word": "sleepy",
      "pos": "adj.",
      "def": "想睡的"
    },
    {
      "word": "slender",
      "pos": "adj.",
      "def": "苗條的"
    },
    {
      "word": "slide",
      "pos": "n., vi., vt.",
      "def": "滑動；幻燈片"
    },
    {
      "word": "slim",
      "pos": "adj.",
      "def": "纖細的"
    },
    {
      "word": "slip",
      "pos": "n., vt., vi.",
      "def": "滑行"
    },
    {
      "word": "slipper(s)",
      "pos": "n.",
      "def": "拖鞋"
    },
    {
      "word": "snack",
      "pos": "n.",
      "def": "點心"
    },
    {
      "word": "snail",
      "pos": "n.",
      "def": "蝸牛"
    },
    {
      "word": "snowy",
      "pos": "adj.",
      "def": "下雪的"
    },
    {
      "word": "soccer",
      "pos": "n.",
      "def": "足球"
    },
    {
      "word": "social",
      "pos": "adj.",
      "def": "社會的"
    },
    {
      "word": "society",
      "pos": "n.",
      "def": "社會"
    },
    {
      "word": "sock(s)",
      "pos": "n.",
      "def": "襪子"
    },
    {
      "word": "soldier",
      "pos": "n.",
      "def": "士兵"
    },
    {
      "word": "solution",
      "pos": "n.",
      "def": "解答"
    },
    {
      "word": "solve",
      "pos": "vt.",
      "def": "解決"
    },
    {
      "word": "somebody pron. 有人",
      "pos": "n.",
      "def": "要人"
    },
    {
      "word": "somewhere",
      "pos": "n., adv.",
      "def": "(在)某處"
    },
    {
      "word": "sort",
      "pos": "n.",
      "def": "種類 vt. 把……分類"
    },
    {
      "word": "source",
      "pos": "n.",
      "def": "來源"
    },
    {
      "word": "southern",
      "pos": "adj.",
      "def": "南方的"
    },
    {
      "word": "soybean/soya bean/soy",
      "pos": "n.",
      "def": "大豆"
    },
    {
      "word": "speaker",
      "pos": "n.",
      "def": "演講者"
    },
    {
      "word": "speed",
      "pos": "n.",
      "def": "速度 vi. vt. 加速"
    },
    {
      "word": "spelling",
      "pos": "n.",
      "def": "拼字"
    },
    {
      "word": "spider",
      "pos": "n.",
      "def": "蜘蛛"
    },
    {
      "word": "spinach",
      "pos": "n.",
      "def": "菠菜"
    },
    {
      "word": "spirit",
      "pos": "n.",
      "def": "心靈"
    },
    {
      "word": "spot",
      "pos": "n.",
      "def": "斑點"
    },
    {
      "word": "spread",
      "pos": "n., vi., vt.",
      "def": "伸展"
    },
    {
      "word": "spring",
      "pos": "n.",
      "def": "彈簧 vi. vt. 彈起"
    },
    {
      "word": "square",
      "pos": "n.",
      "def": "正方形"
    },
    {
      "word": "squirrel",
      "pos": "n.",
      "def": "松鼠"
    },
    {
      "word": "stage",
      "pos": "n.",
      "def": "舞臺"
    },
    {
      "word": "stamp",
      "pos": "n.",
      "def": "郵票；印章"
    },
    {
      "word": "standard",
      "pos": "n.",
      "def": "標準"
    },
    {
      "word": "steak",
      "pos": "n.",
      "def": "牛排"
    },
    {
      "word": "steal",
      "pos": "n., vi., vt.",
      "def": "竊取"
    },
    {
      "word": "steam",
      "pos": "n.",
      "def": "蒸汽"
    },
    {
      "word": "steel",
      "pos": "n.",
      "def": "鋼"
    },
    {
      "word": "stick",
      "pos": "n.",
      "def": "棒狀物 (2) vt.刺 vi.黏住"
    },
    {
      "word": "stomach",
      "pos": "n.",
      "def": "胃"
    },
    {
      "word": "storm",
      "pos": "n.",
      "def": "暴風雨"
    },
    {
      "word": "stove",
      "pos": "n.",
      "def": "火爐"
    },
    {
      "word": "straight",
      "pos": "adj.",
      "def": "挺直的"
    },
    {
      "word": "stranger",
      "pos": "n.",
      "def": "陌生人"
    },
    {
      "word": "straw",
      "pos": "n.",
      "def": "稻草"
    },
    {
      "word": "strawberry",
      "pos": "n.",
      "def": "草莓"
    },
    {
      "word": "stream",
      "pos": "n.",
      "def": "溪流"
    },
    {
      "word": "stress",
      "pos": "n.",
      "def": "壓力 vt. 強調"
    },
    {
      "word": "stretch vt. vi. 伸縮",
      "pos": "n.",
      "def": "伸展"
    },
    {
      "word": "strict",
      "pos": "adj.",
      "def": "嚴格的"
    },
    {
      "word": "strike",
      "pos": "n., vi., vt.",
      "def": "打擊"
    },
    {
      "word": "string",
      "pos": "n.",
      "def": "細繩"
    },
    {
      "word": "struggle",
      "pos": "n., vt., vi.",
      "def": "奮鬥"
    },
    {
      "word": "subject",
      "pos": "n.",
      "def": "主題 adj. 易受…的"
    },
    {
      "word": "subtract",
      "pos": "vi., vt.",
      "def": "減去"
    },
    {
      "word": "subway",
      "pos": "n.",
      "def": "地下鐵"
    },
    {
      "word": "succeed",
      "pos": "vi.",
      "def": "成功 vt. 繼承"
    },
    {
      "word": "success",
      "pos": "n.",
      "def": "成就"
    },
    {
      "word": "successful",
      "pos": "adj.",
      "def": "成功的"
    },
    {
      "word": "sudden",
      "pos": "adj.",
      "def": "突然的"
    },
    {
      "word": "suit",
      "pos": "n.",
      "def": "套 (2) vt. vi. 合適"
    },
    {
      "word": "sunny",
      "pos": "adj.",
      "def": "陽光充足的"
    },
    {
      "word": "supermarket",
      "pos": "n.",
      "def": "超級市場"
    },
    {
      "word": "supply",
      "pos": "n., vt.",
      "def": "供給"
    },
    {
      "word": "support",
      "pos": "n., vt.",
      "def": "支持"
    },
    {
      "word": "surface",
      "pos": "n.",
      "def": "表面"
    },
    {
      "word": "survive",
      "pos": "vi., vt.",
      "def": "生存"
    },
    {
      "word": "swallow n.燕子",
      "pos": "n.",
      "def": "vt. vi.嚥下"
    },
    {
      "word": "swan",
      "pos": "n.",
      "def": "天鵝"
    },
    {
      "word": "sweater",
      "pos": "n.",
      "def": "毛線衣"
    },
    {
      "word": "sweep",
      "pos": "n., vi., vt.",
      "def": "清掃"
    },
    {
      "word": "swing",
      "pos": "n., vt., vi.",
      "def": "擺動"
    },
    {
      "word": "symbol",
      "pos": "n.",
      "def": "象徵"
    },
    {
      "word": "talent",
      "pos": "n.",
      "def": "才能"
    },
    {
      "word": "talkative",
      "pos": "adj.",
      "def": "健談的"
    },
    {
      "word": "tangerine",
      "pos": "n.",
      "def": "橘子"
    },
    {
      "word": "tank",
      "pos": "n.",
      "def": "槽； 戰車"
    },
    {
      "word": "tape",
      "pos": "n.",
      "def": "膠布"
    },
    {
      "word": "target",
      "pos": "n.",
      "def": "目標"
    },
    {
      "word": "task",
      "pos": "n.",
      "def": "任務"
    },
    {
      "word": "tasty",
      "pos": "adj.",
      "def": "美味的"
    },
    {
      "word": "team",
      "pos": "n.",
      "def": "隊"
    },
    {
      "word": "tear",
      "pos": "n.",
      "def": "眼淚 (2) n. vt. vi. 撕開"
    },
    {
      "word": "teen(s)",
      "pos": "n.",
      "def": "青少年"
    },
    {
      "word": "teenage",
      "pos": "n.",
      "def": "青少年時期"
    },
    {
      "word": "teenager",
      "pos": "n.",
      "def": "青年"
    },
    {
      "word": "telephone/phone",
      "pos": "n.",
      "def": "電話"
    },
    {
      "word": "television/TV",
      "pos": "n.",
      "def": "電視"
    },
    {
      "word": "temple",
      "pos": "n.",
      "def": "寺廟"
    },
    {
      "word": "tennis",
      "pos": "n.",
      "def": "網球"
    },
    {
      "word": "tent",
      "pos": "n.",
      "def": "帳篷"
    },
    {
      "word": "term",
      "pos": "n.",
      "def": "期限"
    },
    {
      "word": "test",
      "pos": "n.",
      "def": "vt. vi. 試驗"
    },
    {
      "word": "terrible",
      "pos": "adj.",
      "def": "可怕的"
    },
    {
      "word": "terrific",
      "pos": "adj.",
      "def": "極佳的"
    },
    {
      "word": "textbook",
      "pos": "n.",
      "def": "教科書"
    },
    {
      "word": "theater",
      "pos": "n.",
      "def": "電影院"
    },
    {
      "word": "therefore",
      "pos": "adv.",
      "def": "因此"
    },
    {
      "word": "thick",
      "pos": "adj.",
      "def": "厚的"
    },
    {
      "word": "thief",
      "pos": "n.",
      "def": "小偷"
    },
    {
      "word": "thin",
      "pos": "adj.",
      "def": "細的"
    },
    {
      "word": "thirsty",
      "pos": "adj.",
      "def": "口乾的"
    },
    {
      "word": "throat",
      "pos": "n.",
      "def": "喉嚨"
    },
    {
      "word": "through",
      "pos": "adv., prep.",
      "def": "通過"
    },
    {
      "word": "throughout",
      "pos": "adv., prep.",
      "def": "遍布"
    },
    {
      "word": "thumb",
      "pos": "n.",
      "def": "拇指"
    },
    {
      "word": "thunder",
      "pos": "n.",
      "def": "雷聲"
    },
    {
      "word": "tip",
      "pos": "n.",
      "def": "小費 vi. vt. 踮著腳走；給小費"
    },
    {
      "word": "title",
      "pos": "n.",
      "def": "標題"
    },
    {
      "word": "toast",
      "pos": "n.",
      "def": "vt. vi. 敬酒"
    },
    {
      "word": "toe",
      "pos": "n.",
      "def": "腳趾"
    },
    {
      "word": "tofu / bean curd",
      "pos": "n.",
      "def": "豆腐"
    },
    {
      "word": "toilet",
      "pos": "n.",
      "def": "廁所"
    },
    {
      "word": "tomato",
      "pos": "n.",
      "def": "番茄"
    },
    {
      "word": "tongue",
      "pos": "n.",
      "def": "舌頭"
    },
    {
      "word": "tooth",
      "pos": "n.",
      "def": "牙齒"
    },
    {
      "word": "topic",
      "pos": "n.",
      "def": "題目"
    },
    {
      "word": "tour",
      "pos": "n.",
      "def": "vt. vi. 旅行"
    },
    {
      "word": "towel",
      "pos": "n.",
      "def": "毛巾"
    },
    {
      "word": "tower",
      "pos": "n.",
      "def": "高樓"
    },
    {
      "word": "track",
      "pos": "n.",
      "def": "足跡 vt. vi. 追蹤"
    },
    {
      "word": "trade",
      "pos": "n.",
      "def": "貿易"
    },
    {
      "word": "tradition",
      "pos": "n.",
      "def": "傳統"
    },
    {
      "word": "traditional",
      "pos": "adj.",
      "def": "傳統的"
    },
    {
      "word": "traffic",
      "pos": "n.",
      "def": "交通"
    },
    {
      "word": "trap",
      "pos": "n.",
      "def": "vt. vi. (設)陷阱"
    },
    {
      "word": "travel",
      "pos": "n.",
      "def": "vt. vi. 旅行"
    },
    {
      "word": "treasure",
      "pos": "n.",
      "def": "財寶 vt. 珍愛"
    },
    {
      "word": "treat (ment)",
      "pos": "n.",
      "def": ") 治療；處理；請客 (2) n. 請客"
    },
    {
      "word": "trial",
      "pos": "n.",
      "def": "考驗"
    },
    {
      "word": "triangle",
      "pos": "n.",
      "def": "三角（形）"
    },
    {
      "word": "trick",
      "pos": "n.",
      "def": "詭計 vt. vi. 哄騙"
    },
    {
      "word": "trousers",
      "pos": "n.",
      "def": "長褲"
    },
    {
      "word": "truck",
      "pos": "n.",
      "def": "卡車"
    },
    {
      "word": "trumpet",
      "pos": "n.",
      "def": "喇叭"
    },
    {
      "word": "trust",
      "pos": "n.",
      "def": "vt. vi. 信任"
    },
    {
      "word": "truth",
      "pos": "n.",
      "def": "實話"
    },
    {
      "word": "tube",
      "pos": "n.",
      "def": "管"
    },
    {
      "word": "tunnel",
      "pos": "n.",
      "def": "隧道"
    },
    {
      "word": "turkey",
      "pos": "n.",
      "def": "火雞"
    },
    {
      "word": "turtle",
      "pos": "n.",
      "def": "海龜"
    },
    {
      "word": "type",
      "pos": "n.",
      "def": "類型(2) vt. vi. 打字"
    },
    {
      "word": "typhoon",
      "pos": "n.",
      "def": "颱風"
    },
    {
      "word": "ugly",
      "pos": "adj.",
      "def": "難看的"
    },
    {
      "word": "umbrella",
      "pos": "n.",
      "def": "雨傘"
    },
    {
      "word": "underwear",
      "pos": "n.",
      "def": "內衣"
    },
    {
      "word": "uniform",
      "pos": "n.",
      "def": "制服"
    },
    {
      "word": "upon",
      "pos": "prep.",
      "def": "在……之上"
    },
    {
      "word": "upper",
      "pos": "adj.",
      "def": "上面的"
    },
    {
      "word": "used",
      "pos": "adj.",
      "def": "舊的"
    },
    {
      "word": "used to vi. phr. 過去時常",
      "pos": "adj.",
      "def": "習慣於 (be used to)"
    },
    {
      "word": "user",
      "pos": "n.",
      "def": "使用者"
    },
    {
      "word": "usual",
      "pos": "adj.",
      "def": "平常的"
    },
    {
      "word": "vacation",
      "pos": "n.",
      "def": "假期"
    },
    {
      "word": "valley",
      "pos": "n.",
      "def": "山谷"
    },
    {
      "word": "value",
      "pos": "n.",
      "def": "價值 vt. 重視"
    },
    {
      "word": "victory",
      "pos": "n.",
      "def": "勝利"
    },
    {
      "word": "video",
      "pos": "n.",
      "def": "影片"
    },
    {
      "word": "village",
      "pos": "n.",
      "def": "村莊"
    },
    {
      "word": "violin",
      "pos": "n.",
      "def": "小提琴"
    },
    {
      "word": "visitor",
      "pos": "n.",
      "def": "參觀者"
    },
    {
      "word": "vocabulary",
      "pos": "n.",
      "def": "字彙"
    },
    {
      "word": "volleyball",
      "pos": "n.",
      "def": "排球"
    },
    {
      "word": "vote",
      "pos": "n.",
      "def": "vi. vt. 投票"
    },
    {
      "word": "voter",
      "pos": "n.",
      "def": "投票人"
    },
    {
      "word": "waist",
      "pos": "n.",
      "def": "腰部"
    },
    {
      "word": "waiter /waitress",
      "pos": "n.",
      "def": "服務生"
    },
    {
      "word": "wake vi. vt. 醒來",
      "pos": "n.",
      "def": "守靈"
    },
    {
      "word": "wallet",
      "pos": "n.",
      "def": "皮夾"
    },
    {
      "word": "waterfall",
      "pos": "n.",
      "def": "瀑布"
    },
    {
      "word": "watermelon",
      "pos": "n.",
      "def": "西瓜"
    },
    {
      "word": "wave",
      "pos": "n.",
      "def": "波浪 vt. vi. 揮手；起伏"
    },
    {
      "word": "weapon",
      "pos": "n.",
      "def": "武器"
    },
    {
      "word": "wed",
      "pos": "vi., vt.",
      "def": "結婚"
    },
    {
      "word": "weekday",
      "pos": "n.",
      "def": "平日"
    },
    {
      "word": "western",
      "pos": "adj.",
      "def": "西方的"
    },
    {
      "word": "wet",
      "pos": "adj.",
      "def": "潮濕的"
    },
    {
      "word": "whale",
      "pos": "n.",
      "def": "鯨"
    },
    {
      "word": "whatever",
      "pos": "pron.",
      "def": "adj.任何…的事物"
    },
    {
      "word": "wheel",
      "pos": "n.",
      "def": "輪子"
    },
    {
      "word": "whenever",
      "pos": "adv., conj.",
      "def": "每當"
    },
    {
      "word": "wherever",
      "pos": "conj.",
      "def": "adv.無論在哪裡"
    },
    {
      "word": "whisper",
      "pos": "n.",
      "def": "vi. vt. 耳語"
    },
    {
      "word": "whoever",
      "pos": "pron.",
      "def": "無論誰"
    },
    {
      "word": "widen",
      "pos": "vt.",
      "def": "vi, 擴大"
    },
    {
      "word": "width",
      "pos": "n.",
      "def": "寬度"
    },
    {
      "word": "wild",
      "pos": "adj.",
      "def": "野生的"
    },
    {
      "word": "willing",
      "pos": "adj.",
      "def": "願意的"
    },
    {
      "word": "windy",
      "pos": "adj.",
      "def": "風大的"
    },
    {
      "word": "wing",
      "pos": "n.",
      "def": "翅膀"
    },
    {
      "word": "winner",
      "pos": "n.",
      "def": "優勝者"
    },
    {
      "word": "wire",
      "pos": "n.",
      "def": "電線 vt. vi. 拍電報"
    },
    {
      "word": "wise",
      "pos": "adj.",
      "def": "有智慧的"
    },
    {
      "word": "within",
      "pos": "adv., prep.",
      "def": "在……範圍內"
    },
    {
      "word": "without",
      "pos": "adv., prep.",
      "def": "沒有"
    },
    {
      "word": "wolf",
      "pos": "n.",
      "def": "狼"
    },
    {
      "word": "wonder vi. vt. 想知道",
      "pos": "n.",
      "def": "奇蹟"
    },
    {
      "word": "wonderful",
      "pos": "adj.",
      "def": "極好的"
    },
    {
      "word": "wooden",
      "pos": "adj.",
      "def": "木製的"
    },
    {
      "word": "wool",
      "pos": "n.",
      "def": "羊毛"
    },
    {
      "word": "worth",
      "pos": "n., adj.",
      "def": "有（……的）價值"
    },
    {
      "word": "wound",
      "pos": "n.",
      "def": "傷口"
    },
    {
      "word": "yard",
      "pos": "n.",
      "def": "庭院"
    },
    {
      "word": "youth",
      "pos": "n.",
      "def": "青春時代"
    },
    {
      "word": "zebra",
      "pos": "n.",
      "def": "斑馬"
    }
  ],
  "3": [
    {
      "word": "aboard ad.",
      "pos": "",
      "def": "在船(或飛機，車)上；上船(或飛機，車)"
    },
    {
      "word": "acceptable",
      "pos": "a.",
      "def": "可接受的"
    },
    {
      "word": "accident",
      "pos": "n.",
      "def": "意外(事情)；災禍"
    },
    {
      "word": "account",
      "pos": "n.",
      "def": "帳目；帳戶；說明 (2) vi.說明；對…負責(+for)"
    },
    {
      "word": "accurate",
      "pos": "a.",
      "def": "準確的；精確的"
    },
    {
      "word": "ache",
      "pos": "n.",
      "def": "疼痛"
    },
    {
      "word": "achieve",
      "pos": "vt.",
      "def": "完成，實現"
    },
    {
      "word": "achievement",
      "pos": "n.",
      "def": "成就；達成"
    },
    {
      "word": "activity",
      "pos": "n.",
      "def": "活力；活動；行動"
    },
    {
      "word": "actual",
      "pos": "a.",
      "def": "實際的；現實的"
    },
    {
      "word": "additional",
      "pos": "a.",
      "def": "額外的，附加的"
    },
    {
      "word": "admire",
      "pos": "vt.",
      "def": "欽佩；欣賞"
    },
    {
      "word": "admit",
      "pos": "vt.",
      "def": "承認 [+(that)"
    },
    {
      "word": "adopt",
      "pos": "vt.",
      "def": "採取；吸收；收養"
    },
    {
      "word": "advanced",
      "pos": "a.",
      "def": "先進的；高級的"
    },
    {
      "word": "advantage",
      "pos": "n.",
      "def": "優點，優勢"
    },
    {
      "word": "adventure",
      "pos": "n.",
      "def": "冒險，冒險活動"
    },
    {
      "word": "advertise",
      "pos": "v.",
      "def": "為…做廣告"
    },
    {
      "word": "advertisement",
      "pos": "n.",
      "def": "廣告(ad)"
    },
    {
      "word": "advice",
      "pos": "n.",
      "def": "勸告，忠告"
    },
    {
      "word": "advise",
      "pos": "vt.",
      "def": "勸告，忠告"
    },
    {
      "word": "adviser/advisor",
      "pos": "n.",
      "def": "顧問；導師"
    },
    {
      "word": "affect",
      "pos": "vt.",
      "def": "影響；感動"
    },
    {
      "word": "afford",
      "pos": "",
      "def": "常與can, could, be able to 連用)買得起；有足夠的…(去做…)"
    },
    {
      "word": "afterward(s) ad.",
      "pos": "",
      "def": "之後，後來"
    },
    {
      "word": "agriculture",
      "pos": "n.",
      "def": "農業，農耕"
    },
    {
      "word": "air-conditioner",
      "pos": "n.",
      "def": "冷氣機"
    },
    {
      "word": "alley",
      "pos": "n.",
      "def": "小巷，後街；小徑"
    },
    {
      "word": "amaze",
      "pos": "vt.",
      "def": "使大為驚奇"
    },
    {
      "word": "amazement",
      "pos": "n.",
      "def": "驚奇，詫異"
    },
    {
      "word": "ambassador",
      "pos": "n.",
      "def": "大使；使節"
    },
    {
      "word": "ambition",
      "pos": "n.",
      "def": "雄心，抱負，野心"
    },
    {
      "word": "angel",
      "pos": "n.",
      "def": "天使；守護神"
    },
    {
      "word": "angle",
      "pos": "n.",
      "def": "角；角度"
    },
    {
      "word": "announce",
      "pos": "v.",
      "def": "宣布，發布，通知"
    },
    {
      "word": "announcement",
      "pos": "n.",
      "def": "宣告"
    },
    {
      "word": "apart ad.",
      "pos": "",
      "def": "分開地，有距離地"
    },
    {
      "word": "apparent",
      "pos": "a.",
      "def": "明顯的"
    },
    {
      "word": "appeal",
      "pos": "vi.",
      "def": "呼籲，懇求；吸引(+to)"
    },
    {
      "word": "appreciate",
      "pos": "vt.",
      "def": "欣賞；感謝"
    },
    {
      "word": "approach",
      "pos": "v.",
      "def": "接近，靠近 n.方法"
    },
    {
      "word": "approve",
      "pos": "vt.",
      "def": "贊成，同意；批准"
    },
    {
      "word": "aquarium",
      "pos": "n.",
      "def": "魚缸；水族箱"
    },
    {
      "word": "arithmetic",
      "pos": "n.",
      "def": "算術，計算"
    },
    {
      "word": "arrival",
      "pos": "n.",
      "def": "到達"
    },
    {
      "word": "ash",
      "pos": "n.",
      "def": "灰，灰燼"
    },
    {
      "word": "aside ad.",
      "pos": "",
      "def": "在旁邊；到(或向)旁邊"
    },
    {
      "word": "assist",
      "pos": "vt.",
      "def": "vi幫助，協助；支持"
    },
    {
      "word": "athlete",
      "pos": "n.",
      "def": "運動員，體育家"
    },
    {
      "word": "attempt",
      "pos": "vt.",
      "def": "n.企圖，嘗試"
    },
    {
      "word": "attitude",
      "pos": "n.",
      "def": "態度，看法"
    },
    {
      "word": "attract",
      "pos": "vt.",
      "def": "吸引；引誘"
    },
    {
      "word": "attractive",
      "pos": "a.",
      "def": "迷人的；有魅力的"
    },
    {
      "word": "audience",
      "pos": "n.",
      "def": "觀眾，聽眾，讀者"
    },
    {
      "word": "author",
      "pos": "n.",
      "def": "作者，作家"
    },
    {
      "word": "automatic",
      "pos": "a.",
      "def": "自動的"
    },
    {
      "word": "automobile n.【",
      "pos": "",
      "def": "美】汽車(auto)"
    },
    {
      "word": "available",
      "pos": "a.",
      "def": "在手邊的；可得到的"
    },
    {
      "word": "avenue",
      "pos": "n.",
      "def": "林蔭大道，馬路"
    },
    {
      "word": "average",
      "pos": "n.",
      "def": "平均，平均數 a.平均的；一般的"
    },
    {
      "word": "awake",
      "pos": "vt.",
      "def": "喚醒… vi.醒來 a.醒著的"
    },
    {
      "word": "awaken",
      "pos": "vi.",
      "def": "醒；覺醒 vt.喚醒"
    },
    {
      "word": "award",
      "pos": "vt.",
      "def": "授予，給予 n.獎；獎品"
    },
    {
      "word": "aware",
      "pos": "a.",
      "def": "知道的，察覺的"
    },
    {
      "word": "awful",
      "pos": "a.",
      "def": "可怕的，嚇人的；極糟的"
    },
    {
      "word": "ax/axe n.(",
      "pos": "",
      "def": "長柄)斧"
    },
    {
      "word": "background",
      "pos": "n.",
      "def": "背景；經歷"
    },
    {
      "word": "bacon",
      "pos": "n.",
      "def": "培根；燻豬肉；鹹豬肉"
    },
    {
      "word": "bacteria",
      "pos": "n.",
      "def": "細菌"
    },
    {
      "word": "bacterium",
      "pos": "n.",
      "def": "細菌"
    },
    {
      "word": "badly ad.",
      "pos": "",
      "def": "壞；拙劣地；嚴重地"
    },
    {
      "word": "badminton",
      "pos": "n.",
      "def": "羽毛球"
    },
    {
      "word": "baggage n.【",
      "pos": "",
      "def": "主美】行李"
    },
    {
      "word": "bait",
      "pos": "n.",
      "def": "餌"
    },
    {
      "word": "balance",
      "pos": "n.",
      "def": "平衡；均衡 vt.平衡"
    },
    {
      "word": "bandage",
      "pos": "n.",
      "def": "繃帶 vt.用繃帶包紮"
    },
    {
      "word": "bang",
      "pos": "vi.",
      "def": "發出砰的一聲 vt.猛擊n.砰砰的聲音"
    },
    {
      "word": "bare",
      "pos": "a.",
      "def": "赤裸的；光禿禿的"
    },
    {
      "word": "barely ad.",
      "pos": "",
      "def": "幾乎沒有；僅僅"
    },
    {
      "word": "barn",
      "pos": "n.",
      "def": "穀倉；馬房，牛舍"
    },
    {
      "word": "barrel n.(",
      "pos": "",
      "def": "中間粗兩端細的)大桶"
    },
    {
      "word": "bay",
      "pos": "n.",
      "def": "海灣；河灣"
    },
    {
      "word": "beam1",
      "pos": "n.",
      "def": "樑；光線，光束"
    },
    {
      "word": "beast",
      "pos": "n.",
      "def": "野獸；畜生"
    },
    {
      "word": "beggar",
      "pos": "n.",
      "def": "乞丐"
    },
    {
      "word": "behave",
      "pos": "vi.",
      "def": "表現；舉止vt.使…守規矩"
    },
    {
      "word": "being",
      "pos": "n.",
      "def": "存在，生命；生物"
    },
    {
      "word": "belly",
      "pos": "n.",
      "def": "肚子 (同：stomach , tummy )"
    },
    {
      "word": "abdomen",
      "pos": "n.",
      "def": "腹；腹部"
    },
    {
      "word": "beneath",
      "pos": "prep.",
      "def": "在...之下"
    },
    {
      "word": "benefit",
      "pos": "n.",
      "def": "利益，好處；優勢"
    },
    {
      "word": "berry",
      "pos": "n.",
      "def": "莓果"
    },
    {
      "word": "Bible/bible",
      "pos": "n.",
      "def": "聖經"
    },
    {
      "word": "billion",
      "pos": "n.",
      "def": "十億"
    },
    {
      "word": "bingo",
      "pos": "n.",
      "def": "賓果遊戲；太好了"
    },
    {
      "word": "biscuit",
      "pos": "n.",
      "def": "餅乾，小麵包"
    },
    {
      "word": "blame",
      "pos": "vt.",
      "def": "責備，指責"
    },
    {
      "word": "blanket",
      "pos": "n.",
      "def": "毛毯，床罩"
    },
    {
      "word": "bleed",
      "pos": "vi.",
      "def": "流血，出血"
    },
    {
      "word": "bless",
      "pos": "vt.",
      "def": "保佑，庇護"
    },
    {
      "word": "blouse n.(",
      "pos": "",
      "def": "婦女，兒童的)短上衣"
    },
    {
      "word": "bold",
      "pos": "a.",
      "def": "大膽的；粗體的"
    },
    {
      "word": "boot n.(",
      "pos": "",
      "def": "長筒)靴"
    },
    {
      "word": "border",
      "pos": "n.",
      "def": "邊緣，邊界；國界"
    },
    {
      "word": "bore",
      "pos": "vt.",
      "def": "vi.鑽孔；挖井(或通道)"
    },
    {
      "word": "brake",
      "pos": "vt.",
      "def": "vi.煞車 n.煞車"
    },
    {
      "word": "brass",
      "pos": "n.",
      "def": "黃銅"
    },
    {
      "word": "bravery",
      "pos": "n.",
      "def": "勇敢，勇氣"
    },
    {
      "word": "breast",
      "pos": "n.",
      "def": "乳房，胸部"
    },
    {
      "word": "breath",
      "pos": "n.",
      "def": "呼吸，氣息"
    },
    {
      "word": "breathe",
      "pos": "vi.",
      "def": "呼吸 vt.呼出；吸入"
    },
    {
      "word": "breeze",
      "pos": "n.",
      "def": "微風，和風"
    },
    {
      "word": "bride",
      "pos": "n.",
      "def": "新娘"
    },
    {
      "word": "brilliant",
      "pos": "a.",
      "def": "明亮的；才華橫溢的"
    },
    {
      "word": "brook",
      "pos": "n.",
      "def": "小河，小溪"
    },
    {
      "word": "broom",
      "pos": "n.",
      "def": "掃帚"
    },
    {
      "word": "brow(s)",
      "pos": "n.",
      "def": "眉毛；額頭"
    },
    {
      "word": "bubble",
      "pos": "n.",
      "def": "氣泡vi.冒泡 vt.使…冒泡"
    },
    {
      "word": "bucket",
      "pos": "n.",
      "def": "水桶(pail )"
    },
    {
      "word": "bud",
      "pos": "n.",
      "def": "芽；花蕾"
    },
    {
      "word": "budget",
      "pos": "n.",
      "def": "預算"
    },
    {
      "word": "buffalo",
      "pos": "n.",
      "def": "水牛"
    },
    {
      "word": "buffet",
      "pos": "n.",
      "def": "自助餐"
    },
    {
      "word": "bulb",
      "pos": "n.",
      "def": "燈泡"
    },
    {
      "word": "bull",
      "pos": "n.",
      "def": "公牛"
    },
    {
      "word": "bullet",
      "pos": "n.",
      "def": "子彈"
    },
    {
      "word": "bump",
      "pos": "n.",
      "def": "vt.vi.碰，撞"
    },
    {
      "word": "bunch",
      "pos": "n.",
      "def": "串，束"
    },
    {
      "word": "burden",
      "pos": "n.",
      "def": "重擔；負擔"
    },
    {
      "word": "burglar",
      "pos": "n.",
      "def": "破門盜竊者，夜賊"
    },
    {
      "word": "bury",
      "pos": "vt.",
      "def": "埋葬，安葬"
    },
    {
      "word": "bush",
      "pos": "n.",
      "def": "灌木，灌木叢"
    },
    {
      "word": "buzz",
      "pos": "n.",
      "def": "vi.vt.(蜂)嗡嗡叫；(機器)唧唧響"
    },
    {
      "word": "cabin",
      "pos": "n.",
      "def": "客艙；小木屋"
    },
    {
      "word": "campus",
      "pos": "n.",
      "def": "校園"
    },
    {
      "word": "cane",
      "pos": "n.",
      "def": "手杖；拐杖"
    },
    {
      "word": "canoe",
      "pos": "n.",
      "def": "獨木舟"
    },
    {
      "word": "canyon",
      "pos": "n.",
      "def": "峽谷"
    },
    {
      "word": "capable",
      "pos": "a.",
      "def": "有能力的；能幹的"
    },
    {
      "word": "capital1",
      "pos": "n.",
      "def": "首都；大寫字母；資本"
    },
    {
      "word": "capture",
      "pos": "vt.",
      "def": "捕獲；俘虜"
    },
    {
      "word": "carpenter",
      "pos": "n.",
      "def": "木匠"
    },
    {
      "word": "carriage",
      "pos": "n.",
      "def": "四輪馬車； 嬰兒車；1"
    },
    {
      "word": "cast",
      "pos": "n.",
      "def": "vt.vi.投，擲；2"
    },
    {
      "word": "cast",
      "pos": "n.",
      "def": "卡司(演員陣容)"
    },
    {
      "word": "casual",
      "pos": "a.",
      "def": "偶然的；非正式的"
    },
    {
      "word": "caterpillar",
      "pos": "n.",
      "def": "毛蟲"
    },
    {
      "word": "cattle",
      "pos": "n.",
      "def": "牛群"
    },
    {
      "word": "celebrate",
      "pos": "vt.",
      "def": "慶祝"
    },
    {
      "word": "centimeter",
      "pos": "n.",
      "def": "公分"
    },
    {
      "word": "ceramic",
      "pos": "n.",
      "def": "陶器 a.陶器的"
    },
    {
      "word": "chain",
      "pos": "n.",
      "def": "鏈，鏈條；連鎖店"
    },
    {
      "word": "challenge",
      "pos": "n.",
      "def": "挑戰 vt.向…挑戰"
    },
    {
      "word": "champion",
      "pos": "n.",
      "def": "優勝者，冠軍"
    },
    {
      "word": "changeable",
      "pos": "a.",
      "def": "易變的"
    },
    {
      "word": "channel",
      "pos": "n.",
      "def": "頻道；水道；海峽"
    },
    {
      "word": "chapter n.(",
      "pos": "",
      "def": "書籍的)章，回"
    },
    {
      "word": "charm",
      "pos": "n.",
      "def": "魅力；符咒"
    },
    {
      "word": "chat",
      "pos": "n.",
      "def": "vi.閒談，聊天"
    },
    {
      "word": "cheek",
      "pos": "n.",
      "def": "臉頰"
    },
    {
      "word": "cheer n.歡呼，喝采",
      "pos": "vt.",
      "def": "vi.(向…)歡呼；鼓舞"
    },
    {
      "word": "cheerful",
      "pos": "a.",
      "def": "興高采烈的"
    },
    {
      "word": "cheese",
      "pos": "n.",
      "def": "乳酪"
    },
    {
      "word": "cherry",
      "pos": "n.",
      "def": "櫻桃"
    },
    {
      "word": "chest",
      "pos": "n.",
      "def": "胸膛"
    },
    {
      "word": "chew",
      "pos": "vt.",
      "def": "咀嚼"
    },
    {
      "word": "childhood",
      "pos": "n.",
      "def": "幼年時期"
    },
    {
      "word": "chill",
      "pos": "n.",
      "def": "寒冷"
    },
    {
      "word": "chilly",
      "pos": "a.",
      "def": "寒冷的"
    },
    {
      "word": "chimney",
      "pos": "n.",
      "def": "煙囪"
    },
    {
      "word": "chip",
      "pos": "n.",
      "def": "碎片；薯條；晶片"
    },
    {
      "word": "choke",
      "pos": "vt.",
      "def": "vi.使窒息；哽住"
    },
    {
      "word": "chop",
      "pos": "n.",
      "def": "vt.vi.砍，劈，斬"
    },
    {
      "word": "cigarette",
      "pos": "n.",
      "def": "香煙"
    },
    {
      "word": "circus",
      "pos": "n.",
      "def": "馬戲團"
    },
    {
      "word": "civil",
      "pos": "a.",
      "def": "公民的"
    },
    {
      "word": "classical",
      "pos": "a.",
      "def": "古典的"
    },
    {
      "word": "click n.卡嗒聲",
      "pos": "vt.",
      "def": "vi.發出卡嗒聲"
    },
    {
      "word": "client",
      "pos": "n.",
      "def": "委託人；客戶"
    },
    {
      "word": "clinic",
      "pos": "n.",
      "def": "診所"
    },
    {
      "word": "clip",
      "pos": "vt.",
      "def": "剪；修剪n.剪；修剪；短片"
    },
    {
      "word": "clue",
      "pos": "n.",
      "def": "線索，跡象"
    },
    {
      "word": "cocktail",
      "pos": "n.",
      "def": "雞尾酒"
    },
    {
      "word": "coconut",
      "pos": "n.",
      "def": "椰子"
    },
    {
      "word": "collar",
      "pos": "n.",
      "def": "衣領；項圈"
    },
    {
      "word": "collection",
      "pos": "n.",
      "def": "收集；收藏品"
    },
    {
      "word": "college",
      "pos": "n.",
      "def": "大學；學院"
    },
    {
      "word": "colony",
      "pos": "n.",
      "def": "殖民地"
    },
    {
      "word": "column",
      "pos": "n.",
      "def": "圓柱；(報紙的)欄，段；縱列"
    },
    {
      "word": "combine",
      "pos": "vt.",
      "def": "結合"
    },
    {
      "word": "comfort",
      "pos": "n.",
      "def": "舒適；安慰 vt.安慰"
    },
    {
      "word": "comma",
      "pos": "n.",
      "def": "逗號"
    },
    {
      "word": "command",
      "pos": "vt.",
      "def": "n.命令"
    },
    {
      "word": "commercial",
      "pos": "n.",
      "def": "電視廣告 a.商業的"
    },
    {
      "word": "committee",
      "pos": "n.",
      "def": "委員會"
    },
    {
      "word": "communicate",
      "pos": "vt.",
      "def": "vi.溝通"
    },
    {
      "word": "comparison",
      "pos": "n.",
      "def": "比較"
    },
    {
      "word": "compete",
      "pos": "vi.",
      "def": "競爭；比賽"
    },
    {
      "word": "complaint",
      "pos": "n.",
      "def": "抱怨"
    },
    {
      "word": "complex",
      "pos": "a.",
      "def": "複雜的"
    },
    {
      "word": "concern",
      "pos": "vt.",
      "def": "關於；關心 n.關心"
    },
    {
      "word": "concert",
      "pos": "n.",
      "def": "音樂會"
    },
    {
      "word": "conclude",
      "pos": "vt.",
      "def": "vi.結束；斷定"
    },
    {
      "word": "conclusion",
      "pos": "n.",
      "def": "結論；結局"
    },
    {
      "word": "condition",
      "pos": "n.",
      "def": "情況；條件"
    },
    {
      "word": "cone",
      "pos": "n.",
      "def": "圓錐體；甜筒"
    },
    {
      "word": "confident",
      "pos": "a.",
      "def": "有信心的"
    },
    {
      "word": "confuse",
      "pos": "vt.",
      "def": "使…困惑"
    },
    {
      "word": "connect",
      "pos": "vt.",
      "def": "vi.連接，連結"
    },
    {
      "word": "connection",
      "pos": "n.",
      "def": "連接；聯絡"
    },
    {
      "word": "conscious",
      "pos": "a.",
      "def": "神志清醒的，有知覺的"
    },
    {
      "word": "considerable",
      "pos": "a.",
      "def": "相當大(多)的"
    },
    {
      "word": "consideration",
      "pos": "n.",
      "def": "考慮；體貼"
    },
    {
      "word": "constant",
      "pos": "a.",
      "def": "固定的，不變的"
    },
    {
      "word": "continent",
      "pos": "n.",
      "def": "洲；大陸"
    },
    {
      "word": "contract",
      "pos": "n.",
      "def": "契約；合同"
    },
    {
      "word": "couch",
      "pos": "n.",
      "def": "長沙發"
    },
    {
      "word": "countable",
      "pos": "a.",
      "def": "可計算的；可數的"
    },
    {
      "word": "coward",
      "pos": "n.",
      "def": "懦夫，膽怯者"
    },
    {
      "word": "cradle",
      "pos": "n.",
      "def": "搖籃"
    },
    {
      "word": "crash",
      "pos": "vi.",
      "def": "n.碰撞；(飛機等)墜毀；【電腦】當機"
    },
    {
      "word": "crawl",
      "pos": "vi.",
      "def": "爬"
    },
    {
      "word": "creative",
      "pos": "a.",
      "def": "有創意的"
    },
    {
      "word": "creator",
      "pos": "n.",
      "def": "創造者"
    },
    {
      "word": "creature",
      "pos": "n.",
      "def": "生物"
    },
    {
      "word": "credit",
      "pos": "n.",
      "def": "賒帳；信用；功勞"
    },
    {
      "word": "creep",
      "pos": "vi.",
      "def": "躡手躡足地走"
    },
    {
      "word": "crew",
      "pos": "n.",
      "def": "全體機組人員"
    },
    {
      "word": "cricket",
      "pos": "n.",
      "def": "蟋蟀；【體】板球"
    },
    {
      "word": "criminal",
      "pos": "n.",
      "def": "罪犯 a.犯罪的"
    },
    {
      "word": "crisp",
      "pos": "a.",
      "def": "脆的 同：crispy"
    },
    {
      "word": "crown",
      "pos": "n.",
      "def": "王冠"
    },
    {
      "word": "crunchy",
      "pos": "a.",
      "def": "發嘎吱嘎吱聲的"
    },
    {
      "word": "crutch n.(",
      "pos": "",
      "def": "支在腋下的)撐拐"
    },
    {
      "word": "cultural",
      "pos": "a.",
      "def": "文化的"
    },
    {
      "word": "cupboard",
      "pos": "n.",
      "def": "碗櫃"
    },
    {
      "word": "current",
      "pos": "n.",
      "def": "水流，氣流；電流 a.現時的；當前的"
    },
    {
      "word": "cycle",
      "pos": "n.",
      "def": "週期"
    },
    {
      "word": "dairy",
      "pos": "n.",
      "def": "乳品場"
    },
    {
      "word": "dam",
      "pos": "n.",
      "def": "水壩"
    },
    {
      "word": "dare",
      "pos": "aux.",
      "def": "敢 vt.敢"
    },
    {
      "word": "darling",
      "pos": "n.",
      "def": "心愛的人"
    },
    {
      "word": "dash",
      "pos": "vi., vt.",
      "def": "n.猛撞；猛衝 n.破折號"
    },
    {
      "word": "deafen",
      "pos": "vt.",
      "def": "使聾；使聽不見"
    },
    {
      "word": "dealer",
      "pos": "n.",
      "def": "經銷商；發牌者"
    },
    {
      "word": "decade",
      "pos": "n.",
      "def": "十年"
    },
    {
      "word": "deck",
      "pos": "n.",
      "def": "艙面，甲板；(紙牌的)一副"
    },
    {
      "word": "deed",
      "pos": "n.",
      "def": "行為；功績"
    },
    {
      "word": "deepen",
      "pos": "vt.",
      "def": "vi.使變深；加深"
    },
    {
      "word": "define",
      "pos": "vt.",
      "def": "給...下定義"
    },
    {
      "word": "definition",
      "pos": "n.",
      "def": "定義"
    },
    {
      "word": "delivery",
      "pos": "n.",
      "def": "投遞；分娩"
    },
    {
      "word": "democracy",
      "pos": "n.",
      "def": "民主；民主制度"
    },
    {
      "word": "democratic",
      "pos": "a.",
      "def": "民主的"
    },
    {
      "word": "deposit",
      "pos": "n.",
      "def": "存款 ；保證金vt.存錢"
    },
    {
      "word": "description",
      "pos": "n.",
      "def": "描寫；形容"
    },
    {
      "word": "designer",
      "pos": "n.",
      "def": "設計者；時裝設計師"
    },
    {
      "word": "desirable",
      "pos": "a.",
      "def": "值得嚮往(擁有)的"
    },
    {
      "word": "destroy",
      "pos": "vt.",
      "def": "毀壞，破壞"
    },
    {
      "word": "detail",
      "pos": "n.",
      "def": "細節；詳情"
    },
    {
      "word": "determine",
      "pos": "vt.",
      "def": "決定"
    },
    {
      "word": "devil",
      "pos": "n.",
      "def": "魔鬼，惡魔"
    },
    {
      "word": "dialogue",
      "pos": "n.",
      "def": "對話；交談"
    },
    {
      "word": "diet",
      "pos": "n.",
      "def": "節食；飲食"
    },
    {
      "word": "diligent",
      "pos": "a.",
      "def": "勤勉的，勤奮的"
    },
    {
      "word": "dim",
      "pos": "a.",
      "def": "微暗的；暗淡的 v.變暗淡"
    },
    {
      "word": "dime",
      "pos": "n.",
      "def": "一角"
    },
    {
      "word": "dine",
      "pos": "vi.",
      "def": "進餐，用餐"
    },
    {
      "word": "dip",
      "pos": "vt.",
      "def": "浸；泡"
    },
    {
      "word": "dirt",
      "pos": "n.",
      "def": "汙物；爛泥"
    },
    {
      "word": "disappoint",
      "pos": "vt.",
      "def": "使…失望"
    },
    {
      "word": "disappointment",
      "pos": "n.",
      "def": "失望"
    },
    {
      "word": "disco",
      "pos": "n.",
      "def": "迪斯科舞廳 同：discotheque"
    },
    {
      "word": "discount",
      "pos": "n.",
      "def": "折扣 vt.將…打折"
    },
    {
      "word": "discovery",
      "pos": "n.",
      "def": "發現"
    },
    {
      "word": "disease",
      "pos": "n.",
      "def": "病，疾病"
    },
    {
      "word": "disk/disc",
      "pos": "n.",
      "def": "圓盤；唱片；碟片；鐵餅"
    },
    {
      "word": "dislike",
      "pos": "vt.",
      "def": "n.不喜愛，厭惡"
    },
    {
      "word": "ditch",
      "pos": "n.",
      "def": "水溝；壕溝"
    },
    {
      "word": "dive",
      "pos": "vi.",
      "def": "n.跳水；潛水；俯衝"
    },
    {
      "word": "dock",
      "pos": "n.",
      "def": "碼頭"
    },
    {
      "word": "dodge",
      "pos": "vt.",
      "def": "閃開，躲開"
    },
    {
      "word": "domestic",
      "pos": "a.",
      "def": "家庭的；國內的"
    },
    {
      "word": "dose n.(",
      "pos": "",
      "def": "藥物等的)一劑，一服"
    },
    {
      "word": "doubtful",
      "pos": "a.",
      "def": "懷疑的，疑惑的"
    },
    {
      "word": "drain",
      "pos": "vt.",
      "def": "排出(液體)；使流出 n.排水管"
    },
    {
      "word": "dramatic",
      "pos": "a.",
      "def": "戲劇的；戲劇性的"
    },
    {
      "word": "drip",
      "pos": "vi., vt.",
      "def": "n.滴(下)"
    },
    {
      "word": "drown",
      "pos": "vt.",
      "def": "把…淹死 vi.溺死"
    },
    {
      "word": "drowsy",
      "pos": "a.",
      "def": "昏昏欲睡的；困倦的"
    },
    {
      "word": "drunk",
      "pos": "a.",
      "def": "喝醉(酒)的"
    },
    {
      "word": "due",
      "pos": "a.",
      "def": "到期的；應支付的"
    },
    {
      "word": "dump",
      "pos": "vt.",
      "def": "傾倒；拋棄 n.垃圾場"
    },
    {
      "word": "dust",
      "pos": "n.",
      "def": "灰塵，塵土"
    },
    {
      "word": "eager",
      "pos": "a.",
      "def": "熱心的；急切的"
    },
    {
      "word": "earnings",
      "pos": "n.",
      "def": "收入，工資"
    },
    {
      "word": "echo",
      "pos": "n.",
      "def": "回聲；回響 v.發出回音"
    },
    {
      "word": "edit",
      "pos": "vt.",
      "def": "編輯；校訂"
    },
    {
      "word": "edition n.(",
      "pos": "",
      "def": "發行物的)版；版本"
    },
    {
      "word": "editor",
      "pos": "n.",
      "def": "編輯"
    },
    {
      "word": "educate",
      "pos": "vt.",
      "def": "教育"
    },
    {
      "word": "educational",
      "pos": "a.",
      "def": "教育的"
    },
    {
      "word": "efficient",
      "pos": "a.",
      "def": "效率高的"
    },
    {
      "word": "elbow",
      "pos": "n.",
      "def": "手肘 vt.架拐子"
    },
    {
      "word": "elderly",
      "pos": "a.",
      "def": "年長的"
    },
    {
      "word": "election",
      "pos": "n.",
      "def": "選舉"
    },
    {
      "word": "electric",
      "pos": "a.",
      "def": "電的；電動的(electrical)"
    },
    {
      "word": "electricity",
      "pos": "n.",
      "def": "電"
    },
    {
      "word": "electronic",
      "pos": "a.",
      "def": "電子的"
    },
    {
      "word": "emergency",
      "pos": "n.",
      "def": "緊急情況"
    },
    {
      "word": "emperor",
      "pos": "n.",
      "def": "皇帝"
    },
    {
      "word": "emphasize",
      "pos": "vt.",
      "def": "強調"
    },
    {
      "word": "employ",
      "pos": "vt.",
      "def": "僱用；使用"
    },
    {
      "word": "employment",
      "pos": "n.",
      "def": "僱用；工作"
    },
    {
      "word": "employee",
      "pos": "n.",
      "def": "受僱者，雇員"
    },
    {
      "word": "employer",
      "pos": "n.",
      "def": "僱主"
    },
    {
      "word": "empty",
      "pos": "a.",
      "def": "空的；未佔用的"
    },
    {
      "word": "enable",
      "pos": "vt.",
      "def": "使能夠…"
    },
    {
      "word": "energetic",
      "pos": "a.",
      "def": "精力旺盛的"
    },
    {
      "word": "engage",
      "pos": "vt.",
      "def": "吸引；佔用(時間、精力)；使訂婚"
    },
    {
      "word": "engagement",
      "pos": "n.",
      "def": "訂婚"
    },
    {
      "word": "engine",
      "pos": "n.",
      "def": "引擎；火車頭；消防車"
    },
    {
      "word": "engineer",
      "pos": "n.",
      "def": "工程師"
    },
    {
      "word": "enjoyable",
      "pos": "a.",
      "def": "快樂的；有樂趣的"
    },
    {
      "word": "entry",
      "pos": "n.",
      "def": "進入；入口；項目"
    },
    {
      "word": "environmental",
      "pos": "a.",
      "def": "環境的"
    },
    {
      "word": "envy",
      "pos": "n.",
      "def": "vt.妒忌；羨慕"
    },
    {
      "word": "erase",
      "pos": "vt.",
      "def": "擦掉，抹去"
    },
    {
      "word": "escape",
      "pos": "vi.",
      "def": "vt.n.逃跑；逃脫"
    },
    {
      "word": "evil",
      "pos": "a.",
      "def": "邪惡的 n.邪惡"
    },
    {
      "word": "excellence",
      "pos": "n.",
      "def": "優秀；傑出；卓越"
    },
    {
      "word": "exchange",
      "pos": "vi., vt.",
      "def": "n.交換；調換"
    },
    {
      "word": "exhibition",
      "pos": "n.",
      "def": "展覽；展覽會"
    },
    {
      "word": "existence",
      "pos": "n.",
      "def": "存在"
    },
    {
      "word": "exit",
      "pos": "n.",
      "def": "出口 vi.出去"
    },
    {
      "word": "expectation",
      "pos": "n.",
      "def": "期待；預期"
    },
    {
      "word": "expense",
      "pos": "n.",
      "def": "費用；經費；代價"
    },
    {
      "word": "experiment",
      "pos": "n.",
      "def": "實驗；試驗"
    },
    {
      "word": "explode",
      "pos": "vt.",
      "def": "使爆炸 vi.爆炸"
    },
    {
      "word": "export",
      "pos": "n.",
      "def": "輸出，出口 v.輸出，出口"
    },
    {
      "word": "expression",
      "pos": "n.",
      "def": "表達；措辭"
    },
    {
      "word": "expressive",
      "pos": "a.",
      "def": "表現的；表情豐富的"
    },
    {
      "word": "extreme",
      "pos": "n.",
      "def": "極端，末端 a.極端的"
    },
    {
      "word": "fable",
      "pos": "n.",
      "def": "寓言"
    },
    {
      "word": "factor",
      "pos": "n.",
      "def": "因素"
    },
    {
      "word": "fade",
      "pos": "vi.",
      "def": "凋謝，枯萎；褪色"
    },
    {
      "word": "faint",
      "pos": "a.",
      "def": "頭暈的 vi.昏厥"
    },
    {
      "word": "fairly",
      "pos": "a.",
      "def": "公平地；相當地"
    },
    {
      "word": "fairy",
      "pos": "n.",
      "def": "小妖精；仙女"
    },
    {
      "word": "faith",
      "pos": "n.",
      "def": "信念；信任"
    },
    {
      "word": "fake",
      "pos": "vt.",
      "def": "偽造；捏造 vi.假裝；做假動作 n.冒牌貨；仿冒品"
    },
    {
      "word": "familiar",
      "pos": "a.",
      "def": "熟悉的；常見的"
    },
    {
      "word": "fan",
      "pos": "n.",
      "def": "狂熱者；歌(影、書)迷 同：fanatic"
    },
    {
      "word": "fancy",
      "pos": "n.",
      "def": "愛好；迷戀 a.高貴的；花俏的"
    },
    {
      "word": "fare n.(",
      "pos": "",
      "def": "交通工具的)票價，車(船)費"
    },
    {
      "word": "farther ad.(",
      "pos": "",
      "def": "距離，時間)更遠地"
    },
    {
      "word": "fashion",
      "pos": "n.",
      "def": "流行式樣；時尚"
    },
    {
      "word": "fashionable",
      "pos": "a.",
      "def": "流行的；時髦的"
    },
    {
      "word": "fasten",
      "pos": "vt.",
      "def": "紮牢；繫緊"
    },
    {
      "word": "fate",
      "pos": "n.",
      "def": "命運；天命"
    },
    {
      "word": "faucet",
      "pos": "n.",
      "def": "水龍頭 同：tap1"
    },
    {
      "word": "fax",
      "pos": "n.",
      "def": "傳真機 vt.傳真"
    },
    {
      "word": "feather",
      "pos": "n.",
      "def": "羽毛"
    },
    {
      "word": "feature",
      "pos": "n.",
      "def": "特徵，特色"
    },
    {
      "word": "file",
      "pos": "n.",
      "def": "文件夾；檔案；卷宗"
    },
    {
      "word": "firework",
      "pos": "n.",
      "def": "煙火"
    },
    {
      "word": "fist",
      "pos": "n.",
      "def": "拳頭"
    },
    {
      "word": "flame",
      "pos": "n.",
      "def": "火焰；火舌"
    },
    {
      "word": "flavor",
      "pos": "n.",
      "def": "味道；風味"
    },
    {
      "word": "flea",
      "pos": "n.",
      "def": "跳蚤"
    },
    {
      "word": "flesh",
      "pos": "n.",
      "def": "肉，肌肉"
    },
    {
      "word": "float",
      "pos": "vi.",
      "def": "浮；漂浮"
    },
    {
      "word": "flock n.(",
      "pos": "",
      "def": "飛禽，牲畜等的)群 vi.聚集"
    },
    {
      "word": "fold",
      "pos": "vi., vt.",
      "def": "n.摺疊"
    },
    {
      "word": "folk",
      "pos": "n.",
      "def": "人們；民族"
    },
    {
      "word": "follower",
      "pos": "n.",
      "def": "追隨者；信徒"
    },
    {
      "word": "fond",
      "pos": "a.",
      "def": "喜歡的；愛好的"
    },
    {
      "word": "forehead",
      "pos": "n.",
      "def": "額頭 同：brow"
    },
    {
      "word": "forever",
      "pos": "adv.",
      "def": "永遠"
    },
    {
      "word": "forth",
      "pos": "adv.",
      "def": "向前"
    },
    {
      "word": "fortune",
      "pos": "n.",
      "def": "財富；幸運"
    },
    {
      "word": "found",
      "pos": "vt.",
      "def": "建立；創辦"
    },
    {
      "word": "fountain",
      "pos": "n.",
      "def": "泉水；噴泉；飲水機"
    },
    {
      "word": "freeze",
      "pos": "vi.",
      "def": "vt.結冰；凍牢"
    },
    {
      "word": "frequent",
      "pos": "a.",
      "def": "時常發生的，頻繁的"
    },
    {
      "word": "friendship",
      "pos": "n.",
      "def": "友誼；友好"
    },
    {
      "word": "frustrate",
      "pos": "vt.",
      "def": "挫敗；阻撓"
    },
    {
      "word": "fry",
      "pos": "vt.",
      "def": "油炸，油炒 n.炒菜；炸薯條"
    },
    {
      "word": "fund",
      "pos": "n.",
      "def": "資金，基金"
    },
    {
      "word": "fur",
      "pos": "n.",
      "def": "毛皮"
    },
    {
      "word": "furniture",
      "pos": "n.",
      "def": "傢俱"
    },
    {
      "word": "gallon",
      "pos": "n.",
      "def": "加侖"
    },
    {
      "word": "gamble",
      "pos": "vi., vt.",
      "def": "n.賭博；打賭"
    },
    {
      "word": "gang n.(",
      "pos": "",
      "def": "歹徒等的)一幫，一群"
    },
    {
      "word": "gap",
      "pos": "n.",
      "def": "裂口，缺口"
    },
    {
      "word": "garlic",
      "pos": "n.",
      "def": "大蒜；蒜頭"
    },
    {
      "word": "gasoline",
      "pos": "n.",
      "def": "汽油 同：gas"
    },
    {
      "word": "gesture",
      "pos": "n.",
      "def": "姿勢；手勢 vi.做手勢"
    },
    {
      "word": "glance",
      "pos": "vi.",
      "def": "vt.n.一瞥；掃視"
    },
    {
      "word": "global",
      "pos": "a.",
      "def": "球狀的"
    },
    {
      "word": "glory",
      "pos": "n.",
      "def": "光榮，榮譽"
    },
    {
      "word": "glow",
      "pos": "n.",
      "def": "vi.發光；灼熱"
    },
    {
      "word": "gossip",
      "pos": "n.",
      "def": "vi.閒話，聊天；八卦"
    },
    {
      "word": "governor n.【",
      "pos": "",
      "def": "美】(有時大寫)州長"
    },
    {
      "word": "gown n.(",
      "pos": "",
      "def": "婦女穿的)長禮服"
    },
    {
      "word": "grab",
      "pos": "vi., vt.",
      "def": "n.攫取，抓取"
    },
    {
      "word": "gradual",
      "pos": "a.",
      "def": "逐漸的，逐步的"
    },
    {
      "word": "graduate vt.【",
      "pos": "",
      "def": "美】准…畢業 vi.畢業 n.畢業生"
    },
    {
      "word": "grain",
      "pos": "n.",
      "def": "穀粒"
    },
    {
      "word": "gram",
      "pos": "n.",
      "def": "克"
    },
    {
      "word": "grasp",
      "pos": "vt.",
      "def": "n.抓牢；領會，理解"
    },
    {
      "word": "grasshopper",
      "pos": "n.",
      "def": "蚱蜢；蝗蟲"
    },
    {
      "word": "greenhouse",
      "pos": "n.",
      "def": "溫室，暖房"
    },
    {
      "word": "grin",
      "pos": "vi.",
      "def": "n.露齒而笑"
    },
    {
      "word": "grocery",
      "pos": "n.",
      "def": "食品雜貨(店)"
    },
    {
      "word": "guardian",
      "pos": "n.",
      "def": "保護者；【律】監護人"
    },
    {
      "word": "guidance",
      "pos": "n.",
      "def": "指導；引導"
    },
    {
      "word": "gum",
      "pos": "n.",
      "def": "口香糖 同：chewing gum"
    },
    {
      "word": "gymnasium",
      "pos": "n.",
      "def": "體育館；健身房(gym)"
    },
    {
      "word": "hairdresser",
      "pos": "n.",
      "def": "美髮師"
    },
    {
      "word": "hallway n.【",
      "pos": "",
      "def": "美】玄關；門廳，走廊"
    },
    {
      "word": "handful",
      "pos": "n.",
      "def": "一把，一握"
    },
    {
      "word": "handy a.【",
      "pos": "",
      "def": "口】手邊的；近便的"
    },
    {
      "word": "harbor",
      "pos": "n.",
      "def": "港灣，海港"
    },
    {
      "word": "harm",
      "pos": "n.",
      "def": "損傷，傷害"
    },
    {
      "word": "harmful",
      "pos": "a.",
      "def": "有害的"
    },
    {
      "word": "harvest",
      "pos": "n.",
      "def": "vt.vi.收穫"
    },
    {
      "word": "hasty",
      "pos": "a.",
      "def": "匆忙的，急忙的"
    },
    {
      "word": "hatch",
      "pos": "vt.",
      "def": "孵出"
    },
    {
      "word": "hawk",
      "pos": "n.",
      "def": "鷹，隼"
    },
    {
      "word": "hay",
      "pos": "n.",
      "def": "乾草"
    },
    {
      "word": "headline n.(",
      "pos": "",
      "def": "報紙等的)標題；頭條"
    },
    {
      "word": "headquarters n.(",
      "pos": "",
      "def": "軍，警的)司令部，總部"
    },
    {
      "word": "heal",
      "pos": "vt.",
      "def": "治癒 vi.痊癒"
    },
    {
      "word": "heap n.(",
      "pos": "",
      "def": "一)堆，堆積"
    },
    {
      "word": "heaven n.(",
      "pos": "",
      "def": "常大寫)天國；上帝"
    },
    {
      "word": "heel",
      "pos": "n.",
      "def": "腳後跟，踵"
    },
    {
      "word": "hell n.(",
      "pos": "",
      "def": "常大寫)地獄，冥府"
    },
    {
      "word": "helmet",
      "pos": "n.",
      "def": "頭盔；安全帽"
    },
    {
      "word": "hesitate",
      "pos": "vi.",
      "def": "猶豫；躊躇"
    },
    {
      "word": "hike",
      "pos": "n.",
      "def": "vi.遠足；(價格等)上升"
    },
    {
      "word": "hint",
      "pos": "n.",
      "def": "暗示"
    },
    {
      "word": "historian",
      "pos": "n.",
      "def": "歷史學家"
    },
    {
      "word": "historic",
      "pos": "a.",
      "def": "歷史上著名的； 歷史上有重大意義的"
    },
    {
      "word": "historical",
      "pos": "a.",
      "def": "歷史的，史學的"
    },
    {
      "word": "hive",
      "pos": "n.",
      "def": "蜂房；蜂巢"
    },
    {
      "word": "hollow",
      "pos": "a.",
      "def": "空的，中空的"
    },
    {
      "word": "holy",
      "pos": "a.",
      "def": "神聖的"
    },
    {
      "word": "hometown",
      "pos": "n.",
      "def": "故鄉，家鄉"
    },
    {
      "word": "honesty",
      "pos": "n.",
      "def": "誠實"
    },
    {
      "word": "honor",
      "pos": "n.",
      "def": "榮譽；(大學的)優等成績vt.尊敬"
    },
    {
      "word": "horn",
      "pos": "n.",
      "def": "角；小號，號角"
    },
    {
      "word": "horrible",
      "pos": "a.",
      "def": "可怕的；糟透的"
    },
    {
      "word": "horror",
      "pos": "n.",
      "def": "恐怖 ；令人恐怖的事物"
    },
    {
      "word": "hourly",
      "pos": "a.",
      "def": "每小時的；以鐘點計算的"
    },
    {
      "word": "housekeeper",
      "pos": "n.",
      "def": "管家；主婦"
    },
    {
      "word": "hug",
      "pos": "n.",
      "def": "vt.vi.緊抱；擁抱"
    },
    {
      "word": "humorous",
      "pos": "a.",
      "def": "幽默的，詼諧的"
    },
    {
      "word": "hush n.靜寂，沉默",
      "pos": "vt.",
      "def": "vi.使…沉默"
    },
    {
      "word": "hut n.(",
      "pos": "",
      "def": "簡陋的)小屋"
    },
    {
      "word": "icy",
      "pos": "a.",
      "def": "多冰的；冰冷的"
    },
    {
      "word": "ideal",
      "pos": "a.",
      "def": "理想的 n.理想"
    },
    {
      "word": "identity",
      "pos": "n.",
      "def": "身分；同一(性)；相同"
    },
    {
      "word": "ignorance",
      "pos": "n.",
      "def": "無知"
    },
    {
      "word": "image",
      "pos": "n.",
      "def": "形象；印象"
    },
    {
      "word": "imagination",
      "pos": "n.",
      "def": "想像力"
    },
    {
      "word": "immediate",
      "pos": "a.",
      "def": "立即的，即刻的"
    },
    {
      "word": "import n.進口，輸入",
      "pos": "vt.",
      "def": ""
    },
    {
      "word": "impress",
      "pos": "vt.",
      "def": "給…極深的印象"
    },
    {
      "word": "impressive",
      "pos": "a.",
      "def": "予人深刻印象的"
    },
    {
      "word": "indeed",
      "pos": "adv.",
      "def": "真正地，確實"
    },
    {
      "word": "individual",
      "pos": "n.",
      "def": "個人 a.個人的"
    },
    {
      "word": "indoor",
      "pos": "a.",
      "def": "室內的，戶內的"
    },
    {
      "word": "indoors",
      "pos": "adv.",
      "def": "在室內；往室內"
    },
    {
      "word": "industrial",
      "pos": "a.",
      "def": "工業的"
    },
    {
      "word": "inferior",
      "pos": "a.",
      "def": "較差的；下級的n.(地位等)低於他人者；屬下"
    },
    {
      "word": "inform",
      "pos": "vt.",
      "def": "通知，告知"
    },
    {
      "word": "injure",
      "pos": "",
      "def": "對人、動物的)傷害"
    },
    {
      "word": "injury n.(",
      "pos": "",
      "def": "對人、動物的)傷害"
    },
    {
      "word": "inn",
      "pos": "n.",
      "def": "小旅館，客棧"
    },
    {
      "word": "inner",
      "pos": "a.",
      "def": "內部的，裡面的"
    },
    {
      "word": "innocent",
      "pos": "a.",
      "def": "無罪的，清白的；天真的"
    },
    {
      "word": "inspect",
      "pos": "vt.",
      "def": "檢查；審查"
    },
    {
      "word": "inspector",
      "pos": "n.",
      "def": "檢查員；視察員"
    },
    {
      "word": "instead",
      "pos": "adv.",
      "def": "反而，卻"
    },
    {
      "word": "instruction",
      "pos": "n.",
      "def": "教學；指示；操作指南"
    },
    {
      "word": "internal",
      "pos": "a.",
      "def": "內部的；內在的；國內的"
    },
    {
      "word": "interrupt",
      "pos": "vt.",
      "def": "打斷；阻礙"
    },
    {
      "word": "introduction",
      "pos": "n.",
      "def": "介紹；引進"
    },
    {
      "word": "inventor",
      "pos": "n.",
      "def": "發明家"
    },
    {
      "word": "investigate",
      "pos": "vt.",
      "def": "調查，研究"
    },
    {
      "word": "ivory",
      "pos": "n.",
      "def": "象牙；乳白色"
    },
    {
      "word": "jail",
      "pos": "n.",
      "def": "監獄；拘留所 vt.監禁"
    },
    {
      "word": "jar",
      "pos": "n.",
      "def": "罐，罈"
    },
    {
      "word": "jaw",
      "pos": "n.",
      "def": "下巴，下頜"
    },
    {
      "word": "jealous",
      "pos": "a.",
      "def": "妒忌的"
    },
    {
      "word": "jelly",
      "pos": "n.",
      "def": "果凍"
    },
    {
      "word": "jet",
      "pos": "n.",
      "def": "噴射；噴射機"
    },
    {
      "word": "jewel",
      "pos": "n.",
      "def": "寶石"
    },
    {
      "word": "jewelry",
      "pos": "n.",
      "def": "【美】(總稱)珠寶；首飾"
    },
    {
      "word": "journal",
      "pos": "n.",
      "def": "雜誌，期刊；日記"
    },
    {
      "word": "journey",
      "pos": "n.",
      "def": "旅行 vi.旅行"
    },
    {
      "word": "joyful",
      "pos": "a.",
      "def": "高興的，充滿喜悅的"
    },
    {
      "word": "jungle",
      "pos": "n.",
      "def": "叢林，密林"
    },
    {
      "word": "junk",
      "pos": "n.",
      "def": "假貨；垃圾；廢話"
    },
    {
      "word": "justice",
      "pos": "n.",
      "def": "正義；公平；司法"
    },
    {
      "word": "kangaroo",
      "pos": "n.",
      "def": "袋鼠"
    },
    {
      "word": "kettle",
      "pos": "n.",
      "def": "水壺"
    },
    {
      "word": "keyboard",
      "pos": "n.",
      "def": "鍵盤；鍵盤樂器"
    },
    {
      "word": "kidney",
      "pos": "n.",
      "def": "腎臟"
    },
    {
      "word": "kilogram",
      "pos": "n.",
      "def": "公斤(kg)"
    },
    {
      "word": "kilometer",
      "pos": "n.",
      "def": "公里(km)"
    },
    {
      "word": "kit",
      "pos": "n.",
      "def": "成套工具；工具箱["
    },
    {
      "word": "kneel",
      "pos": "vi.",
      "def": "跪(下)"
    },
    {
      "word": "knight",
      "pos": "n.",
      "def": "騎士，武士"
    },
    {
      "word": "knit",
      "pos": "vt.",
      "def": "vi.編織"
    },
    {
      "word": "knob",
      "pos": "n.",
      "def": "球形把手；門把"
    },
    {
      "word": "knot n.(",
      "pos": "",
      "def": "繩等的)結；(樹幹的)節疤"
    },
    {
      "word": "label",
      "pos": "n.",
      "def": "貼紙；標籤vt.貼標籤於…；歸類於…"
    },
    {
      "word": "lace",
      "pos": "n.",
      "def": "鞋帶；花邊；飾帶"
    },
    {
      "word": "ladder",
      "pos": "n.",
      "def": "梯子"
    },
    {
      "word": "latter",
      "pos": "a.",
      "def": "後面的；後者的"
    },
    {
      "word": "laughter",
      "pos": "n.",
      "def": "笑；笑聲"
    },
    {
      "word": "laundry",
      "pos": "n.",
      "def": "洗衣店； 送洗的衣服；洗好的衣服"
    },
    {
      "word": "lawn",
      "pos": "n.",
      "def": "草坪，草地"
    },
    {
      "word": "leak n.漏洞，裂縫",
      "pos": "vi.",
      "def": "vt.洩漏"
    },
    {
      "word": "leap",
      "pos": "n.",
      "def": "vi.vt.跳，跳躍"
    },
    {
      "word": "leather",
      "pos": "n.",
      "def": "皮革 a.皮的"
    },
    {
      "word": "leisure",
      "pos": "n.",
      "def": "閒暇，空暇時間 a.空閒的"
    },
    {
      "word": "lengthen",
      "pos": "vt.",
      "def": "vi.加長，延長"
    },
    {
      "word": "lens",
      "pos": "n.",
      "def": "透鏡；鏡片"
    },
    {
      "word": "liar",
      "pos": "n.",
      "def": "說謊的人"
    },
    {
      "word": "liberal",
      "pos": "a.",
      "def": "開明的，公允的；自由的"
    },
    {
      "word": "liberty",
      "pos": "n.",
      "def": "自由；自由權"
    },
    {
      "word": "librarian",
      "pos": "n.",
      "def": "圖書館館長；圖書館員"
    },
    {
      "word": "lifeboat",
      "pos": "n.",
      "def": "救生艇"
    },
    {
      "word": "lifeguard",
      "pos": "n.",
      "def": "救生員"
    },
    {
      "word": "lifetime",
      "pos": "n.",
      "def": "一生，終身a.一生的，終身的"
    },
    {
      "word": "lighthouse",
      "pos": "n.",
      "def": "燈塔"
    },
    {
      "word": "limb",
      "pos": "n.",
      "def": "肢；臂；腳；翼；四肢"
    },
    {
      "word": "linen",
      "pos": "n.",
      "def": "亞麻布"
    },
    {
      "word": "lipstick",
      "pos": "n.",
      "def": "口紅"
    },
    {
      "word": "litter n.廢棄物",
      "pos": "vt.",
      "def": "vi.亂丟"
    },
    {
      "word": "lively",
      "pos": "a.",
      "def": "活潑的，輕快的"
    },
    {
      "word": "liver",
      "pos": "n.",
      "def": "肝臟"
    },
    {
      "word": "load",
      "pos": "n.",
      "def": "裝載；裝載量；負擔 vt.裝載"
    },
    {
      "word": "lobby",
      "pos": "n.",
      "def": "大廳；會客室vt.對(議員等)進行遊說"
    },
    {
      "word": "lobster",
      "pos": "n.",
      "def": "龍蝦"
    },
    {
      "word": "lollipop",
      "pos": "n.",
      "def": "棒棒糖"
    },
    {
      "word": "loose",
      "pos": "a.",
      "def": "鬆的，寬的；鬆散的"
    },
    {
      "word": "loosen",
      "pos": "vt.",
      "def": "vi.鬆開，解開"
    },
    {
      "word": "lord",
      "pos": "n.",
      "def": "統治者；君主；上帝；閣下"
    },
    {
      "word": "loudspeaker",
      "pos": "n.",
      "def": "擴聲器，喇叭"
    },
    {
      "word": "luggage",
      "pos": "n.",
      "def": "【主英】行李"
    },
    {
      "word": "lullaby",
      "pos": "n.",
      "def": "催眠曲，搖籃曲"
    },
    {
      "word": "lung",
      "pos": "n.",
      "def": "肺，肺臟"
    },
    {
      "word": "magical",
      "pos": "a.",
      "def": "魔術的，魔法的"
    },
    {
      "word": "magnet",
      "pos": "n.",
      "def": "磁鐵，磁石"
    },
    {
      "word": "maid",
      "pos": "n.",
      "def": "少女，(未婚的)年輕女子；女僕"
    },
    {
      "word": "major",
      "pos": "a.",
      "def": "較大的；較多的；主要的；主修的； 成年的；【音】大調的n.成年人；陸軍少校；主修；【音】大調vi.主修"
    },
    {
      "word": "majority",
      "pos": "n.",
      "def": "大多數，過半數"
    },
    {
      "word": "mall",
      "pos": "n.",
      "def": "購物中心"
    },
    {
      "word": "manage",
      "pos": "vt.",
      "def": "管理；經營；設法做到"
    },
    {
      "word": "management",
      "pos": "n.",
      "def": "管理；經營"
    },
    {
      "word": "manageable",
      "pos": "a.",
      "def": "易辦的；可管理的"
    },
    {
      "word": "manager",
      "pos": "n.",
      "def": "負責人；主任，經理"
    },
    {
      "word": "mankind",
      "pos": "n.",
      "def": "男人；人類"
    },
    {
      "word": "manners",
      "pos": "n.",
      "def": "禮貌；規矩"
    },
    {
      "word": "marble",
      "pos": "n.",
      "def": "大理石 ；彈珠"
    },
    {
      "word": "march",
      "pos": "n.",
      "def": "行軍；遊行抗議；進行曲 vi.(齊步)前進；行軍"
    },
    {
      "word": "marvelous",
      "pos": "a.",
      "def": "令人驚歎的；非凡的"
    },
    {
      "word": "mathematical",
      "pos": "a.",
      "def": "數學的"
    },
    {
      "word": "mathematics",
      "pos": "n.",
      "def": "數學(math)"
    },
    {
      "word": "mature a.成熟的",
      "pos": "vi.",
      "def": "vt.變成熟"
    },
    {
      "word": "mayor",
      "pos": "n.",
      "def": "市長，鎮長"
    },
    {
      "word": "meadow",
      "pos": "n.",
      "def": "草地，牧草地"
    },
    {
      "word": "meaningful",
      "pos": "a.",
      "def": "有意義的；意味深長的"
    },
    {
      "word": "meanwhile",
      "pos": "n.",
      "def": "其時adv.在此同時"
    },
    {
      "word": "medal",
      "pos": "n.",
      "def": "獎章，紀念章，勛章"
    },
    {
      "word": "medical",
      "pos": "a.",
      "def": "醫學的；醫療的"
    },
    {
      "word": "medium",
      "pos": "n.",
      "def": "中間，中庸；媒體 (複數"
    },
    {
      "word": "media",
      "pos": "n.",
      "def": "新聞媒體)"
    },
    {
      "word": "melt",
      "pos": "vt.",
      "def": "vi.融化；熔化"
    },
    {
      "word": "membership",
      "pos": "n.",
      "def": "會員身分(或地 位、資格)"
    },
    {
      "word": "memorize",
      "pos": "vt.",
      "def": "記住；背熟"
    },
    {
      "word": "mend",
      "pos": "vt.",
      "def": "修理，修補"
    },
    {
      "word": "mental",
      "pos": "a.",
      "def": "精神的，心理的"
    },
    {
      "word": "mention",
      "pos": "vt.",
      "def": "提到，說起"
    },
    {
      "word": "merchant",
      "pos": "n.",
      "def": "商人"
    },
    {
      "word": "merry",
      "pos": "a.",
      "def": "歡樂的，愉快的"
    },
    {
      "word": "mess",
      "pos": "n.",
      "def": "混亂 vt.弄亂"
    },
    {
      "word": "microphone",
      "pos": "n.",
      "def": "麥克風(mike)"
    },
    {
      "word": "microwave",
      "pos": "n.",
      "def": "微波爐vt.用微波爐熱(食物)"
    },
    {
      "word": "might",
      "pos": "aux.",
      "def": "(may 的過去式)可能；可以"
    },
    {
      "word": "mighty",
      "pos": "a.",
      "def": "強大的；強有力的"
    },
    {
      "word": "mill",
      "pos": "n.",
      "def": "磨坊；麵粉廠"
    },
    {
      "word": "millionaire",
      "pos": "n.",
      "def": "百萬富翁"
    },
    {
      "word": "miner",
      "pos": "n.",
      "def": "礦工"
    },
    {
      "word": "minor",
      "pos": "a.",
      "def": "較小的；較少的；次要的；未成年的； (大學學科)副修的；【音】小調的 n.未成年人；副修科目 vi.【主美】副 修，兼修"
    },
    {
      "word": "minority",
      "pos": "n.",
      "def": "少數；少數民族； 未成年身分"
    },
    {
      "word": "miracle",
      "pos": "n.",
      "def": "奇蹟；奇蹟般的人(或物)"
    },
    {
      "word": "misery",
      "pos": "n.",
      "def": "不幸；悲"
    },
    {
      "word": "missile",
      "pos": "n.",
      "def": "飛彈，導彈"
    },
    {
      "word": "missing",
      "pos": "a.",
      "def": "失蹤的，行蹤不明的"
    },
    {
      "word": "mission",
      "pos": "n.",
      "def": "使命，任務"
    },
    {
      "word": "mist",
      "pos": "n.",
      "def": "薄霧"
    },
    {
      "word": "mixture",
      "pos": "n.",
      "def": "混合，混合物"
    },
    {
      "word": "mob",
      "pos": "n.",
      "def": "暴民"
    },
    {
      "word": "mobile",
      "pos": "a.",
      "def": "可動的，移動式的"
    },
    {
      "word": "moist",
      "pos": "a.",
      "def": "潮濕的；含淚的"
    },
    {
      "word": "moisture",
      "pos": "n.",
      "def": "濕氣；水分"
    },
    {
      "word": "monk",
      "pos": "n.",
      "def": "和尚；僧侶；修道士"
    },
    {
      "word": "mood",
      "pos": "n.",
      "def": "心情，心境"
    },
    {
      "word": "mop n.拖把",
      "pos": "vt.",
      "def": "vi.用拖把拖洗"
    },
    {
      "word": "moral",
      "pos": "a.",
      "def": "道德(上)的"
    },
    {
      "word": "motel",
      "pos": "n.",
      "def": "汽車旅館"
    },
    {
      "word": "motor",
      "pos": "n.",
      "def": "馬達，發動機"
    },
    {
      "word": "murder n.謀殺；謀殺罪",
      "pos": "vt.",
      "def": "vi.謀殺"
    },
    {
      "word": "muscle",
      "pos": "n.",
      "def": "肌肉"
    },
    {
      "word": "mushroom",
      "pos": "n.",
      "def": "蘑菇vi.雨後春筍般地湧現"
    },
    {
      "word": "musical",
      "pos": "a.",
      "def": "音樂的"
    },
    {
      "word": "mystery",
      "pos": "n.",
      "def": "神祕 ；神祕的事物"
    },
    {
      "word": "nanny n.【",
      "pos": "",
      "def": "主英】保姆"
    },
    {
      "word": "nap",
      "pos": "n.",
      "def": "打盹兒，午睡"
    },
    {
      "word": "native",
      "pos": "a.",
      "def": "天生的；祖國的；土著的n.本地人，本國人"
    },
    {
      "word": "navy",
      "pos": "n.",
      "def": "海軍"
    },
    {
      "word": "necessity",
      "pos": "n.",
      "def": "需要，必要性 ； 必需品"
    },
    {
      "word": "necktie",
      "pos": "n.",
      "def": "領帶"
    },
    {
      "word": "neighborhood",
      "pos": "n.",
      "def": "鄰近地區"
    },
    {
      "word": "nerve",
      "pos": "n.",
      "def": "神經"
    },
    {
      "word": "nervous",
      "pos": "a.",
      "def": "神經質的；緊張不安的"
    },
    {
      "word": "network",
      "pos": "n.",
      "def": "廣播(電視)網；電腦網路"
    },
    {
      "word": "nickname",
      "pos": "n.",
      "def": "綽號 vt.給…起綽號"
    },
    {
      "word": "noble",
      "pos": "a.",
      "def": "高貴的，高尚的"
    },
    {
      "word": "normal",
      "pos": "a.",
      "def": "正常的，正規的"
    },
    {
      "word": "novelist",
      "pos": "n.",
      "def": "小說家"
    },
    {
      "word": "nun",
      "pos": "n.",
      "def": "尼姑；修女"
    },
    {
      "word": "oak",
      "pos": "n.",
      "def": "橡樹 ；橡木"
    },
    {
      "word": "observe",
      "pos": "vt.",
      "def": "vi.觀察；看(注意)到"
    },
    {
      "word": "obvious",
      "pos": "a.",
      "def": "明顯的；顯著的"
    },
    {
      "word": "occasion",
      "pos": "n.",
      "def": "場合，時機"
    },
    {
      "word": "odd",
      "pos": "a.",
      "def": "奇特的，古怪的；奇數的"
    },
    {
      "word": "onto",
      "pos": "prep.",
      "def": "到...之上"
    },
    {
      "word": "operator",
      "pos": "n.",
      "def": "操作者；接線生"
    },
    {
      "word": "opportunity",
      "pos": "n.",
      "def": "機會"
    },
    {
      "word": "opposite",
      "pos": "n.",
      "def": "對立(相反)物 a.相反的prep.在…對面"
    },
    {
      "word": "optimistic",
      "pos": "a.",
      "def": "樂觀的"
    },
    {
      "word": "origin",
      "pos": "n.",
      "def": "起源；開端；出身"
    },
    {
      "word": "original",
      "pos": "a.",
      "def": "最初的，原始的；有獨創性的"
    },
    {
      "word": "orphan",
      "pos": "n.",
      "def": "孤兒"
    },
    {
      "word": "ought to aux.(",
      "pos": "",
      "def": "表示義務，責任，願望 等)應當，應該"
    },
    {
      "word": "outdoor",
      "pos": "a.",
      "def": "戶外的，露天的"
    },
    {
      "word": "outdoors",
      "pos": "adv.",
      "def": "在戶外，在野外"
    },
    {
      "word": "outer",
      "pos": "a.",
      "def": "外面的，外表的"
    },
    {
      "word": "outline",
      "pos": "n.",
      "def": "外形；輪廓；概要 vt.畫出…的輪廓"
    },
    {
      "word": "overcoat",
      "pos": "n.",
      "def": "外套，大衣"
    },
    {
      "word": "owe",
      "pos": "vt.",
      "def": "欠(債等)；把...歸功於"
    },
    {
      "word": "ownership",
      "pos": "n.",
      "def": "所有權；物主身分"
    },
    {
      "word": "pad",
      "pos": "n.",
      "def": "襯墊；護墊；便條紙簿；印泥"
    },
    {
      "word": "pail",
      "pos": "n.",
      "def": "提桶"
    },
    {
      "word": "pal n.【",
      "pos": "",
      "def": "口】伙伴；好友"
    },
    {
      "word": "palace",
      "pos": "n.",
      "def": "皇宮，宮殿"
    },
    {
      "word": "pale",
      "pos": "a.",
      "def": "蒼白的，灰白的"
    },
    {
      "word": "pancake",
      "pos": "n.",
      "def": "薄煎餅，薄烤餅"
    },
    {
      "word": "panic",
      "pos": "n.",
      "def": "恐慌，驚慌"
    },
    {
      "word": "parade",
      "pos": "n.",
      "def": "vi.行進，遊行"
    },
    {
      "word": "paradise",
      "pos": "n.",
      "def": "天堂；樂園"
    },
    {
      "word": "parcel",
      "pos": "n.",
      "def": "小包，包裹"
    },
    {
      "word": "participate",
      "pos": "vi.",
      "def": "參加，參與"
    },
    {
      "word": "passage",
      "pos": "n.",
      "def": "通行；通路；走廊； (文章，樂曲等的)一段"
    },
    {
      "word": "passion",
      "pos": "n.",
      "def": "熱情，激情"
    },
    {
      "word": "passport",
      "pos": "n.",
      "def": "護照；通行證"
    },
    {
      "word": "password",
      "pos": "n.",
      "def": "密碼：口令；暗語"
    },
    {
      "word": "patience",
      "pos": "n.",
      "def": "耐心；忍耐；耐性"
    },
    {
      "word": "pause",
      "pos": "n.",
      "def": "vi.暫停；中斷"
    },
    {
      "word": "pave",
      "pos": "vt.",
      "def": "鋪設，築(路等)"
    },
    {
      "word": "pavement n.【",
      "pos": "",
      "def": "英】人行道["
    },
    {
      "word": "paw",
      "pos": "n.",
      "def": "腳爪；爪子"
    },
    {
      "word": "pay",
      "pos": "n.",
      "def": "薪俸；報酬 (salary/wage(s))"
    },
    {
      "word": "pea",
      "pos": "n.",
      "def": "豌豆"
    },
    {
      "word": "peak",
      "pos": "n.",
      "def": "山頂，山峰"
    },
    {
      "word": "pearl",
      "pos": "n.",
      "def": "珍珠"
    },
    {
      "word": "peel",
      "pos": "vt.",
      "def": "削去…的皮，剝去…的殼"
    },
    {
      "word": "peep",
      "pos": "vi.",
      "def": "n.窺，偷看"
    },
    {
      "word": "penny n.【",
      "pos": "",
      "def": "美】一分；一分硬幣["
    },
    {
      "word": "perform",
      "pos": "vt.",
      "def": "vi.表演；執行"
    },
    {
      "word": "performance",
      "pos": "n.",
      "def": "表演；執行"
    },
    {
      "word": "permission",
      "pos": "n.",
      "def": "允許，許可"
    },
    {
      "word": "permit",
      "pos": "vt.",
      "def": "允許，許可 n.許可證"
    },
    {
      "word": "personality",
      "pos": "n.",
      "def": "個性；人格"
    },
    {
      "word": "persuade",
      "pos": "vt.",
      "def": "說服，勸服"
    },
    {
      "word": "pest",
      "pos": "n.",
      "def": "害蟲；【口】討厭的人"
    },
    {
      "word": "pickle",
      "pos": "vt.",
      "def": "醃製 n.(醃魚，蔬菜等的)鹽滷"
    },
    {
      "word": "pill",
      "pos": "n.",
      "def": "藥丸，藥片"
    },
    {
      "word": "pilot",
      "pos": "n.",
      "def": "領航員；(飛機等的)駕駛員"
    },
    {
      "word": "pine",
      "pos": "n.",
      "def": "松樹 ；松木"
    },
    {
      "word": "pint",
      "pos": "n.",
      "def": "品脫(英美容量或液量名)"
    },
    {
      "word": "pit",
      "pos": "n.",
      "def": "窪坑，凹處"
    },
    {
      "word": "pity",
      "pos": "n.",
      "def": "憐憫；同情 ；可惜的事，憾事 vt.同情…"
    },
    {
      "word": "plastic",
      "pos": "a.",
      "def": "塑膠的；塑性的"
    },
    {
      "word": "plenty",
      "pos": "n.",
      "def": "豐富；充足"
    },
    {
      "word": "plug",
      "pos": "n.",
      "def": "插頭，插塞 vt.把...塞住，堵塞"
    },
    {
      "word": "plum",
      "pos": "n.",
      "def": "李子；梅子"
    },
    {
      "word": "plumber",
      "pos": "n.",
      "def": "水管工人"
    },
    {
      "word": "pole",
      "pos": "n.",
      "def": "柱；竿"
    },
    {
      "word": "political",
      "pos": "a.",
      "def": "政治的"
    },
    {
      "word": "politician",
      "pos": "n.",
      "def": "政治家；政客"
    },
    {
      "word": "politics",
      "pos": "n.",
      "def": "政治(學)"
    },
    {
      "word": "poll",
      "pos": "n.",
      "def": "投票，選舉；民意測驗"
    },
    {
      "word": "pollute",
      "pos": "vt.",
      "def": "汙染"
    },
    {
      "word": "pony",
      "pos": "n.",
      "def": "小馬"
    },
    {
      "word": "pop",
      "pos": "vt.",
      "def": "爆裂 vi.發出砰(或啪)的響聲 (2) a.通俗的，流行的 (popular)"
    },
    {
      "word": "porcelain",
      "pos": "n.",
      "def": "瓷；(總稱)瓷器 (china)"
    },
    {
      "word": "portion",
      "pos": "n.",
      "def": "部分"
    },
    {
      "word": "portrait",
      "pos": "n.",
      "def": "肖像，畫像"
    },
    {
      "word": "postage",
      "pos": "n.",
      "def": "郵資"
    },
    {
      "word": "poster",
      "pos": "n.",
      "def": "海報，廣告(畫)；布告"
    },
    {
      "word": "postpone",
      "pos": "vt.",
      "def": "vi.延遲，延緩"
    },
    {
      "word": "postponement",
      "pos": "n.",
      "def": "延期；延緩"
    },
    {
      "word": "pottery",
      "pos": "n.",
      "def": "陶器 (ceramic(s))"
    },
    {
      "word": "pour",
      "pos": "vt.",
      "def": "倒，灌，注"
    },
    {
      "word": "poverty",
      "pos": "n.",
      "def": "貧窮，貧困"
    },
    {
      "word": "powder",
      "pos": "n.",
      "def": "粉，粉末"
    },
    {
      "word": "practical",
      "pos": "a.",
      "def": "實際的；實用的"
    },
    {
      "word": "prayer",
      "pos": "n.",
      "def": "祈禱，禱告"
    },
    {
      "word": "precious",
      "pos": "a.",
      "def": "貴重的，珍貴的"
    },
    {
      "word": "preparation",
      "pos": "n.",
      "def": "準備，預備"
    },
    {
      "word": "pressure",
      "pos": "n.",
      "def": "壓力；壓迫"
    },
    {
      "word": "pretend",
      "pos": "vt.",
      "def": "假裝"
    },
    {
      "word": "prevent",
      "pos": "vt.",
      "def": "防止，預防"
    },
    {
      "word": "previous",
      "pos": "a.",
      "def": "以前的"
    },
    {
      "word": "priest",
      "pos": "n.",
      "def": "牧師；神父"
    },
    {
      "word": "primary",
      "pos": "a.",
      "def": "首要的，主要的"
    },
    {
      "word": "probable",
      "pos": "a.",
      "def": "很可能發生的"
    },
    {
      "word": "process",
      "pos": "n.",
      "def": "過程，進程 vt.加工"
    },
    {
      "word": "product",
      "pos": "n.",
      "def": "產品"
    },
    {
      "word": "profit n.利潤，盈利",
      "pos": "vi.",
      "def": "vt.有益(於…)"
    },
    {
      "word": "program",
      "pos": "n.",
      "def": "節目；計畫；【電腦】程式"
    },
    {
      "word": "promote",
      "pos": "vt.",
      "def": "晉升；宣傳，推銷"
    },
    {
      "word": "proof",
      "pos": "n.",
      "def": "證據；物證"
    },
    {
      "word": "proper",
      "pos": "a.",
      "def": "適合的，適當的"
    },
    {
      "word": "property",
      "pos": "n.",
      "def": "財產，資產 ； 特性 ；道具"
    },
    {
      "word": "proposal",
      "pos": "n.",
      "def": "提議；求婚"
    },
    {
      "word": "protection",
      "pos": "n.",
      "def": "保護，防護"
    },
    {
      "word": "protective",
      "pos": "a.",
      "def": "保護的，防護的"
    },
    {
      "word": "pub",
      "pos": "n.",
      "def": "酒吧"
    },
    {
      "word": "punch n.拳打",
      "pos": "vi.",
      "def": "vt.用拳猛擊"
    },
    {
      "word": "pure",
      "pos": "a.",
      "def": "純粹的，不攙雜的；純潔的"
    },
    {
      "word": "pursue",
      "pos": "vt.",
      "def": "追趕；追求"
    },
    {
      "word": "quarrel",
      "pos": "n.",
      "def": "vi.爭吵"
    },
    {
      "word": "queer",
      "pos": "a.",
      "def": "奇怪的，古怪的"
    },
    {
      "word": "quote",
      "pos": "vt.",
      "def": "vi.引用；引述 n.引語，引文"
    },
    {
      "word": "racial",
      "pos": "a.",
      "def": "人種的，種族的"
    },
    {
      "word": "radar",
      "pos": "n.",
      "def": "雷達"
    },
    {
      "word": "rag",
      "pos": "n.",
      "def": "破布，碎布"
    },
    {
      "word": "raisin",
      "pos": "n.",
      "def": "葡萄乾"
    },
    {
      "word": "rank n.等級；地位",
      "pos": "vi.",
      "def": "vt.把…評級"
    },
    {
      "word": "rate",
      "pos": "n.",
      "def": "比例；速度；等級vt.對…估價；對…評價"
    },
    {
      "word": "raw",
      "pos": "a.",
      "def": "生的，未煮過的"
    },
    {
      "word": "ray",
      "pos": "n.",
      "def": "光線 ；射線"
    },
    {
      "word": "razor",
      "pos": "n.",
      "def": "剃刀"
    },
    {
      "word": "react",
      "pos": "vi.",
      "def": "反應"
    },
    {
      "word": "reaction",
      "pos": "n.",
      "def": "反應"
    },
    {
      "word": "reasonable",
      "pos": "a.",
      "def": "合理的；有理智的"
    },
    {
      "word": "receipt",
      "pos": "n.",
      "def": "收據"
    },
    {
      "word": "receiver",
      "pos": "n.",
      "def": "收件人；接待人；電話聽筒"
    },
    {
      "word": "recognize",
      "pos": "vt.",
      "def": "認出；識別；承認"
    },
    {
      "word": "recorder",
      "pos": "n.",
      "def": "記錄者；錄音機；直笛"
    },
    {
      "word": "recover",
      "pos": "vt.",
      "def": "重新獲得；恢復 vi.恢復"
    },
    {
      "word": "reduce",
      "pos": "vt.",
      "def": "vi.減少；縮小；降低"
    },
    {
      "word": "regional",
      "pos": "a.",
      "def": "地區的"
    },
    {
      "word": "regret",
      "pos": "vi., vt.",
      "def": "n.懊悔；因…而遺憾"
    },
    {
      "word": "relate",
      "pos": "vt.",
      "def": "講，敘述；使有聯繫"
    },
    {
      "word": "relax",
      "pos": "vt.",
      "def": "vi.鬆弛，鬆懈，放鬆"
    },
    {
      "word": "release",
      "pos": "vt.",
      "def": "n.釋放，鬆開"
    },
    {
      "word": "reliable",
      "pos": "a.",
      "def": "可信賴的；可靠的"
    },
    {
      "word": "relief",
      "pos": "n.",
      "def": "緩和，減輕；救濟；補助"
    },
    {
      "word": "religion",
      "pos": "n.",
      "def": "宗教"
    },
    {
      "word": "religious",
      "pos": "a.",
      "def": "宗教的；虔誠的"
    },
    {
      "word": "rely",
      "pos": "vi.",
      "def": "依靠，依賴"
    },
    {
      "word": "remain",
      "pos": "vi.",
      "def": "剩下；保持…"
    },
    {
      "word": "remind",
      "pos": "vt.",
      "def": "提醒"
    },
    {
      "word": "remote",
      "pos": "a.",
      "def": "遙遠的；偏僻的"
    },
    {
      "word": "remove",
      "pos": "vt.",
      "def": "vi.移動，搬開；去掉，消除"
    },
    {
      "word": "renew",
      "pos": "vt.",
      "def": "vi.更新；復原"
    },
    {
      "word": "rent n.租金",
      "pos": "vt.",
      "def": "vi.出租"
    },
    {
      "word": "repair",
      "pos": "vt.",
      "def": "n.修理；修補"
    },
    {
      "word": "replace",
      "pos": "vt.",
      "def": "取代"
    },
    {
      "word": "replacement",
      "pos": "n.",
      "def": "取代"
    },
    {
      "word": "represent",
      "pos": "vt.",
      "def": "象徵；代表"
    },
    {
      "word": "representative",
      "pos": "n.",
      "def": "典型，代表物"
    },
    {
      "word": "republic",
      "pos": "n.",
      "def": "共和國"
    },
    {
      "word": "request",
      "pos": "n.",
      "def": "vt.要求，請求"
    },
    {
      "word": "reserve",
      "pos": "vt.",
      "def": "預約，預訂；保留 n.儲備(物)；儲備金；保留(物)"
    },
    {
      "word": "resist",
      "pos": "vt.",
      "def": "vi.抵抗，反抗"
    },
    {
      "word": "resource",
      "pos": "n.",
      "def": "資源；物力"
    },
    {
      "word": "respond",
      "pos": "vt.",
      "def": "vi.作答，回答"
    },
    {
      "word": "response",
      "pos": "n.",
      "def": "回答；答覆"
    },
    {
      "word": "responsibility",
      "pos": "n.",
      "def": "責任"
    },
    {
      "word": "restrict",
      "pos": "vt.",
      "def": "限制；限定"
    },
    {
      "word": "reveal",
      "pos": "vt.",
      "def": "vi.展現；暴露；洩露"
    },
    {
      "word": "ribbon",
      "pos": "n.",
      "def": "緞帶；絲帶"
    },
    {
      "word": "rid",
      "pos": "vt.",
      "def": "使免除；使擺脫"
    },
    {
      "word": "riddle",
      "pos": "n.",
      "def": "謎，謎語"
    },
    {
      "word": "ripe",
      "pos": "a.",
      "def": "成熟的"
    },
    {
      "word": "risk",
      "pos": "n.",
      "def": "危險，風險 vt.冒…的風險"
    },
    {
      "word": "roar",
      "pos": "n.",
      "def": "vt.vi.吼叫"
    },
    {
      "word": "roast",
      "pos": "n.",
      "def": "vt.vi.烤，炙，烘"
    },
    {
      "word": "rob",
      "pos": "vt.",
      "def": "vi.搶劫，劫掠"
    },
    {
      "word": "robber",
      "pos": "n.",
      "def": "搶劫者，強盜"
    },
    {
      "word": "robbery",
      "pos": "n.",
      "def": "搶劫；盜取"
    },
    {
      "word": "robe",
      "pos": "n.",
      "def": "長袍，罩袍；浴衣"
    },
    {
      "word": "rocket",
      "pos": "n.",
      "def": "火箭，飛彈"
    },
    {
      "word": "romantic",
      "pos": "a.",
      "def": "羅曼蒂克的；浪漫的"
    },
    {
      "word": "rot",
      "pos": "vt.",
      "def": "vi.腐爛，腐壞"
    },
    {
      "word": "rotten",
      "pos": "a.",
      "def": "腐爛的"
    },
    {
      "word": "rough",
      "pos": "a.",
      "def": "粗糙的；粗略的；粗野的"
    },
    {
      "word": "routine",
      "pos": "n.",
      "def": "例行公事；日常工作；慣例"
    },
    {
      "word": "rug",
      "pos": "n.",
      "def": "小地毯"
    },
    {
      "word": "rumor",
      "pos": "n.",
      "def": "謠言，謠傳"
    },
    {
      "word": "rust n.鏽，鐵鏽",
      "pos": "vt.",
      "def": "vi.生鏽"
    },
    {
      "word": "rusty",
      "pos": "a.",
      "def": "生鏽的；變遲鈍的"
    },
    {
      "word": "sack",
      "pos": "n.",
      "def": "粗布袋；麻袋"
    },
    {
      "word": "sake",
      "pos": "n.",
      "def": "理由；緣故"
    },
    {
      "word": "satisfactory",
      "pos": "a.",
      "def": "令人滿意的"
    },
    {
      "word": "saucer",
      "pos": "n.",
      "def": "淺碟"
    },
    {
      "word": "sausage",
      "pos": "n.",
      "def": "香腸，臘腸"
    },
    {
      "word": "savings",
      "pos": "n.",
      "def": "儲金，存款"
    },
    {
      "word": "scale",
      "pos": "n.",
      "def": "刻度；尺度；大小；規模"
    },
    {
      "word": "scarce",
      "pos": "a.",
      "def": "缺乏的；不足的"
    },
    {
      "word": "scarecrow",
      "pos": "n.",
      "def": "稻草人"
    },
    {
      "word": "scarf",
      "pos": "n.",
      "def": "圍巾；披巾"
    },
    {
      "word": "scary",
      "pos": "a.",
      "def": "可怕的﹐駭人的"
    },
    {
      "word": "scatter",
      "pos": "n.",
      "def": "vt.vi.撒；使分散"
    },
    {
      "word": "schedule",
      "pos": "n.",
      "def": "時間表；課程表"
    },
    {
      "word": "scholar",
      "pos": "n.",
      "def": "學者"
    },
    {
      "word": "scholarship",
      "pos": "n.",
      "def": "獎學金"
    },
    {
      "word": "scientific",
      "pos": "a.",
      "def": "科學的"
    },
    {
      "word": "scoop",
      "pos": "n.",
      "def": "勺子；舀；鏟 vt.用勺舀，用鏟子鏟"
    },
    {
      "word": "scout",
      "pos": "n.",
      "def": "偵察兵；偵察機；童子軍； 球探，星探"
    },
    {
      "word": "scream",
      "pos": "n.",
      "def": "vt.vi.尖叫"
    },
    {
      "word": "screw n.螺釘",
      "pos": "vt.",
      "def": "vi.旋，擰"
    },
    {
      "word": "scrub",
      "pos": "vt.",
      "def": "vi.用力擦洗"
    },
    {
      "word": "seal",
      "pos": "n.",
      "def": "海豹 (2) n.印章；封(印) vt.封，密封；蓋章"
    },
    {
      "word": "secondary",
      "pos": "a.",
      "def": "第二的；次要的； (教育、學校等)中等的"
    },
    {
      "word": "security",
      "pos": "n.",
      "def": "安全；保安；證券"
    },
    {
      "word": "seek",
      "pos": "vt.",
      "def": "vi.尋找；探索"
    },
    {
      "word": "seize",
      "pos": "vt.",
      "def": "vi.抓住；捉住"
    },
    {
      "word": "seldom",
      "pos": "adv.",
      "def": "不常，很少"
    },
    {
      "word": "sensible",
      "pos": "a.",
      "def": "明智的；可注意到的，"
    },
    {
      "word": "sensitive",
      "pos": "a.",
      "def": "敏感的；靈敏的"
    },
    {
      "word": "separation",
      "pos": "n.",
      "def": "分開；分離；分居"
    },
    {
      "word": "sew",
      "pos": "vt.",
      "def": "vi.縫合；縫上"
    },
    {
      "word": "sex",
      "pos": "n.",
      "def": "性別；性，色情；性行為"
    },
    {
      "word": "sexual",
      "pos": "a.",
      "def": "性的；性慾的"
    },
    {
      "word": "sexy",
      "pos": "a.",
      "def": "性感的"
    },
    {
      "word": "shade",
      "pos": "n.",
      "def": "蔭；陰涼處"
    },
    {
      "word": "shadow",
      "pos": "n.",
      "def": "影子；陰影；幽靈"
    },
    {
      "word": "shady",
      "pos": "a.",
      "def": "多蔭的"
    },
    {
      "word": "shallow",
      "pos": "a.",
      "def": "淺的膚淺的"
    },
    {
      "word": "shame",
      "pos": "n.",
      "def": "羞恥(心)；恥辱； 帶來恥辱的人(或事)；憾事"
    },
    {
      "word": "shampoo",
      "pos": "n.",
      "def": "洗髮精"
    },
    {
      "word": "shave",
      "pos": "vt.",
      "def": "vi.刮(鬍)；剃…毛"
    },
    {
      "word": "shepherd",
      "pos": "n.",
      "def": "牧羊人"
    },
    {
      "word": "shiny",
      "pos": "a.",
      "def": "發光的；晴朗的；擦亮的"
    },
    {
      "word": "shorten",
      "pos": "vt.",
      "def": "vi.變短；縮短"
    },
    {
      "word": "shortly",
      "pos": "adv.",
      "def": "立刻，馬上，不久"
    },
    {
      "word": "shovel",
      "pos": "n.",
      "def": "鏟子，鐵鍬vt.用鏟鏟(起)；用鐵鍬挖"
    },
    {
      "word": "shrink",
      "pos": "vt.",
      "def": "vi.收縮，縮短；縮水"
    },
    {
      "word": "sigh",
      "pos": "n.",
      "def": "vi.vt.嘆氣，嘆息"
    },
    {
      "word": "signal",
      "pos": "n.",
      "def": "信號；暗號"
    },
    {
      "word": "significant",
      "pos": "a.",
      "def": "有意義的；重要的"
    },
    {
      "word": "similarity",
      "pos": "n.",
      "def": "相似 ；相似點"
    },
    {
      "word": "sin n.(",
      "pos": "",
      "def": "宗教或道德上的)罪"
    },
    {
      "word": "sincere",
      "pos": "a.",
      "def": "衷心的，真誠的"
    },
    {
      "word": "sip",
      "pos": "n.",
      "def": "vi.vt.啜飲"
    },
    {
      "word": "situation",
      "pos": "n.",
      "def": "形勢；情況"
    },
    {
      "word": "skate",
      "pos": "n.",
      "def": "冰鞋 vi.溜冰"
    },
    {
      "word": "ski n.滑雪屐；滑雪板",
      "pos": "vt.",
      "def": "vi.滑雪"
    },
    {
      "word": "skip",
      "pos": "vt.",
      "def": "vi.跳躍；跳繩；略過；漏掉"
    },
    {
      "word": "skyscraper",
      "pos": "n.",
      "def": "摩天樓"
    },
    {
      "word": "slave",
      "pos": "n.",
      "def": "奴隸"
    },
    {
      "word": "sleeve",
      "pos": "n.",
      "def": "袖子；袖套"
    },
    {
      "word": "slice",
      "pos": "n.",
      "def": "薄片，切片 vt.把…切成薄片"
    },
    {
      "word": "slippery",
      "pos": "a.",
      "def": "滑的；容易滑的"
    },
    {
      "word": "slope",
      "pos": "n.",
      "def": "斜坡；傾斜；坡度"
    },
    {
      "word": "smooth",
      "pos": "a.",
      "def": "平滑的，光滑的；流暢的"
    },
    {
      "word": "snap",
      "pos": "n.",
      "def": "vi.vt.猛咬；突然折斷； 快照拍攝"
    },
    {
      "word": "solid",
      "pos": "a.",
      "def": "固體的；結實的 n.固體"
    },
    {
      "word": "someday",
      "pos": "adv.",
      "def": "將來有一天"
    },
    {
      "word": "somehow",
      "pos": "adv.",
      "def": "以某種方式；不知怎麼的"
    },
    {
      "word": "sometime",
      "pos": "adv.",
      "def": "在(將來或過去) 某一時候"
    },
    {
      "word": "somewhat",
      "pos": "adv.",
      "def": "有點，稍微"
    },
    {
      "word": "sore",
      "pos": "a.",
      "def": "痛的；疼痛發炎的"
    },
    {
      "word": "sorrow",
      "pos": "n.",
      "def": "悲痛，悲哀"
    },
    {
      "word": "spade",
      "pos": "n.",
      "def": "鏟；鍬；(撲克牌中的)黑桃"
    },
    {
      "word": "spaghetti",
      "pos": "n.",
      "def": "義大利麵條"
    },
    {
      "word": "specific",
      "pos": "a.",
      "def": "特殊的，特定的；明確的"
    },
    {
      "word": "spice",
      "pos": "n.",
      "def": "香料，調味品"
    },
    {
      "word": "spill",
      "pos": "vi., vt.",
      "def": "n.溢出；濺出"
    },
    {
      "word": "spin",
      "pos": "n.",
      "def": "vi.vt.紡；作(繭)，結(網)； 使(陀螺等)旋轉"
    },
    {
      "word": "spit",
      "pos": "vi.",
      "def": "vi.吐口水；吐痰 n.唾液，口水"
    },
    {
      "word": "spite",
      "pos": "n.",
      "def": "惡意；怨恨"
    },
    {
      "word": "splash",
      "pos": "n.",
      "def": "vi.vt.濺，潑"
    },
    {
      "word": "spoil",
      "pos": "vt.",
      "def": "損壞；寵壞，溺愛 vi.(食物等)變壞"
    },
    {
      "word": "sprain",
      "pos": "n.",
      "def": "vt.扭傷"
    },
    {
      "word": "spray n.浪花，水花；噴霧",
      "pos": "vt.",
      "def": "vi.噴灑"
    },
    {
      "word": "sprinkle",
      "pos": "vt.",
      "def": "vi.灑，噴淋"
    },
    {
      "word": "spy n.間諜",
      "pos": "vi.",
      "def": "vt.暗中監視"
    },
    {
      "word": "squeeze",
      "pos": "vt.",
      "def": "vi.榨，擠，壓"
    },
    {
      "word": "stab",
      "pos": "vi., vt.",
      "def": "n.刺，戳"
    },
    {
      "word": "stable",
      "pos": "n.",
      "def": "馬棚；畜舍"
    },
    {
      "word": "stadium",
      "pos": "n.",
      "def": "體育場，運動場"
    },
    {
      "word": "staff n.(",
      "pos": "",
      "def": "全體)職員，(全體)工作人員"
    },
    {
      "word": "stale",
      "pos": "a.",
      "def": "不新鮮的；陳舊的，無新意的"
    },
    {
      "word": "stare",
      "pos": "n.",
      "def": "vi.盯，凝視"
    },
    {
      "word": "starve",
      "pos": "vt.",
      "def": "vi.餓死；挨餓"
    },
    {
      "word": "statue",
      "pos": "n.",
      "def": "雕像，塑像"
    },
    {
      "word": "steady",
      "pos": "a.",
      "def": "穩固的，平穩的"
    },
    {
      "word": "steep",
      "pos": "a.",
      "def": "陡峭的"
    },
    {
      "word": "stepchild",
      "pos": "n.",
      "def": "前配偶所生的孩子"
    },
    {
      "word": "stepfather",
      "pos": "n.",
      "def": "繼父，後父"
    },
    {
      "word": "stepmother",
      "pos": "n.",
      "def": "繼母，後母"
    },
    {
      "word": "stereo",
      "pos": "n.",
      "def": "立體音響裝置 a.立體聲的"
    },
    {
      "word": "sticky",
      "pos": "a.",
      "def": "黏的"
    },
    {
      "word": "stiff a.(",
      "pos": "",
      "def": "手足等)僵直的，僵硬的"
    },
    {
      "word": "sting",
      "pos": "n.",
      "def": "vt.vi.刺，螫，叮"
    },
    {
      "word": "stir",
      "pos": "vt.",
      "def": "vi.攪拌，攪動；煽動"
    },
    {
      "word": "stitch",
      "pos": "n.",
      "def": "一針；針腳；(縫合傷口的)針線"
    },
    {
      "word": "stocking(s)",
      "pos": "n.",
      "def": "長襪"
    },
    {
      "word": "stool",
      "pos": "n.",
      "def": "凳子"
    },
    {
      "word": "stormy",
      "pos": "a.",
      "def": "暴風雨的；暴躁的"
    },
    {
      "word": "strategy",
      "pos": "n.",
      "def": "戰略；策略"
    },
    {
      "word": "strength",
      "pos": "n.",
      "def": "力，力量"
    },
    {
      "word": "strip1",
      "pos": "",
      "def": ""
    },
    {
      "word": "strip2",
      "pos": "n.",
      "def": "條，帶；(報紙等)連環漫畫"
    },
    {
      "word": "structure",
      "pos": "n.",
      "def": "結構；構造"
    },
    {
      "word": "stubborn",
      "pos": "a.",
      "def": "固執的，頑固的"
    },
    {
      "word": "studio n.(",
      "pos": "",
      "def": "畫家等的)工作室； 攝影棚；製片廠"
    },
    {
      "word": "stuff",
      "pos": "n.",
      "def": "物品，東東【口】(2) n.填充物 vt.裝；填；塞"
    },
    {
      "word": "style",
      "pos": "n.",
      "def": "風格，作風；種類，型"
    },
    {
      "word": "substance",
      "pos": "n.",
      "def": "物質"
    },
    {
      "word": "suburb",
      "pos": "n.",
      "def": "郊區"
    },
    {
      "word": "suck",
      "pos": "vt.",
      "def": "吸，吮 vi.吸，吮；【俚】爛；令人討厭"
    },
    {
      "word": "suffer",
      "pos": "vt.",
      "def": "遭受 vi.受苦；患病"
    },
    {
      "word": "sufficient",
      "pos": "a.",
      "def": "足夠的，充分的"
    },
    {
      "word": "suggest",
      "pos": "vt.",
      "def": "建議；暗示"
    },
    {
      "word": "suicide",
      "pos": "n.",
      "def": "vt.vi.自殺"
    },
    {
      "word": "suitable",
      "pos": "a.",
      "def": "適當的；合適的"
    },
    {
      "word": "sum",
      "pos": "n.",
      "def": "總數，總和；概要 vt.合計；總結"
    },
    {
      "word": "summary",
      "pos": "n.",
      "def": "總結，摘要"
    },
    {
      "word": "summit n.(",
      "pos": "",
      "def": "山等)尖峰，峰頂"
    },
    {
      "word": "superior",
      "pos": "a.",
      "def": "較高的，上級的；較好的，優秀的"
    },
    {
      "word": "suppose",
      "pos": "vt.",
      "def": "vi.猜想，以為；假定"
    },
    {
      "word": "surround",
      "pos": "vt.",
      "def": "圍繞；包圍"
    },
    {
      "word": "survey",
      "pos": "n.",
      "def": "vt.vi.測量，勘測；調查"
    },
    {
      "word": "survival",
      "pos": "n.",
      "def": "倖存"
    },
    {
      "word": "survivor",
      "pos": "n.",
      "def": "倖存者，生還者"
    },
    {
      "word": "suspect",
      "pos": "vt.",
      "def": "懷疑 n.嫌疑犯"
    },
    {
      "word": "suspicion",
      "pos": "n.",
      "def": "懷疑，疑心"
    },
    {
      "word": "swear",
      "pos": "vt.",
      "def": "vi.發誓；罵髒話"
    },
    {
      "word": "sweat",
      "pos": "n.",
      "def": "汗，汗水"
    },
    {
      "word": "swell",
      "pos": "vt.",
      "def": "vi.腫起，腫脹"
    },
    {
      "word": "swift",
      "pos": "a.",
      "def": "快速的，快捷的 vi.出汗"
    },
    {
      "word": "switch",
      "pos": "n.",
      "def": "開關；調換，交換vt.打開(或關掉)…的開關"
    },
    {
      "word": "sword",
      "pos": "n.",
      "def": "劍，刀"
    },
    {
      "word": "system",
      "pos": "n.",
      "def": "系統；制度"
    },
    {
      "word": "tablet",
      "pos": "n.",
      "def": "刻寫板；匾；碑"
    },
    {
      "word": "tack",
      "pos": "n.",
      "def": "大頭釘；圖釘"
    },
    {
      "word": "tag",
      "pos": "n.",
      "def": "標籤，貨籤 vt.給…加標籤"
    },
    {
      "word": "tailor",
      "pos": "n.",
      "def": "裁縫師 vt.裁製(衣服，衣料等)"
    },
    {
      "word": "tame",
      "pos": "a.",
      "def": "馴服的；溫順的"
    },
    {
      "word": "tap n.龍頭；塞子",
      "pos": "n.",
      "def": "vt.vi.輕拍，輕叩"
    },
    {
      "word": "tax",
      "pos": "n.",
      "def": "稅；稅金 vt.向…課稅"
    },
    {
      "word": "tease",
      "pos": "vi., vt.",
      "def": "n.戲弄，逗弄"
    },
    {
      "word": "technical",
      "pos": "a.",
      "def": "技術的；科技的"
    },
    {
      "word": "technique",
      "pos": "n.",
      "def": "技巧；技術"
    },
    {
      "word": "technology",
      "pos": "n.",
      "def": "技術；科技"
    },
    {
      "word": "temper",
      "pos": "n.",
      "def": "性情，脾氣"
    },
    {
      "word": "temperature",
      "pos": "n.",
      "def": "溫度，氣溫；體溫"
    },
    {
      "word": "temporary",
      "pos": "a.",
      "def": "臨時的；暫時的"
    },
    {
      "word": "tend",
      "pos": "vt.",
      "def": "照管，照料 vi.服侍；【口】注意，關心 (2) vi.傾向；易於"
    },
    {
      "word": "tender",
      "pos": "a.",
      "def": "嫩的；柔軟的；溫柔的"
    },
    {
      "word": "territory",
      "pos": "n.",
      "def": "領土，版圖；領域，範圍"
    },
    {
      "word": "text",
      "pos": "n.",
      "def": "正文，本文"
    },
    {
      "word": "thankful",
      "pos": "a.",
      "def": "感謝的，感激的"
    },
    {
      "word": "theory",
      "pos": "n.",
      "def": "理論；學理"
    },
    {
      "word": "thirst",
      "pos": "n.",
      "def": "渴，口渴；渴望"
    },
    {
      "word": "thread",
      "pos": "n.",
      "def": "線"
    },
    {
      "word": "threat",
      "pos": "n.",
      "def": "威脅，恐嚇"
    },
    {
      "word": "threaten",
      "pos": "vt.",
      "def": "vi.威脅，恐嚇"
    },
    {
      "word": "tickle",
      "pos": "n.",
      "def": "vt.vi.呵…癢；使發癢"
    },
    {
      "word": "tide",
      "pos": "n.",
      "def": "潮汐；潮水"
    },
    {
      "word": "tidy",
      "pos": "a.",
      "def": "整潔的，整齊的"
    },
    {
      "word": "tight",
      "pos": "a.",
      "def": "緊的，緊身的；緊湊的；密封的"
    },
    {
      "word": "tighten",
      "pos": "vt.",
      "def": "vi.(使)變緊，(使)繃緊"
    },
    {
      "word": "timber",
      "pos": "n.",
      "def": "木材，木料"
    },
    {
      "word": "tissue",
      "pos": "n.",
      "def": "面紙；衛生紙；(動植物的)組織"
    },
    {
      "word": "tobacco",
      "pos": "n.",
      "def": "菸草；煙葉"
    },
    {
      "word": "ton",
      "pos": "n.",
      "def": "噸；公噸；【口】大量，許多"
    },
    {
      "word": "tortoise",
      "pos": "n.",
      "def": "陸龜；烏龜"
    },
    {
      "word": "toss",
      "pos": "n.",
      "def": "vt.vi.拋，扔，投"
    },
    {
      "word": "tourism",
      "pos": "n.",
      "def": "旅遊(業)，觀光(業)"
    },
    {
      "word": "tourist",
      "pos": "n.",
      "def": "旅遊者，觀光者"
    },
    {
      "word": "tow",
      "pos": "vt.",
      "def": "n.拖，拉；牽引"
    },
    {
      "word": "trace",
      "pos": "n.",
      "def": "痕跡；遺跡 vt.跟蹤；追溯"
    },
    {
      "word": "trader",
      "pos": "n.",
      "def": "商人；交易人"
    },
    {
      "word": "trail n.痕跡；蹤跡；小道",
      "pos": "vt.",
      "def": "vi.拖，曳；跟蹤；落後於…"
    },
    {
      "word": "transport",
      "pos": "n.",
      "def": "運輸；交通工具"
    },
    {
      "word": "trash",
      "pos": "n.",
      "def": "廢物，垃圾"
    },
    {
      "word": "traveler",
      "pos": "n.",
      "def": "旅行者，旅客"
    },
    {
      "word": "tray",
      "pos": "n.",
      "def": "托盤"
    },
    {
      "word": "tremble",
      "pos": "vi.",
      "def": "n.發抖；震顫"
    },
    {
      "word": "trend",
      "pos": "n.",
      "def": "趨勢；時尚"
    },
    {
      "word": "tribe",
      "pos": "n.",
      "def": "部落；種族"
    },
    {
      "word": "tricky",
      "pos": "a.",
      "def": "狡猾的；微妙的；難處理的"
    },
    {
      "word": "troop",
      "pos": "n.",
      "def": "軍隊，部隊"
    },
    {
      "word": "tropical",
      "pos": "a.",
      "def": "熱帶的"
    },
    {
      "word": "trunk",
      "pos": "n.",
      "def": "樹幹；車尾的行李箱；象鼻"
    },
    {
      "word": "truthful",
      "pos": "a.",
      "def": "誠實的；講真話的"
    },
    {
      "word": "tub",
      "pos": "n.",
      "def": "桶，木盆；【口】浴缸"
    },
    {
      "word": "tug [tʌg",
      "pos": "n.",
      "def": "vt.vi.用力拉(或拖)"
    },
    {
      "word": "tulip",
      "pos": "n.",
      "def": "鬱金香"
    },
    {
      "word": "tumble",
      "pos": "vi.",
      "def": "vt.n.(使)跌倒；(使)滾下；倒塌"
    },
    {
      "word": "tune",
      "pos": "n.",
      "def": "曲調；歌曲；協調，一致"
    },
    {
      "word": "tutor",
      "pos": "n.",
      "def": "家庭教師 vt.當…的家教"
    },
    {
      "word": "twig",
      "pos": "n.",
      "def": "細枝，嫩枝"
    },
    {
      "word": "twin",
      "pos": "n.",
      "def": "雙胞胎之一"
    },
    {
      "word": "twist",
      "pos": "n.",
      "def": "vt.扭轉；扭彎"
    },
    {
      "word": "typewriter",
      "pos": "n.",
      "def": "打字機"
    },
    {
      "word": "typical",
      "pos": "a.",
      "def": "典型的，有代表性的"
    },
    {
      "word": "union",
      "pos": "n.",
      "def": "結合；合併；工會；聯合會"
    },
    {
      "word": "unite",
      "pos": "vt.",
      "def": "vi.(使)聯合；統一；(使)團結"
    },
    {
      "word": "unity",
      "pos": "n.",
      "def": "單一(性)；團結；聯合； 統一(性)；一致(性)"
    },
    {
      "word": "universe",
      "pos": "n.",
      "def": "宇宙"
    },
    {
      "word": "unless",
      "pos": "conj.",
      "def": "除非"
    },
    {
      "word": "upset",
      "pos": "vt.",
      "def": "弄翻；使心煩意亂 a.翻倒的；心煩的，苦惱的"
    },
    {
      "word": "vacant",
      "pos": "a.",
      "def": "空的；空白的；(職位)空缺的"
    },
    {
      "word": "valuable",
      "pos": "a.",
      "def": "值錢的，貴重的 n.貴重物品"
    },
    {
      "word": "van",
      "pos": "n.",
      "def": "箱形客貨兩用車"
    },
    {
      "word": "vanish",
      "pos": "vi.",
      "def": "消失"
    },
    {
      "word": "variety",
      "pos": "n.",
      "def": "多樣化，變化；種類"
    },
    {
      "word": "various",
      "pos": "a.",
      "def": "不同的；各種各樣的"
    },
    {
      "word": "vary",
      "pos": "vt.",
      "def": "vi.使不同；變更；修改"
    },
    {
      "word": "vase",
      "pos": "n.",
      "def": "花瓶"
    },
    {
      "word": "vehicle",
      "pos": "n.",
      "def": "運載工具；車輛"
    },
    {
      "word": "verse",
      "pos": "n.",
      "def": "詩；韻文"
    },
    {
      "word": "vest",
      "pos": "n.",
      "def": "背心；馬甲"
    },
    {
      "word": "vice-president",
      "pos": "n.",
      "def": "副總統(裁)"
    },
    {
      "word": "victim",
      "pos": "n.",
      "def": "犧牲者，遇難者；受害者"
    },
    {
      "word": "violence",
      "pos": "n.",
      "def": "暴力，暴力行為；激烈"
    },
    {
      "word": "violent",
      "pos": "a.",
      "def": "激烈的；暴力的；狂暴的"
    },
    {
      "word": "violet",
      "pos": "a.",
      "def": "紫蘿蘭"
    },
    {
      "word": "visible",
      "pos": "a.",
      "def": "可看見的"
    },
    {
      "word": "vision",
      "pos": "n.",
      "def": "視力；視覺；洞察力，眼光"
    },
    {
      "word": "vitamin",
      "pos": "n.",
      "def": "維他命，維生素"
    },
    {
      "word": "vivid",
      "pos": "a.",
      "def": "鮮豔的；生動的；逼真的"
    },
    {
      "word": "volume",
      "pos": "n.",
      "def": "卷，冊；體積；容積；音量"
    },
    {
      "word": "wag",
      "pos": "vi., vt.",
      "def": "n.搖，搖擺，搖動"
    },
    {
      "word": "wage(s)",
      "pos": "n.",
      "def": "薪水；報酬"
    },
    {
      "word": "wagon n.(",
      "pos": "",
      "def": "四輪)運貨馬車；旅行車"
    },
    {
      "word": "waken",
      "pos": "vi.",
      "def": "醒來；睡醒 vt.喚醒"
    },
    {
      "word": "wander",
      "pos": "vi.",
      "def": "vt.n.漫遊；閒逛"
    },
    {
      "word": "warmth",
      "pos": "n.",
      "def": "溫暖；熱情；熱烈"
    },
    {
      "word": "warn",
      "pos": "vt.",
      "def": "vi.警告；告誡"
    },
    {
      "word": "wax",
      "pos": "n.",
      "def": "蠟；耳垢"
    },
    {
      "word": "weaken",
      "pos": "vt.",
      "def": "vi.削弱，減弱； 變弱"
    },
    {
      "word": "wealth",
      "pos": "n.",
      "def": "財富；財產"
    },
    {
      "word": "wealthy",
      "pos": "a.",
      "def": "富有的，有錢的"
    },
    {
      "word": "weave",
      "pos": "vt.",
      "def": "vi.織；編，"
    },
    {
      "word": "web",
      "pos": "n.",
      "def": "蜘蛛網；網狀物"
    },
    {
      "word": "weed",
      "pos": "n.",
      "def": "雜草；野草"
    },
    {
      "word": "weep",
      "pos": "n.",
      "def": "vt.vi.哭泣，流淚"
    },
    {
      "word": "wheat",
      "pos": "n.",
      "def": "小麥"
    },
    {
      "word": "whip",
      "pos": "n.",
      "def": "vt.vi.鞭笞，抽打"
    },
    {
      "word": "whistle n.口哨；警笛",
      "pos": "vt.",
      "def": "vi.吹口哨；鳴笛"
    },
    {
      "word": "wicked",
      "pos": "a.",
      "def": "壞的；邪惡的"
    },
    {
      "word": "willow",
      "pos": "n.",
      "def": "柳，柳樹"
    },
    {
      "word": "wink",
      "pos": "n.",
      "def": "vt.vi.眨眼"
    },
    {
      "word": "wipe",
      "pos": "vi., vt.",
      "def": "n.擦；揩"
    },
    {
      "word": "wisdom",
      "pos": "n.",
      "def": "智慧，才智"
    },
    {
      "word": "wrap",
      "pos": "vt.",
      "def": "vi.包，裹 n.包裹物，覆蓋物"
    },
    {
      "word": "wrist",
      "pos": "n.",
      "def": "手腕；腕關節"
    },
    {
      "word": "X-ray",
      "pos": "n.",
      "def": "X 光 (x-ray)"
    },
    {
      "word": "yawn",
      "pos": "n.",
      "def": "vi.呵欠"
    },
    {
      "word": "yell",
      "pos": "n.",
      "def": "vt.vi.叫喊；吼叫"
    },
    {
      "word": "yolk",
      "pos": "n.",
      "def": "蛋黃"
    },
    {
      "word": "youngster",
      "pos": "n.",
      "def": "小孩；年輕人"
    },
    {
      "word": "zipper n.拉鍊",
      "pos": "vi.",
      "def": "vt.拉上拉鍊"
    },
    {
      "word": "zone",
      "pos": "n.",
      "def": "地帶；地區"
    }
  ],
  "4": [
    {
      "word": "abandon",
      "pos": "vt.",
      "def": "放棄，中止"
    },
    {
      "word": "abdomen",
      "pos": "n.",
      "def": "腹；腹部"
    },
    {
      "word": "absolute",
      "pos": "a.",
      "def": "絕對的；完全的"
    },
    {
      "word": "absorb",
      "pos": "vt.",
      "def": "吸收；吸引(注意等)；使；專注"
    },
    {
      "word": "abstract",
      "pos": "a.",
      "def": "抽象的 n.摘要，梗概"
    },
    {
      "word": "academic",
      "pos": "a.",
      "def": "學術的"
    },
    {
      "word": "accent",
      "pos": "n.",
      "def": "口音，腔調；重音；強調"
    },
    {
      "word": "acceptance",
      "pos": "n.",
      "def": "接受；歡迎"
    },
    {
      "word": "access",
      "pos": "vt., n.",
      "def": "接近，進入；通道，入口；使用；接近"
    },
    {
      "word": "accidental",
      "pos": "a.",
      "def": "偶然的；意外的"
    },
    {
      "word": "accompany",
      "pos": "vt.",
      "def": "陪伴；為…伴奏"
    },
    {
      "word": "accomplish",
      "pos": "vt.",
      "def": "完成，實現，達到"
    },
    {
      "word": "accomplishment",
      "pos": "n.",
      "def": "成就；成；績"
    },
    {
      "word": "accountant",
      "pos": "n.",
      "def": "會計師；會計人員"
    },
    {
      "word": "accuracy",
      "pos": "n.",
      "def": "正確(性)；準確(性)"
    },
    {
      "word": "accuse",
      "pos": "vt.",
      "def": "指控，控告；譴責"
    },
    {
      "word": "acid",
      "pos": "a.",
      "def": "酸的，有酸味的 n.【化】酸"
    },
    {
      "word": "acquaint",
      "pos": "vt.",
      "def": "使認識；使熟悉"
    },
    {
      "word": "acquaintance n.(",
      "pos": "",
      "def": "與人)相識；相識的人，熟；人"
    },
    {
      "word": "acquire",
      "pos": "vt.",
      "def": "取得，獲得；學到"
    },
    {
      "word": "acre",
      "pos": "n.",
      "def": "英畝"
    },
    {
      "word": "adapt",
      "pos": "vt.",
      "def": "使適應，使適合；改編，；改寫"
    },
    {
      "word": "adequate",
      "pos": "a.",
      "def": "適當的；足夠的"
    },
    {
      "word": "adjective",
      "pos": "n.",
      "def": "形容詞 a.形容詞的"
    },
    {
      "word": "adjust",
      "pos": "vt.",
      "def": "調節；校準；調整"
    },
    {
      "word": "adjustment",
      "pos": "n.",
      "def": "調節；調整；校；正"
    },
    {
      "word": "admirable",
      "pos": "a.",
      "def": "值得讚揚的；令人；欽佩的"
    },
    {
      "word": "admiration",
      "pos": "n.",
      "def": "欽佩，讚美，羨；慕"
    },
    {
      "word": "admission n.(",
      "pos": "",
      "def": "學校，會場，俱樂部；等的)進入許可；入場費 ；入場券 ；承認"
    },
    {
      "word": "adverb",
      "pos": "n.",
      "def": "副詞 a.副詞的"
    },
    {
      "word": "agency",
      "pos": "n.",
      "def": "代辦處，經銷處"
    },
    {
      "word": "agent",
      "pos": "n.",
      "def": "代理人；代理商；仲介人"
    },
    {
      "word": "aggressive",
      "pos": "a.",
      "def": "侵略的，有進取精神；的"
    },
    {
      "word": "agreeable",
      "pos": "a.",
      "def": "令人愉快的，宜人的"
    },
    {
      "word": "AIDS",
      "pos": "n.",
      "def": "愛滋病"
    },
    {
      "word": "(acquired immune deficiency",
      "pos": "",
      "def": ""
    },
    {
      "word": "syndrome)",
      "pos": "",
      "def": ""
    },
    {
      "word": "alcohol",
      "pos": "n.",
      "def": "酒精；含酒精飲料；酒"
    },
    {
      "word": "alert",
      "pos": "a.",
      "def": "警覺的；警惕的 n.警戒，警報vt.使警覺；使注意"
    },
    {
      "word": "allowance",
      "pos": "n.",
      "def": "零用錢；津貼，補貼同：pocket money"
    },
    {
      "word": "aluminum",
      "pos": "n.",
      "def": "鋁"
    },
    {
      "word": "= ante meridiem (= before noon)",
      "pos": "",
      "def": ""
    },
    {
      "word": "amateur",
      "pos": "n.",
      "def": "業餘從事者"
    },
    {
      "word": "ambitious",
      "pos": "a.",
      "def": "有雄心的；野心勃勃；的"
    },
    {
      "word": "amid",
      "pos": "prep.",
      "def": "在…之間；在…之中"
    },
    {
      "word": "(amidst)",
      "pos": "",
      "def": ""
    },
    {
      "word": "amuse",
      "pos": "vt.",
      "def": "使歡樂，逗…高興"
    },
    {
      "word": "amusement",
      "pos": "n.",
      "def": "樂趣；娛樂，消；遣"
    },
    {
      "word": "analysis",
      "pos": "n.",
      "def": "分析；分解；解析"
    },
    {
      "word": "analyze",
      "pos": "vt.",
      "def": "分析；解析"
    },
    {
      "word": "ancestor",
      "pos": "n.",
      "def": "祖宗，祖先"
    },
    {
      "word": "anniversary",
      "pos": "n.",
      "def": "週年紀念日"
    },
    {
      "word": "annoy",
      "pos": "vt.",
      "def": "惹惱，使生氣"
    },
    {
      "word": "annual",
      "pos": "a.",
      "def": "一年的；一年一次的"
    },
    {
      "word": "anxiety",
      "pos": "n.",
      "def": "焦慮，掛念"
    },
    {
      "word": "anxious",
      "pos": "a.",
      "def": "焦慮的，掛念的"
    },
    {
      "word": "apologize",
      "pos": "vi.",
      "def": "道歉；認錯"
    },
    {
      "word": "apology",
      "pos": "n.",
      "def": "道歉；陪罪"
    },
    {
      "word": "appliance",
      "pos": "n.",
      "def": "器具，用具；裝置，；設備"
    },
    {
      "word": "applicant",
      "pos": "n.",
      "def": "申請人"
    },
    {
      "word": "application",
      "pos": "n.",
      "def": "應用，適用；申請；申請書"
    },
    {
      "word": "appoint",
      "pos": "vt.",
      "def": "任命，指派"
    },
    {
      "word": "appointment n.(",
      "pos": "",
      "def": "尤指正式的)約；會 ；任命，委派"
    },
    {
      "word": "appreciation",
      "pos": "n.",
      "def": "欣賞；賞識；感；謝"
    },
    {
      "word": "appropriate",
      "pos": "a.",
      "def": "適當的，恰當的"
    },
    {
      "word": "approval",
      "pos": "n.",
      "def": "批准；認可；贊成；同；意"
    },
    {
      "word": "arch",
      "pos": "n.",
      "def": "拱，拱門，牌樓"
    },
    {
      "word": "arise",
      "pos": "vi.",
      "def": "上升；產生，出現；【舊】起；立"
    },
    {
      "word": "arms",
      "pos": "n.",
      "def": "武器"
    },
    {
      "word": "arouse",
      "pos": "vt.",
      "def": "喚起；使奮發"
    },
    {
      "word": "article1",
      "pos": "n.",
      "def": "冠詞；文章；物品；條文"
    },
    {
      "word": "artificial",
      "pos": "a.",
      "def": "人工的，人造的；假；的"
    },
    {
      "word": "artistic",
      "pos": "a.",
      "def": "藝術的；美術的"
    },
    {
      "word": "ashamed",
      "pos": "a.",
      "def": "羞愧的，感到難為情的"
    },
    {
      "word": "aspect",
      "pos": "n.",
      "def": "方面，觀點"
    },
    {
      "word": "aspirin",
      "pos": "n.",
      "def": "阿斯匹靈(解熱鎮痛藥)"
    },
    {
      "word": "assemble",
      "pos": "vt.",
      "def": "集合，召集；組合，；配裝"
    },
    {
      "word": "assembly",
      "pos": "n.",
      "def": "集會；集合"
    },
    {
      "word": "assign",
      "pos": "vt.",
      "def": "分配，分派；指定"
    },
    {
      "word": "assignment n.(",
      "pos": "",
      "def": "分派的)任務；工；作 ；(課外)作業，；功課"
    },
    {
      "word": "assistance",
      "pos": "n.",
      "def": "援助，幫助"
    },
    {
      "word": "associate",
      "pos": "adj., vt., n.",
      "def": "夥伴；同事；合夥人；夥伴的；共事的；聯想"
    },
    {
      "word": "association",
      "pos": "n.",
      "def": "協(公)會；聯想，；聯想物"
    },
    {
      "word": "assume",
      "pos": "vt.",
      "def": "以為；假定為；承擔；就；任"
    },
    {
      "word": "assurance",
      "pos": "n.",
      "def": "保證"
    },
    {
      "word": "assure",
      "pos": "vt.",
      "def": "向…保證，擔保；使確信，使放心"
    },
    {
      "word": "athletic",
      "pos": "adj.",
      "def": "運動的，體育的"
    },
    {
      "word": "ATM",
      "pos": "n.",
      "def": "自動存提款機"
    },
    {
      "word": "(automatic teller machine)",
      "pos": "",
      "def": ""
    },
    {
      "word": "atmosphere",
      "pos": "n.",
      "def": "大氣層；氣氛"
    },
    {
      "word": "atom",
      "pos": "n.",
      "def": "原子"
    },
    {
      "word": "atomic",
      "pos": "a.",
      "def": "原子的"
    },
    {
      "word": "attach",
      "pos": "vt.",
      "def": "裝上，貼上，繫上"
    },
    {
      "word": "attachment",
      "pos": "n.",
      "def": "連接；附著；附屬物；附件"
    },
    {
      "word": "attraction",
      "pos": "n.",
      "def": "吸引；吸引力 ；吸；引物"
    },
    {
      "word": "audio",
      "pos": "adj., n.",
      "def": "聽覺的，聲音的；(電視等的)音響裝置"
    },
    {
      "word": "authority",
      "pos": "n.",
      "def": "權力；職權 ；官方，；當局；權威人士；專家"
    },
    {
      "word": "autobiography",
      "pos": "n.",
      "def": "自傳"
    },
    {
      "word": "await",
      "pos": "vt.",
      "def": "等候，期待"
    },
    {
      "word": "awkward",
      "pos": "a.",
      "def": "笨拙的 ；尷尬；的"
    },
    {
      "word": "backpack",
      "pos": "n.",
      "def": "登山、遠足用的背包"
    },
    {
      "word": "bald",
      "pos": "a.",
      "def": "禿頭的；無草木的"
    },
    {
      "word": "ballet",
      "pos": "n.",
      "def": "芭蕾舞"
    },
    {
      "word": "bankrupt a.破產的 vt.使破產",
      "pos": "n.",
      "def": "破產者"
    },
    {
      "word": "bargain",
      "pos": "n., vt.",
      "def": "討價還價；買賣，交易；特價商品"
    },
    {
      "word": "barrier",
      "pos": "n.",
      "def": "障礙物；路障，柵欄"
    },
    {
      "word": "basin",
      "pos": "n.",
      "def": "盆；臉盆；盆地"
    },
    {
      "word": "battery",
      "pos": "n.",
      "def": "電池"
    },
    {
      "word": "beak",
      "pos": "n.",
      "def": "鳥嘴"
    },
    {
      "word": "beam2",
      "pos": "n.",
      "def": "笑容，喜色vt.流露；發出 vi.眉開眼笑"
    },
    {
      "word": "behavior",
      "pos": "n.",
      "def": "行為，舉止"
    },
    {
      "word": "biography",
      "pos": "n.",
      "def": "傳記"
    },
    {
      "word": "biology",
      "pos": "n.",
      "def": "生物學"
    },
    {
      "word": "blade",
      "pos": "n.",
      "def": "刀身，劍身；刀片"
    },
    {
      "word": "blend",
      "pos": "vt.",
      "def": "vi.使混和，使混雜；使交融"
    },
    {
      "word": "blessing n.(",
      "pos": "",
      "def": "上帝的)賜福；祝福"
    },
    {
      "word": "blink",
      "pos": "vi.",
      "def": "vt.n.眨眼睛；瞇著眼看"
    },
    {
      "word": "bloom n.(",
      "pos": "vi.",
      "def": "尤指觀賞的)花；開花(期)；開花"
    },
    {
      "word": "blossom n.(",
      "pos": "vi.",
      "def": "尤指果樹的)花 ；開；花(期)；開花"
    },
    {
      "word": "blush",
      "pos": "vi.",
      "def": "n.(因害羞，尷尬等而)臉紅"
    },
    {
      "word": "boast",
      "pos": "vi.",
      "def": "n.自吹自擂；誇耀；吹牛"
    },
    {
      "word": "bond",
      "pos": "n.",
      "def": "結合力；聯結；契約，約定"
    },
    {
      "word": "bounce",
      "pos": "vi., vt.",
      "def": "n.(球)彈起，彈回；蹦跳"
    },
    {
      "word": "bracelet",
      "pos": "n.",
      "def": "手鐲；臂鐲"
    },
    {
      "word": "brassiere",
      "pos": "n.",
      "def": "胸罩 = bra"
    },
    {
      "word": "breed",
      "pos": "vt.",
      "def": "vi.(動物)產(子)，孵(卵)；繁；殖；養育 n.品種"
    },
    {
      "word": "bridegroom",
      "pos": "n.",
      "def": "新郎 (= groom)"
    },
    {
      "word": "broil",
      "pos": "vi., vt.",
      "def": "n.烤，炙"
    },
    {
      "word": "broke a.【",
      "pos": "",
      "def": "口】破了產的；一文不名的"
    },
    {
      "word": "brutal",
      "pos": "a.",
      "def": "殘忍的，冷酷的；野蠻的"
    },
    {
      "word": "bulletin",
      "pos": "n.",
      "def": "公告；公報"
    },
    {
      "word": "cabinet",
      "pos": "n.",
      "def": "櫥，櫃 ；內閣；全體；閣員"
    },
    {
      "word": "calculate",
      "pos": "vt.",
      "def": "vi.計算"
    },
    {
      "word": "calculation",
      "pos": "n.",
      "def": "計算"
    },
    {
      "word": "calculator",
      "pos": "n.",
      "def": "計算者(機)"
    },
    {
      "word": "calorie",
      "pos": "n.",
      "def": "卡，卡路里"
    },
    {
      "word": "campaign",
      "pos": "n.",
      "def": "戰役；運動，活動"
    },
    {
      "word": "[(+for/against)；",
      "pos": "",
      "def": "競選活；動"
    },
    {
      "word": "candidate",
      "pos": "n.",
      "def": "候選人；候補者；應；徵者"
    },
    {
      "word": "capacity",
      "pos": "n.",
      "def": "容量，容積；能力，；才能"
    },
    {
      "word": "cape",
      "pos": "n.",
      "def": "披肩；斗篷；岬，海角"
    },
    {
      "word": "capital",
      "pos": "n.",
      "def": "首都；大寫字母；資本；死刑的a.首要的；大寫字母的；資本的"
    },
    {
      "word": "capitalism",
      "pos": "n.",
      "def": "資本主義(制；度)"
    },
    {
      "word": "capitalist",
      "pos": "n.",
      "def": "資本家；資本主義者"
    },
    {
      "word": "career n.(",
      "pos": "",
      "def": "終身的)職業 ；生涯；歷；程"
    },
    {
      "word": "cargo n.(",
      "pos": "",
      "def": "船、飛機、車輛裝載的)貨；物"
    },
    {
      "word": "carrier",
      "pos": "n.",
      "def": "運送人；送信人；航空母；艦"
    },
    {
      "word": "carve",
      "pos": "vi.",
      "def": "刻，雕刻"
    },
    {
      "word": "catalogue/catalog n.(",
      "pos": "",
      "def": "圖書，商品的)；目錄"
    },
    {
      "word": "CD",
      "pos": "n.",
      "def": "光碟 = compact disk"
    },
    {
      "word": "*compact",
      "pos": "a.",
      "def": "緊密的，結實的"
    },
    {
      "word": "cease",
      "pos": "n.",
      "def": "vt.vi.停止，終止"
    },
    {
      "word": "celebration",
      "pos": "n.",
      "def": "慶祝 ；慶祝活；動"
    },
    {
      "word": "cement",
      "pos": "n.",
      "def": "水泥"
    },
    {
      "word": "chamber",
      "pos": "n.",
      "def": "房間；寢室"
    },
    {
      "word": "championship",
      "pos": "n.",
      "def": "冠軍的地位；錦標賽"
    },
    {
      "word": "characteristic",
      "pos": "adj., n.",
      "def": "特性，特徵；特有的，獨特；的"
    },
    {
      "word": "charity",
      "pos": "n.",
      "def": "慈悲；慈善 ；慈善團；體"
    },
    {
      "word": "chemistry",
      "pos": "n.",
      "def": "化學；男女間的來電"
    },
    {
      "word": "cherish",
      "pos": "vt.",
      "def": "珍愛；珍惜"
    },
    {
      "word": "chirp",
      "pos": "vi.",
      "def": "n.(小鳥)發啁啾聲；(昆蟲)發；唧唧聲"
    },
    {
      "word": "chore",
      "pos": "n.",
      "def": "家庭雜務；日常零星活兒"
    },
    {
      "word": "chorus",
      "pos": "n.",
      "def": "合唱隊 ；合唱 ；副歌"
    },
    {
      "word": "cigar",
      "pos": "n.",
      "def": "雪茄"
    },
    {
      "word": "cinema n.【",
      "pos": "",
      "def": "英】電影院 ；(一部)電影 ；(總稱)電影；電；影業"
    },
    {
      "word": "circular",
      "pos": "a.",
      "def": "圓形的；環形的"
    },
    {
      "word": "circulate",
      "pos": "vt.",
      "def": "vi.循環；流通；發行"
    },
    {
      "word": "circulation",
      "pos": "n.",
      "def": "循環；(貨幣、消；息；等的)流通；(報刊等的)發行；量"
    },
    {
      "word": "circumstance",
      "pos": "n.",
      "def": "情況，環境"
    },
    {
      "word": "civilian n.(",
      "pos": "",
      "def": "與軍、警相對的)平民，；百姓"
    },
    {
      "word": "civilization",
      "pos": "n.",
      "def": "教化(過程) ；文明；文明世界"
    },
    {
      "word": "clarify",
      "pos": "vt.",
      "def": "vi.澄清；闡明"
    },
    {
      "word": "clash",
      "pos": "n.",
      "def": "vi.vt.砰地相碰撞；衝突"
    },
    {
      "word": "classification",
      "pos": "n.",
      "def": "分類；分級"
    },
    {
      "word": "classify",
      "pos": "vt.",
      "def": "將…分類；將…分等；級"
    },
    {
      "word": "cliff n.(",
      "pos": "",
      "def": "尤指海邊的)懸崖，峭壁"
    },
    {
      "word": "climax",
      "pos": "n.",
      "def": "頂點，高潮"
    },
    {
      "word": "clumsy",
      "pos": "a.",
      "def": "笨拙的，手腳不靈活的"
    },
    {
      "word": "coarse",
      "pos": "a.",
      "def": "粗糙的；粗劣的"
    },
    {
      "word": "code",
      "pos": "n.",
      "def": "法典，法規；規則；代碼；密；碼"
    },
    {
      "word": "collapse",
      "pos": "vi.",
      "def": "vt.n.倒塌"
    },
    {
      "word": "combination",
      "pos": "n.",
      "def": "結合(體)；密；碼鎖"
    },
    {
      "word": "comedy",
      "pos": "n.",
      "def": "喜劇"
    },
    {
      "word": "comic1",
      "pos": "a.",
      "def": "喜劇的 n.喜劇演員"
    },
    {
      "word": "comic(s)2",
      "pos": "a.",
      "def": "連環漫畫的 n.連環漫；畫"
    },
    {
      "word": "commander",
      "pos": "n.",
      "def": "指揮官，司令官"
    },
    {
      "word": "comment",
      "pos": "n.",
      "def": "vi.註釋，評註；批評，；評論"
    },
    {
      "word": "commerce",
      "pos": "n.",
      "def": "商業，貿易"
    },
    {
      "word": "commit",
      "pos": "vt.",
      "def": "犯(罪)，做(錯事等)"
    },
    {
      "word": "communication",
      "pos": "n.",
      "def": "溝通；傳；達；交流；通訊(交通)；設施"
    },
    {
      "word": "community",
      "pos": "n.",
      "def": "社區 ；(一般)社會，公眾"
    },
    {
      "word": "companion",
      "pos": "n.",
      "def": "同伴，伴侶"
    },
    {
      "word": "competition",
      "pos": "n.",
      "def": "競爭，比賽，競；賽"
    },
    {
      "word": "competitive",
      "pos": "a.",
      "def": "競爭的；競爭激；烈的"
    },
    {
      "word": "competitor",
      "pos": "n.",
      "def": "競爭者；對手"
    },
    {
      "word": "complicate",
      "pos": "vt.",
      "def": "使複雜化"
    },
    {
      "word": "compose",
      "pos": "vt.",
      "def": "作(詩，曲等)；組成"
    },
    {
      "word": "(+of)",
      "pos": "",
      "def": ""
    },
    {
      "word": "composer",
      "pos": "n.",
      "def": "作曲者，作曲家"
    },
    {
      "word": "composition",
      "pos": "n.",
      "def": "寫作；作曲；作品；作文；(大型)樂曲"
    },
    {
      "word": "concentrate",
      "pos": "vi., vt.",
      "def": "集中；聚集；濃；縮；集中；專注"
    },
    {
      "word": "concentration",
      "pos": "n.",
      "def": "集中；專心；濃縮"
    },
    {
      "word": "concept",
      "pos": "n.",
      "def": "概念，觀念"
    },
    {
      "word": "concerning",
      "pos": "prep.",
      "def": "關於…"
    },
    {
      "word": "concrete",
      "pos": "a.",
      "def": "有形的；具體的 n.混"
    },
    {
      "word": "conductor",
      "pos": "n.",
      "def": "管理人；指揮；車；掌；避雷針"
    },
    {
      "word": "conference n.(",
      "pos": "",
      "def": "正式)會議；(學校，教會，體育隊等的)；聯盟"
    },
    {
      "word": "confess",
      "pos": "vt.",
      "def": "坦白，承認"
    },
    {
      "word": "[+(that)",
      "pos": "",
      "def": ""
    },
    {
      "word": "confidence",
      "pos": "n.",
      "def": "自信，信心"
    },
    {
      "word": "confine",
      "pos": "vt.",
      "def": "限制；使局限"
    },
    {
      "word": "confusion",
      "pos": "n.",
      "def": "混亂；慌亂；困惑"
    },
    {
      "word": "congratulate",
      "pos": "vt.",
      "def": "祝賀；恭禧"
    },
    {
      "word": "congress n.(",
      "pos": "",
      "def": "正式)會議；代表大；會；(C-)美國國會"
    },
    {
      "word": "conjunction n.【",
      "pos": "",
      "def": "文】連接詞；結合"
    },
    {
      "word": "conquer",
      "pos": "vt.",
      "def": "征服；攻克，攻取"
    },
    {
      "word": "conscience",
      "pos": "n.",
      "def": "良心；道義心"
    },
    {
      "word": "consequence",
      "pos": "n.",
      "def": "結果，後果；["
    },
    {
      "word": "consequent",
      "pos": "a.",
      "def": "隨之發生的"
    },
    {
      "word": "conservative",
      "pos": "n., a.",
      "def": "保守的，守舊的；保守者；防腐劑"
    },
    {
      "word": "consist",
      "pos": "vi.",
      "def": "由..組成 ；在於…"
    },
    {
      "word": "consistent",
      "pos": "a.",
      "def": "始終如一的，前後；一致的"
    },
    {
      "word": "consonant n.【",
      "pos": "",
      "def": "語】子音；子音；字母"
    },
    {
      "word": "constitute",
      "pos": "vt.",
      "def": "構成，組成"
    },
    {
      "word": "constitution",
      "pos": "n.",
      "def": "憲法；章程；體質，體格"
    },
    {
      "word": "construct",
      "pos": "vt.",
      "def": "建造，構成"
    },
    {
      "word": "construction",
      "pos": "n.",
      "def": "建造，建設"
    },
    {
      "word": "constructive",
      "pos": "a.",
      "def": "建設性的；結構；上的"
    },
    {
      "word": "consult",
      "pos": "vt.",
      "def": "與…商量；請教；查閱(詞典，參考書等)"
    },
    {
      "word": "consultant",
      "pos": "n.",
      "def": "顧問"
    },
    {
      "word": "consume",
      "pos": "vt.",
      "def": "消耗，花費"
    },
    {
      "word": "consumer",
      "pos": "n.",
      "def": "消費者；消耗者"
    },
    {
      "word": "container",
      "pos": "n.",
      "def": "容器(如箱、盒、罐等)"
    },
    {
      "word": "content",
      "pos": "n., a.",
      "def": "滿足的，滿意的 vt.滿足；滿足"
    },
    {
      "word": "content(s)",
      "pos": "n.",
      "def": "含量；內容"
    },
    {
      "word": "contentment",
      "pos": "a.",
      "def": "滿足，知足；滿意"
    },
    {
      "word": "contest",
      "pos": "n.",
      "def": "爭奪，競爭，比賽"
    },
    {
      "word": "context n.【",
      "pos": "",
      "def": "語】上下文"
    },
    {
      "word": "continual",
      "pos": "a.",
      "def": "不間斷的，連續的"
    },
    {
      "word": "continuous",
      "pos": "a.",
      "def": "連續的，不斷的"
    },
    {
      "word": "contrary",
      "pos": "adj., n.",
      "def": "相反；相反的事物；相反的，對立的"
    },
    {
      "word": "contrast n.對比，對照",
      "pos": "vi., vt.",
      "def": "使對比，使對照"
    },
    {
      "word": "contribute",
      "pos": "vt.",
      "def": "vi.捐(款)；捐獻；投(稿)"
    },
    {
      "word": "contribution",
      "pos": "n.",
      "def": "貢獻；投稿"
    },
    {
      "word": "convenience",
      "pos": "n.",
      "def": "方便 ；便利設；施"
    },
    {
      "word": "convention",
      "pos": "n.",
      "def": "大會；全體與會者；慣例，習俗"
    },
    {
      "word": "conventional",
      "pos": "a.",
      "def": "會議的；慣例的"
    },
    {
      "word": "converse vi.【",
      "pos": "",
      "def": "書】交談"
    },
    {
      "word": "convey",
      "pos": "vt.",
      "def": "運送；傳遞"
    },
    {
      "word": "convince",
      "pos": "vt.",
      "def": "使信服；說服"
    },
    {
      "word": "cooperate",
      "pos": "vt.",
      "def": "合作，協作"
    },
    {
      "word": "cooperation",
      "pos": "n.",
      "def": "合作，協力；合作社"
    },
    {
      "word": "cooperative",
      "pos": "a.",
      "def": "合作的；合作社；的"
    },
    {
      "word": "cope",
      "pos": "vi.",
      "def": "對付，妥善處理"
    },
    {
      "word": "copper",
      "pos": "n.",
      "def": "銅"
    },
    {
      "word": "cord",
      "pos": "n.",
      "def": "細繩，粗線；【解】腱，韌帶"
    },
    {
      "word": "cork",
      "pos": "n.",
      "def": "軟木 ；軟木塞"
    },
    {
      "word": "correspond",
      "pos": "vi.",
      "def": "符合，一致；通；信"
    },
    {
      "word": "costume",
      "pos": "n.",
      "def": "戲裝"
    },
    {
      "word": "cottage",
      "pos": "n.",
      "def": "農舍，小屋"
    },
    {
      "word": "council",
      "pos": "n.",
      "def": "會議；地方議會"
    },
    {
      "word": "counter1",
      "pos": "n.",
      "def": "計算者；櫃臺"
    },
    {
      "word": "counter",
      "pos": "adj.",
      "def": "n.相反(的)；反對(的)"
    },
    {
      "word": "courageous",
      "pos": "a.",
      "def": "英勇的，勇敢的"
    },
    {
      "word": "courteous",
      "pos": "a.",
      "def": "殷勤的，謙恭的"
    },
    {
      "word": "courtesy",
      "pos": "n.",
      "def": "禮貌；殷勤，好意"
    },
    {
      "word": "crack vi.vt.(使)爆裂，(使)破裂",
      "pos": "n.",
      "def": "裂縫"
    },
    {
      "word": "craft",
      "pos": "n.",
      "def": "工藝，手藝；船；飛機"
    },
    {
      "word": "cram",
      "pos": "vt.",
      "def": "把…塞進 ；把…塞；滿；教"
    },
    {
      "word": "creation",
      "pos": "n.",
      "def": "創造；創作 ；創作品"
    },
    {
      "word": "creativity",
      "pos": "n.",
      "def": "創造力"
    },
    {
      "word": "cripple",
      "pos": "n.",
      "def": "跛子；殘廢的人 vt.使…殘；廢【口】(為應考)死記硬背；填鴨式地"
    },
    {
      "word": "critic",
      "pos": "n.",
      "def": "批評家，評論家"
    },
    {
      "word": "critical",
      "pos": "a.",
      "def": "緊要的，關鍵危急的；批評的；愛挑剔的"
    },
    {
      "word": "criticism",
      "pos": "n.",
      "def": "批評；評論"
    },
    {
      "word": "criticize",
      "pos": "vt.",
      "def": "vi.批評；批判"
    },
    {
      "word": "cruelty",
      "pos": "n.",
      "def": "殘酷，殘忍"
    },
    {
      "word": "crush",
      "pos": "n.",
      "def": "vt.vi.壓碎，壓壞；碾碎 n.迷；戀"
    },
    {
      "word": "cube",
      "pos": "n.",
      "def": "立方體；方塊；三次方"
    },
    {
      "word": "cucumber",
      "pos": "n.",
      "def": "黃瓜，胡瓜"
    },
    {
      "word": "cue n.【",
      "pos": "",
      "def": "戲】提示；信號 vt.給…暗示"
    },
    {
      "word": "cunning",
      "pos": "a.",
      "def": "狡猾的，奸詐的"
    },
    {
      "word": "curiosity",
      "pos": "n.",
      "def": "好奇心"
    },
    {
      "word": "curl n.卷毛，卷髮",
      "pos": "vt.",
      "def": "vi.捲曲"
    },
    {
      "word": "curse",
      "pos": "n.",
      "def": "vt.vi.詛咒，咒罵"
    },
    {
      "word": "curve n.曲線，弧線；【棒】曲球",
      "pos": "vi.",
      "def": "彎曲"
    },
    {
      "word": "cushion",
      "pos": "n.",
      "def": "坐墊；靠墊；避震器"
    },
    {
      "word": "damn",
      "pos": "vt.",
      "def": "罵…該死，咒罵 int.該死"
    },
    {
      "word": "damp a.有濕氣的；潮濕的",
      "pos": "vt.",
      "def": "vi.使潮濕"
    },
    {
      "word": "deadline",
      "pos": "n.",
      "def": "截止期限，最後限期"
    },
    {
      "word": "declare",
      "pos": "vt.",
      "def": "宣布，宣告；聲明； 申報(納稅品等)"
    },
    {
      "word": "decoration",
      "pos": "n.",
      "def": "裝飾 ；裝飾品"
    },
    {
      "word": "decrease",
      "pos": "n.",
      "def": "減；減少，減小"
    },
    {
      "word": "defeat",
      "pos": "vt.",
      "def": "n.戰勝，擊敗；失敗，挫敗"
    },
    {
      "word": "defend",
      "pos": "vt.",
      "def": "防禦；保衛；為…辯護；【體】防守"
    },
    {
      "word": "defense",
      "pos": "n.",
      "def": "防禦，保衛；辯護；【體】；防守"
    },
    {
      "word": "defensible",
      "pos": "a.",
      "def": "可防禦的；可辯護；的"
    },
    {
      "word": "defensive",
      "pos": "a.",
      "def": "防禦的；保護的；保；衛的"
    },
    {
      "word": "definite",
      "pos": "a.",
      "def": "明確的，確切的"
    },
    {
      "word": "delicate",
      "pos": "a.",
      "def": "易碎的；嬌貴的；精美；的"
    },
    {
      "word": "delight n.欣喜 ；樂事",
      "pos": "vt.",
      "def": "使…高興"
    },
    {
      "word": "delightful",
      "pos": "a.",
      "def": "令人愉快的，令人高；興的"
    },
    {
      "word": "demand",
      "pos": "n.",
      "def": "vt.要求，請求"
    },
    {
      "word": "demonstrate",
      "pos": "",
      "def": "用實驗、實例；等)證明；威"
    },
    {
      "word": "demonstration n.(",
      "pos": "",
      "def": "用實驗，；實例等)；證明；示範；示威"
    },
    {
      "word": "dense",
      "pos": "a.",
      "def": "密集的，稠密的"
    },
    {
      "word": "depart vi.【",
      "pos": "",
      "def": "書】起程，出發；離開，；離去"
    },
    {
      "word": "departure",
      "pos": "n.",
      "def": "離開；出發，起程"
    },
    {
      "word": "dependable",
      "pos": "a.",
      "def": "可靠的；可信任的"
    },
    {
      "word": "dependent",
      "pos": "a.",
      "def": "依靠(賴)的；取決；於…的"
    },
    {
      "word": "depress",
      "pos": "vt.",
      "def": "使…沮喪，使…消沉；使…蕭條"
    },
    {
      "word": "depression",
      "pos": "n.",
      "def": "沮喪，消沉；不景氣，；蕭條"
    },
    {
      "word": "deserve",
      "pos": "vt.",
      "def": "應受，該得"
    },
    {
      "word": "desperate",
      "pos": "a.",
      "def": "情急拼命的；極度渴；望的"
    },
    {
      "word": "despite",
      "pos": "prep., n.",
      "def": "惡意；怨恨；不管，儘管"
    },
    {
      "word": "destruction",
      "pos": "n.",
      "def": "破壞；毀滅"
    },
    {
      "word": "detective",
      "pos": "n.",
      "def": "偵探；私家偵探 a.偵；探的"
    },
    {
      "word": "determination",
      "pos": "n.",
      "def": "堅定；果斷；決心"
    },
    {
      "word": "device",
      "pos": "n.",
      "def": "設備，儀器，裝置"
    },
    {
      "word": "devise",
      "pos": "vt.",
      "def": "設計；發明；策劃"
    },
    {
      "word": "devote",
      "pos": "vt.",
      "def": "將…奉獻(給)"
    },
    {
      "word": "diaper n.【",
      "pos": "",
      "def": "美】尿布"
    },
    {
      "word": "differ",
      "pos": "vi.",
      "def": "不同，相異"
    },
    {
      "word": "digest1",
      "pos": "vt.",
      "def": "消化(食物)；領悟，融；會貫通"
    },
    {
      "word": "digest2",
      "pos": "n.",
      "def": "摘要；文摘"
    },
    {
      "word": "digestion",
      "pos": "n.",
      "def": "消化；(知識等的)；領悟"
    },
    {
      "word": "digital",
      "pos": "n., a.",
      "def": "數位的；數字的；數字顯示式電子表(或鐘)"
    },
    {
      "word": "dignity",
      "pos": "n.",
      "def": "尊嚴；莊嚴"
    },
    {
      "word": "diligence",
      "pos": "n.",
      "def": "勤勉，勤奮"
    },
    {
      "word": "diploma",
      "pos": "n.",
      "def": "畢業文憑，學位證書"
    },
    {
      "word": "diplomat",
      "pos": "n.",
      "def": "外交官"
    },
    {
      "word": "disadvantage",
      "pos": "n.",
      "def": "不利；損害"
    },
    {
      "word": "disaster",
      "pos": "n.",
      "def": "災害，災難，不幸"
    },
    {
      "word": "discipline",
      "pos": "vt., n.",
      "def": "紀律，風紀；教養；訓練，訓導"
    },
    {
      "word": "disconnect",
      "pos": "vt.",
      "def": "使分離，分開"
    },
    {
      "word": "discourage",
      "pos": "vt.",
      "def": "使洩氣；勸阻"
    },
    {
      "word": "discouragement",
      "pos": "n.",
      "def": "沮喪，氣；餒 ；事物 使人洩氣的"
    },
    {
      "word": "disguise",
      "pos": "n.",
      "def": "vt.假扮，偽裝"
    },
    {
      "word": "disgust",
      "pos": "n.",
      "def": "作嘔；厭惡 vt.使作嘔"
    },
    {
      "word": "dismiss",
      "pos": "vt.",
      "def": "讓…離開；解散；不考；慮"
    },
    {
      "word": "disorder",
      "pos": "n.",
      "def": "混亂，無秩序"
    },
    {
      "word": "dispute",
      "pos": "n.",
      "def": "vt.vi.爭論；爭執"
    },
    {
      "word": "distinct",
      "pos": "adj.",
      "def": "與其他不同的，有區別；的"
    },
    {
      "word": "distinguish",
      "pos": "vt.",
      "def": "vi.區別；識別"
    },
    {
      "word": "distinguished",
      "pos": "a.",
      "def": "卓越的；著名的"
    },
    {
      "word": "distribute",
      "pos": "vt.",
      "def": "分發；分配"
    },
    {
      "word": "distribution",
      "pos": "n.",
      "def": "分發；配給物"
    },
    {
      "word": "district",
      "pos": "n.",
      "def": "區，行政區；地區，區域"
    },
    {
      "word": "disturb",
      "pos": "vt.",
      "def": "vi.妨礙，打擾"
    },
    {
      "word": "divine",
      "pos": "a.",
      "def": "神的，神性的"
    },
    {
      "word": "divorce",
      "pos": "n.",
      "def": "vt.vi.離婚"
    },
    {
      "word": "dominant",
      "pos": "a.",
      "def": "佔優勢的，支配的"
    },
    {
      "word": "dominate",
      "pos": "vt.",
      "def": "vi.支配，統治，控；制"
    },
    {
      "word": "dormitory",
      "pos": "n.",
      "def": "學生宿舍(dorm)"
    },
    {
      "word": "download",
      "pos": "vt.",
      "def": "下載"
    },
    {
      "word": "doze",
      "pos": "vi.",
      "def": "n.打瞌睡，打盹"
    },
    {
      "word": "draft",
      "pos": "vt., n.",
      "def": "草稿 ；【美】徵兵；起草；徵兵"
    },
    {
      "word": "dread",
      "pos": "vt., n.",
      "def": "vi.懼怕；擔心；懼怕；擔心"
    },
    {
      "word": "drift",
      "pos": "vi.",
      "def": "vt.n.漂，漂流"
    },
    {
      "word": "drill",
      "pos": "vt., n.",
      "def": "vi.鑽(孔)；在…上鑽孔；操練；訓練；鑽，鑽頭；鑽床 ；操練；訓；練"
    },
    {
      "word": "durable",
      "pos": "a.",
      "def": "經久的，耐用的"
    },
    {
      "word": "dusty",
      "pos": "a.",
      "def": "滿是灰塵的，灰塵覆蓋的"
    },
    {
      "word": "DVD",
      "pos": "n.",
      "def": "DVD 碟片(digital video disk)"
    },
    {
      "word": "dye n.染料，染色",
      "pos": "vt.",
      "def": "vi.染(色)"
    },
    {
      "word": "dynamic",
      "pos": "a.",
      "def": "力學的；有活力的"
    },
    {
      "word": "dynasty",
      "pos": "n.",
      "def": "王朝；朝代"
    },
    {
      "word": "earnest",
      "pos": "a.",
      "def": "認真的；誠摯的 n.認真，；誠摯"
    },
    {
      "word": "earphone",
      "pos": "n.",
      "def": "耳機；聽筒"
    },
    {
      "word": "economic",
      "pos": "a.",
      "def": "經濟上的；合算的"
    },
    {
      "word": "economical",
      "pos": "a.",
      "def": "經濟的，節約的"
    },
    {
      "word": "economics",
      "pos": "n.",
      "def": "經濟學"
    },
    {
      "word": "economist",
      "pos": "n.",
      "def": "經濟學者；節儉的；人"
    },
    {
      "word": "economy",
      "pos": "n.",
      "def": "經濟(情況)；節約；經濟艙"
    },
    {
      "word": "efficiency",
      "pos": "n.",
      "def": "效率；效能"
    },
    {
      "word": "elastic",
      "pos": "n., a.",
      "def": "有彈性的，有彈力的；橡皮帶，鬆緊帶"
    },
    {
      "word": "electrician",
      "pos": "n.",
      "def": "電工"
    },
    {
      "word": "electronics",
      "pos": "n.",
      "def": "電子學"
    },
    {
      "word": "elegant",
      "pos": "a.",
      "def": "雅緻的，優美的"
    },
    {
      "word": "elementary",
      "pos": "a.",
      "def": "基本的；初級的，；基礎的"
    },
    {
      "word": "eliminate",
      "pos": "vt.",
      "def": "排除]；(比賽中)淘汰"
    },
    {
      "word": "elsewhere",
      "pos": "adv.",
      "def": "在別處；往別處"
    },
    {
      "word": "e-mail/email n.【",
      "pos": "",
      "def": "電腦】電子郵件"
    },
    {
      "word": "(electronic mail)",
      "pos": "",
      "def": ""
    },
    {
      "word": "embarrass",
      "pos": "vt.",
      "def": "使窘；使不好意思"
    },
    {
      "word": "embarrassment",
      "pos": "n.",
      "def": "窘；難堪；使人為難的人(或事；物)"
    },
    {
      "word": "embassy n.(",
      "pos": "",
      "def": "常大寫)大使館"
    },
    {
      "word": "emerge",
      "pos": "vi.",
      "def": "浮現；出現[(+from/out"
    },
    {
      "word": "of)]",
      "pos": "",
      "def": ""
    },
    {
      "word": "emotional",
      "pos": "a.",
      "def": "感情(上)的；易動情；的"
    },
    {
      "word": "emphasis",
      "pos": "n.",
      "def": "強調，重視，重點"
    },
    {
      "word": "empire",
      "pos": "n.",
      "def": "帝國 ；大企業"
    },
    {
      "word": "enclose",
      "pos": "vt.",
      "def": "圍住；圈起"
    },
    {
      "word": "encounter",
      "pos": "n.",
      "def": "vt.遭遇(敵人)；遇到；(困難，危險等)；意外地遇見(朋友等)"
    },
    {
      "word": "endanger",
      "pos": "vt.",
      "def": "危及；使遭到危險"
    },
    {
      "word": "endure",
      "pos": "vt.",
      "def": "忍耐，忍受；容忍"
    },
    {
      "word": "enforce",
      "pos": "vt.",
      "def": "實施，執行"
    },
    {
      "word": "enforcement",
      "pos": "n.",
      "def": "實施，執行；強；制"
    },
    {
      "word": "engineering",
      "pos": "n.",
      "def": "工程；工程學"
    },
    {
      "word": "enlarge",
      "pos": "vt.",
      "def": "放大；擴大；擴展"
    },
    {
      "word": "enlargement",
      "pos": "n.",
      "def": "放大；擴大；擴展"
    },
    {
      "word": "enormous",
      "pos": "a.",
      "def": "巨大的，龐大的"
    },
    {
      "word": "entertain",
      "pos": "vt.",
      "def": "娛樂；招待，款待"
    },
    {
      "word": "entertainment",
      "pos": "n.",
      "def": "娛樂；餘興；演藝"
    },
    {
      "word": "enthusiasm",
      "pos": "n.",
      "def": "熱情，熱忱"
    },
    {
      "word": "envious",
      "pos": "a.",
      "def": "嫉妒的；羨慕的"
    },
    {
      "word": "equality",
      "pos": "n.",
      "def": "相等；平等；【數】等；式"
    },
    {
      "word": "equip",
      "pos": "vt.",
      "def": "裝備，配備"
    },
    {
      "word": "equipment",
      "pos": "n.",
      "def": "配備，裝備；設備；器械"
    },
    {
      "word": "era",
      "pos": "n.",
      "def": "時代；年代"
    },
    {
      "word": "errand",
      "pos": "n.",
      "def": "差事，差使"
    },
    {
      "word": "escalator",
      "pos": "n.",
      "def": "電扶梯"
    },
    {
      "word": "essay",
      "pos": "n.",
      "def": "論說文；散文"
    },
    {
      "word": "essential",
      "pos": "a.",
      "def": "必要的，不可缺的"
    },
    {
      "word": "establish",
      "pos": "vt.",
      "def": "建立，設立；確定，；證實"
    },
    {
      "word": "establishment",
      "pos": "n.",
      "def": "建立，設立；建立的機構，公司"
    },
    {
      "word": "estimate",
      "pos": "vi., vt.",
      "def": "n.估計，估量"
    },
    {
      "word": "evaluate",
      "pos": "vt.",
      "def": "估…的價；對…評價"
    },
    {
      "word": "evaluation",
      "pos": "n.",
      "def": "估價，評價；估；算"
    },
    {
      "word": "eve n.(",
      "pos": "",
      "def": "通常大寫)(節日等的)前夜，前夕"
    },
    {
      "word": "eventual",
      "pos": "a.",
      "def": "最終發生的；最後的"
    },
    {
      "word": "evidence",
      "pos": "n.",
      "def": "證據；證詞；證人；物證"
    },
    {
      "word": "evident",
      "pos": "a.",
      "def": "明顯的；明白的"
    },
    {
      "word": "exaggerate",
      "pos": "vt.",
      "def": "vi.誇張，誇大"
    },
    {
      "word": "examinee",
      "pos": "n.",
      "def": "應試者；受檢查者"
    },
    {
      "word": "examiner",
      "pos": "n.",
      "def": "主考人；檢查人；審查員"
    },
    {
      "word": "exception",
      "pos": "n.",
      "def": "例外 ；除外，除去"
    },
    {
      "word": "exhaust",
      "pos": "n., vt.",
      "def": "用完，耗盡；使精疲力盡；排出；排氣(水)；排出的氣"
    },
    {
      "word": "exhibit",
      "pos": "n.",
      "def": "vt.展示，陳列；(在法庭)；提出(證據)；展示品；【律】物證；【美】展示會"
    },
    {
      "word": "expand",
      "pos": "vt.",
      "def": "vi.展開，張開(帆，翅)；使膨脹"
    },
    {
      "word": "expansion",
      "pos": "n.",
      "def": "擴展；擴張；膨脹"
    },
    {
      "word": "explanation",
      "pos": "n.",
      "def": "說明，解釋"
    },
    {
      "word": "explore",
      "pos": "vt.",
      "def": "vi.探測；探勘；探索"
    },
    {
      "word": "explosion",
      "pos": "n.",
      "def": "爆發；爆炸；擴張，；劇增"
    },
    {
      "word": "explosive",
      "pos": "a.",
      "def": "爆炸(性)的 n.爆炸；物；炸藥"
    },
    {
      "word": "expose",
      "pos": "vt.",
      "def": "使暴露於；使接觸到；揭；發"
    },
    {
      "word": "exposure",
      "pos": "n.",
      "def": "暴露；暴曬 ；揭發"
    },
    {
      "word": "extend",
      "pos": "vt.",
      "def": "vi.延長，延伸；擴大，；擴展"
    },
    {
      "word": "extent",
      "pos": "n.",
      "def": "廣度，寬度；程度；限度；範圍"
    },
    {
      "word": "facial",
      "pos": "a.",
      "def": "臉的；面部的 n.臉部按摩"
    },
    {
      "word": "facility",
      "pos": "n.",
      "def": "能力，技能 ；設備，；設施"
    },
    {
      "word": "faithful",
      "pos": "a.",
      "def": "忠實的；忠誠的"
    },
    {
      "word": "fame",
      "pos": "n.",
      "def": "聲譽，名望"
    },
    {
      "word": "fantastic a.【",
      "pos": "",
      "def": "口】極好的，了不；起的；難以置信的，驚人的"
    },
    {
      "word": "fantasy",
      "pos": "n.",
      "def": "空想；幻想；夢想；空；想的產物"
    },
    {
      "word": "farewell int.",
      "pos": "adj.",
      "def": "再會！別了! n.告別；告別的"
    },
    {
      "word": "fatal",
      "pos": "a.",
      "def": "命運的；致命的，生死攸關的"
    },
    {
      "word": "favorable",
      "pos": "a.",
      "def": "贊同的；有利的，適；合的"
    },
    {
      "word": "feast",
      "pos": "n.",
      "def": "盛宴，筵席"
    },
    {
      "word": "ferry",
      "pos": "n.",
      "def": "渡輪"
    },
    {
      "word": "fertile a.(",
      "pos": "",
      "def": "動植物)多產的；(土地)肥沃；的"
    },
    {
      "word": "fetch",
      "pos": "vt.",
      "def": "去拿…；(去)拿來"
    },
    {
      "word": "fiction n.(",
      "pos": "",
      "def": "總稱)小說 ；虛構，想；像"
    },
    {
      "word": "fierce",
      "pos": "adj.",
      "def": "兇猛的；殘酷的；猛烈的，激；烈的"
    },
    {
      "word": "finance",
      "pos": "n.",
      "def": "財政；金融；財政學"
    },
    {
      "word": "financial",
      "pos": "a.",
      "def": "財政的；金融的；金；融界的"
    },
    {
      "word": "firecracker",
      "pos": "n.",
      "def": "爆竹，鞭炮"
    },
    {
      "word": "fireplace",
      "pos": "n.",
      "def": "壁爐"
    },
    {
      "word": "flatter",
      "pos": "vt.",
      "def": "諂媚；奉承"
    },
    {
      "word": "flee",
      "pos": "vi.",
      "def": "vt.逃，逃走"
    },
    {
      "word": "flexible",
      "pos": "a.",
      "def": "可彎曲的；有彈性的；可變通的"
    },
    {
      "word": "fluent",
      "pos": "a.",
      "def": "流利的，流暢的"
    },
    {
      "word": "flunk",
      "pos": "vt.",
      "def": "vi.使(某人)不及格；通不過；(考試等)"
    },
    {
      "word": "flush",
      "pos": "vt., n., vi.",
      "def": "湧；湧流；(臉)發紅；用水沖洗；使(臉等)漲紅；使發紅；沖洗；紅光；紅暈"
    },
    {
      "word": "foam",
      "pos": "n.",
      "def": "泡沫；滅火泡沫 vi.起泡；沫"
    },
    {
      "word": "forbid",
      "pos": "vt.",
      "def": "禁止，不許"
    },
    {
      "word": "forecast",
      "pos": "n.",
      "def": "vt.vi.預測，預報"
    },
    {
      "word": "formation",
      "pos": "n.",
      "def": "形成，構成；構成物；隊形"
    },
    {
      "word": "formula",
      "pos": "n.",
      "def": "慣用語句；慣例；配方，；處方；【數】公式；方程式；【化】分子式"
    },
    {
      "word": "fort",
      "pos": "n.",
      "def": "堡壘，要塞"
    },
    {
      "word": "fortunate",
      "pos": "a.",
      "def": "幸運的，僥倖的"
    },
    {
      "word": "fossil",
      "pos": "n.",
      "def": "化石；頑固不化的人"
    },
    {
      "word": "foundation",
      "pos": "n.",
      "def": "建立，創辦；基礎；基本；原則；基金會；(建築物的)地基"
    },
    {
      "word": "founder",
      "pos": "n.",
      "def": "創立者；奠基者"
    },
    {
      "word": "fragrance",
      "pos": "n.",
      "def": "芬芳；香味；香氣"
    },
    {
      "word": "fragrant",
      "pos": "a.",
      "def": "香的，芳香的"
    },
    {
      "word": "frame",
      "pos": "n.",
      "def": "架構，骨架；結構；框架，；框子"
    },
    {
      "word": "freeway n.【",
      "pos": "",
      "def": "美】高速公路"
    },
    {
      "word": "frequency",
      "pos": "n.",
      "def": "頻率，次數"
    },
    {
      "word": "freshman n.(",
      "pos": "",
      "def": "大學等的)一年級生；新人"
    },
    {
      "word": "frost n.霜",
      "pos": "vt.",
      "def": "vi.結霜"
    },
    {
      "word": "frown",
      "pos": "vi.",
      "def": "vt.n.皺眉；表示不滿"
    },
    {
      "word": "frustration",
      "pos": "n.",
      "def": "挫折，失敗"
    },
    {
      "word": "fuel n.燃料",
      "pos": "vt.",
      "def": "vi.對…供給燃料；激；起；刺激"
    },
    {
      "word": "fulfill",
      "pos": "vt.",
      "def": "執行(命令等)；履行(諾言；等)；完成(任務等)；實現"
    },
    {
      "word": "fulfillment",
      "pos": "n.",
      "def": "完成，履行；實現"
    },
    {
      "word": "functional",
      "pos": "a.",
      "def": "機能的"
    },
    {
      "word": "fundamental",
      "pos": "a.",
      "def": "基礎的；根本；的"
    },
    {
      "word": "funeral",
      "pos": "n.",
      "def": "葬禮；葬儀"
    },
    {
      "word": "furious",
      "pos": "adj.",
      "def": "狂怒的；狂暴的，猛烈；的"
    },
    {
      "word": "furnish",
      "pos": "vt.",
      "def": "給(房間)配置(傢俱等)；裝；備；供應"
    },
    {
      "word": "furthermore",
      "pos": "adv.",
      "def": "而且，此外"
    },
    {
      "word": "gallery",
      "pos": "n.",
      "def": "畫廊，美術館"
    },
    {
      "word": "gangster n.(",
      "pos": "",
      "def": "結成團伙的)歹徒，匪；盜,流氓"
    },
    {
      "word": "gaze",
      "pos": "vi.",
      "def": "n.凝視，注視，盯"
    },
    {
      "word": "gear",
      "pos": "n.",
      "def": "齒輪；傳動裝置；(汽車)排檔；工具；設備，裝置；(飛機的)起落架"
    },
    {
      "word": "gene n.【",
      "pos": "",
      "def": "生】基因，遺傳因子"
    },
    {
      "word": "generation",
      "pos": "n.",
      "def": "世代，一代；產；生,發生"
    },
    {
      "word": "generosity",
      "pos": "n.",
      "def": "寬宏大量；慷慨"
    },
    {
      "word": "genius",
      "pos": "n.",
      "def": "天資，天賦 ；天才，；英才"
    },
    {
      "word": "genuine",
      "pos": "a.",
      "def": "真的，非偽造的；真誠；的"
    },
    {
      "word": "germ",
      "pos": "n.",
      "def": "細菌；微生物"
    },
    {
      "word": "gifted",
      "pos": "a.",
      "def": "有天資的，有天賦的"
    },
    {
      "word": "gigantic",
      "pos": "adj.",
      "def": "巨大的；巨人的"
    },
    {
      "word": "giggle",
      "pos": "n.",
      "def": "vi 咯咯地笑；傻笑"
    },
    {
      "word": "ginger",
      "pos": "n.",
      "def": "薑；【口】精力，活力"
    },
    {
      "word": "glide",
      "pos": "n.",
      "def": "vt.vi.滑動，滑行"
    },
    {
      "word": "glimpse",
      "pos": "n.",
      "def": "vi.vt.瞥見；一瞥"
    },
    {
      "word": "globe",
      "pos": "n.",
      "def": "球；球狀物；地球儀"
    },
    {
      "word": "glorious",
      "pos": "a.",
      "def": "光榮的，榮耀的"
    },
    {
      "word": "goods",
      "pos": "n.",
      "def": "商品；貨物"
    },
    {
      "word": "grace",
      "pos": "n.",
      "def": "優美；優雅；(票據到期後的)；寬限 ；【宗】(飯前或飯後的)感恩祈禱 ；(神的)；恩典"
    },
    {
      "word": "graceful",
      "pos": "a.",
      "def": "優美的，雅緻的"
    },
    {
      "word": "gracious",
      "pos": "a.",
      "def": "親切的；和藹的；慈祥；的"
    },
    {
      "word": "graduation",
      "pos": "n.",
      "def": "畢業 ；畢業典；禮"
    },
    {
      "word": "grammar",
      "pos": "n.",
      "def": "文法"
    },
    {
      "word": "grammatical",
      "pos": "a.",
      "def": "文法的；文法正；確的"
    },
    {
      "word": "grapefruit",
      "pos": "n.",
      "def": "葡萄柚"
    },
    {
      "word": "grateful",
      "pos": "a.",
      "def": "感謝的，感激的"
    },
    {
      "word": "gratitude",
      "pos": "n.",
      "def": "感恩，感謝"
    },
    {
      "word": "grave1",
      "pos": "n.",
      "def": "墓穴；埋葬處"
    },
    {
      "word": "grave2",
      "pos": "a.",
      "def": "重大的；嚴重的；嚴肅的，；認真的"
    },
    {
      "word": "greasy",
      "pos": "a.",
      "def": "油汙的，油膩的；油滑的"
    },
    {
      "word": "greeting(s)",
      "pos": "n.",
      "def": "問候，招呼；(生日等；的)祝願詞"
    },
    {
      "word": "grief",
      "pos": "n.",
      "def": "悲痛，悲傷"
    },
    {
      "word": "grieve",
      "pos": "vt.",
      "def": "vi.(使)悲傷；(使)苦惱"
    },
    {
      "word": "grind",
      "pos": "vt.",
      "def": "vi.磨(碎)；碾(碎)"
    },
    {
      "word": "guarantee",
      "pos": "vt., n.",
      "def": "保證；商品保證；保；證書；保證；擔保"
    },
    {
      "word": "guilt",
      "pos": "n.",
      "def": "有罪；犯罪；過失；內疚"
    },
    {
      "word": "guilty",
      "pos": "a.",
      "def": "有罪的，犯…罪的"
    },
    {
      "word": "gulf",
      "pos": "n.",
      "def": "海灣"
    },
    {
      "word": "habitual",
      "pos": "a.",
      "def": "習慣的，習以為常的"
    },
    {
      "word": "halt",
      "pos": "n.",
      "def": "vt.vi.暫停，停止；終止"
    },
    {
      "word": "handwriting",
      "pos": "n.",
      "def": "筆跡；書寫；手；寫"
    },
    {
      "word": "harden",
      "pos": "vt.",
      "def": "vi.(使)變硬；(使)變堅固"
    },
    {
      "word": "hardship",
      "pos": "n.",
      "def": "艱難，困苦"
    },
    {
      "word": "hardware",
      "pos": "n.",
      "def": "金屬器件，五金器；具；【電腦】硬體"
    },
    {
      "word": "harmonica",
      "pos": "n.",
      "def": "口琴"
    },
    {
      "word": "harmony",
      "pos": "n.",
      "def": "和睦；和諧；和聲"
    },
    {
      "word": "harsh",
      "pos": "a.",
      "def": "粗糙的；刺耳的；澀口的；刺；鼻的"
    },
    {
      "word": "haste",
      "pos": "n.",
      "def": "急忙，迅速"
    },
    {
      "word": "hasten",
      "pos": "vt.",
      "def": "vi.催促；加速"
    },
    {
      "word": "hatred",
      "pos": "n.",
      "def": "憎恨，增惡；敵意"
    },
    {
      "word": "headphone(s)",
      "pos": "n.",
      "def": "頭戴式耳機"
    },
    {
      "word": "healthful",
      "pos": "a.",
      "def": "有益於健康的"
    },
    {
      "word": "helicopter",
      "pos": "n.",
      "def": "直升機"
    },
    {
      "word": "herd",
      "pos": "n.",
      "def": "畜群；牧群"
    },
    {
      "word": "hesitation",
      "pos": "n.",
      "def": "躊躇，猶豫"
    },
    {
      "word": "highly",
      "pos": "adv.",
      "def": "非常，很，高度地"
    },
    {
      "word": "homeland",
      "pos": "n.",
      "def": "祖國；故國；家鄉"
    },
    {
      "word": "honeymoon",
      "pos": "n.",
      "def": "蜜月(假期、旅行)"
    },
    {
      "word": "honorable",
      "pos": "a.",
      "def": "可尊敬的；高尚的；光榮的"
    },
    {
      "word": "hook",
      "pos": "n.",
      "def": "鉤，掛鉤，魚鉤；鉤拳；鉤射"
    },
    {
      "word": "hopeful",
      "pos": "a.",
      "def": "有希望的；有前途的"
    },
    {
      "word": "horizon",
      "pos": "n.",
      "def": "地平線；眼界；(知識、經驗的)範圍"
    },
    {
      "word": "horrify",
      "pos": "vt.",
      "def": "使恐懼，使驚懼"
    },
    {
      "word": "hose",
      "pos": "n.",
      "def": "軟管；(軟)水管"
    },
    {
      "word": "host",
      "pos": "vt., n.",
      "def": "主人；旅館老板；(廣播，電視；的)節目；主持人；【生】寄主，宿主；作…主人(或東道主)，主辦，主持"
    },
    {
      "word": "hostel n.(",
      "pos": "",
      "def": "青年)旅舍"
    },
    {
      "word": "household",
      "pos": "n.",
      "def": "一家人；家眷；家；庭"
    },
    {
      "word": "housewife",
      "pos": "n.",
      "def": "家庭主婦"
    },
    {
      "word": "housework",
      "pos": "n.",
      "def": "家事"
    },
    {
      "word": "humanity",
      "pos": "n.",
      "def": "人性；人道；(總稱)；人；人類；人文學科"
    },
    {
      "word": "humidity",
      "pos": "n.",
      "def": "濕氣，濕度"
    },
    {
      "word": "hurricane",
      "pos": "n.",
      "def": "颶風，暴風雨"
    },
    {
      "word": "hydrogen n.【",
      "pos": "",
      "def": "化】氫"
    },
    {
      "word": "iceberg",
      "pos": "n.",
      "def": "冰山；冷峻的人"
    },
    {
      "word": "identical",
      "pos": "a.",
      "def": "同一的；完全相同的；(雙胞)同卵的"
    },
    {
      "word": "identification/ID",
      "pos": "n.",
      "def": "認出；識別；身分證明；身分證"
    },
    {
      "word": "identify",
      "pos": "vt.",
      "def": "確認；識別 vi.認；同…"
    },
    {
      "word": "idiom",
      "pos": "n.",
      "def": "慣用語；成語"
    },
    {
      "word": "idle",
      "pos": "a.",
      "def": "閒置的；空閒的；懶惰的；無；所事事的"
    },
    {
      "word": "idol",
      "pos": "n.",
      "def": "偶像；受崇拜之人(或物)"
    },
    {
      "word": "ignorant",
      "pos": "a.",
      "def": "無知的，不學無術的；不知道的"
    },
    {
      "word": "illustrate",
      "pos": "",
      "def": "用圖，實例等)說明，；闡明"
    },
    {
      "word": "illustration",
      "pos": "n.",
      "def": "說明，圖示 ；實例；插圖"
    },
    {
      "word": "imaginable",
      "pos": "a.",
      "def": "可想像得到的"
    },
    {
      "word": "imaginary",
      "pos": "a.",
      "def": "想像中的；虛構；的"
    },
    {
      "word": "imaginative",
      "pos": "a.",
      "def": "有想像力的"
    },
    {
      "word": "imitate",
      "pos": "vt.",
      "def": "模仿"
    },
    {
      "word": "imitation",
      "pos": "n.",
      "def": "模仿，模擬 ；仿製品；贗品"
    },
    {
      "word": "immigrant n.(",
      "pos": "adj.",
      "def": "外來)移民，僑民；移入的"
    },
    {
      "word": "immigrate",
      "pos": "vi.",
      "def": "遷移；遷入"
    },
    {
      "word": "immigration",
      "pos": "n.",
      "def": "移居；【美】(總稱)(外來的)移民"
    },
    {
      "word": "impact",
      "pos": "vt., n.",
      "def": "vi.衝擊，撞擊；衝擊，撞擊，碰撞"
    },
    {
      "word": "imply",
      "pos": "vt.",
      "def": "暗指；暗示"
    },
    {
      "word": "impression",
      "pos": "n.",
      "def": "印象"
    },
    {
      "word": "incident",
      "pos": "n.",
      "def": "事件；事變 ；插曲"
    },
    {
      "word": "including",
      "pos": "prep.",
      "def": "包括；包含"
    },
    {
      "word": "indication",
      "pos": "n.",
      "def": "指示；指點；徵兆；跡象"
    },
    {
      "word": "industrialize",
      "pos": "vt.",
      "def": "vi.(使)工業化"
    },
    {
      "word": "infant",
      "pos": "n.",
      "def": "嬰兒"
    },
    {
      "word": "infect vt.【",
      "pos": "",
      "def": "醫】傳染；感染"
    },
    {
      "word": "infection",
      "pos": "n.",
      "def": "傳染；侵染"
    },
    {
      "word": "inflation",
      "pos": "n.",
      "def": "通貨膨脹 ；充氣；膨脹"
    },
    {
      "word": "influential",
      "pos": "a.",
      "def": "有影響力的；有權；勢的"
    },
    {
      "word": "information",
      "pos": "n.",
      "def": "消息；情報；資訊 ；詢問處"
    },
    {
      "word": "informative",
      "pos": "a.",
      "def": "教育性的；見聞；廣博的"
    },
    {
      "word": "ingredient n.(",
      "pos": "",
      "def": "烹調的)原料；(混合物的)組成部分"
    },
    {
      "word": "initial",
      "pos": "n., a.",
      "def": "開始的，最初的；(字的)起首字母"
    },
    {
      "word": "innocence",
      "pos": "n.",
      "def": "無罪；清白；天真無邪，；純真"
    },
    {
      "word": "input",
      "pos": "n.",
      "def": "vt.投入；輸入"
    },
    {
      "word": "insert",
      "pos": "vt.",
      "def": "插入；嵌入"
    },
    {
      "word": "inspection",
      "pos": "n.",
      "def": "檢查，檢驗"
    },
    {
      "word": "inspiration",
      "pos": "n.",
      "def": "靈感 ；鼓舞人心的人(或事物)"
    },
    {
      "word": "inspire",
      "pos": "vt.",
      "def": "vi.鼓舞，激勵"
    },
    {
      "word": "install",
      "pos": "vt.",
      "def": "安裝，設置"
    },
    {
      "word": "instinct",
      "pos": "n.",
      "def": "本能；天性 ；直；覺"
    },
    {
      "word": "instruct",
      "pos": "vt.",
      "def": "指示，命令；教授；訓；練"
    },
    {
      "word": "instructor",
      "pos": "n.",
      "def": "教員；指導者；【美】大學講師"
    },
    {
      "word": "insult vt.侮辱，羞辱",
      "pos": "n.",
      "def": ""
    },
    {
      "word": "insurance",
      "pos": "n.",
      "def": "保險；保險契約"
    },
    {
      "word": "intellectual",
      "pos": "n., a.",
      "def": "智力的；理智的；知識分子"
    },
    {
      "word": "intelligence",
      "pos": "n.",
      "def": "智慧；情報"
    },
    {
      "word": "intelligent",
      "pos": "a.",
      "def": "聰明的；明智的"
    },
    {
      "word": "intend",
      "pos": "vt.",
      "def": "想要；打算"
    },
    {
      "word": "intense",
      "pos": "a.",
      "def": "強烈的，劇烈的；熱情的"
    },
    {
      "word": "intensify",
      "pos": "vt.",
      "def": "vi.加強，增強"
    },
    {
      "word": "intensity n.(",
      "pos": "",
      "def": "思想、感情、活動等的)強烈； (電、熱、光、聲等的)強度"
    },
    {
      "word": "intensive",
      "pos": "a.",
      "def": "加強的；密集的"
    },
    {
      "word": "intention",
      "pos": "n.",
      "def": "意圖，意向，目的"
    },
    {
      "word": "interact",
      "pos": "vt.",
      "def": "vi.互動； 互相作用"
    },
    {
      "word": "interaction",
      "pos": "n.",
      "def": "互動； 互相作用"
    },
    {
      "word": "interfere",
      "pos": "vt.",
      "def": "vi.妨礙；衝突"
    },
    {
      "word": "intermediate",
      "pos": "a.",
      "def": "中間的，中等程；度的"
    },
    {
      "word": "Internet n.【",
      "pos": "",
      "def": "電腦】網際網路"
    },
    {
      "word": "(internet)",
      "pos": "",
      "def": ""
    },
    {
      "word": "interpret",
      "pos": "vt.",
      "def": "vi.解釋，說明，詮釋；口譯"
    },
    {
      "word": "interruption",
      "pos": "n.",
      "def": "中止；阻礙；干；擾"
    },
    {
      "word": "intimate",
      "pos": "a.",
      "def": "親密的，熟悉的"
    },
    {
      "word": "intonation",
      "pos": "n.",
      "def": "語調；聲調"
    },
    {
      "word": "invade",
      "pos": "vt.",
      "def": "vi.侵入，侵略；侵犯"
    },
    {
      "word": "invasion",
      "pos": "n.",
      "def": "侵入，侵略；侵犯"
    },
    {
      "word": "invention",
      "pos": "n.",
      "def": "發明，創造 ；發明物，創作品"
    },
    {
      "word": "invest",
      "pos": "vt.",
      "def": "vi.投(資)"
    },
    {
      "word": "investment",
      "pos": "n.",
      "def": "投資；投資額"
    },
    {
      "word": "investigation",
      "pos": "n.",
      "def": "研究；調查"
    },
    {
      "word": "involve",
      "pos": "vt.",
      "def": "使捲入，連累；牽涉"
    },
    {
      "word": "involvement",
      "pos": "n.",
      "def": "捲入，連累；牽；涉"
    },
    {
      "word": "isolate",
      "pos": "vt.",
      "def": "vi.使孤立；使脫離"
    },
    {
      "word": "isolation",
      "pos": "n.",
      "def": "隔離；孤立；脫離；【物】；絕緣"
    },
    {
      "word": "itch",
      "pos": "n.",
      "def": "vi.vt.(發)癢"
    },
    {
      "word": "jealousy",
      "pos": "n.",
      "def": "妒忌；猜忌"
    },
    {
      "word": "junior",
      "pos": "n., a.",
      "def": "年紀較輕的；資淺的；(大學)三年級(生)的；地位較低的；較年少者；等級較低者；晚輩"
    },
    {
      "word": "keen",
      "pos": "a.",
      "def": "熱心的，熱衷的；渴望的；敏；銳的"
    },
    {
      "word": "knuckle",
      "pos": "n.",
      "def": "指(根)關節"
    },
    {
      "word": "labor",
      "pos": "vi., n.",
      "def": "勞動 ；勞工 ；陣痛；勞動"
    },
    {
      "word": "laboratory",
      "pos": "n.",
      "def": "實驗室，研究室"
    },
    {
      "word": "(lab)",
      "pos": "",
      "def": ""
    },
    {
      "word": "lag",
      "pos": "n.",
      "def": "vi.vt.走得慢；落後；延遲"
    },
    {
      "word": "landmark",
      "pos": "n.",
      "def": "地標，陸標；重大事件，里程碑"
    },
    {
      "word": "landscape n.(",
      "pos": "",
      "def": "陸上的)風景，景色"
    },
    {
      "word": "landslide",
      "pos": "n.",
      "def": "山崩；土石流"
    },
    {
      "word": "(mudslide)",
      "pos": "",
      "def": ""
    },
    {
      "word": "largely",
      "pos": "adv.",
      "def": "大部分；主要地"
    },
    {
      "word": "lately",
      "pos": "adv.",
      "def": "最近，近來"
    },
    {
      "word": "launch",
      "pos": "vt.",
      "def": "n.使(船)下水；發射；投擲；使升空"
    },
    {
      "word": "lawful",
      "pos": "adj.",
      "def": "合法的；法定的"
    },
    {
      "word": "lead2",
      "pos": "vi., vt.",
      "def": "n.引導；領(路) n.鉛"
    },
    {
      "word": "lean",
      "pos": "n.",
      "def": "vi.vt.傾斜；倚，靠"
    },
    {
      "word": "lean2",
      "pos": "a.",
      "def": "瘦的；無收成的"
    },
    {
      "word": "learned",
      "pos": "a.",
      "def": "有學問的，博學的"
    },
    {
      "word": "learning",
      "pos": "n.",
      "def": "學習；學問"
    },
    {
      "word": "lecture",
      "pos": "vi., n.",
      "def": "授課；演講；訓話，告誡；演講；講課 vt.給…講課；訓斥"
    },
    {
      "word": "lecturer",
      "pos": "n.",
      "def": "講演者"
    },
    {
      "word": "legend",
      "pos": "n.",
      "def": "傳說；傳奇故事；傳奇；人物"
    },
    {
      "word": "leisurely",
      "pos": "adv., a.",
      "def": "從容不迫的，悠閒的；從容不迫地，慢慢地"
    },
    {
      "word": "license",
      "pos": "n.",
      "def": "執照，牌照；許可證"
    },
    {
      "word": "lighten",
      "pos": "vt.",
      "def": "vi.變亮；發亮"
    },
    {
      "word": "limitation",
      "pos": "n.",
      "def": "限制，極限，限度"
    },
    {
      "word": "liquor",
      "pos": "n.",
      "def": "酒；含酒精飲料"
    },
    {
      "word": "literary",
      "pos": "a.",
      "def": "文學的，文藝的；文言；的"
    },
    {
      "word": "literature",
      "pos": "n.",
      "def": "文學；文獻"
    },
    {
      "word": "loan",
      "pos": "n.",
      "def": "借出；貸款"
    },
    {
      "word": "location",
      "pos": "n.",
      "def": "位置；場所，所在地"
    },
    {
      "word": "locker n.(",
      "pos": "",
      "def": "體育館等公共場所的)衣物；櫃"
    },
    {
      "word": "logic",
      "pos": "n.",
      "def": "邏輯；邏輯學"
    },
    {
      "word": "logical",
      "pos": "a.",
      "def": "合邏輯的；合理的"
    },
    {
      "word": "lotion n.(",
      "pos": "",
      "def": "化妝等用的)化妝水，護膚；液"
    },
    {
      "word": "lousy a.【",
      "pos": "",
      "def": "俚】不潔的；卑鄙的；討；厭的"
    },
    {
      "word": "loyal",
      "pos": "a.",
      "def": "忠誠的，忠心的"
    },
    {
      "word": "loyalty",
      "pos": "n.",
      "def": "忠誠；忠心"
    },
    {
      "word": "lunar",
      "pos": "a.",
      "def": "月的；月球上的；陰曆的"
    },
    {
      "word": "luxurious",
      "pos": "a.",
      "def": "奢侈的；驕奢淫逸的"
    },
    {
      "word": "luxury",
      "pos": "n.",
      "def": "奢侈，奢華 ；奢侈品"
    },
    {
      "word": "machinery",
      "pos": "n.",
      "def": "機器；機械"
    },
    {
      "word": "madam n.(",
      "pos": "",
      "def": "對婦女的敬稱)夫人，；太太"
    },
    {
      "word": "magnetic",
      "pos": "adj.",
      "def": "磁鐵的；磁性的，；有魅力的"
    },
    {
      "word": "magnificent",
      "pos": "a.",
      "def": "壯麗的，宏偉；的"
    },
    {
      "word": "makeup1",
      "pos": "n.",
      "def": "虛構"
    },
    {
      "word": "makeup2",
      "pos": "n.",
      "def": "化妝品；補充；補考"
    },
    {
      "word": "manual",
      "pos": "n.",
      "def": "手冊，簡介 a.手的；手工的"
    },
    {
      "word": "manufacture",
      "pos": "vt.",
      "def": "vi.(大量)製；造，加工"
    },
    {
      "word": "manufacturer",
      "pos": "n.",
      "def": "製造業者，；廠商"
    },
    {
      "word": "marathon n.【",
      "pos": "",
      "def": "體】(可大寫)馬拉；松賽跑"
    },
    {
      "word": "margin",
      "pos": "n.",
      "def": "邊，邊沿，邊緣"
    },
    {
      "word": "maturity",
      "pos": "n.",
      "def": "成熟；完善"
    },
    {
      "word": "maximum",
      "pos": "adj., n.",
      "def": "最大量，最大數；最大的；最多的"
    },
    {
      "word": "measure2",
      "pos": "n., vt.",
      "def": "測量；計量；措施；手段；方法"
    },
    {
      "word": "mechanic",
      "pos": "n.",
      "def": "機械工，技工"
    },
    {
      "word": "mechanical",
      "pos": "a.",
      "def": "機械的，用機械的"
    },
    {
      "word": "memorable",
      "pos": "a.",
      "def": "值得懷念的；難忘；的"
    },
    {
      "word": "memorial",
      "pos": "n.",
      "def": "紀念物；紀念碑；紀；念館"
    },
    {
      "word": "mercy",
      "pos": "n.",
      "def": "慈悲，憐憫；仁慈，寬容"
    },
    {
      "word": "mere",
      "pos": "a.",
      "def": "僅僅的，只不過的"
    },
    {
      "word": "merit",
      "pos": "n.",
      "def": "長處，優點 ；功績，功勞"
    },
    {
      "word": "messenger",
      "pos": "n.",
      "def": "送信人；(電報郵件；的)信差"
    },
    {
      "word": "messy",
      "pos": "a.",
      "def": "凌亂的； 雜亂的； 邋遢的"
    },
    {
      "word": "microscope",
      "pos": "n.",
      "def": "顯微鏡"
    },
    {
      "word": "mild",
      "pos": "a.",
      "def": "溫和的，溫柔的"
    },
    {
      "word": "mineral",
      "pos": "n.",
      "def": "礦物；礦泉水 a.礦物的"
    },
    {
      "word": "minimum",
      "pos": "adj., n.",
      "def": "最小量，最小數；最小的，最少的，最；低的"
    },
    {
      "word": "minister",
      "pos": "n.",
      "def": "部長；大臣；牧師"
    },
    {
      "word": "ministry n.(",
      "pos": "",
      "def": "常大寫)(政府的)部"
    },
    {
      "word": "mischief",
      "pos": "n.",
      "def": "頑皮，淘氣；胡鬧"
    },
    {
      "word": "miserable",
      "pos": "a.",
      "def": "不幸的；悲哀的"
    },
    {
      "word": "misfortune",
      "pos": "n.",
      "def": "不幸 ；不幸的；事"
    },
    {
      "word": "mislead",
      "pos": "vt.",
      "def": "誤導；把…引入歧途"
    },
    {
      "word": "misunderstand",
      "pos": "vt.",
      "def": "誤會；曲；解"
    },
    {
      "word": "moderate",
      "pos": "a.",
      "def": "適度的；有節制的；溫和的"
    },
    {
      "word": "modest",
      "pos": "a.",
      "def": "謙虛的，審慎的"
    },
    {
      "word": "modesty",
      "pos": "n.",
      "def": "謙遜，虛心"
    },
    {
      "word": "monitor",
      "pos": "vt., n.",
      "def": "監視器；(學校的)班長，；級長；監控；監聽"
    },
    {
      "word": "monthly",
      "pos": "n., a.",
      "def": "每月的；每月一次的adv.每月；月刊"
    },
    {
      "word": "monument",
      "pos": "n.",
      "def": "紀念碑，紀念塔，；紀念館"
    },
    {
      "word": "moreover",
      "pos": "adv.",
      "def": "並且，加之，此外"
    },
    {
      "word": "mostly",
      "pos": "adv.",
      "def": "大多數地，大部分地"
    },
    {
      "word": "motivate",
      "pos": "vt.",
      "def": "給…動機；刺激；激；發"
    },
    {
      "word": "motivation",
      "pos": "n.",
      "def": "動機；刺激；推；動"
    },
    {
      "word": "mountainous",
      "pos": "a.",
      "def": "多山的；有山的"
    },
    {
      "word": "mow",
      "pos": "vt.",
      "def": "vi.(用鐮刀等)刈(草等)"
    },
    {
      "word": "MTV",
      "pos": "n.",
      "def": "音樂電視 (= Music Television)"
    },
    {
      "word": "muddy",
      "pos": "a.",
      "def": "多爛泥的；泥濘的"
    },
    {
      "word": "multiple",
      "pos": "a.",
      "def": "複合的；多樣的"
    },
    {
      "word": "murderer",
      "pos": "n.",
      "def": "謀殺犯，兇手"
    },
    {
      "word": "murmur",
      "pos": "n.",
      "def": "低語聲；輕柔持續的聲；音"
    },
    {
      "word": "mustache",
      "pos": "n.",
      "def": "髭，小鬍子"
    },
    {
      "word": "mutual",
      "pos": "a.",
      "def": "相互的，彼此的；共有；(同)的"
    },
    {
      "word": "mysterious",
      "pos": "a.",
      "def": "神祕的；不可思議；的"
    },
    {
      "word": "namely",
      "pos": "adv.",
      "def": "即，那就是"
    },
    {
      "word": "nationality",
      "pos": "n.",
      "def": "國籍"
    },
    {
      "word": "nearsighted",
      "pos": "a.",
      "def": "近視的；目光短淺；的"
    },
    {
      "word": "needy",
      "pos": "a.",
      "def": "貧窮的"
    },
    {
      "word": "neglect",
      "pos": "vt.",
      "def": "n.忽視，忽略"
    },
    {
      "word": "negotiate",
      "pos": "vt.",
      "def": "vi.談判，協商"
    },
    {
      "word": "nevertheless",
      "pos": "adv.",
      "def": "不過，然而"
    },
    {
      "word": "= nonetheless",
      "pos": "",
      "def": ""
    },
    {
      "word": "nightmare",
      "pos": "n.",
      "def": "夢魘；惡夢"
    },
    {
      "word": "nonsense",
      "pos": "n.",
      "def": "胡說；胡鬧 int.胡說!；廢話！"
    },
    {
      "word": "noun n.【",
      "pos": "",
      "def": "文】名詞"
    },
    {
      "word": "nowadays",
      "pos": "adv.",
      "def": "現今，時下"
    },
    {
      "word": "nuclear",
      "pos": "a.",
      "def": "核心的，中心的；原子；核的"
    },
    {
      "word": "numerous",
      "pos": "a.",
      "def": "許多的，很多的"
    },
    {
      "word": "nursery",
      "pos": "n.",
      "def": "幼兒室，育兒室；苗圃；養魚場"
    },
    {
      "word": "nylon",
      "pos": "n.",
      "def": "尼龍"
    },
    {
      "word": "obedience",
      "pos": "n.",
      "def": "服從，順從"
    },
    {
      "word": "obedient",
      "pos": "a.",
      "def": "服從的，順從的"
    },
    {
      "word": "objection",
      "pos": "n.",
      "def": "反對；異議"
    },
    {
      "word": "objective1",
      "pos": "a.",
      "def": "客觀的，無偏見的"
    },
    {
      "word": "objective2",
      "pos": "n.",
      "def": "目的，目標"
    },
    {
      "word": "observation",
      "pos": "n.",
      "def": "觀察；觀測"
    },
    {
      "word": "obstacle",
      "pos": "n.",
      "def": "障礙(物)；妨礙"
    },
    {
      "word": "obtain",
      "pos": "vt.",
      "def": "得到，獲得"
    },
    {
      "word": "occasional",
      "pos": "a.",
      "def": "偶爾的，非經常的"
    },
    {
      "word": "occupation",
      "pos": "n.",
      "def": "佔領 ；職業"
    },
    {
      "word": "occupy",
      "pos": "vt.",
      "def": "佔領，佔據"
    },
    {
      "word": "offend",
      "pos": "vt.",
      "def": "冒犯；觸怒"
    },
    {
      "word": "offense",
      "pos": "n.",
      "def": "罪過；犯法(行為) ；進；攻，攻擊"
    },
    {
      "word": "offensive",
      "pos": "a.",
      "def": "冒犯的；進攻的"
    },
    {
      "word": "opera",
      "pos": "n.",
      "def": "歌劇 ；歌劇院 ；歌劇；藝術"
    },
    {
      "word": "operation",
      "pos": "n.",
      "def": "操作；運轉 ；手；術"
    },
    {
      "word": "oppose",
      "pos": "vt.",
      "def": "vi.反對；反抗"
    },
    {
      "word": "oral",
      "pos": "a.",
      "def": "口頭的，口述的"
    },
    {
      "word": "orbit n.(",
      "pos": "vt.",
      "def": "天體等的)運行軌道；環繞(天體等)的軌道運行"
    },
    {
      "word": "orchestra",
      "pos": "n.",
      "def": "管弦樂隊[C"
    },
    {
      "word": "organic",
      "pos": "a.",
      "def": "有機體的，生物的；器；官的"
    },
    {
      "word": "otherwise",
      "pos": "adv.",
      "def": "否則,不然；用別；的方法"
    },
    {
      "word": "outcome",
      "pos": "n.",
      "def": "結果；結局"
    },
    {
      "word": "outstanding",
      "pos": "a.",
      "def": "顯著的；傑出的"
    },
    {
      "word": "oval",
      "pos": "n.",
      "def": "卵形(物) a.橢圓形的"
    },
    {
      "word": "overcome",
      "pos": "vt.",
      "def": "vi.戰勝；克服"
    },
    {
      "word": "overlook",
      "pos": "vt.",
      "def": "vi.眺望，俯瞰；看漏，；忽略"
    },
    {
      "word": "overnight",
      "pos": "adj.",
      "def": "adv.整夜；一夜間，；突然"
    },
    {
      "word": "overtake",
      "pos": "vt.",
      "def": "vi.追上；趕上；超車"
    },
    {
      "word": "overthrow",
      "pos": "vt.",
      "def": "vi.打倒；推翻"
    },
    {
      "word": "oxygen n.【",
      "pos": "",
      "def": "化】氧；氧氣"
    },
    {
      "word": "pace",
      "pos": "n.",
      "def": "一步； 步速；速度 vi.踱步，；慢慢地走"
    },
    {
      "word": "panel",
      "pos": "n.",
      "def": "嵌(鑲)板；【機】控制板；專；門小組"
    },
    {
      "word": "parachute",
      "pos": "n.",
      "def": "降落傘"
    },
    {
      "word": "paragraph n.(",
      "pos": "",
      "def": "文章的)段，節"
    },
    {
      "word": "partial",
      "pos": "a.",
      "def": "部分的，局部的；不公平；的，偏袒的"
    },
    {
      "word": "participation",
      "pos": "n.",
      "def": "參加，參與"
    },
    {
      "word": "participle n.【",
      "pos": "",
      "def": "文】分詞"
    },
    {
      "word": "partnership",
      "pos": "n.",
      "def": "合夥(或合作)關；係"
    },
    {
      "word": "passive",
      "pos": "a.",
      "def": "被動的；消極的"
    },
    {
      "word": "pasta",
      "pos": "n.",
      "def": "麵糰；義大利麵(包括通心粉，；細麵條等)"
    },
    {
      "word": "pebble",
      "pos": "n.",
      "def": "小卵石"
    },
    {
      "word": "peculiar",
      "pos": "a.",
      "def": "奇怪的；乖癖的"
    },
    {
      "word": "pedal",
      "pos": "n.",
      "def": "踏板；腳蹬"
    },
    {
      "word": "peer n.(",
      "pos": "vt.",
      "def": "地位，能力等)同等的人；同輩；與…相比，與…同等"
    },
    {
      "word": "penalty",
      "pos": "n.",
      "def": "處罰；刑罰"
    },
    {
      "word": "percent",
      "pos": "n.",
      "def": "百分之一 ；百分率(per"
    },
    {
      "word": "cent)",
      "pos": "",
      "def": ""
    },
    {
      "word": "percentage",
      "pos": "n.",
      "def": "比例；部分"
    },
    {
      "word": "perfection",
      "pos": "n.",
      "def": "完美"
    },
    {
      "word": "perfume",
      "pos": "n.",
      "def": "香水；香料"
    },
    {
      "word": "permanent a.永久的，永恆的",
      "pos": "n.",
      "def": "燙髮"
    },
    {
      "word": "persuasion",
      "pos": "n.",
      "def": "說服，勸說"
    },
    {
      "word": "persuasive",
      "pos": "a.",
      "def": "勸說的；有說服力；的"
    },
    {
      "word": "pessimistic",
      "pos": "a.",
      "def": "悲觀的；悲觀主；義的"
    },
    {
      "word": "petal",
      "pos": "n.",
      "def": "花瓣"
    },
    {
      "word": "phenomenon",
      "pos": "n.",
      "def": "現象"
    },
    {
      "word": "(",
      "pos": "",
      "def": "複數：phenomena, phenomenons)"
    },
    {
      "word": "philosopher",
      "pos": "n.",
      "def": "哲學家"
    },
    {
      "word": "• philosophical",
      "pos": "a.",
      "def": "哲學的,冷；靜的,哲學上的"
    },
    {
      "word": "philosophy",
      "pos": "n.",
      "def": "哲學 ；人生觀；主義"
    },
    {
      "word": "photography",
      "pos": "n.",
      "def": "攝影術"
    },
    {
      "word": "physical",
      "pos": "a.",
      "def": "身體的，肉體的；物理(學)；的"
    },
    {
      "word": "physician",
      "pos": "n.",
      "def": "醫師；內科醫生"
    },
    {
      "word": "(doctor)",
      "pos": "",
      "def": ""
    },
    {
      "word": "physicist",
      "pos": "n.",
      "def": "物理學家"
    },
    {
      "word": "physics",
      "pos": "n.",
      "def": "物理學"
    },
    {
      "word": "pianist",
      "pos": "n.",
      "def": "鋼琴家；鋼琴演奏者"
    },
    {
      "word": "pickpocket",
      "pos": "n.",
      "def": "扒手"
    },
    {
      "word": "pioneer",
      "pos": "vt., n.",
      "def": "拓荒者；先驅者；開闢，倡導"
    },
    {
      "word": "pirate",
      "pos": "n.",
      "def": "海盜；劫掠者；剽竊者；盜"
    },
    {
      "word": "版者",
      "pos": "vt.",
      "def": "vi.(以海盜方式)掠奪；盜版"
    },
    {
      "word": "plentiful",
      "pos": "a.",
      "def": "豐富的，充足的"
    },
    {
      "word": "plot",
      "pos": "n.",
      "def": "陰謀；祕密計畫；(小說，戲劇；等的)情節"
    },
    {
      "word": "plural",
      "pos": "n.",
      "def": "複數 a.【文】複數的"
    },
    {
      "word": "p.m./pm/P.M./PM",
      "pos": "",
      "def": ""
    },
    {
      "word": "1.",
      "pos": "",
      "def": "下午；午後(= post meridiem)"
    },
    {
      "word": "2.",
      "pos": "",
      "def": "首相；內閣總理(= Prime Minister)"
    },
    {
      "word": "poisonous",
      "pos": "a.",
      "def": "有毒的；有害的"
    },
    {
      "word": "polish",
      "pos": "vt.",
      "def": "vi.磨光，擦亮 擦亮劑"
    },
    {
      "word": "pollution",
      "pos": "n.",
      "def": "汙染；磨光粉"
    },
    {
      "word": "popularity",
      "pos": "n.",
      "def": "普及；大眾化；聲望"
    },
    {
      "word": "portable",
      "pos": "a.",
      "def": "手提式的；輕便的"
    },
    {
      "word": "porter n.(",
      "pos": "",
      "def": "車站，機場等的)搬運工人，；腳夫"
    },
    {
      "word": "portray",
      "pos": "vt.",
      "def": "畫(人物，風景等)；(用語言)描寫"
    },
    {
      "word": "possess",
      "pos": "vt.",
      "def": "擁有，持有；具有；佔有"
    },
    {
      "word": "possession",
      "pos": "n.",
      "def": "擁有；佔有 ；所；有物；財產"
    },
    {
      "word": "precise",
      "pos": "a.",
      "def": "精準的；確切的；恰好的"
    },
    {
      "word": "predict",
      "pos": "vt.",
      "def": "vi.預言；預料；預報"
    },
    {
      "word": "preferable",
      "pos": "a.",
      "def": "更好的，更合意的"
    },
    {
      "word": "pregnancy",
      "pos": "n.",
      "def": "懷孕"
    },
    {
      "word": "pregnant",
      "pos": "a.",
      "def": "懷孕的，懷胎的"
    },
    {
      "word": "preposition n.【",
      "pos": "",
      "def": "文】介系詞，；前置詞"
    },
    {
      "word": "presentation",
      "pos": "n.",
      "def": "贈送；顯示；演；出"
    },
    {
      "word": "preservation",
      "pos": "n.",
      "def": "保護；保存；防腐"
    },
    {
      "word": "preserve",
      "pos": "vt.",
      "def": "vi.保存，保藏；維護"
    },
    {
      "word": "prevention",
      "pos": "n.",
      "def": "預防，防止"
    },
    {
      "word": "prime",
      "pos": "a.",
      "def": "最初的；原始的；主要的；首位的"
    },
    {
      "word": "primitive",
      "pos": "a.",
      "def": "原始的；遠古的"
    },
    {
      "word": "privacy",
      "pos": "n.",
      "def": "私下；私事；私生活；隱私"
    },
    {
      "word": "privilege",
      "pos": "n.",
      "def": "特權；優特"
    },
    {
      "word": "procedure",
      "pos": "n.",
      "def": "程序；手續；步驟"
    },
    {
      "word": "proceed",
      "pos": "vt.",
      "def": "vi.繼續進行；開始，著；手"
    },
    {
      "word": "production",
      "pos": "n.",
      "def": "生產；製作"
    },
    {
      "word": "productive",
      "pos": "a.",
      "def": "生產的；多產的；肥沃的"
    },
    {
      "word": "profession n.(",
      "pos": "",
      "def": "尤指受過良好教育；或專門訓練者，如律師，醫生，教師的)職；業"
    },
    {
      "word": "professional",
      "pos": "adj., n.",
      "def": "職業選手；專家，；內行；職業(上)的；從事特定專業的；職業性的"
    },
    {
      "word": "professor",
      "pos": "n.",
      "def": "教授"
    },
    {
      "word": "profitable",
      "pos": "a.",
      "def": "有利的，贏利的；有；益的"
    },
    {
      "word": "prominent",
      "pos": "a.",
      "def": "突出的；顯著的；卓越的"
    },
    {
      "word": "promising",
      "pos": "a.",
      "def": "有希望的，有前途的"
    },
    {
      "word": "promotion",
      "pos": "n.",
      "def": "晉級；發揚；提倡；促銷"
    },
    {
      "word": "prompt",
      "pos": "adj.",
      "def": "敏捷的，及時的，迅速；的"
    },
    {
      "word": "prompt2 vt..",
      "pos": "",
      "def": "促使；激勵；慫恿"
    },
    {
      "word": "pronoun n.【",
      "pos": "",
      "def": "文】代名詞"
    },
    {
      "word": "pronunciation",
      "pos": "n.",
      "def": "發音；發音；法"
    },
    {
      "word": "prosper",
      "pos": "vi.",
      "def": "vt.(使)繁榮，(使)昌盛；(使)成功"
    },
    {
      "word": "prosperity",
      "pos": "n.",
      "def": "興旺，繁榮，昌盛，；成功"
    },
    {
      "word": "prosperous",
      "pos": "a.",
      "def": "興旺的，繁榮的，；昌盛的"
    },
    {
      "word": "protein",
      "pos": "n.",
      "def": "蛋白質"
    },
    {
      "word": "protest vi.抗議，反對",
      "pos": "n.",
      "def": ""
    },
    {
      "word": "proverb",
      "pos": "n.",
      "def": "諺語，俗語"
    },
    {
      "word": "psychological",
      "pos": "a.",
      "def": "心理學的"
    },
    {
      "word": "psychologist",
      "pos": "n.",
      "def": "心理學家"
    },
    {
      "word": "psychology",
      "pos": "n.",
      "def": "心理學"
    },
    {
      "word": "publication",
      "pos": "n.",
      "def": "出版；發行 ；出版物；刊物"
    },
    {
      "word": "publicity n.(",
      "pos": "",
      "def": "公眾的)注意，名聲；宣傳"
    },
    {
      "word": "publish",
      "pos": "vt.",
      "def": "vi.出版；發行"
    },
    {
      "word": "publisher",
      "pos": "n.",
      "def": "出版(或發行)者"
    },
    {
      "word": "pursuit",
      "pos": "n.",
      "def": "追蹤，追擊；追求，尋求"
    },
    {
      "word": "quake",
      "pos": "n.",
      "def": "vi.顫抖，哆嗦；震動"
    },
    {
      "word": "quilt",
      "pos": "n.",
      "def": "被(子)；被褥"
    },
    {
      "word": "quotation",
      "pos": "n.",
      "def": "引用，引證 ；引文；語錄"
    },
    {
      "word": "rage n.(",
      "pos": "",
      "def": "一陣)狂怒，盛怒 vi.發怒，怒斥"
    },
    {
      "word": "rainfall",
      "pos": "n.",
      "def": "降雨，下雨"
    },
    {
      "word": "realistic",
      "pos": "a.",
      "def": "現實的，注重實際的；現實主義的"
    },
    {
      "word": "rebel vi",
      "pos": "",
      "def": "造反；反叛 n.造反者；反抗者"
    },
    {
      "word": "recall",
      "pos": "n.",
      "def": "vt.vi.回想，回憶"
    },
    {
      "word": "reception",
      "pos": "n.",
      "def": "接收；接待；歡迎；接待會"
    },
    {
      "word": "recipe",
      "pos": "n.",
      "def": "食譜"
    },
    {
      "word": "recite",
      "pos": "vt.",
      "def": "vi.背誦；朗誦"
    },
    {
      "word": "recognition",
      "pos": "n.",
      "def": "認出，識別；認可"
    },
    {
      "word": "recovery",
      "pos": "n.",
      "def": "重獲；恢復，復甦"
    },
    {
      "word": "recreation",
      "pos": "n.",
      "def": "消遣；娛樂"
    },
    {
      "word": "recycle",
      "pos": "vt.",
      "def": "使再循環；再利用"
    },
    {
      "word": "reduction",
      "pos": "n.",
      "def": "減少；削減；【數】簡化"
    },
    {
      "word": "refer",
      "pos": "vt.",
      "def": "把…歸因於；將…提交 vi.談到；查閱，參考；打聽；涉及"
    },
    {
      "word": "reference",
      "pos": "n.",
      "def": "提及；提交；參考"
    },
    {
      "word": "reflect",
      "pos": "vt.",
      "def": "vi.反射；思考，反省"
    },
    {
      "word": "reflection",
      "pos": "n.",
      "def": "反射；回響；深思，熟慮"
    },
    {
      "word": "reform",
      "pos": "n.",
      "def": "vt.改革，革新"
    },
    {
      "word": "restore",
      "pos": "vt.",
      "def": "vi.恢復；使復原；修復，"
    },
    {
      "word": "refresh",
      "pos": "vt.",
      "def": "vi.(使)清新；消除(…)疲勞"
    },
    {
      "word": "refugee",
      "pos": "n.",
      "def": "難民；流亡者"
    },
    {
      "word": "refusal",
      "pos": "n.",
      "def": "拒絕"
    },
    {
      "word": "regarding",
      "pos": "prep.",
      "def": "關於；就…而論"
    },
    {
      "word": "register",
      "pos": "n.",
      "def": "vt.vi.登記，註冊"
    },
    {
      "word": "registration",
      "pos": "n.",
      "def": "登記，註冊，掛號"
    },
    {
      "word": "regulate",
      "pos": "vt.",
      "def": "vi.管理；控制；校準；調節"
    },
    {
      "word": "regulation",
      "pos": "n.",
      "def": "規章；規則 ；管理；調整"
    },
    {
      "word": "rejection",
      "pos": "n.",
      "def": "拒絕；退回；【醫】排斥"
    },
    {
      "word": "relative1",
      "pos": "n.",
      "def": "親戚，親屬；【文】關係詞 a.與…有關係的，相關的"
    },
    {
      "word": "relative2",
      "pos": "a.",
      "def": "相對的，比較的"
    },
    {
      "word": "relaxation",
      "pos": "n.",
      "def": "鬆弛，放鬆"
    },
    {
      "word": "relieve",
      "pos": "vt.",
      "def": "vi.緩和，減輕；解除"
    },
    {
      "word": "reluctant",
      "pos": "a.",
      "def": "不情願的；勉強的"
    },
    {
      "word": "remark",
      "pos": "vi.",
      "def": "n.談到；評論；說；注意；察覺"
    },
    {
      "word": "remarkable",
      "pos": "a.",
      "def": "值得注意的；非凡卓越的"
    },
    {
      "word": "remedy",
      "pos": "n.",
      "def": "治療；治療法；藥物"
    },
    {
      "word": "repetition",
      "pos": "n.",
      "def": "重複；反覆"
    },
    {
      "word": "representation",
      "pos": "n.",
      "def": "代表；代表權 ；表示，表現"
    },
    {
      "word": "reputation",
      "pos": "n.",
      "def": "名譽，名聲"
    },
    {
      "word": "rescue",
      "pos": "n.",
      "def": "vt.援救；營救"
    },
    {
      "word": "research",
      "pos": "n.",
      "def": "vi.vt.(學術)研究；調查，探究"
    },
    {
      "word": "researcher",
      "pos": "n.",
      "def": "研究員；調查者"
    },
    {
      "word": "resemble",
      "pos": "vt.",
      "def": "像，類似"
    },
    {
      "word": "reservation",
      "pos": "n.",
      "def": "保留(意見)；(公共)專用地；自然保護區；預訂；預訂的房間(或席座)"
    },
    {
      "word": "resign",
      "pos": "vt.",
      "def": "vi.放棄，辭職"
    },
    {
      "word": "resignation",
      "pos": "n.",
      "def": "辭職；放棄；辭呈"
    },
    {
      "word": "resistance",
      "pos": "n.",
      "def": "抵抗，反抗，抵抗力；電阻"
    },
    {
      "word": "resolution",
      "pos": "n.",
      "def": "決心；決定 ；(會議等的)正式決定，決議；【電腦】解析度"
    },
    {
      "word": "resolve",
      "pos": "vt.",
      "def": "vi.決心，決定；解決；解答；議決"
    },
    {
      "word": "respectable",
      "pos": "a.",
      "def": "值得尊敬的"
    },
    {
      "word": "respectful",
      "pos": "a.",
      "def": "恭敬的；尊敬人的整修"
    },
    {
      "word": "restriction",
      "pos": "n.",
      "def": "限制；約束"
    },
    {
      "word": "retain",
      "pos": "vt.",
      "def": "保留，保持"
    },
    {
      "word": "retire",
      "pos": "vt.",
      "def": "vi.(使)退休；(令)退役"
    },
    {
      "word": "retirement",
      "pos": "n.",
      "def": "退休；退職"
    },
    {
      "word": "retreat n.撤退；隱退處；休養所",
      "pos": "vi.",
      "def": "vt.撤退，退卻"
    },
    {
      "word": "reunion",
      "pos": "n.",
      "def": "再聯合；(親友等的)團聚，重聚"
    },
    {
      "word": "revenge",
      "pos": "vt.",
      "def": "替…報仇 n.報仇；報復"
    },
    {
      "word": "revise",
      "pos": "vt.",
      "def": "vi.修訂；校訂"
    },
    {
      "word": "revision",
      "pos": "n.",
      "def": "修訂；修訂本，訂正版"
    },
    {
      "word": "revolution",
      "pos": "n.",
      "def": "革命；(天體的)運行，公轉"
    },
    {
      "word": "revolutionary",
      "pos": "a.",
      "def": "革命的"
    },
    {
      "word": "reward",
      "pos": "n.",
      "def": "vt.報答；報償；獎賞"
    },
    {
      "word": "rhyme",
      "pos": "n.",
      "def": "韻，韻腳 vi.押韻"
    },
    {
      "word": "rhythm",
      "pos": "n.",
      "def": "節奏；韻律 ；節拍"
    },
    {
      "word": "romance",
      "pos": "n.",
      "def": "愛情小說；浪漫情調"
    },
    {
      "word": "roughly",
      "pos": "adv.",
      "def": "粗糙地；粗略地；大體上；大約"
    },
    {
      "word": "route",
      "pos": "n.",
      "def": "路；路線；航線"
    },
    {
      "word": "ruin n.毀滅；崩潰；毀壞 ；廢墟；遺跡",
      "pos": "vt.",
      "def": "vi.毀滅；崩潰"
    },
    {
      "word": "rural",
      "pos": "a.",
      "def": "農村的；田園的"
    },
    {
      "word": "sacrifice n.(",
      "pos": "",
      "def": "供神的)牲禮，祭品；犧牲 vt.犧牲；獻出"
    },
    {
      "word": "salary",
      "pos": "n.",
      "def": "薪資，薪水"
    },
    {
      "word": "salesperson",
      "pos": "n.",
      "def": "店員，售貨員(salesman)"
    },
    {
      "word": "saleswoman",
      "pos": "n.",
      "def": "女店員；售貨員"
    },
    {
      "word": "satellite",
      "pos": "n.",
      "def": "衛星；人造衛星"
    },
    {
      "word": "satisfaction",
      "pos": "n.",
      "def": "滿意，滿足"
    },
    {
      "word": "scarcely",
      "pos": "adv.",
      "def": "幾乎不，幾乎沒有"
    },
    {
      "word": "scenery",
      "pos": "n.",
      "def": "風景，景色"
    },
    {
      "word": "scold",
      "pos": "vi., vt.",
      "def": "n.罵，責罵"
    },
    {
      "word": "scratch",
      "pos": "n.",
      "def": "vt.vi.抓；搔；擦；刮"
    },
    {
      "word": "screwdriver",
      "pos": "n.",
      "def": "螺絲起子"
    },
    {
      "word": "sculpture",
      "pos": "n.",
      "def": "雕塑品；雕像 ；雕刻術"
    },
    {
      "word": "seagull",
      "pos": "n.",
      "def": "海鷗(gull)"
    },
    {
      "word": "senior",
      "pos": "a.",
      "def": "年長的，前輩的；四年級生 的 n.較年長者；學長；前輩；上司；(大學) 四年級生"
    },
    {
      "word": "settler",
      "pos": "n.",
      "def": "移居者；殖民者；(糾紛等的)解決者"
    },
    {
      "word": "severe",
      "pos": "adj.",
      "def": "嚴重的；劇烈的；嚴厲的；嚴肅的"
    },
    {
      "word": "shameful",
      "pos": "a.",
      "def": "可恥的，丟臉的"
    },
    {
      "word": "shaver",
      "pos": "n.",
      "def": "理髮師；刮鬍鬚的用具"
    },
    {
      "word": "shelter",
      "pos": "n.",
      "def": "遮蓋物；躲避處；避難所 vt.遮蔽；庇護"
    },
    {
      "word": "shift",
      "pos": "vt.",
      "def": "vi.轉移；移動；變(速)，換(檔) n.轉換；轉移；輪班；(汽車的)變速裝置"
    },
    {
      "word": "shortsighted",
      "pos": "a.",
      "def": "近視的；目光短淺的"
    },
    {
      "word": "shrug",
      "pos": "n.",
      "def": "vi.vt.(表示疑惑，蔑視，無奈等)聳肩"
    },
    {
      "word": "shuttle n.(",
      "pos": "",
      "def": "紡織機的)梭子；接駁車；太空梭；羽毛球"
    },
    {
      "word": "sightseeing",
      "pos": "n.",
      "def": "觀光，遊覽"
    },
    {
      "word": "signature",
      "pos": "n.",
      "def": "簽名，簽署；(人物)識別標誌"
    },
    {
      "word": "significance",
      "pos": "n.",
      "def": "重要性，重要"
    },
    {
      "word": "sincerity",
      "pos": "n.",
      "def": "真實；誠心誠意"
    },
    {
      "word": "singular a.【",
      "pos": "",
      "def": "文】單數的 n.【文】單數(形)"
    },
    {
      "word": "site",
      "pos": "n.",
      "def": "地點，場所；【電腦】網點"
    },
    {
      "word": "sketch",
      "pos": "n.",
      "def": "vt.vi.速寫，素描"
    },
    {
      "word": "sledge",
      "pos": "n.",
      "def": "雪橇 vi.乘雪橇 vt.用雪橇運送(=sled)"
    },
    {
      "word": "sleigh",
      "pos": "n.",
      "def": "雪橇 vi.乘雪橇 vt.用雪橇運送"
    },
    {
      "word": "(=sled)",
      "pos": "",
      "def": ""
    },
    {
      "word": "slight",
      "pos": "a.",
      "def": "輕微的；微小的；少量的"
    },
    {
      "word": "slogan",
      "pos": "n.",
      "def": "口號，標語"
    },
    {
      "word": "smog",
      "pos": "n.",
      "def": "煙霧(= smoke and fog)"
    },
    {
      "word": "sneeze",
      "pos": "vi.",
      "def": "打噴嚏 n.噴嚏(聲)"
    },
    {
      "word": "sob",
      "pos": "vi.",
      "def": "vt.n.嗚咽；啜泣"
    },
    {
      "word": "socket",
      "pos": "n.",
      "def": "托座，承口；【電】插座；插口"
    },
    {
      "word": "software n.【",
      "pos": "",
      "def": "電腦】軟體"
    },
    {
      "word": "solar",
      "pos": "a.",
      "def": "太陽的；日光的"
    },
    {
      "word": "sophomore n.(",
      "pos": "",
      "def": "大學，高中的)二年級學生"
    },
    {
      "word": "sorrowful",
      "pos": "a.",
      "def": "悲傷的，傷心的"
    },
    {
      "word": "souvenir",
      "pos": "n.",
      "def": "紀念品，紀念物"
    },
    {
      "word": "spare",
      "pos": "vt.",
      "def": "分出，騰出(時間，人手)；節約 a.多餘的；備用的"
    },
    {
      "word": "spark",
      "pos": "n.",
      "def": "火花，火星 vt.發動；點燃"
    },
    {
      "word": "sparkle",
      "pos": "n.",
      "def": "火花；閃耀，閃光 vi.發火花；閃耀"
    },
    {
      "word": "sparrow",
      "pos": "n.",
      "def": "麻雀"
    },
    {
      "word": "spicy",
      "pos": "a.",
      "def": "加有香料的；香的；辛辣的"
    },
    {
      "word": "spiritual",
      "pos": "a.",
      "def": "精神(上)的，心靈的"
    },
    {
      "word": "splendid",
      "pos": "a.",
      "def": "有光彩的；燦爛的；極好的"
    },
    {
      "word": "split",
      "pos": "vt.",
      "def": "vi.劈開；切開 n.裂縫，裂痕；(舞蹈，體操中的)劈腿"
    },
    {
      "word": "sportsman",
      "pos": "n.",
      "def": "喜好運動的人；運動員"
    },
    {
      "word": "sportsmanship",
      "pos": "n.",
      "def": "運動員精神"
    },
    {
      "word": "status",
      "pos": "n.",
      "def": "地位，身分；情形，狀況"
    },
    {
      "word": "stem",
      "pos": "n.",
      "def": "莖，(樹)幹，(葉)柄 vi.起源於，由…而造成"
    },
    {
      "word": "stingy",
      "pos": "a.",
      "def": "吝嗇的，小氣的"
    },
    {
      "word": "strengthen",
      "pos": "vt.",
      "def": "vi.加強；增強；鞏固"
    },
    {
      "word": "strive",
      "pos": "vi.",
      "def": "努力，苦幹，奮鬥"
    },
    {
      "word": "stroke n.打，擊，敲；(病)突然發作；中風；(寫字，繪畫的)一筆；筆觸",
      "pos": "vt.",
      "def": "n.(用手)撫，摸，捋"
    },
    {
      "word": "submarine",
      "pos": "n.",
      "def": "潛水艇 a.海底的"
    },
    {
      "word": "suggestion",
      "pos": "n.",
      "def": "建議，提議；暗示"
    },
    {
      "word": "summarize",
      "pos": "vt.",
      "def": "vi.總結，概述"
    },
    {
      "word": "surf",
      "pos": "vt.",
      "def": "vi.衝浪；快速瀏覽"
    },
    {
      "word": "surgeon",
      "pos": "n.",
      "def": "外科醫生"
    },
    {
      "word": "surgery",
      "pos": "n.",
      "def": "外科，(外科)手術 ；手術室"
    },
    {
      "word": "surrender",
      "pos": "vi.",
      "def": "vt.n.投降，自首"
    },
    {
      "word": "surroundings",
      "pos": "n.",
      "def": "環境；周圍的事物"
    },
    {
      "word": "suspicious",
      "pos": "a.",
      "def": "猜疑的，可疑的"
    },
    {
      "word": "sway",
      "pos": "vi., vt.",
      "def": "n.搖動，搖擺"
    },
    {
      "word": "syllable",
      "pos": "n.",
      "def": "音節"
    },
    {
      "word": "sympathetic",
      "pos": "a.",
      "def": "同情的；有同情心的"
    },
    {
      "word": "sympathy",
      "pos": "n.",
      "def": "同情，同情心"
    },
    {
      "word": "symphony",
      "pos": "n.",
      "def": "交響樂，交響曲"
    },
    {
      "word": "syrup",
      "pos": "n.",
      "def": "糖漿；果汁"
    },
    {
      "word": "systematic",
      "pos": "a.",
      "def": "有系統的；有條 理的"
    },
    {
      "word": "tap n.龍頭(酒桶等的)塞子，栓子；竊聽器 vi.裝上塞子(嘴子)；在…裝竊聽器",
      "pos": "n.",
      "def": "vt.vi.輕拍，輕叩，輕敲"
    },
    {
      "word": "technician",
      "pos": "n.",
      "def": "技術人員，技師"
    },
    {
      "word": "technological",
      "pos": "a.",
      "def": "技術(學)的，工藝(學)的"
    },
    {
      "word": "telegram",
      "pos": "n.",
      "def": "電報"
    },
    {
      "word": "spear",
      "pos": "n.",
      "def": "矛；魚叉"
    },
    {
      "word": "species",
      "pos": "n.",
      "def": "種類；【生】物種"
    },
    {
      "word": "telegraph",
      "pos": "n.",
      "def": "電報"
    },
    {
      "word": "telescope n.(",
      "pos": "",
      "def": "單筒)望遠鏡"
    },
    {
      "word": "tendency",
      "pos": "n.",
      "def": "傾向；癖性；趨勢，潮流"
    },
    {
      "word": "tense",
      "pos": "a.",
      "def": "拉緊的，繃緊的 n.【文】(動詞的)時態，時式"
    },
    {
      "word": "tension",
      "pos": "n.",
      "def": "拉緊，繃緊 ；(精神上的)緊張"
    },
    {
      "word": "terrify",
      "pos": "vt.",
      "def": "vi.使害怕，使恐怖"
    },
    {
      "word": "terror",
      "pos": "n.",
      "def": "恐怖，驚駭 ；引起恐怖的事物(或人)"
    },
    {
      "word": "theme",
      "pos": "n.",
      "def": "論題，話題；主題，主題思想"
    },
    {
      "word": "thorough",
      "pos": "a.",
      "def": "徹底的；完全的"
    },
    {
      "word": "thoughtful",
      "pos": "a.",
      "def": "深思的；細心的；體貼 的"
    },
    {
      "word": "timid",
      "pos": "a.",
      "def": "膽小的，易受驚的"
    },
    {
      "word": "tiresome",
      "pos": "a.",
      "def": "使人疲勞的；令人厭倦 的"
    },
    {
      "word": "tolerable",
      "pos": "adj.",
      "def": "可忍受的；可容忍的"
    },
    {
      "word": "tolerance",
      "pos": "n.",
      "def": "寬容，寬大 ；忍耐(力)"
    },
    {
      "word": "tolerate",
      "pos": "vt.",
      "def": "vi.忍受；容忍"
    },
    {
      "word": "tolerant",
      "pos": "a.",
      "def": "忍受的，容忍的"
    },
    {
      "word": "tomb",
      "pos": "n.",
      "def": "墓；墓碑"
    },
    {
      "word": "tough",
      "pos": "adj.",
      "def": "堅韌的；強壯的；棘手的，費勁的"
    },
    {
      "word": "tragedy",
      "pos": "n.",
      "def": "悲劇體裁 ；(一齣) 悲劇"
    },
    {
      "word": "tragic",
      "pos": "a.",
      "def": "悲劇的；悲慘的，不幸的"
    },
    {
      "word": "transfer",
      "pos": "vt.",
      "def": "vi.轉換；換車；轉校 n.遷移；移交；調任(者)；轉校(生)"
    },
    {
      "word": "transform",
      "pos": "vt.",
      "def": "vi.(使)改變；(使) 改觀"
    },
    {
      "word": "translate",
      "pos": "vt.",
      "def": "vi.翻譯，轉譯"
    },
    {
      "word": "translation",
      "pos": "n.",
      "def": "翻譯 ；譯文；譯本"
    },
    {
      "word": "translator",
      "pos": "n.",
      "def": "翻譯員，翻譯者，翻 譯家"
    },
    {
      "word": "transportation",
      "pos": "n.",
      "def": "運輸 ；運輸工具"
    },
    {
      "word": "tremendous",
      "pos": "a.",
      "def": "巨大的，極大的"
    },
    {
      "word": "tribal",
      "pos": "a.",
      "def": "部落的，種族的"
    },
    {
      "word": "triumph n.(",
      "pos": "",
      "def": "大)勝利；(大)成功 vi.獲得勝利(或成功)"
    },
    {
      "word": "troublesome",
      "pos": "a.",
      "def": "麻煩的，棘手的"
    },
    {
      "word": "tug-of-war",
      "pos": "n.",
      "def": "拔河(比賽)"
    },
    {
      "word": "twinkle",
      "pos": "n.",
      "def": "vi.(星等)閃爍；閃耀"
    },
    {
      "word": "typist",
      "pos": "n.",
      "def": "打字員；打字者"
    },
    {
      "word": "underpass",
      "pos": "n.",
      "def": "地下道；地下人行道"
    },
    {
      "word": "unique",
      "pos": "a.",
      "def": "唯一的，獨一無二的"
    },
    {
      "word": "universal",
      "pos": "a.",
      "def": "全體的；普遍的；一 般的"
    },
    {
      "word": "university",
      "pos": "n.",
      "def": "大學"
    },
    {
      "word": "upload",
      "pos": "vt.",
      "def": "vi.【電腦】上傳"
    },
    {
      "word": "urban",
      "pos": "a.",
      "def": "城市的"
    },
    {
      "word": "urge",
      "pos": "vt.",
      "def": "vi.催促；力勸；慫恿 n.強烈的慾望；衝動"
    },
    {
      "word": "urgent",
      "pos": "a.",
      "def": "緊急的，急迫的"
    },
    {
      "word": "usage",
      "pos": "n.",
      "def": "使用，用法"
    },
    {
      "word": "vain",
      "pos": "a.",
      "def": "愛虛榮的，自負的；徒然的，無益的"
    },
    {
      "word": "vast",
      "pos": "a.",
      "def": "廣闊的，廣大的，巨大的；巨 額的"
    },
    {
      "word": "vegetarian",
      "pos": "n.",
      "def": "素食者；食草動 物 a.素食主義者的；吃素的"
    },
    {
      "word": "verb n.【",
      "pos": "",
      "def": "文】動詞["
    },
    {
      "word": "very",
      "pos": "adv.",
      "def": "非常，很 a.正是；恰好是"
    },
    {
      "word": "vessel",
      "pos": "n.",
      "def": "船，艦；容器，器皿；血管， 脈管"
    },
    {
      "word": "vinegar",
      "pos": "n.",
      "def": "醋"
    },
    {
      "word": "violate",
      "pos": "vt.",
      "def": "vi.違犯；違反；侵犯"
    },
    {
      "word": "violation",
      "pos": "n.",
      "def": "違反；違背 ；違 反行為"
    },
    {
      "word": "virgin",
      "pos": "n.",
      "def": "處女,未婚女子 a.處女的， 貞潔的"
    },
    {
      "word": "virtue",
      "pos": "n.",
      "def": "善，德 ；美德，德行"
    },
    {
      "word": "virus",
      "pos": "n.",
      "def": "病毒；濾過性病毒"
    },
    {
      "word": "visual",
      "pos": "a.",
      "def": "視力的；視覺的；光學的"
    },
    {
      "word": "vital",
      "pos": "a.",
      "def": "生命的；維持生命所必需的"
    },
    {
      "word": "volcano",
      "pos": "n.",
      "def": "火山"
    },
    {
      "word": "voluntary",
      "pos": "a.",
      "def": "自願的，志願的"
    },
    {
      "word": "volunteer n.志願者，義工",
      "pos": "vi.",
      "def": "vt.自願(做)"
    },
    {
      "word": "vowel n.【",
      "pos": "",
      "def": "文】母音"
    },
    {
      "word": "voyage",
      "pos": "n.",
      "def": "航海，航行"
    },
    {
      "word": "walnut",
      "pos": "n.",
      "def": "胡桃；胡桃樹"
    },
    {
      "word": "website n.【",
      "pos": "",
      "def": "電腦】網站"
    },
    {
      "word": "weekly",
      "pos": "a.",
      "def": "每週的；一週一次的 adv.每週；每週一次 n.週刊"
    },
    {
      "word": "welfare",
      "pos": "n.",
      "def": "福利；幸福"
    },
    {
      "word": "wit",
      "pos": "n.",
      "def": "機智；智慧"
    },
    {
      "word": "witch",
      "pos": "n.",
      "def": "女巫，巫婆"
    },
    {
      "word": "wizard",
      "pos": "n.",
      "def": "男巫；術士"
    },
    {
      "word": "withdraw",
      "pos": "vt.",
      "def": "vi.抽回；收回；取回； 提領(錢)"
    },
    {
      "word": "witness",
      "pos": "n.",
      "def": "目擊者；見證人 vt.目擊"
    },
    {
      "word": "wreck n.(船等的)失事，遇難 ；船難事故",
      "pos": "vt.",
      "def": "vi.(使)失事，(使)遇難"
    },
    {
      "word": "wrinkle n.皺紋",
      "pos": "vt.",
      "def": "vi.(使)起皺紋"
    },
    {
      "word": "yearly",
      "pos": "a.",
      "def": "每年的，一年一次的 adv.每年，一年一度 n.年刊；年鑑"
    },
    {
      "word": "yogurt",
      "pos": "n.",
      "def": "酸奶酪；酵母乳 (yoghourt)"
    },
    {
      "word": "youthful",
      "pos": "a.",
      "def": "年輕的；青年的；富青春活力的"
    }
  ],
  "5": [
    {
      "word": "abide",
      "pos": "vt.",
      "def": "vi.遵守"
    },
    {
      "word": "abolish",
      "pos": "vt.",
      "def": "廢止"
    },
    {
      "word": "abortion",
      "pos": "n.",
      "def": "墮胎"
    },
    {
      "word": "abrupt",
      "pos": "adj.",
      "def": "突然的"
    },
    {
      "word": "absurd",
      "pos": "adj.",
      "def": "荒謬的"
    },
    {
      "word": "abundant",
      "pos": "adj.",
      "def": "豐富的"
    },
    {
      "word": "academy",
      "pos": "n.",
      "def": "學院"
    },
    {
      "word": "accustom",
      "pos": "vt.",
      "def": "使…習慣"
    },
    {
      "word": "ace",
      "pos": "n.",
      "def": "么點；王牌"
    },
    {
      "word": "acknowledge",
      "pos": "vt.",
      "def": "承認"
    },
    {
      "word": "acknowledgement",
      "pos": "n.",
      "def": "承認"
    },
    {
      "word": "acne",
      "pos": "n.",
      "def": "粉刺"
    },
    {
      "word": "admiral",
      "pos": "n.",
      "def": "海軍上將"
    },
    {
      "word": "adolescence",
      "pos": "n.",
      "def": "青春期"
    },
    {
      "word": "adolescent",
      "pos": "adj.",
      "def": "青春期的"
    },
    {
      "word": "adore",
      "pos": "vt.",
      "def": "珍愛"
    },
    {
      "word": "adulthood",
      "pos": "n.",
      "def": "成年時期"
    },
    {
      "word": "advertiser",
      "pos": "n.",
      "def": "登廣告者"
    },
    {
      "word": "affection",
      "pos": "n.",
      "def": "情愛"
    },
    {
      "word": "agenda",
      "pos": "n.",
      "def": "議程"
    },
    {
      "word": "agony",
      "pos": "n.",
      "def": "痛苦"
    },
    {
      "word": "agricultural",
      "pos": "adj.",
      "def": "農業的"
    },
    {
      "word": "AI/artificial intelligence",
      "pos": "n.",
      "def": "人工智慧"
    },
    {
      "word": "airtight",
      "pos": "adj.",
      "def": "密閉的"
    },
    {
      "word": "airway",
      "pos": "n.",
      "def": "呼吸道；(礦井的)風道"
    },
    {
      "word": "aisle",
      "pos": "n.",
      "def": "走道；通道"
    },
    {
      "word": "algebra",
      "pos": "n.",
      "def": "代數"
    },
    {
      "word": "alien",
      "pos": "n.",
      "def": "外國人；外星人 a.外星的；外國的"
    },
    {
      "word": "allergic",
      "pos": "adj.",
      "def": "過敏的"
    },
    {
      "word": "allergy",
      "pos": "n.",
      "def": "過敏"
    },
    {
      "word": "alligator",
      "pos": "n.",
      "def": "鱷魚"
    },
    {
      "word": "ally",
      "pos": "n.",
      "def": "同盟者"
    },
    {
      "word": "alter",
      "pos": "vt.",
      "def": "vi.改變"
    },
    {
      "word": "alternate vt.vi.",
      "pos": "adj.",
      "def": "n.替換(者)"
    },
    {
      "word": "altitude",
      "pos": "n.",
      "def": "海拔"
    },
    {
      "word": "ample",
      "pos": "adj.",
      "def": "足夠的"
    },
    {
      "word": "anchor",
      "pos": "n.",
      "def": "錨"
    },
    {
      "word": "anthem",
      "pos": "n.",
      "def": "讚美詩；聖歌；國歌"
    },
    {
      "word": "antique",
      "pos": "n.",
      "def": "骨董"
    },
    {
      "word": "applaud",
      "pos": "vt.",
      "def": "vi.鼓掌"
    },
    {
      "word": "applause",
      "pos": "n.",
      "def": "掌聲"
    },
    {
      "word": "apt",
      "pos": "adj.",
      "def": "有…傾向的；聰明的"
    },
    {
      "word": "architect",
      "pos": "n.",
      "def": "建築師"
    },
    {
      "word": "architecture",
      "pos": "n.",
      "def": "建築"
    },
    {
      "word": "arena",
      "pos": "n.",
      "def": "競技場"
    },
    {
      "word": "armor",
      "pos": "n.",
      "def": "盔甲"
    },
    {
      "word": "ascend",
      "pos": "vt.",
      "def": "vi.上升"
    },
    {
      "word": "ass",
      "pos": "n.",
      "def": "驢子；笨蛋；屁股"
    },
    {
      "word": "assault",
      "pos": "vt.",
      "def": "n.攻擊 vi.動武"
    },
    {
      "word": "asset",
      "pos": "n.",
      "def": "資產"
    },
    {
      "word": "astonish",
      "pos": "vt.",
      "def": "震驚"
    },
    {
      "word": "astonishment",
      "pos": "n.",
      "def": "震驚"
    },
    {
      "word": "astray",
      "pos": "adv.",
      "def": "迷路地"
    },
    {
      "word": "astronaut",
      "pos": "n.",
      "def": "太空人"
    },
    {
      "word": "astronomer",
      "pos": "n.",
      "def": "天文學家"
    },
    {
      "word": "astronomy",
      "pos": "n.",
      "def": "天文學"
    },
    {
      "word": "attendance",
      "pos": "n.",
      "def": "出席"
    },
    {
      "word": "auditorium",
      "pos": "n.",
      "def": "禮堂"
    },
    {
      "word": "auxiliary",
      "pos": "n., adj.",
      "def": "輔助的；輔助者；助手；助動詞"
    },
    {
      "word": "awe",
      "pos": "n.",
      "def": "敬畏 vt.使...敬畏"
    },
    {
      "word": "awhile",
      "pos": "adv.",
      "def": "片刻"
    },
    {
      "word": "bachelor",
      "pos": "n.",
      "def": "單身漢"
    },
    {
      "word": "backbone",
      "pos": "n.",
      "def": "脊椎"
    },
    {
      "word": "badge",
      "pos": "n.",
      "def": "徽章"
    },
    {
      "word": "ballot",
      "pos": "n.",
      "def": "選票"
    },
    {
      "word": "ban",
      "pos": "n.",
      "def": "vt.禁止"
    },
    {
      "word": "bandit",
      "pos": "n.",
      "def": "土匪"
    },
    {
      "word": "banner",
      "pos": "n.",
      "def": "旗幟"
    },
    {
      "word": "banquet",
      "pos": "n.",
      "def": "宴會"
    },
    {
      "word": "barbarian",
      "pos": "n.",
      "def": "野蠻人 a.野蠻人；的"
    },
    {
      "word": "barbershop",
      "pos": "n.",
      "def": "(男)理髮廳"
    },
    {
      "word": "barefoot",
      "pos": "adj.",
      "def": "赤腳的"
    },
    {
      "word": "barren",
      "pos": "adj.",
      "def": "貧瘠的；不孕的"
    },
    {
      "word": "bass",
      "pos": "n.",
      "def": "低音樂器；男低音；鱸魚"
    },
    {
      "word": "batch",
      "pos": "n.",
      "def": "一批"
    },
    {
      "word": "batter",
      "pos": "vt.",
      "def": "vi.猛擊"
    },
    {
      "word": "bazaar",
      "pos": "n.",
      "def": "市場"
    },
    {
      "word": "beautify",
      "pos": "vt.",
      "def": "vi.美化"
    },
    {
      "word": "beforehand",
      "pos": "adv.",
      "def": "預先地"
    },
    {
      "word": "behalf",
      "pos": "n.",
      "def": "代表"
    },
    {
      "word": "belongings",
      "pos": "n.",
      "def": "財產"
    },
    {
      "word": "beloved",
      "pos": "adj.",
      "def": "心愛的"
    },
    {
      "word": "beneficial",
      "pos": "adj.",
      "def": "有益(利)的"
    },
    {
      "word": "beware",
      "pos": "v.",
      "def": "當心"
    },
    {
      "word": "bid",
      "pos": "n., vt.",
      "def": "命令；吩咐；向…表示；出價；出價；努力"
    },
    {
      "word": "blacksmith",
      "pos": "n.",
      "def": "鐵匠"
    },
    {
      "word": "blast",
      "pos": "n.",
      "def": "強風；爆炸 v.爆炸"
    },
    {
      "word": "blaze",
      "pos": "n.",
      "def": "火焰 v.燃燒"
    },
    {
      "word": "bleach",
      "pos": "vi., vt.",
      "def": "n.漂白(劑)"
    },
    {
      "word": "blizzard",
      "pos": "n.",
      "def": "暴風雪"
    },
    {
      "word": "blond/blonde",
      "pos": "adj.",
      "def": "金髮的 n.金髮人"
    },
    {
      "word": "blot",
      "pos": "n.",
      "def": "汙漬(同 stain )"
    },
    {
      "word": "blues",
      "pos": "n.",
      "def": "憂鬱"
    },
    {
      "word": "blur",
      "pos": "n.",
      "def": "模糊 v.使…模糊"
    },
    {
      "word": "bodily",
      "pos": "adj.",
      "def": "身體的"
    },
    {
      "word": "bodyguard",
      "pos": "n.",
      "def": "保鑣"
    },
    {
      "word": "bog n.沼澤",
      "pos": "vt.",
      "def": "vi.(使) 陷入泥淖"
    },
    {
      "word": "bolt n.門閂；閃電",
      "pos": "vt.",
      "def": "vi.閂住"
    },
    {
      "word": "bonus",
      "pos": "n.",
      "def": "紅利"
    },
    {
      "word": "boom",
      "pos": "n.",
      "def": "vi.vt.(發出)隆隆聲；(使)興旺"
    },
    {
      "word": "booth",
      "pos": "n.",
      "def": "小亭"
    },
    {
      "word": "boredom",
      "pos": "n.",
      "def": "無聊"
    },
    {
      "word": "bosom",
      "pos": "n.",
      "def": "胸；乳房"
    },
    {
      "word": "botany",
      "pos": "n.",
      "def": "植物學"
    },
    {
      "word": "boulevard",
      "pos": "n.",
      "def": "林蔭大道"
    },
    {
      "word": "bound",
      "pos": "vi.",
      "def": "vt.(使)跳躍"
    },
    {
      "word": "boundary",
      "pos": "n.",
      "def": "邊界"
    },
    {
      "word": "bowel",
      "pos": "n.",
      "def": "腸"
    },
    {
      "word": "boxer",
      "pos": "n.",
      "def": "拳擊手"
    },
    {
      "word": "boxing",
      "pos": "n.",
      "def": "拳擊"
    },
    {
      "word": "boyhood",
      "pos": "n.",
      "def": "少年時期"
    },
    {
      "word": "brace",
      "pos": "n.",
      "def": "支撐物；矯正器；大括號"
    },
    {
      "word": "braid",
      "pos": "n.",
      "def": "辮子"
    },
    {
      "word": "breadth",
      "pos": "n.",
      "def": "寬度"
    },
    {
      "word": "bribe",
      "pos": "n.",
      "def": "vt.vi.賄賂"
    },
    {
      "word": "briefcase",
      "pos": "n.",
      "def": "公事包"
    },
    {
      "word": "broaden",
      "pos": "vi.",
      "def": "vt.拓寬"
    },
    {
      "word": "bronze",
      "pos": "n.",
      "def": "青銅"
    },
    {
      "word": "brooch",
      "pos": "n.",
      "def": "胸針"
    },
    {
      "word": "brood n.一窩(卵、蟲、鳥)",
      "pos": "vt.",
      "def": "vi.孵出"
    },
    {
      "word": "broth",
      "pos": "n.",
      "def": "湯"
    },
    {
      "word": "brotherhood",
      "pos": "n.",
      "def": "兄弟情誼"
    },
    {
      "word": "browse",
      "pos": "vi.",
      "def": "vt.n.瀏覽；吃草"
    },
    {
      "word": "bruise",
      "pos": "n.",
      "def": "瘀青"
    },
    {
      "word": "bulge",
      "pos": "n.",
      "def": "腫脹；凸塊"
    },
    {
      "word": "bulk",
      "pos": "n.",
      "def": "體積；容積；大量"
    },
    {
      "word": "bully",
      "pos": "n.",
      "def": "vt.vi.霸凌；威嚇"
    },
    {
      "word": "bureau",
      "pos": "n.",
      "def": "局(處)"
    },
    {
      "word": "butcher",
      "pos": "n.",
      "def": "肉販"
    },
    {
      "word": "cactus",
      "pos": "n.",
      "def": "仙人掌"
    },
    {
      "word": "calf",
      "pos": "n.",
      "def": "小牛 (複: calves)"
    },
    {
      "word": "calligraphy",
      "pos": "n.",
      "def": "書法"
    },
    {
      "word": "canal",
      "pos": "n.",
      "def": "運河"
    },
    {
      "word": "cannon",
      "pos": "n.",
      "def": "大砲"
    },
    {
      "word": "carbon",
      "pos": "n.",
      "def": "炭"
    },
    {
      "word": "cardboard",
      "pos": "n.",
      "def": "硬紙板"
    },
    {
      "word": "carefree",
      "pos": "adj.",
      "def": "無憂無慮的"
    },
    {
      "word": "caretaker",
      "pos": "n.",
      "def": "照顧者"
    },
    {
      "word": "carnation",
      "pos": "n.",
      "def": "康乃馨"
    },
    {
      "word": "carnival",
      "pos": "n.",
      "def": "嘉年華會"
    },
    {
      "word": "carp",
      "pos": "n.",
      "def": "鯉魚"
    },
    {
      "word": "carton",
      "pos": "n.",
      "def": "紙盒；紙箱"
    },
    {
      "word": "category",
      "pos": "n.",
      "def": "種類；分類"
    },
    {
      "word": "cathedral",
      "pos": "n.",
      "def": "大教堂"
    },
    {
      "word": "caution",
      "pos": "n.",
      "def": "小心；謹慎"
    },
    {
      "word": "cautious",
      "pos": "adj.",
      "def": "小心的；謹慎的"
    },
    {
      "word": "celebrity",
      "pos": "n.",
      "def": "名人；名流；名聲"
    },
    {
      "word": "celery",
      "pos": "n.",
      "def": "芹菜"
    },
    {
      "word": "cellar",
      "pos": "n.",
      "def": "地窖；地下室；酒窖"
    },
    {
      "word": "cell-phone/cellphone/cellular phone/mobile",
      "pos": "",
      "def": ""
    },
    {
      "word": "phone",
      "pos": "n.",
      "def": "手機"
    },
    {
      "word": "cello",
      "pos": "n.",
      "def": "大提琴"
    },
    {
      "word": "Celsius / Centigrade / centigrade",
      "pos": "n.",
      "def": "攝氏 adj.攝氏的"
    },
    {
      "word": "ceremony",
      "pos": "n.",
      "def": "典禮；儀式"
    },
    {
      "word": "certificate",
      "pos": "n.",
      "def": "證書"
    },
    {
      "word": "chairperson",
      "pos": "n.",
      "def": "議長；主席(無性別歧視)"
    },
    {
      "word": "chair/chairman",
      "pos": "n.",
      "def": "主席"
    },
    {
      "word": "chairwoman",
      "pos": "n.",
      "def": "女主席"
    },
    {
      "word": "chant",
      "pos": "n.",
      "def": "vt.vi.反覆地唱；吟誦"
    },
    {
      "word": "chatter",
      "pos": "vi., vt.",
      "def": "n.喋喋不休地說"
    },
    {
      "word": "checkbook",
      "pos": "n.",
      "def": "支票簿"
    },
    {
      "word": "check-in",
      "pos": "n.",
      "def": "到達登記；報到"
    },
    {
      "word": "check-out",
      "pos": "n.",
      "def": "檢查；結帳離開；退；房"
    },
    {
      "word": "checkup",
      "pos": "n.",
      "def": "檢查；體檢"
    },
    {
      "word": "chef",
      "pos": "n.",
      "def": "主廚；大師傅"
    },
    {
      "word": "chemist",
      "pos": "n.",
      "def": "化學家"
    },
    {
      "word": "chestnut",
      "pos": "n.",
      "def": "栗子"
    },
    {
      "word": "chili",
      "pos": "n.",
      "def": "胡椒"
    },
    {
      "word": "chimpanzee",
      "pos": "n.",
      "def": "黑猩猩"
    },
    {
      "word": "choir",
      "pos": "n.",
      "def": "唱詩班"
    },
    {
      "word": "chord",
      "pos": "n.",
      "def": "和弦；和音"
    },
    {
      "word": "chubby",
      "pos": "adj.",
      "def": "圓胖的；豐滿的"
    },
    {
      "word": "circuit",
      "pos": "n.",
      "def": "電路"
    },
    {
      "word": "cite",
      "pos": "vt.",
      "def": "引用；引…為證"
    },
    {
      "word": "civic",
      "pos": "adj.",
      "def": "公民的；市民的"
    },
    {
      "word": "clam",
      "pos": "n.",
      "def": "蛤；鉗子"
    },
    {
      "word": "clan",
      "pos": "n.",
      "def": "氏族；部落"
    },
    {
      "word": "clasp",
      "pos": "vi., vt.",
      "def": "n.緊握；緊抱；擁抱"
    },
    {
      "word": "clause",
      "pos": "n.",
      "def": "子句；條款"
    },
    {
      "word": "cling",
      "pos": "vi.",
      "def": "黏著；纏著；緊抓"
    },
    {
      "word": "clockwise",
      "pos": "adj.",
      "def": "adv.順時針的(地)"
    },
    {
      "word": "clover",
      "pos": "n.",
      "def": "苜蓿；三葉草"
    },
    {
      "word": "cluster",
      "pos": "n.",
      "def": "群；串；束"
    },
    {
      "word": "clutch",
      "pos": "vi., vt.",
      "def": "n.抓住 n.離合器"
    },
    {
      "word": "coastline",
      "pos": "n.",
      "def": "海岸線"
    },
    {
      "word": "cocoon",
      "pos": "n.",
      "def": "繭"
    },
    {
      "word": "coil n.線圈；捲",
      "pos": "vt.",
      "def": "vi.捲；盤繞"
    },
    {
      "word": "colleague",
      "pos": "n.",
      "def": "同事"
    },
    {
      "word": "colonel",
      "pos": "n.",
      "def": "陸軍上校"
    },
    {
      "word": "colonial",
      "pos": "adj.",
      "def": "殖民(地)的"
    },
    {
      "word": "combat",
      "pos": "n.",
      "def": "vt.vi.戰鬥"
    },
    {
      "word": "comedian",
      "pos": "n.",
      "def": "喜劇演員"
    },
    {
      "word": "comet",
      "pos": "n.",
      "def": "彗星"
    },
    {
      "word": "commentator",
      "pos": "n.",
      "def": "評論家"
    },
    {
      "word": "commission",
      "pos": "n.",
      "def": "傭金 vt.委任"
    },
    {
      "word": "commodity",
      "pos": "n.",
      "def": "商品；日用品"
    },
    {
      "word": "commonplace",
      "pos": "adj.",
      "def": "平凡的"
    },
    {
      "word": "communism",
      "pos": "n.",
      "def": "共產主義"
    },
    {
      "word": "communist",
      "pos": "adj., n.",
      "def": "共產主義者；共產主義的"
    },
    {
      "word": "commute",
      "pos": "vi.",
      "def": "n.通勤"
    },
    {
      "word": "commuter",
      "pos": "n.",
      "def": "通勤者"
    },
    {
      "word": "compact",
      "pos": "adj.",
      "def": "緊密的；小巧的"
    },
    {
      "word": "compass",
      "pos": "n.",
      "def": "指南針"
    },
    {
      "word": "compassion",
      "pos": "n.",
      "def": "同情"
    },
    {
      "word": "compassionate",
      "pos": "adj.",
      "def": "有同情心；的"
    },
    {
      "word": "compel",
      "pos": "vt.",
      "def": "強迫"
    },
    {
      "word": "compliment",
      "pos": "n.",
      "def": "vt.恭維；稱讚"
    },
    {
      "word": "compound",
      "pos": "vt., n.",
      "def": "混合物；合成"
    },
    {
      "word": "comprehend",
      "pos": "vt.",
      "def": "理解"
    },
    {
      "word": "comprehension",
      "pos": "n.",
      "def": "理解力"
    },
    {
      "word": "compromise",
      "pos": "",
      "def": ""
    },
    {
      "word": "compute",
      "pos": "vi., vt.",
      "def": "n.計算"
    },
    {
      "word": "computerize",
      "pos": "vt.",
      "def": "使電腦化"
    },
    {
      "word": "comrade",
      "pos": "n.",
      "def": "夥伴"
    },
    {
      "word": "conceal",
      "pos": "vt.",
      "def": "隱藏"
    },
    {
      "word": "conceive",
      "pos": "vt.",
      "def": "vi.想像"
    },
    {
      "word": "condemn",
      "pos": "vt.",
      "def": "譴責"
    },
    {
      "word": "conduct",
      "pos": "vt., n.",
      "def": "vi.指揮；行為；行為；指導"
    },
    {
      "word": "confession",
      "pos": "n.",
      "def": "坦白；懺悔"
    },
    {
      "word": "confront",
      "pos": "vt.",
      "def": "面臨；遭遇"
    },
    {
      "word": "consent",
      "pos": "vi.",
      "def": "n.同意"
    },
    {
      "word": "conserve",
      "pos": "vt.",
      "def": "保存；節省"
    },
    {
      "word": "considerate",
      "pos": "adj.",
      "def": "體諒的"
    },
    {
      "word": "console",
      "pos": "vt.",
      "def": "安慰"
    },
    {
      "word": "constitutional",
      "pos": "adj.",
      "def": "憲法的"
    },
    {
      "word": "contagious",
      "pos": "adj.",
      "def": "有傳染性的"
    },
    {
      "word": "contaminate",
      "pos": "vt.",
      "def": "汙染"
    },
    {
      "word": "contemplate",
      "pos": "vt.",
      "def": "vi.深思"
    },
    {
      "word": "contemporary",
      "pos": "adj.",
      "def": "當代的"
    },
    {
      "word": "contempt",
      "pos": "n.",
      "def": "輕視"
    },
    {
      "word": "contend",
      "pos": "vt.",
      "def": "vi.爭論；競爭"
    },
    {
      "word": "continental",
      "pos": "adj.",
      "def": "洲的；大陸的"
    },
    {
      "word": "continuity",
      "pos": "n.",
      "def": "連貫性；持續性"
    },
    {
      "word": "convert",
      "pos": "vt.",
      "def": "vi.轉換；變成"
    },
    {
      "word": "convict",
      "pos": "vt.",
      "def": "判...有罪；判決"
    },
    {
      "word": "coral",
      "pos": "n.",
      "def": "珊瑚"
    },
    {
      "word": "corporation",
      "pos": "n.",
      "def": "股份有限公司"
    },
    {
      "word": "copyright",
      "pos": "n.",
      "def": "版權；著作權"
    },
    {
      "word": "correspondence",
      "pos": "n.",
      "def": "通信"
    },
    {
      "word": "corridor",
      "pos": "n.",
      "def": "走廊；通道"
    },
    {
      "word": "corrupt",
      "pos": "vi., vt.",
      "def": "adj.腐敗(的)"
    },
    {
      "word": "counsel",
      "pos": "n.",
      "def": "vt.vi.忠告；商議"
    },
    {
      "word": "counselor",
      "pos": "n.",
      "def": "顧問；輔導員"
    },
    {
      "word": "cozy",
      "pos": "adj.",
      "def": "舒適的"
    },
    {
      "word": "counterclockwise",
      "pos": "",
      "def": ""
    },
    {
      "word": "coupon",
      "pos": "n.",
      "def": "折價券；優待券"
    },
    {
      "word": "courtyard",
      "pos": "n.",
      "def": "庭院"
    },
    {
      "word": "cowardly",
      "pos": "adj.",
      "def": "adv.膽小的(地)"
    },
    {
      "word": "cracker",
      "pos": "n.",
      "def": "脆餅；爆竹"
    },
    {
      "word": "crater",
      "pos": "n.",
      "def": "火山口"
    },
    {
      "word": "creak",
      "pos": "vt.",
      "def": "vi.發出喀吱聲"
    },
    {
      "word": "creek",
      "pos": "n.",
      "def": "小河"
    },
    {
      "word": "crib",
      "pos": "n.",
      "def": "嬰兒床"
    },
    {
      "word": "crocodile",
      "pos": "n.",
      "def": "鱷魚"
    },
    {
      "word": "crossing",
      "pos": "n.",
      "def": "交叉點；十字路口"
    },
    {
      "word": "crouch",
      "pos": "n.",
      "def": "vt.vi.蹲伏"
    },
    {
      "word": "crunch",
      "pos": "v.",
      "def": "n.(發出)嘎吱吱的聲音"
    },
    {
      "word": "crystal",
      "pos": "n.",
      "def": "水晶"
    },
    {
      "word": "cuisine",
      "pos": "n.",
      "def": "菜餚；烹飪"
    },
    {
      "word": "curb",
      "pos": "n.",
      "def": "路邊；邊欄 vt.抑制"
    },
    {
      "word": "currency",
      "pos": "n.",
      "def": "貨幣；流通"
    },
    {
      "word": "curriculum",
      "pos": "n.",
      "def": "課程(複:curricula)"
    },
    {
      "word": "curry",
      "pos": "n.",
      "def": "咖哩"
    },
    {
      "word": "customs",
      "pos": "n.",
      "def": "海關；關稅"
    },
    {
      "word": "dart",
      "pos": "n.",
      "def": "鏢 vt.投擲 vi.急衝"
    },
    {
      "word": "dazzle",
      "pos": "vt.",
      "def": "使…目眩；耀眼"
    },
    {
      "word": "decay",
      "pos": "n.",
      "def": "vt.vi.腐朽；衰敗"
    },
    {
      "word": "deceive",
      "pos": "vt.",
      "def": "vi.欺騙；蒙蔽"
    },
    {
      "word": "declaration",
      "pos": "n.",
      "def": "宣言"
    },
    {
      "word": "delegate",
      "pos": "vt., n.",
      "def": "代表團團員；派...為代表"
    },
    {
      "word": "delegation",
      "pos": "n.",
      "def": "代表團；委任"
    },
    {
      "word": "democrat",
      "pos": "n.",
      "def": "民主主義者"
    },
    {
      "word": "denial",
      "pos": "n.",
      "def": "否認；拒絕"
    },
    {
      "word": "descriptive",
      "pos": "adj.",
      "def": "描述的"
    },
    {
      "word": "despair",
      "pos": "n.",
      "def": "vi.絕望"
    },
    {
      "word": "despise",
      "pos": "vt.",
      "def": "輕視"
    },
    {
      "word": "destination",
      "pos": "n.",
      "def": "目的地"
    },
    {
      "word": "destiny",
      "pos": "n.",
      "def": "命運"
    },
    {
      "word": "destructive",
      "pos": "adj.",
      "def": "有破壞性的"
    },
    {
      "word": "devotion",
      "pos": "n.",
      "def": "奉獻；忠誠；熱愛"
    },
    {
      "word": "devour",
      "pos": "vt.",
      "def": "吞食"
    },
    {
      "word": "dialect",
      "pos": "n.",
      "def": "方言"
    },
    {
      "word": "disbelief",
      "pos": "n.",
      "def": "不信；懷疑"
    },
    {
      "word": "discard",
      "pos": "n.",
      "def": "丟棄"
    },
    {
      "word": "disciple",
      "pos": "n.",
      "def": "信徒；門徒"
    },
    {
      "word": "discriminate",
      "pos": "vt.",
      "def": "vi.辨別；歧視"
    },
    {
      "word": "dispense",
      "pos": "vt.",
      "def": "分配；分送；執行"
    },
    {
      "word": "dispose",
      "pos": "vt.",
      "def": "vi.處理；整理；配置"
    },
    {
      "word": "distinction",
      "pos": "n.",
      "def": "差別；卓越"
    },
    {
      "word": "distinctive",
      "pos": "adj.",
      "def": "有特色的"
    },
    {
      "word": "distress",
      "pos": "n.",
      "def": "痛苦 vt.使痛苦"
    },
    {
      "word": "document",
      "pos": "n.",
      "def": "文件"
    },
    {
      "word": "doorstep",
      "pos": "n.",
      "def": "門階"
    },
    {
      "word": "doorway",
      "pos": "n.",
      "def": "出入口"
    },
    {
      "word": "dormitory",
      "pos": "n.",
      "def": "學生宿舍"
    },
    {
      "word": "dough",
      "pos": "n.",
      "def": "生麵團"
    },
    {
      "word": "downward(s)",
      "pos": "adj.",
      "def": "adv.向下"
    },
    {
      "word": "drape n.簾",
      "pos": "vt.",
      "def": "vi.覆蓋"
    },
    {
      "word": "dreadful",
      "pos": "adj.",
      "def": "畏懼的；可怕的"
    },
    {
      "word": "dresser",
      "pos": "n.",
      "def": "梳妝台；(劇場)服裝員"
    },
    {
      "word": "dressing",
      "pos": "n.",
      "def": "沙拉醬；服飾"
    },
    {
      "word": "driveway",
      "pos": "n.",
      "def": "私人車道"
    },
    {
      "word": "duration",
      "pos": "n.",
      "def": "持續期間"
    },
    {
      "word": "dusk",
      "pos": "n.",
      "def": "黃昏"
    },
    {
      "word": "dwarf",
      "pos": "n.",
      "def": "矮子 adj.矮小的"
    },
    {
      "word": "dwell",
      "pos": "vi.",
      "def": "居住"
    },
    {
      "word": "dwelling",
      "pos": "n.",
      "def": "住處"
    },
    {
      "word": "eclipse",
      "pos": "n.",
      "def": "vt.蝕"
    },
    {
      "word": "eel",
      "pos": "n.",
      "def": "鰻；鱔魚"
    },
    {
      "word": "ego",
      "pos": "n.",
      "def": "自我；自我意識"
    },
    {
      "word": "elaborate adj.精巧的",
      "pos": "vi.",
      "def": "vt.詳；述"
    },
    {
      "word": "elevate",
      "pos": "vt.",
      "def": "提升；抬高"
    },
    {
      "word": "embrace",
      "pos": "vi., vt.",
      "def": "n.擁抱"
    },
    {
      "word": "endeavor",
      "pos": "vi.",
      "def": "n.努力；盡力"
    },
    {
      "word": "enroll",
      "pos": "vt.",
      "def": "vi.(使…)註冊"
    },
    {
      "word": "enrollment",
      "pos": "n.",
      "def": "註冊"
    },
    {
      "word": "ensure/insure",
      "pos": "vt.",
      "def": "確保"
    },
    {
      "word": "enterprise",
      "pos": "n.",
      "def": "企業；事業心"
    },
    {
      "word": "enthusiastic",
      "pos": "adj.",
      "def": "熱心的"
    },
    {
      "word": "entitle",
      "pos": "vt.",
      "def": "取名為…；始有資格"
    },
    {
      "word": "equate",
      "pos": "vt.",
      "def": "使相等；同等看待"
    },
    {
      "word": "erect",
      "pos": "vt.",
      "def": "豎立；使直立"
    },
    {
      "word": "erupt",
      "pos": "vt.",
      "def": "vi.爆發"
    },
    {
      "word": "escort",
      "pos": "n.",
      "def": "護送者 vt.護送"
    },
    {
      "word": "estate",
      "pos": "n.",
      "def": "財產"
    },
    {
      "word": "esteem",
      "pos": "n.",
      "def": "vt.尊重"
    },
    {
      "word": "eternal",
      "pos": "adj.",
      "def": "不朽的；無休止的"
    },
    {
      "word": "ethic(s)",
      "pos": "n.",
      "def": "倫理標準"
    },
    {
      "word": "evergreen",
      "pos": "n.",
      "def": "長青樹 adj.常綠；的"
    },
    {
      "word": "exaggeration",
      "pos": "n.",
      "def": "誇大；誇張"
    },
    {
      "word": "exceed",
      "pos": "vt.",
      "def": "vi.超過；勝過"
    },
    {
      "word": "excel",
      "pos": "vt.",
      "def": "vi.勝過；擅長"
    },
    {
      "word": "exceptional",
      "pos": "adj.",
      "def": "優異的"
    },
    {
      "word": "excess",
      "pos": "n.",
      "def": "過度；過量"
    },
    {
      "word": "exclaim",
      "pos": "vt.",
      "def": "vi.驚叫；呼喊"
    },
    {
      "word": "exclude",
      "pos": "vt.",
      "def": "排除"
    },
    {
      "word": "execute",
      "pos": "vt.",
      "def": "執行；處決"
    },
    {
      "word": "executive",
      "pos": "adj., n.",
      "def": "執行者；行政官；執行的；行政上的"
    },
    {
      "word": "exile",
      "pos": "n.",
      "def": "放逐(者) vt.放逐"
    },
    {
      "word": "extension",
      "pos": "n.",
      "def": "延伸"
    },
    {
      "word": "extensive",
      "pos": "adj.",
      "def": "廣泛的；延長的"
    },
    {
      "word": "exterior",
      "pos": "adj.",
      "def": "外部的 n.外部"
    },
    {
      "word": "external",
      "pos": "adj.",
      "def": "外部的；客觀的"
    },
    {
      "word": "extinct",
      "pos": "adj.",
      "def": "絕種的"
    },
    {
      "word": "extraordinary",
      "pos": "adj.",
      "def": "非凡的"
    },
    {
      "word": "eyelash",
      "pos": "n.",
      "def": "睫毛(lash)"
    },
    {
      "word": "eyelid",
      "pos": "n.",
      "def": "眼皮；眼瞼"
    },
    {
      "word": "fabric",
      "pos": "n.",
      "def": "布料；結構"
    },
    {
      "word": "fad",
      "pos": "n.",
      "def": "時尚"
    },
    {
      "word": "Fahrenheit",
      "pos": "adj.",
      "def": "華氏的 n.華氏溫度計"
    },
    {
      "word": "falter",
      "pos": "vi.",
      "def": "蹣跚；搖晃"
    },
    {
      "word": "fascinate",
      "pos": "vt.",
      "def": "vi.使著迷；吸引"
    },
    {
      "word": "fatigue",
      "pos": "n.",
      "def": "vt.vi.(使…)極度疲勞"
    },
    {
      "word": "federal",
      "pos": "adj.",
      "def": "聯邦的；同盟的"
    },
    {
      "word": "feeble",
      "pos": "adj.",
      "def": "微弱的"
    },
    {
      "word": "feminine",
      "pos": "adj.",
      "def": "有女性氣質的"
    },
    {
      "word": "fertilizer",
      "pos": "n.",
      "def": "肥料"
    },
    {
      "word": "fiancé",
      "pos": "n.",
      "def": "未婚夫"
    },
    {
      "word": "fiancée",
      "pos": "n.",
      "def": "未婚妻"
    },
    {
      "word": "fiber",
      "pos": "n.",
      "def": "纖維；構造"
    },
    {
      "word": "fiddle",
      "pos": "n.",
      "def": "小提琴"
    },
    {
      "word": "filter n.過濾器",
      "pos": "vt.",
      "def": "vi.過濾"
    },
    {
      "word": "fin",
      "pos": "n.",
      "def": "鰭；魚翅"
    },
    {
      "word": "fishery",
      "pos": "n.",
      "def": "魚場"
    },
    {
      "word": "flake",
      "pos": "n.",
      "def": "小薄片；玉米片"
    },
    {
      "word": "flap",
      "pos": "vi., vt.",
      "def": "n.拍打(聲)"
    },
    {
      "word": "flaw",
      "pos": "n.",
      "def": "裂縫；瑕疵；缺點"
    },
    {
      "word": "flick n.輕打聲",
      "pos": "vt.",
      "def": "vi.輕彈"
    },
    {
      "word": "flip",
      "pos": "vt.",
      "def": "vi.拋；使翻轉"
    },
    {
      "word": "flourish",
      "pos": "vi.",
      "def": "興盛；茂盛"
    },
    {
      "word": "fluency",
      "pos": "n.",
      "def": "流利；流暢"
    },
    {
      "word": "foe",
      "pos": "n.",
      "def": "仇敵；敵人"
    },
    {
      "word": "foil",
      "pos": "n.",
      "def": "箔；金屬薄片"
    },
    {
      "word": "folklore",
      "pos": "n.",
      "def": "民間傳說；習俗"
    },
    {
      "word": "forgetful",
      "pos": "adj.",
      "def": "健忘的"
    },
    {
      "word": "format",
      "pos": "n.",
      "def": "格式 vt.格式化"
    },
    {
      "word": "foul adj.惡臭的；邪惡的",
      "pos": "n.",
      "def": "vi.犯規"
    },
    {
      "word": "fowl",
      "pos": "n.",
      "def": "家禽"
    },
    {
      "word": "fraction",
      "pos": "n.",
      "def": "分數【數學】；斷片"
    },
    {
      "word": "framework",
      "pos": "n.",
      "def": "架構；骨架"
    },
    {
      "word": "frantic",
      "pos": "adj.",
      "def": "狂亂的"
    },
    {
      "word": "freight",
      "pos": "n.",
      "def": "貨物"
    },
    {
      "word": "frontier",
      "pos": "n.",
      "def": "邊境"
    },
    {
      "word": "fume n.(",
      "pos": "",
      "def": "有害，濃烈難聞的)煙，氣"
    },
    {
      "word": "fury",
      "pos": "n.",
      "def": "盛怒"
    },
    {
      "word": "fuse",
      "pos": "vt.",
      "def": "vi.熔合 n.保險絲"
    },
    {
      "word": "fuss",
      "pos": "n.",
      "def": "vi.大驚小怪"
    },
    {
      "word": "gallop",
      "pos": "n.",
      "def": "vt.vi.疾馳"
    },
    {
      "word": "garment",
      "pos": "n.",
      "def": "衣服；外表"
    },
    {
      "word": "gasp",
      "pos": "n.",
      "def": "vt.vi.喘氣"
    },
    {
      "word": "gathering",
      "pos": "n.",
      "def": "聚集；集會"
    },
    {
      "word": "gay",
      "pos": "adj.",
      "def": "同性戀的 n.男同性戀"
    },
    {
      "word": "gender",
      "pos": "n.",
      "def": "性；性別"
    },
    {
      "word": "geographic",
      "pos": "adj.",
      "def": "地理的"
    },
    {
      "word": "geometry",
      "pos": "n.",
      "def": "幾何學"
    },
    {
      "word": "glacier",
      "pos": "n.",
      "def": "冰河"
    },
    {
      "word": "glare",
      "pos": "vi., vt.",
      "def": "n.閃耀；怒視"
    },
    {
      "word": "gleam",
      "pos": "n.",
      "def": "vi.閃爍；一絲光線"
    },
    {
      "word": "glee",
      "pos": "n.",
      "def": "快樂；重唱曲"
    },
    {
      "word": "glitter",
      "pos": "n.",
      "def": "vi.閃爍；閃光"
    },
    {
      "word": "gloom",
      "pos": "n.",
      "def": "黑暗；憂鬱"
    },
    {
      "word": "gnaw",
      "pos": "vt.",
      "def": "vi.咬；消耗"
    },
    {
      "word": "gobble",
      "pos": "n.",
      "def": "vi.火雞咯咯叫"
    },
    {
      "word": "gorge n.峽谷",
      "pos": "n.",
      "def": "vt.vi.狼吞虎嚥"
    },
    {
      "word": "gorgeous",
      "pos": "adj.",
      "def": "華麗的；極好的"
    },
    {
      "word": "gorilla",
      "pos": "n.",
      "def": "大猩猩；大塊頭"
    },
    {
      "word": "gospel",
      "pos": "n.",
      "def": "福音；教條"
    },
    {
      "word": "grant",
      "pos": "vt., n.",
      "def": "n.承認；允許；給予；授予物；獎學金"
    },
    {
      "word": "gravity",
      "pos": "n.",
      "def": "重力"
    },
    {
      "word": "graze",
      "pos": "vi., vt.",
      "def": "n.放牧；擦過"
    },
    {
      "word": "grease",
      "pos": "n.",
      "def": "油脂"
    },
    {
      "word": "greed",
      "pos": "n.",
      "def": "貪心；貪婪"
    },
    {
      "word": "grim",
      "pos": "adj.",
      "def": "嚴厲的；無情的"
    },
    {
      "word": "grip",
      "pos": "n.",
      "def": "vt.vi.緊握；理解"
    },
    {
      "word": "groan",
      "pos": "n.",
      "def": "vt.vi.呻吟"
    },
    {
      "word": "gross",
      "pos": "adj.",
      "def": "總的；粗略的"
    },
    {
      "word": "growl",
      "pos": "vi., vt.",
      "def": "n.嚎叫；咆哮"
    },
    {
      "word": "grumble",
      "pos": "n.",
      "def": "vt.vi.抱怨 n.怨言"
    },
    {
      "word": "guideline",
      "pos": "n.",
      "def": "準則"
    },
    {
      "word": "gulp",
      "pos": "n.",
      "def": "vt.vi.狼吞虎嚥"
    },
    {
      "word": "gust",
      "pos": "n.",
      "def": "強風；爆發"
    },
    {
      "word": "gut",
      "pos": "n.",
      "def": "腸子；內臟；勇氣"
    },
    {
      "word": "gypsy",
      "pos": "n.",
      "def": "吉普賽人"
    },
    {
      "word": "hail n.冰雹",
      "pos": "n.",
      "def": "vt.歡呼"
    },
    {
      "word": "hairstyle / hairdo",
      "pos": "n.",
      "def": "髮；型"
    },
    {
      "word": "handicap",
      "pos": "n.",
      "def": "障礙 vt.妨礙"
    },
    {
      "word": "handicraft",
      "pos": "n.",
      "def": "手工藝品"
    },
    {
      "word": "hardy",
      "pos": "adj.",
      "def": "吃苦耐勞的；強壯的；大膽；的"
    },
    {
      "word": "harness",
      "pos": "n.",
      "def": "馬具 v.套上馬具；利；用"
    },
    {
      "word": "haul",
      "pos": "n.",
      "def": "vt.vi.拖；拉；搬運"
    },
    {
      "word": "haunt",
      "pos": "vt.",
      "def": "不斷糾纏；困擾"
    },
    {
      "word": "hearty",
      "pos": "adj.",
      "def": "真誠的"
    },
    {
      "word": "heavenly",
      "pos": "adj.",
      "def": "天空的；天國的；美好；的"
    },
    {
      "word": "hedge",
      "pos": "n.",
      "def": "樹籬"
    },
    {
      "word": "heed",
      "pos": "n.",
      "def": "vt.vi.留意；注意"
    },
    {
      "word": "heighten",
      "pos": "vt.",
      "def": "vi.增高；加強"
    },
    {
      "word": "heir",
      "pos": "n.",
      "def": "繼承人"
    },
    {
      "word": "hence",
      "pos": "adv.",
      "def": "因此"
    },
    {
      "word": "herald",
      "pos": "n.",
      "def": "使者 vt.傳達"
    },
    {
      "word": "herb",
      "pos": "n.",
      "def": "藥草；草本植物"
    },
    {
      "word": "hermit",
      "pos": "n.",
      "def": "隱士"
    },
    {
      "word": "heroic",
      "pos": "adj.",
      "def": "英雄的"
    },
    {
      "word": "heterosexual",
      "pos": "adj.",
      "def": "異性戀的"
    },
    {
      "word": "hi-fi / high fidelity",
      "pos": "n.",
      "def": "高傳；真"
    },
    {
      "word": "hijack",
      "pos": "vt.",
      "def": "n.劫持"
    },
    {
      "word": "hiss",
      "pos": "vt.",
      "def": "vi.發出嘶嘶(噓)聲 n.嘶嘶(噓)；聲"
    },
    {
      "word": "hoarse",
      "pos": "adj.",
      "def": "沙啞的"
    },
    {
      "word": "hockey",
      "pos": "n.",
      "def": "曲棍球"
    },
    {
      "word": "homosexual",
      "pos": "adj.",
      "def": "n.同性戀；(的)"
    },
    {
      "word": "honk",
      "pos": "n.",
      "def": "汽車喇叭 v.發出汽車喇叭；聲"
    },
    {
      "word": "hood",
      "pos": "n.",
      "def": "引擎蓋；頭巾；兜帽"
    },
    {
      "word": "hoof",
      "pos": "n.",
      "def": "蹄"
    },
    {
      "word": "horizontal",
      "pos": "adj.",
      "def": "地平線的；水平的"
    },
    {
      "word": "hostage",
      "pos": "n.",
      "def": "人質；抵押品"
    },
    {
      "word": "hostile",
      "pos": "adj.",
      "def": "敵人的；有敵意的"
    },
    {
      "word": "hound",
      "pos": "n.",
      "def": "獵犬"
    },
    {
      "word": "housing",
      "pos": "n.",
      "def": "住宅"
    },
    {
      "word": "hover",
      "pos": "n.",
      "def": "vi.空中盤旋"
    },
    {
      "word": "howl",
      "pos": "n.",
      "def": "vi.vt.號叫"
    },
    {
      "word": "hurl",
      "pos": "vi., vt.",
      "def": "n.用力投擲"
    },
    {
      "word": "hymn",
      "pos": "n.",
      "def": "聖歌讚美詩"
    },
    {
      "word": "idiot",
      "pos": "n.",
      "def": "白癡"
    },
    {
      "word": "immense",
      "pos": "adj.",
      "def": "廣大；無限的"
    },
    {
      "word": "imperial",
      "pos": "adj.",
      "def": "帝國的"
    },
    {
      "word": "impose",
      "pos": "vt.",
      "def": "徵(稅)；加負擔於…"
    },
    {
      "word": "impulse",
      "pos": "n.",
      "def": "衝動"
    },
    {
      "word": "incense",
      "pos": "n.",
      "def": "香"
    },
    {
      "word": "index",
      "pos": "n.",
      "def": "vt.vi.索引 n.指數"
    },
    {
      "word": "indifference",
      "pos": "n.",
      "def": "冷淡；不重要"
    },
    {
      "word": "indifferent",
      "pos": "adj.",
      "def": "漠不關心的"
    },
    {
      "word": "indignant",
      "pos": "adj.",
      "def": "憤慨的"
    },
    {
      "word": "indispensable",
      "pos": "adj.",
      "def": "必需的"
    },
    {
      "word": "induce",
      "pos": "vt.",
      "def": "誘導；導致"
    },
    {
      "word": "indulge",
      "pos": "vt.",
      "def": "vi.縱容"
    },
    {
      "word": "infinite",
      "pos": "adj.",
      "def": "無限的；極大的"
    },
    {
      "word": "inherit",
      "pos": "vt.",
      "def": "繼承"
    },
    {
      "word": "initiate",
      "pos": "vt.",
      "def": "開始；創始"
    },
    {
      "word": "inland",
      "pos": "adj.",
      "def": "內地的"
    },
    {
      "word": "innumerable",
      "pos": "adj.",
      "def": "數不清的"
    },
    {
      "word": "inquire",
      "pos": "vt.",
      "def": "vi.詢問；調查"
    },
    {
      "word": "institute",
      "pos": "vt.",
      "def": "設立 n.機構"
    },
    {
      "word": "insure",
      "pos": "vt.",
      "def": "投保；保證"
    },
    {
      "word": "intent",
      "pos": "n.",
      "def": "意圖 adj.熱切的"
    },
    {
      "word": "interference",
      "pos": "n.",
      "def": "妨礙；干涉"
    },
    {
      "word": "interior",
      "pos": "adj.",
      "def": "內部的"
    },
    {
      "word": "interpretation",
      "pos": "n.",
      "def": "闡明；翻譯"
    },
    {
      "word": "interpreter",
      "pos": "n.",
      "def": "口譯員"
    },
    {
      "word": "intuition",
      "pos": "n.",
      "def": "直覺"
    },
    {
      "word": "inward",
      "pos": "adj.",
      "def": "內部的；精神上的"
    },
    {
      "word": "inward(s)",
      "pos": "n.",
      "def": "內部；裡面"
    },
    {
      "word": "isle",
      "pos": "n.",
      "def": "小島"
    },
    {
      "word": "issue n.議題；發行",
      "pos": "vt.",
      "def": "vi.發行"
    },
    {
      "word": "ivy",
      "pos": "n.",
      "def": "常春藤"
    },
    {
      "word": "jack",
      "pos": "n.",
      "def": "男人；侍者；水手"
    },
    {
      "word": "jade",
      "pos": "n.",
      "def": "玉"
    },
    {
      "word": "janitor",
      "pos": "n.",
      "def": "管理員；看門人"
    },
    {
      "word": "jasmine",
      "pos": "n.",
      "def": "茉莉"
    },
    {
      "word": "jaywalk",
      "pos": "vi.",
      "def": "擅自穿越馬路"
    },
    {
      "word": "jeer",
      "pos": "vi., vt.",
      "def": "n.嘲弄"
    },
    {
      "word": "jingle",
      "pos": "n.",
      "def": "叮噹聲 vi.發出叮噹聲"
    },
    {
      "word": "jolly",
      "pos": "adj.",
      "def": "快活的"
    },
    {
      "word": "journalism",
      "pos": "n.",
      "def": "新聞工作"
    },
    {
      "word": "journalist",
      "pos": "n.",
      "def": "新聞\\撰稿記者"
    },
    {
      "word": "jug",
      "pos": "n.",
      "def": "水罐"
    },
    {
      "word": "jury",
      "pos": "n.",
      "def": "陪審團"
    },
    {
      "word": "justify",
      "pos": "vt.",
      "def": "vi.認為正當；為...辯；護"
    },
    {
      "word": "juvenile",
      "pos": "n.",
      "def": "少年 adj.少年的"
    },
    {
      "word": "kin",
      "pos": "n.",
      "def": "親屬"
    },
    {
      "word": "kindle",
      "pos": "vt.",
      "def": "vi.點燃；激起；照亮"
    },
    {
      "word": "knowledgeable",
      "pos": "adj.",
      "def": "博學的"
    },
    {
      "word": "lad",
      "pos": "n.",
      "def": "少年；小夥子；老友"
    },
    {
      "word": "lame",
      "pos": "adj.",
      "def": "跛腳 vt.使…跛腳"
    },
    {
      "word": "landlady",
      "pos": "n.",
      "def": "女房東"
    },
    {
      "word": "landlord",
      "pos": "n.",
      "def": "地主"
    },
    {
      "word": "laser",
      "pos": "n.",
      "def": "雷射"
    },
    {
      "word": "latitude",
      "pos": "n.",
      "def": "緯度"
    },
    {
      "word": "lawmaker",
      "pos": "n.",
      "def": "立法之人"
    },
    {
      "word": "layer n.(",
      "pos": "",
      "def": "一)層"
    },
    {
      "word": "league",
      "pos": "n.",
      "def": "聯盟"
    },
    {
      "word": "legislation",
      "pos": "n.",
      "def": "制定法律"
    },
    {
      "word": "lessen",
      "pos": "vi.",
      "def": "vt.減少"
    },
    {
      "word": "lest",
      "pos": "conj.",
      "def": "以免"
    },
    {
      "word": "lieutenant",
      "pos": "n.",
      "def": "中尉"
    },
    {
      "word": "lifelong",
      "pos": "adj.",
      "def": "一輩子的"
    },
    {
      "word": "likelihood",
      "pos": "n.",
      "def": "相似之處"
    },
    {
      "word": "lime",
      "pos": "n.",
      "def": "石灰"
    },
    {
      "word": "limp",
      "pos": "vi.",
      "def": "n.跛行"
    },
    {
      "word": "linger",
      "pos": "vi.",
      "def": "徘徊"
    },
    {
      "word": "livestock",
      "pos": "n.",
      "def": "家畜"
    },
    {
      "word": "lizard",
      "pos": "n.",
      "def": "蜥蜴"
    },
    {
      "word": "locomotive",
      "pos": "n.",
      "def": "火車頭"
    },
    {
      "word": "locust",
      "pos": "n.",
      "def": "蝗蟲"
    },
    {
      "word": "lodge",
      "pos": "n.",
      "def": "小屋"
    },
    {
      "word": "lofty",
      "pos": "adj.",
      "def": "崇高的"
    },
    {
      "word": "logo",
      "pos": "n.",
      "def": "標誌"
    },
    {
      "word": "lonesome",
      "pos": "adj.",
      "def": "寂寞的"
    },
    {
      "word": "longitude",
      "pos": "n.",
      "def": "經度"
    },
    {
      "word": "lottery",
      "pos": "n.",
      "def": "彩券；樂透"
    },
    {
      "word": "lotus",
      "pos": "n.",
      "def": "蓮花"
    },
    {
      "word": "lumber",
      "pos": "n.",
      "def": "木材"
    },
    {
      "word": "lump",
      "pos": "n.",
      "def": "團；塊"
    },
    {
      "word": "magnify",
      "pos": "vt.",
      "def": "vi.放大；擴大"
    },
    {
      "word": "maiden",
      "pos": "n.",
      "def": "少女"
    },
    {
      "word": "mainland",
      "pos": "n.",
      "def": "大陸"
    },
    {
      "word": "mainstream",
      "pos": "n.",
      "def": "主流"
    },
    {
      "word": "maintenance",
      "pos": "n.",
      "def": "維持；保持"
    },
    {
      "word": "majestic",
      "pos": "adj.",
      "def": "雄偉的；威嚴的"
    },
    {
      "word": "majesty",
      "pos": "n.",
      "def": "雄偉；莊嚴"
    },
    {
      "word": "mammal",
      "pos": "n.",
      "def": "哺乳類"
    },
    {
      "word": "manifest",
      "pos": "adj.",
      "def": "顯然的；明白的"
    },
    {
      "word": "mansion",
      "pos": "n.",
      "def": "大廈；府邸"
    },
    {
      "word": "maple",
      "pos": "n.",
      "def": "楓樹；楓葉"
    },
    {
      "word": "marginal",
      "pos": "adj.",
      "def": "邊緣的"
    },
    {
      "word": "marine",
      "pos": "adj.",
      "def": "海的；海生的"
    },
    {
      "word": "marshal",
      "pos": "n.",
      "def": "元帥；高級將官"
    },
    {
      "word": "martial",
      "pos": "adj.",
      "def": "好戰的；戰爭的"
    },
    {
      "word": "marvel",
      "pos": "n.",
      "def": "令人驚奇的人事物"
    },
    {
      "word": "masculine",
      "pos": "adj.",
      "def": "男子氣概的"
    },
    {
      "word": "mash",
      "pos": "n.",
      "def": "糊狀物"
    },
    {
      "word": "massage",
      "pos": "n.",
      "def": "vt.按摩"
    },
    {
      "word": "massive",
      "pos": "adj.",
      "def": "巨大的"
    },
    {
      "word": "masterpiece",
      "pos": "n.",
      "def": "傑作"
    },
    {
      "word": "mayonnaise",
      "pos": "n.",
      "def": "美乃滋"
    },
    {
      "word": "meantime",
      "pos": "n.",
      "def": "adv.同時"
    },
    {
      "word": "mechanics",
      "pos": "n.",
      "def": "力學；機械學"
    },
    {
      "word": "mediate",
      "pos": "vt.",
      "def": "vi.居中調停 adj.居間的"
    },
    {
      "word": "menace",
      "pos": "n.",
      "def": "vt.vi.威脅"
    },
    {
      "word": "mermaid",
      "pos": "n.",
      "def": "美人魚"
    },
    {
      "word": "midst",
      "pos": "n.",
      "def": "中間"
    },
    {
      "word": "migrant",
      "pos": "adj.",
      "def": "移居的 n.移民"
    },
    {
      "word": "mileage",
      "pos": "n.",
      "def": "里程數"
    },
    {
      "word": "milestone",
      "pos": "n.",
      "def": "里程碑"
    },
    {
      "word": "mingle",
      "pos": "vt.",
      "def": "vi.混合"
    },
    {
      "word": "minimal",
      "pos": "adj.",
      "def": "最小的"
    },
    {
      "word": "mint",
      "pos": "n.",
      "def": "薄荷"
    },
    {
      "word": "miser",
      "pos": "n.",
      "def": "吝嗇鬼；守財奴"
    },
    {
      "word": "mistress",
      "pos": "n.",
      "def": "女主人"
    },
    {
      "word": "moan",
      "pos": "n.",
      "def": "vi.vt.呻吟"
    },
    {
      "word": "mock",
      "pos": "vi., vt.",
      "def": "n.嘲笑"
    },
    {
      "word": "mode",
      "pos": "n.",
      "def": "模式"
    },
    {
      "word": "modernize",
      "pos": "n.",
      "def": "現代化"
    },
    {
      "word": "modify",
      "pos": "vt.",
      "def": "修改"
    },
    {
      "word": "mold",
      "pos": "n.",
      "def": "模型；模式；鑄模"
    },
    {
      "word": "molecule",
      "pos": "n.",
      "def": "分子"
    },
    {
      "word": "monarch",
      "pos": "n.",
      "def": "君王"
    },
    {
      "word": "monstrous",
      "pos": "adj.",
      "def": "似怪物的"
    },
    {
      "word": "mortal",
      "pos": "adj.",
      "def": "會死的；致命的"
    },
    {
      "word": "moss",
      "pos": "n.",
      "def": "苔藓"
    },
    {
      "word": "motherhood",
      "pos": "n.",
      "def": "母親身分"
    },
    {
      "word": "motive",
      "pos": "n.",
      "def": "動機"
    },
    {
      "word": "mound",
      "pos": "n.",
      "def": "丘"
    },
    {
      "word": "mount",
      "pos": "vt.",
      "def": "vi.登上 n.底座"
    },
    {
      "word": "mourn",
      "pos": "vi.",
      "def": "vt.哀悼"
    },
    {
      "word": "mower",
      "pos": "n.",
      "def": "刈草機"
    },
    {
      "word": "mumble",
      "pos": "vi., vt.",
      "def": "n.咕噥"
    },
    {
      "word": "muscular",
      "pos": "adj.",
      "def": "肌肉發達的"
    },
    {
      "word": "muse",
      "pos": "vi.",
      "def": "vt.n.沉思"
    },
    {
      "word": "mustard",
      "pos": "n.",
      "def": "芥末"
    },
    {
      "word": "mutter",
      "pos": "vi.",
      "def": "vt.n.咕噥"
    },
    {
      "word": "mutton",
      "pos": "n.",
      "def": "羊肉"
    },
    {
      "word": "myth",
      "pos": "n.",
      "def": "神話"
    },
    {
      "word": "nag",
      "pos": "vt.",
      "def": "vi.使煩惱；嘮叨"
    },
    {
      "word": "naive",
      "pos": "adj.",
      "def": "天真的"
    },
    {
      "word": "nasty",
      "pos": "adj.",
      "def": "猥褻的；險惡的"
    },
    {
      "word": "navigate",
      "pos": "vt.",
      "def": "vi.導航；航行"
    },
    {
      "word": "newscast",
      "pos": "n.",
      "def": "新聞廣播"
    },
    {
      "word": "nibble",
      "pos": "vi., vt.",
      "def": "n.一點一點的嚙咬"
    },
    {
      "word": "nickel",
      "pos": "n.",
      "def": "鎳"
    },
    {
      "word": "nightingale",
      "pos": "n.",
      "def": "夜鶯"
    },
    {
      "word": "nominate",
      "pos": "vt.",
      "def": "提名"
    },
    {
      "word": "nonetheless",
      "pos": "adv.",
      "def": "conj. 然而"
    },
    {
      "word": "nonviolent",
      "pos": "adj.",
      "def": "非暴力的"
    },
    {
      "word": "nostril",
      "pos": "n.",
      "def": "鼻孔"
    },
    {
      "word": "notable",
      "pos": "adj.",
      "def": "著名的"
    },
    {
      "word": "noticeable",
      "pos": "adj.",
      "def": "顯著的"
    },
    {
      "word": "notify",
      "pos": "vt.",
      "def": "通知；告知"
    },
    {
      "word": "notion",
      "pos": "n.",
      "def": "概念；想法"
    },
    {
      "word": "novice",
      "pos": "n.",
      "def": "新手"
    },
    {
      "word": "nowhere",
      "pos": "n.",
      "def": "adv.不知名的地方"
    },
    {
      "word": "nucleus",
      "pos": "n.",
      "def": "核"
    },
    {
      "word": "nude",
      "pos": "adj.",
      "def": "裸的；不加修飾的"
    },
    {
      "word": "oar",
      "pos": "n.",
      "def": "槳"
    },
    {
      "word": "oasis",
      "pos": "n.",
      "def": "綠洲"
    },
    {
      "word": "oath",
      "pos": "n.",
      "def": "誓言"
    },
    {
      "word": "oatmeal",
      "pos": "n.",
      "def": "燕麥粥"
    },
    {
      "word": "oblong",
      "pos": "n.",
      "def": "矩形；橢圓形"
    },
    {
      "word": "observer",
      "pos": "n.",
      "def": "觀測員"
    },
    {
      "word": "obstinate",
      "pos": "adj.",
      "def": "頑固的"
    },
    {
      "word": "occurrence",
      "pos": "n.",
      "def": "事件"
    },
    {
      "word": "octopus",
      "pos": "n.",
      "def": "章魚"
    },
    {
      "word": "odds",
      "pos": "n.",
      "def": "機會"
    },
    {
      "word": "odor",
      "pos": "n.",
      "def": "香味；臭味"
    },
    {
      "word": "olive",
      "pos": "n.",
      "def": "橄欖"
    },
    {
      "word": "opponent",
      "pos": "n.",
      "def": "對手"
    },
    {
      "word": "optimism",
      "pos": "n.",
      "def": "樂觀主義"
    },
    {
      "word": "orchard",
      "pos": "n.",
      "def": "果園"
    },
    {
      "word": "organizer",
      "pos": "n.",
      "def": "組織者"
    },
    {
      "word": "orient",
      "pos": "n.",
      "def": "東方"
    },
    {
      "word": "oriental",
      "pos": "adj.",
      "def": "東方的"
    },
    {
      "word": "ornament",
      "pos": "n.",
      "def": "裝飾品"
    },
    {
      "word": "orphanage",
      "pos": "n.",
      "def": "孤兒"
    },
    {
      "word": "ostrich",
      "pos": "n.",
      "def": "鴕鳥"
    },
    {
      "word": "ounce",
      "pos": "n.",
      "def": "盎司"
    },
    {
      "word": "outdo",
      "pos": "vt.",
      "def": "勝過；超越"
    },
    {
      "word": "outgoing",
      "pos": "adj.",
      "def": "外向的；外出的"
    },
    {
      "word": "output",
      "pos": "n.",
      "def": "vt.出產；生產"
    },
    {
      "word": "outsider",
      "pos": "n.",
      "def": "局外人"
    },
    {
      "word": "outskirts",
      "pos": "n.",
      "def": "郊區"
    },
    {
      "word": "outward",
      "pos": "adj.",
      "def": "adv.往外去的(地)"
    },
    {
      "word": "outward(s)",
      "pos": "adv.",
      "def": "往外去"
    },
    {
      "word": "overall",
      "pos": "n., adj.",
      "def": "全部的 adv.大體上來說；連身工作服"
    },
    {
      "word": "overdo",
      "pos": "vt.",
      "def": "vi.(把…) 做得過分"
    },
    {
      "word": "overeat",
      "pos": "vi.",
      "def": "vt.過度飲食"
    },
    {
      "word": "overflow",
      "pos": "vi.",
      "def": "vt.氾濫"
    },
    {
      "word": "overhear",
      "pos": "vt.",
      "def": "vi.無意中聽到"
    },
    {
      "word": "oversleep",
      "pos": "vi.",
      "def": "vt.睡過頭"
    },
    {
      "word": "overwhelm",
      "pos": "vt.",
      "def": "戰勝；淹沒"
    },
    {
      "word": "overwork",
      "pos": "vt.",
      "def": "vi.過度工作"
    },
    {
      "word": "oyster",
      "pos": "n.",
      "def": "蛤蠣"
    },
    {
      "word": "ozone",
      "pos": "n.",
      "def": "臭氧"
    },
    {
      "word": "pacific",
      "pos": "adj.",
      "def": "和平的"
    },
    {
      "word": "packet",
      "pos": "n.",
      "def": "小包裹"
    },
    {
      "word": "paddle",
      "pos": "n.",
      "def": "槳"
    },
    {
      "word": "paradox",
      "pos": "n.",
      "def": "自相矛盾的人事物"
    },
    {
      "word": "pane",
      "pos": "n.",
      "def": "窗玻璃"
    },
    {
      "word": "parallel",
      "pos": "adj.",
      "def": "平行的；並聯的"
    },
    {
      "word": "parlor",
      "pos": "n.",
      "def": "起居室"
    },
    {
      "word": "participant",
      "pos": "n.",
      "def": "參與者"
    },
    {
      "word": "particle",
      "pos": "n.",
      "def": "微粒"
    },
    {
      "word": "partly",
      "pos": "adv.",
      "def": "部分地"
    },
    {
      "word": "passionate",
      "pos": "adj.",
      "def": "熱情的"
    },
    {
      "word": "pastime",
      "pos": "n.",
      "def": "消遣、娛樂"
    },
    {
      "word": "pastry",
      "pos": "n.",
      "def": "酥皮點心"
    },
    {
      "word": "patch",
      "pos": "n.",
      "def": "補釘；貼片"
    },
    {
      "word": "patent",
      "pos": "n.",
      "def": "專利"
    },
    {
      "word": "patriot",
      "pos": "n.",
      "def": "愛國者"
    },
    {
      "word": "patrol",
      "pos": "n.",
      "def": "vi.vt.巡邏"
    },
    {
      "word": "patron",
      "pos": "n.",
      "def": "贊助者；主顧"
    },
    {
      "word": "peacock",
      "pos": "n.",
      "def": "孔雀"
    },
    {
      "word": "peasant",
      "pos": "n.",
      "def": "佃農"
    },
    {
      "word": "peck",
      "pos": "vi., vt.",
      "def": "n.啄"
    },
    {
      "word": "peddler",
      "pos": "n.",
      "def": "小販"
    },
    {
      "word": "peek",
      "pos": "vi.",
      "def": "n.偷看；窺視"
    },
    {
      "word": "peg",
      "pos": "n.",
      "def": "栓；樁"
    },
    {
      "word": "penetrate",
      "pos": "vt.",
      "def": "vi.穿透"
    },
    {
      "word": "perceive",
      "pos": "vt.",
      "def": "察覺；感知"
    },
    {
      "word": "perch n.棲木",
      "pos": "vi.",
      "def": "vt.(使)棲息"
    },
    {
      "word": "performer",
      "pos": "n.",
      "def": "表演者"
    },
    {
      "word": "peril",
      "pos": "n.",
      "def": "危險的事物"
    },
    {
      "word": "perish",
      "pos": "vi.",
      "def": "vt.消滅；枯萎"
    },
    {
      "word": "permissible",
      "pos": "adj.",
      "def": "可允許的"
    },
    {
      "word": "persist",
      "pos": "vi.",
      "def": "vt.堅持(說)"
    },
    {
      "word": "personnel n.(",
      "pos": "",
      "def": "總稱)人員"
    },
    {
      "word": "pessimism",
      "pos": "n.",
      "def": "悲觀主義"
    },
    {
      "word": "pier",
      "pos": "n.",
      "def": "碼頭"
    },
    {
      "word": "pilgrim",
      "pos": "n.",
      "def": "朝聖者；香客"
    },
    {
      "word": "pillar",
      "pos": "n.",
      "def": "柱子"
    },
    {
      "word": "pimple",
      "pos": "n.",
      "def": "面匏"
    },
    {
      "word": "pinch",
      "pos": "vi., vt.",
      "def": "n.擰；夾"
    },
    {
      "word": "piss",
      "pos": "vi.",
      "def": "vt.n.小便"
    },
    {
      "word": "pistol",
      "pos": "n.",
      "def": "手槍"
    },
    {
      "word": "plague",
      "pos": "vt., n.",
      "def": "瘟疫；鼠疫；討厭的人；使…苦惱(折磨)"
    },
    {
      "word": "plantation",
      "pos": "n.",
      "def": "農園；造林地"
    },
    {
      "word": "playwright",
      "pos": "n.",
      "def": "劇作家"
    },
    {
      "word": "plea",
      "pos": "n.",
      "def": "請求、懇託；藉口"
    },
    {
      "word": "plead",
      "pos": "vt.",
      "def": "vi.(為…)辯護；承認"
    },
    {
      "word": "pledge",
      "pos": "n.",
      "def": "vt.保證；立誓"
    },
    {
      "word": "plow",
      "pos": "n.",
      "def": "vt.vi.犁；耕地"
    },
    {
      "word": "pluck",
      "pos": "vi., vt.",
      "def": "n.拔"
    },
    {
      "word": "plunge",
      "pos": "vi., vt.",
      "def": "n.(使)投入；跳入"
    },
    {
      "word": "pocketbook",
      "pos": "n.",
      "def": "袖珍書"
    },
    {
      "word": "poetic",
      "pos": "adj.",
      "def": "詩的"
    },
    {
      "word": "poke",
      "pos": "vi., vt.",
      "def": "n.戳"
    },
    {
      "word": "poultry",
      "pos": "n.",
      "def": "家禽"
    },
    {
      "word": "polar",
      "pos": "adj.",
      "def": "極地的"
    },
    {
      "word": "porch",
      "pos": "n.",
      "def": "門廊；入口處"
    },
    {
      "word": "potential",
      "pos": "adj.",
      "def": "潛在的"
    },
    {
      "word": "prairie",
      "pos": "n.",
      "def": "大草原；牧場"
    },
    {
      "word": "preach",
      "pos": "vi., vt.",
      "def": "n.傳道；鼓吹"
    },
    {
      "word": "precaution",
      "pos": "n.",
      "def": "預防(措施)；警惕"
    },
    {
      "word": "preference",
      "pos": "n.",
      "def": "偏好的事物"
    },
    {
      "word": "prehistoric",
      "pos": "adj.",
      "def": "史前的"
    },
    {
      "word": "prevail",
      "pos": "vi.",
      "def": "戰勝"
    },
    {
      "word": "preview",
      "pos": "n.",
      "def": "vt.預習"
    },
    {
      "word": "prey",
      "pos": "n.",
      "def": "獵物"
    },
    {
      "word": "priceless",
      "pos": "adj.",
      "def": "無價的"
    },
    {
      "word": "prick",
      "pos": "vi., vt.",
      "def": "n.刺(痛)"
    },
    {
      "word": "prior",
      "pos": "adj.",
      "def": "優先的"
    },
    {
      "word": "priority",
      "pos": "n.",
      "def": "優先(權)"
    },
    {
      "word": "procession",
      "pos": "n.",
      "def": "行進隊伍"
    },
    {
      "word": "profile",
      "pos": "n.",
      "def": "輪廓；外型；人物簡介"
    },
    {
      "word": "prolong",
      "pos": "vt.",
      "def": "延長；拖長"
    },
    {
      "word": "prop",
      "pos": "n.",
      "def": "支柱 vt.支撐；道具(property)"
    },
    {
      "word": "prophet",
      "pos": "n.",
      "def": "先知"
    },
    {
      "word": "proportion",
      "pos": "n.",
      "def": "比例；比率"
    },
    {
      "word": "prospect",
      "pos": "n.",
      "def": "指望；預期；景象"
    },
    {
      "word": "province",
      "pos": "n.",
      "def": "省"
    },
    {
      "word": "prune n.梅乾",
      "pos": "vt.",
      "def": "vi.修剪"
    },
    {
      "word": "publicize",
      "pos": "vt.",
      "def": "宣傳；公布"
    },
    {
      "word": "puff",
      "pos": "n.",
      "def": "泡芙"
    },
    {
      "word": "pulse",
      "pos": "n.",
      "def": "脈搏"
    },
    {
      "word": "purchase",
      "pos": "vt.",
      "def": "n.購買"
    },
    {
      "word": "pyramid",
      "pos": "n.",
      "def": "金字塔"
    },
    {
      "word": "quack",
      "pos": "n.",
      "def": "呱呱聲；庸醫"
    },
    {
      "word": "qualify",
      "pos": "vt.",
      "def": "使合格 vi.取得資格"
    },
    {
      "word": "quart",
      "pos": "n.",
      "def": "夸脫(英美容量單位)"
    },
    {
      "word": "quest",
      "pos": "n.",
      "def": "vi.vt.尋求；追求"
    },
    {
      "word": "quiver",
      "pos": "vi.",
      "def": "vt.n.發抖；(使)顫動"
    },
    {
      "word": "rack",
      "pos": "n.",
      "def": "架子 vt.把…放架子上"
    },
    {
      "word": "",
      "pos": "vt.",
      "def": "折磨；過度使用"
    },
    {
      "word": "radish",
      "pos": "n.",
      "def": "蘿蔔"
    },
    {
      "word": "radius",
      "pos": "n.",
      "def": "半徑"
    },
    {
      "word": "ragged",
      "pos": "adj.",
      "def": "破爛的"
    },
    {
      "word": "rail",
      "pos": "n.",
      "def": "欄杆；扶手；鐵軌"
    },
    {
      "word": "rally",
      "pos": "vi., vt.",
      "def": "n.重整旗鼓；集合"
    },
    {
      "word": "ranch",
      "pos": "n.",
      "def": "大牧場"
    },
    {
      "word": "rascal",
      "pos": "n.",
      "def": "流氓；無賴"
    },
    {
      "word": "ratio",
      "pos": "n.",
      "def": "比例"
    },
    {
      "word": "rattle",
      "pos": "vi., vt.",
      "def": "n.(使發出)喀喀聲"
    },
    {
      "word": "realm",
      "pos": "n.",
      "def": "王國"
    },
    {
      "word": "reap",
      "pos": "vt.",
      "def": "vi.收割"
    },
    {
      "word": "rear",
      "pos": "n.",
      "def": "後方 vt.撫養 vi.高聳"
    },
    {
      "word": "reckless",
      "pos": "adj.",
      "def": "魯莽的"
    },
    {
      "word": "reckon",
      "pos": "vt.",
      "def": "vi.計算；認為"
    },
    {
      "word": "recommend",
      "pos": "vt.",
      "def": "vi.推薦"
    },
    {
      "word": "reef",
      "pos": "n.",
      "def": "礁石"
    },
    {
      "word": "reel n.(",
      "pos": "",
      "def": "一)捲、捆"
    },
    {
      "word": "referee",
      "pos": "n.",
      "def": "裁判(籃球、足球、拳擊)"
    },
    {
      "word": "refuge",
      "pos": "n.",
      "def": "避難所"
    },
    {
      "word": "sanctuary",
      "pos": "n.",
      "def": "聖殿；庇護所"
    },
    {
      "word": "refute",
      "pos": "vt.",
      "def": "駁斥、反駁"
    },
    {
      "word": "reign n.(",
      "pos": "",
      "def": "君王)在位期間"
    },
    {
      "word": "rejoice",
      "pos": "vi.",
      "def": "vt.歡欣；快樂"
    },
    {
      "word": "relic",
      "pos": "n.",
      "def": "遺物"
    },
    {
      "word": "reminder",
      "pos": "n.",
      "def": "提醒物"
    },
    {
      "word": "repay",
      "pos": "vt.",
      "def": "vi.回報"
    },
    {
      "word": "reproduce",
      "pos": "vt.",
      "def": "vi.繁殖"
    },
    {
      "word": "reptile",
      "pos": "n.",
      "def": "爬蟲類"
    },
    {
      "word": "republican",
      "pos": "adj.",
      "def": "共和政體的"
    },
    {
      "word": "resent",
      "pos": "vt.",
      "def": "怨恨"
    },
    {
      "word": "resentment",
      "pos": "n.",
      "def": "怨恨"
    },
    {
      "word": "reside",
      "pos": "vi.",
      "def": "居住"
    },
    {
      "word": "residence",
      "pos": "n.",
      "def": "住所"
    },
    {
      "word": "resident",
      "pos": "n.",
      "def": "居民"
    },
    {
      "word": "resort",
      "pos": "vi.",
      "def": "訴諸於… n.渡假勝地"
    },
    {
      "word": "restrain",
      "pos": "vt.",
      "def": "抑制"
    },
    {
      "word": "resume",
      "pos": "vt.",
      "def": "vi.重新開始；繼續"
    },
    {
      "word": "retort",
      "pos": "vi., vt.",
      "def": "n.反擊；反駁"
    },
    {
      "word": "reverse",
      "pos": "adj.",
      "def": "vt.vi.n.顛倒(的)；倒轉"
    },
    {
      "word": "revive",
      "pos": "vi.",
      "def": "vt.(使)復甦"
    },
    {
      "word": "revolt",
      "pos": "vi.",
      "def": "造反 vt.使厭惡 n.反；叛"
    },
    {
      "word": "revolve",
      "pos": "vi.",
      "def": "vt.(使)旋轉"
    },
    {
      "word": "rhinoceros",
      "pos": "n.",
      "def": "犀牛(rhino )"
    },
    {
      "word": "rib",
      "pos": "n.",
      "def": "肋骨"
    },
    {
      "word": "ridge",
      "pos": "n.",
      "def": "山脊；梁"
    },
    {
      "word": "ridiculous",
      "pos": "adj.",
      "def": "荒謬的"
    },
    {
      "word": "rifle",
      "pos": "n.",
      "def": "步槍"
    },
    {
      "word": "rigid",
      "pos": "adj.",
      "def": "嚴苛的"
    },
    {
      "word": "rim",
      "pos": "n.",
      "def": "邊緣"
    },
    {
      "word": "rip",
      "pos": "vt.",
      "def": "vi.撕扯；裂開 n.裂縫"
    },
    {
      "word": "ripple",
      "pos": "n.",
      "def": "漣漪"
    },
    {
      "word": "rival",
      "pos": "n.",
      "def": "對手"
    },
    {
      "word": "roam",
      "pos": "vi.",
      "def": "vt.n.漫遊"
    },
    {
      "word": "robin",
      "pos": "n.",
      "def": "知更鳥"
    },
    {
      "word": "robust",
      "pos": "adj.",
      "def": "強健的"
    },
    {
      "word": "rod",
      "pos": "n.",
      "def": "棍子"
    },
    {
      "word": "rubbish",
      "pos": "n.",
      "def": "垃圾"
    },
    {
      "word": "rugged",
      "pos": "adj.",
      "def": "高低不平的"
    },
    {
      "word": "rumble",
      "pos": "vi.",
      "def": "vt.n.隆隆響"
    },
    {
      "word": "rustle",
      "pos": "vi.",
      "def": "vt.n.沙沙作響"
    },
    {
      "word": "sacred",
      "pos": "adj.",
      "def": "神聖的"
    },
    {
      "word": "saddle",
      "pos": "n.",
      "def": "馬鞍"
    },
    {
      "word": "saint",
      "pos": "n.",
      "def": "聖徒"
    },
    {
      "word": "salmon",
      "pos": "n.",
      "def": "鮭魚"
    },
    {
      "word": "salute",
      "pos": "vi., vt.",
      "def": "n.敬禮"
    },
    {
      "word": "sandal",
      "pos": "n.",
      "def": "涼鞋"
    },
    {
      "word": "savage",
      "pos": "adj.",
      "def": "野蠻的 n.野蠻人"
    },
    {
      "word": "scan",
      "pos": "vi., vt.",
      "def": "n.掃描"
    },
    {
      "word": "scandal",
      "pos": "n.",
      "def": "醜聞"
    },
    {
      "word": "scar",
      "pos": "n.",
      "def": "傷痕"
    },
    {
      "word": "scent",
      "pos": "n.",
      "def": "香氣"
    },
    {
      "word": "scheme",
      "pos": "n.",
      "def": "計畫"
    },
    {
      "word": "scorn",
      "pos": "n.",
      "def": "vt.vi.輕蔑"
    },
    {
      "word": "scramble",
      "pos": "vi.",
      "def": "n.爬行 vt.倉促湊成"
    },
    {
      "word": "scrap",
      "pos": "n.",
      "def": "碎片 vt.當廢紙扔掉"
    },
    {
      "word": "scrape",
      "pos": "vi., vt.",
      "def": "n.刮；擦"
    },
    {
      "word": "scroll",
      "pos": "n.",
      "def": "卷軸"
    },
    {
      "word": "sculptor",
      "pos": "n.",
      "def": "雕刻家"
    },
    {
      "word": "secure adj.安全的",
      "pos": "vt.",
      "def": "vi.(使)變安全"
    },
    {
      "word": "segment",
      "pos": "n.",
      "def": "部分"
    },
    {
      "word": "sensation",
      "pos": "n.",
      "def": "感覺；轟動(的事)"
    },
    {
      "word": "sensitivity",
      "pos": "n.",
      "def": "敏感"
    },
    {
      "word": "sentiment",
      "pos": "n.",
      "def": "情緒"
    },
    {
      "word": "sergeant",
      "pos": "n.",
      "def": "陸軍中士"
    },
    {
      "word": "series",
      "pos": "n.",
      "def": "系列"
    },
    {
      "word": "sermon",
      "pos": "n.",
      "def": "佈道"
    },
    {
      "word": "server",
      "pos": "n.",
      "def": "服務生；發球員；伺服器"
    },
    {
      "word": "setting",
      "pos": "n.",
      "def": "安裝；環境；背景；佈景"
    },
    {
      "word": "shabby",
      "pos": "adj.",
      "def": "破爛的"
    },
    {
      "word": "sharpen",
      "pos": "vt.",
      "def": "vi.(使)變銳利；磨尖"
    },
    {
      "word": "shatter",
      "pos": "vt.",
      "def": "vi.粉碎"
    },
    {
      "word": "sheriff",
      "pos": "n.",
      "def": "警長"
    },
    {
      "word": "shield",
      "pos": "n.",
      "def": "盾牌"
    },
    {
      "word": "shiver",
      "pos": "vi.",
      "def": "n.打顫"
    },
    {
      "word": "shortage",
      "pos": "n.",
      "def": "短缺"
    },
    {
      "word": "shortcoming",
      "pos": "n.",
      "def": "缺點"
    },
    {
      "word": "shove",
      "pos": "vt.",
      "def": "vi.推"
    },
    {
      "word": "shred",
      "pos": "n.",
      "def": "碎片 vt.切成條狀"
    },
    {
      "word": "shriek",
      "pos": "vi.",
      "def": "n.尖叫"
    },
    {
      "word": "shrine",
      "pos": "n.",
      "def": "聖壇"
    },
    {
      "word": "shrub",
      "pos": "n.",
      "def": "灌木"
    },
    {
      "word": "shudder",
      "pos": "vi.",
      "def": "n.發抖"
    },
    {
      "word": "shutter",
      "pos": "n.",
      "def": "百葉窗；快門"
    },
    {
      "word": "silkworm",
      "pos": "n.",
      "def": "蠶"
    },
    {
      "word": "simmer",
      "pos": "vi.",
      "def": "vt.n.燉"
    },
    {
      "word": "skeleton",
      "pos": "n.",
      "def": "骨骸"
    },
    {
      "word": "skull",
      "pos": "n.",
      "def": "頭蓋骨"
    },
    {
      "word": "slap",
      "pos": "n.",
      "def": "vt.vi.摑"
    },
    {
      "word": "slaughter",
      "pos": "vt.",
      "def": "n.屠宰"
    },
    {
      "word": "slay",
      "pos": "vt.",
      "def": "vi.殺害"
    },
    {
      "word": "sloppy",
      "pos": "adj.",
      "def": "草率的"
    },
    {
      "word": "slump",
      "pos": "vi.",
      "def": "vt.n.(使)衰落"
    },
    {
      "word": "sly",
      "pos": "adj.",
      "def": "狡猾的"
    },
    {
      "word": "smash",
      "pos": "vi., vt.",
      "def": "n.粉碎"
    },
    {
      "word": "snarl",
      "pos": "vi.",
      "def": "vt.n.吠；咆哮"
    },
    {
      "word": "snatch",
      "pos": "vi., vt.",
      "def": "n.奪走"
    },
    {
      "word": "sneak",
      "pos": "vi.",
      "def": "vt.n.偷偷地走/做"
    },
    {
      "word": "sneaker(s)",
      "pos": "n.",
      "def": "運動鞋；鬼祟的人"
    },
    {
      "word": "sniff",
      "pos": "vi., vt.",
      "def": "n.嗅"
    },
    {
      "word": "snore",
      "pos": "vi.",
      "def": "n.打呼"
    },
    {
      "word": "snort",
      "pos": "vi.",
      "def": "vt.n.噴鼻息"
    },
    {
      "word": "soak",
      "pos": "vi., vt.",
      "def": "n.浸泡"
    },
    {
      "word": "sober",
      "pos": "adj.",
      "def": "清醒的"
    },
    {
      "word": "soften",
      "pos": "vt.",
      "def": "vi.(使)變柔軟"
    },
    {
      "word": "sole",
      "pos": "n.",
      "def": "鞋底 (2) adj.單獨的"
    },
    {
      "word": "solemn",
      "pos": "adj.",
      "def": "莊嚴的"
    },
    {
      "word": "solitary",
      "pos": "adj.",
      "def": "獨自的"
    },
    {
      "word": "solo",
      "pos": "n.",
      "def": "獨唱；單飛 adj.單獨的"
    },
    {
      "word": "sovereign",
      "pos": "adj.",
      "def": "具獨立主權的"
    },
    {
      "word": "sow",
      "pos": "vt.",
      "def": "vi.播種 n.母豬"
    },
    {
      "word": "spacecraft",
      "pos": "n.",
      "def": "太空船"
    },
    {
      "word": "spaceship",
      "pos": "n.",
      "def": "太空船"
    },
    {
      "word": "specialist",
      "pos": "n.",
      "def": "專家"
    },
    {
      "word": "specimen",
      "pos": "n.",
      "def": "標本"
    },
    {
      "word": "spectacle",
      "pos": "n.",
      "def": "奇觀；眼鏡(+s)"
    },
    {
      "word": "spectator",
      "pos": "n.",
      "def": "觀眾"
    },
    {
      "word": "spine",
      "pos": "n.",
      "def": "脊椎"
    },
    {
      "word": "splendor",
      "pos": "n.",
      "def": "壯麗"
    },
    {
      "word": "sponge",
      "pos": "n.",
      "def": "海綿"
    },
    {
      "word": "spotlight",
      "pos": "n.",
      "def": "聚光燈"
    },
    {
      "word": "sprint",
      "pos": "vi.",
      "def": "n.衝刺"
    },
    {
      "word": "spur n.靴刺",
      "pos": "vt.",
      "def": "vi.激勵"
    },
    {
      "word": "squash n.南瓜；回力球 vt.vi.",
      "pos": "n.",
      "def": "擠壓"
    },
    {
      "word": "squat",
      "pos": "vi.",
      "def": "n.蹲"
    },
    {
      "word": "stack n.(",
      "pos": "",
      "def": "乾草)堆"
    },
    {
      "word": "slam",
      "pos": "vi., vt.",
      "def": "n.猛地關上；砰然聲"
    },
    {
      "word": "stagger",
      "pos": "vi.",
      "def": "vt.n.(使)蹣跚"
    },
    {
      "word": "stain",
      "pos": "n.",
      "def": "沾汙；汙點"
    },
    {
      "word": "stake",
      "pos": "n.",
      "def": "樁；賭注；危險"
    },
    {
      "word": "stalk n.莖；葉柄",
      "pos": "v.",
      "def": "n.悄悄追蹤"
    },
    {
      "word": "stall n.(",
      "pos": "",
      "def": "牲畜的)欄；廄"
    },
    {
      "word": "stanza",
      "pos": "n.",
      "def": "詩節"
    },
    {
      "word": "startle",
      "pos": "vi., vt.",
      "def": "n.(使)驚嚇"
    },
    {
      "word": "statesman",
      "pos": "n.",
      "def": "政治家"
    },
    {
      "word": "statistic(s)",
      "pos": "n.",
      "def": "統計數字"
    },
    {
      "word": "statistical",
      "pos": "adj.",
      "def": "統計數字的"
    },
    {
      "word": "steamer",
      "pos": "n.",
      "def": "汽船；蒸籠"
    },
    {
      "word": "steer",
      "pos": "vt.",
      "def": "vi.駕駛"
    },
    {
      "word": "stereotype",
      "pos": "n.",
      "def": "刻板印象"
    },
    {
      "word": "stern",
      "pos": "adj.",
      "def": "嚴厲的"
    },
    {
      "word": "stew",
      "pos": "vt.",
      "def": "vi.燉 n.燉肉"
    },
    {
      "word": "steward n.(",
      "pos": "",
      "def": "火車等的)男服務員"
    },
    {
      "word": "stewardess",
      "pos": "n.",
      "def": "女服務員"
    },
    {
      "word": "attendant",
      "pos": "n.",
      "def": "服務員"
    },
    {
      "word": "stink",
      "pos": "vi.",
      "def": "發臭；爛透了 n.惡臭"
    },
    {
      "word": "stock",
      "pos": "n.",
      "def": "股票；存貨"
    },
    {
      "word": "stoop",
      "pos": "vi.",
      "def": "n.俯身"
    },
    {
      "word": "storage",
      "pos": "n.",
      "def": "貯藏"
    },
    {
      "word": "stout",
      "pos": "adj.",
      "def": "堅固的"
    },
    {
      "word": "straighten",
      "pos": "vt.",
      "def": "vi.弄直；好轉"
    },
    {
      "word": "straightforward",
      "pos": "adj.",
      "def": "直率的"
    },
    {
      "word": "strain",
      "pos": "vi., vt.",
      "def": "n.拉緊"
    },
    {
      "word": "strait",
      "pos": "n.",
      "def": "海峽"
    },
    {
      "word": "strand",
      "pos": "vt., n.",
      "def": "線；繩；絞(繩索等)；使…擱淺"
    },
    {
      "word": "strap",
      "pos": "n.",
      "def": "帶子"
    },
    {
      "word": "stray",
      "pos": "vi., n.",
      "def": "adj.迷路(的)；流浪(的)；迷路者；流浪者"
    },
    {
      "word": "streak",
      "pos": "n.",
      "def": "條紋"
    },
    {
      "word": "stride",
      "pos": "vi.",
      "def": "vt.n.大步走"
    },
    {
      "word": "stripe",
      "pos": "n.",
      "def": "條紋"
    },
    {
      "word": "stroll",
      "pos": "vi.",
      "def": "vt.n.閒逛"
    },
    {
      "word": "structural",
      "pos": "adj.",
      "def": "結構的"
    },
    {
      "word": "stumble",
      "pos": "vi.",
      "def": "vt.絆倒"
    },
    {
      "word": "stump",
      "pos": "n.",
      "def": "殘幹；根株 vi.笨重地走"
    },
    {
      "word": "stun",
      "pos": "v.",
      "def": "使昏厥"
    },
    {
      "word": "sturdy",
      "pos": "adj.",
      "def": "結實的"
    },
    {
      "word": "stutter",
      "pos": "vi.",
      "def": "vt.n.結巴"
    },
    {
      "word": "stylish",
      "pos": "adj.",
      "def": "流行的"
    },
    {
      "word": "submit",
      "pos": "",
      "def": "使…)順服；提交"
    },
    {
      "word": "substantial",
      "pos": "adj.",
      "def": "真實的；大量的"
    },
    {
      "word": "substitute n.替代物",
      "pos": "vt.",
      "def": "vi.代"
    },
    {
      "word": "suitcase",
      "pos": "n.",
      "def": "手提箱"
    },
    {
      "word": "sulfur",
      "pos": "n.",
      "def": "硫磺"
    },
    {
      "word": "summon",
      "pos": "vt.",
      "def": "召喚"
    },
    {
      "word": "superficial",
      "pos": "adj.",
      "def": "膚淺的"
    },
    {
      "word": "superstition",
      "pos": "n.",
      "def": "迷信"
    },
    {
      "word": "supervise",
      "pos": "vt.",
      "def": "vi.監督"
    },
    {
      "word": "supervisor",
      "pos": "n.",
      "def": "監督者"
    },
    {
      "word": "suppress",
      "pos": "vt.",
      "def": "鎮壓"
    },
    {
      "word": "supreme",
      "pos": "adj.",
      "def": "最高的"
    },
    {
      "word": "surge",
      "pos": "vi.",
      "def": "n.洶湧；急升"
    },
    {
      "word": "suspend",
      "pos": "vt.",
      "def": "vi.懸掛；使…中止"
    },
    {
      "word": "sustain",
      "pos": "vt.",
      "def": "支撐"
    },
    {
      "word": "swamp",
      "pos": "n.",
      "def": "沼澤"
    },
    {
      "word": "swarm n.(",
      "pos": "",
      "def": "蟲、蜂)群"
    },
    {
      "word": "sympathize",
      "pos": "vi.",
      "def": "同情"
    },
    {
      "word": "tackle",
      "pos": "vt.",
      "def": "vi.解決；擒抱"
    },
    {
      "word": "tan",
      "pos": "n.",
      "def": "古銅色"
    },
    {
      "word": "tangle",
      "pos": "vi., vt.",
      "def": "n.纏繞；糾結"
    },
    {
      "word": "tar",
      "pos": "n.",
      "def": "焦油"
    },
    {
      "word": "tart",
      "pos": "n.",
      "def": "水果蛋糕 adj.酸的"
    },
    {
      "word": "taunt",
      "pos": "vt.",
      "def": "n.嘲弄"
    },
    {
      "word": "tavern",
      "pos": "n.",
      "def": "酒館"
    },
    {
      "word": "teller",
      "pos": "n.",
      "def": "敘述者；出納員"
    },
    {
      "word": "tempo",
      "pos": "n.",
      "def": "拍子"
    },
    {
      "word": "tempt",
      "pos": "vt.",
      "def": "誘惑"
    },
    {
      "word": "temptation",
      "pos": "n.",
      "def": "誘惑"
    },
    {
      "word": "tenant",
      "pos": "n.",
      "def": "租戶"
    },
    {
      "word": "tentative",
      "pos": "adj.",
      "def": "暫時的"
    },
    {
      "word": "terminal",
      "pos": "adj.",
      "def": "末端的 n.總站"
    },
    {
      "word": "terrace",
      "pos": "n.",
      "def": "露臺；階梯看台；梯田"
    },
    {
      "word": "thigh",
      "pos": "n.",
      "def": "大腿"
    },
    {
      "word": "thorn",
      "pos": "n.",
      "def": "刺"
    },
    {
      "word": "thrill",
      "pos": "vi., vt.",
      "def": "n.(使)激動"
    },
    {
      "word": "thriller",
      "pos": "n.",
      "def": "驚悚作品"
    },
    {
      "word": "throne",
      "pos": "n.",
      "def": "王位"
    },
    {
      "word": "throng",
      "pos": "n.",
      "def": "群眾"
    },
    {
      "word": "thrust",
      "pos": "vi., vt.",
      "def": "n.猛推；刺"
    },
    {
      "word": "tick",
      "pos": "n.",
      "def": "vi.vt.(發)滴答聲"
    },
    {
      "word": "tile",
      "pos": "n.",
      "def": "磁磚，瓦片"
    },
    {
      "word": "tilt",
      "pos": "vi., vt.",
      "def": "n.(使)傾斜"
    },
    {
      "word": "tin",
      "pos": "n.",
      "def": "錫"
    },
    {
      "word": "tiptoe",
      "pos": "n.",
      "def": "腳尖 vi.踮腳走"
    },
    {
      "word": "toad",
      "pos": "n.",
      "def": "蟾蜍"
    },
    {
      "word": "toil",
      "pos": "n.",
      "def": "辛勞 vi.苦幹"
    },
    {
      "word": "token",
      "pos": "n.",
      "def": "象徵"
    },
    {
      "word": "torch",
      "pos": "n.",
      "def": "火炬"
    },
    {
      "word": "torment",
      "pos": "n.",
      "def": "痛苦"
    },
    {
      "word": "torrent",
      "pos": "n.",
      "def": "急流"
    },
    {
      "word": "torture",
      "pos": "n.",
      "def": "痛苦"
    },
    {
      "word": "tournament",
      "pos": "n.",
      "def": "錦標賽"
    },
    {
      "word": "toxic",
      "pos": "adj.",
      "def": "有毒的"
    },
    {
      "word": "trademark",
      "pos": "n.",
      "def": "商標"
    },
    {
      "word": "traitor",
      "pos": "n.",
      "def": "叛逆者"
    },
    {
      "word": "tramp n.流浪漢",
      "pos": "vi.",
      "def": "vt.n.沉重的走"
    },
    {
      "word": "trample",
      "pos": "v.",
      "def": "n.踐踏"
    },
    {
      "word": "transparent",
      "pos": "adj.",
      "def": "透明的"
    },
    {
      "word": "treasury",
      "pos": "n.",
      "def": "寶庫"
    },
    {
      "word": "treaty",
      "pos": "n.",
      "def": "條約"
    },
    {
      "word": "trench",
      "pos": "n.",
      "def": "壕溝"
    },
    {
      "word": "tribute",
      "pos": "n.",
      "def": "貢品；尊崇"
    },
    {
      "word": "trifle",
      "pos": "n.",
      "def": "瑣事"
    },
    {
      "word": "trim",
      "pos": "vi., vt.",
      "def": "n.修剪；調整"
    },
    {
      "word": "triple",
      "pos": "adj.",
      "def": "三倍的"
    },
    {
      "word": "trot",
      "pos": "n.",
      "def": "vi.vt.快步走；(使)小跑"
    },
    {
      "word": "trout",
      "pos": "n.",
      "def": "鱒魚"
    },
    {
      "word": "tuck",
      "pos": "vt.",
      "def": "vi.塞"
    },
    {
      "word": "tuition",
      "pos": "n.",
      "def": "學費"
    },
    {
      "word": "tuna",
      "pos": "n.",
      "def": "鮪魚"
    },
    {
      "word": "tyrant",
      "pos": "n.",
      "def": "暴君"
    },
    {
      "word": "umpire",
      "pos": "n.",
      "def": "裁判(棒球、網球、板球)"
    },
    {
      "word": "undergraduate",
      "pos": "n.",
      "def": "大學生"
    },
    {
      "word": "underline",
      "pos": "vt.",
      "def": "劃底線；強調"
    },
    {
      "word": "underneath",
      "pos": "prep.",
      "def": "在…下方"
    },
    {
      "word": "understandable",
      "pos": "adj.",
      "def": "可理解；的"
    },
    {
      "word": "undoubtedly",
      "pos": "adv.",
      "def": "毫無疑問地"
    },
    {
      "word": "update",
      "pos": "vt.",
      "def": "n.更新"
    },
    {
      "word": "upright",
      "pos": "adj.",
      "def": "直立的；正直的"
    },
    {
      "word": "upward",
      "pos": "adj.",
      "def": "adv.向上的"
    },
    {
      "word": "upward(s)",
      "pos": "adv.",
      "def": "向上地"
    },
    {
      "word": "utter",
      "pos": "adj.",
      "def": "全然的 vt.說"
    },
    {
      "word": "vacancy",
      "pos": "n.",
      "def": "空缺"
    },
    {
      "word": "vacuum",
      "pos": "n.",
      "def": "真空"
    },
    {
      "word": "vague",
      "pos": "adj.",
      "def": "模糊的"
    },
    {
      "word": "vanity",
      "pos": "n.",
      "def": "虛榮"
    },
    {
      "word": "vapor",
      "pos": "n.",
      "def": "蒸氣"
    },
    {
      "word": "vegetation",
      "pos": "n.",
      "def": "植物"
    },
    {
      "word": "veil",
      "pos": "n.",
      "def": "面紗"
    },
    {
      "word": "vein",
      "pos": "n.",
      "def": "靜脈；血管；葉脈"
    },
    {
      "word": "velvet",
      "pos": "n.",
      "def": "天鵝絨"
    },
    {
      "word": "venture",
      "pos": "vi., vt.",
      "def": "n.冒險"
    },
    {
      "word": "verbal",
      "pos": "adj.",
      "def": "口頭的"
    },
    {
      "word": "versus",
      "pos": "prep.",
      "def": "與…相對"
    },
    {
      "word": "vertical",
      "pos": "adj.",
      "def": "垂直的"
    },
    {
      "word": "veto",
      "pos": "n.",
      "def": "vt.否決"
    },
    {
      "word": "via",
      "pos": "prep.",
      "def": "透過…"
    },
    {
      "word": "vibrate",
      "pos": "vi.",
      "def": "震動"
    },
    {
      "word": "videotape",
      "pos": "n.",
      "def": "錄影帶"
    },
    {
      "word": "viewer",
      "pos": "n.",
      "def": "觀眾"
    },
    {
      "word": "vigor",
      "pos": "n.",
      "def": "活力"
    },
    {
      "word": "vigorous",
      "pos": "adj.",
      "def": "有活力的"
    },
    {
      "word": "villain",
      "pos": "n.",
      "def": "惡徒"
    },
    {
      "word": "vine",
      "pos": "n.",
      "def": "藤蔓"
    },
    {
      "word": "violinist",
      "pos": "n.",
      "def": "小提琴家"
    },
    {
      "word": "visa",
      "pos": "n.",
      "def": "簽證"
    },
    {
      "word": "vow n.誓言",
      "pos": "vt.",
      "def": "vi發誓"
    },
    {
      "word": "wade",
      "pos": "vi.",
      "def": "vt.涉水"
    },
    {
      "word": "wail",
      "pos": "vi.",
      "def": "vt.n.慟哭；嚎啕"
    },
    {
      "word": "ward",
      "pos": "n.",
      "def": "病房 (2) vt.躲開"
    },
    {
      "word": "ware",
      "pos": "n.",
      "def": "…的製品"
    },
    {
      "word": "warehouse",
      "pos": "n.",
      "def": "倉庫"
    },
    {
      "word": "warrior",
      "pos": "n.",
      "def": "戰士"
    },
    {
      "word": "wary",
      "pos": "adj.",
      "def": "小心的；謹防的"
    },
    {
      "word": "weary",
      "pos": "adj.",
      "def": "疲倦的"
    },
    {
      "word": "weird",
      "pos": "adj.",
      "def": "怪異的"
    },
    {
      "word": "wharf",
      "pos": "n.",
      "def": "碼頭"
    },
    {
      "word": "wheelchair",
      "pos": "n.",
      "def": "輪椅"
    },
    {
      "word": "whereabouts",
      "pos": "adv.",
      "def": "n.哪處；下落"
    },
    {
      "word": "whereas",
      "pos": "conj.",
      "def": "然而"
    },
    {
      "word": "whine",
      "pos": "vi.",
      "def": "vt.n.發牢騷"
    },
    {
      "word": "whirl",
      "pos": "vi.",
      "def": "vt.n.旋轉"
    },
    {
      "word": "whisk",
      "pos": "vi., vt.",
      "def": "n.拂去；飛奔"
    },
    {
      "word": "whiskey/whisky",
      "pos": "n.",
      "def": "威士忌"
    },
    {
      "word": "wholesale",
      "pos": "n.",
      "def": "adj.批發(的)"
    },
    {
      "word": "wholesome",
      "pos": "adj.",
      "def": "合乎衛生的；有益的"
    },
    {
      "word": "widespread",
      "pos": "adj.",
      "def": "廣布的"
    },
    {
      "word": "widow",
      "pos": "n.",
      "def": "寡婦"
    },
    {
      "word": "widower",
      "pos": "n.",
      "def": "鰥夫"
    },
    {
      "word": "wig",
      "pos": "n.",
      "def": "假髮"
    },
    {
      "word": "wilderness",
      "pos": "n.",
      "def": "荒地"
    },
    {
      "word": "wildlife",
      "pos": "n.",
      "def": "野生動物"
    },
    {
      "word": "wither",
      "pos": "vi.",
      "def": "vt.枯萎"
    },
    {
      "word": "woe",
      "pos": "n.",
      "def": "悲痛 int.哎喲"
    },
    {
      "word": "woodpecker",
      "pos": "n.",
      "def": "啄木鳥"
    },
    {
      "word": "workshop",
      "pos": "n.",
      "def": "工廠；研討會"
    },
    {
      "word": "worship",
      "pos": "n.",
      "def": "vt.vi.崇拜"
    },
    {
      "word": "worthwhile",
      "pos": "adj.",
      "def": "值得做的"
    },
    {
      "word": "worthy",
      "pos": "adj.",
      "def": "值得的"
    },
    {
      "word": "wreath",
      "pos": "n.",
      "def": "花環"
    },
    {
      "word": "wring",
      "pos": "vt.",
      "def": "n.擰 vi.蠕動"
    },
    {
      "word": "yacht",
      "pos": "n.",
      "def": "遊艇"
    },
    {
      "word": "yarn",
      "pos": "n.",
      "def": "紗線"
    },
    {
      "word": "yeast",
      "pos": "n.",
      "def": "酵母菌"
    },
    {
      "word": "yield",
      "pos": "vt.",
      "def": "vi.產出；屈服"
    },
    {
      "word": "yoga",
      "pos": "n.",
      "def": "瑜珈"
    },
    {
      "word": "zinc",
      "pos": "n.",
      "def": "鋅"
    },
    {
      "word": "zip",
      "pos": "n.",
      "def": "拉鍊 vt.拉開(或扣上)拉鍊"
    },
    {
      "word": "zone improvement plan",
      "pos": "n.",
      "def": "區域改善計畫"
    },
    {
      "word": "zip code",
      "pos": "n.",
      "def": "郵遞區號"
    },
    {
      "word": "zoom n.變焦鏡頭",
      "pos": "vt.",
      "def": "vi.發出嗡嗡聲；用變焦鏡頭將畫面拉近或拉遠"
    }
  ],
  "6": [
    {
      "word": "abbreviate",
      "pos": "vt.",
      "def": "vi.縮寫"
    },
    {
      "word": "abbreviation",
      "pos": "n.",
      "def": "縮寫"
    },
    {
      "word": "abnormal",
      "pos": "adj.",
      "def": "異常的"
    },
    {
      "word": "aboriginal",
      "pos": "adj.",
      "def": "原生的"
    },
    {
      "word": "aborigine",
      "pos": "n.",
      "def": "原住民"
    },
    {
      "word": "abound",
      "pos": "vi.",
      "def": "充滿"
    },
    {
      "word": "absentminded",
      "pos": "adj.",
      "def": "心不在焉的"
    },
    {
      "word": "abstraction",
      "pos": "n.",
      "def": "抽象"
    },
    {
      "word": "abundance",
      "pos": "n.",
      "def": "充裕"
    },
    {
      "word": "abuse",
      "pos": "n.",
      "def": "vt.虐待"
    },
    {
      "word": "accelerate",
      "pos": "vt.",
      "def": "vi.加速"
    },
    {
      "word": "acceleration",
      "pos": "n.",
      "def": "加速"
    },
    {
      "word": "accessible",
      "pos": "adj.",
      "def": "易接近的"
    },
    {
      "word": "accessory",
      "pos": "n.",
      "def": "配件"
    },
    {
      "word": "accommodate",
      "pos": "vt.",
      "def": "容納"
    },
    {
      "word": "accommodation",
      "pos": "n.",
      "def": "住宿"
    },
    {
      "word": "accord",
      "pos": "vi., vt.",
      "def": "n.(使…)一致"
    },
    {
      "word": "accordance",
      "pos": "n.",
      "def": "一致"
    },
    {
      "word": "accordingly",
      "pos": "adv.",
      "def": "因此"
    },
    {
      "word": "accountable",
      "pos": "adj.",
      "def": "負責任的"
    },
    {
      "word": "accounting",
      "pos": "n.",
      "def": "會計"
    },
    {
      "word": "accumulate",
      "pos": "vt.",
      "def": "vi.累積"
    },
    {
      "word": "accumulation",
      "pos": "n.",
      "def": "累積"
    },
    {
      "word": "accusation",
      "pos": "n.",
      "def": "控訴"
    },
    {
      "word": "acquisition",
      "pos": "n.",
      "def": "獲得"
    },
    {
      "word": "activist",
      "pos": "n.",
      "def": "激進份子；活動家"
    },
    {
      "word": "acute",
      "pos": "adj.",
      "def": "急性的 (chronic)"
    },
    {
      "word": "adaptation",
      "pos": "n.",
      "def": "適應"
    },
    {
      "word": "addict",
      "pos": "n., vt.",
      "def": "使…沉迷；入迷的人；上癮者"
    },
    {
      "word": "addiction",
      "pos": "n.",
      "def": "濫用；上癮"
    },
    {
      "word": "administer / administrate",
      "pos": "vt.",
      "def": "管理"
    },
    {
      "word": "administration",
      "pos": "n.",
      "def": "管理"
    },
    {
      "word": "administrative",
      "pos": "adj.",
      "def": "管理上的；行政的"
    },
    {
      "word": "administrator",
      "pos": "n.",
      "def": "管理者"
    },
    {
      "word": "advocate",
      "pos": "n., vt.",
      "def": "提倡；提倡者"
    },
    {
      "word": "affectionate",
      "pos": "adj.",
      "def": "充滿感情的"
    },
    {
      "word": "affirm",
      "pos": "vt.",
      "def": "vi.斷言"
    },
    {
      "word": "aggression",
      "pos": "n.",
      "def": "侵略"
    },
    {
      "word": "alcoholic",
      "pos": "adj.",
      "def": "酒精的"
    },
    {
      "word": "alienate",
      "pos": "vt.",
      "def": "使…疏遠"
    },
    {
      "word": "alliance",
      "pos": "n.",
      "def": "同盟"
    },
    {
      "word": "allocate",
      "pos": "vt.",
      "def": "分配"
    },
    {
      "word": "alongside",
      "pos": "adv.",
      "def": "prep.並排(地)"
    },
    {
      "word": "alternative",
      "pos": "adj.",
      "def": "替代的 n.選擇"
    },
    {
      "word": "ambiguity",
      "pos": "n.",
      "def": "模稜兩可"
    },
    {
      "word": "ambiguous",
      "pos": "adj.",
      "def": "模稜兩可的"
    },
    {
      "word": "ambulance",
      "pos": "n.",
      "def": "救護車"
    },
    {
      "word": "ambush",
      "pos": "n.",
      "def": "vt.vi.埋伏"
    },
    {
      "word": "amiable",
      "pos": "adj.",
      "def": "和藹的"
    },
    {
      "word": "amplify",
      "pos": "vt.",
      "def": "vi.增強"
    },
    {
      "word": "analects",
      "pos": "n.",
      "def": "語錄"
    },
    {
      "word": "analogy",
      "pos": "n.",
      "def": "相似之處"
    },
    {
      "word": "analyst",
      "pos": "n.",
      "def": "分析師"
    },
    {
      "word": "analytical",
      "pos": "adj.",
      "def": "分析的；有條理的"
    },
    {
      "word": "anecdote",
      "pos": "n.",
      "def": "軼事"
    },
    {
      "word": "animate",
      "pos": "vt.",
      "def": "賦予生命 adj.活的"
    },
    {
      "word": "annoyance",
      "pos": "n.",
      "def": "惱怒"
    },
    {
      "word": "anonymous",
      "pos": "adj.",
      "def": "匿名的"
    },
    {
      "word": "Antarctic/antarctic",
      "pos": "n.",
      "def": "adj.南極(的)"
    },
    {
      "word": "antenna",
      "pos": "n.",
      "def": "天線"
    },
    {
      "word": "antibiotic",
      "pos": "n.",
      "def": "adj.抗生素"
    },
    {
      "word": "antibody",
      "pos": "n.",
      "def": "抗體"
    },
    {
      "word": "anticipate",
      "pos": "vt.",
      "def": "預期"
    },
    {
      "word": "anticipation",
      "pos": "n.",
      "def": "期望"
    },
    {
      "word": "antonym",
      "pos": "n.",
      "def": "反義字"
    },
    {
      "word": "applicable",
      "pos": "adj.",
      "def": "適用的"
    },
    {
      "word": "apprentice",
      "pos": "n.",
      "def": "學徒"
    },
    {
      "word": "approximate",
      "pos": "adj.",
      "def": "大約的"
    },
    {
      "word": "aptitude",
      "pos": "n.",
      "def": "天賦"
    },
    {
      "word": "Arctic / arctic",
      "pos": "n.",
      "def": "adj.北極(的)"
    },
    {
      "word": "arrogant",
      "pos": "adj.",
      "def": "傲慢的"
    },
    {
      "word": "artery",
      "pos": "n.",
      "def": "動脈；幹線"
    },
    {
      "word": "articulate",
      "pos": "adj.",
      "def": "口齒清晰的"
    },
    {
      "word": "artifact",
      "pos": "n.",
      "def": "人工製品；手工藝品"
    },
    {
      "word": "assassinate",
      "pos": "vt.",
      "def": "暗殺"
    },
    {
      "word": "assert",
      "pos": "vt.",
      "def": "斷言"
    },
    {
      "word": "assess",
      "pos": "vt.",
      "def": "評估"
    },
    {
      "word": "assessment",
      "pos": "n.",
      "def": "評估"
    },
    {
      "word": "assumption",
      "pos": "n.",
      "def": "假定"
    },
    {
      "word": "asthma",
      "pos": "n.",
      "def": "氣喘"
    },
    {
      "word": "asylum",
      "pos": "n.",
      "def": "政治庇護"
    },
    {
      "word": "attainment",
      "pos": "vt.",
      "def": "vi.到達"
    },
    {
      "word": "attainment",
      "pos": "n.",
      "def": "到達"
    },
    {
      "word": "attendant",
      "pos": "n.",
      "def": "接待員"
    },
    {
      "word": "attic",
      "pos": "n.",
      "def": "閣樓"
    },
    {
      "word": "auction",
      "pos": "n.",
      "def": "vt.拍賣"
    },
    {
      "word": "authentic",
      "pos": "adj.",
      "def": "真實的"
    },
    {
      "word": "authorize",
      "pos": "vt.",
      "def": "授權"
    },
    {
      "word": "autograph / signature",
      "pos": "n.",
      "def": "簽名"
    },
    {
      "word": "autonomy",
      "pos": "n.",
      "def": "自治"
    },
    {
      "word": "aviation",
      "pos": "n.",
      "def": "飛行"
    },
    {
      "word": "awesome",
      "pos": "adj.",
      "def": "令人敬畏的"
    },
    {
      "word": "barometer",
      "pos": "n.",
      "def": "氣壓計"
    },
    {
      "word": "beckon",
      "pos": "vi., vt.",
      "def": "n.示意"
    },
    {
      "word": "besiege",
      "pos": "vt.",
      "def": "包圍"
    },
    {
      "word": "betray",
      "pos": "vt.",
      "def": "背叛"
    },
    {
      "word": "beverage",
      "pos": "n.",
      "def": "飲料"
    },
    {
      "word": "bias",
      "pos": "n.",
      "def": "vt.(使有)偏見"
    },
    {
      "word": "binoculars",
      "pos": "n.",
      "def": "雙筒望遠鏡"
    },
    {
      "word": "biochemistry",
      "pos": "n.",
      "def": "生物化學"
    },
    {
      "word": "biological",
      "pos": "adj.",
      "def": "生物的"
    },
    {
      "word": "bizarre",
      "pos": "adj.",
      "def": "怪異的"
    },
    {
      "word": "bleak",
      "pos": "adj.",
      "def": "荒涼的"
    },
    {
      "word": "blunder",
      "pos": "n.",
      "def": "vi.vt.犯錯"
    },
    {
      "word": "blunt",
      "pos": "adj.",
      "def": "鈍的"
    },
    {
      "word": "bombard",
      "pos": "vt.",
      "def": "砲轟"
    },
    {
      "word": "bondage",
      "pos": "n.",
      "def": "奴役；束縛"
    },
    {
      "word": "boost",
      "pos": "n.",
      "def": "vt.促進；提高"
    },
    {
      "word": "bout",
      "pos": "n.",
      "def": "回合"
    },
    {
      "word": "boycott",
      "pos": "vt.",
      "def": "n.抵制"
    },
    {
      "word": "breakdown",
      "pos": "n.",
      "def": "故障"
    },
    {
      "word": "breakthrough",
      "pos": "n.",
      "def": "突破"
    },
    {
      "word": "breakup",
      "pos": "n.",
      "def": "瓦解；分手"
    },
    {
      "word": "brew",
      "pos": "vi., vt.",
      "def": "n.釀造；沖泡"
    },
    {
      "word": "brink",
      "pos": "n.",
      "def": "邊緣"
    },
    {
      "word": "brisk",
      "pos": "adj.",
      "def": "活潑的"
    },
    {
      "word": "brochure",
      "pos": "n.",
      "def": "小冊子"
    },
    {
      "word": "brute",
      "pos": "n.",
      "def": "獸；畜生 adj.畜生的；蠻橫的"
    },
    {
      "word": "buckle n.扣環",
      "pos": "vt.",
      "def": "vi.扣住"
    },
    {
      "word": "bulky",
      "pos": "adj.",
      "def": "笨重的"
    },
    {
      "word": "bureaucracy",
      "pos": "n.",
      "def": "官僚"
    },
    {
      "word": "burial",
      "pos": "n.",
      "def": "adj.葬禮(的)"
    },
    {
      "word": "byte",
      "pos": "n.",
      "def": "位元組"
    },
    {
      "word": "caffeine",
      "pos": "n.",
      "def": "咖啡因"
    },
    {
      "word": "calcium",
      "pos": "n.",
      "def": "鈣"
    },
    {
      "word": "canvas",
      "pos": "n.",
      "def": "帆布"
    },
    {
      "word": "capability",
      "pos": "n.",
      "def": "能力"
    },
    {
      "word": "capsule",
      "pos": "n.",
      "def": "膠囊"
    },
    {
      "word": "caption",
      "pos": "n.",
      "def": "標題；字幕"
    },
    {
      "word": "captive",
      "pos": "n.",
      "def": "俘虜"
    },
    {
      "word": "captivity",
      "pos": "n.",
      "def": "囚禁"
    },
    {
      "word": "carbohydrate",
      "pos": "n.",
      "def": "碳水化合物"
    },
    {
      "word": "caress",
      "pos": "n.",
      "def": "vt.愛撫"
    },
    {
      "word": "carol n.(",
      "pos": "",
      "def": "耶誕)頌歌"
    },
    {
      "word": "cashier",
      "pos": "n.",
      "def": "出納；出納員"
    },
    {
      "word": "casualty",
      "pos": "n.",
      "def": "傷亡人員"
    },
    {
      "word": "catastrophe",
      "pos": "n.",
      "def": "大災難"
    },
    {
      "word": "cater",
      "pos": "vi.",
      "def": "承辦宴席；迎合(需求)"
    },
    {
      "word": "cavalry",
      "pos": "n.",
      "def": "騎兵"
    },
    {
      "word": "cavity",
      "pos": "n.",
      "def": "穴；(牙的)蛀洞"
    },
    {
      "word": "cemetery",
      "pos": "n.",
      "def": "墓地"
    },
    {
      "word": "certainty",
      "pos": "n.",
      "def": "確實"
    },
    {
      "word": "certify",
      "pos": "vt.",
      "def": "vi.證明"
    },
    {
      "word": "champagne",
      "pos": "n.",
      "def": "香檳酒"
    },
    {
      "word": "chaos",
      "pos": "n.",
      "def": "混亂"
    },
    {
      "word": "characterize",
      "pos": "vt.",
      "def": "具有...的特徵"
    },
    {
      "word": "coal",
      "pos": "n.",
      "def": "木炭"
    },
    {
      "word": "chariot n.(",
      "pos": "",
      "def": "古代)雙輪戰車"
    },
    {
      "word": "charitable",
      "pos": "adj.",
      "def": "慈善的"
    },
    {
      "word": "cholesterol",
      "pos": "n.",
      "def": "膽固醇"
    },
    {
      "word": "chronic adj.(",
      "pos": "",
      "def": "病)慢性的 (acute)"
    },
    {
      "word": "chuckle",
      "pos": "vi.",
      "def": "咯咯地笑"
    },
    {
      "word": "chunk",
      "pos": "n.",
      "def": "大塊；厚片"
    },
    {
      "word": "civilize",
      "pos": "v.",
      "def": "使文明"
    },
    {
      "word": "clamp",
      "pos": "v.",
      "def": "鉗緊"
    },
    {
      "word": "clarity",
      "pos": "n.",
      "def": "明晰"
    },
    {
      "word": "cleanse",
      "pos": "vt.",
      "def": "使清潔；淨化"
    },
    {
      "word": "clearance",
      "pos": "n.",
      "def": "清除；空地"
    },
    {
      "word": "clench",
      "pos": "vt.",
      "def": "捏緊"
    },
    {
      "word": "clinical",
      "pos": "adj.",
      "def": "臨床的"
    },
    {
      "word": "clone",
      "pos": "n.",
      "def": "複製品/人"
    },
    {
      "word": "closure",
      "pos": "n.",
      "def": "關閉；終止"
    },
    {
      "word": "coffin",
      "pos": "n.",
      "def": "棺材"
    },
    {
      "word": "coherent",
      "pos": "adj.",
      "def": "連貫的"
    },
    {
      "word": "coincide",
      "pos": "vi.",
      "def": "同時發生"
    },
    {
      "word": "coincidence",
      "pos": "n.",
      "def": "巧合"
    },
    {
      "word": "collective",
      "pos": "adj.",
      "def": "集體的"
    },
    {
      "word": "collector",
      "pos": "n.",
      "def": "收集者"
    },
    {
      "word": "collide",
      "pos": "vi.",
      "def": "碰撞；衝突"
    },
    {
      "word": "collision",
      "pos": "n.",
      "def": "碰撞；衝突"
    },
    {
      "word": "colloquial",
      "pos": "adj.",
      "def": "口語的"
    },
    {
      "word": "columnist",
      "pos": "n.",
      "def": "專欄作家"
    },
    {
      "word": "commemorate",
      "pos": "vt.",
      "def": "紀念"
    },
    {
      "word": "commence",
      "pos": "vt.",
      "def": "開始"
    },
    {
      "word": "commentary",
      "pos": "n.",
      "def": "評論"
    },
    {
      "word": "commitment",
      "pos": "n.",
      "def": "承諾"
    },
    {
      "word": "communicative",
      "pos": "adj.",
      "def": "暢談的"
    },
    {
      "word": "companionship",
      "pos": "n.",
      "def": "伴侶關係"
    },
    {
      "word": "comparable",
      "pos": "adj.",
      "def": "可比較的；比得上的"
    },
    {
      "word": "comparative",
      "pos": "adj.",
      "def": "比較的"
    },
    {
      "word": "compatible",
      "pos": "adj.",
      "def": "相容的"
    },
    {
      "word": "compensate",
      "pos": "vt.",
      "def": "補償"
    },
    {
      "word": "compensation",
      "pos": "n.",
      "def": "補償(金)"
    },
    {
      "word": "competence",
      "pos": "n.",
      "def": "勝任"
    },
    {
      "word": "competent",
      "pos": "adj.",
      "def": "能幹的"
    },
    {
      "word": "compile",
      "pos": "vt.",
      "def": "編輯"
    },
    {
      "word": "complement",
      "pos": "n.",
      "def": "補充物"
    },
    {
      "word": "complexion",
      "pos": "n.",
      "def": "面色"
    },
    {
      "word": "complexity",
      "pos": "n.",
      "def": "複雜(性)"
    },
    {
      "word": "complication",
      "pos": "n.",
      "def": "複雜(化)；併發症"
    },
    {
      "word": "component",
      "pos": "n.",
      "def": "零件；成分"
    },
    {
      "word": "comprehensive",
      "pos": "adj.",
      "def": "無所不包的；有理解力的"
    },
    {
      "word": "comprise",
      "pos": "vt.",
      "def": "包括"
    },
    {
      "word": "concede",
      "pos": "",
      "def": "勉強)承認"
    },
    {
      "word": "conceit",
      "pos": "n.",
      "def": "自滿"
    },
    {
      "word": "conception",
      "pos": "n.",
      "def": "觀念；創始"
    },
    {
      "word": "concession",
      "pos": "n.",
      "def": "讓步；租界"
    },
    {
      "word": "concise",
      "pos": "adj.",
      "def": "簡明的"
    },
    {
      "word": "condense",
      "pos": "vt.",
      "def": "壓縮；濃縮"
    },
    {
      "word": "confer",
      "pos": "vt.",
      "def": "授予(學位等)"
    },
    {
      "word": "confidential",
      "pos": "adj.",
      "def": "機密的"
    },
    {
      "word": "conform",
      "pos": "vi.",
      "def": "遵守；符合"
    },
    {
      "word": "confrontation",
      "pos": "n.",
      "def": "對抗"
    },
    {
      "word": "congressman",
      "pos": "",
      "def": ""
    },
    {
      "word": "congresswoman",
      "pos": "n.",
      "def": "美國國會議員"
    },
    {
      "word": "conquest",
      "pos": "n.",
      "def": "征服"
    },
    {
      "word": "conscientious",
      "pos": "adj.",
      "def": "憑良心的"
    },
    {
      "word": "consensus",
      "pos": "n.",
      "def": "一致；合意"
    },
    {
      "word": "conservation",
      "pos": "n.",
      "def": "保育"
    },
    {
      "word": "consolation",
      "pos": "n.",
      "def": "安慰"
    },
    {
      "word": "conspiracy",
      "pos": "n.",
      "def": "陰謀"
    },
    {
      "word": "constituent",
      "pos": "n., adj.",
      "def": "組成的；選民，選舉人"
    },
    {
      "word": "consultation",
      "pos": "n.",
      "def": "諮詢"
    },
    {
      "word": "consumption",
      "pos": "n.",
      "def": "消耗"
    },
    {
      "word": "contemplation",
      "pos": "n.",
      "def": "沈思"
    },
    {
      "word": "contestant",
      "pos": "n.",
      "def": "競爭者；角逐者"
    },
    {
      "word": "contractor",
      "pos": "n.",
      "def": "承包商"
    },
    {
      "word": "contradict",
      "pos": "vt.",
      "def": "與...矛盾"
    },
    {
      "word": "contradiction",
      "pos": "n.",
      "def": "矛盾"
    },
    {
      "word": "controversial",
      "pos": "adj.",
      "def": "可疑的"
    },
    {
      "word": "controversy",
      "pos": "n.",
      "def": "爭議"
    },
    {
      "word": "conviction",
      "pos": "n.",
      "def": "定罪；信念"
    },
    {
      "word": "coordinate",
      "pos": "vt.",
      "def": "協調"
    },
    {
      "word": "cordial",
      "pos": "adj.",
      "def": "熱忱的"
    },
    {
      "word": "core",
      "pos": "n.",
      "def": "果核；核心"
    },
    {
      "word": "corporate",
      "pos": "adj.",
      "def": "公司的；團體的"
    },
    {
      "word": "corps",
      "pos": "n.",
      "def": "兵團；軍；隊"
    },
    {
      "word": "corpse",
      "pos": "n.",
      "def": "屍體"
    },
    {
      "word": "correspondent",
      "pos": "adj., n.",
      "def": "通信者；一致的；符合的"
    },
    {
      "word": "corruption",
      "pos": "n.",
      "def": "腐化；貪污"
    },
    {
      "word": "cosmetic",
      "pos": "adj.",
      "def": "化妝用的"
    },
    {
      "word": "cosmetics",
      "pos": "n.",
      "def": "化妝品"
    },
    {
      "word": "cosmopolitan",
      "pos": "adj.",
      "def": "世界性的"
    },
    {
      "word": "counterpart",
      "pos": "n.",
      "def": "對應的人(或物)"
    },
    {
      "word": "coverage",
      "pos": "n.",
      "def": "覆蓋範圍"
    },
    {
      "word": "covet",
      "pos": "vt.",
      "def": "垂涎；貪圖"
    },
    {
      "word": "cramp",
      "pos": "n.",
      "def": "夾鉗；束縛；抽筋 vt.限制"
    },
    {
      "word": "credibility",
      "pos": "n.",
      "def": "可信度"
    },
    {
      "word": "credible",
      "pos": "adj.",
      "def": "可信的"
    },
    {
      "word": "criterion",
      "pos": "n.",
      "def": "標準；準則"
    },
    {
      "word": "crook",
      "pos": "vi., vt.",
      "def": "n.彎曲；成鉤形"
    },
    {
      "word": "crooked",
      "pos": "adj.",
      "def": "歪的；彎曲的；詐欺的"
    },
    {
      "word": "crucial",
      "pos": "adj.",
      "def": "決定性的"
    },
    {
      "word": "crude",
      "pos": "adj.",
      "def": "天然的；生的"
    },
    {
      "word": "cruise",
      "pos": "vi., vt.",
      "def": "n.巡航；航遊"
    },
    {
      "word": "cruiser",
      "pos": "n.",
      "def": "遊艇"
    },
    {
      "word": "crumb",
      "pos": "n.",
      "def": "麵包屑"
    },
    {
      "word": "crumble",
      "pos": "vt.",
      "def": "vi.粉碎；崩潰"
    },
    {
      "word": "crust",
      "pos": "n.",
      "def": "派餅皮；地殼"
    },
    {
      "word": "cultivate",
      "pos": "vt.",
      "def": "培育"
    },
    {
      "word": "cumulative",
      "pos": "adj.",
      "def": "累計的"
    },
    {
      "word": "customary",
      "pos": "adj.",
      "def": "合乎習俗的；按慣例的"
    },
    {
      "word": "daffodil",
      "pos": "n.",
      "def": "黃水仙"
    },
    {
      "word": "dandruff",
      "pos": "n.",
      "def": "頭皮屑"
    },
    {
      "word": "daybreak",
      "pos": "n.",
      "def": "黎明"
    },
    {
      "word": "deadly",
      "pos": "adj.",
      "def": "致命的"
    },
    {
      "word": "decent",
      "pos": "adj.",
      "def": "正派的；體面的"
    },
    {
      "word": "decisive",
      "pos": "adj.",
      "def": "決定性的；果決的"
    },
    {
      "word": "decline",
      "pos": "vi.",
      "def": "n.下降；婉拒 vt.婉拒"
    },
    {
      "word": "dedicate",
      "pos": "vt.",
      "def": "奉獻"
    },
    {
      "word": "dedication",
      "pos": "n.",
      "def": "奉獻；致力"
    },
    {
      "word": "deem",
      "pos": "v.",
      "def": "認為"
    },
    {
      "word": "defect",
      "pos": "n.",
      "def": "缺點；缺陷"
    },
    {
      "word": "deficiency",
      "pos": "n.",
      "def": "不足"
    },
    {
      "word": "degrade",
      "pos": "vt.",
      "def": "使降級"
    },
    {
      "word": "deliberate adj.深思熟慮的；蓄意的",
      "pos": "vt.",
      "def": "vi.仔細思考"
    },
    {
      "word": "delinquent",
      "pos": "adj.",
      "def": "有過失的"
    },
    {
      "word": "denounce",
      "pos": "vt.",
      "def": "譴責"
    },
    {
      "word": "density",
      "pos": "n.",
      "def": "密集(度)"
    },
    {
      "word": "dental",
      "pos": "adj.",
      "def": "牙齒的"
    },
    {
      "word": "depict",
      "pos": "vt.",
      "def": "描畫"
    },
    {
      "word": "deprive",
      "pos": "vt.",
      "def": "剝奪"
    },
    {
      "word": "deputy",
      "pos": "n.",
      "def": "adj.副手(的)；代理人(的)"
    },
    {
      "word": "derive",
      "pos": "vt.",
      "def": "取得 vi.衍生"
    },
    {
      "word": "descend",
      "pos": "vi.",
      "def": "vt.下來；走下"
    },
    {
      "word": "descendant",
      "pos": "n.",
      "def": "後裔"
    },
    {
      "word": "descent",
      "pos": "n.",
      "def": "下降；世系"
    },
    {
      "word": "designate",
      "pos": "vt.",
      "def": "指定"
    },
    {
      "word": "destined",
      "pos": "adj.",
      "def": "命中注定的"
    },
    {
      "word": "detach",
      "pos": "vt.",
      "def": "分開；分離"
    },
    {
      "word": "detain",
      "pos": "vt.",
      "def": "拘留；扣留"
    },
    {
      "word": "deter",
      "pos": "vt.",
      "def": "威懾住；嚇住；制止"
    },
    {
      "word": "detergent",
      "pos": "n.",
      "def": "洗潔劑"
    },
    {
      "word": "deteriorate",
      "pos": "vi.",
      "def": "vt.(使)惡化"
    },
    {
      "word": "devalue",
      "pos": "vt.",
      "def": "降低...的價值"
    },
    {
      "word": "diabetes",
      "pos": "n.",
      "def": "糖尿病"
    },
    {
      "word": "diagnose",
      "pos": "vt.",
      "def": "診斷"
    },
    {
      "word": "diagnosis",
      "pos": "n.",
      "def": "診斷(結果)"
    },
    {
      "word": "diagram",
      "pos": "n.",
      "def": "圖表；圖解"
    },
    {
      "word": "diameter",
      "pos": "n.",
      "def": "直徑"
    },
    {
      "word": "dictate",
      "pos": "vt.",
      "def": "vi.口授；命令"
    },
    {
      "word": "dictation",
      "pos": "n.",
      "def": "聽寫；命令"
    },
    {
      "word": "dictator",
      "pos": "n.",
      "def": "獨裁者"
    },
    {
      "word": "differentiate",
      "pos": "vt.",
      "def": "vi.區別"
    },
    {
      "word": "dilemma",
      "pos": "n.",
      "def": "進退兩難"
    },
    {
      "word": "dimension",
      "pos": "n.",
      "def": "尺寸；面積；面向"
    },
    {
      "word": "diminish",
      "pos": "vt.",
      "def": "vi.減少；失勢"
    },
    {
      "word": "diplomacy",
      "pos": "n.",
      "def": "外交(手腕)"
    },
    {
      "word": "diplomatic",
      "pos": "adj.",
      "def": "外交的"
    },
    {
      "word": "directory",
      "pos": "n.",
      "def": "電話號碼簿；使用手冊"
    },
    {
      "word": "disability",
      "pos": "n.",
      "def": "無能；殘障"
    },
    {
      "word": "disable",
      "pos": "vt.",
      "def": "使失去能力"
    },
    {
      "word": "disapprove",
      "pos": "vt.",
      "def": "vi.不贊同"
    },
    {
      "word": "disastrous",
      "pos": "adj.",
      "def": "災難的"
    },
    {
      "word": "discharge",
      "pos": "vt.",
      "def": "vi..n 排出(液體、 氣體等)；釋放；解雇"
    },
    {
      "word": "disciplinary",
      "pos": "adj.",
      "def": "紀律的"
    },
    {
      "word": "disclose",
      "pos": "vt.",
      "def": "揭發；透露"
    },
    {
      "word": "disclosure",
      "pos": "n.",
      "def": "揭發；透露"
    },
    {
      "word": "discomfort",
      "pos": "n.",
      "def": "不舒適"
    },
    {
      "word": "discreet",
      "pos": "adj.",
      "def": "謹慎的"
    },
    {
      "word": "discrimination",
      "pos": "n.",
      "def": "辨別"
    },
    {
      "word": "disgrace",
      "pos": "n.",
      "def": "vt.(使…)丟臉"
    },
    {
      "word": "disgraceful",
      "pos": "adj.",
      "def": "不名譽的"
    },
    {
      "word": "dismantle",
      "pos": "vt.",
      "def": "拆卸"
    },
    {
      "word": "dismay",
      "pos": "n.",
      "def": "驚慌；沮喪"
    },
    {
      "word": "dispatch",
      "pos": "vt.",
      "def": "n.派遣；發送"
    },
    {
      "word": "dispensable",
      "pos": "adj.",
      "def": "非必要的"
    },
    {
      "word": "disperse",
      "pos": "vt.",
      "def": "vi.驅散"
    },
    {
      "word": "displace",
      "pos": "",
      "def": "從原地)移開"
    },
    {
      "word": "displease",
      "pos": "vt.",
      "def": "vi.使人不高興"
    },
    {
      "word": "disposable",
      "pos": "adj.",
      "def": "可任意處理的；用完即丟棄的"
    },
    {
      "word": "disposal",
      "pos": "n.",
      "def": "處理"
    },
    {
      "word": "disregard",
      "pos": "vt.",
      "def": "n.不顧；漠視"
    },
    {
      "word": "dissident",
      "pos": "adj.",
      "def": "n.意見不同的(人)"
    },
    {
      "word": "dissolve",
      "pos": "vt.",
      "def": "vi.分解；解散"
    },
    {
      "word": "dissuade",
      "pos": "vt.",
      "def": "勸阻"
    },
    {
      "word": "distort",
      "pos": "vt.",
      "def": "扭曲；曲解"
    },
    {
      "word": "distract",
      "pos": "vt.",
      "def": "使分心；困擾"
    },
    {
      "word": "distraction",
      "pos": "n.",
      "def": "分心"
    },
    {
      "word": "distrust",
      "pos": "vt.",
      "def": "n.不信任；懷疑"
    },
    {
      "word": "disturbance",
      "pos": "n.",
      "def": "擾亂；打擾"
    },
    {
      "word": "diverse",
      "pos": "adj.",
      "def": "不同的；多元的"
    },
    {
      "word": "diversify",
      "pos": "vt.",
      "def": "vi.使多樣化"
    },
    {
      "word": "diversion",
      "pos": "n.",
      "def": "轉移；分散注意力；娛樂"
    },
    {
      "word": "diversity",
      "pos": "n.",
      "def": "差異；多樣性"
    },
    {
      "word": "divert",
      "pos": "vt.",
      "def": "vi.轉移；使分心"
    },
    {
      "word": "doctrine",
      "pos": "n.",
      "def": "教義；信條"
    },
    {
      "word": "documentary",
      "pos": "",
      "def": ""
    },
    {
      "word": "dome",
      "pos": "n.",
      "def": "圓屋頂"
    },
    {
      "word": "donate",
      "pos": "vt.",
      "def": "捐贈"
    },
    {
      "word": "donation",
      "pos": "n.",
      "def": "捐贈(物)"
    },
    {
      "word": "donor",
      "pos": "n.",
      "def": "捐贈者"
    },
    {
      "word": "doom",
      "pos": "n.",
      "def": "厄運；毀滅"
    },
    {
      "word": "dosage n.(",
      "pos": "",
      "def": "藥)劑量；服法"
    },
    {
      "word": "drastic",
      "pos": "adj.",
      "def": "猛烈的"
    },
    {
      "word": "drawback",
      "pos": "n.",
      "def": "缺點；短處"
    },
    {
      "word": "dreary",
      "pos": "adj.",
      "def": "陰鬱的"
    },
    {
      "word": "drizzle",
      "pos": "vi.",
      "def": "n.(下)毛毛雨"
    },
    {
      "word": "drought",
      "pos": "n.",
      "def": "乾旱"
    },
    {
      "word": "dual",
      "pos": "adj.",
      "def": "雙的"
    },
    {
      "word": "dubious adj.(",
      "pos": "",
      "def": "對事物)半信半疑的；曖昧的；含糊的"
    },
    {
      "word": "dynamite",
      "pos": "n.",
      "def": "炸藥"
    },
    {
      "word": "ebb",
      "pos": "n.",
      "def": "vi.退潮；衰落"
    },
    {
      "word": "eccentric",
      "pos": "adj.",
      "def": "古怪的"
    },
    {
      "word": "ecology",
      "pos": "n.",
      "def": "生態學"
    },
    {
      "word": "ecstasy",
      "pos": "n.",
      "def": "狂喜；迷幻藥"
    },
    {
      "word": "edible",
      "pos": "adj.",
      "def": "可食的"
    },
    {
      "word": "editorial",
      "pos": "",
      "def": ""
    },
    {
      "word": "electron",
      "pos": "n.",
      "def": "電子"
    },
    {
      "word": "eligible",
      "pos": "adj.",
      "def": "有資格當選的；法律上合格的"
    },
    {
      "word": "elite",
      "pos": "n.",
      "def": "精英"
    },
    {
      "word": "eloquence",
      "pos": "n.",
      "def": "雄辯；口才"
    },
    {
      "word": "eloquent",
      "pos": "adj.",
      "def": "雄辯的"
    },
    {
      "word": "embark",
      "pos": "vi.",
      "def": "上船(或飛機等)；著手"
    },
    {
      "word": "emigrant",
      "pos": "adj.",
      "def": "n.移民(的)"
    },
    {
      "word": "emigrate",
      "pos": "vi.",
      "def": "移居外國(或外地)"
    },
    {
      "word": "emigration",
      "pos": "n.",
      "def": "移居"
    },
    {
      "word": "emphatic",
      "pos": "adj.",
      "def": "強調的"
    },
    {
      "word": "enact",
      "pos": "vt.",
      "def": "制定(法律)；扮演(角色)"
    },
    {
      "word": "enactment",
      "pos": "n.",
      "def": "制定(法律)；扮演(角色)"
    },
    {
      "word": "enclosure",
      "pos": "n.",
      "def": "圍住；圈地"
    },
    {
      "word": "encyclopedia",
      "pos": "n.",
      "def": "百科全書"
    },
    {
      "word": "endurance",
      "pos": "n.",
      "def": "耐久力"
    },
    {
      "word": "enhance",
      "pos": "vt.",
      "def": "增加(價值,吸引力等)"
    },
    {
      "word": "enhancement",
      "pos": "n.",
      "def": "增加(價值,吸引力等)"
    },
    {
      "word": "enlighten",
      "pos": "vt.",
      "def": "啟發；教導"
    },
    {
      "word": "enlightenment",
      "pos": "n.",
      "def": "啟發；教導"
    },
    {
      "word": "enrich",
      "pos": "vt.",
      "def": "使豐富"
    },
    {
      "word": "enrichment",
      "pos": "n.",
      "def": "豐富"
    },
    {
      "word": "epidemic",
      "pos": "adj.",
      "def": "n.傳染病(的)"
    },
    {
      "word": "episode n.(",
      "pos": "",
      "def": "整個事情中的)一個；事件；插曲；一集"
    },
    {
      "word": "EQ / emotional quotient phr.",
      "pos": "",
      "def": "情感商數"
    },
    {
      "word": "emotional intelligence (phr.)",
      "pos": "",
      "def": "情緒智商"
    },
    {
      "word": "equation",
      "pos": "n.",
      "def": "方程式；平衡"
    },
    {
      "word": "equivalent",
      "pos": "adj.",
      "def": "n.相等的；相等物"
    },
    {
      "word": "erode",
      "pos": "vt.",
      "def": "侵蝕；磨損"
    },
    {
      "word": "eruption",
      "pos": "n.",
      "def": "爆發"
    },
    {
      "word": "escalate",
      "pos": "vt.",
      "def": "使逐步上升"
    },
    {
      "word": "essence",
      "pos": "n.",
      "def": "本質；精華"
    },
    {
      "word": "eternity",
      "pos": "n.",
      "def": "永恆；不朽"
    },
    {
      "word": "ethical",
      "pos": "adj.",
      "def": "倫理的"
    },
    {
      "word": "ethnic",
      "pos": "adj.",
      "def": "種族(上)的"
    },
    {
      "word": "evacuate",
      "pos": "vt.",
      "def": "撤離；疏散"
    },
    {
      "word": "evolution",
      "pos": "n.",
      "def": "進化"
    },
    {
      "word": "evolve",
      "pos": "vt.",
      "def": "進化；形成"
    },
    {
      "word": "excerpt",
      "pos": "n.",
      "def": "摘錄"
    },
    {
      "word": "excessive",
      "pos": "adj.",
      "def": "過度的"
    },
    {
      "word": "exclusive",
      "pos": "adj.",
      "def": "獨佔的；排他的"
    },
    {
      "word": "execution",
      "pos": "n.",
      "def": "執行；死刑"
    },
    {
      "word": "exert",
      "pos": "vt.",
      "def": "盡(力)；運用"
    },
    {
      "word": "exotic",
      "pos": "adj.",
      "def": "異國情調的"
    },
    {
      "word": "expedition",
      "pos": "n.",
      "def": "遠征；探險"
    },
    {
      "word": "expel",
      "pos": "vt.",
      "def": "驅逐；開除"
    },
    {
      "word": "expertise",
      "pos": "n.",
      "def": "專門技術"
    },
    {
      "word": "expiration",
      "pos": "n.",
      "def": "終結；期滿"
    },
    {
      "word": "expire",
      "pos": "vi.",
      "def": "滿期；屆"
    },
    {
      "word": "explicit",
      "pos": "adj.",
      "def": "詳盡的"
    },
    {
      "word": "exploit",
      "pos": "n.",
      "def": "功績；功勳"
    },
    {
      "word": "exploration",
      "pos": "n.",
      "def": "探索"
    },
    {
      "word": "exquisite",
      "pos": "adj.",
      "def": "精緻的"
    },
    {
      "word": "extract",
      "pos": "vt.",
      "def": "抽出；提煉"
    },
    {
      "word": "extracurricular",
      "pos": "adj.",
      "def": "課外的"
    },
    {
      "word": "eyesight",
      "pos": "n.",
      "def": "視力；視野"
    },
    {
      "word": "fabulous",
      "pos": "adj.",
      "def": "驚人的；極好的"
    },
    {
      "word": "facilitate",
      "pos": "vt.",
      "def": "促進；幫助"
    },
    {
      "word": "faction",
      "pos": "n.",
      "def": "派系；小集團"
    },
    {
      "word": "faculty",
      "pos": "n.",
      "def": "全體教職員"
    },
    {
      "word": "familiarity",
      "pos": "n.",
      "def": "熟悉；親近"
    },
    {
      "word": "famine",
      "pos": "n.",
      "def": "饑荒"
    },
    {
      "word": "fascination",
      "pos": "n.",
      "def": "魅力；迷戀"
    },
    {
      "word": "feasible",
      "pos": "adj.",
      "def": "可實行的"
    },
    {
      "word": "federation",
      "pos": "n.",
      "def": "聯邦政府"
    },
    {
      "word": "feedback",
      "pos": "n.",
      "def": "反饋；回饋"
    },
    {
      "word": "fertility",
      "pos": "n.",
      "def": "肥沃；繁殖力"
    },
    {
      "word": "fidelity",
      "pos": "n.",
      "def": "忠貞"
    },
    {
      "word": "finite",
      "pos": "adj.",
      "def": "有限的"
    },
    {
      "word": "fireproof",
      "pos": "adj.",
      "def": "防火的"
    },
    {
      "word": "flare",
      "pos": "vi.",
      "def": "vt.(火焰)閃耀"
    },
    {
      "word": "fleet",
      "pos": "n.",
      "def": "艦隊"
    },
    {
      "word": "flicker",
      "pos": "vi.",
      "def": "閃爍；搖曳"
    },
    {
      "word": "fling",
      "pos": "vi., vt.",
      "def": "n.(用力地)扔；擲"
    },
    {
      "word": "fluid",
      "pos": "adj.",
      "def": "n.流體的；液體"
    },
    {
      "word": "flutter vi.(",
      "pos": "",
      "def": "鳥)振翼；飄揚"
    },
    {
      "word": "foresee",
      "pos": "vt.",
      "def": "預見；預知"
    },
    {
      "word": "formidable",
      "pos": "adj.",
      "def": "可怕的；難克服的"
    },
    {
      "word": "formulate",
      "pos": "vt.",
      "def": "使公式化"
    },
    {
      "word": "forsake",
      "pos": "vt.",
      "def": "遺棄；背棄"
    },
    {
      "word": "forthcoming",
      "pos": "adj.",
      "def": "即將到來的；隨時可得的"
    },
    {
      "word": "fortify",
      "pos": "vt.",
      "def": "加強；支持"
    },
    {
      "word": "foster",
      "pos": "vt.",
      "def": "adj.養育；收養的"
    },
    {
      "word": "fracture (n.)",
      "pos": "",
      "def": "斷裂；骨折"
    },
    {
      "word": "fragile",
      "pos": "adj.",
      "def": "易碎的；脆弱的"
    },
    {
      "word": "fragment",
      "pos": "n.",
      "def": "vt.vi.(成)碎片"
    },
    {
      "word": "frail",
      "pos": "adj.",
      "def": "虛弱的"
    },
    {
      "word": "fraud",
      "pos": "n.",
      "def": "詐騙(行為)；騙子"
    },
    {
      "word": "freak",
      "pos": "n.",
      "def": "怪誕的行動；畸形的人"
    },
    {
      "word": "fret",
      "pos": "vt.",
      "def": "vi.使苦惱；煩躁"
    },
    {
      "word": "friction",
      "pos": "n.",
      "def": "摩擦(力)"
    },
    {
      "word": "galaxy",
      "pos": "n.",
      "def": "銀河"
    },
    {
      "word": "generalize",
      "pos": "vi.",
      "def": "vt.泛論；歸納"
    },
    {
      "word": "generate",
      "pos": "vt.",
      "def": "產生；引起"
    },
    {
      "word": "generator",
      "pos": "n.",
      "def": "發電機"
    },
    {
      "word": "genetic",
      "pos": "adj.",
      "def": "起源的；基因的"
    },
    {
      "word": "genetics",
      "pos": "n.",
      "def": "遺傳學(單)"
    },
    {
      "word": "glamour",
      "pos": "n.",
      "def": "魅力；妖豔"
    },
    {
      "word": "glassware",
      "pos": "n.",
      "def": "玻璃器皿"
    },
    {
      "word": "glisten",
      "pos": "vi.",
      "def": "n.閃耀；閃光"
    },
    {
      "word": "gloomy",
      "pos": "adj.",
      "def": "陰鬱的"
    },
    {
      "word": "GMO/genetically modified organism",
      "pos": "n.",
      "def": "基因改造生物"
    },
    {
      "word": "graph",
      "pos": "n.",
      "def": "圖表；圖解"
    },
    {
      "word": "graphic",
      "pos": "adj.",
      "def": "寫實的；圖解的"
    },
    {
      "word": "grill n.烤架",
      "pos": "vt.",
      "def": "vi.烤"
    },
    {
      "word": "grocer",
      "pos": "n.",
      "def": "食品雜貨商"
    },
    {
      "word": "grope",
      "pos": "vi.",
      "def": "vt.摸索"
    },
    {
      "word": "guerrilla",
      "pos": "n.",
      "def": "游擊戰(隊員)"
    },
    {
      "word": "habitat",
      "pos": "n.",
      "def": "棲息地"
    },
    {
      "word": "hack",
      "pos": "vi., vt.",
      "def": "n.劈；砍"
    },
    {
      "word": "hacker",
      "pos": "n.",
      "def": "駭客"
    },
    {
      "word": "hail",
      "pos": "n.",
      "def": "冰雹"
    },
    {
      "word": "harass",
      "pos": "vt.",
      "def": "使…煩惱；騷擾"
    },
    {
      "word": "harassment",
      "pos": "n.",
      "def": "煩惱；騷擾"
    },
    {
      "word": "hazard",
      "pos": "n.",
      "def": "危害(物)"
    },
    {
      "word": "hemisphere n.(",
      "pos": "",
      "def": "地球的)半球；半球體"
    },
    {
      "word": "hereafter",
      "pos": "adv.",
      "def": "此後；來世"
    },
    {
      "word": "heritage",
      "pos": "n.",
      "def": "遺產"
    },
    {
      "word": "heroin",
      "pos": "n.",
      "def": "海洛因"
    },
    {
      "word": "highlight",
      "pos": "vt.",
      "def": "照亮 n.最突出(或最精彩)的部分"
    },
    {
      "word": "honorary",
      "pos": "adj.",
      "def": "名譽上的"
    },
    {
      "word": "hormone",
      "pos": "n.",
      "def": "荷爾蒙"
    },
    {
      "word": "hospitable",
      "pos": "adj.",
      "def": "好客的"
    },
    {
      "word": "hospitality",
      "pos": "n.",
      "def": "好客；殷勤"
    },
    {
      "word": "hospitalize",
      "pos": "vt.",
      "def": "使…住院治療"
    },
    {
      "word": "hostility",
      "pos": "n.",
      "def": "敵意；敵視"
    },
    {
      "word": "humanitarian",
      "pos": "",
      "def": ""
    },
    {
      "word": "humiliate",
      "pos": "vt.",
      "def": "羞辱；使丟臉"
    },
    {
      "word": "hunch n.預感；肉峰；隆起",
      "pos": "vi., vt.",
      "def": "隆起"
    },
    {
      "word": "hurdle",
      "pos": "n.",
      "def": "vt.跳欄；跨(欄)"
    },
    {
      "word": "hygiene",
      "pos": "n.",
      "def": "衛生(學)"
    },
    {
      "word": "hypocrisy",
      "pos": "n.",
      "def": "偽善；虛偽"
    },
    {
      "word": "hypocrite",
      "pos": "n.",
      "def": "偽君子"
    },
    {
      "word": "hysterical",
      "pos": "adj.",
      "def": "歇斯底里的"
    },
    {
      "word": "illuminate",
      "pos": "vt.",
      "def": "vi.照亮"
    },
    {
      "word": "illusion",
      "pos": "n.",
      "def": "幻覺；假象"
    },
    {
      "word": "immune",
      "pos": "adj.",
      "def": "免疫的"
    },
    {
      "word": "imperative",
      "pos": "adj.",
      "def": "必要的；命令式的"
    },
    {
      "word": "implement",
      "pos": "n.",
      "def": "器具 vt.實施"
    },
    {
      "word": "implication",
      "pos": "n.",
      "def": "暗示；牽連"
    },
    {
      "word": "implicit",
      "pos": "adj.",
      "def": "含蓄的"
    },
    {
      "word": "imposing",
      "pos": "adj.",
      "def": "壯觀的"
    },
    {
      "word": "imprison",
      "pos": "vt.",
      "def": "監禁"
    },
    {
      "word": "imprisonment",
      "pos": "n.",
      "def": "監禁"
    },
    {
      "word": "incentive",
      "pos": "n.",
      "def": "動機"
    },
    {
      "word": "incidental",
      "pos": "adj.",
      "def": "附帶的；偶然發生的"
    },
    {
      "word": "incline",
      "pos": "vi.",
      "def": "vt.傾斜；心裡傾向"
    },
    {
      "word": "inclusive",
      "pos": "adj.",
      "def": "包含的"
    },
    {
      "word": "indignation",
      "pos": "n.",
      "def": "憤慨"
    },
    {
      "word": "inevitable",
      "pos": "adj.",
      "def": "不可避免的"
    },
    {
      "word": "infectious",
      "pos": "adj.",
      "def": "傳染性的"
    },
    {
      "word": "infer",
      "pos": "vt.",
      "def": "vi.推論；意味著…"
    },
    {
      "word": "inference",
      "pos": "n.",
      "def": "推論"
    },
    {
      "word": "ingenious",
      "pos": "adj.",
      "def": "巧妙的；心靈手巧的；足智多謀的"
    },
    {
      "word": "ingenuity",
      "pos": "n.",
      "def": "足智多謀；巧妙；精巧的裝置"
    },
    {
      "word": "inhabit",
      "pos": "vt.",
      "def": "棲息於…"
    },
    {
      "word": "inhabitant",
      "pos": "n.",
      "def": "居民；居住者"
    },
    {
      "word": "inherent",
      "pos": "adj.",
      "def": "固有的；與生俱來的"
    },
    {
      "word": "initiative",
      "pos": "adj.",
      "def": "創始的 n.倡議；進取心"
    },
    {
      "word": "inject",
      "pos": "vt.",
      "def": "注射(藥液等)"
    },
    {
      "word": "injection",
      "pos": "n.",
      "def": "注射"
    },
    {
      "word": "injustice",
      "pos": "n.",
      "def": "不正義"
    },
    {
      "word": "innovation",
      "pos": "n.",
      "def": "改革；創新"
    },
    {
      "word": "innovative",
      "pos": "adj.",
      "def": "創新的"
    },
    {
      "word": "inquiry",
      "pos": "n.",
      "def": "詢問；調查；探索"
    },
    {
      "word": "insight",
      "pos": "n.",
      "def": "洞察力"
    },
    {
      "word": "insistence",
      "pos": "n.",
      "def": "堅持"
    },
    {
      "word": "installation",
      "pos": "n.",
      "def": "就任；安裝裝置"
    },
    {
      "word": "installment",
      "pos": "n.",
      "def": "分期付款"
    },
    {
      "word": "institution",
      "pos": "n.",
      "def": "制度；公共團體；機構；建立"
    },
    {
      "word": "intact",
      "pos": "adj.",
      "def": "完整無缺的"
    },
    {
      "word": "integrate",
      "pos": "vt.",
      "def": "vi.使結合；使完整"
    },
    {
      "word": "integration",
      "pos": "n.",
      "def": "整合"
    },
    {
      "word": "integrity",
      "pos": "n.",
      "def": "正直；完善"
    },
    {
      "word": "intellect",
      "pos": "n.",
      "def": "智力"
    },
    {
      "word": "intersection",
      "pos": "n.",
      "def": "十字路口"
    },
    {
      "word": "interval",
      "pos": "n.",
      "def": "間隔；距離"
    },
    {
      "word": "intervene",
      "pos": "vi.",
      "def": "干涉；打擾"
    },
    {
      "word": "intervention",
      "pos": "n.",
      "def": "干涉"
    },
    {
      "word": "intimacy",
      "pos": "n.",
      "def": "親密；私下"
    },
    {
      "word": "intimidate",
      "pos": "vt.",
      "def": "威嚇；脅迫"
    },
    {
      "word": "intrude",
      "pos": "vi.",
      "def": "vt.侵入"
    },
    {
      "word": "intruder",
      "pos": "n.",
      "def": "侵入者"
    },
    {
      "word": "invaluable",
      "pos": "adj.",
      "def": "無價的"
    },
    {
      "word": "inventory",
      "pos": "n.",
      "def": "存貨清單；庫存"
    },
    {
      "word": "investigator",
      "pos": "n.",
      "def": "調查者"
    },
    {
      "word": "IQ / intelligence quotient",
      "pos": "n.",
      "def": "智力商數"
    },
    {
      "word": "ironic",
      "pos": "adj.",
      "def": "冷嘲的"
    },
    {
      "word": "irony",
      "pos": "n.",
      "def": "諷刺"
    },
    {
      "word": "irritable",
      "pos": "adj.",
      "def": "易怒的"
    },
    {
      "word": "irritate",
      "pos": "vt.",
      "def": "vi.使惱怒"
    },
    {
      "word": "irritation",
      "pos": "n.",
      "def": "惱怒"
    },
    {
      "word": "joyous",
      "pos": "adj.",
      "def": "快樂的"
    },
    {
      "word": "legitimate",
      "pos": "adj.",
      "def": "合法的；正統的"
    },
    {
      "word": "lengthy",
      "pos": "adj.",
      "def": "長的"
    },
    {
      "word": "liable",
      "pos": "adj.",
      "def": "易...的；有義務的"
    },
    {
      "word": "liberate",
      "pos": "vt.",
      "def": "解放；使獲自由"
    },
    {
      "word": "liberation",
      "pos": "n.",
      "def": "解放"
    },
    {
      "word": "likewise",
      "pos": "adv.",
      "def": "同樣地"
    },
    {
      "word": "limousine",
      "pos": "n.",
      "def": "大型豪華轎車(limo)"
    },
    {
      "word": "liner",
      "pos": "n.",
      "def": "班機"
    },
    {
      "word": "linguist",
      "pos": "n.",
      "def": "語言學者"
    },
    {
      "word": "liter",
      "pos": "n.",
      "def": "公升"
    },
    {
      "word": "literacy",
      "pos": "n.",
      "def": "識字"
    },
    {
      "word": "literal",
      "pos": "adj.",
      "def": "照字面的"
    },
    {
      "word": "literate",
      "pos": "adj.",
      "def": "能讀寫的；識字的"
    },
    {
      "word": "longevity",
      "pos": "n.",
      "def": "長壽"
    },
    {
      "word": "lounge",
      "pos": "n.",
      "def": "休息室；會客廳；候機室"
    },
    {
      "word": "lunatic",
      "pos": "adj.",
      "def": "瘋的"
    },
    {
      "word": "lure",
      "pos": "vt.",
      "def": "n.引誘"
    },
    {
      "word": "lush",
      "pos": "adj.",
      "def": "蒼翠繁茂的"
    },
    {
      "word": "lyric",
      "pos": "n.",
      "def": "抒情的 n.抒情詩；歌詞"
    },
    {
      "word": "magnitude",
      "pos": "n.",
      "def": "重要；強度；(地震)震級"
    },
    {
      "word": "malaria",
      "pos": "n.",
      "def": "瘧疾"
    },
    {
      "word": "manipulate",
      "pos": "vt.",
      "def": "操作；操弄"
    },
    {
      "word": "manuscript",
      "pos": "n.",
      "def": "手稿 adj.手寫的；原稿的"
    },
    {
      "word": "mar",
      "pos": "n.",
      "def": "污點"
    },
    {
      "word": "massacre",
      "pos": "n.",
      "def": "大屠殺"
    },
    {
      "word": "mastery",
      "pos": "n.",
      "def": "支配；熟練"
    },
    {
      "word": "materialism",
      "pos": "n.",
      "def": "物質主義"
    },
    {
      "word": "mattress",
      "pos": "n.",
      "def": "床墊"
    },
    {
      "word": "mechanism",
      "pos": "n.",
      "def": "機械裝置"
    },
    {
      "word": "medication",
      "pos": "n.",
      "def": "藥物"
    },
    {
      "word": "medieval",
      "pos": "adj.",
      "def": "中世紀的；老式的"
    },
    {
      "word": "meditate",
      "pos": "vi.",
      "def": "vt.計劃；沈思"
    },
    {
      "word": "meditation",
      "pos": "n.",
      "def": "沈思；冥想"
    },
    {
      "word": "melancholy",
      "pos": "n.",
      "def": "adj.憂鬱(的)"
    },
    {
      "word": "mellow",
      "pos": "adj.",
      "def": "成熟的；圓潤的"
    },
    {
      "word": "mentality",
      "pos": "n.",
      "def": "智力"
    },
    {
      "word": "merchandise",
      "pos": "n.",
      "def": "商品"
    },
    {
      "word": "merge",
      "pos": "vt.",
      "def": "vi.合併"
    },
    {
      "word": "metaphor",
      "pos": "n.",
      "def": "隱喻"
    },
    {
      "word": "metropolitan",
      "pos": "n.",
      "def": "大都市的"
    },
    {
      "word": "migrate",
      "pos": "vi.",
      "def": "遷移"
    },
    {
      "word": "migration",
      "pos": "n.",
      "def": "遷移"
    },
    {
      "word": "militant",
      "pos": "adj.",
      "def": "好戰的 n.好戰者"
    },
    {
      "word": "miller",
      "pos": "n.",
      "def": "磨坊主"
    },
    {
      "word": "mimic",
      "pos": "vt.",
      "def": "模仿 n.善模仿的人；小丑"
    },
    {
      "word": "miniature",
      "pos": "adj.",
      "def": "小型的"
    },
    {
      "word": "minimize",
      "pos": "vt.",
      "def": "使縮到最小"
    },
    {
      "word": "miraculous",
      "pos": "adj.",
      "def": "奇蹟般的"
    },
    {
      "word": "mischievous",
      "pos": "adj.",
      "def": "惡作劇的"
    },
    {
      "word": "missionary",
      "pos": "adj.",
      "def": "傳教的 n.傳教士"
    },
    {
      "word": "mobilize",
      "pos": "vt.",
      "def": "vi.動員"
    },
    {
      "word": "modernization",
      "pos": "n.",
      "def": "現代化"
    },
    {
      "word": "mold",
      "pos": "n.",
      "def": "模型"
    },
    {
      "word": "momentum",
      "pos": "n.",
      "def": "動力"
    },
    {
      "word": "monopoly",
      "pos": "n.",
      "def": "獨佔；壟斷"
    },
    {
      "word": "monotonous",
      "pos": "adj.",
      "def": "單調的"
    },
    {
      "word": "monotony",
      "pos": "n.",
      "def": "單調"
    },
    {
      "word": "morale",
      "pos": "n.",
      "def": "道德；士氣"
    },
    {
      "word": "morality",
      "pos": "n.",
      "def": "道德"
    },
    {
      "word": "motto",
      "pos": "n.",
      "def": "座右銘"
    },
    {
      "word": "mournful",
      "pos": "adj.",
      "def": "憂傷的"
    },
    {
      "word": "mouthpiece n.(",
      "pos": "",
      "def": "樂器的)吹口"
    },
    {
      "word": "spokesperson",
      "pos": "n.",
      "def": "代言人(spokesman/spokeswoman)"
    },
    {
      "word": "municipal",
      "pos": "adj.",
      "def": "市政的；地方自治的"
    },
    {
      "word": "mute",
      "pos": "adj.",
      "def": "沈默的；啞的；無聲的"
    },
    {
      "word": "mythology",
      "pos": "n.",
      "def": "神話"
    },
    {
      "word": "narrate",
      "pos": "vt.",
      "def": "vi.敘述；作旁白"
    },
    {
      "word": "narrative",
      "pos": "n.",
      "def": "記敘文 adj.敘述的"
    },
    {
      "word": "narrator",
      "pos": "n.",
      "def": "敘述者；旁白"
    },
    {
      "word": "nationalism",
      "pos": "n.",
      "def": "民族主義"
    },
    {
      "word": "naturalist",
      "pos": "n.",
      "def": "博物學家；自然主義者"
    },
    {
      "word": "naval",
      "pos": "adj.",
      "def": "海軍的"
    },
    {
      "word": "navel",
      "pos": "n.",
      "def": "肚臍"
    },
    {
      "word": "navigation",
      "pos": "n.",
      "def": "航海；導航"
    },
    {
      "word": "negotiation",
      "pos": "n.",
      "def": "談判"
    },
    {
      "word": "neon",
      "pos": "n.",
      "def": "霓虹燈"
    },
    {
      "word": "neutral",
      "pos": "adj.",
      "def": "中立的；不確定的"
    },
    {
      "word": "newlywed",
      "pos": "n.",
      "def": "新婚夫婦"
    },
    {
      "word": "newscaster",
      "pos": "n.",
      "def": "新聞廣播員(anchorman/anchorwoman)"
    },
    {
      "word": "nomination",
      "pos": "n.",
      "def": "提名；任命"
    },
    {
      "word": "nominee",
      "pos": "n.",
      "def": "被提名人"
    },
    {
      "word": "norm",
      "pos": "n.",
      "def": "基準；常模"
    },
    {
      "word": "notorious",
      "pos": "adj.",
      "def": "惡名昭彰的"
    },
    {
      "word": "nourish",
      "pos": "vt.",
      "def": "養育；滋養"
    },
    {
      "word": "nourishment",
      "pos": "n.",
      "def": "養育；滋養"
    },
    {
      "word": "nuisance",
      "pos": "n.",
      "def": "討厭的人(或事物)"
    },
    {
      "word": "nurture",
      "pos": "n.",
      "def": "vt.教養；培育"
    },
    {
      "word": "nutrient",
      "pos": "adj.",
      "def": "營養的 n.營養物"
    },
    {
      "word": "nutrition",
      "pos": "n.",
      "def": "營養(學)"
    },
    {
      "word": "nutritious",
      "pos": "adj.",
      "def": "有營養的"
    },
    {
      "word": "obligation",
      "pos": "n.",
      "def": "義務；責任"
    },
    {
      "word": "oblige",
      "pos": "vt.",
      "def": "迫使；使…感激"
    },
    {
      "word": "obscure",
      "pos": "vt., adj.",
      "def": "暗的；模糊的；遮掩；混淆"
    },
    {
      "word": "offering",
      "pos": "n.",
      "def": "供奉；祭品"
    },
    {
      "word": "offspring",
      "pos": "n.",
      "def": "子女；後代"
    },
    {
      "word": "operational",
      "pos": "adj.",
      "def": "操作上的"
    },
    {
      "word": "opposition",
      "pos": "n.",
      "def": "反對；對抗"
    },
    {
      "word": "oppress",
      "pos": "vt.",
      "def": "壓迫"
    },
    {
      "word": "oppression",
      "pos": "n.",
      "def": "壓迫"
    },
    {
      "word": "option",
      "pos": "n.",
      "def": "選擇(權)"
    },
    {
      "word": "optional",
      "pos": "adj.",
      "def": "非必要的；可選擇的"
    },
    {
      "word": "ordeal",
      "pos": "n.",
      "def": "苦難；嚴峻考驗"
    },
    {
      "word": "orderly",
      "pos": "adv., adj.",
      "def": "整齊的；有秩序的；按順序地"
    },
    {
      "word": "organism",
      "pos": "n.",
      "def": "生物；有機體"
    },
    {
      "word": "originality",
      "pos": "n.",
      "def": "創意；新穎"
    },
    {
      "word": "originate",
      "pos": "vi.",
      "def": "發源 vt.引起"
    },
    {
      "word": "outbreak",
      "pos": "n.",
      "def": "爆發"
    },
    {
      "word": "outfit",
      "pos": "n.",
      "def": "全套服裝/裝備"
    },
    {
      "word": "outing",
      "pos": "n.",
      "def": "郊遊；遠足"
    },
    {
      "word": "outlaw",
      "pos": "n.",
      "def": "罪犯 vt.宣布…為不合法"
    },
    {
      "word": "outlet n",
      "pos": "",
      "def": "出口；銷路"
    },
    {
      "word": "outlook",
      "pos": "vt., n.",
      "def": "觀點；景色；比…好看 vi.朝外看"
    },
    {
      "word": "outnumber",
      "pos": "vt.",
      "def": "數量上超過"
    },
    {
      "word": "outrage",
      "pos": "vt.",
      "def": "激怒 n.惡行"
    },
    {
      "word": "outrageous",
      "pos": "adj.",
      "def": "粗暴的,可憎的"
    },
    {
      "word": "outright",
      "pos": "adj.",
      "def": "直率的 adv.徹底地"
    },
    {
      "word": "outset",
      "pos": "n.",
      "def": "最初"
    },
    {
      "word": "overhead",
      "pos": "adj.",
      "def": "在頭頂上的"
    },
    {
      "word": "overlap",
      "pos": "vt.",
      "def": "vi.(與...)部分重疊"
    },
    {
      "word": "overturn",
      "pos": "vt.",
      "def": "vi.(使)傾覆"
    },
    {
      "word": "pact",
      "pos": "n.",
      "def": "契約"
    },
    {
      "word": "pamphlet",
      "pos": "n.",
      "def": "小冊子"
    },
    {
      "word": "paralyze",
      "pos": "vt.",
      "def": "使麻痺,使癱瘓"
    },
    {
      "word": "parliament",
      "pos": "n.",
      "def": "議會；國會"
    },
    {
      "word": "pathetic",
      "pos": "adj.",
      "def": "可憐的"
    },
    {
      "word": "patriotic",
      "pos": "adj.",
      "def": "愛國的"
    },
    {
      "word": "personal digital assistant",
      "pos": "n.",
      "def": "個人數位助理(PDA)"
    },
    {
      "word": "peddle",
      "pos": "vt.",
      "def": "vi.(沿街)叫賣"
    },
    {
      "word": "pedestrian",
      "pos": "n.",
      "def": "行人 adj.徒步的"
    },
    {
      "word": "peninsula",
      "pos": "n.",
      "def": "半島"
    },
    {
      "word": "pension",
      "pos": "n.",
      "def": "退休金；養老金"
    },
    {
      "word": "perception",
      "pos": "n.",
      "def": "感知；觀念"
    },
    {
      "word": "perseverance",
      "pos": "n.",
      "def": "堅持不懈；毅力"
    },
    {
      "word": "persevere",
      "pos": "vi.",
      "def": "堅持不懈"
    },
    {
      "word": "persistence",
      "pos": "n.",
      "def": "堅持；固執"
    },
    {
      "word": "persistent",
      "pos": "adj.",
      "def": "堅持不懈的；固執的"
    },
    {
      "word": "perspective",
      "pos": "n., adj.",
      "def": "透視的；觀點；遠景"
    },
    {
      "word": "pesticide",
      "pos": "n.",
      "def": "殺蟲劑"
    },
    {
      "word": "petroleum",
      "pos": "n.",
      "def": "石油"
    },
    {
      "word": "petty",
      "pos": "adj.",
      "def": "小的；瑣碎的"
    },
    {
      "word": "pharmacist",
      "pos": "n.",
      "def": "藥劑師"
    },
    {
      "word": "pharmacy",
      "pos": "n.",
      "def": "藥房"
    },
    {
      "word": "phase n.階段",
      "pos": "vt.",
      "def": "vi.分階段進行"
    },
    {
      "word": "photographic",
      "pos": "adj.",
      "def": "攝影的；逼真的"
    },
    {
      "word": "picturesque",
      "pos": "adj.",
      "def": "圖畫般的"
    },
    {
      "word": "pierce",
      "pos": "vt.",
      "def": "vi.刺穿"
    },
    {
      "word": "piety",
      "pos": "n.",
      "def": "虔誠；孝順"
    },
    {
      "word": "pious",
      "pos": "adj.",
      "def": "虔誠的"
    },
    {
      "word": "pipeline",
      "pos": "n.",
      "def": "導管；輸油管"
    },
    {
      "word": "pitcher",
      "pos": "n.",
      "def": "投手；水壺"
    },
    {
      "word": "plight",
      "pos": "n.",
      "def": "誓約；困境"
    },
    {
      "word": "pneumonia",
      "pos": "n.",
      "def": "肺炎"
    },
    {
      "word": "poach",
      "pos": "vt.",
      "def": "盜獵；水煮"
    },
    {
      "word": "poacher",
      "pos": "n.",
      "def": "盜獵者；蒸鍋"
    },
    {
      "word": "pollutant",
      "pos": "n.",
      "def": "污染物 adj.受汙染的"
    },
    {
      "word": "ponder",
      "pos": "vt.",
      "def": "vi.沈思；仔細考慮"
    },
    {
      "word": "populate",
      "pos": "vt.",
      "def": "居住於…"
    },
    {
      "word": "posture",
      "pos": "n.",
      "def": "姿勢"
    },
    {
      "word": "precede",
      "pos": "vt.",
      "def": "vi.處在(...)之前；優於"
    },
    {
      "word": "precedent",
      "pos": "n.",
      "def": "先例 adj.在前的"
    },
    {
      "word": "precision",
      "pos": "n.",
      "def": "精確"
    },
    {
      "word": "predecessor",
      "pos": "n.",
      "def": "前任"
    },
    {
      "word": "prediction",
      "pos": "n.",
      "def": "預言"
    },
    {
      "word": "preface",
      "pos": "n.",
      "def": "序言"
    },
    {
      "word": "prejudice",
      "pos": "n.",
      "def": "偏見"
    },
    {
      "word": "preliminary",
      "pos": "adj.",
      "def": "預備的 n.初步"
    },
    {
      "word": "premature",
      "pos": "adj.",
      "def": "過早的；不成熟的"
    },
    {
      "word": "premier",
      "pos": "n.",
      "def": "首相 adj.最早的；首要的"
    },
    {
      "word": "prescribe",
      "pos": "vt.",
      "def": "規定；開處方"
    },
    {
      "word": "prescription",
      "pos": "n.",
      "def": "規定；處方"
    },
    {
      "word": "preside",
      "pos": "vi.",
      "def": "主持；管轄"
    },
    {
      "word": "presidency",
      "pos": "n.",
      "def": "總裁/總統職位"
    },
    {
      "word": "presidential",
      "pos": "adj.",
      "def": "總裁/總統的"
    },
    {
      "word": "prestige",
      "pos": "n.",
      "def": "名望"
    },
    {
      "word": "presume",
      "pos": "vt.",
      "def": "vi.擅自(做)；假定"
    },
    {
      "word": "preventive",
      "pos": "adj.",
      "def": "預防的"
    },
    {
      "word": "productivity",
      "pos": "n.",
      "def": "生產力"
    },
    {
      "word": "proficiency",
      "pos": "n.",
      "def": "精通"
    },
    {
      "word": "profound",
      "pos": "adj.",
      "def": "深刻的；完全的"
    },
    {
      "word": "progressive",
      "pos": "adj.",
      "def": "進步的；革新的"
    },
    {
      "word": "prohibit",
      "pos": "vt.",
      "def": "禁止"
    },
    {
      "word": "prohibition",
      "pos": "n.",
      "def": "禁止"
    },
    {
      "word": "projection",
      "pos": "n.",
      "def": "設計；發射；預測"
    },
    {
      "word": "prone",
      "pos": "adj.",
      "def": "易於...的；傾斜的"
    },
    {
      "word": "propaganda",
      "pos": "n.",
      "def": "宣傳"
    },
    {
      "word": "propel",
      "pos": "vt.",
      "def": "推進"
    },
    {
      "word": "propeller",
      "pos": "n.",
      "def": "螺旋槳；推進器"
    },
    {
      "word": "prose",
      "pos": "n.",
      "def": "散文"
    },
    {
      "word": "prosecute",
      "pos": "vt.",
      "def": "起訴"
    },
    {
      "word": "prosecution",
      "pos": "n.",
      "def": "起訴"
    },
    {
      "word": "prospective",
      "pos": "adj.",
      "def": "預期的"
    },
    {
      "word": "provincial",
      "pos": "adj.",
      "def": "省的；地方性的"
    },
    {
      "word": "provoke",
      "pos": "vt.",
      "def": "對...挑釁；煽動"
    },
    {
      "word": "prowl",
      "pos": "vi.",
      "def": "vt.潛行(於)"
    },
    {
      "word": "punctual",
      "pos": "adj.",
      "def": "準時的"
    },
    {
      "word": "purify",
      "pos": "vt.",
      "def": "淨化；精煉"
    },
    {
      "word": "purity",
      "pos": "n.",
      "def": "純淨"
    },
    {
      "word": "qualification",
      "pos": "n.",
      "def": "資格"
    },
    {
      "word": "quarrelsome",
      "pos": "adj.",
      "def": "喜歡爭吵的"
    },
    {
      "word": "quench",
      "pos": "vt.",
      "def": "vi.熄滅 vt.解(渴)；壓制"
    },
    {
      "word": "query",
      "pos": "n.",
      "def": "vt.vi.詢問"
    },
    {
      "word": "questionnaire",
      "pos": "n.",
      "def": "問卷"
    },
    {
      "word": "racism",
      "pos": "n.",
      "def": "種族主義"
    },
    {
      "word": "radiant",
      "pos": "adj.",
      "def": "光芒四射的；容光煥發的"
    },
    {
      "word": "radiate vi.輻射",
      "pos": "vi.",
      "def": "vt.散發；流露"
    },
    {
      "word": "radiation",
      "pos": "n.",
      "def": "輻射；發光"
    },
    {
      "word": "radiator",
      "pos": "n.",
      "def": "散熱器；輻射體"
    },
    {
      "word": "radical",
      "pos": "n., adj.",
      "def": "根本的；激進的；根(號)；部首；激進份子"
    },
    {
      "word": "raft n.橡皮艇；木筏",
      "pos": "vt.",
      "def": "vi.乘筏(渡河)"
    },
    {
      "word": "raid",
      "pos": "n.",
      "def": "vt.vi.襲擊,劫掠"
    },
    {
      "word": "random",
      "pos": "n.",
      "def": "任意行動 adj.隨機的"
    },
    {
      "word": "ransom",
      "pos": "n.",
      "def": "贖金"
    },
    {
      "word": "rash",
      "pos": "n.",
      "def": "疹子 adj.輕率的"
    },
    {
      "word": "rational",
      "pos": "adj.",
      "def": "理性的 n.有理數"
    },
    {
      "word": "ravage vt.使荒蕪",
      "pos": "vi.",
      "def": "n.毀滅；蹂躪"
    },
    {
      "word": "realism",
      "pos": "n.",
      "def": "現實性"
    },
    {
      "word": "realization",
      "pos": "n.",
      "def": "領悟；實現"
    },
    {
      "word": "rebellion",
      "pos": "n.",
      "def": "反叛"
    },
    {
      "word": "recession",
      "pos": "n.",
      "def": "後退；衰退"
    },
    {
      "word": "recipient",
      "pos": "n.",
      "def": "接受者 adj.接受的"
    },
    {
      "word": "recommendation",
      "pos": "n.",
      "def": "推薦"
    },
    {
      "word": "reconcile",
      "pos": "vt.",
      "def": "使和解"
    },
    {
      "word": "recreational",
      "pos": "adj.",
      "def": "消遣的"
    },
    {
      "word": "recruit",
      "pos": "vt.",
      "def": "vi.徵募 n.新兵；新手"
    },
    {
      "word": "recur",
      "pos": "vi.",
      "def": "再發生；返回"
    },
    {
      "word": "redundant",
      "pos": "adj.",
      "def": "多餘的"
    },
    {
      "word": "refine",
      "pos": "vt.",
      "def": "vi.提煉；改善"
    },
    {
      "word": "refinement",
      "pos": "n.",
      "def": "提煉；改善"
    },
    {
      "word": "reflective",
      "pos": "adj.",
      "def": "反射的"
    },
    {
      "word": "refreshment",
      "pos": "n.",
      "def": "精力恢復 ；茶點；點心"
    },
    {
      "word": "refund",
      "pos": "n.",
      "def": "退款；償還"
    },
    {
      "word": "regardless",
      "pos": "adj.",
      "def": "不關心(注意)的"
    },
    {
      "word": "regime",
      "pos": "n.",
      "def": "政體；政權"
    },
    {
      "word": "rehearsal",
      "pos": "n.",
      "def": "排練"
    },
    {
      "word": "rehearse",
      "pos": "vt.",
      "def": "vi.排練"
    },
    {
      "word": "rein",
      "pos": "n.",
      "def": "韁繩 vt.駕馭 vi.勒馬"
    },
    {
      "word": "reinforce",
      "pos": "vt.",
      "def": "強化"
    },
    {
      "word": "relay n.接力賽跑",
      "pos": "vt.",
      "def": "vi.轉播"
    },
    {
      "word": "relevant",
      "pos": "adj.",
      "def": "有關的"
    },
    {
      "word": "reliance",
      "pos": "n.",
      "def": "信賴；依靠"
    },
    {
      "word": "relish",
      "pos": "n.",
      "def": "滋味 vt.品嚐 vi.可口"
    },
    {
      "word": "remainder",
      "pos": "n.",
      "def": "剩餘物"
    },
    {
      "word": "removal",
      "pos": "n.",
      "def": "移去"
    },
    {
      "word": "renaissance",
      "pos": "n.",
      "def": "新生；文藝復興"
    },
    {
      "word": "render",
      "pos": "vt.",
      "def": "使成為；付給；提出"
    },
    {
      "word": "renowned",
      "pos": "adj.",
      "def": "有名的"
    },
    {
      "word": "rental",
      "pos": "n.",
      "def": "租金；租賃 adj.供出租的"
    },
    {
      "word": "repress",
      "pos": "vt.",
      "def": "vi.抑制"
    },
    {
      "word": "resemblance",
      "pos": "n.",
      "def": "相似"
    },
    {
      "word": "reservoir",
      "pos": "n.",
      "def": "蓄水庫"
    },
    {
      "word": "residential",
      "pos": "adj.",
      "def": "居住的"
    },
    {
      "word": "resistant",
      "pos": "adj.",
      "def": "抵抗的 n.抵抗者"
    },
    {
      "word": "resolute",
      "pos": "adj.",
      "def": "堅決的 n.堅定的人"
    },
    {
      "word": "respective",
      "pos": "adj.",
      "def": "各自的"
    },
    {
      "word": "restoration",
      "pos": "n.",
      "def": "恢復；重建"
    },
    {
      "word": "restraint",
      "pos": "n.",
      "def": "抑制"
    },
    {
      "word": "retail",
      "pos": "n.",
      "def": "vt.vi.零售 adj.零售的"
    },
    {
      "word": "retaliate",
      "pos": "vi.",
      "def": "vt.報復"
    },
    {
      "word": "retrieve",
      "pos": "vt.",
      "def": "重獲；挽回 vi.銜回獵物"
    },
    {
      "word": "revelation",
      "pos": "n.",
      "def": "揭示；顯示；天啟"
    },
    {
      "word": "revenue",
      "pos": "n.",
      "def": "收入"
    },
    {
      "word": "revival",
      "pos": "n.",
      "def": "甦醒；重振"
    },
    {
      "word": "rhetoric",
      "pos": "n.",
      "def": "修辭"
    },
    {
      "word": "rhythmic",
      "pos": "adj.",
      "def": "有節奏的"
    },
    {
      "word": "ridicule",
      "pos": "n.",
      "def": "vt.嘲笑"
    },
    {
      "word": "rigorous",
      "pos": "adj.",
      "def": "嚴格的"
    },
    {
      "word": "riot",
      "pos": "n.",
      "def": "vi.暴亂；喧鬧"
    },
    {
      "word": "rite",
      "pos": "n.",
      "def": "儀式"
    },
    {
      "word": "ritual",
      "pos": "n.",
      "def": "adj.儀式(的)"
    },
    {
      "word": "rivalry",
      "pos": "n.",
      "def": "競爭"
    },
    {
      "word": "rotate",
      "pos": "vi.",
      "def": "vt.(使)旋轉,輪流"
    },
    {
      "word": "rotation",
      "pos": "n.",
      "def": "旋轉；輪流"
    },
    {
      "word": "royalty",
      "pos": "n.",
      "def": "王位；皇族"
    },
    {
      "word": "ruby",
      "pos": "n.",
      "def": "紅寶石"
    },
    {
      "word": "safeguard",
      "pos": "vt.",
      "def": "n.保護"
    },
    {
      "word": "saloon",
      "pos": "n.",
      "def": "交誼廳；酒吧"
    },
    {
      "word": "salvation",
      "pos": "n.",
      "def": "拯救"
    },
    {
      "word": "sanction",
      "pos": "n.",
      "def": "vt.認可；制裁"
    },
    {
      "word": "sanctuary",
      "pos": "n.",
      "def": "教堂；庇護所"
    },
    {
      "word": "sane",
      "pos": "adj.",
      "def": "神志正常的；健全的"
    },
    {
      "word": "sanitation",
      "pos": "n.",
      "def": "公共衛生"
    },
    {
      "word": "scenic",
      "pos": "adj.",
      "def": "風景的；戲劇的"
    },
    {
      "word": "scope",
      "pos": "n.",
      "def": "範圍；領域"
    },
    {
      "word": "script",
      "pos": "n.",
      "def": "筆跡；腳本 vt.編為劇本"
    },
    {
      "word": "sector",
      "pos": "n.",
      "def": "扇形；部分"
    },
    {
      "word": "seduce",
      "pos": "vt.",
      "def": "誘惑"
    },
    {
      "word": "selective",
      "pos": "adj.",
      "def": "有選擇性的"
    },
    {
      "word": "seminar",
      "pos": "n.",
      "def": "研討班；專題研討會"
    },
    {
      "word": "senator",
      "pos": "n.",
      "def": "參議員"
    },
    {
      "word": "sentimental",
      "pos": "adj.",
      "def": "多情的"
    },
    {
      "word": "sequence",
      "pos": "n.",
      "def": "連續；後果"
    },
    {
      "word": "serene",
      "pos": "adj.",
      "def": "安詳的；平靜的"
    },
    {
      "word": "serenity",
      "pos": "n.",
      "def": "晴朗；平靜"
    },
    {
      "word": "serving",
      "pos": "n.",
      "def": "服務；(食物)一份"
    },
    {
      "word": "session",
      "pos": "n.",
      "def": "會議；開庭；講習班"
    },
    {
      "word": "setback",
      "pos": "n.",
      "def": "挫折"
    },
    {
      "word": "sewer",
      "pos": "n.",
      "def": "污水管；下水道"
    },
    {
      "word": "shed n.棚",
      "pos": "vt.",
      "def": "vi.流出；散發"
    },
    {
      "word": "sheer",
      "pos": "adj.",
      "def": "全然的 adv.十足地"
    },
    {
      "word": "shilling",
      "pos": "n.",
      "def": "先令"
    },
    {
      "word": "shoplift",
      "pos": "vi.",
      "def": "vt.在商店內順手牽羊"
    },
    {
      "word": "shrewd",
      "pos": "adj.",
      "def": "精明的；狡猾的"
    },
    {
      "word": "shun",
      "pos": "vt.",
      "def": "躲開"
    },
    {
      "word": "siege",
      "pos": "n.",
      "def": "vt.圍攻"
    },
    {
      "word": "signify",
      "pos": "vt.",
      "def": "表示；意味著"
    },
    {
      "word": "silicon",
      "pos": "n.",
      "def": "矽"
    },
    {
      "word": "simplicity",
      "pos": "n.",
      "def": "簡單；樸素"
    },
    {
      "word": "simplify",
      "pos": "vt.",
      "def": "簡化"
    },
    {
      "word": "simultaneous",
      "pos": "adj.",
      "def": "同步的"
    },
    {
      "word": "skeptical",
      "pos": "adj.",
      "def": "懷疑的"
    },
    {
      "word": "skim",
      "pos": "vt.",
      "def": "vi.掠過；瀏覽"
    },
    {
      "word": "slang",
      "pos": "n.",
      "def": "俚語"
    },
    {
      "word": "slash",
      "pos": "vt.",
      "def": "vi.砍；鞭打 n.砍痕；斜線"
    },
    {
      "word": "slavery",
      "pos": "n.",
      "def": "奴隸身分；奴役"
    },
    {
      "word": "slot",
      "pos": "n.",
      "def": "狹縫；投幣口"
    },
    {
      "word": "slum",
      "pos": "n.",
      "def": "貧民窟"
    },
    {
      "word": "smack",
      "pos": "vi., vt.",
      "def": "n 摑巴掌；響吻"
    },
    {
      "word": "smallpox",
      "pos": "n.",
      "def": "天花"
    },
    {
      "word": "smother",
      "pos": "vt.",
      "def": "vi.(使)窒息"
    },
    {
      "word": "smuggle",
      "pos": "vt.",
      "def": "vi.走私"
    },
    {
      "word": "snare",
      "pos": "n.",
      "def": "圈套 vt.(用陷阱等)捕捉"
    },
    {
      "word": "sneaky",
      "pos": "adj.",
      "def": "鬼鬼祟祟的"
    },
    {
      "word": "sneer",
      "pos": "vi.",
      "def": "vt.嘲諷,冷笑"
    },
    {
      "word": "soar",
      "pos": "vi.",
      "def": "n.高飛；暴漲"
    },
    {
      "word": "sociable",
      "pos": "adj.",
      "def": "好交際的"
    },
    {
      "word": "socialism",
      "pos": "n.",
      "def": "社會主義"
    },
    {
      "word": "socialist",
      "pos": "n.",
      "def": "社會主義者"
    },
    {
      "word": "socialize",
      "pos": "vt.",
      "def": "vi.交際；社會化"
    },
    {
      "word": "sociology",
      "pos": "n.",
      "def": "社會學"
    },
    {
      "word": "sodium",
      "pos": "n.",
      "def": "鈉"
    },
    {
      "word": "solidarity",
      "pos": "n.",
      "def": "團結"
    },
    {
      "word": "solitude",
      "pos": "n.",
      "def": "孤獨"
    },
    {
      "word": "soothe",
      "pos": "vt.",
      "def": "vi.安慰；緩和"
    },
    {
      "word": "sophisticated",
      "pos": "adj.",
      "def": "世故的；精緻的；複雜的"
    },
    {
      "word": "sovereignty",
      "pos": "n.",
      "def": "君權；主權"
    },
    {
      "word": "spacious",
      "pos": "adj.",
      "def": "寬敞的"
    },
    {
      "word": "span",
      "pos": "vt., n.",
      "def": "跨度；一段時間；橫跨；延伸"
    },
    {
      "word": "specialize",
      "pos": "vi.",
      "def": "專攻 vt.使專門化"
    },
    {
      "word": "specialty",
      "pos": "n.",
      "def": "特產；專業"
    },
    {
      "word": "specify",
      "pos": "vt.",
      "def": "具體指明"
    },
    {
      "word": "spectacular",
      "pos": "adj.",
      "def": "壯觀的"
    },
    {
      "word": "spectrum",
      "pos": "n.",
      "def": "光譜"
    },
    {
      "word": "speculate",
      "pos": "vi.",
      "def": "思索 vt.推測"
    },
    {
      "word": "sphere",
      "pos": "n.",
      "def": "球體；領域"
    },
    {
      "word": "spike",
      "pos": "vt., n.",
      "def": "大釘；釘鞋；用尖物刺穿；扣殺【排球】"
    },
    {
      "word": "spiral",
      "pos": "vi., n.",
      "def": "螺旋 adj.螺旋(形)的；盤旋 vt.使呈螺旋形"
    },
    {
      "word": "spire",
      "pos": "n.",
      "def": "尖塔 vt.給…裝尖頂 vi.聳立"
    },
    {
      "word": "spokesperson / spokesman / spokeswoman",
      "pos": "n.",
      "def": "發言人"
    },
    {
      "word": "sponsor",
      "pos": "n.",
      "def": "發起者；贊助者 vt.資助"
    },
    {
      "word": "spontaneous",
      "pos": "adj.",
      "def": "自發的"
    },
    {
      "word": "spouse",
      "pos": "n.",
      "def": "配偶"
    },
    {
      "word": "sprawl",
      "pos": "vi.",
      "def": "vt.伸開四肢躺；(使) 蔓生"
    },
    {
      "word": "squad",
      "pos": "n.",
      "def": "小隊"
    },
    {
      "word": "squash",
      "pos": "vt., n.",
      "def": "vi.(把…)壓扁(壓碎)；擠壓；回力球；南瓜屬植物"
    },
    {
      "word": "stability",
      "pos": "n.",
      "def": "穩定(性)"
    },
    {
      "word": "stabilize",
      "pos": "vt.",
      "def": "vi.(使)穩定"
    },
    {
      "word": "stalk",
      "pos": "vi., vt.",
      "def": "n.悄悄追蹤"
    },
    {
      "word": "stammer",
      "pos": "vi.",
      "def": "vt.n.口吃"
    },
    {
      "word": "staple",
      "pos": "n.",
      "def": "主食；訂書釘 adj.主要的"
    },
    {
      "word": "stapler",
      "pos": "n.",
      "def": "主要產品經營商；釘書機"
    },
    {
      "word": "starch",
      "pos": "n.",
      "def": "澱粉"
    },
    {
      "word": "starvation",
      "pos": "n.",
      "def": "飢餓"
    },
    {
      "word": "stationary",
      "pos": "adj.",
      "def": "不動的"
    },
    {
      "word": "stationery",
      "pos": "n.",
      "def": "文具"
    },
    {
      "word": "stature",
      "pos": "n.",
      "def": "身高；身材；高度境界"
    },
    {
      "word": "steamer",
      "pos": "n.",
      "def": "汽船；蒸鍋；蒸汽機"
    },
    {
      "word": "stimulate",
      "pos": "vt.",
      "def": "vi.刺激；促使"
    },
    {
      "word": "stimulation",
      "pos": "n.",
      "def": "刺激；鼓舞"
    },
    {
      "word": "stimulus",
      "pos": "n.",
      "def": "刺激(品)；興奮劑"
    },
    {
      "word": "stock n.存貨；股票",
      "pos": "vt.",
      "def": "vi.辦貨"
    },
    {
      "word": "strangle",
      "pos": "vt.",
      "def": "vi.勒死；抑制"
    },
    {
      "word": "strategic",
      "pos": "adj.",
      "def": "戰略的"
    },
    {
      "word": "stunt",
      "pos": "n.",
      "def": "絕技 vt.阻礙 vi.表演絕技"
    },
    {
      "word": "subjective",
      "pos": "adj.",
      "def": "主觀的；個人的"
    },
    {
      "word": "subordinate",
      "pos": "adj.",
      "def": "下級的；隸屬的"
    },
    {
      "word": "subscribe",
      "pos": "vt.",
      "def": "vi.認捐；訂閱"
    },
    {
      "word": "subscription",
      "pos": "n.",
      "def": "認捐；訂閱"
    },
    {
      "word": "subsequent",
      "pos": "adj.",
      "def": "隨後的"
    },
    {
      "word": "substitution",
      "pos": "n.",
      "def": "代替(物)"
    },
    {
      "word": "subtle",
      "pos": "adj.",
      "def": "微妙的；隱約的"
    },
    {
      "word": "suburban",
      "pos": "adj.",
      "def": "郊區的"
    },
    {
      "word": "succession",
      "pos": "n.",
      "def": "連續；繼任"
    },
    {
      "word": "successive",
      "pos": "adj.",
      "def": "連續的；後繼的"
    },
    {
      "word": "successor",
      "pos": "n.",
      "def": "繼承人；接替的事物"
    },
    {
      "word": "suffocate",
      "pos": "vt.",
      "def": "vi.(使)窒息"
    },
    {
      "word": "suite",
      "pos": "n.",
      "def": "套房；隨員；套(組)"
    },
    {
      "word": "superb",
      "pos": "adj.",
      "def": "堂皇的；極好的"
    },
    {
      "word": "superiority",
      "pos": "n.",
      "def": "優越"
    },
    {
      "word": "supersonic",
      "pos": "adj.",
      "def": "n.超音波(的)"
    },
    {
      "word": "superstitious",
      "pos": "adj.",
      "def": "迷信的"
    },
    {
      "word": "supervision",
      "pos": "n.",
      "def": "監督"
    },
    {
      "word": "supplement",
      "pos": "n.",
      "def": "增補；補給品"
    },
    {
      "word": "surpass",
      "pos": "vt.",
      "def": "勝過"
    },
    {
      "word": "surplus",
      "pos": "n.",
      "def": "adj.過剩(的)；剩餘物"
    },
    {
      "word": "suspense",
      "pos": "n.",
      "def": "懸而不決；暫停"
    },
    {
      "word": "suspension",
      "pos": "n.",
      "def": "懸吊；暫停"
    },
    {
      "word": "swap",
      "pos": "vi., vt.",
      "def": "n.交換"
    },
    {
      "word": "symbolic",
      "pos": "adj.",
      "def": "象徵的"
    },
    {
      "word": "symbolize",
      "pos": "vt.",
      "def": "vi.象徵"
    },
    {
      "word": "symmetry",
      "pos": "n.",
      "def": "對稱(性)"
    },
    {
      "word": "symptom",
      "pos": "n.",
      "def": "症狀"
    },
    {
      "word": "synonym",
      "pos": "n.",
      "def": "同義字"
    },
    {
      "word": "synthetic",
      "pos": "adj.",
      "def": "合成的"
    },
    {
      "word": "tact",
      "pos": "n.",
      "def": "老練；機智；圓滑"
    },
    {
      "word": "tactic",
      "pos": "n.",
      "def": "戰術；策略"
    },
    {
      "word": "tariff",
      "pos": "n.",
      "def": "關稅；稅率"
    },
    {
      "word": "tedious",
      "pos": "adj.",
      "def": "冗長乏味的"
    },
    {
      "word": "temperament",
      "pos": "n.",
      "def": "氣質；性情"
    },
    {
      "word": "tempest",
      "pos": "n.",
      "def": "暴風雨；騷動"
    },
    {
      "word": "terminate",
      "pos": "vt.",
      "def": "vi.(使)終止"
    },
    {
      "word": "textile",
      "pos": "n.",
      "def": "紡織品 adj.紡織的"
    },
    {
      "word": "texture",
      "pos": "n.",
      "def": "質地；構造"
    },
    {
      "word": "theatrical",
      "pos": "adj.",
      "def": "戲劇的；誇張的"
    },
    {
      "word": "theft",
      "pos": "n.",
      "def": "偷竊"
    },
    {
      "word": "theoretical",
      "pos": "adj.",
      "def": "理論的"
    },
    {
      "word": "therapist",
      "pos": "n.",
      "def": "特定療法技師"
    },
    {
      "word": "therapy",
      "pos": "n.",
      "def": "治療；療法"
    },
    {
      "word": "thereafter",
      "pos": "adv.",
      "def": "之後"
    },
    {
      "word": "thereby",
      "pos": "adv.",
      "def": "由此；從而"
    },
    {
      "word": "thermometer",
      "pos": "n.",
      "def": "溫度計"
    },
    {
      "word": "threshold",
      "pos": "n.",
      "def": "門檻；開端"
    },
    {
      "word": "thrift",
      "pos": "n.",
      "def": "節儉"
    },
    {
      "word": "thrifty",
      "pos": "adj.",
      "def": "節儉的；茂盛的"
    },
    {
      "word": "thrive",
      "pos": "vi.",
      "def": "興旺；繁榮"
    },
    {
      "word": "throb",
      "pos": "vi.",
      "def": "n.跳動；悸動"
    },
    {
      "word": "toll",
      "pos": "n.",
      "def": "通行費；傷亡人數；鐘聲"
    },
    {
      "word": "topple",
      "pos": "vt.",
      "def": "vi.(使) 倒塌"
    },
    {
      "word": "tornado",
      "pos": "n.",
      "def": "龍捲風"
    },
    {
      "word": "trait",
      "pos": "n.",
      "def": "特徵；少許"
    },
    {
      "word": "tranquil",
      "pos": "adj.",
      "def": "平靜的"
    },
    {
      "word": "tranquilizer",
      "pos": "n.",
      "def": "鎮定劑"
    },
    {
      "word": "transaction",
      "pos": "n.",
      "def": "交易；辦理"
    },
    {
      "word": "transcript",
      "pos": "n.",
      "def": "抄本；成績單"
    },
    {
      "word": "transformation",
      "pos": "n.",
      "def": "轉變；變形"
    },
    {
      "word": "transistor",
      "pos": "n.",
      "def": "電晶體"
    },
    {
      "word": "transit",
      "pos": "n.",
      "def": "vt.vi.運輸；過渡"
    },
    {
      "word": "transition",
      "pos": "n.",
      "def": "過渡；轉變"
    },
    {
      "word": "transmission",
      "pos": "n.",
      "def": "傳輸；傳送"
    },
    {
      "word": "transmit",
      "pos": "vt.",
      "def": "vi.傳送；發報"
    },
    {
      "word": "transplant",
      "pos": "vt.",
      "def": "vi.移植；(使)移居"
    },
    {
      "word": "trauma",
      "pos": "n.",
      "def": "創傷"
    },
    {
      "word": "tread",
      "pos": "vi.",
      "def": "vt.踩；踏"
    },
    {
      "word": "treason",
      "pos": "n.",
      "def": "叛國罪"
    },
    {
      "word": "trek",
      "pos": "n.",
      "def": "移居；旅行 vi.艱苦跋涉；移居"
    },
    {
      "word": "tremor",
      "pos": "n.",
      "def": "顫抖；震動"
    },
    {
      "word": "trespass",
      "pos": "vi.",
      "def": "n.擅自進入"
    },
    {
      "word": "trigger",
      "pos": "n.",
      "def": "扳機 vt.扣扳機；引起"
    },
    {
      "word": "triumphant",
      "pos": "adj.",
      "def": "勝利的"
    },
    {
      "word": "trivial",
      "pos": "adj.",
      "def": "瑣細的；不重要的"
    },
    {
      "word": "trophy",
      "pos": "n.",
      "def": "戰利品；獎杯"
    },
    {
      "word": "tropic",
      "pos": "n.",
      "def": "回歸線；熱帶"
    },
    {
      "word": "truant",
      "pos": "n., adj.",
      "def": "熱帶的；逃學者 adj.逃學的 vi.逃學"
    },
    {
      "word": "truce",
      "pos": "n.",
      "def": "停戰"
    },
    {
      "word": "tuberculosis",
      "pos": "n.",
      "def": "結核病"
    },
    {
      "word": "tumor",
      "pos": "n.",
      "def": "腫瘤"
    },
    {
      "word": "turmoil",
      "pos": "n.",
      "def": "騷動；混亂"
    },
    {
      "word": "twilight",
      "pos": "adj., n.",
      "def": "薄暮；昏暗的；暮年的"
    },
    {
      "word": "tyranny",
      "pos": "n.",
      "def": "暴政；專橫"
    },
    {
      "word": "ulcer",
      "pos": "n.",
      "def": "潰瘍；弊病"
    },
    {
      "word": "ultimate",
      "pos": "adj.",
      "def": "最終的；極限的"
    },
    {
      "word": "unanimous",
      "pos": "adj.",
      "def": "一致同意的"
    },
    {
      "word": "uncover",
      "pos": "vt.",
      "def": "揭露"
    },
    {
      "word": "underestimate",
      "pos": "vt.",
      "def": "低估"
    },
    {
      "word": "undergo",
      "pos": "vt.",
      "def": "經歷；接受(治療等)"
    },
    {
      "word": "undermine",
      "pos": "vt.",
      "def": "暗中破壞"
    },
    {
      "word": "undertake",
      "pos": "vt.",
      "def": "進行；承擔"
    },
    {
      "word": "undo",
      "pos": "vt.",
      "def": "解開；取消；破壞"
    },
    {
      "word": "unemployment",
      "pos": "n.",
      "def": "失業"
    },
    {
      "word": "unfold",
      "pos": "vt.",
      "def": "vi.展開"
    },
    {
      "word": "unify",
      "pos": "vt.",
      "def": "vi.統一"
    },
    {
      "word": "unlock",
      "pos": "vt.",
      "def": "vi.開…的鎖；解開"
    },
    {
      "word": "unpack",
      "pos": "vt.",
      "def": "vi.打開包裹；卸下"
    },
    {
      "word": "upbringing",
      "pos": "n.",
      "def": "養育；教養"
    },
    {
      "word": "upgrade",
      "pos": "n.",
      "def": "vt.升級 adv.上坡"
    },
    {
      "word": "uphold",
      "pos": "vt.",
      "def": "舉起；支撐；維持"
    },
    {
      "word": "uranium",
      "pos": "n.",
      "def": "鈾"
    },
    {
      "word": "urgency",
      "pos": "n.",
      "def": "緊急；急事"
    },
    {
      "word": "urine",
      "pos": "n.",
      "def": "尿"
    },
    {
      "word": "usher n.引座員",
      "pos": "vt.",
      "def": "vi.招待；迎接"
    },
    {
      "word": "utensil",
      "pos": "n.",
      "def": "器皿；厨房用具"
    },
    {
      "word": "utility",
      "pos": "n.",
      "def": "效用；公用事業；(水、"
    },
    {
      "word": "utilize",
      "pos": "vt.",
      "def": "利用"
    },
    {
      "word": "utmost",
      "pos": "adj.",
      "def": "極度的 n.極度"
    },
    {
      "word": "vaccine",
      "pos": "adj.",
      "def": "疫苗的 n.疫苗"
    },
    {
      "word": "valiant",
      "pos": "adj.",
      "def": "英勇的 n.勇士"
    },
    {
      "word": "valid",
      "pos": "adj.",
      "def": "有根據的；有效的"
    },
    {
      "word": "validity",
      "pos": "n.",
      "def": "正當；有效性；合法性"
    },
    {
      "word": "vanilla",
      "pos": "n.",
      "def": "香草 adj.香草的；普通的"
    },
    {
      "word": "variable",
      "pos": "adj.",
      "def": "多變的 n.可變因素"
    },
    {
      "word": "variation",
      "pos": "n.",
      "def": "變動；差異"
    },
    {
      "word": "vend",
      "pos": "vi.",
      "def": "vt.出售"
    },
    {
      "word": "vendor",
      "pos": "n.",
      "def": "小販；自動販賣機"
    },
    {
      "word": "verge n.邊緣",
      "pos": "vi.",
      "def": "vt.處在(…)邊緣"
    },
    {
      "word": "versatile",
      "pos": "adj.",
      "def": "多才多藝的；多功能的"
    },
    {
      "word": "version",
      "pos": "n.",
      "def": "版本；說法"
    },
    {
      "word": "veteran",
      "pos": "adj., n.",
      "def": "老兵；老手；經驗豐富的"
    },
    {
      "word": "veterinarian",
      "pos": "n.",
      "def": "獸醫(vet)"
    },
    {
      "word": "vibration",
      "pos": "n.",
      "def": "顫動；共鳴"
    },
    {
      "word": "vice",
      "pos": "n.",
      "def": "惡 adj.副的"
    },
    {
      "word": "vicious",
      "pos": "adj.",
      "def": "邪惡的；惡性的"
    },
    {
      "word": "victimize",
      "pos": "vt.",
      "def": "使受害；欺騙"
    },
    {
      "word": "victor",
      "pos": "n.",
      "def": "勝利者"
    },
    {
      "word": "victorious",
      "pos": "adj.",
      "def": "勝利的"
    },
    {
      "word": "villa",
      "pos": "n.",
      "def": "別墅"
    },
    {
      "word": "vineyard",
      "pos": "n.",
      "def": "葡萄園"
    },
    {
      "word": "virtual",
      "pos": "adj.",
      "def": "實際上的；虛擬的"
    },
    {
      "word": "visualize",
      "pos": "vt.",
      "def": "vi.使視覺化；想像"
    },
    {
      "word": "vitality",
      "pos": "n.",
      "def": "活力；生命力"
    },
    {
      "word": "vocal",
      "pos": "adj.",
      "def": "聲音的；歌唱的"
    },
    {
      "word": "vocation",
      "pos": "n.",
      "def": "行業；傾向"
    },
    {
      "word": "vocational",
      "pos": "adj.",
      "def": "職業的"
    },
    {
      "word": "vogue",
      "pos": "n.",
      "def": "流行(物)"
    },
    {
      "word": "vomit",
      "pos": "vi., vt.",
      "def": "n.嘔吐"
    },
    {
      "word": "vulgar",
      "pos": "adj.",
      "def": "粗俗的；通俗的"
    },
    {
      "word": "vulnerable",
      "pos": "adj.",
      "def": "易受傷的"
    },
    {
      "word": "wardrobe",
      "pos": "n.",
      "def": "衣櫥"
    },
    {
      "word": "warfare",
      "pos": "n.",
      "def": "戰爭"
    },
    {
      "word": "warranty",
      "pos": "n.",
      "def": "保證書；擔保"
    },
    {
      "word": "waterproof / watertight",
      "pos": "adj.",
      "def": "防水的"
    },
    {
      "word": "whatsoever pron.adv.",
      "pos": "adj.",
      "def": "任何事物；無論甚麼(的)"
    },
    {
      "word": "windshield",
      "pos": "n.",
      "def": "擋風玻璃"
    },
    {
      "word": "withstand",
      "pos": "vt.",
      "def": "vi.反抗；禁得起"
    },
    {
      "word": "witty",
      "pos": "adj.",
      "def": "機智的；說話風趣的"
    },
    {
      "word": "woo",
      "pos": "vt.",
      "def": "vi.追求；求愛；爭取"
    },
    {
      "word": "wrench",
      "pos": "vi., vt.",
      "def": "n.猛扭；扭傷"
    },
    {
      "word": "wrestle",
      "pos": "vt.",
      "def": "摔(角)；與…搏鬥"
    },
    {
      "word": "Xerox / xerox",
      "pos": "n.",
      "def": "影印機(商標名)；靜電複印法"
    },
    {
      "word": "yearn",
      "pos": "vi.",
      "def": "思念；渴望"
    },
    {
      "word": "zeal",
      "pos": "n.",
      "def": "熱心；熱誠"
    }
  ]
};
