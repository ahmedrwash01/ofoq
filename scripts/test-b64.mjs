import fs from 'fs';

// Check nasia-brand-20.png
const buf = fs.readFileSync('public/assets/projects/nasia-brand-20.png');
console.log('nasia-brand-20.png size:', buf.length, 'bytes');

// Check nasia-brand-1.jpeg
const logoBuf = fs.readFileSync('public/assets/projects/nasia-brand-1.jpeg');
console.log('nasia-brand-1.jpeg size:', logoBuf.length, 'bytes');
const logoB64 = logoBuf.toString('base64');
console.log('logo base64 length:', logoB64.length);
