import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'ar,en-US;q=0.9,en;q=0.8',
};

async function fetchPage(url) {
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

async function downloadImage(url, filename) {
  try {
    const cleanUrl = url.split('=')[0]; // For google play image resizing
    // Try original or high res
    let targetUrl = url;
    if (url.includes('googleusercontent.com')) {
      targetUrl = cleanUrl + '=w1080-h1920';
    }
    const res = await fetch(targetUrl, { headers });
    if (!res.ok) {
      const fallback = await fetch(url, { headers });
      if (!fallback.ok) return null;
      const buffer = Buffer.from(await fallback.arrayBuffer());
      fs.writeFileSync(path.join(outDir, filename), buffer);
      console.log(`Saved: ${filename} (original)`);
      return filename;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(outDir, filename), buffer);
    console.log(`Saved: ${filename}`);
    return filename;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return null;
  }
}

// 1. Play Store Scraper
async function scrapePlayStore(url, prefix) {
  console.log(`\n--- Scraping Play Store: ${url} ---`);
  const html = await fetchPage(url);
  if (!html) return null;

  // Title
  const titleMatch = html.match(/<h1[^>]*itemprop="name"[^>]*>([^<]+)<\/h1>/) || html.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const title = titleMatch ? titleMatch[1].trim() : prefix;

  // Icon
  const iconMatch = html.match(/<img[^>]*src="(https:\/\/play-lh\.googleusercontent\.com\/[^"]+)"[^>]*alt="Cover art"/i) ||
                    html.match(/<img[^>]*src="(https:\/\/play-lh\.googleusercontent\.com\/[^"]+)"[^>]*itemprop="image"/i) ||
                    html.match(/(https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+)/);

  // Screenshots
  const screenshotRegex = /https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g;
  const matches = [...new Set(html.match(screenshotRegex) || [])];
  
  console.log(`Title: ${title}`);
  console.log(`Found ${matches.length} play-lh image URLs`);

  const downloaded = [];
  let count = 0;
  for (const imgUrl of matches) {
    if (count >= 5) break;
    // skip tiny icons or common badges if possible
    const name = `${prefix}-screen-${count + 1}.webp`;
    const saved = await downloadImage(imgUrl, name);
    if (saved) {
      downloaded.push(saved);
      count++;
    }
  }

  return { title, url, downloaded };
}

// 2. App Store Scraper
async function scrapeAppStore(url, prefix) {
  console.log(`\n--- Scraping App Store: ${url} ---`);
  const html = await fetchPage(url);
  if (!html) return null;

  const titleMatch = html.match(/<h1[^>]*class="[^"]*product-header__title[^"]*"[^>]*>([^<]+)/i) ||
                    html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : prefix;

  // Apple screenshots: is1-ssl.mzstatic.com or mzstatic.com
  const screenRegex = /https:\/\/[^"'\s]+\.mzstatic\.com\/image\/thumb\/[^\s"']+\/([0-9]+x[0-9]+[a-z0-9_\-]*)\.(jpg|png|webp)/gi;
  const rawMatches = html.match(screenRegex) || [];
  
  // also check source srcset
  const srcsetRegex = /https:\/\/[^"'\s]+\.mzstatic\.com\/image\/thumb\/[^\s"']+/g;
  const allMz = [...new Set(html.match(srcsetRegex) || [])];

  console.log(`Title: ${title}`);
  console.log(`Found ${allMz.length} mzstatic image URLs`);

  const downloaded = [];
  let count = 0;
  for (const imgUrl of allMz) {
    if (count >= 5) break;
    if (imgUrl.includes('AppIcon') || imgUrl.includes('badge')) continue;
    // format URL to high res
    const clean = imgUrl.split('?')[0];
    const highRes = clean.replace(/\/[0-9]+x[0-9]+[a-z0-9_\-]*\.(jpg|png|webp)$/i, '/1200x630bb.png');
    const name = `${prefix}-screen-${count + 1}.jpg`;
    const saved = await downloadImage(imgUrl, name);
    if (saved) {
      downloaded.push(saved);
      count++;
    }
  }

  return { title, url, downloaded };
}

// 3. Website Scraper (OG Image, Screenshots, Favicon)
async function scrapeWebsite(url, prefix) {
  console.log(`\n--- Scraping Website: ${url} ---`);
  const html = await fetchPage(url);
  if (!html) return null;

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : prefix;

  // og:image
  const ogMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i) ||
                  html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"/i);

  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) ||
                    html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"/i);

  console.log(`Title: ${title}`);
  console.log(`OG Image: ${ogMatch ? ogMatch[1] : 'none'}`);
  console.log(`Desc: ${descMatch ? descMatch[1] : 'none'}`);

  const downloaded = [];
  if (ogMatch) {
    let ogUrl = ogMatch[1];
    if (ogUrl.startsWith('/')) {
      const u = new URL(url);
      ogUrl = `${u.origin}${ogUrl}`;
    }
    const saved = await downloadImage(ogUrl, `${prefix}-og.png`);
    if (saved) downloaded.push(saved);
  }

  return {
    title,
    url,
    description: descMatch ? descMatch[1].trim() : '',
    downloaded
  };
}

async function main() {
  const results = {};

  results.nasyaUser = await scrapePlayStore('https://play.google.com/store/apps/details?id=com.fassladev.nasyaUser', 'nasya-user');
  results.nasyaDelivery = await scrapePlayStore('https://play.google.com/store/apps/details?id=com.fassladev.nasyaDelivery', 'nasya-delivery');
  results.nasyaWeb = await scrapeWebsite('https://new.nasia-ec.com/', 'nasya-web');

  results.oryxApp = await scrapePlayStore('https://play.google.com/store/apps/details?id=com.oryxinvestmentsegypt.oryx', 'oryx-app');
  results.oryxWeb = await scrapeWebsite('https://oryxinvestmentsegypt.com/', 'oryx-web');

  results.moviqDriver = await scrapePlayStore('https://play.google.com/store/apps/details?id=info.moviq.driver', 'moviq-driver');

  results.springCustomer = await scrapeAppStore('https://apps.apple.com/eg/app/spring-customer/id6764054345', 'spring-customer');
  results.springDriver = await scrapeAppStore('https://apps.apple.com/eg/app/spring-driver/id6764071917', 'spring-driver');

  results.drivo = await scrapeWebsite('https://drivoeg.com/', 'drivo');
  results.se7aty = await scrapeWebsite('https://se7aty.com/', 'se7aty');

  fs.writeFileSync('scripts/scrape-results.json', JSON.stringify(results, null, 2));
  console.log('\nAll done! Saved to scripts/scrape-results.json');
}

main();

