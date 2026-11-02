import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

async function findAllNasiaAssets() {
  console.log('--- Finding all Nasia branding assets ---');
  
  // 1. Check Play Store User
  const userRes = await fetch('https://play.google.com/store/apps/details?id=com.fassladev.nasyaUser&hl=ar');
  const userHtml = await userRes.text();
  
  // All play-lh images
  const userImgs = [...userHtml.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/([a-zA-Z0-9_\-=]+)/g)].map(m => m[1]);
  const uniqueUser = [...new Set(userImgs)];
  console.log(`User app unique images: ${uniqueUser.length}`);
  
  let i = 0;
  for (const k of uniqueUser) {
    if (i >= 8) break;
    try {
      const url = `https://play-lh.googleusercontent.com/${k}=w1080-h1920`;
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 10000) {
          fs.writeFileSync(path.join(outDir, `nasia-asset-${i + 1}.webp`), buf);
          console.log(`Saved nasia-asset-${i + 1}.webp (${(buf.length / 1024).toFixed(1)} KB) from ${k.slice(0, 20)}...`);
          i++;
        }
      }
    } catch (e) {}
  }

  // 2. Check landing page images
  const landingRes = await fetch('https://new.nasia-ec.com/');
  const landingHtml = await landingRes.text();
  const landingImgs = [...landingHtml.matchAll(/src="([^">]+)"/gi)].map(m => m[1]);
  console.log('Landing images:', landingImgs);
  
  let j = 0;
  for (const src of landingImgs) {
    if (src.includes('nasia') || src.includes('Nasia') || src.includes('logo') || src.includes('mockup') || src.includes('banner')) {
      let fullUrl = src;
      if (src.startsWith('/')) fullUrl = `https://new.nasia-ec.com${src}`;
      try {
        const res = await fetch(fullUrl);
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          const ext = path.extname(src.split('?')[0]) || '.png';
          const filename = `nasia-brand-${j + 1}${ext}`;
          fs.writeFileSync(path.join(outDir, filename), buf);
          console.log(`Saved ${filename} from ${src}`);
          j++;
        }
      } catch (e) {}
    }
  }
}

findAllNasiaAssets();
