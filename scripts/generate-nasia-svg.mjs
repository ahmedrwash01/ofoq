import fs from 'fs';
import path from 'path';

const logoBuf = fs.readFileSync('public/assets/projects/nasia-brand-1.jpeg');
const logoB64 = `data:image/jpeg;base64,${logoBuf.toString('base64')}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 900" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f766e" />
    </linearGradient>
    <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#131e33" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.3" />
    </filter>
    <clipPath id="logoClip">
      <rect x="14" y="52" width="130" height="42" rx="8" />
    </clipPath>
  </defs>

  <!-- Background Canvas -->
  <rect width="420" height="900" fill="url(#bgGrad)" />

  <!-- Top Header Area -->
  <rect x="0" y="0" width="420" height="185" fill="url(#headerGrad)" />
  <circle cx="380" cy="40" r="120" fill="#ffffff" opacity="0.06" />

  <!-- App Header: Official Nasia Logo on clean white glass container -->
  <rect x="12" y="50" width="134" height="46" rx="10" fill="#ffffff" filter="url(#shadow)" />
  <image href="${logoB64}" x="16" y="53" width="126" height="40" preserveAspectRatio="xMidYMid meet" />

  <!-- Delivery Location -->
  <g transform="translate(250, 56)">
    <text x="150" y="14" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="end" font-weight="500">التوصيل إلى 📍</text>
    <text x="150" y="32" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" text-anchor="end" font-weight="700">المعادي، القاهرة ▾</text>
  </g>

  <!-- Search Bar -->
  <g transform="translate(16, 116)">
    <rect width="388" height="46" rx="12" fill="#ffffff" opacity="0.95" filter="url(#shadow)" />
    <text x="350" y="28" fill="#64748b" font-size="14" font-family="system-ui, sans-serif" text-anchor="end">🔍 ابحث عن المنتجات أو المتاجر...</text>
    <rect x="12" y="8" width="30" height="30" rx="8" fill="#10b981" opacity="0.15" />
    <text x="27" y="27" fill="#059669" font-size="15" text-anchor="middle">⚡</text>
  </g>

  <!-- Promo Banner -->
  <g transform="translate(16, 180)">
    <rect width="388" height="110" rx="18" fill="url(#bannerGrad)" filter="url(#shadow)" />
    <circle cx="40" cy="55" r="45" fill="#ffffff" opacity="0.12" />
    <circle cx="340" cy="90" r="60" fill="#ffffff" opacity="0.08" />
    <text x="365" y="36" fill="#ffffff" font-size="19" font-family="system-ui, sans-serif" text-anchor="end" font-weight="800">عروض سوق ناصية الحصرية 🛒</text>
    <text x="365" y="62" fill="#ffffff" opacity="0.95" font-size="13" font-family="system-ui, sans-serif" text-anchor="end">خصم 20% على أول طلب + شحن مجاني</text>
    <rect x="235" y="74" width="130" height="26" rx="13" fill="#ffffff" />
    <text x="300" y="91" fill="#047857" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="800">كود: NASIA20</text>
  </g>

  <!-- Categories Section -->
  <text x="404" y="325" fill="#ffffff" font-size="16" font-family="system-ui, sans-serif" text-anchor="end" font-weight="800">الأقسام الرئيسية</text>
  <text x="16" y="325" fill="#10b981" font-size="12" font-family="system-ui, sans-serif" font-weight="700">عرض الكل ↗</text>

  <!-- Category Items -->
  <g transform="translate(16, 340)">
    <!-- Cat 1 -->
    <rect x="306" y="0" width="82" height="92" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
    <circle cx="347" cy="38" r="22" fill="#10b981" opacity="0.2" />
    <text x="347" y="45" font-size="22" text-anchor="middle">🛒</text>
    <text x="347" y="76" fill="#f8fafc" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="600">سوبرماركت</text>

    <!-- Cat 2 -->
    <rect x="204" y="0" width="82" height="92" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
    <circle cx="245" cy="38" r="22" fill="#f59e0b" opacity="0.2" />
    <text x="245" y="45" font-size="22" text-anchor="middle">🥬</text>
    <text x="245" y="76" fill="#f8fafc" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="600">خضار وفواكه</text>

    <!-- Cat 3 -->
    <rect x="102" y="0" width="82" height="92" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
    <circle cx="143" cy="38" r="22" fill="#ef4444" opacity="0.2" />
    <text x="143" y="45" font-size="22" text-anchor="middle">🥩</text>
    <text x="143" y="76" fill="#f8fafc" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="600">لحوم ودواجن</text>

    <!-- Cat 4 -->
    <rect x="0" y="0" width="82" height="92" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
    <circle cx="41" cy="38" r="22" fill="#06b6d4" opacity="0.2" />
    <text x="41" y="45" font-size="22" text-anchor="middle">💊</text>
    <text x="41" y="76" fill="#f8fafc" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="600">صيدلية</text>
  </g>

  <!-- Popular Products Section -->
  <text x="404" y="468" fill="#ffffff" font-size="16" font-family="system-ui, sans-serif" text-anchor="end" font-weight="800">الأكثر طلباً اليوم 🔥</text>
  <text x="16" y="468" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif">توصيل سريع &lt; 25 دقيقة</text>

  <!-- Product Cards -->
  <g transform="translate(16, 485)">
    <!-- Product 1 -->
    <rect x="200" y="0" width="188" height="210" rx="16" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" filter="url(#shadow)" />
    <rect x="210" y="10" width="168" height="95" rx="10" fill="#0f172a" />
    <text x="294" y="65" font-size="38" text-anchor="middle">🥛</text>
    <rect x="315" y="18" width="55" height="20" rx="6" fill="#10b981" />
    <text x="342" y="32" fill="#ffffff" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="700">خصم 15%</text>
    <text x="368" y="130" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" text-anchor="end" font-weight="700">حليب طازج المراعي 1.5 لتر</text>
    <text x="368" y="152" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="end">ماركت النخيل • 15 دقيقة</text>
    <text x="368" y="186" fill="#10b981" font-size="16" font-family="system-ui, sans-serif" text-anchor="end" font-weight="800">42.50 ج.م</text>
    <rect x="212" y="164" width="36" height="36" rx="10" fill="#10b981" />
    <text x="230" y="188" fill="#ffffff" font-size="20" text-anchor="middle" font-weight="700">+</text>

    <!-- Product 2 -->
    <rect x="0" y="0" width="188" height="210" rx="16" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" filter="url(#shadow)" />
    <rect x="10" y="10" width="168" height="95" rx="10" fill="#0f172a" />
    <text x="94" y="65" font-size="38" text-anchor="middle">☕</text>
    <rect x="115" y="18" width="55" height="20" rx="6" fill="#f59e0b" />
    <text x="142" y="32" fill="#ffffff" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="700">الأكثر مبيعاً</text>
    <text x="168" y="130" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" text-anchor="end" font-weight="700">قهوة بن برازيلي فاخر 250جم</text>
    <text x="168" y="152" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="end">محمصة العروبة • 20 دقيقة</text>
    <text x="168" y="186" fill="#10b981" font-size="16" font-family="system-ui, sans-serif" text-anchor="end" font-weight="800">85.00 ج.م</text>
    <rect x="12" y="164" width="36" height="36" rx="10" fill="#10b981" />
    <text x="30" y="188" fill="#ffffff" font-size="20" text-anchor="middle" font-weight="700">+</text>
  </g>

  <!-- Floating Active Delivery Banner -->
  <g transform="translate(16, 715)">
    <rect width="388" height="66" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)" />
    <circle cx="45" cy="33" r="22" fill="#10b981" opacity="0.15" />
    <text x="45" y="40" font-size="22" text-anchor="middle">🛵</text>
    <text x="365" y="28" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" text-anchor="end" font-weight="700">المندوب في طريقه إليك الآن</text>
    <text x="365" y="48" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" text-anchor="end" font-weight="600">طلب رقم #84920 • متبقي 12 دقيقة ⚡</text>
    <circle cx="85" cy="33" r="4" fill="#10b981" />
  </g>

  <!-- Bottom Navigation Bar -->
  <g transform="translate(0, 805)">
    <rect width="420" height="95" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
    
    <!-- Tab 1: Home (Active) -->
    <text x="350" y="42" font-size="22" text-anchor="middle">🏠</text>
    <text x="350" y="64" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="700">الرئيسية</text>
    <circle cx="350" cy="74" r="2.5" fill="#10b981" />

    <!-- Tab 2: Stores -->
    <text x="260" y="42" font-size="22" text-anchor="middle">🏪</text>
    <text x="260" y="64" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">المتاجر</text>

    <!-- Tab 3: Cart -->
    <text x="160" y="42" font-size="22" text-anchor="middle">🛍️</text>
    <text x="160" y="64" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">السلة (3)</text>
    <circle cx="175" cy="26" r="8" fill="#ef4444" />
    <text x="175" y="30" fill="#ffffff" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle" font-weight="700">3</text>

    <!-- Tab 4: Account -->
    <text x="70" y="42" font-size="22" text-anchor="middle">👤</text>
    <text x="70" y="64" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">حسابي</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/projects/nasia-app-branded.svg', svg);
console.log('Created public/assets/projects/nasia-app-branded.svg with official Nasia logo!');
