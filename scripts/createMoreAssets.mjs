import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\CreativeIT\\Desktop\\roiserTeam\\src\\assets';
const transparentPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const pngBuffer = Buffer.from(transparentPngBase64, 'base64');

const moreAssets = [
  'box.png',
  'Car.png',
  'credit-card.png',
  '24-hours.png',
  'Call.png',
  'product.png',
  'shopGrid.png',
  'productsdelailsslider.png',
  'productsdelailsvideo.png',
  'productsdetailsbg.png',
  'loginBg.png',
  'faqBanner.jpg',
  'productImg.png',
  'banner1.png',
  'banner2.png'
];

for (const a of moreAssets) {
  const p = path.join(assetsDir, a);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, pngBuffer);
  }
}

console.log('Created more asset placeholders');
