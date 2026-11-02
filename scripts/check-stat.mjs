import fs from 'fs';

for (let i = 1; i <= 8; i++) {
  const p = `public/assets/projects/nasia-asset-${i}.webp`;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`nasia-asset-${i}.webp: ${(stat.size / 1024).toFixed(1)} KB`);
  }
}

