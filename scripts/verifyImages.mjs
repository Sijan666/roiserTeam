import { fetchProductCatalog } from '../src/data/products.js';

const { products, categories } = await fetchProductCatalog();

const djProducts = products.filter(p => p.image && p.image.includes('dummyjson'));
const djCategories = categories.filter(c => c.image && c.image.includes('dummyjson'));

console.log('=== Image Verification ===');
console.log('Total products:', products.length);
console.log('DummyJSON image URLs in products:', djProducts.length);
console.log('DummyJSON image URLs in categories:', djCategories.length);

const unsplashProducts = products.filter(p => p.image && p.image.includes('unsplash'));
console.log('Unsplash image URLs in products:', unsplashProducts.length);
console.log('\nSample images:');
products.slice(0,5).forEach(p => console.log(p.id, '|', p.image?.substring(0,70)));
