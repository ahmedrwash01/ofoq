import fs from 'fs';

function getInfo(name) {
  const p = `public/assets/projects/${name}`;
  if (!fs.existsSync(p)) return 'Not found';
  const buf = fs.readFileSync(p);
  return `${buf.length} bytes`;
}

console.log('nasia-brand-1.jpeg:', getInfo('nasia-brand-1.jpeg'));
console.log('nasia-brand-20.png:', getInfo('nasia-brand-20.png'));
console.log('nasia-user-icon.png:', getInfo('nasia-user-icon.png'));
console.log('nasya-logo.jpg:', getInfo('nasya-logo.jpg'));
