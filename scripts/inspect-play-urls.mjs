import fs from 'fs';

async function inspectPlayScreens(pkg) {
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const html = await res.text();
  const imgs = [...html.matchAll(/<img[^>]+data-screenshot-index="([0-9]+)"[^>]+src="([^">]+)"/gi)];
  console.log(`\n=== Pkg: ${pkg} ===`);
  const allScreens = [...html.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/([a-zA-Z0-9_\-=]+)=w1052/g)].map(m => m[1]);
  const unique = [...new Set(allScreens)];
  unique.forEach((k, idx) => {
    console.log(`[${idx}] https://play-lh.googleusercontent.com/${k}=w1052-h592`);
  });
}

async function run() {
  await inspectPlayScreens('com.fassladev.nasyaUser');
  await inspectPlayScreens('com.fassladev.nasyaDelivery');
}
run();
