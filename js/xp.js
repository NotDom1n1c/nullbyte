/* NULLBYTE — lightweight XP / achievements (localStorage) */
window.NB = (function () {
  const KEY = 'nb_progress';
  const ACH = {
    'glossary-novice':  { name: 'Glossary Novice',    desc: 'Viewed 10 terms',                  icon: 'i-book' },
    'glossary-master':  { name: 'Vocabulary Master',  desc: 'Browsed the whole glossary',       icon: 'i-book' },
    'toolkit-explorer': { name: 'Toolkit Explorer',   desc: 'Opened every tool',                icon: 'i-wrench' },
    'quiz-rookie':      { name: 'Quiz Rookie',        desc: 'Passed your first lab challenge',  icon: 'i-check' },
    'subnet-solver':    { name: 'Subnet Solver',      desc: 'Used the subnet calculator 5×',    icon: 'i-server' },
    'privacy-aware':    { name: 'Privacy Aware',      desc: 'Completed the privacy checklist',  icon: 'i-shield' },
    'phish-spotter':    { name: 'Phishing Spotter',   desc: 'Spotted every phishing example',   icon: 'i-mail' },
    'compare-pro':      { name: 'Gear Comparer',      desc: 'Used the compare tool',            icon: 'i-grid' },
    'sql-select':       { name: 'First Query',        desc: 'Ran your first SQL SELECT',        icon: 'i-database' },
    'sql-join':         { name: 'Table Joiner',       desc: 'Wrote a SQL JOIN',                 icon: 'i-database' },
    'sql-subquery':     { name: 'Subquery Sorcerer',  desc: 'Nested a subquery',                icon: 'i-database' },
    'bit-flipper':      { name: 'Bit Flipper',        desc: 'Toggled a bit by hand',            icon: 'i-cpu' },
    'bit-scholar':      { name: 'Binary Scholar',     desc: 'Read every Bits section',          icon: 'i-cpu' },
    'clickfix-survivor':{ name: 'ClickFix Survivor',  desc: 'Survived the fake CAPTCHA demo',   icon: 'i-shield' },
    'fast-reflex':      { name: 'Fast Reflexes',      desc: 'Reacted in under 250 ms',          icon: 'i-bolt' },
    'pcap-detective':   { name: 'Packet Detective',   desc: 'Solved the packet-capture lab',    icon: 'i-network' },
    'hash-cracked':     { name: 'Hash Cracker',       desc: 'Cracked a hash from the wordlist',  icon: 'i-key' },
    'sock-puppet':      { name: 'Ghost Identity',     desc: 'Built a sock-puppet persona',       icon: 'i-face' },
    'metadata-sleuth':  { name: 'Metadata Sleuth',    desc: 'Extracted EXIF from an image',      icon: 'i-image' },
    'focus-locked':     { name: 'In the Zone',        desc: 'Completed a focus sprint',          icon: 'i-activity' },
    'keybind-ace':      { name: 'Keybind Ace',        desc: 'Cleared a shortcut deck',           icon: 'i-keyboard' },
    'daily-solver':     { name: 'Daily Grind',        desc: 'Solved a daily challenge',          icon: 'i-badge' },
    'vm-operator':      { name: 'Lab Operator',       desc: 'Booted a VM in the lab',            icon: 'i-monitor' },
    'vm-snapshot':      { name: 'Time Traveler',      desc: 'Snapshotted & reverted a VM',       icon: 'i-monitor' },
    'qr-smith':         { name: 'QR Smith',           desc: 'Generated & decoded a QR code',     icon: 'i-grid' },
    'steg-agent':       { name: 'Ghost in the Pixels',desc: 'Hid a message inside an image',     icon: 'i-image' },
    'byte-differ':      { name: 'Byte Differ',        desc: 'Diffed two files byte-by-byte',     icon: 'i-hex' }
  };
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { ach: {}, counters: {}, seen: {} }; } catch (e) { return { ach: {}, counters: {}, seen: {} }; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  function toast(a) {
    const t = document.createElement('div');
    t.className = 'nb-toast';
    t.innerHTML = `<svg class="ico"><use href="#${a.icon}"/></svg><div><div class="t-h">Achievement unlocked</div><div class="t-n">${a.name}</div></div><span class="t-xp">+100 XP</span>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3200);
  }

  function unlock(id) { const s = load(); if (ACH[id] && !s.ach[id]) { s.ach[id] = Date.now(); save(s); toast(ACH[id]); } }
  function inc(c, by = 1) { const s = load(); s.counters[c] = (s.counters[c] || 0) + by; save(s); return s.counters[c]; }
  function seen(group, item) { const s = load(); s.seen[group] = s.seen[group] || {}; if (!s.seen[group][item]) { s.seen[group][item] = 1; save(s); } return Object.keys(s.seen[group]).length; }
  function get() { return load(); }
  function xp() { return Object.keys(load().ach).length * 100; }
  function reset() { localStorage.removeItem(KEY); }

  return { unlock, inc, seen, get, xp, reset, ACH };
})();
