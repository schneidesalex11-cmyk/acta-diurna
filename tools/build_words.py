"""Build a year of extra words from Project Gutenberg.

Definitions/etymology/pronunciation: Webster's Unabridged Dictionary (PG #29765, public domain).
Selection: words that appear in classic novels (PG corpus) but only rarely, i.e. literary yet uncommon.
Usage: python -I build_words.py <webster.txt> <corpus_dir> <existing_words.js> <out.js> <target>
"""
import sys, re, os, json, random, collections

web, corpus, existing, out, target, common = sys.argv[1:7]
target = int(target)
# modern everyday words (top 20k web frequency) are not "obscure", whatever old novels say
COMMON = set(open(common, encoding='utf-8').read().split())

# ---------- corpus frequencies ----------
total, docs = collections.Counter(), collections.Counter()
for f in os.listdir(corpus):
    t = open(os.path.join(corpus, f), encoding='utf-8', errors='ignore').read()
    s = t.find('*** START OF'); e = t.find('*** END OF')
    t = t[s if s >= 0 else 0: e if e > 0 else None]
    # lowercase tokens only, so proper names/demonyms (Patagonian) don't count as ordinary words
    words = re.findall(r"(?<![A-Za-z])[a-z]+(?![A-Za-z])", t)
    c = collections.Counter(words)
    total.update(c)
    docs.update(c.keys())

# ---------- parse Webster ----------
lines = open(web, encoding='utf-8', errors='ignore').read().split('\n')
HEAD = re.compile(r"^[A-Z][A-Z\-' ;]*$")   # may list several headwords: "ARMORIC; ARMORICAN"
POS = {'a.': 'adjective', 'n.': 'noun', 'v. t.': 'verb', 'v. i.': 'verb', 'adv.': 'adverb'}
DOMAIN = re.compile(r"\((Bot|Zo|Chem|Med|Anat|Min|Geol|Physiol|Biol|Math|Elec|Mech|Pharm|Surg|Astron|Gram|Mus|Her|Eccl|Law|Naut|Mil|Arch|Paleon|Crystallog|Photog|Print|Physics|Mining|Metal|Bibliog|Rom|Gr\. Antiq|Antiq|Script|Theol|Logic|Pros|Rhet|Fort|Zoöl|Steam|Engin|Geom|Com|Mythol|Falconry|Far|Shipbuilding|Weaving|Dyeing|Bookbinding|Carp|Survey|Opt|Acoustics|Teleg|Biblical|Ch\. Hist|Hist|R\. C\. Ch|Feud)")
BAD = re.compile(r"\[(Obs|R\.|Prov|Local|Scot|Dial|Cant|Slang|Low)")

entries = {}
i, n = 0, len(lines)
while i < n:
    h = lines[i]
    if HEAD.match(h) and i + 1 < n and lines[i + 1][:1].isalpha():
        j = i + 1
        while j < n and not HEAD.match(lines[j]): j += 1
        block = lines[i + 1:j]
        if ';' not in h:               # multi-headword entries are variants; skip them
            word = h.strip().lower()
            if word not in entries:
                entries[word] = block   # keep only the first (usually main) entry
        i = j
    else:
        i += 1

def parse(word, block):
    paras, cur = [], []
    for l in block:
        if l.strip(): cur.append(l.strip())
        elif cur: paras.append(' '.join(cur)); cur = []
    if cur: paras.append(' '.join(cur))
    if not paras: return None
    head = paras[0]
    m = re.match(r"^(\S+?), (v\. t\.|v\. i\.|adv\.|a\.|n\.)(?:[ ;,]|$)", head)
    if not m: return None
    syl, pos = m.group(1), POS[m.group(2)]
    if DOMAIN.search(head) or BAD.search(head): return None
    etym = ''
    em = re.search(r"Etym: \[(.+?)\]", head)
    if em:
        etym = re.sub(r"\s*See [^.]+\.?\s*$", '', em.group(1)).strip().rstrip(';,')
        if len(etym) > 160 or re.search(r"[^\x20-\x7EäëïöüéèàçÆæœŒ]", etym): etym = ''
    # first usable sense
    for p in paras[1:]:
        p = re.sub(r"^(Defn: |\d+\. )", '', p)
        p = re.sub(r"^\([^)]*\)\s*", '', p)
        if p.startswith('Note:'): continue
        if BAD.search(p[:200]) or DOMAIN.search(p[:60]): continue
        if re.match(r"^(See|Same as|Of,? or pertaining|Pertaining|Relating|Of or relating|Belonging|imp\.|pl\.|A variant|The act of|The state of|The quality|One who|That which|Having the form)", p): continue
        ex = ''
        xm = re.search(r";? as, (.+?)\.(\s|$)", p)
        if xm and 8 < len(xm.group(1)) < 140 and word[:5] in xm.group(1).lower():
            ex = xm.group(1).strip()
            ex = ex[0].upper() + ex[1:] + '.'
        p = re.sub(r"^(Hence|Fig\.|\([a-z]\))[,:]?\s*", '', p)
        if not p: continue
        d = re.split(r";? as, ", p)[0]
        d = re.sub(r"\b(esp|e\. g|i\. e|cf|etc)\.", lambda m: m.group(0).replace('.', '\0'), d)  # don't end on abbreviations
        d = re.split(r"\.\s", d)[0].replace('\0', '.').strip().rstrip('.;:')
        if re.search(r"[A-Z]{3,}|\*|\"", d): continue
        d = re.sub(r";\s*esp$", '', d)
        if len(d) > 220:
            k = d.rfind(';', 0, 220)
            d = d[:k] if k > 60 else d[:217] + '…'
        if len(d) < 12 or word in d.lower(): continue
        return syl, pos, d[0].upper() + d[1:] + '.', ex, etym
    return None

def pron(syl):
    out, curs, stress = [], '', ''
    for ch in syl:
        if ch in '*"`':
            out.append((curs, ch == '"')); curs = ''
        else:
            curs += ch
    out.append((curs, False))
    parts = [s.upper() if p else s.lower() for s, p in out if s]
    return '-'.join(parts)

SUFFIX = ('ship','ity','ation','ition','ion','ive','al','ful','less','able','ible','ment','ous','ic','ical','ary','ory','ance','ence','ant','ent','er','or','ing','ish','y','ize','ise','en','ure')
PREFIX = ('un','in','im','il','ir','dis','re','over','under','out','en','em','non','mis','pre','fore','up','be','counter','inter','super','sub','semi','self')
def derived_from_common(w):
    """Common word with a prefix/suffix bolted on, or two common words glued together."""
    for s in SUFFIX:
        if w.endswith(s) and len(w) - len(s) >= 4:
            st = w[:-len(s)]
            if {st, st + 'e', st[:-1] if st[-1:] == st[-2:-1] else st, st[:-1] + 'y' if st.endswith('i') else st} & COMMON:
                return True
    for p in PREFIX:
        if w.startswith(p) and len(w) - len(p) >= 4 and w[len(p):] in COMMON: return True
    for k in range(3, len(w) - 2):
        if w[:k] in COMMON and w[k:] in COMMON and len(w[:k]) >= 3 and len(w[k:]) >= 3: return True
    return False

have = set(re.findall(r'^\["([^"]+)"', open(existing, encoding='utf-8').read(), re.M))
cands = []
for word, block in entries.items():
    if not re.fullmatch(r"[a-z]{6,15}", word) or word in have or word in COMMON: continue
    if word.endswith('s') and word[:-1] in COMMON: continue
    if derived_from_common(word): continue
    if re.search(r"(ness|ingly|edly|ly|ings|ing|ism|ist|ists|ers|ed|th)$", word): continue
    if word in ('fornication', 'fornicator', 'adulterous', 'adultery', 'mulatto', 'quadroon', 'octoroon',
                'negress', 'imbecile', 'imbecility', 'cretin', 'idiotic', 'harlot', 'strumpet', 'pimple'): continue
    t, d = total[word], docs[word]
    if not (d >= 2 and 3 <= t <= 40): continue
    r = parse(word, block)
    if not r: continue
    syl, pos, de, ex, et = r
    if pos == 'adverb': continue
    # used across several books = real literary word; example + origin = a richer card
    score = min(d, 8) / 8 - t / 60 + (0.4 if ex else 0) + (0.4 if et else 0) + (0.2 if len(de) < 140 else 0)
    cands.append((score, word, pron(syl), pos, de, ex, et))

cands.sort(reverse=True)
# lean descriptive: half adjectives, then nouns and verbs
quota = {'adjective': .5, 'noun': .33, 'verb': .17}
pick = []
for p, q in quota.items():
    pick += [c for c in cands if c[3] == p][:round(target * q)]
for c in cands:                      # top up if a bucket ran short
    if len(pick) >= target: break
    if c not in pick: pick.append(c)
pick = pick[:target]
random.Random(1913).shuffle(pick)
print('candidates', len(cands), 'picked', len(pick),
      'adjectives', sum(1 for c in pick if c[3] == 'adjective'), file=sys.stderr)
with open(out, 'w', encoding='utf-8') as f:
    f.write("// Generated from Webster's Unabridged Dictionary (Project Gutenberg #29765); words chosen for being\n")
    f.write("// used in classic Gutenberg novels, but only rarely. [word, pronunciation, pos, definition, example, origin, source]\n")
    f.write('WORDS.push(\n')
    f.write(',\n'.join(json.dumps([w, p, ps, de, ex, et, 'W1913'], ensure_ascii=False) for _, w, p, ps, de, ex, et in pick))
    f.write('\n);\n')
