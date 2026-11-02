import fs from 'fs';

const urls = [
  'https://drivoeg.com/',
  'https://se7aty.com/',
  'https://oryxinvestmentsegypt.com/'
];

async function inspect(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    console.log(`\n=== URL: ${url} ===`);
    console.log(`Status: ${res.status}`);
    
    // Find all images
    const imgMatches = [...html.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
    console.log('Images found:', imgMatches.slice(0, 10));

    // Find logos or heroes
    const heroMatches = [...html.matchAll(/(hero[^"'\s>]+|banner[^"'\s>]+|logo[^"'\s>]+)/gi)].map(m => m[1]);
    console.log('Hero/Logo matches:', heroMatches.slice(0, 10));

    // Title & headings
    const h1 = [...html.matchAll(/<h1[^>]*>([^<]+)<\/h1>/gi)].map(m => m[1].trim());
    console.log('H1:', h1);
    const p = [...html.matchAll(/<p[^>]*>([^<]+)<\/p>/gi)].map(m => m[1].trim()).filter(x => x.length > 20);
    console.log('Sample text:', p.slice(0, 3));
  } catch (e) {
    console.error(url, e.message);
  }
}

async function run() {
  for (const u of urls) await inspect(u);
}
run();

