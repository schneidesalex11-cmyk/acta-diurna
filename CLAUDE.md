# Acta Diurna (daily words app): project notes for Claude

Installable PWA: 5 words + 1 old insult + 1 poem per day. Plain HTML/JS, no build step, no framework, no server, hosted as static files (GitHub Pages).

## Ground rules from the owner
- **No AI at runtime and as little ongoing updating as possible.** All content is static data shipped with the app and rotated by date. Don't add features that need a server, API key, or regular content refresh.
- **Copyright:** only public-domain or openly licensed text goes in full. Modern poems/translations still under copyright are linked to, never copied. Keep source/licence credits visible (cards show "Open English WordNet" / "Webster's 1913" refs; README lists licences).
- Machine translation (e.g. DeepL) is offered only as a "Compare in DeepL" link, never baked in.
- Owner uses an **iPhone** and a Windows PC. Check iPhone limits (no background web notifications without a push server; iOS notifications need 16.4+ and Home Screen install).
- Light/dark mode must follow the device (`prefers-color-scheme`).

## Layout
- `index.html`: the whole UI (styles + script). Views: Today, Quiz, Archive (settings live in Archive).
- Data scripts, loaded in this order (order matters):
  `words.js` (272 hand-written, defines `WORDS`) → `words-gutenberg.js` (`WORDS.push`, 1,700 from Webster 1913) → `funverbs.js` (splices fun verbs evenly into `WORDS`) → `insults.js` (`INSULTS`; removes any insult from `WORDS`) → `poems-chinese.js` (`CHINESE_POEMS`) → `poems.js` (`POEM_SETS`, builds interleaved `POEMS`) → `defs-compare.js` (`DEFS_COMPARE`) → `audio.js` (`AUDIO`).
- Word entry: `[word, pronunciation, pos, definition, example, origin, source?]` (`source` = `'W1913'` for Webster words).
- Poem entry: `[title, poet, era, credit/date, text, originalChinese?, originalTitle?]`.
- `sw.js`: offline cache (network-first), reminders and nag mode. It `importScripts` the word files in the same order to compute the day's words. **Bump `CACHE` whenever any asset changes.**
- `tools/`: one-off Python build scripts (see README). Their downloaded inputs are not committed.

## Behaviour worth knowing
- Day index = days since 26 Oct 2026 (`START`), words for day i = slice `i*5..i*5+5` of `WORDS` (cyclic). Changing the order or length of `WORDS` reshuffles every day; append-only is safest once people use it.
- State is in `localStorage['actaDiurna']` (`S`): learned, known (skipped), swaps, rev (spaced repetition, intervals `INT`), mastered, answered, remind{on,time,nag,every}, voice.
- Nag mode: page posts config to the SW every minute; SW repeats an escalating notification every `every` minutes after the reminder time until `answered` (today's quiz finished or "I'm done for today").

## Testing
`python -m http.server 8000` in this folder, open http://localhost:8000. Syntax check: `node --check sw.js`.
