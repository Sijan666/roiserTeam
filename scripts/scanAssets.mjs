import fs from 'fs';
import path from 'path';

const srcDir = 'c:\\Users\\CreativeIT\\Desktop\\roiserTeam\\src';
const assetsNeeded = new Set();

function scan(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const txt = fs.readFileSync(full, 'utf-8');
      const matches = txt.match(/from\s+["'](\.\.\/assets\/[^"']+|\.\/assets\/[^"']+)["']/g);
      if (matches) {
        matches.forEach(m => {
          const clean = m.replace(/from\s+["']/, '').replace(/["']/, '');
          assetsNeeded.add(path.basename(clean));
        });
      }
    }
  }
}

scan(srcDir);
console.log('Total asset filenames imported in code:', assetsNeeded.size);
console.log(Array.from(assetsNeeded));
