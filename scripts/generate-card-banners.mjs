import fs from 'fs';

// 1. Read Drivo logo
let drivoLogoB64 = '';
if (fs.existsSync('public/assets/projects/drivo-logo.jpg')) {
  drivoLogoB64 = `data:image/jpeg;base64,${fs.readFileSync('public/assets/projects/drivo-logo.jpg').toString('base64')}`;
}

// 2. Read Moviq icon
let moviqIconB64 = '';
if (fs.existsSync('public/assets/projects/moviq-driver-icon.png')) {
  moviqIconB64 = `data:image/png;base64,${fs.readFileSync('public/assets/projects/moviq-driver-icon.png').toString('base64')}`;
}

// --- Drivo Card Banner SVG (380x170 Landscape) ---
const drivoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 170" width="100%" height="100%">
  <defs>
    <linearGradient id="drivoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1b2a" />
      <stop offset="50%" stop-color="#112240" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="routeLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <filter id="drivoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#10b981" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="380" height="170" fill="url(#drivoBg)" />

  <!-- Geometric Map Grid Lines -->
  <path d="M-20,40 L400,60 M-20,110 L400,90 M80,-20 L100,190 M240,-20 L220,190" stroke="rgba(255,255,255,0.04)" stroke-width="1.5" />
  <circle cx="280" cy="80" r="70" fill="none" stroke="rgba(16,185,129,0.06)" stroke-width="1" />

  <!-- Drivo Brand Header with Logo -->
  <g transform="translate(18, 16)">
    <rect width="105" height="34" rx="8" fill="#ffffff" filter="url(#drivoGlow)" />
    ${drivoLogoB64 ? `<image href="${drivoLogoB64}" x="6" y="4" width="93" height="26" preserveAspectRatio="xMidYMid meet" />` : '<text x="52" y="23" font-size="16" font-family="sans-serif" font-weight="800" fill="#0f172a" text-anchor="middle">DRIVO</text>'}
  </g>

  <!-- Mobility Vertical Tags -->
  <g transform="translate(140, 20)">
    <rect width="105" height="24" rx="12" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
    <text x="52" y="16" fill="#34d399" font-size="10.5" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">🚗 مشاركة سيارات</text>

    <rect x="115" width="105" height="24" rx="12" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.3)" stroke-width="1" />
    <text x="167" y="16" fill="#38bdf8" font-size="10.5" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">⚡ رحلات مدن</text>
  </g>

  <!-- Route Visualizer -->
  <g transform="translate(18, 70)">
    <!-- Path Line -->
    <path d="M 20,45 Q 120,10 220,35 T 320,20" fill="none" stroke="url(#routeLine)" stroke-width="3.5" stroke-dasharray="6,4" />
    
    <!-- Pickup Point -->
    <circle cx="20" cy="45" r="7" fill="#10b981" />
    <circle cx="20" cy="45" r="3" fill="#ffffff" />
    <text x="20" y="68" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">القاهرة</text>

    <!-- Destination Point -->
    <circle cx="320" cy="20" r="7" fill="#06b6d4" />
    <circle cx="320" cy="20" r="3" fill="#ffffff" />
    <text x="320" y="43" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">الساحل الشمالي</text>

    <!-- Moving Vehicle Graphic -->
    <g transform="translate(170, 16)">
      <rect width="52" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" filter="url(#drivoGlow)" />
      <text x="26" y="16" font-size="14" text-anchor="middle">🚘</text>
    </g>
  </g>

  <!-- Bottom Live Telemetry Pill -->
  <g transform="translate(18, 134)">
    <text x="0" y="18" fill="#e2e8f0" font-size="11.5" font-family="system-ui, sans-serif" font-weight="700">منظومة تنقل ذكي متكاملة</text>
    <text x="344" y="18" fill="#10b981" font-size="11" font-family="var(--font-mono, monospace)" font-weight="600" text-anchor="end">6 SERVICES • 1 APP</text>
  </g>
</svg>`;

// --- Moviq Card Banner SVG (380x170 Landscape) ---
const moviqSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 170" width="100%" height="100%">
  <defs>
    <linearGradient id="moviqBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="60%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0b132b" />
    </linearGradient>
    <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <filter id="moviqGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#06b6d4" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="380" height="170" fill="url(#moviqBg)" />

  <!-- Radar Coordinates & Waypoints -->
  <circle cx="310" cy="85" r="65" fill="none" stroke="rgba(6,182,212,0.12)" stroke-width="1.5" />
  <circle cx="310" cy="85" r="40" fill="none" stroke="rgba(6,182,212,0.18)" stroke-width="1" />
  <circle cx="310" cy="85" r="16" fill="rgba(6,182,212,0.1)" />
  <line x1="310" y1="20" x2="310" y2="150" stroke="rgba(6,182,212,0.15)" stroke-dasharray="3,3" />
  <line x1="245" y1="85" x2="375" y2="85" stroke="rgba(6,182,212,0.15)" stroke-dasharray="3,3" />

  <!-- Brand Logo & Header -->
  <g transform="translate(18, 16)">
    <rect width="112" height="34" rx="8" fill="#ffffff" filter="url(#moviqGlow)" />
    ${moviqIconB64 ? `<image href="${moviqIconB64}" x="6" y="3" width="28" height="28" preserveAspectRatio="xMidYMid meet" />` : ''}
    <text x="${moviqIconB64 ? '72' : '56'}" y="23" font-size="16" font-family="system-ui, sans-serif" font-weight="900" fill="#0f172a" text-anchor="middle" letter-spacing="1">MOVIQ</text>
  </g>

  <!-- Dispatch Badge -->
  <g transform="translate(145, 20)">
    <rect width="118" height="24" rx="12" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.3)" stroke-width="1" />
    <text x="59" y="16" fill="#22d3ee" font-size="11" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">📦 كابتن التوصيل اللوجستي</text>
  </g>

  <!-- Logistics HUD Route & Order Status -->
  <g transform="translate(18, 65)">
    <!-- Order Card HUD -->
    <rect width="215" height="58" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    
    <text x="12" y="22" fill="#38bdf8" font-size="11" font-family="var(--font-mono, monospace)" font-weight="700">TASK #7492 • OUT FOR DELIVERY</text>
    <text x="12" y="42" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" font-weight="700">توجيه فوري للمسار • إثبات رقمي</text>
    
    <circle cx="200" cy="30" r="5" fill="#10b981" />
  </g>

  <!-- Active Courier Waypoint on Radar -->
  <g transform="translate(290, 65)">
    <circle cx="20" cy="20" r="12" fill="rgba(6,182,212,0.3)" />
    <circle cx="20" cy="20" r="6" fill="#06b6d4" />
    <text x="20" y="44" fill="#38bdf8" font-size="10" font-family="var(--font-mono, monospace)" font-weight="700" text-anchor="middle">GPS LIVE</text>
  </g>

  <!-- Bottom Telemetry -->
  <g transform="translate(18, 138)">
    <text x="0" y="16" fill="#e2e8f0" font-size="11.5" font-family="system-ui, sans-serif" font-weight="700">نظام إدارة أساطيل التوصيل والشحن</text>
    <text x="344" y="16" fill="#22d3ee" font-size="11" font-family="var(--font-mono, monospace)" font-weight="600" text-anchor="end">OFFLINE-1ST • QR SCAN</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/projects/drivo-card-banner.svg', drivoSvg);
fs.writeFileSync('public/assets/projects/moviq-card-banner.svg', moviqSvg);
console.log('Created drivo-card-banner.svg and moviq-card-banner.svg!');

