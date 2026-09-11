/* NULLBYTE — icon sprite + layout-only interactions */

/* ---- monochrome line-icon sprite (injected once) ---- */
const SPRITE = `<svg id="sprite" xmlns="http://www.w3.org/2000/svg"><defs>
<linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="0.55" stop-color="#a855f7"/><stop offset="1" stop-color="#e040fb"/></linearGradient>
<symbol id="i-logo" viewBox="0 0 32 32"><path d="M6 14C6 7.4 10.4 3 16 3s10 4.4 10 11v13l-3.3-2.6L19.3 27 16 24.4 12.7 27 9.3 24.4 6 27Z" fill="url(#lg)"/><circle cx="12.2" cy="14" r="2.2" fill="#0b0712"/><circle cx="19.8" cy="14" r="2.2" fill="#0b0712"/><circle cx="12.2" cy="14" r="0.7" fill="#fff"/><circle cx="19.8" cy="14" r="0.7" fill="#fff"/></symbol>
<symbol id="i-arrow-ur" viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></symbol>
<symbol id="i-terminal" viewBox="0 0 24 24"><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></symbol>
<symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-2-2 3-3Z"/></symbol>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></symbol>
<symbol id="i-scope" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="1.4"/></symbol>
<symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.2 11.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 7H6"/></symbol>
<symbol id="i-cpu" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></symbol>
<symbol id="i-keyboard" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="1.5"/><path d="M6 10h0M10 10h0M14 10h0M18 10h0M7 14h10"/></symbol>
<symbol id="i-antenna" viewBox="0 0 24 24"><path d="M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4"/><circle cx="12" cy="12" r="1.6"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></symbol>
<symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></symbol>
<symbol id="i-activity" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></symbol>
<symbol id="i-folder" viewBox="0 0 24 24"><path d="M4 5h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></symbol>
<symbol id="i-gift" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8S10.5 3 8 3 5 5.5 6.5 7.2 12 8 12 8Zm0 0s1.5-5 4-5 3 2.5 1.5 4.2S12 8 12 8Z"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></symbol>
<symbol id="i-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M19 19l-2-2M7 7 5 5"/></symbol>
<symbol id="i-database" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></symbol>
<symbol id="i-face" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M9 10h0M15 10h0M9.5 15a3.5 3.5 0 0 0 5 0"/></symbol>
<symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.5-4.5L5 22"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></symbol>
<symbol id="i-hex" viewBox="0 0 24 24"><path d="M12 2 21 7v10l-9 5-9-5V7Z"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.9 9.8a16 16 0 0 0 5.3 5.3l1.4-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></symbol>
<symbol id="i-home" viewBox="0 0 24 24"><path d="M3 10 12 3l9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></symbol>
<symbol id="i-refresh" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.3"/><path d="M21 3v6h-6"/></symbol>
<symbol id="i-car" viewBox="0 0 24 24"><path d="M5 17a2 2 0 0 1-2-2v-3l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 7l2 5v3a2 2 0 0 1-2 2"/><path d="M5 17h14"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></symbol>
<symbol id="i-server" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="7" rx="1"/><rect x="3" y="13" width="18" height="7" rx="1"/><path d="M7 7.5h0M7 16.5h0"/></symbol>
<symbol id="i-radar" viewBox="0 0 24 24"><path d="M19.1 4.9A10 10 0 1 0 22 12"/><path d="M12 12 22 4"/><circle cx="12" cy="12" r="1.4"/></symbol>
<symbol id="i-badge" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="i-network" viewBox="0 0 24 24"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 7 11 16M17 7 13 16M7 6h10"/></symbol>
<symbol id="i-at" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></symbol>
<symbol id="i-github" viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.5 4.5 0 0 0-.1-3.5S17.4 1.7 15 3.3a12 12 0 0 0-6 0C6.6 1.7 5.5 2 5.5 2a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.4V22"/></symbol>
<symbol id="i-message" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></symbol>
<symbol id="i-music" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></symbol>
<symbol id="i-camera" viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="3.5"/></symbol>
<symbol id="i-box" viewBox="0 0 24 24"><path d="m21 8-9-5-9 5v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/></symbol>
<symbol id="i-monitor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></symbol>
<symbol id="i-ban" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/></symbol>
<symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></symbol>
<symbol id="i-dollar" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M17 6a4 4 0 0 0-4-2h-2a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-2a4 4 0 0 1-4-2"/></symbol>
<symbol id="i-help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.6 1.3c0 1.7-2.1 2.2-2.1 3.2"/><path d="M12 17h0"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></symbol>
<symbol id="i-credit" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7.2l1.25 3.55 3.55 1.25-3.55 1.25L12 16.8l-1.25-3.55L7.2 12l3.55-1.25Z"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></symbol>
<symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>
<symbol id="i-key" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m11 12 8-8 2 2M16 7l2 2"/></symbol>
<symbol id="i-shark" viewBox="0 0 24 24"><path d="M2 16c4 0 4-3 8-3s4 3 8 3M3 8c5-4 13-4 18 0-2 1-3 3-3 5"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 6.5"/></symbol>
<symbol id="i-infinity" viewBox="0 0 24 24"><path d="M7 8a4 4 0 0 0 0 8c2.5 0 3.5-2 5-4s2.5-4 5-4a4 4 0 0 1 0 8c-2.5 0-3.5-2-5-4S9.5 8 7 8Z"/></symbol>
<symbol id="i-logout" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></symbol>
</defs></svg>`;
document.body.insertAdjacentHTML('afterbegin', SPRITE);

/* ---- mobile nav ---- */
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-burger]')) document.querySelector('.nav-links')?.classList.toggle('open');
});

/* ---- difficulty selector (tool pages) ---- */
document.querySelectorAll('[data-levels]').forEach((group) => {
  const buttons = group.querySelectorAll('[data-level]');
  const panels = document.querySelectorAll('[data-panel]');
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.toggle('active', b === btn));
    panels.forEach((p) => p.classList.toggle('show', p.dataset.panel === btn.dataset.level));
  }));
});

/* ---- tools search + category filter ---- */
(() => {
  const search = document.querySelector('.search-box input');
  const filters = document.querySelectorAll('.filters button');
  const cells = document.querySelectorAll('.tool-cell');
  if (!cells.length) return;
  let activeCat = 'All';
  const apply = () => {
    const q = (search ? search.value : '').toLowerCase().trim();
    let shown = 0;
    cells.forEach((c) => {
      const name = (c.querySelector('h3')?.textContent || '').toLowerCase();
      const cat = (c.querySelector('.foot span')?.textContent || '').trim();
      const ok = name.includes(q) && (activeCat === 'All' || cat === activeCat);
      c.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    const empty = document.querySelector('[data-tools-empty]');
    if (empty) empty.style.display = shown ? 'none' : '';
  };
  search?.addEventListener('input', apply);
  filters.forEach((b) => b.addEventListener('click', () => {
    filters.forEach((x) => x.classList.toggle('active', x === b));
    activeCat = b.textContent.trim();
    apply();
  }));
})();

/* ---- glossary live filter ---- */
const gSearch = document.querySelector('[data-glossary-search]');
if (gSearch) gSearch.addEventListener('input', () => {
  const q = gSearch.value.toLowerCase().trim();
  document.querySelectorAll('[data-term]').forEach((row) => {
    row.style.display = row.dataset.term.toLowerCase().includes(q) ? '' : 'none';
  });
});

/* ---- checkout live card preview ---- */
const cc = {
  number: document.querySelector('[data-cc-number]'),
  holder: document.querySelector('[data-cc-holder]'),
  month:  document.querySelector('[data-cc-month]'),
  year:   document.querySelector('[data-cc-year]'),
};
const out = {
  number: document.querySelector('[data-card-number]'),
  holder: document.querySelector('[data-card-holder]'),
  expiry: document.querySelector('[data-card-expiry]'),
};
if (cc.number && out.number) {
  const fmt = (v) => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  cc.number.addEventListener('input', () => {
    cc.number.value = fmt(cc.number.value);
    out.number.textContent = cc.number.value || '0000 0000 0000 0000';
  });
  cc.holder.addEventListener('input', () => out.holder.textContent = (cc.holder.value || 'CARD HOLDER').toUpperCase());
  const setExp = () => {
    const m = cc.month.value || 'MM';
    const y = cc.year.value ? String(cc.year.value).slice(-2) : 'YY';
    out.expiry.textContent = `${m}/${y}`;
  };
  cc.month.addEventListener('change', setExp);
  cc.year.addEventListener('change', setExp);
}

/* ---- CVV + card flip ---- */
const cvvIn  = document.querySelector('[data-cc-cvv]');
const cvvOut = document.querySelector('[data-card-cvv]');
const flip   = document.querySelector('[data-card-flip]');
if (cvvIn && cvvOut) {
  cvvIn.addEventListener('input', () => { cvvOut.textContent = cvvIn.value.replace(/\D/g, '').slice(0, 4) || '•••'; });
  cvvIn.addEventListener('focus', () => flip && flip.classList.add('flipped'));
  cvvIn.addEventListener('blur',  () => flip && flip.classList.remove('flipped'));
}

/* ---- active nav link ---- */
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((a) => {
  if (a.getAttribute('href') === here) a.classList.add('active');
});

/* ============================================================
   OSINT — shared module registry (sidebar + module pages)
   ============================================================ */
const OS = {
  dashboard:{l:'Dashboard',i:'i-grid',href:'osint.html'},
  activity:{l:'Activity',i:'i-activity',type:'section',d:'Your recent lookups, exports and runs.'},
  cases:{l:'Investigations',i:'i-folder',type:'section',d:'Group lookups into investigations.'},
  'daily-cases':{l:'Cases',i:'i-gift',type:'section',d:'Open cases & win credits — spin to reveal your prize.'},
  account:{l:'Account',i:'i-user',type:'section',d:'Profile, plan, credits & API keys.'},
  settings:{l:'Settings',i:'i-settings',type:'section',d:'Preferences, theme & security.'},

  'web-databases':{l:'Web Databases',i:'i-database',d:'Pivot to breach & credential databases (HIBP, IntelX, DeHashed).',c:2,fl:'Query',ph:'name, email or phone'},
  'reverse-face':{l:'Reverse Face Search',i:'i-face',d:'Pivot to Google Lens, Yandex & PimEyes for a face.',c:2,fl:'Image URL',ph:'https://…/photo.jpg'},
  'image-geo':{l:'Image Geolocation',i:'i-image',d:'Pivot to reverse-image geolocation tools.',c:2,fl:'Image URL',ph:'https://…/photo.jpg'},
  gmail:{l:'Gmail Lookup',i:'i-mail',d:'Pivot to Google-account footprint tools (Epieos).',c:1,fl:'Gmail address',ph:'target@gmail.com'},
  'hudson-rock':{l:'Hudson Rock',i:'i-hex',d:'Pivot to Hudson Rock free infostealer check.',c:2,fl:'Email or domain',ph:'target@email.com'},
  seon:{l:'SEON',i:'i-shield',d:'Pivot to digital-footprint & fraud-signal tools.',c:2,fl:'Email or phone',ph:'target@email.com'},
  universal:{l:'Universal Search',i:'i-search',d:'LIVE — detects the identifier type & routes to the matching live module.',c:1,fl:'Any identifier',ph:'email, domain, IP, @handle, VIN…',live:true},

  phone:{l:'Phone Search',i:'i-phone',d:'Pivot to carrier-ID & reverse-phone lookups for a number.',c:1,fl:'Phone number',ph:'+41 79 123 45 67'},
  address:{l:'Address Search',i:'i-home',d:'Pivot to maps, street view & property-record searches.',c:1,fl:'Address',ph:'221B Baker Street, London'},
  email:{l:'Email Search',i:'i-mail',d:'LIVE — Gravatar profile, linked accounts & mail-server (MX) records.',c:1,fl:'Email',ph:'target@email.com',live:true},
  person:{l:'Person Search',i:'i-user',d:'Pivot to public-records & people-search tools for a name.',c:2,fl:'Full name',ph:'John Doe'},
  reverse:{l:'Reverse Lookup',i:'i-refresh',d:'Pivot a phone, email or username to identity tools.',c:1,fl:'Phone, email or username',ph:'+41 …'},
  vin:{l:'VIN Lookup',i:'i-car',d:'LIVE — real make, model, engine & plant from the NHTSA vPIC database.',c:1,fl:'VIN',ph:'1HGCM82633A004352',live:true},

  ip:{l:'IP Info',i:'i-server',d:'LIVE — real geo, ASN, ISP & map for an IP address.',c:1,fl:'IP address',ph:'8.8.8.8',live:true},
  port:{l:'Port Scan',i:'i-radar',d:'LIVE (free backend) — real open ports & CVEs (Shodan InternetDB).',c:3,fl:'Host or IP',ph:'8.8.8.8',live:true},
  whois:{l:'Whois',i:'i-grid',d:'LIVE — real registrar, dates, nameservers & status (RDAP).',c:1,fl:'Domain',ph:'example.com',live:true},
  dns:{l:'DNS Recon',i:'i-database',d:'LIVE — real A/AAAA/MX/NS/TXT/CNAME/SOA records.',c:2,fl:'Domain',ph:'example.com',live:true},
  shodan:{l:'Shodan',i:'i-globe',d:'LIVE (free backend) — exposed ports, services & CVEs for an IP.',c:3,fl:'IP address',ph:'8.8.8.8',live:true},
  cert:{l:'Certificate Lookup',i:'i-badge',d:'LIVE (free) — real subdomains & certs from Cert Spotter.',c:1,fl:'Domain',ph:'example.com',live:true},
  network:{l:'Network',i:'i-network',d:'LIVE — real DNS records + hosting ASN/ISP/geo for a domain.',c:2,fl:'Domain',ph:'example.com',live:true},

  usernames:{l:'Usernames',i:'i-at',d:'LIVE — verifies GitHub + opens the exact profile on 10+ sites.',c:1,fl:'Username',ph:'mansterd',live:true},
  github:{l:'GitHub',i:'i-github',d:'LIVE — real profile, repos & stats from the GitHub API.',c:1,fl:'GitHub username',ph:'octocat',live:true},
  discord:{l:'Discord',i:'i-message',d:'LIVE — exact account-creation date decoded from a Discord ID.',c:1,fl:'Discord ID',ph:'175928847299117063',live:true},
  tiktok:{l:'TikTok',i:'i-music',d:'Open the public TikTok profile + indexed content.',c:1,fl:'TikTok handle',ph:'@user'},
  'tiktok-osint':{l:'TikTok OSINT',i:'i-music',d:'Open TikTok profile + third-party history viewers.',c:2,fl:'TikTok handle',ph:'@user'},
  instagram:{l:'Instagram Resolver',i:'i-camera',d:'Open the IG profile + anonymous viewers.',c:1,fl:'Instagram handle',ph:'@user'},
  roblox:{l:'Roblox',i:'i-box',d:'Find the Roblox profile + trade/value history.',c:1,fl:'Roblox username',ph:'builderman'},

  'machine-viewer':{l:'Machine Viewer',i:'i-monitor',d:'Pivot to infostealer machine-record tools.',c:2,fl:'Machine ID',ph:'machine-id'},
  stealerlogs:{l:'Stealerlogs',i:'i-database',d:'Pivot to infostealer-log databases (Hudson Rock, IntelX).',c:4,fl:'Domain or email',ph:'target@email.com'},
  'email-osint':{l:'Email OSINT',i:'i-mail',d:'LIVE — Gravatar profile, linked accounts & MX from an email.',c:2,fl:'Email',ph:'target@email.com',live:true},

  'double-counter':{l:'Double Counter Bypass',i:'i-ban',d:'LIVE — decode the Discord ID (creation date) + pivot.',c:2,fl:'Discord ID',ph:'175928847299117063',live:true},
  'discord-alt':{l:'Discord Alt Identifier',i:'i-message',d:'LIVE — decode the Discord ID (creation date) + pivot.',c:2,fl:'Discord ID',ph:'175928847299117063',live:true},
  'roblox-scraper':{l:'Roblox Profile Scraper',i:'i-box',d:'Pivot to Roblox profile & scraper tools.',c:2,fl:'Roblox username',ph:'builderman'},
  intelx:{l:'IntelX Downloader',i:'i-download',d:'Pivot to Intelligence X selector search.',c:3,fl:'Selector',ph:'email, domain or ip'},

  store:{l:'Store',i:'i-box',href:'shop.html'},
  pricing:{l:'Pricing',i:'i-dollar',href:'shop.html'},
  support:{l:'Support',i:'i-help',type:'section',d:'Help center, docs & contact.'},
};
const OS_NAV = [
  ['General',['dashboard','activity','cases','daily-cases','account','settings']],
  ['Intelligence',['web-databases','reverse-face','image-geo','gmail','hudson-rock','seon','universal']],
  ['People Search',['phone','address','email','person','reverse','vin']],
  ['Infrastructure',['ip','port','whois','dns','shodan','cert','network']],
  ['Social',['usernames','github','discord','tiktok','tiktok-osint','instagram','roblox']],
  ['Breach Data',['machine-viewer','stealerlogs','email-osint']],
  ['Tools',['double-counter','discord-alt','roblox-scraper','intelx']],
  ['Billing',['store','pricing','support']],
];
function osHref(k){ return OS[k].href || ('osint-module.html#' + k); }
function osGroup(k){ let g=''; OS_NAV.forEach(([n,keys])=>{ if(keys.includes(k)) g=n; }); return g; }

/* per-group accent colors — [primary, secondary]; cool cyber palette.
   Groups vary within the cyan→blue→periwinkle spectrum so they're still
   distinguishable; Breach Data keeps a red tint as an intentional danger cue. */
const GC = {
  'General':        ['#22e0ff','#66ecff'],
  'Intelligence':   ['#4d9bff','#6db4ff'],
  'People Search':  ['#3b82f6','#38bdf8'],
  'Infrastructure': ['#22d3ee','#38bdf8'],
  'Social':         ['#7c9dff','#a5b8ff'],
  'Breach Data':    ['#ff5470','#ff7a90'],
  'Tools':          ['#38bdf8','#7cc4ff'],
  'Billing':        ['#22e0ff','#4d9bff'],
};
function osColor(grp){ return GC[grp] || ['#22e0ff','#66ecff']; }

/* subject-graph SVG — used as the live result visualization */
function osGraphSVG(c){
  const pts = [[300,110],[175,185],[720,140],[920,285],[120,360],[250,470],[555,495],[775,440]];
  const labels = ['identity','email','phone','geo','social','breach','domain','alias'];
  let lines = '', nodes = '';
  pts.forEach((p,i) => {
    lines += `<line x1="500" y1="280" x2="${p[0]}" y2="${p[1]}" stroke="${c}" stroke-opacity=".32" stroke-width="1"/>`;
    nodes += `<g><circle cx="${p[0]}" cy="${p[1]}" r="11" fill="none" stroke="${c}" stroke-opacity=".45"/><circle cx="${p[0]}" cy="${p[1]}" r="5" fill="${c}"><animate attributeName="opacity" values="1;.35;1" dur="3s" begin="${(i*0.3).toFixed(1)}s" repeatCount="indefinite"/></circle><text x="${p[0]}" y="${p[1]-17}" fill="#9a98ad" font-family="monospace" font-size="12" text-anchor="middle">${labels[i]}</text></g>`;
  });
  return `<svg viewBox="0 0 1000 560" style="width:100%;display:block;margin-top:6px">
    <defs><radialGradient id="og" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${c}" stop-opacity=".4"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="500" cy="280" rx="300" ry="230" fill="url(#og)"/>
    ${lines}${nodes}
    <circle cx="500" cy="280" r="34" fill="none" stroke="rgba(255,255,255,.2)"><animate attributeName="r" values="30;88;30" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0;.5" dur="3.4s" repeatCount="indefinite"/></circle>
    <circle cx="500" cy="280" r="34" fill="none" stroke="rgba(255,255,255,.22)"/>
    <circle cx="500" cy="280" r="10" fill="#fff"/>
    <text x="500" y="320" fill="#fff" font-family="monospace" font-size="12" letter-spacing="2" text-anchor="middle">TARGET</text>
  </svg>`;
}

function renderOsintSidebar(active){
  const el = document.getElementById('osintSideNav'); if(!el) return;
  el.innerHTML = OS_NAV.map(([g,keys]) =>
    `<div class="sgroup"><h5>${g}</h5>` +
    keys.map(k => `<a class="nitem${k===active?' active':''}" href="${osHref(k)}"><svg class="ico"><use href="#${OS[k].i}"/></svg> ${OS[k].l}</a>`).join('') +
    `</div>`).join('');
}
function renderOsintModGrid(){
  const el = document.getElementById('osintModGrid'); if(!el) return;
  const keys = ['ip','dns','whois','network','cert','shodan','github','usernames','email','vin','discord','universal','phone','person','reverse-face','stealerlogs'];
  el.innerHTML = keys.map(k => {
    const c = osColor(osGroup(k))[0];
    return `<a class="mod" href="${osHref(k)}" style="--mc:${c}"><span class="cost">${OS[k].c}cr</span><svg class="ico ico-lg ic"><use href="#${OS[k].i}"/></svg><h3>${OS[k].l}</h3><p>${OS[k].d}</p></a>`;
  }).join('');
}
/* ============================================================
   OSINT "General" app — real, client-side (localStorage).
   Cases (CRUD), Activity log, Account, Settings, Daily Cases.
   ============================================================ */
/* OSINT backend (free Cloudflare Worker) — paste your deployed Worker URL here to enable
   the lookups that need a proxy/key (Shodan exposure, crt.sh, AbuseIPDB, VirusTotal).
   e.g. const OSINT_BACKEND = 'https://nullbyte-osint.yourname.workers.dev'; */
const OSINT_BACKEND = 'https://nullbyte-osint.aebersold-dominic10.workers.dev';
function osBackend(){ return (OSINT_BACKEND || '').replace(/\/+$/, ''); }

function osLoad(){ try{ const d = JSON.parse(localStorage.getItem('nb_osint')); return (d && typeof d === 'object') ? d : {}; }catch(e){ return {}; } }
function osSave(d){ try{ localStorage.setItem('nb_osint', JSON.stringify(d)); }catch(e){} }
function osCases(){ return osLoad().cases || []; }
function osSetCases(arr){ const d = osLoad(); d.cases = arr; osSave(d); }
function osActivity(){ return osLoad().activity || []; }
function osLog(icon, title, sub){ const d = osLoad(); d.activity = d.activity || []; d.activity.unshift({ icon, title, sub: sub || '', t: Date.now() }); d.activity = d.activity.slice(0, 60); osSave(d); }
function osAccount(){ return Object.assign({ name: 'dominic', plan: 'Free', credits: 5 }, osLoad().account || {}); }
function osSetAccount(a){ const d = osLoad(); d.account = Object.assign(osAccount(), a); osSave(d); }
function osCredits(){ return osAccount().credits; }
function osAddCredits(n){ osSetAccount({ credits: Math.max(0, Math.round(osAccount().credits + n)) }); osRefreshCreditUI(); return osAccount().credits; }
/* keep every credit readout on the page in sync with the real balance (no cap) */
function osRefreshCreditUI(){ const v = osCredits(); document.querySelectorAll('[data-cr]').forEach(el => { el.textContent = v; }); }

/* ---- Case opening (loot wheel) — rarities + weighted credit pools ---- */
const OS_RARITY = [
  { n: 'Common',    c: '#8fa3c1' },
  { n: 'Uncommon',  c: '#4dffa6' },
  { n: 'Rare',      c: '#4d9bff' },
  { n: 'Epic',      c: '#a855f7' },
  { n: 'Legendary', c: '#ffcf4d' },
  { n: 'Covert',    c: '#ff4d5e' }
];
/* Weighted credit pools. Paid cases keep a house edge (avg payout < cost), so
   grinding slowly bleeds credits — top tiers are deliberately rare. The free
   daily case is the only net-positive faucet, and it's limited to once a day. */
const OS_LOOT_CASES = [
  { id: 'daily', name: 'Daily Case', cost: 0, daily: true, i: 'i-gift', blurb: 'One free spin every day.',
    pool: [ {cr:0,r:0,w:24},{cr:1,r:0,w:44},{cr:2,r:1,w:22},{cr:3,r:2,w:7},{cr:5,r:3,w:2},{cr:9,r:4,w:1} ] },
  { id: 'recon', name: 'Recon Case', cost: 2, i: 'i-scope', blurb: 'Small stakes — the house holds a slim edge.',
    pool: [ {cr:0,r:0,w:36},{cr:1,r:0,w:30},{cr:2,r:1,w:24},{cr:4,r:2,w:7},{cr:8,r:3,w:2},{cr:18,r:4,w:1} ] },
  { id: 'black', name: 'Black Case', cost: 5, i: 'i-hex', blurb: 'Covert-tier jackpots — but the odds bite back.',
    pool: [ {cr:0,r:0,w:44},{cr:2,r:1,w:28},{cr:6,r:2,w:16},{cr:12,r:3,w:8},{cr:28,r:4,w:3},{cr:65,r:5,w:1} ] }
];
function osCaseById(id){ return OS_LOOT_CASES.find(c => c.id === id); }
function osPickPrize(pool){ const tot = pool.reduce((s,p) => s + p.w, 0); let r = Math.random() * tot; for (const p of pool){ if ((r -= p.w) < 0) return p; } return pool[pool.length - 1]; }
function osDailyClaimed(){ return (osLoad().caseDaily || 0) === osDayIndex(); }
function osMarkDaily(){ const d = osLoad(); d.caseDaily = osDayIndex(); osSave(d); }
function osSettings(){ return Object.assign({ confirmRuns: true }, osLoad().settings || {}); }
function osSetSettings(s){ const d = osLoad(); d.settings = Object.assign(osSettings(), s); osSave(d); }
function osEsc(s){ return (s == null ? '' : '' + s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function osWhen(ts){ const d = Date.now() - ts, m = Math.floor(d/60000), h = Math.floor(d/3600000), dy = Math.floor(d/86400000); if (dy > 0) return dy + 'd ago'; if (h > 0) return h + 'h ago'; if (m > 0) return m + 'm ago'; return 'just now'; }
function osDayIndex(){ const d = new Date(), s = new Date(d.getFullYear(), 0, 0); return Math.floor((d - s) / 86400000); }
let osCaseOpenId = null;

function osEnsureStyles(){
  if (document.getElementById('os-app-css')) return;
  const s = document.createElement('style'); s.id = 'os-app-css';
  s.textContent = `
  .osa{margin-top:6px}
  /* ---- case opening (loot wheel) ---- */
  .cr-chip{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:.78rem;color:var(--ink);border:1px solid var(--line-2);border-radius:999px;padding:6px 13px;background:color-mix(in srgb,var(--accent) 8%,transparent)}
  .cr-chip .ico{color:var(--accent)}
  .cr-chip b{color:var(--accent);font-size:.92rem}
  .case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
  @media (max-width:820px){.case-grid{grid-template-columns:1fr}}
  .case-card{position:relative;display:flex;flex-direction:column;gap:8px;padding:18px;border:1px solid var(--line-2);border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(0,0,0,.18));transition:.18s}
  .case-card:hover{border-color:var(--accent);transform:translateY(-3px)}
  .case-card.is-claimed{opacity:.62}
  .cc-top{display:flex;align-items:center;justify-content:space-between;font-family:var(--mono);font-size:.66rem;letter-spacing:.05em}
  .cc-cost{padding:3px 9px;border-radius:999px;border:1px solid var(--line-2);color:var(--muted)}
  .cc-cost.free{color:#4dffa6;border-color:rgba(77,255,166,.4)}
  .cc-cost.claimed{color:var(--faint)}
  .cc-max{font-weight:600}
  .cc-ic{width:52px;height:52px;display:grid;place-items:center;border-radius:12px;background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--accent);margin:4px 0 2px}
  .cc-ic .ico{width:28px;height:28px}
  .case-card h3{font-size:1.08rem}
  .case-card p{color:var(--muted);font-size:.85rem;line-height:1.55;flex:1}
  .cc-open{justify-content:center;margin-top:6px}
  .cc-open:disabled{opacity:.5;cursor:not-allowed;border-color:var(--line-2);color:var(--muted);background:transparent}
  .cc-actions{display:flex;gap:8px;margin-top:6px}
  .cc-actions .cc-open{margin-top:0}
  .cc-actions .primary{flex:1}
  .cc-instant{flex:none;color:var(--muted)}
  .cc-instant:hover{color:var(--accent);border-color:var(--accent)}
  .case-stage{margin:8px 0 4px}
  .reel{position:relative;overflow:hidden;border:1px solid var(--line-2);border-radius:14px;background:radial-gradient(120% 140% at 50% 0,color-mix(in srgb,var(--accent) 10%,transparent),rgba(0,0,0,.35));padding:18px 0}
  .reel-track{display:flex;gap:0;will-change:transform}
  .reel-tile{flex:0 0 96px;height:96px;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border-right:1px solid rgba(255,255,255,.05);border-top:3px solid var(--rc);background:linear-gradient(180deg,color-mix(in srgb,var(--rc) 16%,transparent),transparent 70%)}
  .rt-amt{font-family:var(--mono);font-size:1.15rem;font-weight:700;color:var(--rc)}
  .rt-lbl{font-family:var(--mono);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
  .reel-marker{position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--accent);box-shadow:0 0 14px 2px var(--accent);z-index:3}
  .reel-marker::before,.reel-marker::after{content:"";position:absolute;left:50%;transform:translateX(-50%);border:6px solid transparent}
  .reel-marker::before{top:-1px;border-top-color:var(--accent)}
  .reel-marker::after{bottom:-1px;border-bottom-color:var(--accent)}
  .reel-fade{position:absolute;top:0;bottom:0;width:70px;z-index:2;pointer-events:none}
  .reel-fade.left{left:0;background:linear-gradient(90deg,var(--panel,#0b0b10),transparent)}
  .reel-fade.right{right:0;background:linear-gradient(270deg,var(--panel,#0b0b10),transparent)}
  .reel-result{margin-top:14px;font-family:var(--mono);font-size:.9rem;display:none;align-items:center;gap:9px;padding:12px 15px;border-radius:11px;border:1px solid var(--line-2)}
  .reel-result.show{display:flex}
  .reel-result.win{border-color:var(--rc);color:var(--ink);background:color-mix(in srgb,var(--rc) 12%,transparent)}
  .reel-result.win b{color:var(--rc);font-size:1.05rem}
  .reel-result.zero,.reel-result.err{color:var(--muted)}
  .reel-result .ico{color:var(--accent)}
  .osa-bar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:18px}
  .osa-bar h2{font-size:1.25rem;font-style:italic;transform:skewX(-4deg);transform-origin:left}
  .osa-bar .spacer{margin-left:auto}
  .os-btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;padding:9px 14px;border-radius:9px;border:1px solid var(--line-2);color:var(--ink);background:rgba(255,255,255,.03);cursor:pointer;transition:.15s}
  .os-btn:hover{border-color:var(--accent)}
  .os-btn.primary{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}
  .os-input,.os-textarea{width:100%;background:rgba(0,0,0,.32);border:1px solid var(--line-2);border-radius:9px;color:var(--ink);font-family:var(--mono);font-size:.85rem;padding:11px 13px;outline:none}
  .os-input:focus,.os-textarea:focus{border-color:var(--accent)}
  .os-input:disabled{color:var(--muted)}
  .os-textarea{resize:vertical;min-height:130px;line-height:1.6}
  .osc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}
  .osc-card{border:1px solid var(--line);border-radius:14px;background:rgba(13,13,21,.5);padding:18px;cursor:pointer;transition:.15s;position:relative}
  .osc-card:hover{border-color:var(--accent);box-shadow:0 14px 36px -18px var(--accent)}
  .osc-card h3{font-size:1.05rem;margin-bottom:4px}
  .osc-card .tgt{font-family:var(--mono);font-size:.72rem;color:var(--faint);text-transform:uppercase;letter-spacing:.05em}
  .osc-card .meta{display:flex;gap:14px;margin-top:14px;font-family:var(--mono);font-size:.68rem;color:var(--faint)}
  .os-badge{font-family:var(--mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.06em;padding:3px 8px;border-radius:5px}
  .os-badge.open{background:rgba(34,197,94,.16);color:#7CFFB2}
  .os-badge.closed{background:rgba(255,255,255,.07);color:var(--faint)}
  .os-empty{border:1px dashed var(--line-2);border-radius:14px;padding:42px;text-align:center;color:var(--muted);font-family:var(--mono);font-size:.85rem}
  .os-field{margin-bottom:14px}
  .os-field>label{display:block;font-family:var(--mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.06em;color:var(--faint);margin-bottom:6px}
  .os-row{display:flex;gap:12px;flex-wrap:wrap}
  .os-row>*{flex:1;min-width:170px}
  .actl{display:flex;align-items:center;gap:14px;padding:13px 0;border-bottom:1px dashed var(--line);font-size:.88rem}
  .actl:last-child{border-bottom:none}
  .actl .ic{width:32px;height:32px;border:1px solid var(--line);border-radius:9px;display:grid;place-items:center;color:var(--muted);flex:none}
  .actl .ic .ico{width:16px;height:16px}
  .actl .sub{font-family:var(--mono);font-size:.7rem;color:var(--faint)}
  .actl .when{margin-left:auto;font-family:var(--mono);font-size:.7rem;color:var(--faint);white-space:nowrap}
  .osf-list{display:flex;flex-direction:column;gap:8px;margin-top:10px}
  .osf-item{display:flex;gap:10px;align-items:flex-start;font-size:.86rem;color:var(--ink);background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:9px;padding:10px 12px}
  .osf-item .x{margin-left:auto;color:var(--faint);cursor:pointer;font-family:var(--mono)}
  .osf-item .x:hover{color:var(--pink)}
  .av-lg{width:54px;height:54px;font-size:1.3rem;flex:0 0 auto;border:1px solid var(--accent);color:var(--accent);display:grid;place-items:center;font-family:var(--mono);font-weight:700;border-radius:12px}
  .gh-prof{display:flex;gap:16px;align-items:flex-start;margin:14px 0 8px;flex-wrap:wrap}
  .gh-av{width:74px;height:74px;border-radius:14px;border:1px solid var(--line-2);flex:0 0 auto}
  .gh-name{font-family:var(--display);font-weight:700;font-size:1.3rem;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
  .gh-link{font-family:var(--mono);font-size:.8rem;color:var(--accent)}
  .gh-bio{color:var(--muted);font-size:.9rem;margin-top:4px;max-width:60ch}
  .gh-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
  .gh-tags span{font-family:var(--mono);font-size:.66rem;color:var(--muted);border:1px solid var(--line-2);border-radius:6px;padding:2px 8px}
  .gh-repos{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-top:10px}
  .gh-repo{border:1px solid var(--line);border-radius:10px;padding:12px;background:rgba(255,255,255,.02);display:block}
  .gh-repo:hover{border-color:var(--accent)}
  .gh-repo-h{display:flex;justify-content:space-between;gap:8px;font-family:var(--mono);font-size:.8rem}
  .gh-repo-h b{color:var(--ink)} .gh-repo-h span{color:var(--accent);white-space:nowrap}
  .gh-repo p{color:var(--muted);font-size:.78rem;margin-top:5px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .gh-lang{font-family:var(--mono);font-size:.66rem;color:var(--faint);margin-top:6px;display:inline-block}
  .ipw-head{display:flex;gap:14px;align-items:center;margin:14px 0 10px}
  .ipw-flag{width:46px;height:auto;border-radius:5px;border:1px solid var(--line-2)}
  .ipw-loc{font-family:var(--display);font-weight:700;font-size:1.25rem}
  .ipw-sub{font-family:var(--mono);font-size:.78rem;color:var(--muted);margin-top:2px}
  .ipw-map{width:100%;height:300px;border:1px solid var(--line-2);border-radius:12px;margin:6px 0 4px;display:block}
  .dns-wrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-top:6px}
  .dns-block{border:1px solid var(--line);border-radius:10px;background:rgba(13,13,21,.5);padding:14px}
  .dns-h{font-family:var(--mono);font-size:.74rem;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);margin-bottom:6px}
  .dns-h span{color:var(--faint)}
  .dns-rec{display:flex;justify-content:space-between;gap:10px;font-family:var(--mono);font-size:.8rem;padding:6px 0;border-top:1px dashed var(--line)}
  .dns-rec:first-of-type{border-top:none}
  .dns-v{color:var(--ink);word-break:break-all;min-width:0}
  .dns-v .pri{color:var(--faint)}
  .dns-ttl{color:var(--faint);white-space:nowrap;flex:none}`;
  document.head.appendChild(s);
}

/* ---- Cases ---- */
function osCaseListHTML(){
  const cases = osCases();
  const list = cases.length ? `<div class="osc-grid">${cases.map(c => `
    <div class="osc-card" data-open="${c.id}">
      <span class="os-badge ${c.status}" style="position:absolute;top:15px;right:15px">${c.status}</span>
      <h3>${osEsc(c.title)}</h3>
      <div class="tgt">${osEsc(c.target || 'no target')}</div>
      <div class="meta"><span>${(c.findings || []).length} findings</span><span>${osWhen(c.created)}</span></div>
    </div>`).join('')}</div>` : '<div class="os-empty">No cases yet. Create one to group lookups, notes &amp; findings into an investigation.</div>';
  return `
    <div class="osa-bar"><h2>Cases</h2><span class="spacer"></span><button class="os-btn primary" id="osNewCase"><svg class="ico ico-sm"><use href="#i-plus"/></svg> New case</button></div>
    <div id="osNewCaseForm" style="display:none;margin-bottom:18px">
      <div class="os-row"><input class="os-input" id="ncTitle" placeholder="Case title — e.g. Operation Nightshade"><input class="os-input" id="ncTarget" placeholder="Primary target (optional)"></div>
      <div style="margin-top:10px;display:flex;gap:8px"><button class="os-btn primary" id="ncCreate">Create case</button><button class="os-btn" id="ncCancel">Cancel</button></div>
    </div>${list}`;
}
function osCaseDetailHTML(id){
  const c = osCases().find(x => x.id === id); if (!c) return osCaseListHTML();
  return `
    <div class="osa-bar"><button class="os-btn" id="osBackCases">‹ Back</button><h2 style="margin-left:6px">${osEsc(c.title)}</h2><span class="spacer"></span>
      <button class="os-btn" id="osToggleStatus">${c.status === 'open' ? 'Close case' : 'Reopen'}</button>
      <button class="os-btn" id="osDeleteCase" style="border-color:rgba(244,63,94,.4);color:#ff8da3">Delete</button></div>
    <div class="os-row"><div class="os-field" style="flex:1"><label>Title</label><input class="os-input" id="cdTitle" value="${osEsc(c.title)}"></div><div class="os-field" style="flex:1"><label>Target</label><input class="os-input" id="cdTarget" value="${osEsc(c.target || '')}"></div></div>
    <div class="os-field"><label>Notes</label><textarea class="os-textarea" id="cdNotes" placeholder="Investigation notes — auto-saved…">${osEsc(c.notes || '')}</textarea></div>
    <div class="os-field"><label>Findings</label>
      <div class="os-row"><input class="os-input" id="cdFinding" placeholder="Add a finding or lead…" style="flex:1"><button class="os-btn primary" id="cdAddFinding" style="flex:0 0 auto;min-width:auto">Add</button></div>
      <div class="osf-list" id="cdFindings">${(c.findings || []).map((f, i) => `<div class="osf-item">${osEsc(f)}<span class="x" data-fi="${i}">✕</span></div>`).join('') || '<div style="color:var(--faint);font-family:var(--mono);font-size:.78rem;padding:6px 0">No findings yet.</div>'}</div>
    </div>`;
}
function osWireCases(host){
  const area = host.querySelector('#osCasesArea'); if (!area) return;
  const rerender = () => { area.innerHTML = osCaseOpenId ? osCaseDetailHTML(osCaseOpenId) : osCaseListHTML(); osWireCases(host); };
  const q = sel => area.querySelector(sel);
  const cur = () => osCases().find(x => x.id === osCaseOpenId);
  const save = c => { const cs = osCases(); const i = cs.findIndex(x => x.id === c.id); if (i >= 0) { cs[i] = c; osSetCases(cs); } };
  const nb = q('#osNewCase'); if (nb) nb.addEventListener('click', () => { const f = q('#osNewCaseForm'); f.style.display = f.style.display === 'none' ? 'block' : 'none'; if (f.style.display === 'block') q('#ncTitle').focus(); });
  const nc = q('#ncCancel'); if (nc) nc.addEventListener('click', () => { q('#osNewCaseForm').style.display = 'none'; });
  const ncc = q('#ncCreate'); if (ncc) ncc.addEventListener('click', () => {
    const title = (q('#ncTitle').value || '').trim(); if (!title) { q('#ncTitle').focus(); return; }
    const target = (q('#ncTarget').value || '').trim();
    const cs = osCases(); const c = { id: 'c' + Date.now().toString(36), title, target, status: 'open', notes: '', findings: [], created: Date.now() };
    cs.unshift(c); osSetCases(cs); osLog('i-folder', 'Case created · ' + title, target || 'no target');
    osCaseOpenId = c.id; rerender();
  });
  area.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => { osCaseOpenId = el.dataset.open; rerender(); }));
  const bk = q('#osBackCases'); if (bk) bk.addEventListener('click', () => { osCaseOpenId = null; rerender(); });
  const ti = q('#cdTitle'); if (ti) ti.addEventListener('input', () => { const c = cur(); if (c) { c.title = ti.value; save(c); } });
  const tg = q('#cdTarget'); if (tg) tg.addEventListener('input', () => { const c = cur(); if (c) { c.target = tg.value; save(c); } });
  const nt = q('#cdNotes'); if (nt) nt.addEventListener('input', () => { const c = cur(); if (c) { c.notes = nt.value; save(c); } });
  const ts = q('#osToggleStatus'); if (ts) ts.addEventListener('click', () => { const c = cur(); if (c) { c.status = c.status === 'open' ? 'closed' : 'open'; save(c); osLog('i-folder', 'Case ' + c.status + ' · ' + c.title, ''); rerender(); } });
  const dl = q('#osDeleteCase'); if (dl) dl.addEventListener('click', () => { if (!confirm('Delete this case permanently?')) return; osSetCases(osCases().filter(x => x.id !== osCaseOpenId)); osCaseOpenId = null; rerender(); });
  const fi = q('#cdFinding'); const addF = () => { const v = (fi.value || '').trim(); if (!v) return; const c = cur(); if (c) { c.findings = c.findings || []; c.findings.push(v); save(c); rerender(); } };
  const af = q('#cdAddFinding'); if (af) af.addEventListener('click', addF); if (fi) fi.addEventListener('keydown', e => { if (e.key === 'Enter') addF(); });
  area.querySelectorAll('.osf-item .x').forEach(x => x.addEventListener('click', () => { const c = cur(); if (c) { c.findings.splice(+x.dataset.fi, 1); save(c); rerender(); } }));
}

/* ---- Activity ---- */
function osActivityBody(){
  const a = osActivity();
  const rows = a.length ? a.map(x => `<div class="actl"><span class="ic"><svg class="ico"><use href="#${x.icon || 'i-activity'}"/></svg></span><div><div>${osEsc(x.title)}</div><div class="sub">${osEsc(x.sub)}</div></div><span class="when">${osWhen(x.t)}</span></div>`).join('') : '<div class="os-empty">No activity yet. Create a case or run a lookup and it shows up here.</div>';
  return `<div class="osa"><div class="osa-bar"><h2>Activity</h2><span class="spacer"></span>${a.length ? '<button class="os-btn" id="osClearAct">Clear log</button>' : ''}</div>${rows}</div>`;
}
function osWireActivity(host){ const b = host.querySelector('#osClearAct'); if (b) b.addEventListener('click', () => { const d = osLoad(); d.activity = []; osSave(d); renderOsintModule(); }); }

/* ---- Account ---- */
function osAccountBody(){
  const ac = osAccount(), cs = osCases();
  return `<div class="osa"><div class="osa-bar"><h2>Account</h2></div>
    <div class="os-row" style="align-items:center;margin-bottom:20px;flex-wrap:nowrap"><span class="av-lg">${(ac.name || 'D')[0].toUpperCase()}</span><div style="flex:1"><div style="font-weight:600;font-size:1.15rem">@${osEsc(ac.name)}</div><div style="font-family:var(--mono);font-size:.74rem;color:var(--accent)">● ${osEsc(ac.plan)} · active</div></div></div>
    <div class="osc-grid" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">
      <div class="osc-card" style="cursor:default"><div class="tgt">Plan</div><h3>${osEsc(ac.plan)}</h3></div>
      <div class="osc-card" style="cursor:default"><div class="tgt">Credits</div><h3>${ac.credits} <small style="font-family:var(--mono);font-size:.7rem;color:var(--faint)">CR</small></h3></div>
      <div class="osc-card" style="cursor:default"><div class="tgt">Open cases</div><h3>${cs.filter(c => c.status === 'open').length}</h3></div>
      <div class="osc-card" style="cursor:default"><div class="tgt">Total cases</div><h3>${cs.length}</h3></div>
    </div>
    <a class="os-btn primary" href="shop.html" style="margin-top:18px">Upgrade plan</a></div>`;
}

/* ---- Settings ---- */
function osSettingsBody(){
  const s = osSettings(), ac = osAccount();
  return `<div class="osa"><div class="osa-bar"><h2>Settings</h2></div>
    <div class="os-field"><label>Display name</label><input class="os-input" id="setName" value="${osEsc(ac.name)}" style="max-width:340px"></div>
    <div class="os-field"><label>Confirm before running a paid lookup</label><button class="os-btn" id="setConfirm">${s.confirmRuns ? 'On' : 'Off'}</button></div>
    <div class="os-field"><label>Danger zone</label><button class="os-btn" id="setClear" style="border-color:rgba(244,63,94,.4);color:#ff8da3">Clear all cases, activity &amp; settings</button></div>
    <div style="margin-top:8px;display:flex;align-items:center;gap:12px"><button class="os-btn primary" id="setSave">Save changes</button><span id="setMsg" style="font-family:var(--mono);font-size:.74rem;color:#7CFFB2"></span></div></div>`;
}
function osWireSettings(host){
  const q = s => host.querySelector(s);
  const cf = q('#setConfirm'); if (cf) cf.addEventListener('click', () => { const v = !osSettings().confirmRuns; osSetSettings({ confirmRuns: v }); cf.textContent = v ? 'On' : 'Off'; });
  const sv = q('#setSave'); if (sv) sv.addEventListener('click', () => { const n = (q('#setName').value || '').trim(); if (n) osSetAccount({ name: n }); const m = q('#setMsg'); if (m) { m.textContent = '✓ saved'; setTimeout(() => m.textContent = '', 1800); } });
  const cl = q('#setClear'); if (cl) cl.addEventListener('click', () => { if (!confirm('Erase all OSINT cases, activity and settings?')) return; localStorage.removeItem('nb_osint'); osCaseOpenId = null; renderOsintModule(); });
}

/* ---- Daily Cases ---- */
const OS_DAILY = [
  { title: 'The Phantom Seller', target: '@nightmarket_42', brief: 'A marketplace vendor is running advance-fee scams. Resolve the handle across platforms, link it to an email, and pin down a likely real identity.' },
  { title: 'Leaked Credentials', target: 'admin@acme-corp.com', brief: 'A corporate inbox keeps showing up in pastes. Check it against breach data, list exposed services, and judge how urgent a reset is.' },
  { title: 'Geotag Hunt', target: 'beach_sunset.jpg', brief: 'Estimate where a photo was taken from its visual cues, then corroborate the location against the poster’s other accounts.' },
  { title: 'The Burner Network', target: '+41 79 000 00 00', brief: 'A burner number is tied to several short-lived accounts. Reverse it and map the cluster of identities around it.' },
  { title: 'Repo Footprints', target: 'octocat', brief: 'A developer leaked secrets in old commits. Pull their GitHub footprint, surface emails from commit history, and assess exposure.' },
  { title: 'Infra Recon', target: 'acme-corp.com', brief: 'Map a target company’s external infrastructure: subdomains, open ports, certificates and anything exposed to the internet.' }
];
function osCaseCardHTML(c){
  const max = c.pool.reduce((m,p) => Math.max(m,p.cr), 0);
  const topR = c.pool.reduce((a,p) => p.cr >= a.cr ? p : a, c.pool[0]);
  const claimed = c.daily && osDailyClaimed();
  const cost = c.daily ? (claimed ? 'CLAIMED' : 'FREE') : c.cost + ' CR';
  return `<div class="case-card${claimed ? ' is-claimed' : ''}" data-case="${c.id}">
    <div class="cc-top"><span class="cc-cost ${c.daily ? (claimed ? 'claimed' : 'free') : ''}">${cost}</span>
      <span class="cc-max" style="color:${OS_RARITY[topR.r].c}">up to ${max} CR</span></div>
    <div class="cc-ic"><svg class="ico"><use href="#${c.i}"/></svg></div>
    <h3>${osEsc(c.name)}</h3>
    <p>${osEsc(c.blurb)}</p>
    <div class="cc-actions">
      <button class="os-btn primary cc-open" data-case="${c.id}" data-mode="spin"${claimed ? ' disabled' : ''}>${claimed ? 'Come back tomorrow' : 'Open case'}</button>
      ${claimed ? '' : `<button class="os-btn cc-open cc-instant" data-case="${c.id}" data-mode="instant" title="Skip the spin — open instantly">Instant</button>`}
    </div>
  </div>`;
}
function osDailyBody(){
  return `<div class="osa"><div class="osa-bar"><h2>Cases</h2><span class="spacer"></span>
      <span class="cr-chip"><svg class="ico ico-sm"><use href="#i-credit"/></svg> <b id="crBal" data-cr>${osCredits()}</b> CR</span></div>
    <p style="color:var(--muted);font-size:.92rem;line-height:1.6;max-width:66ch;margin:-2px 0 4px">Open a case to spin the reel and win credits. The daily case is free once a day. Paid cases can pay big, but the odds favour the house — top-tier drops are rare, so grind at your own risk. Hit <b>Instant</b> to skip the spin.</p>
    <div class="case-stage" id="caseStage" hidden>
      <div class="reel"><div class="reel-fade left"></div><div class="reel-fade right"></div><div class="reel-marker"></div><div class="reel-track" id="reelTrack"></div></div>
      <div class="reel-result" id="reelResult" aria-live="polite"></div>
    </div>
    <div class="case-grid">${OS_LOOT_CASES.map(osCaseCardHTML).join('')}</div></div>`;
}
function osCaseTile(prize){
  const r = OS_RARITY[prize.r];
  return `<div class="reel-tile" style="--rc:${r.c}"><div class="rt-amt">${prize.cr}</div><div class="rt-lbl">${r.n}</div></div>`;
}
function osWireDaily(host){
  const stage = host.querySelector('#caseStage'), track = host.querySelector('#reelTrack'),
        result = host.querySelector('#reelResult'), bal = host.querySelector('#crBal');
  let spinning = false;
  host.querySelectorAll('.cc-open').forEach(btn => btn.addEventListener('click', () => {
    if (spinning || btn.disabled) return;
    const c = osCaseById(btn.dataset.case); if (!c) return;
    if (c.daily && osDailyClaimed()) return;
    if (!c.daily && osCredits() < c.cost){
      result.hidden = false; stage.hidden = false;
      result.className = 'reel-result show err';
      result.innerHTML = `<svg class="ico ico-sm"><use href="#i-ban"/></svg> Not enough credits — you need ${c.cost} CR for the ${osEsc(c.name)}.`;
      return;
    }
    const instant = btn.dataset.mode === 'instant';
    // pay / claim
    if (c.cost) osAddCredits(-c.cost);
    if (c.daily) osMarkDaily();
    bal.textContent = osCredits();
    const prize = osPickPrize(c.pool);
    // build a long reel; land the winner near the end under the marker
    const TILE = 96, WIN = 44, LEN = 52;
    const tiles = []; for (let i = 0; i < LEN; i++) tiles.push(i === WIN ? prize : osPickPrize(c.pool));
    track.innerHTML = tiles.map(osCaseTile).join('');
    stage.hidden = false; result.hidden = true; result.className = 'reel-result';
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    const view = stage.querySelector('.reel').clientWidth;
    const jitter = Math.round((Math.random() - 0.5) * (TILE * 0.6));
    const target = -(WIN * TILE + TILE / 2 - view / 2 + jitter);

    const finish = () => {
      if (finish.done) return; finish.done = true;   // resolve exactly once
      spinning = false;
      const r = OS_RARITY[prize.r];
      osAddCredits(prize.cr); bal.textContent = osCredits();
      const won = prize.cr > 0;
      result.hidden = false;
      result.className = 'reel-result show ' + (won ? 'win' : 'zero');
      result.style.setProperty('--rc', r.c);
      result.innerHTML = won
        ? `<svg class="ico ico-sm"><use href="#i-credit"/></svg> <b>+${prize.cr} CR</b> · <span style="color:${r.c}">${r.n}</span> drop from the ${osEsc(c.name)}!`
        : `<svg class="ico ico-sm"><use href="#i-ban"/></svg> Empty case — better luck next spin.`;
      osLog('i-gift', (won ? '+' + prize.cr + ' CR from ' : 'Empty ') + c.name, r.n + ' tier');
      // mark daily card as claimed without a full re-render
      if (c.daily){
        const card = host.querySelector('.case-card[data-case="' + c.id + '"]');
        if (card){ card.classList.add('is-claimed');
          card.querySelectorAll('.cc-open').forEach(b => { b.disabled = true; });
          const pb = card.querySelector('.cc-open[data-mode="spin"]'); if (pb) pb.textContent = 'Come back tomorrow';
          const inst = card.querySelector('.cc-instant'); if (inst) inst.remove();
          const cc = card.querySelector('.cc-cost'); if (cc){ cc.textContent = 'CLAIMED'; cc.className = 'cc-cost claimed'; }
        }
      }
    };

    if (instant){
      // snap straight to the winning tile — no animation
      track.style.transform = 'translateX(' + target + 'px)';
      finish();
      return;
    }

    // animated spin, driven by rAF so it always plays (CSS transitions get
    // stripped by the reduce-motion rule / some file:// renderers).
    spinning = true;
    void track.offsetWidth; // commit the reset transform first
    const DUR = 4800, t0 = performance.now(), ease = x => 1 - Math.pow(1 - x, 3); // easeOutCubic
    const step = now => {
      const p = Math.min(1, (now - t0) / DUR);
      track.style.transform = 'translateX(' + (target * ease(p)) + 'px)';
      if (p < 1) requestAnimationFrame(step); else finish();
    };
    requestAnimationFrame(step);
    // safety net: if rAF is throttled (background/hidden tab) the spin can stall —
    // guarantee the outcome resolves so credits are never left in limbo.
    setTimeout(() => { if (!finish.done){ track.style.transform = 'translateX(' + target + 'px)'; finish(); } }, DUR + 800);
  }));
}

/* subject graph from real entity labels (reuses the fixed node layout) */
function osEntityGraph(center, labels, c){
  const pts = [[300,110],[175,185],[720,140],[920,285],[120,360],[250,470],[555,495],[775,440]];
  labels = labels.slice(0, 8);
  let lines = '', nodes = '';
  labels.forEach((lab, i) => { const p = pts[i];
    lines += `<line x1="500" y1="280" x2="${p[0]}" y2="${p[1]}" stroke="${c}" stroke-opacity=".32" stroke-width="1"/>`;
    nodes += `<g><circle cx="${p[0]}" cy="${p[1]}" r="11" fill="none" stroke="${c}" stroke-opacity=".45"/><circle cx="${p[0]}" cy="${p[1]}" r="5" fill="${c}"><animate attributeName="opacity" values="1;.35;1" dur="3s" begin="${(i*0.3).toFixed(1)}s" repeatCount="indefinite"/></circle><text x="${p[0]}" y="${p[1]-17}" fill="#9a98ad" font-family="monospace" font-size="12" text-anchor="middle">${osEsc(lab)}</text></g>`;
  });
  return `<svg viewBox="0 0 1000 560" style="width:100%;display:block;margin-top:6px"><defs><radialGradient id="oge" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${c}" stop-opacity=".4"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs><ellipse cx="500" cy="280" rx="300" ry="230" fill="url(#oge)"/>${lines}${nodes}<circle cx="500" cy="280" r="34" fill="none" stroke="rgba(255,255,255,.2)"><animate attributeName="r" values="30;88;30" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0;.5" dur="3.4s" repeatCount="indefinite"/></circle><circle cx="500" cy="280" r="34" fill="none" stroke="rgba(255,255,255,.22)"/><circle cx="500" cy="280" r="10" fill="#fff"/><text x="500" y="320" fill="#fff" font-family="monospace" font-size="12" letter-spacing="1" text-anchor="middle">${osEsc(center)}</text></svg>`;
}

/* LIVE GitHub lookup — real data from api.github.com (no key, CORS-enabled) */
function osRunGitHub(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;

  function render(u, repos, langs){
    if (bar) bar.innerHTML = '<i></i> complete';
    const row = (k, v) => v ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
    const joined = u.created_at ? new Date(u.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : '';
    const labels = [];
    if (u.name) labels.push('name'); if (u.location) labels.push('location'); if (u.company) labels.push('company');
    if (u.blog) labels.push('website'); if (u.twitter_username) labels.push('twitter'); if (u.email) labels.push('email');
    labels.push(u.public_repos + ' repos'); labels.push(u.followers + ' followers');
    const repoHTML = repos.length ? `<div class="m-scan-note" style="margin-top:18px">// top repositories</div><div class="gh-repos">${repos.map(rp => `<a class="gh-repo" href="${osEsc(rp.html_url)}" target="_blank" rel="noopener"><div class="gh-repo-h"><b>${osEsc(rp.name)}</b><span>★ ${rp.stargazers_count}</span></div>${rp.description ? `<p>${osEsc(rp.description)}</p>` : ''}${rp.language ? `<span class="gh-lang">${osEsc(rp.language)}</span>` : ''}</a>`).join('')}</div>` : '';
    res.innerHTML = `
      <div class="m-scan-note">// live · resolved @${osEsc(u.login)} from api.github.com</div>
      <div class="gh-prof">
        <img class="gh-av" src="${osEsc(u.avatar_url)}" alt="" loading="lazy">
        <div class="gh-meta"><div class="gh-name">${osEsc(u.name || u.login)} <a class="gh-link" href="${osEsc(u.html_url)}" target="_blank" rel="noopener">@${osEsc(u.login)} ↗</a></div>${u.bio ? `<p class="gh-bio">${osEsc(u.bio)}</p>` : ''}${langs.length ? `<div class="gh-tags">${langs.map(l => `<span>${osEsc(l)}</span>`).join('')}</div>` : ''}</div>
      </div>
      ${osEntityGraph('@' + u.login, labels, gc[0])}
      <div class="m-rows">
        ${row('Location', u.location)}${row('Company', u.company)}${row('Website', u.blog)}${row('Twitter', u.twitter_username ? '@' + u.twitter_username : '')}${row('Email', u.email)}
        <div><span>Followers</span><b>${u.followers}</b></div><div><span>Following</span><b>${u.following}</b></div>
        <div><span>Public repos</span><b>${u.public_repos}</b></div><div><span>Public gists</span><b>${u.public_gists}</b></div>
        ${row('Joined', joined)}<div><span>User ID</span><b>${u.id}</b></div>
      </div>${repoHTML}`;
  }

  async function run(){
    const user = (inp.value || '').trim().replace(/^@/, '').replace(/^https?:\/\/github\.com\//i, '').replace(/\/+$/, '');
    if (!user) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> scanning';
    res.innerHTML = `<div class="m-scan-note">// querying api.github.com for “${osEsc(user)}”…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const r = await fetch('https://api.github.com/users/' + encodeURIComponent(user), { headers: { 'Accept': 'application/vnd.github+json' } });
      if (r.status === 404) { if (bar) bar.innerHTML = '<i></i> no match'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ no GitHub user “${osEsc(user)}” found</div>`; return; }
      if (r.status === 403) { if (bar) bar.innerHTML = '<i></i> rate limited'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ GitHub rate limit reached (60 req/hr unauthenticated). Try again in a bit.</div>`; return; }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const u = await r.json();
      let repos = [];
      try { const rr = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated`); if (rr.ok) repos = await rr.json(); } catch (e) {}
      repos = Array.isArray(repos) ? repos : [];
      const top = repos.filter(x => !x.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
      const langs = [...new Set(repos.map(x => x.language).filter(Boolean))].slice(0, 6);
      render(u, top, langs);
      if (window.osLog) osLog('i-github', 'GitHub lookup · @' + u.login, (u.name || '') + (u.location ? ' · ' + u.location : ''));
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't reach api.github.com${offline ? ' — this page is open from <b>file://</b>. Serve it over http(s) (a local server or host) to run live lookups.' : ' — network or CORS error.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE IP lookup — real geo/ASN/ISP from ipwho.is (no key, CORS) + OpenStreetMap embed */
function osRunIP(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;

  function render(d){
    if (bar) bar.innerHTML = '<i></i> complete';
    const row = (k, v) => (v || v === 0) ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
    const conn = d.connection || {}, tz = d.timezone || {}, flag = (d.flag && d.flag.img) || '';
    const lat = d.latitude, lon = d.longitude;
    const labels = [];
    if (d.country) labels.push(d.country); if (d.city) labels.push(d.city); if (conn.isp) labels.push('ISP');
    if (conn.asn) labels.push('AS' + conn.asn); if (conn.org) labels.push('org'); if (tz.id) labels.push('timezone');
    if (d.postal) labels.push('postal'); labels.push(d.type || 'IP');
    let map = '';
    if (typeof lat === 'number' && typeof lon === 'number') { const b = 0.06; map = `<iframe class="ipw-map" loading="lazy" referrerpolicy="no-referrer" src="https://www.openstreetmap.org/export/embed.html?bbox=${lon-b}%2C${lat-b}%2C${lon+b}%2C${lat+b}&layer=mapnik&marker=${lat}%2C${lon}"></iframe>`; }
    res.innerHTML = `
      <div class="m-scan-note">// live · ${osEsc(d.ip)} via ipwho.is</div>
      <div class="ipw-head">${flag ? `<img class="ipw-flag" src="${osEsc(flag)}" alt="">` : ''}<div><div class="ipw-loc">${osEsc([d.city, d.region, d.country].filter(Boolean).join(', ') || 'Unknown location')}</div><div class="ipw-sub">${osEsc(d.ip)}${d.type ? ' · ' + osEsc(d.type) : ''}${conn.org ? ' · ' + osEsc(conn.org) : ''}</div></div></div>
      ${map}
      ${osEntityGraph(d.ip, labels, gc[0])}
      <div class="m-rows">
        ${row('ISP', conn.isp)}${row('Organization', conn.org)}${row('ASN', conn.asn ? ('AS' + conn.asn) : '')}${row('Domain', conn.domain)}
        ${row('City', d.city)}${row('Region', d.region)}${row('Country', (d.country || '') + (d.country_code ? ' (' + d.country_code + ')' : ''))}${row('Postal', d.postal)}
        ${row('Coordinates', (typeof lat === 'number' && typeof lon === 'number') ? (lat + ', ' + lon) : '')}${row('Timezone', tz.id ? (tz.id + (tz.utc ? ' (' + tz.utc + ')' : '')) : '')}${row('Calling code', d.calling_code ? ('+' + d.calling_code) : '')}
      </div>`;
  }

  async function run(){
    const ip = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
    if (bar) bar.innerHTML = '<i></i> scanning';
    res.innerHTML = `<div class="m-scan-note">// querying ipwho.is for “${osEsc(ip || 'your own IP')}”…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const r = await fetch('https://ipwho.is/' + encodeURIComponent(ip));
      const d = await r.json();
      if (!d || d.success === false) { if (bar) bar.innerHTML = '<i></i> no match'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ ${osEsc((d && d.message) || 'invalid IP address')}</div>`; return; }
      render(d);
      if (window.osLog) osLog('i-server', 'IP lookup · ' + d.ip, [d.city, d.country].filter(Boolean).join(', ') + (d.connection && d.connection.isp ? ' · ' + d.connection.isp : ''));
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't reach ipwho.is${offline ? ' — this page is on <b>file://</b>. Serve it over http(s) to run live lookups.' : ' — network or CORS error.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE DNS recon — real records via dns.google DNS-over-HTTPS (no key, CORS) */
function osRunDNS(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const TYPES = ['A', 'AAAA', 'MX', 'NS', 'TXT', 'CNAME', 'SOA'];
  const NUM = { A: 1, NS: 2, CNAME: 5, SOA: 6, MX: 15, TXT: 16, AAAA: 28 };

  function fmt(type, ans){
    return ans.map(a => {
      let v = a.data;
      if (type === 'MX') { const p = v.split(/\s+/); v = `${osEsc(p[1] || v)} <span class="pri">· prio ${osEsc(p[0] || '')}</span>`; }
      else if (type === 'TXT') v = osEsc(v.replace(/^"|"$/g, '').replace(/"\s+"/g, ''));
      else v = osEsc(v);
      return `<div class="dns-rec"><span class="dns-v">${v}</span><span class="dns-ttl">TTL ${a.TTL}</span></div>`;
    }).join('');
  }
  function render(dom, results){
    if (bar) bar.innerHTML = '<i></i> complete';
    const present = TYPES.filter(t => results[t] && results[t].length);
    if (!present.length) { if (bar) bar.innerHTML = '<i></i> no records'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ no DNS records found for “${osEsc(dom)}” (NXDOMAIN or empty zone)</div>`; return; }
    const blocks = present.map(t => `<div class="dns-block"><div class="dns-h">${t} <span>· ${results[t].length}</span></div>${fmt(t, results[t])}</div>`).join('');
    res.innerHTML = `
      <div class="m-scan-note">// live · ${present.length} record type${present.length > 1 ? 's' : ''} for ${osEsc(dom)} via dns.google (DoH)</div>
      ${osEntityGraph(dom, present.slice(0, 8), gc[0])}
      <div class="dns-wrap">${blocks}</div>`;
  }
  async function run(){
    const dom = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
    if (!dom) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> scanning';
    res.innerHTML = `<div class="m-scan-note">// resolving ${osEsc(dom)} over DNS-over-HTTPS…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const results = {};
      await Promise.all(TYPES.map(async t => {
        try {
          const r = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(dom)}&type=${t}`);
          if (r.ok) { const j = await r.json(); results[t] = (j.Answer || []).filter(a => a.type === NUM[t]); }
        } catch (e) {}
      }));
      render(dom, results);
      const total = Object.values(results).reduce((n, a) => n + (a ? a.length : 0), 0);
      if (total && window.osLog) osLog('i-database', 'DNS recon · ' + dom, total + ' records across ' + Object.keys(results).filter(t => results[t] && results[t].length).length + ' types');
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't reach dns.google${offline ? ' — this page is on <b>file://</b>. Serve it over http(s) to run live lookups.' : ' — network or CORS error.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE Whois — real registration data via RDAP (rdap.org, no key, CORS where the TLD allows it) */
function osRunWhois(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;

  const findEntity = (ents, role) => (ents || []).find(e => (e.roles || []).includes(role));
  const vcardName = ent => { try { const p = ent.vcardArray[1]; const fn = p.find(x => x[0] === 'fn'); return fn ? fn[3] : ''; } catch (e) { return ''; } };
  const eventDate = (events, action) => { const e = (events || []).find(x => x.eventAction === action); return e ? e.eventDate : ''; };
  const fmtDate = iso => { if (!iso) return ''; const d = new Date(iso); return isNaN(d) ? iso : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }); };

  function render(d){
    if (bar) bar.innerHTML = '<i></i> complete';
    const row = (k, v) => v ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
    const reg = findEntity(d.entities, 'registrar'); const regName = reg ? vcardName(reg) : '';
    const created = fmtDate(eventDate(d.events, 'registration'));
    const expires = fmtDate(eventDate(d.events, 'expiration'));
    const updated = fmtDate(eventDate(d.events, 'last changed') || eventDate(d.events, 'last update of RDAP database'));
    const ns = (d.nameservers || []).map(n => (n.ldhName || '').toLowerCase()).filter(Boolean);
    const status = d.status || [];
    const dnssec = d.secureDNS ? (d.secureDNS.delegationSigned ? 'Signed (DNSSEC)' : 'Unsigned') : '';
    const dom = (d.ldhName || '').toLowerCase();
    const labels = []; if (regName) labels.push('registrar'); if (created) labels.push('created'); if (expires) labels.push('expires'); if (ns.length) labels.push(ns.length + ' NS'); if (status.length) labels.push('status'); if (dnssec) labels.push('DNSSEC');
    const nsBlock = ns.length ? `<div class="dns-block"><div class="dns-h">Nameservers <span>· ${ns.length}</span></div>${ns.map(n => `<div class="dns-rec"><span class="dns-v">${osEsc(n)}</span></div>`).join('')}</div>` : '';
    const stBlock = status.length ? `<div class="dns-block"><div class="dns-h">Status <span>· ${status.length}</span></div>${status.map(sx => `<div class="dns-rec"><span class="dns-v">${osEsc(sx)}</span></div>`).join('')}</div>` : '';
    res.innerHTML = `
      <div class="m-scan-note">// live · WHOIS/RDAP for ${osEsc(dom)} via rdap.org</div>
      ${osEntityGraph(dom, labels, gc[0])}
      <div class="m-rows">
        ${row('Domain', dom)}${row('Registrar', regName)}${row('Registered', created)}${row('Expires', expires)}${row('Updated', updated)}${row('DNSSEC', dnssec)}
      </div>
      ${(nsBlock || stBlock) ? `<div class="dns-wrap" style="margin-top:14px">${nsBlock}${stBlock}</div>` : ''}`;
  }

  async function run(){
    const dom = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/^www\./i, '');
    if (!dom) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> scanning';
    res.innerHTML = `<div class="m-scan-note">// looking up registration for ${osEsc(dom)} via RDAP…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const r = await fetch('https://rdap.org/domain/' + encodeURIComponent(dom), { headers: { 'Accept': 'application/rdap+json' } });
      if (r.status === 404) { if (bar) bar.innerHTML = '<i></i> no match'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ no registration found for “${osEsc(dom)}” (unregistered, or this TLD has no RDAP)</div>`; return; }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const d = await r.json();
      render(d);
      if (window.osLog) osLog('i-grid', 'Whois · ' + ((d.ldhName || dom).toLowerCase()), vcardName(findEntity(d.entities, 'registrar') || {}) || '');
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't fetch RDAP${offline ? ' — this page is on <b>file://</b>. Serve it over http(s) to run live lookups.' : ' — this TLD’s RDAP server may block browser (CORS) requests, or a network error occurred.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE exposure scan (Shodan InternetDB, FREE no key) via the backend Worker.
   Powers the Shodan + Port Scan modules: open ports, CVEs, hostnames, tags. */
async function osToIP(hostStr){
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostStr) || hostStr.includes(':')) return hostStr;
  try { const r = await fetch('https://dns.google/resolve?name=' + encodeURIComponent(hostStr) + '&type=A'); const j = await r.json(); const a = (j.Answer || []).find(x => x.type === 1); return a ? a.data : hostStr; } catch (e) { return hostStr; }
}
function osRunShodan(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;

  function block(title, arr){ return arr.length ? `<div class="dns-block"><div class="dns-h">${title} <span>· ${arr.length}</span></div>${arr.map(x => `<div class="dns-rec"><span class="dns-v">${osEsc(x)}</span></div>`).join('')}</div>` : ''; }
  function render(d, ip){
    if (bar) bar.innerHTML = '<i></i> complete';
    const ports = d.ports || [], vulns = d.vulns || [], hosts = d.hostnames || [], tags = d.tags || [], cpes = d.cpes || [];
    const labels = [];
    if (ports.length) labels.push(ports.length + ' ports'); if (vulns.length) labels.push(vulns.length + ' CVEs');
    if (hosts.length) labels.push('hostnames'); if (tags.length) labels.push('tags'); if (cpes.length) labels.push('software');
    res.innerHTML = `
      <div class="m-scan-note">// live · exposed services for ${osEsc(ip)} via Shodan InternetDB (free)</div>
      ${osEntityGraph(ip, labels.length ? labels : ['no exposure'], gc[0])}
      <div class="dns-wrap">${block('Open ports', ports)}${block('Vulnerabilities (CVE)', vulns)}${block('Hostnames', hosts)}${block('Tags', tags)}${block('Software (CPE)', cpes.slice(0, 12))}</div>`;
  }
  async function run(){
    const raw = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
    if (!raw) { inp.focus(); return; }
    if (!osBackend()) { if (bar) bar.innerHTML = '<i></i> needs backend'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ live backend not configured. Deploy the free NULLBYTE OSINT Worker (see <b>nullbyte-backend/worker.js</b>) and set <b>OSINT_BACKEND</b> in js/app.js to your Worker URL.</div>`; return; }
    if (bar) bar.innerHTML = '<i></i> resolving';
    res.innerHTML = `<div class="m-scan-note">// resolving ${osEsc(raw)} &amp; querying Shodan InternetDB…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const ip = await osToIP(raw);
      if (bar) bar.innerHTML = '<i></i> scanning';
      const r = await fetch(osBackend() + '/shodan/' + encodeURIComponent(ip));
      if (r.status === 404) { if (bar) bar.innerHTML = '<i></i> no exposure'; res.innerHTML = `<div class="m-scan-note">// no exposed services indexed for ${osEsc(ip)} — it isn't in Shodan's scan data (often a good sign)</div>`; return; }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const d = await r.json();
      if (d.error) throw new Error(d.error);
      render(d, d.ip || ip);
      if (window.osLog) osLog('i-radar', 'Exposure scan · ' + (d.ip || ip), (d.ports || []).length + ' ports · ' + (d.vulns || []).length + ' CVEs');
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ backend error: ${osEsc(String(err.message || err))}. Check that OSINT_BACKEND points at your deployed Worker.</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE Certificate Lookup — Cert Spotter CT API (FREE, no key, CORS — direct, no backend).
   crt.sh 429s Cloudflare Worker IPs, so we call Cert Spotter straight from the browser.
   Powers the Certificate Lookup module: real subdomains + issuing CAs + recent certs. */
function osRunCrtsh(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn');
  const inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan');
  const bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const caOf = c => { const nm = (c.issuer && c.issuer.name) || c.issuer_name || ''; const m = nm.match(/CN=([^,]+)/); return m ? m[1].trim() : (nm || 'unknown'); };

  function render(domain, data){
    if (bar) bar.innerHTML = '<i></i> complete';
    const names = new Set();
    data.forEach(c => { (c.dns_names || []).forEach(n => { n = (n || '').trim().toLowerCase(); if (n) names.add(n); }); });
    const subs = [...names].filter(n => n === domain || n.endsWith('.' + domain)).sort((a, b) => a.replace('*.', '').localeCompare(b.replace('*.', '')));
    const issuers = {};
    data.forEach(c => { const cn = caOf(c); issuers[cn] = (issuers[cn] || 0) + 1; });
    const issuerList = Object.entries(issuers).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const recent = [...data].sort((a, b) => (b.not_before || '').localeCompare(a.not_before || '')).slice(0, 5);
    const labels = []; if (subs.length) labels.push(subs.length + ' subdomains'); labels.push(data.length + ' certs'); if (issuerList.length) labels.push(issuerList.length + ' CAs');
    const subBlock = subs.length ? `<div class="dns-block"><div class="dns-h">Subdomains <span>· ${subs.length}</span></div>${subs.slice(0, 80).map(s => `<div class="dns-rec"><span class="dns-v">${osEsc(s)}</span></div>`).join('')}${subs.length > 80 ? `<div class="dns-rec"><span class="dns-v" style="color:var(--faint)">+ ${subs.length - 80} more…</span></div>` : ''}</div>` : '';
    const caBlock = issuerList.length ? `<div class="dns-block"><div class="dns-h">Issuing CAs <span>· ${issuerList.length}</span></div>${issuerList.map(([n, c]) => `<div class="dns-rec"><span class="dns-v">${osEsc(n)}</span><span class="dns-ttl">${c}</span></div>`).join('')}</div>` : '';
    const recentBlock = recent.length ? `<div class="dns-block"><div class="dns-h">Recent certificates <span>· ${recent.length}</span></div>${recent.map(c => `<div class="dns-rec"><span class="dns-v">${osEsc((c.dns_names && c.dns_names[0]) || '')} <span style="color:var(--faint)">· ${osEsc(caOf(c))}</span></span><span class="dns-ttl">exp ${osEsc((c.not_after || '').slice(0, 10))}</span></div>`).join('')}</div>` : '';
    res.innerHTML = `
      <div class="m-scan-note">// live · ${data.length} certificates for ${osEsc(domain)} via Cert Spotter (free)</div>
      ${osEntityGraph(domain, labels, gc[0])}
      <div class="dns-wrap">${subBlock}${caBlock}${recentBlock}</div>`;
  }
  async function run(){
    const dom = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/^www\./i, '').toLowerCase();
    if (!dom) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> scanning';
    res.innerHTML = `<div class="m-scan-note">// pulling certificate transparency logs for ${osEsc(dom)}…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const r = await fetch('https://api.certspotter.com/v1/issuances?domain=' + encodeURIComponent(dom) + '&include_subdomains=true&expand=dns_names&expand=issuer');
      if (r.status === 429) { if (bar) bar.innerHTML = '<i></i> rate limited'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ Cert Spotter free rate limit reached — wait a couple of minutes and try again.</div>`; return; }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const data = await r.json();
      if (!Array.isArray(data) || !data.length) { if (bar) bar.innerHTML = '<i></i> no data'; res.innerHTML = `<div class="m-scan-note">// no certificates found in CT logs for ${osEsc(dom)}</div>`; return; }
      render(dom, data);
      const subSet = new Set(); data.forEach(c => (c.dns_names || []).forEach(n => { n = (n || '').trim().toLowerCase(); if (n && (n === dom || n.endsWith('.' + dom))) subSet.add(n); }));
      if (window.osLog) osLog('i-badge', 'Cert lookup · ' + dom, data.length + ' certs · ' + subSet.size + ' subdomains');
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't reach Cert Spotter: ${osEsc(String(err.message || err))}.</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* ============================================================
   MORE LIVE MODULES — all free, keyless, CORS-friendly
   ============================================================ */
const osEnc = encodeURIComponent;
function osLinkGrid(links){
  return `<div class="os-linkgrid">` + links.map(l =>
    `<a href="${osEsc(l.href)}" target="_blank" rel="noopener noreferrer" class="os-link"><div class="os-link-t">${osEsc(l.label)} <svg class="ico ico-sm"><use href="#i-arrow-ur"/></svg></div><div class="os-link-s">${osEsc(l.sub || '')}</div></a>`
  ).join('') + `</div>`;
}
function osInjectLinkCSS(){
  if (document.getElementById('os-link-css')) return;
  const s = document.createElement('style'); s.id = 'os-link-css';
  s.textContent = `.os-linkgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:12px}
  .os-link{display:block;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:linear-gradient(180deg,#0c0c0e,#08080a);text-decoration:none;transition:.15s}
  .os-link:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:0 14px 34px -20px var(--accent)}
  .os-link-t{display:flex;align-items:center;gap:6px;font-weight:600;color:var(--ink);font-size:.92rem}
  .os-link-t .ico{width:13px;height:13px;color:var(--accent)}
  .os-link-s{font-family:var(--mono);font-size:.7rem;color:var(--faint);margin-top:3px}`;
  document.head.appendChild(s);
}

/* LIVE VIN decode — NHTSA vPIC (US DOT, free, keyless, CORS) */
function osRunVIN(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const get = (r, n) => { const x = r.find(v => v.Variable === n); return x && x.Value && x.Value !== 'Not Applicable' ? x.Value : ''; };
  function render(vin, r){
    if (bar) bar.innerHTML = '<i></i> complete';
    const row = (k, v) => v ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
    const make = get(r, 'Make'), model = get(r, 'Model'), year = get(r, 'Model Year');
    const labels = [make, model, year, get(r, 'Body Class'), get(r, 'Fuel Type - Primary'), get(r, 'Plant Country')].filter(Boolean);
    res.innerHTML = `
      <div class="m-scan-note">// live · VIN decoded via NHTSA vPIC (US DOT, free)</div>
      ${osEntityGraph(vin, labels.length ? labels : ['no data'], gc[0])}
      <div class="m-rows">
        ${row('Make', make)}${row('Model', model)}${row('Model year', year)}${row('Trim', get(r, 'Trim'))}
        ${row('Body class', get(r, 'Body Class'))}${row('Vehicle type', get(r, 'Vehicle Type'))}
        ${row('Engine cylinders', get(r, 'Engine Number of Cylinders'))}${row('Displacement (L)', get(r, 'Displacement (L)'))}
        ${row('Fuel type', get(r, 'Fuel Type - Primary'))}${row('Drive type', get(r, 'Drive Type'))}
        ${row('Doors', get(r, 'Doors'))}${row('Plant', [get(r, 'Plant City'), get(r, 'Plant Country')].filter(Boolean).join(', '))}
        ${row('Manufacturer', get(r, 'Manufacturer Name'))}${row('Series', get(r, 'Series'))}
      </div>`;
  }
  async function run(){
    const vin = (inp.value || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!vin) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> decoding';
    res.innerHTML = `<div class="m-scan-note">// decoding VIN ${osEsc(vin)} via NHTSA…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const rq = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + osEnc(vin) + '?format=json');
      if (!rq.ok) throw new Error('HTTP ' + rq.status);
      const j = await rq.json(); const r = j.Results || [];
      if (!get(r, 'Make') && !get(r, 'Manufacturer Name')) { if (bar) bar.innerHTML = '<i></i> no match'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ couldn't decode “${osEsc(vin)}” — a full VIN is 17 characters, or NHTSA has no record for it.</div>`; return; }
      render(vin, r);
      if (window.osLog) osLog('i-car', 'VIN · ' + vin, [get(r, 'Model Year'), get(r, 'Make'), get(r, 'Model')].filter(Boolean).join(' '));
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't reach NHTSA${offline ? ' — this page is on <b>file://</b>. Serve it over http(s) to run live lookups.' : ' — network error.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE Discord snowflake — exact account-creation date decoded client-side (no API) */
function osDiscordDecode(id){
  const snow = BigInt(id), EPOCH = 1420070400000n;
  const created = new Date(Number((snow >> 22n) + EPOCH));
  return { created, worker: Number((snow & 0x3E0000n) >> 17n), process: Number((snow & 0x1F000n) >> 12n), incr: Number(snow & 0xFFFn) };
}
function osRunDiscord(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  function run(){
    const mm = (inp.value || '').trim().match(/\d{15,20}/);
    if (!mm) { if (bar) bar.innerHTML = '<i></i> need ID'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ enter a numeric Discord ID (15–20 digits). In Discord: Settings → Advanced → Developer Mode, then right-click a user → <b>Copy User ID</b>.</div>`; return; }
    const id = mm[0];
    let d; try { d = osDiscordDecode(id); } catch (e) { res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ not a valid snowflake ID</div>`; return; }
    if (bar) bar.innerHTML = '<i></i> complete';
    const row = (k, v) => `<div><span>${k}</span><b>${osEsc(v)}</b></div>`;
    const ageDays = Math.floor((Date.now() - d.created.getTime()) / 86400000);
    res.innerHTML = `
      <div class="m-scan-note">// resolved · Discord snowflake decoded client-side — the creation date is exact</div>
      ${osEntityGraph(id, ['created', d.created.getFullYear() + '', ageDays + 'd old', 'worker ' + d.worker], gc[0])}
      <div class="m-rows">
        ${row('Discord ID', id)}
        ${row('Account created', d.created.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' }))}
        ${row('Account age', ageDays.toLocaleString() + ' days (' + (ageDays / 365).toFixed(1) + ' yrs)')}
        ${row('Internal worker', d.worker)}${row('Internal process', d.process)}${row('Increment', d.incr)}
      </div>
      <div class="m-scan-note" style="margin-top:12px;color:var(--faint)">Live username/avatar requires Discord's authenticated API (a bot token) and can't be fetched from the browser.</div>`;
    if (window.osLog) osLog('i-message', 'Discord ID · ' + id, 'created ' + d.created.toISOString().slice(0, 10));
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* shared email probe — Gravatar (SHA-256) + MX provider, all live/keyless/CORS */
async function osEmailProbe(email){
  email = email.trim().toLowerCase();
  const domain = email.split('@')[1] || '';
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email));
  const hash = [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  let grav = null;
  try { const r = await fetch('https://gravatar.com/' + hash + '.json'); if (r.ok) { const j = await r.json(); grav = (j.entry && j.entry[0]) || null; } } catch (e) {}
  let mx = [];
  try { const r = await fetch('https://dns.google/resolve?name=' + osEnc(domain) + '&type=MX'); const j = await r.json(); mx = (j.Answer || []).filter(a => a.type === 15).map(a => a.data.split(/\s+/).pop().replace(/\.$/, '').toLowerCase()); } catch (e) {}
  const mxStr = mx.join(' ');
  let provider = mx[0] || '';
  if (/google|aspmx|googlemail/.test(mxStr)) provider = 'Google Workspace / Gmail';
  else if (/outlook|microsoft|protection\.outlook/.test(mxStr)) provider = 'Microsoft 365 / Outlook';
  else if (/proton/.test(mxStr)) provider = 'Proton Mail';
  else if (/zoho/.test(mxStr)) provider = 'Zoho Mail';
  else if (/icloud|apple/.test(mxStr)) provider = 'Apple iCloud';
  else if (/yahoodns|yahoo/.test(mxStr)) provider = 'Yahoo';
  return { email, domain, hash, grav, mx, provider };
}
function osRunEmail(host, gc){
  osEnsureStyles(); osInjectLinkCSS();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  async function run(){
    const email = (inp.value || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { if (bar) bar.innerHTML = '<i></i> bad format'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ that isn't a valid email address.</div>`; return; }
    if (bar) bar.innerHTML = '<i></i> probing';
    res.innerHTML = `<div class="m-scan-note">// hashing ${osEsc(email)} &amp; checking Gravatar + mail records…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const p = await osEmailProbe(email);
      if (bar) bar.innerHTML = '<i></i> complete';
      const row = (k, v) => v ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
      const g = p.grav;
      const gAccounts = g && g.accounts ? g.accounts.map(a => a.shortname || a.name).filter(Boolean) : [];
      const labels = ['MX ' + (p.mx.length ? '✓' : '✗'), p.provider || 'mail', g ? 'gravatar ✓' : 'no gravatar'];
      if (gAccounts.length) labels.push(gAccounts.length + ' linked');
      const gravBlock = g ? `
        <div class="gh-prof">
          ${g.thumbnailUrl ? `<img class="gh-av" src="${osEsc(g.thumbnailUrl)}?s=148" alt="">` : ''}
          <div><div class="gh-name">${osEsc(g.displayName || g.preferredUsername || 'Gravatar user')}</div>
          ${g.profileUrl ? `<a class="gh-link" href="${osEsc(g.profileUrl)}" target="_blank" rel="noopener">${osEsc(g.profileUrl.replace(/^https?:\/\//, ''))}</a>` : ''}
          ${g.aboutMe ? `<div class="gh-bio">${osEsc(g.aboutMe)}</div>` : ''}</div>
        </div>
        ${gAccounts.length ? `<div class="dns-block" style="margin-top:6px"><div class="dns-h">Linked accounts <span>· ${gAccounts.length}</span></div>${g.accounts.map(a => `<div class="dns-rec"><span class="dns-v">${osEsc(a.shortname || a.name)}</span><span class="dns-ttl">${osEsc((a.url || '').replace(/^https?:\/\//, '').slice(0, 40))}</span></div>`).join('')}</div>` : ''}` : '';
      res.innerHTML = `
        <div class="m-scan-note">// live · Gravatar (SHA-256) + mail-server records for ${osEsc(email)}</div>
        ${osEntityGraph(email, labels, gc[0])}
        ${gravBlock}
        <div class="m-rows">
          ${row('Mail provider', p.provider)}${row('Accepts mail (MX)', p.mx.length ? 'Yes · ' + p.mx.length + ' server' + (p.mx.length > 1 ? 's' : '') : 'No MX record')}
          ${row('Primary MX', p.mx[0] || '')}${row('Gravatar profile', g ? 'Found' : 'None')}
        </div>
        ${!g ? `<div class="m-scan-note" style="margin-top:10px;color:var(--faint)">No public Gravatar — the address may still be valid (it has mail records). Pivot to breach databases below.</div>` : ''}
        ${osLinkGrid([
          { href: 'https://haveibeenpwned.com/', label: 'Have I Been Pwned', sub: 'breach exposure (paste email)' },
          { href: 'https://intelx.io/?s=' + osEnc(email), label: 'Intelligence X', sub: 'leaks & pastes' },
          { href: 'https://epieos.com/?q=' + osEnc(email), label: 'Epieos', sub: 'Google/registered-services' },
          { href: 'https://www.google.com/search?q=' + osEnc('"' + email + '"'), label: 'Google', sub: 'exact-match mentions' }
        ])}`;
      if (window.osLog) osLog('i-mail', 'Email · ' + email, (g ? (g.displayName || 'Gravatar') + ' · ' : '') + (p.provider || (p.mx.length ? 'has MX' : 'no MX')));
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ probe failed${offline ? ' — this page is on <b>file://</b>. Serve it over http(s) to run live lookups.' : ': ' + osEsc(String(err.message || err))}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE Network/infrastructure — DNS (DoH) + ASN/geo (ipwho.is), combined map */
function osRunNetwork(host, gc){
  osEnsureStyles();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const doh = async (name, type, num) => { try { const r = await fetch('https://dns.google/resolve?name=' + osEnc(name) + '&type=' + type); const j = await r.json(); return (j.Answer || []).filter(a => a.type === num).map(a => a.data); } catch (e) { return []; } };
  async function run(){
    const dom = (inp.value || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/^www\./i, '').toLowerCase();
    if (!dom) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> mapping';
    res.innerHTML = `<div class="m-scan-note">// mapping infrastructure for ${osEsc(dom)}…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    try {
      const [a, aaaa, mx, ns] = await Promise.all([doh(dom, 'A', 1), doh(dom, 'AAAA', 28), doh(dom, 'MX', 15), doh(dom, 'NS', 2)]);
      if (!a.length && !aaaa.length && !ns.length) { if (bar) bar.innerHTML = '<i></i> no records'; res.innerHTML = `<div class="m-scan-note" style="color:var(--pink)">✗ no infrastructure found for “${osEsc(dom)}” (NXDOMAIN)</div>`; return; }
      let host_ip = null;
      if (a[0]) { try { const r = await fetch('https://ipwho.is/' + osEnc(a[0])); const d = await r.json(); if (d && d.success !== false) host_ip = d; } catch (e) {} }
      if (bar) bar.innerHTML = '<i></i> complete';
      const conn = (host_ip && host_ip.connection) || {};
      const row = (k, v) => v ? `<div><span>${k}</span><b>${osEsc(v)}</b></div>` : '';
      const block = (t, arr, map) => arr.length ? `<div class="dns-block"><div class="dns-h">${t} <span>· ${arr.length}</span></div>${arr.map(x => `<div class="dns-rec"><span class="dns-v">${osEsc(map ? map(x) : x)}</span></div>`).join('')}</div>` : '';
      const labels = [];
      if (a.length) labels.push(a.length + '× A'); if (aaaa.length) labels.push('IPv6'); if (mx.length) labels.push('mail'); if (ns.length) labels.push(ns.length + ' NS');
      if (conn.asn) labels.push('AS' + conn.asn); if (conn.org) labels.push('host');
      res.innerHTML = `
        <div class="m-scan-note">// live · DNS via dns.google + hosting via ipwho.is for ${osEsc(dom)}</div>
        ${osEntityGraph(dom, labels, gc[0])}
        <div class="m-rows">
          ${row('Primary IP', a[0] || '')}${row('Hosting ISP', conn.isp)}${row('Organization', conn.org)}
          ${row('ASN', conn.asn ? ('AS' + conn.asn) : '')}${row('Datacenter', [host_ip && host_ip.city, host_ip && host_ip.country].filter(Boolean).join(', '))}${row('Mail provider', mx[0] ? mx[0].split(/\s+/).pop().replace(/\.$/, '') : '')}
        </div>
        <div class="dns-wrap" style="margin-top:14px">
          ${block('IPv4 (A)', a)}${block('IPv6 (AAAA)', aaaa)}${block('Mail (MX)', mx, x => x.split(/\s+/).pop().replace(/\.$/, ''))}${block('Nameservers (NS)', ns, x => x.replace(/\.$/, ''))}
        </div>`;
      if (window.osLog) osLog('i-network', 'Network · ' + dom, (a[0] || '') + (conn.org ? ' · ' + conn.org : ''));
    } catch (err) {
      if (bar) bar.innerHTML = '<i></i> error';
      const offline = location.protocol === 'file:';
      res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't map ${osEsc(dom)}${offline ? ' — this page is on <b>file://</b>. Serve it over http(s).' : ' — network error.'}</div>`;
    }
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* LIVE Username search — verifies GitHub (CORS) + builds a launch grid across platforms */
function osRunUsernames(host, gc){
  osEnsureStyles(); osInjectLinkCSS();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  async function run(){
    const u = (inp.value || '').trim().replace(/^@/, '');
    if (!u) { inp.focus(); return; }
    if (bar) bar.innerHTML = '<i></i> checking';
    res.innerHTML = `<div class="m-scan-note">// checking “${osEsc(u)}” across platforms…</div><div class="m-skel"><span></span><span></span><span></span></div>`;
    let gh = null;
    try { const r = await fetch('https://api.github.com/users/' + osEnc(u)); if (r.ok) gh = await r.json(); } catch (e) {}
    if (bar) bar.innerHTML = '<i></i> complete';
    const sites = [
      { n: 'GitHub', u: 'https://github.com/' + u, s: gh ? '✓ EXISTS — ' + (gh.public_repos || 0) + ' repos' : 'checked (not found)' },
      { n: 'Reddit', u: 'https://www.reddit.com/user/' + u, s: 'profile page' },
      { n: 'X / Twitter', u: 'https://x.com/' + u, s: 'profile page' },
      { n: 'Instagram', u: 'https://www.instagram.com/' + u + '/', s: 'profile page' },
      { n: 'TikTok', u: 'https://www.tiktok.com/@' + u, s: 'profile page' },
      { n: 'Twitch', u: 'https://www.twitch.tv/' + u, s: 'profile page' },
      { n: 'YouTube', u: 'https://www.youtube.com/@' + u, s: 'channel' },
      { n: 'Telegram', u: 'https://t.me/' + u, s: 'profile page' },
      { n: 'Steam', u: 'https://steamcommunity.com/id/' + u, s: 'profile page' },
      { n: 'Keybase', u: 'https://keybase.io/' + u, s: 'crypto identity' },
      { n: 'Sherlock (all sites)', u: 'https://www.google.com/search?q=' + osEnc('"' + u + '" site:github.com OR site:reddit.com OR site:twitter.com'), s: 'cross-site dork' }
    ];
    const ghBlock = gh ? `
      <div class="gh-prof">
        <img class="gh-av" src="${osEsc(gh.avatar_url)}&s=148" alt="">
        <div><div class="gh-name">${osEsc(gh.name || gh.login)} <a class="gh-link" href="${osEsc(gh.html_url)}" target="_blank" rel="noopener">@${osEsc(gh.login)}</a></div>
        ${gh.bio ? `<div class="gh-bio">${osEsc(gh.bio)}</div>` : ''}
        <div class="dns-h" style="margin-top:8px">${gh.public_repos} repos · ${gh.followers} followers${gh.location ? ' · ' + osEsc(gh.location) : ''}</div></div>
      </div>` : '';
    res.innerHTML = `
      <div class="m-scan-note">// live · GitHub verified via API; other links open the real profile URL for “${osEsc(u)}”</div>
      ${osEntityGraph(u, [gh ? 'github ✓' : 'handle', 'social', '11 sites'], gc[0])}
      ${ghBlock}
      ${osLinkGrid(sites.map(s => ({ href: s.u, label: s.n, sub: s.s })))}
      <div class="m-scan-note" style="margin-top:12px;color:var(--faint)">Browsers can't auto-check most sites (CORS) — these open the exact profile URL so you can confirm in one click. GitHub is verified live above.</div>`;
    if (window.osLog) osLog('i-at', 'Usernames · ' + u, gh ? 'GitHub found: ' + gh.login : 'link grid built');
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* Honest pivot fallback — replaces the old fake random generator.
   No fabricated "confidence" numbers: real, query-filled links to the right tool. */
function osRunManual(host, gc, key, m){
  osEnsureStyles(); osInjectLinkCSS();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const G = (q, extra) => ({ href: 'https://www.google.com/search?q=' + osEnc((extra ? extra + ' ' : '') + '"' + q + '"'), label: 'Google', sub: 'exact-match search' });
  const MAP = {
    phone: q => [G(q), { href: 'https://www.numlookup.com/?q=' + osEnc(q), label: 'NumLookup', sub: 'free carrier/line lookup' }, { href: 'https://www.truecaller.com/search/us/' + osEnc(q.replace(/\D/g, '')), label: 'Truecaller', sub: 'caller-ID name' }],
    address: q => [{ href: 'https://www.google.com/maps/search/' + osEnc(q), label: 'Google Maps', sub: 'locate + street view' }, G(q), { href: 'https://www.melissa.com/v2/lookups/addresscheck/address/?address=' + osEnc(q), label: 'Melissa', sub: 'address verification' }],
    person: q => [G(q), { href: 'https://www.google.com/search?q=' + osEnc('"' + q + '" site:linkedin.com'), label: 'LinkedIn (dork)', sub: 'professional profile' }, { href: 'https://thatsthem.com/name/' + osEnc(q.replace(/\s+/g, '-')), label: 'ThatsThem', sub: 'free people search' }, { href: 'https://www.fastpeoplesearch.com/name/' + osEnc(q.replace(/\s+/g, '-')), label: 'FastPeopleSearch', sub: 'US records' }],
    reverse: q => [G(q), { href: 'https://thatsthem.com/search?q=' + osEnc(q), label: 'ThatsThem', sub: 'reverse anything' }, { href: 'https://epieos.com/?q=' + osEnc(q), label: 'Epieos', sub: 'email/phone → accounts' }],
    'web-databases': q => [{ href: 'https://haveibeenpwned.com/', label: 'Have I Been Pwned', sub: 'breach exposure' }, { href: 'https://intelx.io/?s=' + osEnc(q), label: 'Intelligence X', sub: 'leaks & pastes' }, { href: 'https://dehashed.com/search?query=' + osEnc(q), label: 'DeHashed', sub: 'credential search' }],
    stealerlogs: q => [{ href: 'https://www.hudsonrock.com/free-tools', label: 'Hudson Rock (free)', sub: 'infostealer check' }, { href: 'https://intelx.io/?s=' + osEnc(q), label: 'Intelligence X', sub: 'stealer logs & leaks' }],
    'hudson-rock': q => [{ href: 'https://www.hudsonrock.com/free-tools', label: 'Hudson Rock (free)', sub: 'compromised-machine check' }, G(q)],
    'machine-viewer': q => [{ href: 'https://www.hudsonrock.com/free-tools', label: 'Hudson Rock (free)', sub: 'machine records' }],
    seon: q => [{ href: 'https://epieos.com/?q=' + osEnc(q), label: 'Epieos', sub: 'digital footprint' }, G(q)],
    gmail: q => [{ href: 'https://epieos.com/?q=' + osEnc(q), label: 'Epieos', sub: 'Google account + reviews/photos' }, { href: 'https://haveibeenpwned.com/', label: 'HIBP', sub: 'breaches' }],
    intelx: q => [{ href: 'https://intelx.io/?s=' + osEnc(q), label: 'Intelligence X', sub: 'search selectors' }],
    'reverse-face': q => [{ href: 'https://lens.google.com/uploadbyurl?url=' + osEnc(q), label: 'Google Lens', sub: 'reverse image (URL)' }, { href: 'https://yandex.com/images/search?rpt=imageview&url=' + osEnc(q), label: 'Yandex Images', sub: 'best for faces' }, { href: 'https://pimeyes.com/en', label: 'PimEyes', sub: 'face search engine' }],
    'image-geo': q => [{ href: 'https://lens.google.com/uploadbyurl?url=' + osEnc(q), label: 'Google Lens', sub: 'identify the place' }, { href: 'https://yandex.com/images/search?rpt=imageview&url=' + osEnc(q), label: 'Yandex Images', sub: 'landmark match' }, { href: 'https://www.geoguessr.com/', label: 'GeoHints', sub: 'geolocation clues' }],
    tiktok: q => [{ href: 'https://www.tiktok.com/@' + osEnc(q.replace(/^@/, '')), label: 'TikTok profile', sub: 'open @' + q.replace(/^@/, '') }, { href: 'https://www.google.com/search?q=' + osEnc('site:tiktok.com ' + q), label: 'Google', sub: 'indexed content' }],
    'tiktok-osint': q => [{ href: 'https://www.tiktok.com/@' + osEnc(q.replace(/^@/, '')), label: 'TikTok profile', sub: 'open @' + q.replace(/^@/, '') }, { href: 'https://urlebird.com/user/' + osEnc(q.replace(/^@/, '')), label: 'Urlebird', sub: 'TikTok viewer/history' }],
    instagram: q => [{ href: 'https://www.instagram.com/' + osEnc(q.replace(/^@/, '')) + '/', label: 'Instagram profile', sub: 'open @' + q.replace(/^@/, '') }, { href: 'https://imginn.com/' + osEnc(q.replace(/^@/, '')) + '/', label: 'Imginn', sub: 'anonymous IG viewer' }],
    roblox: q => [{ href: 'https://www.roblox.com/search/users?keyword=' + osEnc(q), label: 'Roblox search', sub: 'find the profile' }, { href: 'https://rblx.trade/p/' + osEnc(q), label: 'Rolimons', sub: 'trade/value history' }],
    'roblox-scraper': q => [{ href: 'https://www.roblox.com/search/users?keyword=' + osEnc(q), label: 'Roblox search', sub: 'find profile' }],
    'double-counter': q => [{ href: 'https://www.google.com/search?q=' + osEnc('discord ' + q), label: 'Google', sub: 'mentions' }],
    'discord-alt': q => [{ href: 'https://www.google.com/search?q=' + osEnc('discord ' + q), label: 'Google', sub: 'mentions' }]
  };
  function run(){
    const q = (inp.value || '').trim();
    if (!q) { inp.focus(); return; }
    const links = (MAP[key] || (qq => [G(qq)]))(q);
    if (bar) bar.innerHTML = '<i></i> pivots ready';
    res.innerHTML = `
      <div class="m-scan-note">// ${osEsc(m.l)} — no free automated API exists for this data type. Pivot to these vetted sources for “${osEsc(q)}”:</div>
      ${osLinkGrid(links)}
      <div class="m-scan-note" style="margin-top:14px;color:var(--faint)">Each link opens the real tool with your query pre-filled. Full in-app automation would need a paid data provider or the OSINT backend Worker.</div>`;
    if (window.osLog) osLog(m.i, m.l + ' · pivot', q);
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

/* Universal search — detect the identifier type and run the matching live module */
function osRunUniversal(host, gc){
  osEnsureStyles(); osInjectLinkCSS();
  const btn = host.querySelector('.m-console .btn'), inp = host.querySelector('.m-input');
  const res = host.querySelector('.m-results .m-scan'), bar = host.querySelector('.m-results .m-rstatus');
  if (!btn || !inp || !res) return;
  const detect = q => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q)) return 'email';
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(q) || (q.includes(':') && /[0-9a-f]/i.test(q))) return 'ip';
    if (/^\d{15,20}$/.test(q)) return 'discord';
    if (/^[A-HJ-NPR-Z0-9]{17}$/i.test(q)) return 'vin';
    if (/^[a-z0-9-]+(\.[a-z]{2,})+$/i.test(q)) return 'domain';
    if (/^@?[a-z0-9_.-]{2,30}$/i.test(q)) return 'username';
    return 'unknown';
  };
  function run(){
    const q = (inp.value || '').trim();
    if (!q) { inp.focus(); return; }
    const t = detect(q);
    const routes = { email: 'email', ip: 'ip', discord: 'discord', vin: 'vin', domain: 'network', username: 'usernames' };
    const target = routes[t];
    if (!target) { if (bar) bar.innerHTML = '<i></i> unknown'; res.innerHTML = `<div class="m-scan-note" style="color:#ffd9a0">⚠ couldn't classify “${osEsc(q)}”. Try an email, domain, IP, username, VIN or Discord ID — or use a specific module from the sidebar.</div>`; return; }
    const nm = OS[target].l;
    if (bar) bar.innerHTML = '<i></i> routing';
    res.innerHTML = `<div class="m-scan-note">// detected <b>${t}</b> — running <b>${osEsc(nm)}</b> on “${osEsc(q)}”…</div>`;
    // hand off to the matching live module, pre-filled
    sessionStorage.setItem('os_prefill', q);
    location.hash = '#' + target;
  }
  btn.addEventListener('click', e => { e.preventDefault(); run(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
}

function renderOsintModule(){
  const host = document.getElementById('moduleContent'); if(!host) return;
  const key = location.hash.slice(1) || 'phone';
  if (key !== 'cases') osCaseOpenId = null;
  const m = OS[key] || {l:'Module',i:'i-search',d:'',c:1,fl:'Query',ph:'…'};
  const grp = osGroup(key);
  renderOsintSidebar(key);
  // retint the whole shell + background to this feature's colour
  const gc = osColor(grp), bs = document.body.style;
  bs.setProperty('--violet', gc[0]);
  bs.setProperty('--violet-2', gc[1]);
  bs.setProperty('--fuchsia', gc[1]);
  bs.setProperty('--grad', `linear-gradient(120deg, ${gc[0]}, ${gc[1]})`);
  bs.setProperty('--glow-sm', `0 10px 36px -14px ${gc[0]}99`);
  bs.backgroundColor = '#08070d';
  bs.backgroundImage = `radial-gradient(1100px 820px at 100% -8%, ${gc[0]}4d, transparent 62%), radial-gradient(950px 780px at -10% 112%, ${gc[1]}40, transparent 60%), radial-gradient(900px 760px at 48% 42%, ${gc[0]}24, transparent 72%), radial-gradient(620px 600px at 18% 24%, ${gc[1]}1f, transparent 66%)`;
  const skel = '<div class="m-skel"><span></span><span></span><span></span><span></span><span></span></div>';
  let body;
  if(m.type === 'section'){
    osEnsureStyles();
    if (key === 'cases') body = `<div class="osa" id="osCasesArea">${osCaseOpenId ? osCaseDetailHTML(osCaseOpenId) : osCaseListHTML()}</div>`;
    else if (key === 'activity') body = osActivityBody();
    else if (key === 'account') body = osAccountBody();
    else if (key === 'settings') body = osSettingsBody();
    else if (key === 'daily-cases') body = osDailyBody();
    else body = `
      <div class="m-panel m-results">
        <div class="m-rbar"><span>${m.l}</span><span class="m-rstatus"><i></i> prototype</span></div>
        <div class="m-scan"><div class="m-scan-note">// ${m.l.toLowerCase()} — layout prototype, no live data yet</div>${skel}</div>
      </div>`;
  } else {
    body = `
      <div class="m-panel m-console">
        <div class="m-phead">${m.fl}</div>
        <div class="m-inputrow">
          <span class="m-prompt">&rsaquo;</span>
          <input class="m-input" type="text" placeholder="${m.ph}">
          <button class="btn btn-primary"><svg class="ico"><use href="#i-search"/></svg> Run · ${m.c} cr</button>
        </div>
        <div class="m-opts">${m.live ? '<span class="chip"><span class="dot"></span>Live data</span>' : '<span class="chip">Pivot links</span>'}<span class="chip">Client-side</span><span class="chip">Keyless</span></div>
      </div>
      <div class="m-panel m-results">
        <div class="m-rbar"><span>Results</span><span class="m-rstatus"><i></i> awaiting query</span></div>
        <div class="m-scan"><div class="m-scan-note">// no data — enter a ${m.fl.toLowerCase()} and run the lookup</div>${skel}</div>
      </div>`;
  }
  host.innerHTML = `
    <div class="m-crumbs"><a href="osint.html">OSINT</a> / ${grp} / <span>${m.l}</span></div>
    <div class="m-head">
      <div class="m-ic"><svg class="ico ico-lg"><use href="#${m.i}"/></svg></div>
      <div class="m-headtext"><div class="m-kick">// ${grp}</div><h1 class="m-title">${m.l}</h1><p class="m-desc">${m.d}</p></div>
      ${m.c?`<span class="m-cost">${m.c} CR</span>`:''}
    </div>
    ${body}`;

  if (m.type === 'section') {
    if (key === 'cases') osWireCases(host);
    else if (key === 'activity') osWireActivity(host);
    else if (key === 'settings') osWireSettings(host);
    else if (key === 'daily-cases') osWireDaily(host);
  }

  // pre-fill from Universal-search hand-off, if any
  const inpEl = host.querySelector('.m-input');
  if (inpEl) { const pf = sessionStorage.getItem('os_prefill'); if (pf) { inpEl.value = pf; sessionStorage.removeItem('os_prefill'); } }

  // Charge credits per lookup. This gate is wired BEFORE the run handlers below,
  // so it fires first: it funnels Enter through the button (charge once, not twice),
  // blocks the run when the balance is short, and deducts the cost on a real search.
  const runBtn = host.querySelector('.m-console .btn');
  const inGate = host.querySelector('.m-input');
  if (runBtn && inGate && m.c) {
    runBtn.addEventListener('click', (e) => {
      if (!inGate.value.trim()) return;                 // empty query → let the run fn prompt, no charge
      if (osCredits() < m.c) {                           // not enough credits → block the lookup
        e.preventDefault(); e.stopImmediatePropagation();
        const sc = host.querySelector('.m-results .m-scan'), rb = host.querySelector('.m-results .m-rstatus');
        if (rb) rb.innerHTML = '<i></i> blocked';
        if (sc) sc.innerHTML = `<div class="m-scan-note" style="color:#ff8da3">// not enough credits — this lookup costs ${m.c} CR (you have ${osCredits()}). <a href="shop.html" style="color:var(--accent)">Add credits</a> or open a free daily case.</div>`;
        return;
      }
      osAddCredits(-m.c);                                 // pay for the lookup (updates every credit readout)
    });
    inGate.addEventListener('keydown', (e) => {          // route Enter through the button so it charges once
      if (e.key === 'Enter') { e.preventDefault(); e.stopImmediatePropagation(); runBtn.click(); }
    });
  }

  // wire the Run button — every module now does REAL work (live API, client-side
  // decode, or an honest pivot to the right tool). No fabricated data.
  const LIVE = {
    github: osRunGitHub, ip: osRunIP, dns: osRunDNS, whois: osRunWhois,
    shodan: osRunShodan, port: osRunShodan, cert: osRunCrtsh,
    vin: osRunVIN, discord: osRunDiscord, 'discord-alt': osRunDiscord, 'double-counter': osRunDiscord,
    email: osRunEmail, 'email-osint': osRunEmail, network: osRunNetwork, usernames: osRunUsernames,
    universal: osRunUniversal
  };
  if (LIVE[key]) { LIVE[key](host, gc); if (inpEl && inpEl.value.trim()) host.querySelector('.m-console .btn').click(); return; }
  // everything else: honest pivot fallback (real query-filled links, no fake scores)
  osRunManual(host, gc, key, m);
  if (inpEl && inpEl.value.trim()) host.querySelector('.m-console .btn').click();
}
renderOsintSidebar(document.body.dataset.osintActive || (location.hash.slice(1) || 'phone'));
renderOsintModGrid();
renderOsintModule();
osRefreshCreditUI();   // fill the static credit readouts (dashboard/topbar/sidebar) from the real balance
window.addEventListener('hashchange', () => { renderOsintModule(); window.scrollTo(0,0); });

/* ---- OSINT search: sidebar filter + topbar command ---- */
(() => {
  const side = document.querySelector('[data-side-search]');
  if (side) side.addEventListener('input', () => {
    const q = side.value.toLowerCase().trim();
    document.querySelectorAll('#osintSideNav .nitem').forEach((a) => {
      a.style.display = a.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
    document.querySelectorAll('#osintSideNav .sgroup').forEach((g) => {
      const any = [...g.querySelectorAll('.nitem')].some((a) => a.style.display !== 'none');
      g.style.display = any ? '' : 'none';
    });
  });

  const top = document.querySelector('[data-osint-search]');
  if (top) {
    const grid = () => document.querySelectorAll('#osintModGrid .mod');
    top.addEventListener('input', () => {
      const q = top.value.toLowerCase().trim();
      grid().forEach((m) => {
        const name = (m.querySelector('h3')?.textContent || '').toLowerCase();
        m.style.display = name.includes(q) ? '' : 'none';
      });
    });
    top.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const q = top.value.toLowerCase().trim();
      if (!q) return;
      const key = Object.keys(OS).find((k) => !OS[k].href && OS[k].type !== 'section' && OS[k].l.toLowerCase().includes(q));
      if (key) location.href = osHref(key);
    });
  }

})();

/* ============================================================
   Global search — Ctrl/Cmd+K, available on every page
   ============================================================ */
(() => {
  const link = (h) => h;
  const IDX = [
    // pages / hubs
    {t:'Toolkit',s:'The full hacker-gear library — every device at 3 levels',c:'Gear',h:'tools.html'},
    {t:'Tools',s:'Browse all hacker-gear tools',c:'Gear',h:'tools.html'},
    {t:'Abilities',s:'What the gear can do — capabilities by radio type',c:'Gear',h:'abilities.html'},
    {t:'Compare',s:'Compare 23 devices side-by-side with photos & filters',c:'Gear',h:'compare.html'},
    // tools
    {t:'Flipper Zero',s:'Hardware multi-tool · RFID/NFC/Sub-GHz',c:'Tools',h:'tool.html#flipper-zero'},
    {t:'USB Rubber Ducky',s:'Keystroke injection',c:'Tools',h:'tool.html#usb-rubber-ducky'},
    {t:'Wi-Fi Pineapple',s:'Wireless auditing',c:'Tools',h:'tool.html#wifi-pineapple'},
    {t:'Proxmark3',s:'RFID research',c:'Tools',h:'tool.html#proxmark3'},
    {t:'HackRF One',s:'Software-defined radio',c:'Tools',h:'tool.html#hackrf-one'},
    {t:'KIISU',s:'DIY Flipper-style multi-tool',c:'Tools',h:'tool.html#kiisu'},
    {t:'ESP32 Marauder',s:'2.4 GHz Wi-Fi/BLE auditing',c:'Tools',h:'tool.html#esp32-marauder'},
    {t:'ESP32 Bruce (CYD)',s:'Touchscreen ESP32 multi-tool',c:'Tools',h:'tool.html#esp32-bruce-cyd'},
    {t:'LilyGO T-Embed CC1101',s:'ESP32-S3 handheld w/ sub-GHz',c:'Tools',h:'tool.html#lilygo-t-embed'},
    {t:'Chameleon Ultra V2',s:'NFC/RFID card emulator',c:'Tools',h:'tool.html#chameleon-ultra'},
    {t:'Digispark ATtiny85',s:'$1 BadUSB board',c:'Tools',h:'tool.html#digispark'},
    {t:'O.MG Cable',s:'BadUSB implant cable w/ Wi-Fi',c:'Tools',h:'tool.html#omg-cable'},
    {t:'BW16 Network Commander',s:'Dual-band 2.4/5 GHz Wi-Fi audit',c:'Tools',h:'tool.html#bw16-network-commander'},
    {t:'Kali Linux',s:'Pentest distro',c:'Tools',h:'tool.html#kali-linux'},
    {t:'Wireshark',s:'Packet analyzer',c:'Tools',h:'tool.html#wireshark'},
    // glossary
    {t:'Jamming',s:'Jam a radio frequency',c:'Glossary',h:'glossary.html'},
    {t:'Spoofing',s:'Fake an identity',c:'Glossary',h:'glossary.html'},
    {t:'Payload',s:'the active part of an attack',c:'Glossary',h:'glossary.html'},
    {t:'RFID',s:'Radio chip identification',c:'Glossary',h:'glossary.html'},
    {t:'Phishing',s:'Deception to steal data',c:'Glossary',h:'glossary.html'},
    {t:'Replay Attack',s:'Resend a captured signal',c:'Glossary',h:'glossary.html'},
    {t:'Rolling Code',s:'Changing radio code',c:'Glossary',h:'glossary.html'},
    // abilities
    {t:'Deauth Attack',s:'Kick a device off Wi-Fi',c:'Abilities',h:'abilities.html'},
    {t:'Evil Portal',s:'Fake Wi-Fi with login page',c:'Abilities',h:'abilities.html'},
    {t:'BLE-Spam',s:'Fake Bluetooth signals',c:'Abilities',h:'abilities.html'},
    {t:'Clone a card',s:'Copy NFC/RFID',c:'Abilities',h:'abilities.html'},
    {t:'BadUSB',s:'Emulate a keyboard',c:'Abilities',h:'abilities.html'},
    // linux
    {t:'nmap',s:'Port scanner & host discovery',c:'Linux',h:'linux.html'},
    {t:'grep',s:'Search text in files',c:'Linux',h:'linux.html'},
    {t:'chmod',s:'Change permissions',c:'Linux',h:'linux.html'},
    {t:'ssh',s:'Encrypted remote access',c:'Linux',h:'linux.html'},
    {t:'find',s:'Find files in the tree',c:'Linux',h:'linux.html'},
    {t:'curl',s:'HTTP requests',c:'Linux',h:'linux.html'},
    // network / ports
    {t:'Port 22 · SSH',s:'encrypted remote access',c:'Network',h:'network.html'},
    {t:'Port 443 · HTTPS',s:'encrypted web',c:'Network',h:'network.html'},
    {t:'Port 3389 · RDP',s:'Windows remote desktop',c:'Network',h:'network.html'},
    {t:'Subnet Calculator',s:'compute IP + CIDR',c:'Network',h:'network.html'},
    {t:'OSI Model',s:'7 layers',c:'Network',h:'network.html'},
    // frequencies
    {t:'433 MHz',s:'Garage doors, car keys',c:'Frequencies',h:'frequencies.html'},
    {t:'13.56 MHz',s:'NFC / Mifare',c:'Frequencies',h:'frequencies.html'},
    {t:'2.4 GHz',s:'Wi-Fi & Bluetooth',c:'Frequencies',h:'frequencies.html'},
    // OSINT
    {t:'Phone Search',s:'OSINT module',c:'OSINT',h:'osint-module.html#phone'},
    {t:'Email Search',s:'OSINT module',c:'OSINT',h:'osint-module.html#email'},
    {t:'IP Info',s:'OSINT module',c:'OSINT',h:'osint-module.html#ip'},
    {t:'Shodan',s:'OSINT module',c:'OSINT',h:'osint-module.html#shodan'},
    // learn pages
    {t:'Compare',s:'Device comparison',c:'Learn',h:'compare.html'},
    {t:'Labs',s:'Challenges & quizzes',c:'Learn',h:'labs.html'},
    {t:'Typing Test',s:'words-per-minute & accuracy',c:'Personal',h:'typing.html'},
    {t:'Reaction Time',s:'test your reflexes',c:'Personal',h:'reaction.html'},
    {t:'Calendar',s:'plan days, events, search',c:'Personal',h:'calendar.html'},
    {t:'Calculator',s:'base converter, calc, Hamming',c:'Personal',h:'calculator.html'},
    {t:'Databases',s:'SQL, JOINs, ACID, live sandbox',c:'Learn',h:'databases.html'},
    {t:'Bits',s:'binary, bytes, logic gates, bit-flip',c:'Learn',h:'bits.html'},
    {t:'Virtual Machines',s:'virtualization, hypervisors, lab manager',c:'Learn',h:'vm.html'},
    {t:'Flipper 3D Explorer',s:'interactive 3D model of the Flipper Zero',c:'Learn',h:'flipper3d.html'},
    {t:'Fake CAPTCHAs',s:'ClickFix attack & sandboxed demo',c:'Learn',h:'clickfix.html'},
    {t:'Networking Lab',s:'PCAP viewer, packet analysis',c:'Learn',h:'network-lab.html'},
    {t:'Regex Tester',s:'live regex sandbox & presets',c:'Learn',h:'regex.html'},
    {t:'Hash Cracker',s:'dictionary attack & salting demo',c:'Learn',h:'hashcrack.html'},
    {t:'Sock Puppet Builder',s:'fake OSINT persona generator',c:'Recon',h:'sockpuppet.html'},
    {t:'Metadata Viewer',s:'extract EXIF/GPS from images',c:'Recon',h:'metadata.html'},
    {t:'OSINT hub',s:'recon suite — pick a tool',c:'Recon',h:'osint-hub.html'},
    {t:'Personal hub',s:'productivity tools switcher',c:'Personal',h:'personal.html'},
    {t:'Focus Timer',s:'pomodoro sprints & cooldowns',c:'Personal',h:'pomodoro.html'},
    {t:'Keybind Trainer',s:'Vim, VS Code, terminal shortcuts',c:'Personal',h:'keybinds.html'},
    {t:'Daily Challenge',s:'rotating cipher / logic puzzle',c:'Daily',h:'daily.html'},
    {t:'Infosec News',s:'live security news feed',c:'Meta',h:'news.html'},
    {t:'Payload Builder',s:'DuckyScript editor',c:'Learn',h:'payload-builder.html'},
    {t:'DuckyScript Studio',s:'write, check & compile DuckyScript payloads',c:'Learn',h:'duckyscript.html'},
    {t:'Crypto Tools',s:'Base64, ROT13, Hex, Hash',c:'Learn',h:'crypto.html'},
    {t:'CTF Cheatsheet',s:'Steg, crypto, web, forensics',c:'Learn',h:'ctf.html'},
    {t:'Frequencies',s:'Radio frequency reference',c:'Learn',h:'frequencies.html'},
    {t:'Network Cheatsheet',s:'Subnetting, ports, OSI',c:'Learn',h:'network.html'},
    {t:'Linux Reference',s:'Command reference',c:'Learn',h:'linux.html'},
    {t:'Privacy',s:'Checklist & VPN comparison',c:'Learn',h:'privacy.html'},
    {t:'Phishing',s:'Red-flag gallery',c:'Learn',h:'phishing.html'},
    {t:'Roadmap',s:'Learning paths',c:'Learn',h:'roadmap.html'},
    {t:'Changelog',s:'Build history',c:'Learn',h:'changelog.html'},
    {t:'Threat Map',s:'simulated attacks',c:'Recon',h:'threatmap.html'},
    {t:'Achievements',s:'XP & progress',c:'Learn',h:'achievements.html'},
    {t:'PowerShell Console',s:'CLI download, number toolkit',c:'Recon',h:'console.html'},
    {t:'Code Academy',s:'learn to program — interactive lessons & quizzes',c:'Learn',h:'codeacademy.html'},
    {t:'Compression Lab',s:'compare JPEG, WebP, AVIF & PNG sizes live',c:'Learn',h:'compress.html'},
    {t:'Hash Generator',s:'MD5, SHA-1, SHA-256 & SHA-512 live',c:'Learn',h:'hashgen.html'},
    {t:'User-Agent Parser',s:'browser, OS & device from a UA string',c:'Learn',h:'useragent.html'},
    {t:'Email Header Analyzer',s:'trace hops, SPF/DKIM/DMARC, spot spoofing',c:'Learn',h:'emailheader.html'},
    {t:'Password Lab',s:'generate & analyze passwords — entropy, crack time',c:'Learn',h:'password.html'},
    {t:'JWT Inspector',s:'decode & verify JSON Web Tokens (HS256)',c:'Learn',h:'jwt.html'},
    {t:'File Inspector',s:'magic-byte type, hex dump, entropy & hashes',c:'Learn',h:'fileinspect.html'},
    {t:'Notes',s:'markdown editor with folders & tags',c:'Personal',h:'notes.html'},
    {t:'Habit Tracker',s:'build streaks & track daily habits',c:'Personal',h:'habits.html'},
    {t:'Snippet Vault',s:'save & search reusable code snippets',c:'Personal',h:'snippets.html'},
    {t:'Personal Hub',s:'notes, habits, snippets & more in one place',c:'Personal',h:'personalhub.html'},
    {t:'Flowchart Editor',s:'draw diagrams, flowcharts & network maps',c:'Personal',h:'flowchart.html'},
    {t:'Ember',s:'private browser-based image editor — crop, filter, export',c:'Personal',h:'ember.html'},
    {t:'QR Studio',s:'encode text to QR & decode from image/camera',c:'Learn',h:'qrtool.html'},
    {t:'Steganography',s:'hide & extract messages in image pixels (LSB)',c:'Learn',h:'steganography.html'},
    {t:'File / Hex Diff',s:'byte-level compare of two files',c:'Learn',h:'filediff.html'},
    {t:'All Features',s:'index of everything on the site',c:'Index',h:'features.html'}
  ];
  const ov = document.createElement('div');
  ov.id = 'nb-gs';
  ov.innerHTML = '<div class="gs-box"><div class="gs-in"><svg class="ico"><use href="#i-search"/></svg><input type="text" id="gsInput" placeholder="Search everything — tools, glossary, commands, frequencies…"><kbd>ESC</kbd></div><div class="gs-results" id="gsResults"></div></div>';
  document.body.appendChild(ov);
  const input = ov.querySelector('#gsInput'), results = ov.querySelector('#gsResults');
  const openGs = () => { ov.classList.add('show'); input.value = ''; renderRes(''); setTimeout(() => input.focus(), 30); };
  const closeGs = () => ov.classList.remove('show');
  function renderRes(q) {
    q = q.toLowerCase().trim();
    let list = q ? IDX.filter(e => (e.t + ' ' + e.s + ' ' + e.c).toLowerCase().includes(q)) : IDX.slice(0, 8);
    list = list.slice(0, 24);
    if (!list.length) { results.innerHTML = '<div class="gs-empty">// no results</div>'; return; }
    const groups = {};
    list.forEach(e => (groups[e.c] = groups[e.c] || []).push(e));
    results.innerHTML = Object.entries(groups).map(([c, items]) =>
      `<div class="gs-cat">${c}</div>` + items.map(e => `<a class="gs-item" href="${e.h}"><span class="gs-t">${e.t}</span><span class="gs-s">${e.s}</span></a>`).join('')).join('');
  }
  input.addEventListener('input', () => renderRes(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { const a = results.querySelector('.gs-item'); if (a) location.href = a.getAttribute('href'); } });
  ov.addEventListener('click', e => { if (e.target === ov) closeGs(); });
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); ov.classList.contains('show') ? closeGs() : openGs(); }
    else if (e.key === 'Escape' && ov.classList.contains('show')) closeGs();
  });
})();

/* ============================================================
   Nav restructure — runs on every page.
   Top-level features (Console, Threat Map) live in the bar;
   Learn = study/reference dropdown, Personal = productivity
   dropdown; Glossary folds into Learn; a Features index link
   sits up front. Keeps the bar from becoming a Learn dumping ground.
   ============================================================ */
(() => {
  const links = document.querySelector('.nav-links'); if (!links) return;
  const cur = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const aFor = (h) => [...links.querySelectorAll('a')].find(a => (a.getAttribute('href') || '') === h && !a.classList.contains('btn'));
  const mkLink = (href, text) => { const a = document.createElement('a'); a.href = href; a.textContent = text; if (href.toLowerCase() === cur) a.className = 'active'; return a; };

  // build a hover/click dropdown around an anchor
  function makeDropdown(anchor, items) {
    const wrap = document.createElement('span'); wrap.className = 'nav-has-dd';
    anchor.parentNode.insertBefore(wrap, anchor); wrap.appendChild(anchor);
    const dd = document.createElement('div'); dd.className = 'nav-dd';
    dd.innerHTML = items.map(i => `<a href="${i[0]}"${i[0].toLowerCase() === cur ? ' class="active"' : ''}>${i[1]}</a>`).join('');
    wrap.appendChild(dd);
    if (items.some(i => i[0].toLowerCase() === cur)) anchor.classList.add('active');
    anchor.addEventListener('click', (e) => { if (window.innerWidth <= 720) { e.preventDefault(); wrap.classList.toggle('open'); } });
    return wrap;
  }

  // build a grouped "mega" dropdown (header + links per group)
  function makeMega(anchor, groups) {
    const wrap = document.createElement('span'); wrap.className = 'nav-has-dd';
    anchor.parentNode.insertBefore(wrap, anchor); wrap.appendChild(anchor);
    const dd = document.createElement('div'); dd.className = 'nav-dd mega';
    let active = false;
    dd.innerHTML = groups.map(g => `<div class="dd-group"><span class="dd-h">${g.h}</span>` +
      g.items.map(i => { const a = i[0].toLowerCase() === cur; if (a) active = true; return `<a href="${i[0]}"${a ? ' class="active"' : ''}>${i[1]}</a>`; }).join('') +
      `</div>`).join('');
    wrap.appendChild(dd);
    if (active) anchor.classList.add('active');
    anchor.addEventListener('click', (e) => { if (window.innerWidth <= 720) { e.preventDefault(); wrap.classList.toggle('open'); } });
    return wrap;
  }

  const osint = aFor('osint.html');

  // promote Threat Map (after OSINT)
  if (osint && !aFor('threatmap.html')) osint.after(mkLink('threatmap.html', 'Threat Map'));
  // promote Console as a top-level feature (after Threat Map)
  if (!aFor('console.html')) (aFor('threatmap.html') || osint || links.firstElementChild).after(mkLink('console.html', 'Console'));
  // Daily challenge — engagement hook, after Console
  if (!aFor('daily.html')) (aFor('console.html') || osint || links.firstElementChild).after(mkLink('daily.html', 'Daily'));

  // OSINT becomes a dropdown; the label opens the OSINT hub (card switcher), console is one click in
  if (osint) {
    osint.setAttribute('href', 'osint-hub.html');
    makeDropdown(osint, [
      ['osint-hub.html', 'OSINT hub'], ['osint.html', 'OSINT console'], ['sockpuppet.html', 'Sock Puppet'], ['metadata.html', 'Metadata Viewer']
    ]);
  }

  // Glossary, Tools and Abilities all fold into the Learn mega — drop their top-level links
  ['glossary.html', 'tools.html', 'abilities.html'].forEach(h => { const a = aFor(h); if (a) a.remove(); });

  // Learn = one grouped mega dropdown so related things sit together and the bar stays lean
  const learn = aFor('learn.html');
  if (learn) {
    const learnWrap = makeMega(learn, [
      { h: 'Gear', items: [['tools.html', 'Tools'], ['abilities.html', 'Abilities'], ['compare.html', 'Compare'], ['fileinspect.html', 'File Inspector'], ['filediff.html', 'File / Hex Diff'], ['qrtool.html', 'QR Studio']] },
      { h: 'Foundations', items: [['codeacademy.html', 'Code Academy'], ['bits.html', 'Bits'], ['compress.html', 'Compression Lab'], ['network.html', 'Networking'], ['vm.html', 'Virtual Machines'], ['flipper3d.html', 'Flipper 3D'], ['databases.html', 'Databases'], ['linux.html', 'Linux']] },
      { h: 'Offense & defense', items: [['crypto.html', 'Crypto Tools'], ['password.html', 'Password Lab'], ['hashgen.html', 'Hash Generator'], ['jwt.html', 'JWT Inspector'], ['steganography.html', 'Steganography'], ['hashcrack.html', 'Hash Cracker'], ['network-lab.html', 'Networking Lab'], ['regex.html', 'Regex Tester'], ['payload-builder.html', 'Payload Builder'], ['duckyscript.html', 'DuckyScript Studio'], ['ctf.html', 'CTF Cheatsheet'], ['frequencies.html', 'Frequencies']] },
      { h: 'Awareness', items: [['phishing.html', 'Phishing'], ['emailheader.html', 'Email Headers'], ['useragent.html', 'User-Agent'], ['clickfix.html', 'Fake CAPTCHAs'], ['privacy.html', 'Privacy']] },
      { h: 'Start here', items: [['learn.html', 'Learn hub'], ['roadmap.html', 'Roadmap'], ['labs.html', 'Labs'], ['glossary.html', 'Glossary'], ['achievements.html', 'Achievements']] }
    ]);

    // Personal = productivity tools, sits right after Learn
    const personal = mkLink('personal.html', 'Personal');
    learnWrap.after(personal);
    makeDropdown(personal, [
      ['personal.html', 'Personal hub'], ['personalhub.html', 'Notes · Habits · Snippets'], ['calendar.html', 'Calendar'], ['typing.html', 'Typing Test'], ['keybinds.html', 'Keybind Trainer'],
      ['reaction.html', 'Reaction Time'], ['pomodoro.html', 'Focus Timer'], ['calculator.html', 'Calculator'], ['flowchart.html', 'Flowchart Editor'], ['ember.html', 'Ember (image editor)']
    ]);
  }

  // Features index — overview of everything, up front
  if (!aFor('features.html')) links.insertBefore(mkLink('features.html', 'Features'), links.firstElementChild);

  // Enforce ONE canonical top-level order on every page. Pages' raw HTML navs
  // differ (some already contain Console, some don't), and items are only
  // inserted when absent — so without this, Console/Daily land in different
  // slots per page and the bar appears to "jump" as you navigate.
  const NAV_ORDER = ['features.html', 'learn.html', 'personal.html', 'osint-hub.html', 'threatmap.html', 'console.html', 'daily.html', 'shop.html', 'account.html'];
  const navKey = (el) => {
    if (el.classList && el.classList.contains('btn')) return 1000;          // Launch OSINT → always last
    const a = el.matches && el.matches('a') ? el : el.querySelector && el.querySelector('a');
    const h = a ? (a.getAttribute('href') || '').toLowerCase() : '';
    const i = NAV_ORDER.indexOf(h);
    return i < 0 ? 500 : i;                                                  // unknowns keep relative order, before the button
  };
  [...links.children].sort((x, y) => navKey(x) - navKey(y)).forEach(k => links.appendChild(k));

  // Reveal the nav only now that it's fully rebuilt — the restructure above
  // adds/removes/reorders items, so revealing after it prevents the visible
  // reflow ("jumping" nav) that happened when the raw HTML nav painted first.
  links.classList.add('nav-ready');
})();

/* ============================================================
   THEME ENGINE — user-selectable accent ("LED") colour, persisted.
   Sets the CSS vars on <body> inline, which overrides both :root and the
   body.t-* theme classes — so it retints the whole site (accent, glows,
   edge-glow, buttons, and the ghost's nose + halo) from one place.
   ============================================================ */
(function(){
  function hexToRgb(h){ h = h.replace('#',''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h, 16); return [(n>>16)&255, (n>>8)&255, n&255]; }
  function mix(a, b, t){ return a.map((v, i) => Math.round(v + (b[i]-v)*t)); }
  function toHex(rgb){ return '#' + rgb.map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join(''); }
  function lum(rgb){ return 0.299*rgb[0] + 0.587*rgb[1] + 0.114*rgb[2]; }

  window.NB_THEMES = [
    ['Cyan', '#22e0ff'], ['Aqua', '#2dd4bf'], ['Green', '#34e07a'], ['Lime', '#a3e635'],
    ['Gold', '#ffcf4d'], ['Orange', '#ff7e33'], ['Red', '#ff4d5e'], ['Pink', '#ff5fa2'],
    ['Magenta', '#ff3caf'], ['Violet', '#a855f7'], ['Indigo', '#7c8cff'], ['Blue', '#4d9bff']
  ];
  window.NB_DEFAULT_THEME = '#ffffff';

  window.nbApplyTheme = function(hex, save){
    if (typeof hex !== 'string') return;
    if (hex[0] !== '#') hex = '#' + hex;
    if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) return;
    const rgb = hexToRgb(hex), rgbStr = rgb.join(', ');
    const light = toHex(mix(rgb, [255,255,255], 0.34));
    const s = document.body.style;
    s.setProperty('--violet', hex);
    s.setProperty('--violet-2', light);
    s.setProperty('--fuchsia', hex);
    s.setProperty('--accent', hex);
    s.setProperty('--glowcol', rgbStr);
    s.setProperty('--grad', 'linear-gradient(120deg, ' + light + ', ' + hex + ' 55%, ' + hex + ')');
    s.setProperty('--glow', '0 0 0 1px rgba(' + rgbStr + ',.35), 0 18px 60px -18px rgba(' + rgbStr + ',.55)');
    s.setProperty('--glow-sm', '0 10px 36px -14px rgba(' + rgbStr + ',.55)');
    s.setProperty('--accent-ink', lum(rgb) > 150 ? '#08121a' : '#eef6ff');
    if (save){ try { localStorage.setItem('nb_theme', hex); } catch(e){} }
  };
  window.nbCurrentTheme = function(){ try { return localStorage.getItem('nb_theme') || window.NB_DEFAULT_THEME; } catch(e){ return window.NB_DEFAULT_THEME; } };
  window.nbResetTheme = function(){ try { localStorage.removeItem('nb_theme'); } catch(e){} window.nbApplyTheme(window.NB_DEFAULT_THEME, false); };

  var saved; try { saved = localStorage.getItem('nb_theme'); } catch(e){}
  window.nbApplyTheme(saved || window.NB_DEFAULT_THEME, false);   // white is the site default when nothing is saved

  // motion preference
  try { if (localStorage.getItem('nb_reduce_motion') === '1') document.documentElement.classList.add('nb-reduce-motion'); } catch(e){}

  /* ---- EDGE LED — glow strip along the viewport edges, tinted by the
     accent colour. Levels: 0 off · 1 soft · 2 medium · 3 bright. ---- */
  window.NB_EDGE_LEVELS = ['Off', 'Soft', 'Medium', 'Bright'];
  function edgeEl(){
    var el = document.getElementById('nbEdgeLed');
    if (!el){
      el = document.createElement('div'); el.id = 'nbEdgeLed'; el.setAttribute('aria-hidden', 'true');
      document.body.appendChild(el);
      var st = document.createElement('style'); st.id = 'nb-edge-css';
      st.textContent = '#nbEdgeLed{position:fixed;inset:0;pointer-events:none;z-index:2147483000;opacity:0;transition:opacity .5s}' +
        '#nbEdgeLed::before{content:"";position:absolute;inset:0;box-shadow:inset 0 0 var(--el-r,26px) rgba(var(--glowcol,34,224,255),var(--el-a,.28)), inset 0 0 calc(var(--el-r,26px)*2.6) rgba(var(--glowcol,34,224,255),calc(var(--el-a,.28)*.45))}' +
        '#nbEdgeLed::after{content:"";position:absolute;inset:0;border:1px solid rgba(var(--glowcol,34,224,255),var(--el-b,0))}' +
        '#nbEdgeLed.pulse::before{animation:nbEdgePulse 4.5s ease-in-out infinite}' +
        '@keyframes nbEdgePulse{0%,100%{opacity:1}50%{opacity:.62}}' +
        '.nb-reduce-motion #nbEdgeLed.pulse::before{animation:none}';
      document.head.appendChild(st);
    }
    return el;
  }
  window.nbApplyEdge = function(level, save){
    level = Math.max(0, Math.min(3, parseInt(level, 10) || 0));
    var el = edgeEl();
    // the ambient window glow (body::before in style.css) is part of the edge
    // lighting too — Off dims it to nothing, every other level keeps it on
    document.body.style.setProperty('--edge-amb', level ? '1' : '0');
    var cfg = [
      { o: 0 },                                             // off    — no edge light at all
      { o: 0 },                                             // soft   — ambient glow only
      { o: 1, r: '28px', a: '.30', b: '.35', pulse: false },// medium — ambient + LED strip
      { o: 1, r: '42px', a: '.48', b: '.65', pulse: true  } // bright — ambient + strip + pulse
    ][level];
    el.style.opacity = cfg.o;
    if (cfg.o){ el.style.setProperty('--el-r', cfg.r); el.style.setProperty('--el-a', cfg.a); el.style.setProperty('--el-b', cfg.b); }
    el.classList.toggle('pulse', !!cfg.pulse);
    if (save){ try { localStorage.setItem('nb_edge', String(level)); } catch(e){} }
  };
  window.nbCurrentEdge = function(){
    var v = null; try { v = localStorage.getItem('nb_edge'); } catch(e){}
    if (v === null) return 3;                               // default: Bright edge glow
    return Math.max(0, Math.min(3, parseInt(v, 10) || 0));
  };
  window.nbApplyEdge(window.nbCurrentEdge(), false);

  /* ---- APPEARANCE: Light/Dark background + Black&White, as ONE filter on <html> ----
     Filter goes on <html> (not <body>) so position:fixed/sticky elements aren't reparented.
     Light mode inverts the whole page (flips the deep-dark design to a light one in one shot,
     including every hardcoded-dark panel); media is re-inverted so photos stay true. */
  (function(){
    var st = document.createElement('style'); st.id = 'nb-appearance-css';
    st.textContent =
      'html.nb-light{background:#eef1f6}' +
      'html.nb-light img,html.nb-light iframe,html.nb-light video,html.nb-light canvas,html.nb-light .no-invert{filter:invert(1) hue-rotate(180deg)}' +
      /* keep the ghosts (title, hero AND nav-brand logo) colourful in light mode instead of
         flat black silhouettes: cancel the page-invert on the ghost SVGs, then colour the body */
      'html.nb-light .title-ghost svg,html.nb-light .logo{filter:invert(1) hue-rotate(180deg)}' +
      'html.nb-light .ghost{filter:invert(1) hue-rotate(180deg) drop-shadow(0 8px 22px rgba(0,0,0,.16))}' +
      'html.nb-light .title-ghost svg path[fill^="url"],html.nb-light .ghost path[fill^="url"],html.nb-light .logo path[fill^="url"]{fill:#ff7e33}' +
      /* user-picked ghost colour (Settings) — wins in both light & dark */
      'html.nb-ghost-custom .title-ghost svg path[fill^="url"],html.nb-ghost-custom .ghost path[fill^="url"],html.nb-ghost-custom .logo path[fill^="url"]{fill:var(--ghost)!important}';
    (document.head || document.documentElement).appendChild(st);
  })();
  var _light = false, _mono = false;
  function nbSyncFilter(){
    var f = [];
    if (_light) f.push('invert(1)', 'hue-rotate(180deg)');
    if (_mono) f.push('grayscale(1)');
    var el = document.documentElement;
    el.style.filter = f.length ? f.join(' ') : '';
    el.classList.toggle('nb-light', _light);
    el.classList.toggle('nb-mono', _mono);
  }
  window.nbApplyMode = function(mode, save){ _light = (mode === 'light'); nbSyncFilter(); if (save){ try { localStorage.setItem('nb_mode', _light ? 'light' : 'dark'); } catch(e){} } };
  window.nbCurrentMode = function(){ try { return localStorage.getItem('nb_mode') === 'light' ? 'light' : 'dark'; } catch(e){ return 'dark'; } };
  window.nbApplyMono = function(on, save){ _mono = !!on; nbSyncFilter(); if (save){ try { localStorage.setItem('nb_mono', on ? '1' : '0'); } catch(e){} } };
  window.nbCurrentMono = function(){ try { return localStorage.getItem('nb_mono') === '1'; } catch(e){ return false; } };
  _light = window.nbCurrentMode() === 'light';
  _mono = window.nbCurrentMono();
  nbSyncFilter();

  /* ---- GHOST COLOUR — tint the ghost body site-wide (empty = default look) ---- */
  window.nbApplyGhost = function(hex, save){
    var ok = typeof hex === 'string' && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
    if (ok){ document.body.style.setProperty('--ghost', hex); document.documentElement.classList.add('nb-ghost-custom'); }
    else { document.body.style.removeProperty('--ghost'); document.documentElement.classList.remove('nb-ghost-custom'); }
    if (save){ try { ok ? localStorage.setItem('nb_ghost', hex) : localStorage.removeItem('nb_ghost'); } catch(e){} }
  };
  window.nbCurrentGhost = function(){ try { return localStorage.getItem('nb_ghost') || ''; } catch(e){ return ''; } };
  var _gh = window.nbCurrentGhost();
  if (_gh) window.nbApplyGhost(_gh, false);
})();

/* ============================================================
   Per-page GHOST — inject the NULLBYTE ghost next to the main heading.
   (The front page already has its own big hero ghost, so it's skipped.)
   ============================================================ */
(function(){
  if (document.querySelector('.ghost')) return;                       // front page already has one
  var h = document.querySelector('.page-head h1.display') || document.querySelector('h1.display')
        || [...document.querySelectorAll('h1')].find(function(x){ return !x.closest('header') && !x.closest('footer') && !x.closest('.m-head'); });
  if (!h || h.dataset.tg) return;
  h.dataset.tg = '1';
  var row = document.createElement('div'); row.className = 'title-ghost-row';
  h.parentNode.insertBefore(row, h);
  var g = document.createElement('span'); g.className = 'title-ghost';
  g.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="tgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e8f4ff"/></linearGradient></defs><path d="M5.4 14.5C5.4 7.2 10.1 2.4 16 2.4s10.6 4.8 10.6 12.1v12.8c0 1.2-1.4 1.7-2.2.9l-2.2-2.1c-.6-.6-1.6-.6-2.2 0l-2 2c-.7.7-1.8.7-2.5 0l-1.5-1.5c-.6-.6-1.6-.6-2.2 0l-2 2c-.6.6-1.6.6-2.2 0l-1.6-1.6c-.4-.4-.6-.9-.6-1.4Z" fill="url(#tgGrad)"/><ellipse cx="11.8" cy="13.8" rx="2.5" ry="2.8" fill="#16100a"/><ellipse cx="20.2" cy="13.8" rx="2.5" ry="2.8" fill="#16100a"/><circle cx="12.7" cy="12.7" r=".85" fill="#fff"/><circle cx="21.1" cy="12.7" r=".85" fill="#fff"/><path class="nose" d="M13.5 17.4h5L16 21.4Z"/></svg>';
  row.appendChild(g); row.appendChild(h);
})();

/* ============================================================
   Title ghost — drop the NULLBYTE ghost next to the main page
   heading on every page, matching the front-page hero. Skips the
   front page (already has the big hero ghost) and the OSINT module
   view (its heading lives in a tight sidebar layout).
   ============================================================ */
(() => {
  if (document.querySelector('.ghost')) return; // front page already has a hero ghost
  const h = document.querySelector('.page-head h1.display')
    || document.querySelector('h1.display')
    || [...document.querySelectorAll('h1')].find(x => !x.closest('header') && !x.closest('footer') && !x.closest('.m-head'));
  if (!h || h.dataset.tg || !h.parentNode) return;
  h.dataset.tg = '1';
  const row = document.createElement('div');
  row.className = 'title-ghost-row';
  h.parentNode.insertBefore(row, h);
  const g = document.createElement('span');
  g.className = 'title-ghost';
  g.setAttribute('aria-hidden', 'true');
  g.innerHTML = '<svg viewBox="0 0 32 32"><defs><linearGradient id="tgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#ffd9b8"/></linearGradient></defs><path d="M5.4 14.5C5.4 7.2 10.1 2.4 16 2.4s10.6 4.8 10.6 12.1v12.8c0 1.2-1.4 1.7-2.2.9l-2.2-2.1c-.6-.6-1.6-.6-2.2 0l-2 2c-.7.7-1.8.7-2.5 0l-1.5-1.5c-.6-.6-1.6-.6-2.2 0l-2 2c-.6.6-1.6.6-2.2 0l-1.6-1.6c-.4-.4-.6-.9-.6-1.4Z" fill="url(#tgGrad)"/><ellipse cx="11.8" cy="13.8" rx="2.5" ry="2.8" fill="#16100a"/><ellipse cx="20.2" cy="13.8" rx="2.5" ry="2.8" fill="#16100a"/><circle cx="12.7" cy="12.7" r=".85" fill="#fff"/><circle cx="21.1" cy="12.7" r=".85" fill="#fff"/><path d="M13.5 17.4h5L16 21.4Z" fill="#ff7e33"/></svg>';
  row.appendChild(g);
  row.appendChild(h);
})();
