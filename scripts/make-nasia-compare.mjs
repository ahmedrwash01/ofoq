import fs from 'fs';

const html = `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#fff; display:flex; flex-wrap:wrap; gap:20px; font-family:sans-serif; padding:20px;">
  <div>
    <h3>nasia-brand-1.jpeg (Official Logo)</h3>
    <img src="/assets/projects/nasia-brand-1.jpeg" style="max-height:300px; border-radius:10px; background:#fff;" />
  </div>
  <div>
    <h3>nasia-brand-20.png (Official App Mockup with Logo)</h3>
    <img src="/assets/projects/nasia-brand-20.png" style="max-height:450px;" />
  </div>
  <div>
    <h3>nasia-slider.png</h3>
    <img src="/assets/projects/nasia-slider.png" style="max-height:300px;" />
  </div>
</body>
</html>`;

fs.writeFileSync('public/compare-nasia.html', html);
console.log('compare-nasia.html ready');

