import fs from 'fs';

async function checkDetails() {
  // 1. Check Se7aty images
  console.log('--- Checking Se7aty ---');
  for (const name of ['se.png', 'ser.png', 'aaaa.png', 'ba.png']) {
    try {
      const res = await fetch(`https://se7aty.com/assets/${name}`);
      console.log(`Se7aty ${name}: status ${res.status}, size: ${res.headers.get('content-length')}`);
    } catch (e) {
      console.error(e.message);
    }
  }

  // 2. Check Drivo features
  console.log('--- Checking Drivo ---');
  for (const name of ['01_quick_rides.png', '02_carpool.png', '03_travel.png', 'hero-car-drivo.png', 'imge1.png', 'image2.png']) {
    try {
      const res = await fetch(`https://drivoeg.com/public/landing-page/assets/img/drivo/${name}`);
      console.log(`Drivo ${name}: status ${res.status}, size: ${res.headers.get('content-length')}`);
    } catch (e) {
      console.error(e.message);
    }
  }

  // 3. Check Moviq screenshots from Play Store
  console.log('--- Checking Moviq ---');
  const moviqRes = await fetch('https://play.google.com/store/apps/details?id=info.moviq.driver&hl=ar');
  const moviqHtml = await moviqRes.text();
  const moviqScreens = [...moviqHtml.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/([a-zA-Z0-9_\-=]+)=w1052/g)].map(m => m[1]);
  const moviqUnique = [...new Set(moviqScreens)];
  console.log(`Moviq unique screens: ${moviqUnique.length}`);
  moviqUnique.slice(0, 6).forEach((k, idx) => {
    console.log(`Moviq [${idx}]: https://play-lh.googleusercontent.com/${k}=w1052-h592`);
  });
}

checkDetails();
