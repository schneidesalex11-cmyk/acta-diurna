"""Chinese poems: public-domain translations from Project Gutenberg, paired with the Chinese originals
(also from Gutenberg: 唐诗三百首 #52323, 詩經 #23873). Writes poems-chinese.js.

Usage: python -I build_chinese.py <dir with the Gutenberg .txt files> <app_dir>
"""
import sys, os, re, json

src, app = sys.argv[1:3]
read = lambda n: open(os.path.join(src, n), encoding='utf-8', errors='ignore').read().replace('\r', '')

POUND = ('50155.txt', 'tr. Ezra Pound, Cathay (1915)')
LOWELL = ('48222.txt', 'tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)')
WALEY = ('42290.txt', 'tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)')

LI, DU, BAI, TAO = 'Li Bai (李白), 701–762', 'Du Fu (杜甫), 712–770', 'Bai Juyi (白居易), 772–846', 'Tao Yuanming (陶淵明), 365–427'
# (source, heading in the book, title shown, poet line, original: ('tang'|'shijing', title) or None)
PICKS = [
    (POUND, 'Song of the Bowmen of Shu', 'Song of the Bowmen of Shu', 'Book of Songs (詩經), c. 1000–600 BC', ('shijing', '采薇')),
    (POUND, 'The Beautiful Toilet', 'The Beautiful Toilet', 'Nineteen Old Poems (古詩十九首), Han dynasty', None),
    (POUND, "The River-Merchant's Wife: a Letter", "The River-Merchant's Wife: A Letter", LI, ('tang', '長干行')),
    (POUND, "The Jewel Stairs' Grievance", "The Jewel Stairs' Grievance", LI, ('tang', '玉階怨')),
    (POUND, 'Lament of the Frontier Guard', 'Lament of the Frontier Guard', LI, None),
    (POUND, 'Taking Leave of a Friend', 'Taking Leave of a Friend', LI, ('tang', '送友人')),
    (POUND, 'The City of Choan', 'The City of Choan', LI, ('tang', '登金陵鳳凰臺')),
    (POUND, 'Separation on the River Kiang', 'Separation on the River Kiang', LI, None),
    (LOWELL, 'NIGHT THOUGHTS', 'Night Thoughts', LI, ('tang', '夜思')),
    (LOWELL, 'DRINKING ALONE IN THE MOONLIGHT', 'Drinking Alone in the Moonlight', LI, ('tang', '月下獨酌')),
    (LOWELL, 'THE PERILS OF THE SHU ROAD', 'The Perils of the Shu Road', LI, ('tang', '蜀道難')),
    (LOWELL, 'THE MOON OVER THE MOUNTAIN PASS', 'The Moon over the Mountain Pass', LI, ('tang', '關山月')),
    (LOWELL, 'ETERNALLY THINKING OF EACH OTHER', 'Eternally Thinking of Each Other', LI, None),
    (LOWELL, 'REPLY TO AN UNREFINED PERSON ENCOUNTERED IN THE HILLS', 'Reply to an Unrefined Person Encountered in the Hills', LI, None),
    (LOWELL, 'A PARTING GIFT TO WANG LUN', 'A Parting Gift to Wang Lun', LI, None),
    (LOWELL, 'THE THATCHED HOUSE UNROOFED BY AN AUTUMN GALE', 'The Thatched House Unroofed by an Autumn Gale', DU, None),
    (LOWELL, 'THE RECRUITING OFFICERS AT THE VILLAGE OF THE STONE MOAT', 'The Recruiting Officers at the Village of the Stone Moat', DU, None),
    (WALEY, 'PLUCKING THE RUSHES', 'Plucking the Rushes', 'Anonymous, 4th century', None),
    (WALEY, 'THE AUTUMN WIND', 'The Autumn Wind', 'Emperor Wu of Han (漢武帝), 156–87 BC', None),
    (WALEY, 'TO HIS WIFE', 'To His Wife', 'Attributed to Su Wu (蘇武), c. 100 BC', None),
    (WALEY, 'RETURNING TO THE FIELDS', 'Returning to the Fields', TAO, None),
    (WALEY, 'BLAMING SONS', 'Blaming Sons', TAO, None),
    (WALEY, 'MOVING HOUSE', 'Moving House', TAO, None),
    (WALEY, 'PEOPLE HIDE THEIR LOVE', 'People Hide Their Love', 'Emperor Wu of Liang (梁武帝), 464–549', None),
    (WALEY, 'THE HERD-BOY', 'The Herd-Boy', 'Lu You (陸游), 1125–1210', None),
    (WALEY, 'ON THE BIRTH OF HIS SON', 'On the Birth of His Son', 'Su Shi (蘇軾), 1037–1101', None),
    (WALEY, 'GOLDEN BELLS', 'Golden Bells', BAI, None),
    (WALEY, 'REMEMBERING GOLDEN BELLS', 'Remembering Golden Bells', BAI, None),
    (WALEY, 'THE FLOWER MARKET', 'The Flower Market', BAI, None),
    (WALEY, 'THE CHARCOAL-SELLER', 'The Charcoal-Seller', BAI, None),
    (WALEY, 'THE RED COCKATOO', 'The Red Cockatoo', BAI, None),
    (WALEY, 'EATING BAMBOO-SHOOTS', 'Eating Bamboo-Shoots', BAI, None),
    (WALEY, 'AFTER LUNCH', 'After Lunch', BAI, None),
    (WALEY, 'THE PHILOSOPHERS', 'The Philosophers: Lao-tzŭ', BAI, None),
    (WALEY, 'LAST POEM', 'Last Poem', BAI, None),
]

def body(text):
    s, e = text.find('*** START OF'), text.find('*** END OF')
    return text[s:e].split('\n')

# Cathay has no capitalised headings, so poems are bounded by the next title (or a "_By ..._" line)
CATHAY_TITLES = {"Song of the Bowmen of Shu", "The Beautiful Toilet", "The River Song", "The River-Merchant's Wife: a Letter",
    "Poem by the Bridge at Ten-Shin", "The Jewel Stairs' Grievance", "Lament of the Frontier Guard", "Exile's Letter",
    "Four Poems of Departure", "Separation on the River Kiang", "Taking Leave of a Friend", "Leave-taking near Shoku",
    "The City of Choan", "South-Folk in Cold Country", "Sennin Poem by Kakuhaku", "A Ballad of the Mulberry Road",
    "Old Idea of Choan by Rosoriu", 'To-Em-Mei\'s "The Unmoving Cloud"', "The Seafarer", "Light rain is on the light dust"}
indent = lambda l: len(l) - len(l.lstrip())

def extract(fname, heading):
    lines = body(read(fname))
    cathay, lowell = fname == POUND[0], fname == LOWELL[0]
    idx = [i for i, l in enumerate(lines) if l.strip() == heading]
    if not idx: return None
    nxt = lambda i: next((l.strip() for l in lines[i + 1:i + 6] if l.strip()), '')
    if cathay: start = idx[0]
    elif lowell: start = next((i for i in idx if not nxt(i).startswith('_Note')), idx[0])   # skip the endnotes
    else: start = idx[-1]                                           # Waley: skip the contents page
    out, i = [], start + 1
    while i < len(lines):
        l, st = lines[i], lines[i].strip()
        if cathay and (st.startswith('_By') or st in CATHAY_TITLES): break
        started = any(re.search(r"[a-z]", x) for x in out)       # all-caps subtitles may precede the verse
        if not cathay and started and len(st) > 3 and st.isupper() and not st.startswith(('BY ', '(')): break
        if not cathay and (st.startswith('[') or st.startswith('_Note')): break
        out.append(l.rstrip()); i += 1
    while out and not out[-1].strip(): out.pop()
    # the poem is the block at its usual indentation; drop introductions, subtitles and bylines before it
    inds = [indent(l) for l in out if l.strip()]
    base = max(set(inds), key=inds.count) if inds else 0
    while out and (not out[0].strip() or indent(out[0]) < base or re.fullmatch(r"[\s*]+|\s*[IVX]+\.?\s*", out[0])): out.pop(0)
    joined = []
    for l in out:
        # a printer's wrap: indented deeper (or a lone word or two) after a line with no closing punctuation
        prev = joined[-1].strip() if joined else ''
        if l.strip() and prev and not re.search(r"[,.;:!?\"'’”)—-]$", prev) \
                and (l.strip()[0].islower() or (len(prev) > 55 and (indent(l) >= base + 2 or len(l.split()) <= 2))):
            joined[-1] += ' ' + l.strip()                           # re-join lines the printer wrapped
        else:
            joined.append(l[min(indent(l), base):])
    txt = '\n'.join(joined)
    txt = re.sub(r"\[\d+\]", '', txt)                                # footnote markers
    txt = re.sub(r"_([^_\n]+)_", r"\1", txt)                         # Gutenberg's _italics_
    txt = re.sub(r"^\s*(\*\s*){3,}$", '*   *   *', txt, flags=re.M)
    return re.sub(r"\n{3,}", '\n\n', txt).strip()

def tang(title):
    lines = body(read('52323.txt'))
    for i, l in enumerate(lines):
        if re.fullmatch(re.escape(title) + r"(（.*）)?", l.strip()):
            j, out = i + 2, []                                  # skip 作者 line
            while j < len(lines) and not re.fullmatch(r"\d{3}", lines[j].strip()) and lines[j].strip():
                out.append(lines[j].strip()); j += 1
            return '\n'.join(out)

def shijing(title):
    lines = body(read('23873.txt'))
    for i, l in enumerate(lines):
        if re.fullmatch(r"\d+\.\s+" + re.escape(title), l.strip()):
            out, j = [], i + 1
            while j < len(lines) and not re.match(r"\d+\.\s", lines[j].strip()):
                if lines[j].strip(): out.append(lines[j].strip())
                j += 1
            return '\n'.join(out)

poems, problems = [], []
for (fname, credit), head, title, poet, orig in PICKS:
    t = extract(fname, head)
    if not t or len(t) < 40: problems.append((title, 'translation not found')); continue
    o = None
    if orig: o = (tang if orig[0] == 'tang' else shijing)(orig[1])
    if orig and not o: problems.append((title, 'original not found: ' + orig[1]))
    poems.append([title, poet, 'Chinese', credit, t] + ([o, orig[1]] if o else []))

for p in poems:
    print('=' * 60, '\n' + p[0], '|', p[1], '|', p[3], '\n' + p[4][:600], ('\n--- ' + p[6] + '\n' + p[5][:200]) if len(p) > 5 else '')
print('poems', len(poems), 'with original', sum(len(p) > 5 for p in poems), 'problems', problems, file=sys.stderr)
with open(os.path.join(app, 'poems-chinese.js'), 'w', encoding='utf-8') as f:
    f.write("// Chinese poems: public-domain translations and the Chinese originals, all from Project Gutenberg.\n")
    f.write("// [title, poet, era, translation credit, translation, original (optional), original title (optional)]\n")
    f.write('const CHINESE_POEMS = ' + json.dumps(poems, ensure_ascii=False, indent=0) + ';\n')
