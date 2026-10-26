importScripts('words.js', 'words-gutenberg.js', 'funverbs.js', 'insults.js');
const CACHE = 'acta-diurna-v14';
const START = Date.UTC(2026,9,26), PER_DAY = 5, DAY_MS = 86400000;

function todayWords(){
  const n = new Date();
  const idx = Math.floor((Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - START) / DAY_MS);
  const days = Math.ceil(WORDS.length / PER_DAY);
  const k = ((idx % days) + days) % days;
  return Array.from({length:PER_DAY}, (_, j) => WORDS[(k*PER_DAY + j) % WORDS.length][0]);
}
async function getCfg(){
  const r = await (await caches.open('acta-cfg')).match('cfg');
  return r ? r.json() : null;
}
async function setCfg(o){
  await (await caches.open('acta-cfg')).put('cfg', new Response(JSON.stringify(o)));
}
// Once the chosen time has passed: notify once a day, or in nag mode, every few minutes until answered.
const NAG_TITLES = ['Your five words are ready', 'Still waiting…', 'Ahem. The words are getting cold.',
  'Answer me, you %s.', 'Really? Still nothing, you %s?', 'This is a formal objurgation, you %s.', 'I shall flyte you in verse, %s.'];
async function maybeNotify(){
  const cfg = await getCfg();
  if (!cfg || !cfg.on) return;
  const n = new Date();
  const key = n.getFullYear() + '-' + n.getMonth() + '-' + n.getDate();
  const [h, m] = (cfg.time || '08:00').split(':').map(Number);
  if (n.getHours()*60 + n.getMinutes() < h*60 + m) return;
  const fresh = cfg.wordsKey === key;
  if (cfg.nag) {
    if (fresh && cfg.answered) return;
    if (cfg.lastNagKey === key && Date.now() - (cfg.lastNagAt || 0) < (cfg.every || 15) * 60000) return;
    cfg.nagCount = cfg.lastNagKey === key ? (cfg.nagCount || 0) + 1 : 0;
    cfg.lastNagKey = key; cfg.lastNagAt = Date.now(); cfg.last = key;
  } else {
    if (cfg.last === key) return;
    cfg.last = key;
  }
  await setCfg(cfg);
  const wins = await clients.matchAll({type:'window'});
  if (wins.some(w => w.visibilityState === 'visible')) return;   // already looking at it
  const insult = (fresh && cfg.insult) || 'ninnyhammer';
  const title = NAG_TITLES[Math.min(cfg.nag ? cfg.nagCount || 0 : 0, NAG_TITLES.length - 1)].replace('%s', insult);
  await self.registration.showNotification(title, {
    body: (cfg.words && fresh ? cfg.words : todayWords()).join(' · ') + (cfg.nag ? '  + one old insult' : '') +
          (cfg.due ? `  +${cfg.due} kept word${cfg.due > 1 ? 's' : ''} to review` : ''),
    icon: 'icon-192.png', badge: 'icon-192.png', tag: 'daily',
    renotify: !!cfg.nag, requireInteraction: !!cfg.nag, vibrate: cfg.nag ? [200, 100, 200, 100, 400] : undefined
  });
}
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'cfg') {
    e.waitUntil((async () => {
      const old = await getCfg();
      const keep = old ? {last: old.last, lastNagKey: old.lastNagKey, lastNagAt: old.lastNagAt, nagCount: old.nagCount} : {};
      await setCfg({...e.data.cfg, ...keep});
      await maybeNotify();
    })());
  }
});
self.addEventListener('periodicsync', e => { if (e.tag === 'daily-words') e.waitUntil(maybeNotify()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(ws => ws.length ? ws[0].focus() : clients.openWindow('./index.html')));
});
const ASSETS = ['./','index.html','words.js','words-gutenberg.js','funverbs.js','insults.js','poems.js','poems-chinese.js','defs-compare.js','audio.js','manifest.json','icon.svg','icon-192.png','icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('acta-diurna-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// network-first so updates arrive, cache fallback so it works offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('index.html')))
  );
});
