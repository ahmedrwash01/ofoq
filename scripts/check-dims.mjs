import fs from 'fs';

// Helper to inspect image headers (PNG/WEBP dimensions)
function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
    // PNG
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { type: 'PNG', width, height };
  }
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    // Basic WEBP check
    return { type: 'WEBP', size: buf.length };
  }
  return { type: 'UNKNOWN', size: buf.length };
}

const list = [
  'public/assets/projects/nasia-marketing-mockup.png',
  'public/assets/projects/nasya-user-screen-1.webp',
  'public/assets/projects/nasya-user-screen-2.webp',
  'public/assets/projects/nasya-user-screen-3.webp',
  'public/assets/projects/nasya-delivery-screen-1.webp',
  'public/assets/projects/nasya-delivery-screen-3.webp',
  'public/assets/projects/spring-map-screen.png',
  'public/assets/projects/spring-ride-options.png',
  'public/assets/projects/spring-driver-tracking.png',
  'public/assets/projects/se7aty-app-ui-1.png',
  'public/assets/projects/se7aty-app-ui-2.png',
  'public/assets/projects/se7aty-mockup.png',
  'public/assets/projects/drivo-ui-1.png',
  'public/assets/projects/drivo-quick-rides.png',
  'public/assets/projects/moviq-map-screen.png',
  'public/assets/projects/moviq-trips-screen.png'
];

for (const f of list) {
  if (fs.existsSync(f)) {
    console.log(f.replace('public/assets/projects/', ''), getDimensions(f));
  }
}
