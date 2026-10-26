"""Human-recorded pronunciations for every word, saved into audio/ so the app needs no network for them.

Recordings: Wiktionary pages list their audio files, which live on Wikimedia Commons (CC BY-SA / public domain);
we save Commons' MP3 transcode (plays on iPhone). IPA text: dictionaryapi.dev (also Wiktionary-derived).
Usage: python -I build_audio.py <app_dir>
"""
import sys, os, re, json, time, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor

app = sys.argv[1]
words = []
for f in ('words.js', 'words-gutenberg.js', 'funverbs.js', 'insults.js'):
    words += re.findall(r'^\["([^"]+)"', open(os.path.join(app, f), encoding='utf-8').read(), re.M)
os.makedirs(os.path.join(app, 'audio'), exist_ok=True)
# Wikimedia's robot policy (https://w.wiki/4wJS) requires a descriptive agent with contact info.
UA = {'User-Agent': 'ActaDiurnaBuild/1.0 (https://github.com/schneidesalex11-cmyk/acta-diurna; one-time pronunciation download) python-urllib'}

def get(url, tries=5):
    for k in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (404, 502): return None
            wait = int(e.headers.get('Retry-After') or 0) if e.code == 429 else 0
            time.sleep(max(wait, 2 * (k + 1)))
        except Exception:
            time.sleep(2 * (k + 1))
    return None

def api(base, params):
    raw = get(base + '?' + urllib.parse.urlencode({**params, 'format': 'json'}))
    return json.loads(raw) if raw else {}

# 1. which audio files does each Wiktionary page use? (50 titles per request)
RANK = lambda f: next((i for i, p in enumerate(['en-us-', 'en-uk-', 'en-gb-', 'en-ca-', 'en-au-']) if f.lower().startswith('file:' + p)), 9)
files = {}
for i in range(0, len(words), 50):
    batch = words[i:i + 50]
    d = api('https://en.wiktionary.org/w/api.php', {'action': 'query', 'prop': 'images', 'imlimit': 'max', 'titles': '|'.join(batch)})
    for p in d.get('query', {}).get('pages', {}).values():
        w = p['title']
        cands = [im['title'] for im in p.get('images', [])
                 if re.search(r'\.(ogg|oga|wav|mp3|flac)$', im['title'], re.I)
                 and (im['title'].lower().startswith('file:en-') or '(eng)' in im['title'].lower())
                 and re.sub(r'[^a-z]', '', w.lower()) in re.sub(r'[^a-z]', '', im['title'].lower())]
        if cands: files[w] = sorted(cands, key=RANK)[0]
print('wiktionary pages with an English recording:', len(files), 'of', len(words), file=sys.stderr, flush=True)

# 2. ask Commons for an MP3 version of each file (50 per request)
mp3, credits = {}, {}
names = list(set(files.values()))
for i in range(0, len(names), 50):
    d = api('https://commons.wikimedia.org/w/api.php', {'action': 'query', 'prop': 'videoinfo', 'viprop': 'url|derivatives|extmetadata',
                                                        'titles': '|'.join(names[i:i + 50])})
    norm = {n['to']: n['from'] for n in d.get('query', {}).get('normalized', [])}
    for p in d.get('query', {}).get('pages', {}).values():
        vi = (p.get('videoinfo') or [{}])[0]
        src = next((x['src'] for x in vi.get('derivatives', []) if x.get('type') == 'audio/mpeg'), None)
        name = norm.get(p['title'], p['title'])
        if src: mp3[name] = src
        meta = vi.get('extmetadata', {})
        strip = lambda s: re.sub(r'<[^>]+>', '', s or '').strip()
        credits[name] = {'file': vi.get('descriptionurl'), 'author': strip(meta.get('Artist', {}).get('value')),
                         'licence': strip(meta.get('LicenseShortName', {}).get('value'))}

# 3. IPA text (dictionaryapi.dev, a few at a time)
def ipa_of(word):
    raw = get('https://api.dictionaryapi.dev/api/v2/entries/en/' + urllib.parse.quote(word))
    try:
        phon = [p for e in json.loads(raw) for p in e.get('phonetics', [])] if raw else []
        return word, next((p['text'] for p in phon if p.get('text')), None)
    except Exception:
        return word, None

res = {}
with ThreadPoolExecutor(4) as ex:
    for w, ipa in ex.map(ipa_of, words):
        if ipa: res.setdefault(w, {})['ipa'] = ipa
print('IPA found for', len(res), file=sys.stderr, flush=True)

# 4. download the MP3s from Wikimedia: one at a time, politely
for i, word in enumerate(words):
    f = files.get(word)
    if not (f and mp3.get(f)): continue
    fn = re.sub(r'[^a-z0-9]+', '-', word.lower()) + '.mp3'
    path = os.path.join(app, 'audio', fn)
    if not os.path.exists(path):
        b = get(mp3[f])
        if b and len(b) > 500: open(path, 'wb').write(b)
        time.sleep(0.5)
    if os.path.exists(path): res.setdefault(word, {})['f'] = 'audio/' + fn
    if i % 200 == 0: print('audio', i, 'of', len(words), file=sys.stderr, flush=True)

print('words', len(words), 'with recording', sum('f' in r for r in res.values()),
      'with IPA', sum('ipa' in r for r in res.values()), file=sys.stderr)
# per-recording attribution, required by the CC BY-SA licences most of them use
with open(os.path.join(app, 'audio-credits.json'), 'w', encoding='utf-8') as f:
    json.dump({w: credits.get(files[w], {}) for w, r in sorted(res.items()) if 'f' in r}, f, ensure_ascii=False, indent=1)
with open(os.path.join(app, 'audio.js'), 'w', encoding='utf-8') as f:
    f.write('// Pronunciations recorded by Wiktionary contributors (files on Wikimedia Commons, CC BY-SA or public domain); IPA via dictionaryapi.dev.\n')
    f.write('const AUDIO = ' + json.dumps(res, ensure_ascii=False, separators=(',', ':')) + ';\n')
