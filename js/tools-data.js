/* NULLBYTE — tool registry + detail-page renderer (#id driven) */

const TOOLS = {
  'flipper-zero': {
    name: 'Flipper Zero', cat: 'Hardware', icon: 'i-cpu', img: 'images/devices/flipper-zero.jpg',
    tagline: 'A portable multi-tool for radio, access-control and digital signals — built for learning, tinkering and security research.',
    tags: ['Sub-GHz', '125 kHz RFID', '13.56 MHz NFC', 'Infrared', 'GPIO', 'iButton', 'BadUSB'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Explained as if you have never touched one.',
        paras: ['Think of the Flipper Zero as a tiny pocket "remote control for everything wireless". It can <b>listen to</b> and <b>copy</b> certain signals — like the chip in a hotel key card, a garage remote, or your TV\'s infrared.',
                'It has a small screen and a playful dolphin mascot that "levels up" the more you use it. You explore menus, save signals, and play them back later.'],
        h3: 'What you can try first', bullets: ['Read a contactless card and see its ID on screen', 'Copy your TV remote and use the Flipper instead', 'Save a sub-GHz signal and replay it later'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'For people comfortable with radio & protocol basics.',
        paras: ['The Flipper bundles several radios into one device: a <b>sub-GHz transceiver</b> (300–928 MHz) for remotes and sensors, a <b>125 kHz RFID</b> reader, a <b>13.56 MHz NFC</b> module, infrared, an iButton/1-Wire contact, plus GPIO pins for hardware projects.',
                'Each app decodes a protocol — reading a card\'s UID, capturing a remote\'s modulation, or emulating a saved tag. Fixed-code signals can be replayed; rolling-code ones can\'t simply be cloned.'],
        h3: 'Key concepts', bullets: ['Fixed code vs. rolling code (why replay sometimes fails)', 'Reading vs. emulating an RFID/NFC tag', 'Modulation types on sub-GHz (ASK/OOK, FSK)', 'Extending it with custom firmware & the WiFi dev board'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'For practitioners doing security research.',
        paras: ['At its core sits an <b>STM32WB55</b> (Cortex-M4 + M0+) coordinating a <b>CC1101</b> for sub-GHz and an <b>ST25R3916</b> NFC front-end. Custom firmwares (Unleashed, RogueMaster, Xtreme) unlock raw capture, extended frequency ranges, BadUSB and protocol fuzzing via the GPIO/CLI.',
                'Realistic engagements focus on weak access-control: 125 kHz EM4100/HID Prox cloning, MIFARE Classic key recovery, and analysis of fixed-code OOK remotes. Rolling-code (KeeLoq) and modern MIFARE DESFire resist trivial replay.'],
        h3: 'Ethics & legality', bullets: ['Only test systems you own or are authorized to assess', 'Jamming & unauthorized interception are illegal in most regions', 'Keep written scope & rules of engagement'] }
    },
    addons: [
      { name: 'Wi-Fi Dev Board (ESP32-S2)', desc: 'Adds Wi-Fi via the Marauder firmware: network scan, deauth, evil portal, packet & PMKID capture, beacon spam. The Flipper has no Wi-Fi on its own — this board is what enables it.' },
      { name: 'Video Game Module (RP2040)', desc: 'Extra compute + display features; also drives some signal/visualisation apps and accessories.' },
      { name: 'Proto / GPIO modules', desc: 'Break out the 18 GPIO pins to wire sensors, external CC1101 amps, NRF24 boards or custom hardware.' },
      { name: 'NFC Magspoof / external antenna', desc: 'Community add-ons that extend NFC range or emulate magnetic-stripe data (advanced, jurisdiction-dependent).' }
    ],
    specs: [['MCU', 'STM32WB55'], ['Sub-GHz', 'CC1101 · 300–928 MHz'], ['NFC', 'ST25R3916 · 13.56 MHz'], ['RFID', '125 kHz LF'], ['GPIO', '18 pins'], ['Battery', '2000 mAh'], ['Link', 'USB-C · BLE'], ['Firmware', 'Stock / Custom']],
    related: ['RFID', 'NFC', 'Sub-GHz', 'Replay attack', 'Rolling code', 'BadUSB', 'Jamming']
  },

  'usb-rubber-ducky': {
    name: 'USB Rubber Ducky', cat: 'Payload', icon: 'i-keyboard', img: 'images/devices/rubber-ducky.png',
    tagline: 'A USB stick that pretends to be a keyboard and types pre-written scripts at superhuman speed.',
    tags: ['Keystroke injection', 'HID', 'DuckyScript'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'No background needed.',
        paras: ['It looks like a normal USB drive, but when you plug it in the computer thinks a <b>keyboard</b> was connected. It then "types" a list of commands by itself — far faster than a human could.', 'Because computers automatically trust keyboards, the typed commands just run.'],
        h3: 'What it can do', bullets: ['Open an app and type text automatically', 'Run a sequence of keystrokes in seconds', 'Demonstrate why you should lock your screen'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'For those who know the basics.',
        paras: ['It is an <b>HID keystroke-injection</b> device. You write payloads in <b>DuckyScript</b> (e.g. <code>DELAY</code>, <code>STRING</code>, <code>GUI r</code>, <code>ENTER</code>) which compile to keystrokes.', 'It works because the OS trusts any Human-Interface Device on connect — no driver prompt, no confirmation.'],
        h3: 'Good to know', bullets: ['DuckyScript syntax & timing (DELAY matters)', 'Why payloads are OS-specific', 'Mitigations: screen lock, USB device control'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Red-team context.',
        paras: ['The current Hak5 Ducky runs <b>DuckyScript 3.0</b> — variables, conditionals, functions, exfil over keyboard LED state, and "attackmode" combining HID + mass storage.', 'Used for rapid initial access during physical engagements; AV can\'t block legitimate keystrokes. Defences are device-control and BadUSB policies.'],
        h3: 'Defence', bullets: ['USB device allow-listing / Group Policy', 'Disable HID auto-install where possible', 'Lock workstations when unattended'] }
    },
    specs: [['Interface', 'USB-A'], ['Acts as', 'HID keyboard'], ['Language', 'DuckyScript 3.0'], ['Storage', 'microSD']],
    related: ['Keystroke injection', 'BadUSB', 'Payload', 'HID']
  },

  'wifi-pineapple': {
    name: 'Wi-Fi Pineapple', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/wifi-pineapple.jpg',
    tagline: 'A wireless auditing platform for testing Wi-Fi networks and running rogue access-point attacks.',
    tags: ['Rogue AP', 'Evil twin', 'Recon', 'Modules'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It is a special router built for <b>testing Wi-Fi security</b>. It can see the networks and devices nearby, and create fake hotspots to study how Wi-Fi attacks work.'],
        h3: 'What it shows', bullets: ['Which Wi-Fi networks & devices are around', 'How a fake hotspot can fool a device', 'Why public Wi-Fi can be risky'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Wireless basics assumed.',
        paras: ['Dual radios let it do <b>recon</b> of APs/clients and run <b>evil-twin / rogue-AP</b> attacks, captive portals, deauthentication and man-in-the-middle via modules. The PineAP suite automates much of this.', 'It\'s a platform for <b>authorized</b> wireless pentests.'],
        h3: 'Concepts', bullets: ['Evil twin & captive portals', 'Deauth & client de-association', 'Handshake / PMKID capture for offline cracking'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Engagement context.',
        paras: ['Runs an OpenWrt-based firmware with a module ecosystem. Supports karma-style probe responses, client-less PMKID capture and MITM tooling.', 'Modern <b>WPA3 + PMF</b> (protected management frames) blunt deauth and evil-twin attacks — scope and target config matter.'],
        h3: 'Notes', bullets: ['Only test networks you are authorized to assess', 'WPA3/PMF changes the threat model', 'Document scope & rules of engagement'] }
    },
    specs: [['Radios', 'Dual-band'], ['Firmware', 'OpenWrt-based'], ['Interfaces', 'USB / Ethernet'], ['Power', 'USB-C']],
    related: ['Rogue AP', 'Evil twin', 'Deauth', 'MITM', 'PMKID']
  },

  'proxmark3': {
    name: 'Proxmark3', cat: 'Wireless', icon: 'i-key', img: 'images/devices/proxmark3.png',
    tagline: 'The reference tool for RFID research — read, analyze, clone and emulate access cards.',
    tags: ['125 kHz LF', '13.56 MHz HF', 'Cloning', 'Emulation'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It reads the tiny chips inside <b>access cards and key fobs</b>, and can copy simple cards onto blank ones. People use it to test how secure a building\'s access system is.'],
        h3: 'What it does', bullets: ['Read a card and show its ID', 'Copy a simple card to a blank', 'Check if door cards are easy to clone'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Some RFID knowledge helps.',
        paras: ['It works on both <b>LF (125 kHz</b>: EM4100, HID Prox) and <b>HF (13.56 MHz</b>: MIFARE). You can read a UID, clone fixed cards, emulate a tag, or sniff the conversation between a reader and card.', 'It runs standalone or with the <code>pm3</code> client on a computer.'],
        h3: 'Concepts', bullets: ['LF vs HF cards', 'Reading vs cloning vs emulating', 'Sniffing reader ↔ card traffic'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Assessment context.',
        paras: ['An FPGA front-end drives the antennas. It can recover <b>MIFARE Classic</b> keys (darkside, nested, hardnested), brute-force weak LF tags, and capture raw traces.', 'DESFire / SmartMX and properly-keyed systems resist these — the RDV4 is the common modern variant.'],
        h3: 'Notes', bullets: ['Authorized physical-access assessments only', 'MIFARE Classic is broken; DESFire is not trivially', 'Keep cloned-card handling in scope'] }
    },
    specs: [['LF', '125 kHz'], ['HF', '13.56 MHz'], ['Core', 'FPGA + ARM'], ['Client', 'pm3 CLI']],
    related: ['RFID', 'NFC', 'Cloning', 'MIFARE']
  },

  'hackrf-one': {
    name: 'HackRF One', cat: 'Wireless', icon: 'i-radar', img: 'images/devices/hackrf.jpg',
    tagline: 'A wide-band software-defined radio (SDR) that can receive and transmit across a huge frequency range.',
    tags: ['SDR', '1 MHz–6 GHz', 'TX / RX', 'GNU Radio'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It is a radio you control with <b>software</b>. It can listen to (and transmit) many kinds of wireless signals across a very wide range — great for learning how wireless actually works.'],
        h3: 'What it does', bullets: ['Tune across a huge range of frequencies', 'Visualise signals on a waterfall display', 'Capture a signal to study later'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'SDR basics assumed.',
        paras: ['A half-duplex SDR covering <b>1 MHz–6 GHz</b> at up to 20 MS/s. With GNU Radio or SDR# you decode, analyse and replay signals.', 'Transmitting requires care — it\'s legally restricted on most bands.'],
        h3: 'Concepts', bullets: ['Sample rate & bandwidth trade-offs', 'Half-duplex (not RX+TX at once)', 'Why TX is heavily regulated'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['8-bit samples, half-duplex. Used for protocol reverse-engineering, replay, signal generation and lab GPS/GSM research. Pair with a PortaPack for standalone operation.', 'Transmitting outside ISM bands needs a lab / Faraday environment and authorization.'],
        h3: 'Notes', bullets: ['Lab/Faraday only for TX experiments', 'Mind legal limits per band & region', 'Great for learning RF DSP'] }
    },
    specs: [['Range', '1 MHz – 6 GHz'], ['Sample rate', '20 MS/s'], ['Duplex', 'Half'], ['Interface', 'USB']],
    related: ['SDR', 'Sub-GHz', 'Jamming', 'Replay attack']
  },

  'kali-linux': {
    name: 'Kali Linux', cat: 'Software', icon: 'i-terminal', img: 'images/devices/kali-linux.png',
    tagline: 'A Linux distribution preloaded with hundreds of security and penetration-testing tools.',
    tags: ['Distro', 'Pentest', 'Live USB', 'NetHunter'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It is a version of <b>Linux made for security testing</b>. It comes with lots of analysis and "hacking" tools already installed, so you don\'t set everything up yourself.'],
        h3: 'How people use it', bullets: ['Run it in a virtual machine to experiment safely', 'Boot it from a USB stick (live mode)', 'Learn security tools in one place'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Linux basics assumed.',
        paras: ['A Debian-based distro grouping tools for recon (<code>nmap</code>), exploitation (<code>Metasploit</code>), wireless (<code>aircrack-ng</code>), web (<code>Burp</code>) and forensics. Run it as a VM, live USB, WSL or ARM image.'],
        h3: 'Concepts', bullets: ['Metapackages (install tool groups)', 'VM vs live vs WSL', 'Why a dedicated testing OS'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Practitioner context.',
        paras: ['A rolling release with custom kernels supporting wireless injection, "undercover" mode, and <b>Kali NetHunter</b> for Android. It\'s the standard pentest workbench.', 'Use it with proper authorization, scope and rules of engagement.'],
        h3: 'Notes', bullets: ['Keep it isolated / snapshotted', 'Don\'t test systems without permission', 'Pair with a methodology (PTES/OWASP)'] }
    },
    specs: [['Base', 'Debian'], ['Tools', '600+'], ['Forms', 'VM / Live / WSL / ARM'], ['Release', 'Rolling']],
    related: ['Pentest', 'Metasploit', 'Nmap', 'Brute force']
  },

  'wireshark': {
    name: 'Wireshark', cat: 'Software', icon: 'i-shark', img: 'images/devices/wireshark.png',
    tagline: "The world's most-used network protocol analyzer — capture and inspect traffic packet by packet.",
    tags: ['Packet capture', 'Analysis', 'Filters', 'Forensics'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It shows all the little messages ("<b>packets</b>") your computer sends and receives over a network, so you can actually see what is happening behind the scenes.'],
        h3: 'What it shows', bullets: ['Every packet going in and out', 'Which apps talk to which servers', 'When something is sent in plain text'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Networking basics assumed.',
        paras: ['It does live capture and offline analysis with powerful <b>display filters</b> (e.g. <code>http</code>, <code>ip.addr==…</code>), stream following and dissectors for thousands of protocols.', 'You need capture privileges, and you can spot plaintext credentials or troubleshoot issues.'],
        h3: 'Concepts', bullets: ['Capture vs display filters', 'Follow TCP/HTTP streams', 'Why HTTPS shows as encrypted'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'IR / forensics context.',
        paras: ['Deep protocol dissection, TLS decryption (with key material), the <code>tshark</code> CLI, expert info, and Wi-Fi capture in monitor mode. A core forensics and incident-response tool.', 'Capturing other people\'s traffic without authorization is illegal.'],
        h3: 'Notes', bullets: ['Only capture traffic you are authorized to', 'Use tshark for scripted/bulk analysis', 'Mind privacy & data-handling rules'] }
    },
    specs: [['Type', 'Protocol analyzer'], ['CLI', 'tshark'], ['Protocols', 'Thousands'], ['Capture', 'libpcap / Npcap']],
    related: ['Packet capture', 'MITM', 'Sniffing', 'Spoofing']
  },

  'kiisu': {
    name: 'KIISU', cat: 'Hardware', icon: 'i-cpu', img: 'images/devices/kiisu.jpg',
    tagline: 'A compact, open Flipper-Zero-style multi-tool you build yourself — sub-GHz, NFC, IR and BadUSB in one DIY board.',
    tags: ['Sub-GHz', 'NFC', 'Infrared', 'BadUSB', 'DIY'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['KIISU is a home-buildable version of the Flipper Zero. It packs the same kinds of tricks — copying remotes, reading contactless cards, blasting infrared — into a cheaper board you assemble and flash yourself.'],
        h3: 'What it can do', bullets: ['Read & replay simple radio remotes', 'Read contactless (NFC) card IDs', 'Act as an IR remote for TVs & ACs'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['It bundles a <b>CC1101</b> sub-GHz radio, an NFC front-end, IR LED and USB HID into one MCU board, driven by open firmware. Because it is DIY, capabilities depend on which modules you solder and which firmware you flash.'],
        h3: 'Concepts', bullets: ['Fixed vs rolling code (why replay can fail)', 'Flashing open firmware over USB', 'Adding modules to extend it'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['A community answer to Flipper pricing/availability — same CC1101 + NFC building blocks, fully open. Good for low-frequency RFID cloning, OOK remote analysis and IR research in a lab. Rolling-code and modern DESFire still resist trivial replay.'],
        h3: 'Ethics', bullets: ['Only test hardware you own or are authorized to', 'Interception/jamming is illegal in most regions', 'Keep a documented scope'] }
    },
    specs: [['Sub-GHz', 'CC1101'], ['NFC', '13.56 MHz'], ['Build', 'DIY / solder'], ['Firmware', 'Open source']],
    related: ['RFID', 'NFC', 'Sub-GHz', 'BadUSB', 'Replay attack']
  },

  'esp32-bruce-cyd': {
    name: 'ESP32 Bruce (CYD 2432S028)', cat: 'Hardware', icon: 'i-monitor', img: 'images/devices/esp32-bruce-cyd.png',
    tagline: 'A "Cheap Yellow Display" ESP32 board running the Bruce firmware — a touchscreen Swiss-army knife for Wi-Fi, BLE, IR, RF and BadUSB.',
    tags: ['Wi-Fi', 'BLE', 'Infrared', 'BadUSB', 'Touchscreen'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The "CYD" is a cheap ESP32 board with a small touch screen. Flash the <b>Bruce</b> firmware onto it and it becomes a pocket toolkit — scan Wi-Fi, mess with Bluetooth, send IR codes and more, all from the touchscreen.'],
        h3: 'What it can do', bullets: ['List nearby Wi-Fi networks', 'Send fake Bluetooth pop-ups (BLE spam)', 'Blast IR to control TVs'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Bruce is an all-in-one ESP32 firmware: Wi-Fi (scan, deauth, evil portal, packet capture), <b>BLE</b> tools, IR TX/RX, RF with an added CC1101, and USB HID (BadUSB). The CYD gives it a touchscreen UI for under $20-ish of hardware.'],
        h3: 'Concepts', bullets: ['Why ESP32 does Wi-Fi + BLE but not sub-GHz alone', 'Adding a CC1101 for RF', 'Evil-portal captive pages'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['A rapidly-developed open firmware turning commodity ESP32 displays into a Flipper-adjacent platform. Strong for Wi-Fi auditing (PMKID/handshake capture, rogue AP) and BLE research; RFID/NFC and sub-GHz need extra modules. Cheap enough to keep several purpose-flashed.'],
        h3: 'Notes', bullets: ['2.4 GHz only on bare ESP32', 'Deauth/evil-portal are lab-only without authorization', 'Great value learning platform'] }
    },
    specs: [['MCU', 'ESP32 (CYD 2432S028)'], ['Radios', 'Wi-Fi + BLE'], ['Display', '2.8" touch'], ['Firmware', 'Bruce']],
    related: ['WiFi', 'Bluetooth', 'BadUSB', 'Evil portal', 'Deauth']
  },

  'lilygo-t-embed': {
    name: 'LilyGO T-Embed CC1101', cat: 'Hardware', icon: 'i-radar', img: 'images/devices/lilygo-t-embed.jpg',
    tagline: 'A polished ESP32-S3 handheld with a built-in CC1101 radio and rotary dial — sub-GHz, Wi-Fi, BLE and IR in a finished-feeling package.',
    tags: ['Sub-GHz', 'Wi-Fi', 'BLE', 'Infrared', 'Display'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The T-Embed is a small, nicely-built gadget with a screen and a click-wheel. With the right firmware it reads and replays simple radio remotes, scans Wi-Fi and sends infrared — a bit like a premium DIY Flipper.'],
        h3: 'What it can do', bullets: ['Capture & replay sub-GHz remotes', 'Scan Wi-Fi & Bluetooth', 'Send IR remote codes'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['An <b>ESP32-S3</b> (Wi-Fi + BLE) paired with an onboard <b>CC1101</b> sub-GHz transceiver, IR, a rotary encoder and a colour display. It runs firmwares like Bruce or custom builds — the built-in CC1101 is what lets it do 300–928 MHz remotes without add-ons.'],
        h3: 'Concepts', bullets: ['CC1101 covers 300–928 MHz', 'ESP32-S3 handles 2.4 GHz Wi-Fi/BLE', 'Encoder-driven UI'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['One of the tidier all-in-one boards: real sub-GHz on-device plus Wi-Fi/BLE means OOK remote analysis and wireless recon from a single unit. Fixed-code garage/gate remotes are the classic study target; rolling-code needs more than replay.'],
        h3: 'Notes', bullets: ['Great hardware for a DIY multi-tool', 'Sub-GHz TX is regulated per band', 'Only test what you own/are authorized on'] }
    },
    specs: [['MCU', 'ESP32-S3'], ['Sub-GHz', 'CC1101'], ['Radios', 'Wi-Fi + BLE'], ['Input', 'Rotary + display']],
    related: ['Sub-GHz', 'WiFi', 'Bluetooth', 'Replay attack']
  },

  'm5shark-device': {
    name: 'M5Shark Device', cat: 'Hardware', icon: 'i-cpu', img: 'images/devices/m5shark-device.jpg',
    tagline: 'A packaged M5Stack-based multi-tool that bundles Wi-Fi/BLE auditing and gadget features into a finished, battery-powered unit.',
    tags: ['Wi-Fi', 'BLE', 'Display', 'Battery'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The M5Shark is a ready-to-use little device built on M5Stack hardware. It focuses on wireless tricks — scanning Wi-Fi and Bluetooth around you — in a self-contained box with a screen and battery.'],
        h3: 'What it can do', bullets: ['Scan nearby Wi-Fi networks & clients', 'Play with Bluetooth signals', 'Run untethered on its battery'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Built on an <b>ESP32</b> M5Stack core (Wi-Fi + BLE), it runs Marauder/Bruce-style firmware for network scanning, deauth, beacon/BLE spam and packet capture, with a display and enclosure so it just works out of the box.'],
        h3: 'Concepts', bullets: ['2.4 GHz Wi-Fi + BLE from ESP32', 'Packaged vs bare-board tradeoffs', 'On-device UI & storage'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['A convenience play: same ESP32 wireless capabilities as bare Marauder boards, but assembled with battery, screen and case. Good for quick site surveys and demos; lacks native sub-GHz/NFC unless extended.'],
        h3: 'Notes', bullets: ['Deauth/spam are lab-only without permission', '2.4 GHz only unless modules added', 'Pay for the packaging & convenience'] }
    },
    specs: [['MCU', 'ESP32 (M5Stack)'], ['Radios', 'Wi-Fi + BLE'], ['Display', 'Built-in'], ['Power', 'Battery']],
    related: ['WiFi', 'Bluetooth', 'Deauth', 'Recon']
  },

  'sharkdeck': {
    name: 'SharkDeck AI Handheld', cat: 'Hardware', icon: 'i-terminal', img: 'images/devices/sharkdeck.png',
    tagline: 'A pocket Linux handheld — a tiny computer with a screen and keyboard you can load with real security tooling on the go.',
    tags: ['Linux', 'Handheld', 'Wi-Fi', 'BadUSB'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The SharkDeck is a very small handheld computer that runs Linux. Because it is a real computer (not just a gadget), you can install proper tools on it and use it anywhere — like carrying a mini laptop in your pocket.'],
        h3: 'What it can do', bullets: ['Run a real Linux terminal in your hand', 'Use command-line security tools', 'Connect over Wi-Fi & USB'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['It is a small single-board computer with display, keyboard and battery running a Linux distro. That means <code>nmap</code>, <code>aircrack-ng</code>, Python scripts and SSH all run natively — closer to a Raspberry Pi handheld than an ESP32 gadget.'],
        h3: 'Concepts', bullets: ['SBC handheld vs microcontroller gadget', 'Runs full Linux userland', 'USB gadget / HID modes'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Field context.',
        paras: ['A portable Linux platform for field work: wireless auditing with a supported adapter, scripted recon, and BadUSB/gadget modes. Capability is bounded by CPU/RAM and the Wi-Fi chipset (monitor-mode support matters).'],
        h3: 'Notes', bullets: ['Check adapter for monitor/injection support', 'Treat it like any authorized pentest host', 'Keep it patched & encrypted'] }
    },
    specs: [['OS', 'Linux'], ['Form', 'Handheld + keyboard'], ['Radios', 'Wi-Fi / BT'], ['Power', 'Battery']],
    related: ['Pentest', 'Nmap', 'WiFi', 'Recon']
  },

  'halehound-cyd': {
    name: 'HaleHound CYD', cat: 'Hardware', icon: 'i-monitor', img: 'images/devices/halehound-cyd.jpg',
    tagline: 'A custom build on the Cheap Yellow Display ESP32 — a touchscreen Wi-Fi/BLE/IR/BadUSB tool for a handful of dollars.',
    tags: ['Wi-Fi', 'BLE', 'Infrared', 'BadUSB', 'Touchscreen'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['HaleHound is another project that turns the cheap ESP32 touchscreen board into a wireless gadget. Flash it once and you get a menu of Wi-Fi, Bluetooth and infrared tools on a little colour screen.'],
        h3: 'What it can do', bullets: ['Scan & interact with Wi-Fi', 'BLE spam & scanning', 'IR send + simple BadUSB'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Same <b>CYD (ESP32 + 2.8" touch)</b> hardware as the Bruce build, with a custom firmware focused on a clean touchscreen menu. Wi-Fi and BLE come from the ESP32; IR and USB HID round it out.'],
        h3: 'Concepts', bullets: ['One-time flash then GUI-driven', '2.4 GHz Wi-Fi/BLE only natively', 'Captive-portal / deauth basics'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['Illustrates the CYD ecosystem — cheap, disposable, purpose-flashable ESP32 tools. Solid for 2.4 GHz Wi-Fi auditing and BLE experiments; no native sub-GHz/NFC. Ideal as a throwaway demo unit.'],
        h3: 'Notes', bullets: ['Lab-only for deauth / evil portal', 'Extend with modules for RF/NFC', 'Keep firmware source in view'] }
    },
    specs: [['MCU', 'ESP32 (CYD)'], ['Radios', 'Wi-Fi + BLE'], ['Display', '2.8" touch'], ['Firmware', 'Custom']],
    related: ['WiFi', 'Bluetooth', 'BadUSB', 'Deauth']
  },

  'm5stickc': {
    name: 'M5StickC Plus/Plus2/S3', cat: 'Hardware', icon: 'i-cpu', img: 'images/devices/m5stickc.png',
    tagline: 'A thumb-sized ESP32 dev-kit series — the tiny, hackable building block behind many Wi-Fi/IR gadget projects.',
    tags: ['ESP32', 'Wi-Fi', 'BLE', 'Infrared', 'DIY'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The M5StickC is a tiny finger-sized computer with a screen, battery and buttons. It is meant for building your own gadgets — load different programs and it becomes a Wi-Fi scanner, an IR remote, a sensor and more.'],
        h3: 'What it can do', bullets: ['Scan Wi-Fi & Bluetooth', 'Act as a programmable IR remote', 'Run little custom apps'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['It is an <b>ESP32</b> dev-kit (Wi-Fi + BLE) with display, IMU, IR and battery in a tiny case. You flash it with Arduino/PlatformIO or community firmware (Marauder, Bruce). It is the foundation many "gadget" tools are built on.'],
        h3: 'Concepts', bullets: ['Dev-kit vs finished product', 'Flashing via USB-C', 'Adding HATs/modules'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Maker context.',
        paras: ['A go-to platform for prototyping wireless tools: PMKID/handshake capture, BLE spam, IR replay, custom sensors. Capability equals whatever you flash; 2.4 GHz only without extra radios. Cheap enough to dedicate one per payload.'],
        h3: 'Notes', bullets: ['ESP32 = 2.4 GHz Wi-Fi/BLE only', 'Great for learning embedded + RF', 'Authorize any active Wi-Fi testing'] }
    },
    specs: [['MCU', 'ESP32 / ESP32-S3'], ['Radios', 'Wi-Fi + BLE'], ['Extras', 'IMU · IR · display'], ['Power', 'Battery']],
    related: ['WiFi', 'Bluetooth', 'Deauth', 'Recon']
  },

  'bw16-network-commander': {
    name: 'BW16 Network Commander', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/bw16-network-commander.jpg',
    tagline: 'A dual-band (2.4 + 5 GHz) Wi-Fi auditing tool built on the RTL8720 — reaching networks the ESP32 boards can\'t see.',
    tags: ['Wi-Fi', '2.4 GHz', '5 GHz', 'Scanning'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['Most cheap Wi-Fi gadgets only see the older 2.4 GHz networks. The BW16 can also see the faster <b>5 GHz</b> ones, so it gives a fuller picture of the Wi-Fi around you.'],
        h3: 'What it can do', bullets: ['Scan both 2.4 GHz and 5 GHz Wi-Fi', 'List networks & their channels', 'Spot devices other tools miss'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['It uses the <b>RTL8720 (BW16)</b> dual-band Wi-Fi chip instead of an ESP32, so it operates on 2.4 GHz and 5 GHz. That enables scanning, deauth and monitoring on modern 5 GHz APs that ESP32-only tools cannot touch.'],
        h3: 'Concepts', bullets: ['Why 2.4 vs 5 GHz coverage matters', 'RTL8720 vs ESP32 capabilities', 'Channels & band steering'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['Dual-band coverage is the differentiator — recon and deauth against 5 GHz-only or band-steered networks. Firmware support is younger than the ESP32 ecosystem, but the extra band closes a real gap in cheap Wi-Fi auditing.'],
        h3: 'Notes', bullets: ['Deauth is illegal without authorization', 'Firmware/feature set still maturing', 'Great complement to ESP32 tools'] }
    },
    specs: [['Chip', 'RTL8720 (BW16)'], ['Bands', '2.4 + 5 GHz'], ['Focus', 'Wi-Fi audit'], ['Display', 'Optional'] ],
    related: ['WiFi', 'Deauth', 'Recon', 'Sniffing']
  },

  'esp32-marauder': {
    name: 'ESP32 Marauder', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/esp32-marauder.jpg',
    tagline: 'The classic ESP32 Wi-Fi/BLE auditing firmware & board — scan, capture handshakes, deauth and spam beacons on 2.4 GHz.',
    tags: ['Wi-Fi', 'BLE', 'PMKID', 'Deauth'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['Marauder is a popular program you put on an ESP32 board to explore Wi-Fi. It lists networks, shows who is connected, and can run classic wireless demos — a favourite first "Wi-Fi hacking" learning tool.'],
        h3: 'What it can do', bullets: ['List Wi-Fi networks & connected devices', 'Capture handshakes for study', 'Beacon & probe spam demos'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Marauder firmware turns an <b>ESP32</b> into a 2.4 GHz Wi-Fi + BLE tool: AP/station scanning, <b>PMKID & handshake capture</b>, deauth, beacon/probe spam, packet monitor and sniffing — often with a small screen and SD logging.'],
        h3: 'Concepts', bullets: ['Handshake / PMKID for offline cracking', 'Deauth forces a reconnect', '2.4 GHz only (no 5 GHz)'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['The reference cheap Wi-Fi auditing platform. Capture handshakes/PMKID here, crack offline with hashcat elsewhere. Limited to 2.4 GHz and ESP32 RF constraints, but ubiquitous, documented and cheap.'],
        h3: 'Notes', bullets: ['Only test networks you own/are authorized on', 'Deauth is restricted in many regions', 'Pair with hashcat for cracking'] }
    },
    specs: [['MCU', 'ESP32'], ['Band', '2.4 GHz'], ['Captures', 'PMKID / handshake'], ['Log', 'SD card']],
    related: ['WiFi', 'Deauth', 'Brute force', 'Sniffing']
  },

  'mini-esp32-marauder': {
    name: 'Mini ESP32 Marauder', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/mini-esp32-marauder.jpg',
    tagline: 'A pocket-sized Marauder build with a small screen and battery — the same 2.4 GHz Wi-Fi/BLE toolkit, keychain-sized.',
    tags: ['Wi-Fi', 'BLE', 'Portable', 'Battery'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['This is a tiny version of the Marauder Wi-Fi tool with its own little screen and battery, so you can carry it around and scan Wi-Fi without a laptop.'],
        h3: 'What it can do', bullets: ['Scan Wi-Fi on the go', 'Capture handshakes to SD', 'Run untethered on battery'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Identical <b>ESP32 Marauder</b> firmware and 2.4 GHz feature set (scan, PMKID/handshake, deauth, spam), just miniaturised with an integrated display and LiPo. Convenience and portability over a bare board.'],
        h3: 'Concepts', bullets: ['Same features, smaller form', '2.4 GHz only', 'Battery + screen integration'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['A field-friendly Marauder: quick walk-around surveys and handshake captures with no cabling. Same ESP32 limits apply; value is the ergonomics.'],
        h3: 'Notes', bullets: ['Authorize any active testing', 'Deauth restricted by law', 'Crack captures offline elsewhere'] }
    },
    specs: [['MCU', 'ESP32'], ['Band', '2.4 GHz'], ['Display', 'Onboard'], ['Power', 'Battery']],
    related: ['WiFi', 'Deauth', 'Recon']
  },

  'esp32-c5-marauder': {
    name: 'ESP32-C5 Marauder', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/esp32-c5-marauder.jpg',
    tagline: 'Marauder on the ESP32-C5 — Espressif\'s first dual-band chip — bringing 5 GHz Wi-Fi to the cheap-board ecosystem.',
    tags: ['Wi-Fi', '2.4 GHz', '5 GHz', 'BLE'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['A newer Marauder tool that, unlike the older ESP32 ones, can also see the faster <b>5 GHz</b> Wi-Fi networks — so it covers more of what is actually around you.'],
        h3: 'What it can do', bullets: ['Scan 2.4 GHz and 5 GHz Wi-Fi', 'Capture handshakes', 'Standard Marauder demos'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['Built on the <b>ESP32-C5</b>, Espressif\'s first dual-band Wi-Fi 6 chip. Marauder firmware gains 5 GHz scanning/monitoring alongside the usual 2.4 GHz toolkit — a big step for cheap auditing hardware.'],
        h3: 'Concepts', bullets: ['ESP32-C5 = dual-band (2.4 + 5 GHz)', 'Why 5 GHz coverage was missing before', 'Firmware still catching up to hardware'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['Closes the ESP32 ecosystem\'s biggest gap — 5 GHz. Enables recon/deauth against modern 5 GHz networks at ESP32 prices. Support is early; feature parity with 2.4 GHz builds is a moving target.'],
        h3: 'Notes', bullets: ['Bleeding-edge firmware support', 'Deauth needs authorization', 'Watch the C5 Marauder project for updates'] }
    },
    specs: [['MCU', 'ESP32-C5'], ['Bands', '2.4 + 5 GHz'], ['Captures', 'PMKID / handshake'], ['Focus', 'Wi-Fi audit']],
    related: ['WiFi', 'Deauth', 'Recon', 'Sniffing']
  },

  'm5shark-marauder-v8': {
    name: 'M5Shark Marauder v8 (2.4/5G)', cat: 'Wireless', icon: 'i-antenna', img: 'images/devices/m5shark-marauder-v8.png',
    tagline: 'A packaged dual-band Marauder unit — 2.4 GHz and 5 GHz Wi-Fi auditing with a screen and battery, ready to go.',
    tags: ['Wi-Fi', '2.4 GHz', '5 GHz', 'Battery'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['A finished handheld that runs the Marauder Wi-Fi tools and can see both the older and newer (2.4 & 5 GHz) Wi-Fi networks, with its own screen and battery so it just works.'],
        h3: 'What it can do', bullets: ['Dual-band Wi-Fi scanning', 'Capture handshakes to storage', 'Run untethered'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['A ready-built unit combining a dual-band Wi-Fi radio with the Marauder toolset (scan, deauth, PMKID/handshake, spam) plus display, storage and battery — the packaged, dual-band answer to bare ESP32 boards.'],
        h3: 'Concepts', bullets: ['2.4 + 5 GHz coverage', 'Packaged vs DIY', 'On-device logging'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['For people who want dual-band Marauder without building it: quick surveys and captures across both bands from one enclosed device. You pay for integration; the underlying capability matches the dual-band chipset.'],
        h3: 'Notes', bullets: ['Authorize all active Wi-Fi testing', 'Deauth is legally restricted', 'Crack captures offline'] }
    },
    specs: [['Bands', '2.4 + 5 GHz'], ['Firmware', 'Marauder'], ['Display', 'Built-in'], ['Power', 'Battery']],
    related: ['WiFi', 'Deauth', 'Recon', 'Sniffing']
  },

  'chameleon-ultra': {
    name: 'Chameleon Ultra V2', cat: 'Wireless', icon: 'i-key', img: 'images/devices/chameleon-ultra.jpg',
    tagline: 'A credit-card-sized NFC/RFID emulator that can store and impersonate many contactless cards at once.',
    tags: ['NFC', 'RFID', 'Emulation', 'BLE'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The Chameleon is a thin card that can <b>pretend to be</b> your contactless cards. You can save several cards on it and have it act like whichever one you need — handy for testing access systems.'],
        h3: 'What it can do', bullets: ['Store multiple card profiles', 'Emulate a saved NFC/RFID card', 'Read cards to copy their data'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['A dedicated <b>13.56 MHz + 125 kHz</b> emulation device (not a general gadget). It reads, stores and replays card data with several "slots", controlled over BLE from a phone app. Strong at MIFARE Classic emulation and LF cards.'],
        h3: 'Concepts', bullets: ['Reading vs emulating a tag', 'UID vs full-content cloning', 'Why some cards resist cloning'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['Purpose-built for access-control assessments: MIFARE Classic key/data emulation, LF EM/HID Prox, multi-slot storage and scripting. More capable at NFC emulation than multi-tools; DESFire/secure-element cards still resist.'],
        h3: 'Ethics', bullets: ['Only clone cards you are authorized to test', 'Badge cloning can be a crime', 'Document scope for access tests'] }
    },
    specs: [['Freqs', '13.56 MHz + 125 kHz'], ['Slots', 'Multiple'], ['Control', 'BLE app'], ['Battery', 'Rechargeable']],
    related: ['NFC', 'RFID', 'Clone a card', 'Replay attack']
  },

  'digispark': {
    name: 'Digispark ATtiny85', cat: 'Payload', icon: 'i-keyboard', img: 'images/devices/digispark.jpg',
    tagline: 'A $1–5 microcontroller that can act as a USB keyboard — the cheapest way to learn BadUSB keystroke injection.',
    tags: ['BadUSB', 'HID', 'ATtiny85', 'DIY'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The Digispark is a tiny, super-cheap chip you can program to pretend to be a keyboard. Plug it in and it "types" commands by itself — the budget version of a Rubber Ducky.'],
        h3: 'What it can do', bullets: ['Pretend to be a USB keyboard', 'Auto-type a saved payload', 'Teach how BadUSB works cheaply'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['An <b>ATtiny85</b> board flashed via the Arduino "DigiKeyboard" library to emulate an HID keyboard. You write the payload in Arduino/C rather than DuckyScript, then it injects keystrokes on plug-in.'],
        h3: 'Concepts', bullets: ['HID injection basics', 'Arduino payload vs DuckyScript', 'Timing/DELAY still matters'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Context.',
        paras: ['Minimal but effective for demos and cheap disposable payloads. Limited flash/pins and quirky enumeration vs a real Ducky, but at a dollar it is the classic BadUSB teaching tool. Defence is USB device control + screen lock.'],
        h3: 'Defence', bullets: ['USB allow-listing', 'Lock unattended screens', 'Disable HID auto-install where possible'] }
    },
    specs: [['MCU', 'ATtiny85'], ['Acts as', 'HID keyboard'], ['Program', 'Arduino / C'], ['Cost', '~$1–5']],
    related: ['BadUSB', 'Keystroke injection', 'HID', 'Payload']
  },

  'omg-cable': {
    name: 'O.MG Cable', cat: 'Payload', icon: 'i-keyboard', img: 'images/devices/omg-cable.jpg',
    tagline: 'A normal-looking charging cable with a hidden Wi-Fi implant that can inject keystrokes and be controlled remotely.',
    tags: ['BadUSB', 'HID', 'Wi-Fi C2', 'Implant'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['It looks and works like an ordinary phone/USB cable, but hidden inside is a tiny computer. It can secretly type commands into a machine — and an attacker can trigger it over <b>Wi-Fi</b> from nearby.'],
        h3: 'What it can do', bullets: ['Charge/sync like a real cable', 'Secretly inject keystrokes', 'Be controlled wirelessly'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['An HID keystroke-injection implant built into the cable connector, with an onboard Wi-Fi access point / client for a remote control panel. Operators trigger payloads live, run geofencing, and wipe the implant remotely.'],
        h3: 'Concepts', bullets: ['Why "just a cable" defeats intuition', 'Wi-Fi C2 for live triggering', 'Supply-chain / trust risk'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Red-team context.',
        paras: ['A premium HID implant: web UI, DuckyScript-style payloads, keylogging on some models, geofencing and self-destruct. Used in physical/social engagements and awareness training. The lesson: never trust unknown cables.'],
        h3: 'Defence', bullets: ['Use your own cables / data blockers', 'USB device control & screen lock', 'Treat found cables as hostile'] }
    },
    specs: [['Type', 'HID implant cable'], ['Control', 'Wi-Fi web UI'], ['Payloads', 'DuckyScript-style'], ['Extras', 'Geofence / wipe']],
    related: ['BadUSB', 'Keystroke injection', 'Implant', 'HID']
  },

  'rf-clown': {
    name: 'RF CLOWN V2.0', cat: 'Wireless', icon: 'i-radar', img: 'images/devices/rf-clown.jpg',
    tagline: 'A 2.4 GHz multi-protocol noise/research board built around nRF24 radios — a hands-on look at how RF interference works.',
    tags: ['2.4 GHz', 'nRF24', 'RF research', 'BLE'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The RF Clown is a small board that plays with the crowded <b>2.4 GHz</b> space — the same band Wi-Fi, Bluetooth and many wireless toys use. It is a tool for learning how radio interference and hopping work.'],
        h3: 'What it can do', bullets: ['Explore the busy 2.4 GHz band', 'Demonstrate RF interference', 'Study how devices hop channels'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['It uses one or more <b>nRF24L01</b> transceivers to hop across 2.4 GHz channels rapidly. Educationally it shows why the band is fragile and how frequency-hopping protocols (BLE, some remotes) are designed to cope.'],
        h3: 'Concepts', bullets: ['Channel hopping & the 2.4 GHz band', 'Why jamming is disruptive (and illegal)', 'nRF24 as a research radio'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Lab context.',
        paras: ['A study platform for 2.4 GHz behaviour and resilience. <b>Deliberate jamming is illegal almost everywhere</b> — legitimate use is understanding interference, protocol robustness and detection, ideally in a shielded/Faraday setup.'],
        h3: 'Legality', bullets: ['Jamming violates radio law in most countries', 'Use only in a controlled lab', 'Focus on defence & detection'] }
    },
    specs: [['Band', '2.4 GHz'], ['Radios', 'nRF24L01'], ['Use', 'RF research / edu'], ['Note', 'Jamming = illegal']],
    related: ['Jamming', 'Bluetooth', 'Sub-GHz', 'Replay attack']
  },

  'nrfbox-v3': {
    name: 'nRFBox-v3', cat: 'Wireless', icon: 'i-radar', img: 'images/devices/nrfbox-v3.jpg',
    tagline: 'An open-source 2.4 GHz research handheld built on nRF24 + ESP32 — scan, analyse and experiment across the 2.4 GHz band.',
    tags: ['2.4 GHz', 'nRF24', 'BLE', 'Display'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The nRFBox is a little DIY handheld with a screen for exploring 2.4 GHz radio — the band Wi-Fi, Bluetooth and wireless gadgets share. It is aimed at learning and experimenting with wireless.'],
        h3: 'What it can do', bullets: ['Scan the 2.4 GHz band', 'Analyse channel activity', 'Experiment with BLE-style signals'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['An open project combining <b>nRF24L01</b> radios with an <b>ESP32</b> and a display: spectrum-style scanning, BLE tools and 2.4 GHz experiments in a self-contained unit. It is a maker/education board, not a finished product.'],
        h3: 'Concepts', bullets: ['nRF24 + ESP32 roles', '2.4 GHz scanning basics', 'Open firmware you can extend'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Lab context.',
        paras: ['A tinkerer\'s 2.4 GHz lab: observe channel usage, study BLE/nRF protocols, prototype tools. Any interference/jamming feature is lab-and-authorization only. Value is openness and hackability.'],
        h3: 'Notes', bullets: ['Keep RF experiments in a controlled setup', 'Jamming is illegal in the open', 'Extend the open firmware yourself'] }
    },
    specs: [['Radios', 'nRF24 + ESP32'], ['Band', '2.4 GHz'], ['Display', 'Onboard'], ['Type', 'Open / DIY']],
    related: ['Bluetooth', 'Jamming', 'Sub-GHz', 'Sniffing']
  },

  'esp32-div': {
    name: 'ESP32-DIV', cat: 'Wireless', icon: 'i-radar', img: 'images/devices/esp32-div.jpg',
    tagline: 'A Flipper-style wireless toolkit on ESP32 — Wi-Fi and BLE recon plus 2.4 GHz experiments in a compact DIY handheld.',
    tags: ['Wi-Fi', 'BLE', '2.4 GHz', 'Display'],
    levels: {
      beginner: { chip: 'Beginner', title: 'What is it, simply?', note: 'Plain language.',
        paras: ['The ESP32-DIV is a small handheld that focuses on wireless — scanning Wi-Fi and Bluetooth and letting you experiment with 2.4 GHz signals, all from a little screen.'],
        h3: 'What it can do', bullets: ['Scan Wi-Fi & Bluetooth', 'Show nearby wireless activity', '2.4 GHz experiments'] },
      inter: { chip: 'Intermediate', title: 'How it actually works', note: 'Basics assumed.',
        paras: ['An <b>ESP32</b>-based build (Wi-Fi + BLE) often paired with an <b>nRF24</b> for extra 2.4 GHz range, packaged with a display as a Flipper-style wireless companion. Firmware provides scanning, spam and capture on 2.4 GHz.'],
        h3: 'Concepts', bullets: ['ESP32 covers 2.4 GHz Wi-Fi/BLE', 'Adding nRF24 for wider 2.4 GHz', 'Wireless-focused (no native sub-GHz/NFC)'] },
      pro: { chip: 'Professional', title: 'Deep dive & tradecraft', note: 'Research context.',
        paras: ['A wireless-recon companion: Wi-Fi handshake/PMKID capture, BLE tooling and 2.4 GHz experiments. Bounded by ESP32 (2.4 GHz only); complements sub-GHz/NFC tools rather than replacing them.'],
        h3: 'Notes', bullets: ['Authorize any active Wi-Fi testing', '2.4 GHz only natively', 'Great budget recon add-on'] }
    },
    specs: [['MCU', 'ESP32 (+nRF24)'], ['Radios', 'Wi-Fi + BLE'], ['Band', '2.4 GHz'], ['Display', 'Onboard']],
    related: ['WiFi', 'Bluetooth', 'Deauth', 'Recon']
  }
};

function renderTool() {
  const host = document.getElementById('toolContent');
  if (!host) return;
  const id = location.hash.slice(1) || 'flipper-zero';
  const t = TOOLS[id] || TOOLS['flipper-zero'];
  document.title = t.name + ' — NULLBYTE';

  const lvlClass = { beginner: 'lvl-beginner', inter: 'lvl-inter', pro: 'lvl-pro' };
  const order = ['beginner', 'inter', 'pro'];
  const panel = (k, i) => {
    const L = t.levels[k];
    const bl = L.bullets ? '<ul class="bullets">' + L.bullets.map(b => '<li>' + b + '</li>').join('') + '</ul>' : '';
    const h3 = L.h3 ? '<h3>' + L.h3 + '</h3>' : '';
    return `<div class="panel-x ${i === 0 ? 'show' : ''}" data-panel="${k}">
      <span class="chip ${lvlClass[k]}"><span class="dot"></span>${L.chip}</span>
      <h2>${L.title}</h2><p class="lnote">${L.note}</p>
      ${L.paras.map(p => '<p>' + p + '</p>').join('')}${h3}${bl}</div>`;
  };

  const levelBtns = order.map((k, i) =>
    `<button data-level="${k}" class="${i === 0 ? 'active' : ''}"><i style="background:${k === 'beginner' ? '#5cc8ff' : k === 'inter' ? '#ffce5c' : 'var(--pink)'}"></i>${t.levels[k].chip}</button>`).join('');

  const addons = t.addons ? `<div class="panel-x show" style="margin-top:1px">
      <h2>Add-ons &amp; modules</h2><p class="lnote">Hardware that extends what it can do</p>
      <div class="addon-list">${t.addons.map(a => `<div class="addon"><h4>${a.name}</h4><p>${a.desc}</p></div>`).join('')}</div></div>` : '';

  const specs = t.specs ? `<div class="panel-x show" style="margin-top:1px">
      <h2>Specs</h2>
      <div class="spec-grid">${t.specs.map(s => `<div><div class="k">${s[0]}</div><div class="v">${s[1]}</div></div>`).join('')}</div></div>` : '';

  const tags = t.tags.map(x => `<span class="chip"><span class="dot"></span>${x}</span>`).join('');
  const related = t.related.map(x => `<a href="glossary.html" class="chip">${x}</a>`).join('');

  host.innerHTML = `
    <div class="wrap crumbs"><a href="tools.html">Tools</a> <span class="sep">/</span> ${t.cat} <span class="sep">/</span> <span style="color:var(--ink)">${t.name}</span></div>
    <section class="wrap tool-hero">
      <div class="tool-visual reveal${t.img ? ' has-img' : ''}">${t.img ? `<img src="${t.img}" alt="${t.name}" onerror="this.parentNode.classList.remove('has-img'); this.outerHTML='<svg class=\\'ico\\'><use href=&quot;#${t.icon}&quot;/></svg>'">` : `<svg class="ico"><use href="#${t.icon}"/></svg>`}</div>
      <div class="reveal" style="animation-delay:.08s">
        <span class="tag tag-acc">${t.cat} · Tool</span>
        <h1>${t.name}</h1>
        <p class="lead">${t.tagline}</p>
        <div class="tool-tags">${tags}</div>
        <div class="level-wrap">
          <p class="tag" style="margin-bottom:10px">Select clearance level</p>
          <div class="level-bar" data-levels>${levelBtns}</div>
        </div>
      </div>
    </section>
    <section class="wrap explain">
      <div class="layout-cols">
        <div>${order.map((k, i) => panel(k, i)).join('')}${addons}${specs}</div>
        <aside class="aside">
          <div class="aside-block">
            <h4>At a glance</h4>
            <div class="feat"><svg class="ico ico-sm"><use href="#${t.icon}"/></svg> Class · ${t.cat}</div>
            <div class="feat"><svg class="ico ico-sm"><use href="#i-credit"/></svg> Skill · Beginner → Pro</div>
            <div class="feat"><svg class="ico ico-sm"><use href="#i-shield"/></svg> Educational reference only</div>
            ${t.addons ? '<a class="btn btn-ghost btn-block" style="margin-top:16px" href="abilities.html"><svg class="ico"><use href="#i-radar"/></svg> View all abilities</a>' : ''}
          </div>
          <div class="aside-block" style="border-bottom:none">
            <h4>Related terms</h4>
            <div class="term-links">${related}</div>
          </div>
        </aside>
      </div>
    </section>`;

  const bar = host.querySelector('[data-levels]');
  const btns = bar.querySelectorAll('[data-level]');
  const panels = host.querySelectorAll('[data-panel]');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.toggle('active', x === b));
    panels.forEach(p => p.classList.toggle('show', p.dataset.panel === b.dataset.level));
  }));
}

renderTool();
window.addEventListener('hashchange', () => { renderTool(); window.scrollTo(0, 0); });
