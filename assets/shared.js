/* NULLBYTE V6 — shared behaviour + real appearance engine (persisted site-wide).
   Every migrated page loads this. Settings persist under the same nb_* keys the
   whole site already uses, so preferences carry across old and new pages. */
(function () {
  'use strict';
  // Load the Firebase auth/cloud-sync module (derive its path from this script's URL).
  try {
    var _me = (document.currentScript && document.currentScript.src) || '';
    var _fb = _me ? _me.replace(/[^/]+$/, 'firebase.js') : 'assets/firebase.js';
    import(_fb).catch(function (e) { console.warn('[NB] firebase load failed', e && e.message); });
  } catch (e) {}
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var root = document.documentElement, body = document.body;

  /* ============================ nav behaviours ============================ */
  var burger = document.getElementById('burger'), sheet = document.getElementById('sheet');
  if (burger && sheet) {
    burger.addEventListener('click', function () { sheet.classList.toggle('open'); });
    addEventListener('click', function (e) { if (!sheet.contains(e.target) && !burger.contains(e.target)) sheet.classList.remove('open'); });
  }
  var nav = document.getElementById('nav');
  if (nav) addEventListener('scroll', function () { nav.classList.toggle('scrolled', scrollY > 30); }, { passive: true });

  /* ---- nav dropdowns — restore the OSINT / Learn / Personal sub-menus ---- */
  (function () {
    // Styles injected here (not in shared.css) so they can never be split from the
    // JS that builds these elements by a stale file:// CSS cache.
    var st = document.createElement('style'); st.id = 'nb-nav-dd-css';
    st.textContent =
      '.nav-has-dd{position:relative;display:inline-flex;align-items:center}' +
      '.nav-has-dd>a{display:inline-flex;align-items:center;gap:6px}' +
      '.nav-caret{width:9px;height:6px;flex:none;stroke:currentColor;stroke-width:1.6;fill:none;stroke-linecap:round;stroke-linejoin:round;opacity:.55;transition:transform .18s,opacity .18s}' +
      '.nav-has-dd:hover .nav-caret{transform:rotate(180deg);opacity:.9}' +
      '.nav-dd{position:absolute;top:calc(100% + 16px);left:50%;transform:translateX(-50%) translateY(8px);' +
      'min-width:216px;padding:10px;border-radius:18px;z-index:120;' +
      'background:linear-gradient(180deg,rgba(18,24,42,.94),rgba(10,14,26,.9));' +
      'border:1px solid var(--gline,rgba(255,255,255,.12));backdrop-filter:blur(26px) saturate(1.5);-webkit-backdrop-filter:blur(26px) saturate(1.5);' +
      'box-shadow:0 30px 70px -22px rgba(0,0,0,.92),0 0 60px -30px rgba(var(--glow,46,228,255),.5),inset 0 1px 0 rgba(255,255,255,.14);' +
      'opacity:0;pointer-events:none;transition:opacity .2s,transform .2s}' +
      '.nav-dd::before{content:"";position:absolute;left:0;right:0;top:-18px;height:18px}' +
      '.nav-has-dd:hover .nav-dd,.nav-has-dd:focus-within .nav-dd{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}' +
      '.nav-dd a{display:block;font-family:var(--mono);font-size:.66rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;' +
      'color:var(--muted);padding:9px 12px;border-radius:11px;white-space:nowrap;transition:background .16s,color .16s}' +
      '.nav-dd a:hover{background:rgba(255,255,255,.07);color:var(--ink)}' +
      '.nav-dd a.active{color:var(--cyan);background:linear-gradient(180deg,rgba(var(--glow,46,228,255),.16),rgba(var(--glow,46,228,255),.05))}' +
      '.nav-dd.mega{left:0;transform:translateY(8px);display:grid;grid-template-columns:repeat(3,minmax(148px,1fr));gap:2px 12px;min-width:520px}' +
      '.nav-has-dd:hover .nav-dd.mega,.nav-has-dd:focus-within .nav-dd.mega{transform:translateY(0)}' +
      '.nav-dd.mega .dd-group{display:flex;flex-direction:column}' +
      '.dd-h{font-family:var(--mono);font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:var(--faint);padding:10px 12px 4px}' +
      '.sheet-sub{display:flex;flex-direction:column;padding:2px 0 6px 12px;margin:0 6px 4px;border-left:1px solid var(--gline,rgba(255,255,255,.12))}' +
      '.sheet-sub a{justify-content:flex-start;font-size:.68rem;padding:9px 14px;color:var(--faint)}' +
      '.sheet-sub a:hover{color:var(--ink)}.sheet-sub a.active{color:var(--cyan)}' +
      '.sheet-h{font-family:var(--mono);font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;color:var(--faint);opacity:.8;padding:10px 14px 3px}';
    document.head.appendChild(st);

    var cur = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var MENUS = {
      /* label opens the hub (chooser); dropdown lists the 3 tools you choose between */
      'osint.html': { href: 'osint-hub.html', items: [
        ['osint.html', 'OSINT console'], ['sockpuppet.html', 'Sock Puppet'], ['metadata.html', 'Metadata Viewer']
      ] },
      'personal.html': { items: [
        ['personal.html', 'Personal hub'], ['personalhub.html', 'Notes · Habits · Snippets'], ['calendar.html', 'Calendar'], ['typing.html', 'Typing Test'], ['keybinds.html', 'Keybind Trainer'],
        ['reaction.html', 'Reaction Time'], ['pomodoro.html', 'Focus Timer'], ['calculator.html', 'Calculator'], ['flowchart.html', 'Flowchart Editor'], ['ember.html', 'Ember (image editor)'], ['gambit.html', 'Chess (GAMBIT)']
      ] },
      'learn.html': { mega: [
        { h: 'Gear', items: [['tools.html', 'Tools'], ['abilities.html', 'Abilities'], ['compare.html', 'Compare'], ['fileinspect.html', 'File Inspector'], ['filediff.html', 'File / Hex Diff'], ['qrtool.html', 'QR Studio']] },
        { h: 'Foundations', items: [['codeacademy.html', 'Code Academy'], ['bits.html', 'Bits'], ['compress.html', 'Compression Lab'], ['network.html', 'Networking'], ['vm.html', 'Virtual Machines'], ['flipper3d.html', 'Flipper 3D'], ['databases.html', 'Databases'], ['linux.html', 'Linux']] },
        { h: 'Offense & defense', items: [['crypto.html', 'Crypto Tools'], ['password.html', 'Password Lab'], ['hashgen.html', 'Hash Generator'], ['jwt.html', 'JWT Inspector'], ['steganography.html', 'Steganography'], ['hashcrack.html', 'Hash Cracker'], ['network-lab.html', 'Networking Lab'], ['regex.html', 'Regex Tester'], ['payload-builder.html', 'Payload Builder'], ['duckyscript.html', 'DuckyScript Studio'], ['ctf.html', 'CTF Cheatsheet'], ['frequencies.html', 'Frequencies']] },
        { h: 'Awareness', items: [['phishing.html', 'Phishing'], ['emailheader.html', 'Email Headers'], ['useragent.html', 'User-Agent'], ['clickfix.html', 'Fake CAPTCHAs'], ['privacy.html', 'Privacy']] },
        { h: 'Start here', items: [['learn.html', 'Learn hub'], ['roadmap.html', 'Roadmap'], ['labs.html', 'Labs'], ['glossary.html', 'Glossary'], ['achievements.html', 'Achievements']] }
      ] }
    };
    var CARET = '<svg class="nav-caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>';
    function linksHTML(items) { return items.map(function (i) { return '<a href="' + i[0] + '"' + (i[0].toLowerCase() === cur ? ' class="active"' : '') + '>' + i[1] + '</a>'; }).join(''); }
    function isActive(cfg) {
      var all = (cfg.mega ? cfg.mega.reduce(function (a, g) { return a.concat(g.items); }, []) : cfg.items).map(function (i) { return i[0].toLowerCase(); });
      if (cfg.href) all.push(cfg.href.toLowerCase());
      return all.indexOf(cur) >= 0;
    }

    // desktop: wrap each menu anchor with a glass dropdown
    var links = document.querySelector('.nav-links');
    if (links) {
      Object.keys(MENUS).forEach(function (href) {
        var anchor = [].slice.call(links.querySelectorAll('a')).find(function (a) { return (a.getAttribute('href') || '').toLowerCase() === href; });
        if (!anchor) return;
        var cfg = MENUS[href];
        var wrap = document.createElement('span'); wrap.className = 'nav-has-dd';
        anchor.parentNode.insertBefore(wrap, anchor); wrap.appendChild(anchor);
        anchor.insertAdjacentHTML('beforeend', CARET);
        var dd = document.createElement('div'); dd.className = 'nav-dd' + (cfg.mega ? ' mega' : '');
        dd.innerHTML = cfg.mega
          ? cfg.mega.map(function (g) { return '<div class="dd-group"><span class="dd-h">' + g.h + '</span>' + linksHTML(g.items) + '</div>'; }).join('')
          : linksHTML(cfg.items);
        wrap.appendChild(dd);
        if (isActive(cfg)) anchor.classList.add('active');
        if (cfg.href) anchor.setAttribute('href', cfg.href); // label opens the hub, not the tool
      });
    }

    // mobile: append the same sub-links, grouped, under the matching sheet item
    var sheet = document.getElementById('sheet');
    if (sheet) {
      Object.keys(MENUS).forEach(function (href) {
        var link = [].slice.call(sheet.querySelectorAll('a')).find(function (a) { return (a.getAttribute('href') || '').toLowerCase() === href; });
        if (!link) return;
        var cfg = MENUS[href], sub = document.createElement('div'); sub.className = 'sheet-sub';
        sub.innerHTML = cfg.mega
          ? cfg.mega.map(function (g) { return '<span class="sheet-h">' + g.h + '</span>' + linksHTML(g.items); }).join('')
          : linksHTML(cfg.items);
        link.after(sub);
        if (cfg.href) link.setAttribute('href', cfg.href); // label opens the hub, not the tool
      });
    }
  })();

  var glide = document.getElementById('glide');
  if (glide) {
    var box = glide.parentElement;
    // only the top-level items drive the glide (skip links inside dropdowns)
    box.querySelectorAll(':scope > a, :scope > .nav-has-dd > a').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        var br = a.getBoundingClientRect(), pr = box.getBoundingClientRect();
        glide.style.left = (br.left - pr.left) + 'px'; glide.style.width = br.width + 'px'; glide.style.opacity = 1;
      });
    });
    box.addEventListener('mouseleave', function () { glide.style.opacity = 0; });
  }

  var spot = document.getElementById('spot');
  if (spot && !RM) {
    // Move the spotlight with a compositor-only transform, and only run the
    // rAF loop while it's catching up to the cursor — idle pages do zero work.
    spot.style.willChange = 'transform';
    var sx = innerWidth / 2, sy = innerHeight / 2, tx = sx, ty = sy, raf = 0;
    function glow() {
      sx += (tx - sx) * .12; sy += (ty - sy) * .12;
      spot.style.transform = 'translate(' + sx + 'px,' + sy + 'px) translate(-50%,-50%)';
      raf = (Math.abs(tx - sx) > .5 || Math.abs(ty - sy) > .5) ? requestAnimationFrame(glow) : 0;
    }
    addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(glow); }, { passive: true });
  }

  /* ---- signed-in chip: reflects Firebase auth state in the nav ---- */
  (function () {
    var navEl = document.getElementById('nav'); if (!navEl) return;
    var st = document.createElement('style');
    st.textContent =
      '.nav-user{display:none;align-items:center;gap:8px;margin-right:6px;padding:5px 13px 5px 5px;border-radius:999px;' +
      'border:1px solid var(--gline,rgba(255,255,255,.12));background:rgba(255,255,255,.05);font-family:var(--mono);' +
      'font-size:.64rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);transition:.16s;max-width:190px}' +
      '.nav-user.on{display:inline-flex}.nav-user:hover{color:var(--ink);border-color:rgba(var(--glow,46,228,255),.5)}' +
      '.nav-user .nu-av{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;flex:none;color:#06222b;font-weight:700;font-size:.7rem;' +
      'background:linear-gradient(180deg,var(--cyan-soft,#9df0ff),var(--cyan,#2ee4ff));box-shadow:0 0 12px -2px rgba(var(--glow,46,228,255),.9)}' +
      '.nav-user .nu-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '@media (max-width:1020px){.nav-user .nu-name{display:none}.nav-user{padding:4px}}';
    document.head.appendChild(st);
    var chip = document.createElement('a'); chip.className = 'nav-user'; chip.href = 'account.html';
    chip.innerHTML = '<span class="nu-av"></span><span class="nu-name"></span>';
    var cta = navEl.querySelector('.nav-cta');
    if (cta) navEl.insertBefore(chip, cta); else navEl.appendChild(chip);
    function paint(user) {
      if (!user) { chip.classList.remove('on'); return; }
      var handle = '';
      try { handle = (JSON.parse(localStorage.getItem('nb_profile') || '{}').handle || '').replace(/^@/, ''); } catch (e) {}
      var name = handle || user.displayName || (user.email || '').split('@')[0] || 'you';
      chip.querySelector('.nu-av').textContent = (name[0] || 'U').toUpperCase();
      chip.querySelector('.nu-name').textContent = name;
      chip.title = 'Signed in as ' + name;
      chip.classList.add('on');
    }
    (function bind() { if (window.NBAuth) window.NBAuth.onUser(paint); else setTimeout(bind, 150); })();
    addEventListener('nb-cloud-synced', function () { if (window.NBAuth && window.NBAuth.user) paint(window.NBAuth.user); });
  })();

  /* ========================= appearance engine ========================= */
  function hexToRgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join(''); var n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function mix(a, b, t) { return a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); }); }
  function toHex(rgb) { return '#' + rgb.map(function (v) { return Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0'); }).join(''); }
  function lum(r) { return .299 * r[0] + .587 * r[1] + .114 * r[2]; }

  /* --- accent / LED colour --- */
  window.NB_THEMES = [['Cyan', '#2ee4ff'], ['White', '#ffffff'], ['Violet', '#8b5cf6'], ['Green', '#39e585'], ['Amber', '#ffb347'], ['Red', '#ff5f68'], ['Pink', '#ff5fa2'], ['Blue', '#4d9bff']];
  window.NB_DEFAULT_THEME = '#ffffff';
  window.nbApplyTheme = function (hex, save) {
    if (typeof hex !== 'string') return; if (hex[0] !== '#') hex = '#' + hex;
    if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) return;
    var rgb = hexToRgb(hex), soft = toHex(mix(rgb, [255, 255, 255], .4)), s = body.style;
    s.setProperty('--cyan', hex); s.setProperty('--cyan-soft', soft); s.setProperty('--glow', rgb.join(', '));
    /* legacy tokens so any shared feature JS keeps working */
    s.setProperty('--accent', hex); s.setProperty('--violet', hex); s.setProperty('--glowcol', rgb.join(', '));
    s.setProperty('--accent-ink', lum(rgb) > 150 ? '#06222b' : '#eef6ff');
    if (save) LS.set('nb_theme', hex);
  };
  window.nbCurrentTheme = function () { return LS.get('nb_theme') || window.NB_DEFAULT_THEME; };
  window.nbResetTheme = function () { LS.del('nb_theme'); window.nbApplyTheme(window.NB_DEFAULT_THEME, false); };

  /* --- edge LED --- */
  function edgeEl() {
    var el = document.getElementById('nbEdgeLed');
    if (!el) {
      el = document.createElement('div'); el.id = 'nbEdgeLed'; el.setAttribute('aria-hidden', 'true'); body.appendChild(el);
      var st = document.createElement('style');
      st.textContent = '#nbEdgeLed{position:fixed;inset:0;pointer-events:none;z-index:60;opacity:0;transition:opacity .5s}' +
        '#nbEdgeLed::before{content:"";position:absolute;inset:0;box-shadow:inset 0 0 var(--el-r,26px) rgba(var(--glow,46,228,255),var(--el-a,.28)),inset 0 0 calc(var(--el-r,26px)*2.6) rgba(var(--glow,46,228,255),calc(var(--el-a,.28)*.45))}' +
        '#nbEdgeLed.pulse::before{animation:nbEdgePulse 4.5s ease-in-out infinite}@keyframes nbEdgePulse{0%,100%{opacity:1}50%{opacity:.6}}' +
        '.nb-reduce-motion #nbEdgeLed.pulse::before{animation:none}';
      document.head.appendChild(st);
    }
    return el;
  }
  window.NB_EDGE_LEVELS = ['Off', 'Soft', 'Medium', 'Bright'];
  window.nbApplyEdge = function (level, save) {
    level = Math.max(0, Math.min(3, parseInt(level, 10) || 0));
    var el = edgeEl();
    var cfg = [{ o: 0 }, { o: 1, r: '18px', a: '.16', pulse: false }, { o: 1, r: '30px', a: '.32', pulse: false }, { o: 1, r: '46px', a: '.5', pulse: true }][level];
    el.style.opacity = cfg.o;
    if (cfg.o) { el.style.setProperty('--el-r', cfg.r); el.style.setProperty('--el-a', cfg.a); }
    el.classList.toggle('pulse', !!cfg.pulse);
    if (save) LS.set('nb_edge', String(level));
  };
  window.nbCurrentEdge = function () { var v = LS.get('nb_edge'); if (v === null) return 3; return Math.max(0, Math.min(3, parseInt(v, 10) || 0)); };

  /* --- light/dark + black&white, one filter on <html> --- */
  (function () {
    var st = document.createElement('style');
    st.textContent = 'html.nb-light{background:#e9edf3}' +
      'html.nb-light img,html.nb-light iframe,html.nb-light video,html.nb-light canvas,html.nb-light .no-invert{filter:invert(1) hue-rotate(180deg)}';
    document.head.appendChild(st);
  })();
  var _light = false, _mono = false;
  function syncFilter() {
    var f = [];
    if (_light) f.push('invert(1)', 'hue-rotate(180deg)');
    if (_mono) f.push('grayscale(1)');
    root.style.filter = f.length ? f.join(' ') : '';
    root.classList.toggle('nb-light', _light); root.classList.toggle('nb-mono', _mono);
  }
  window.nbApplyMode = function (m, save) { _light = (m === 'light'); syncFilter(); if (save) LS.set('nb_mode', _light ? 'light' : 'dark'); };
  window.nbCurrentMode = function () { return LS.get('nb_mode') === 'light' ? 'light' : 'dark'; };
  window.nbApplyMono = function (on, save) { _mono = !!on; syncFilter(); if (save) LS.set('nb_mono', on ? '1' : '0'); };
  window.nbCurrentMono = function () { return LS.get('nb_mono') === '1'; };

  /* --- reduce motion --- */
  (function () {
    var st = document.createElement('style');
    st.textContent = '.nb-reduce-motion *,.nb-reduce-motion *::before,.nb-reduce-motion *::after{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important}';
    document.head.appendChild(st);
  })();
  window.nbApplyMotion = function (on, save) { root.classList.toggle('nb-reduce-motion', !!on); if (save) LS.set('nb_reduce_motion', on ? '1' : '0'); };
  window.nbCurrentMotion = function () { return LS.get('nb_reduce_motion') === '1'; };

  /* --- ghost colour (tints the puck/avatar body) --- */
  (function () {
    var st = document.createElement('style');
    st.textContent = 'html.nb-ghost-custom .puck svg > path:first-of-type,html.nb-ghost-custom .avatar svg > path:first-of-type,html.nb-ghost-custom .ghost > path:first-of-type,html.nb-ghost-custom .ghost-body{fill:var(--ghost)!important}';
    document.head.appendChild(st);
  })();
  window.nbApplyGhost = function (hex, save) {
    var ok = typeof hex === 'string' && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
    if (ok) { body.style.setProperty('--ghost', hex); root.classList.add('nb-ghost-custom'); }
    else { body.style.removeProperty('--ghost'); root.classList.remove('nb-ghost-custom'); }
    if (save) { ok ? LS.set('nb_ghost', hex) : LS.del('nb_ghost'); }
  };
  window.nbCurrentGhost = function () { return LS.get('nb_ghost') || ''; };

  /* ============================ init from saved ============================ */
  window.nbApplyTheme(window.nbCurrentTheme(), false);
  window.nbApplyEdge(window.nbCurrentEdge(), false);
  if (window.nbCurrentMode() === 'light') window.nbApplyMode('light', false);
  if (window.nbCurrentMono()) window.nbApplyMono(true, false);
  if (window.nbCurrentMotion()) window.nbApplyMotion(true, false);
  var _g = window.nbCurrentGhost(); if (_g) window.nbApplyGhost(_g, false);
})();
