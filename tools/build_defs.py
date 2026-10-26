"""Compare each word's 1913 meaning (Webster's, Project Gutenberg #29765) with its modern meaning
(Open English WordNet 2024, CC BY 4.0) and write defs-compare.js for words whose meanings differ.

Usage: python -I build_defs.py <webster.txt> <oewn.xml.gz> <app_dir> [review.tsv]
"""
import sys, re, os, gzip, json, html
import xml.etree.ElementTree as ET

web, oewn, app = sys.argv[1:4]
review = sys.argv[4] if len(sys.argv) > 4 else None

# ---------- app words ----------
words = []
for f in ('words.js', 'words-gutenberg.js'):
    for m in re.finditer(r'^\["(.+)$', open(os.path.join(app, f), encoding='utf-8').read(), re.M):
        try: words.append(json.loads('[' + m.group(0)[1:].rstrip().rstrip(',').rstrip(';').rstrip(')')))
        except Exception: pass
POSMAP = {'adjective': {'a', 's'}, 'noun': {'n'}, 'verb': {'v'}, 'adverb': {'r'}}

# ---------- modern: Open English WordNet ----------
root = ET.parse(gzip.open(oewn)).getroot()
lex = root.find('Lexicon')
gloss, syn_members, entries = {}, {}, {}
for ss in lex.iter('Synset'):
    d = ss.find('Definition')
    gloss[ss.get('id')] = d.text if d is not None else ''
for le in lex.iter('LexicalEntry'):
    lem = le.find('Lemma')
    form, pos = lem.get('writtenForm').lower(), lem.get('partOfSpeech')
    for s in le.findall('Sense'):
        entries.setdefault((form, pos), []).append(s.get('synset'))
        syn_members.setdefault(s.get('synset'), set()).add(form)

def modern(word, pos):
    for p in POSMAP.get(pos, ()):
        ss = entries.get((word, p))
        if ss: return ss[0]                     # first sense = most common today
    return None

# ---------- 1913: Webster's ----------
lines = open(web, encoding='utf-8', errors='ignore').read().split('\n')
HEAD = re.compile(r"^[A-Z][A-Z\-' ;]*$")
first = {}
i = 0
while i < len(lines):
    if HEAD.match(lines[i]) and i + 1 < len(lines) and lines[i + 1][:1].isalpha():
        j = i + 1
        while j < len(lines) and not HEAD.match(lines[j]): j += 1
        if ';' not in lines[i]: first.setdefault(lines[i].strip().lower(), lines[i + 1:j])
        i = j
    else: i += 1

def old_def(word):
    b = first.get(word)
    if not b: return None
    paras, cur = [], []
    for l in b:
        if l.strip(): cur.append(l.strip())
        elif cur: paras.append(' '.join(cur)); cur = []
    if cur: paras.append(' '.join(cur))
    for p in paras[1:]:
        p = re.sub(r"^(Defn: |\d+\. )", '', p)
        p = re.sub(r"^\([^)]*\)\s*", '', p)
        if p.startswith(('Note:', 'See ', 'Same as')) or '[Obs.]' in p[:120]: continue
        p = re.sub(r"^(Hence|Fig\.|\([a-z]\))[,:]?\s*", '', p)
        d = re.split(r";? as, ", p)[0]
        d = re.sub(r"\b(esp|e\. g|i\. e|cf|etc)\.", lambda m: m.group(0).replace('.', '\0'), d)
        d = re.split(r"\.\s", d)[0].replace('\0', '.').strip().rstrip('.;:')
        if re.search(r"[A-Z]{3,}|\*|\"", d): continue
        d = re.sub(r";\s*esp$", '', d)
        if len(d) > 220:
            k = d.rfind(';', 0, 220); d = d[:k] if k > 60 else d[:217] + '…'
        if len(d) >= 8: return d[0].upper() + d[1:] + '.'
    return None

# ---------- compare ----------
STOP = set('that with which from this have been being they them their there where when what who whom whose into upon unto than then also such some very more most much many other others only same like used make made thing things something someone person state quality being having especially often usually esp the and any one for not but its are was all can has had may out way act use two any per who off own'.split())
def stems(t, extra=()):
    ws = [w for w in re.findall(r"[a-z]+", t.lower()) if len(w) >= 3 and w not in STOP] + list(extra)
    return {w[:5] for w in ws}

def all_modern(word):
    """Every modern sense of the word (any part of speech): its gloss words plus its synonyms."""
    acc = set()
    for p in 'nvasr':
        for sid in entries.get((word, p), []):
            acc |= stems(gloss[sid], [s for s in syn_members[sid] if s != word and ' ' not in s])
    return acc

# Hand-checked from the automatic shortlist: words whose main 1913 sense really differs from today's.
SHIFTED = set('''abstemious asperity phantasmagoria plangent saturnine sanctimonious panoply gallimaufry
paraphernalia militate durance exorbitant haggle nondescript luminary outlandish artifice escapade affluence
hectic pedagogue noggin rosary purblind succinct waspish voluble effete obnoxious disparagement
expatiate libertine officious revulsion ingenuous blithe carnage exterminate deduce precarious implicate
promiscuous insinuation gentility amputate chaperon epitome sloppy egregious'''.split())

out, rows = {}, []
for w in words:
    word, pos = w[0], w[2]
    sid = modern(word, pos)
    od = w[3] if w[6:7] == ['W1913'] else old_def(word)
    if not sid or not od: continue
    md = gloss[sid]
    syns = [s for s in syn_members[sid] if s != word and ' ' not in s]
    a = stems(od)
    # only "different" if the 1913 sense matches none of today's senses, and today's main sense isn't in the 1913 text
    if not (a & all_modern(word)) and not (stems(md, syns) & a):
        rows.append((word, pos, od, md))          # shortlist for a human to check
    if word in SHIFTED:
        out[word] = {'now': md[0].upper() + md[1:].rstrip('.') + '.', 'then': od}

print('compared:', len(words), 'auto-shortlisted:', len(rows), 'shown in app (hand-checked):', len(out), file=sys.stderr)
with open(os.path.join(app, 'defs-compare.js'), 'w', encoding='utf-8') as f:
    f.write("// Words whose meaning in Webster's 1913 differs from the modern sense in Open English WordNet 2024 (CC BY 4.0).\n")
    f.write('const DEFS_COMPARE = ' + json.dumps(out, ensure_ascii=False, indent=0) + ';\n')
if review:
    with open(review, 'w', encoding='utf-8') as f:
        for r in rows: f.write('\t'.join(r) + '\n')
