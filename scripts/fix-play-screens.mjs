import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

async function getPlayScreens(pkg, prefix) {
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    }
  });
  const html = await res.text();
  
  // Find all imgs with data-screenshot-index
  const matches = [...html.matchAll(/<img[^>]+data-screenshot-index="([0-9]+)"[^>]+src="([^">]+)"/gi)];
  console.log(`Pkg ${pkg}: Found ${matches.length} screenshots via data-screenshot-index`);
  
  // If not found, match srcset or play-lh with B5GQxf class
  let urls = matches.map(m => m[2]);
  if (urls.length === 0) {
    const backup = [...html.matchAll(/src="(https:\/\/play-lh\.googleusercontent\.com\/[^"=]+)=/g)].map(m => m[1]);
    urls = [...new Set(backup)].slice(0, 4);
    console.log(`Backup found ${urls.length} urls`);
  }

  let count = 0;
  for (const u of urls) {
    if (count >= 4) break;
    const base = u.split('=')[0];
    const highRes = base + '=w1080-h1920';
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

  // Also get the icon
  const iconMatch = html.match(/src="(https:\/\/play-lh\.googleusercontent\.com\/[^"=]+)=[^"]*"[^>]+alt="صورة الرمز"/i) ||
                    html.match(/<img[^>]+src="(https:\/\/play-lh\.googleusercontent\.com\/[^"=]+)=[^"]*"[^>]+itemprop="image"/i);
  if (iconMatch) {
    const iconRes = await fetch(iconMatch[1] + '=w512-h512');
    if (iconRes.ok) {
      const buf = Buffer.from(await iconRes.arrayBuffer());
      fs.writeFileSync(path.join(outDir, `${prefix}-icon.png`), buf);
      console.log(`Saved Icon: ${prefix}-icon.png`);
    }
  }
}

async function run() {
  await getPlayScreens('com.fassladev.nasyaUser', 'nasya-user');
  await getPlayScreens('com.fassladev.nasyaDelivery', 'nasya-delivery');
  await getPlayScreens('com.oryxinvestmentsegypt.oryx', 'oryx-app');
  await getPlayScreens('info.moviq.driver', 'moviq-driver');
}
run();

