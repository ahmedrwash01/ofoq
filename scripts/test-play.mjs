import fs from 'fs';

async function testPlayStore(pkg) {
  const url = `https://play.google.com/store/apps/details?id=${pkg}&hl=ar`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept-Language': 'ar,en;q=0.9',
    }
  });
  const html = await res.text();
  
  // Look for screenshot tags: <img ... alt="لقطة شاشة" or alt="Screenshot" or srcset
  const imgTags = [...html.matchAll(/<img[^>]+>/g)].map(m => m[0]);
  console.log(`Total img tags: ${imgTags.length}`);
  const screenshotImgs = imgTags.filter(t => t.includes('screenshot') || t.includes('لقطة') || t.includes('itemprop="image"') || t.includes('play-lh.googleusercontent.com'));
  console.log('Sample matching img tags:');
  screenshotImgs.slice(0, 10).forEach(t => console.log(t));
}

testPlayStore('com.fassladev.nasyaUser');
