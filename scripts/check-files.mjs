import fs from 'fs';

// Let's inspect image dimensions and sizes
const files = [
  'nasya-user-screen-1.webp',
  'nasya-user-screen-2.webp',
  'nasya-user-screen-3.webp',
  'nasya-delivery-screen-1.webp',
  'nasya-delivery-screen-2.webp',
  'nasya-delivery-screen-3.webp',
  'nasya-delivery-screen-4.webp',
  'nasya-logo.jpg',
  'nasya-web-og.png',
  'spring-customer-screen-1.png',
  'spring-customer-screen-2.png',
  'spring-customer-screen-3.png',
  'spring-customer-screen-4.png',
  'spring-driver-screen-1.png',
  'spring-driver-screen-2.png',
  'spring-driver-screen-3.png',
  'drivo-screen-1.png',
  'drivo-screen-2.png',
  'drivo-hero.png',
  'se7aty-screen-1.png',
  'se7aty-screen-2.png',
  'se7aty-screen-3.png',
  'se7aty-screen-4.png',
  'moviq-driver-screen-1.webp',
  'moviq-driver-screen-2.webp',
  'moviq-driver-screen-3.webp',
  'moviq-driver-screen-4.webp'
];

for (const f of files) {
  const p = `public/assets/projects/${f}`;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`${f.padEnd(30)} ${(stat.size / 1024).toFixed(1)} KB`);
  } else {
    console.log(`${f.padEnd(30)} MISSING`);
  }
}

