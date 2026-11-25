import { fetchProductCatalog } from '../src/data/products.js';

const { products } = await fetchProductCatalog();

const dj = products.filter(p => p.image && p.image.includes('dummyjson'));
const other = products.filter(p => !p.image || !p.image.includes('dummyjson'));

console.log('Total products:', products.length);
console.log('DummyJSON images:', dj.length);
console.log('Other images:', other.length);

console.log('\nSample DummyJSON image URLs:');
dj.slice(0, 8).forEach(p => console.log(p.id, '|', p.image));

console.log('\nSample other image URLs:');
other.slice(0, 5).forEach(p => console.log(p.id, '|', p.image));
