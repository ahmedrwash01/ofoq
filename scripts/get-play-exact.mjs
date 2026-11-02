import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

async function getPrecisePlayScreens(pkg, prefix) {
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    }
  });
  const html = await res.text();
  
  // Find all images with class B5GQxf or data-screenshot-index or srcset with 1052
  const matches = [...html.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/([a-zA-Z0-9_\-=]+)=w1052/g)];
  console.log(`${pkg}: Found ${matches.length} high-res screenshots with =w1052`);
  
  const uniqueKeys = [...new Set(matches.map(m => m[1]))];
  console.log(`Unique screenshots: ${uniqueKeys.length}`);

  let count = 0;
  for (const key of uniqueKeys) {
    if (count >= 4) break;
    const highRes = `https://play-lh.googleusercontent.com/${key}=w1440-h2880`;
    try {
      const imgRes = await fetch(highRes);
      if (imgRes.ok) {
        const buf = Buffer.from(await imgRes.arrayBuffer());
        const filename = `${prefix}-screen-${count + 1}.webp`;
        fs.writeFileSync(path.join(outDir, filename), buf);
        console.log(`Saved [${(buf.length / 1024).toFixed(1)} KB]: ${filename}`);
        count++;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

async function run() {
  await getPrecisePlayScreens('com.fassladev.nasyaUser', 'nasya-user');
  await getPrecisePlayScreens('com.fassladev.nasyaDelivery', 'nasya-delivery');
  await getPrecisePlayScreens('com.oryxinvestmentsegypt.oryx', 'oryx-app');
  await getPrecisePlayScreens('info.moviq.driver', 'moviq-driver');
}
run();
