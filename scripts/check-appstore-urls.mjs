import fs from 'fs';

async function checkAppStoreScreens(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    }
  });
  const html = await res.text();
  const screenUrls = [...html.matchAll(/https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/PurpleSource[^\s"']+/g)].map(m => m[0]);
  console.log(`URL: ${url}`);
  console.log('Screenshots found:', [...new Set(screenUrls)]);
}

async function run() {
  await checkAppStoreScreens('https://apps.apple.com/eg/app/spring-customer/id6764054345');
  await checkAppStoreScreens('https://apps.apple.com/eg/app/spring-driver/id6764071917');
}
run();
