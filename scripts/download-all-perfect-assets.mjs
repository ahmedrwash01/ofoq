import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'ar,en-US;q=0.9,en;q=0.8',
};

async function saveFile(url, filename) {
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(outDir, filename), buffer);
    console.log(`Saved [${(buffer.length / 1024).toFixed(1)} KB]: ${filename}`);
    return true;
  } catch (err) {
    console.error(`Error ${filename}:`, err.message);
    return false;
  }
}

// 1. Process Google Play
async function processPlay(pkg, prefix) {
  console.log(`\n=== Processing Play Store: ${pkg} (${prefix}) ===`);
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, { headers });
  if (!res.ok) return;
  const html = await res.text();

  // App icon
  const iconMatch = html.match(/<img[^>]+alt="صورة الرمز"[^>]+itemprop="image"[^>]+src="([^">]+)"/i) ||
                    html.match(/<img[^>]+itemprop="image"[^>]+alt="صورة الرمز"[^>]+src="([^">]+)"/i);
  if (iconMatch) {
    let iconUrl = iconMatch[1].split('=')[0] + '=w512-h512';
    await saveFile(iconUrl, `${prefix}-icon.png`);
  }

  // App Screenshots
  const screenshotMatches = [...html.matchAll(/<img[^>]+alt="صورة لقطة الشاشة"[^>]+src="([^">]+)"/gi)];
  console.log(`Found ${screenshotMatches.length} screenshots for ${prefix}`);

  let count = 0;
  for (const m of screenshotMatches) {
    if (count >= 4) break;
    const base = m[1].split('=')[0];
    const highRes = base + '=w1080-h1920';
    const success = await saveFile(highRes, `${prefix}-screen-${count + 1}.webp`);
    if (success) count++;
  }
}

// 2. Process App Store
async function processApple(url, prefix) {
  console.log(`\n=== Processing Apple Store: ${prefix} ===`);
  const res = await fetch(url, { headers });
  if (!res.ok) return;
  const html = await res.text();

  // Icon
  const iconMatches = [...html.matchAll(/https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/[^\s"']+\/[0-9]+x[0-9]+Icon[^\s"']+\.png/gi)];
  if (iconMatches.length > 0) {
    const iconUrl = iconMatches[0].replace(/\/[0-9]+x[0-9]+Icon[^\s"']+\.png/i, '/512x512bb.png');
    await saveFile(iconUrl, `${prefix}-icon.png`);
  }

  // Screenshots: look for high res webp or png
  const screenMatches = [...html.matchAll(/(https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/[^\s"']+\/Simulator_Screenshot[^\s"']+\/600x1300bb\.webp)/gi)];
  console.log(`Found ${screenMatches.length} Apple screenshots for ${prefix}`);

  let count = 0;
  for (const m of screenMatches) {
    if (count >= 4) break;
    const highRes = m[1].replace('/600x1300bb.webp', '/1200x2600bb.png');
    const success = await saveFile(highRes, `${prefix}-screen-${count + 1}.png`);
    if (success) count++;
  }
}

// 3. Process Drivo & Se7aty direct web assets
async function processWebsites() {
  console.log(`\n=== Processing Web Assets ===`);
  // Drivo
  await saveFile('https://drivoeg.com/public/landing-page/assets/logo.jpeg', 'drivo-logo.jpg');
  await saveFile('https://drivoeg.com/public/landing-page/assets/img/drivo/imge1.png', 'drivo-screen-1.png');
  await saveFile('https://drivoeg.com/public/landing-page/assets/img/drivo/image2.png', 'drivo-screen-2.png');
  await saveFile('https://drivoeg.com/public/landing-page/assets/img/drivo/hero-car-drivo.png', 'drivo-hero.png');

  // Se7aty
  await saveFile('https://se7aty.com/assets/se.png', 'se7aty-screen-1.png');
  await saveFile('https://se7aty.com/assets/ser.png', 'se7aty-screen-2.png');
  await saveFile('https://se7aty.com/assets/aaaa.png', 'se7aty-screen-3.png');
  await saveFile('https://se7aty.com/assets/ba.png', 'se7aty-screen-4.png');

  // Nasya Web
  await saveFile('https://new.nasia-ec.com/assets/landing/img/Nasia.jpeg', 'nasya-logo.jpg');
}

async function run() {
  await processPlay('com.fassladev.nasyaUser', 'nasya-user');
  await processPlay('com.fassladev.nasyaDelivery', 'nasya-delivery');
  await processPlay('com.oryxinvestmentsegypt.oryx', 'oryx-app');
  await processPlay('info.moviq.driver', 'moviq-driver');
  await processApple('https://apps.apple.com/eg/app/spring-customer/id6764054345', 'spring-customer');
  await processApple('https://apps.apple.com/eg/app/spring-driver/id6764071917', 'spring-driver');
  await processWebsites();
  console.log('\nAll project assets downloaded successfully!');
}

run();

