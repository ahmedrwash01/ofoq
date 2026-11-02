import fs from 'fs';

async function getDrivoImgs() {
  const res = await fetch('https://drivoeg.com/');
  const html = await res.text();
  const imgs = [...html.matchAll(/src="([^">]+)"/gi)].map(m => m[1]);
  console.log('Drivo images:', [...new Set(imgs)]);
}
getDrivoImgs();

