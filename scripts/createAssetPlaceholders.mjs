import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\CreativeIT\\Desktop\\roiserTeam\\src\\assets';
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1x1 transparent PNG in base64
const transparentPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const pngBuffer = Buffer.from(transparentPngBase64, 'base64');

const assets = [
  'ashBg.png',
  'contactMap.png', 'bg1.png',
  'dealbg.png',     'cc2.png',
  'cc3.png',        'sign.png',
  'img1.png',       'img2.png',
  'img3.png',       'img4.png',
  'img5.png',       'img6.png',
  'img7.png',       'img8.png',
  'mg.png',         'bg.png',
  'error.png',      'logo.png',
  'CardLogo.png',   'CardLogo-BnXbaA9S.png'
];

for (const asset of assets) {
  const filePath = path.join(assetsDir, asset);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, pngBuffer);
  }
}

console.log('Created placeholders for', assets.length, 'assets');
