# Acta Diurna: five words, daily

A small app for your phone and computer that teaches **five slightly obscure, interesting words a day**, plus
**one old insult** and **a poem**. It installs from a web link, works offline, and needs no account, server or AI to keep running.
All content ships with the app and rotates by date.

## What's in it

- **Words:** 2,000+ words (over a year without repeats). 272 are hand-written with pronunciation, example and origin, plus 51 fun verbs (*absquatulate*, *perendinate*, *cachinnate*).
  The rest come from Webster's 1913 dictionary, chosen for being used in classic novels but only rarely.
- **Old insult of the day:** 65 archaic and rare insults (*jobbernowl*, *smellfungus*, *vilipend*, *flyte*), highlighted as the 6th card.
- **Meanings that have shifted:** for about 50 words whose meaning has changed since 1913 (*officious* once meant "kind, obliging"), the card shows both, with sources.
- **Pronunciation:** human recordings from Wiktionary contributors where they exist, IPA, and a choice of device voice otherwise.
- **Poem of the day:** rotates Ancient → Classical → New → Modern → Chinese. Chinese poems show the original characters and a "Compare in DeepL" link.
- **Learning tools:** "I know it" swaps a word out for good; "Keep" schedules it for spaced review (1, 3, 7, 14, 30, 60 days); quizzes; streaks; archive.
- **Reminders:** daily notification, an optional **"nag me until I answer"** mode that gets ruder each time, and calendar files (one alert, or six) for phones.
- **Light and dark mode** follow the device.

## Install

Open the link on each device:

- **iPhone:** Safari → Share → **Add to Home Screen**. Notifications need iOS 16.4+ and the Home Screen version.
- **Android:** Chrome → ⋮ menu → **Install app** (or **Add to Home screen**). Notifications then work even when the app is closed; for calendar reminders use **Add to Google Calendar** in Archive.
- **Desktop Chrome or Edge:** use the install icon at the right of the address bar.

To update, pull down from the top of the app (or tap **↻ Update**).

Each device keeps its own progress (it's stored on the device, nothing is sent anywhere).

## Share it

Tap **Share ↗** in the app (or send the link). Anyone with the link gets their own copy and their own progress.

## Run it locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Any static web host works (it's plain HTML/JS); this repo is set up for GitHub Pages.

## Rebuilding the data (optional)

Everything is pre-built. The scripts in `tools/` regenerate the data files from public sources. Run each once; nothing updates on its own.

| Script | Makes | From |
|---|---|---|
| `tools/build_words.py` | `words-gutenberg.js` | Webster's Unabridged (Gutenberg #29765) + 60 Gutenberg novels for rarity + a modern 20k frequency list |
| `tools/build_defs.py` | `defs-compare.js` | Webster's 1913 vs Open English WordNet 2024 (shifts hand-checked in `SHIFTED`) |
| `tools/build_chinese.py` | `poems-chinese.js` | Gutenberg translations (#50155, #48222, #42290) + originals (#52323 唐詩三百首, #23873 詩經) |
| `tools/build_audio.py` | `audio/`, `audio.js`, `audio-credits.json` | Wiktionary / Wikimedia Commons recordings, IPA via dictionaryapi.dev |

Usage is in each script's docstring. After changing any app file, bump `CACHE` in `sw.js` so installed copies update.

## Sources and licenses

- **Webster's Unabridged Dictionary (1913)** and the **novels** used for word selection: public domain, via [Project Gutenberg](https://www.gutenberg.org).
- **Open English WordNet 2024** (modern definitions shown as "Today"): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © the Open English WordNet contributors, https://github.com/globalwordnet/english-wordnet.
- **Pronunciation recordings:** by Wiktionary contributors, hosted on Wikimedia Commons under their individual licenses (mostly CC BY-SA, some public domain). Each file's author and license is listed in `audio-credits.json`.
- **IPA transcriptions:** Wiktionary (CC BY-SA), via [dictionaryapi.dev](https://dictionaryapi.dev).
- **Poems:** public-domain texts. Sappho, Catullus, Horace, Li Bai's "Quiet Night Thought" and Bashō in `poems.js` (marked "tr. for this app") are new translations made for this app.
  Chinese translations are by Ezra Pound (*Cathay*, 1915), Florence Ayscough & Amy Lowell (*Fir-Flower Tablets*, 1921) and Arthur Waley (*A Hundred and Seventy Chinese Poems*, 1918), all public domain in the United States.
  Pound's and Waley's translations may still be under copyright in some other countries.
- **Links** to Poetry Foundation, Merriam-Webster and Dictionary.com are links only; none of their content is included.
