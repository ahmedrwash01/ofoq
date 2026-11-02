import fs from 'fs';

const html = `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#fff; display:flex; flex-wrap:wrap; gap:20px; font-family:sans-serif; padding:20px;">
  ${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `
    <div>
      <h4>nasia-asset-${i}</h4>
      <img src="/assets/projects/nasia-asset-${i}.webp" style="max-height:350px;" />
    </div>
  `).join('')}
</body>
</html>`;

fs.writeFileSync('public/compare-assets.html', html);
console.log('compare-assets.html ready');
