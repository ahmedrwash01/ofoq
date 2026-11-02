import fs from 'fs';

async function checkAlts(pkg) {
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const imgs = [...html.matchAll(/<img[^>]+alt="([^"]+)"[^>]+src="([^"]+)"/gi)];
  console.log(`\n=== Pkg: ${pkg} ===`);
  imgs.forEach(m => {
    if (m[2].includes('play-lh.googleusercontent.com')) {
      console.log(`ALT: "${m[1]}" -> ${m[2].split('=')[0]}`);
    }
  });
}

async function run() {
  await checkAlts('com.fassladev.nasyaUser');
  await checkAlts('com.fassladev.nasyaDelivery');
  await checkAlts('info.moviq.driver');
  await checkAlts('com.oryxinvestmentsegypt.oryx');
}
run();
