import fs from 'fs';
import path from 'path';

// Let's create an HTML preview page of all downloaded images so we can check every single image
const dir = path.resolve('public/assets/projects');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg'));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Projects Gallery Preview</title>
  <style>
    body { background: #0f172a; color: #fff; font-family: sans-serif; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #1e293b; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; align-items: center; }
    .card img { max-width: 100%; max-height: 400px; border-radius: 8px; object-fit: contain; background: #000; }
    .name { margin-top: 8px; font-size: 13px; font-family: monospace; word-break: break-all; color: #38bdf8; }
  </style>
</head>
<body>
  <h1>All Extracted Project Images (${files.length})</h1>
  <div class="grid">
    ${files.map(f => `
      <div class="card">
        <img src="/assets/projects/${f}" alt="${f}" />
        <div class="name">${f}</div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/preview-gallery.html', html);
console.log('Created public/preview-gallery.html with', files.length, 'images');
