import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

async function download(url, name) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(outDir, name), buf);
    console.log(`Downloaded ${name}: ${(buf.length / 1024).toFixed(1)} KB`);
    return name;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}

async function run() {
  // 1. Nasia app mockup from landing page
  await download('https://new.nasia-ec.com/assets/landing/img/nasia_app_mockup.png', 'nasia-marketing-mockup.png');
  await download('https://new.nasia-ec.com/assets/landing/img/roles/slider_source.png', 'nasia-slider.png');

  // 2. Spring: Let's download other screens from App Store
  // Simulator_Screenshot_-_iPhone_17_Pro_-_2026-04-29_at_14.03.20.png -> map / ride booking screen!
  await download('https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bd/0c/a0/bd0ca04a-954e-884a-a4cb-f0570391c9cf/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-04-29_at_14.03.20.png/600x1300bb.png', 'spring-map-screen.png');
  await download('https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/51/1c/83/511c832f-81f9-f724-89b8-ac34b5856465/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-04-29_at_14.03.28.png/600x1300bb.png', 'spring-ride-options.png');
  await download('https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/91/86/fe/9186fe50-1c0e-c2bb-3674-16c241fe633d/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-04-29_at_14.05.06.png/600x1300bb.png', 'spring-driver-tracking.png');

  // 3. Se7aty
  await download('https://se7aty.com/assets/se.png', 'se7aty-app-ui-1.png');
  await download('https://se7aty.com/assets/ser.png', 'se7aty-app-ui-2.png');
  await download('https://se7aty.com/assets/aaaa.png', 'se7aty-mockup.png');
  await download('https://se7aty.com/assets/ba.png', 'se7aty-pill.png');

  // 4. Drivo
  await download('https://drivoeg.com/public/landing-page/assets/img/drivo/imge1.png', 'drivo-ui-1.png');
  await download('https://drivoeg.com/public/landing-page/assets/img/drivo/image2.png', 'drivo-ui-2.png');
  await download('https://drivoeg.com/public/landing-page/assets/img/drivo/01_quick_rides.png', 'drivo-quick-rides.png');
  await download('https://drivoeg.com/public/landing-page/assets/img/drivo/02_carpool.png', 'drivo-carpool.png');

  // 5. Moviq
  await download('https://play-lh.googleusercontent.com/P7oMLHfIcJdQk-yRTZnyChJBDF1jPktgJ9N4VpyH_PfNncfbzAxe46WAG1zcHAXt5ZnoRdgFC149DwDJNmmpZQ=w1080-h1920', 'moviq-trips-screen.png');
  await download('https://play-lh.googleusercontent.com/EnPBjJQe_ve30GXwar-JaKdNRhQYQSXrlG8QmtAQFZ7KyzdHj8qxX_RaGC3sNNrR54fNYOyX0dastX3IrLukNA=w1080-h1920', 'moviq-map-screen.png');
}

run();
