import fs from 'fs';

async function checkNasiaWeb() {
  const res = await fetch('https://new.nasia-ec.com/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const html = await res.text();
  const imgs = [...html.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
  console.log('Nasia Web images:', imgs);
}
checkNasiaWeb();
