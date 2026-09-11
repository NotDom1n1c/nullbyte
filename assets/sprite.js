/* NULLBYTE — icon sprite (extracted from app.js so #i-* icons work standalone) */
(function(){ if(document.getElementById('sprite')) return;
  var wrap = document.createElement('div'); wrap.style.display='none'; wrap.setAttribute('aria-hidden','true');
  wrap.innerHTML = `<svg id="sprite" xmlns="http://www.w3.org/2000/svg"><defs>
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
  (document.body || document.documentElement).insertBefore(wrap, (document.body||document.documentElement).firstChild);
})();
