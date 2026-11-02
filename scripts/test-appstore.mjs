import fs from 'fs';

async function testAppStore(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    }
  });
  const html = await res.text();
  const pictures = [...html.matchAll(/<picture[^>]*>([\s\S]*?)<\/picture>/gi)];
  pictures.slice(0, 8).forEach((p, idx) => {
    console.log(`[Pic ${idx}]`, p[0]);
  });
}

testAppStore('https://apps.apple.com/eg/app/spring-customer/id6764054345');
