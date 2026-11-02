import fs from 'fs';

// Check if tesseract or sharp is installed
try {
  const sharp = await import('sharp');
  console.log('Sharp is available');
} catch (e) {
  console.log('Sharp not installed');
}
