import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { fetchProductCatalog } from "../src/data/products.js";
import { absoluteUrl } from "../src/utils/seo.js";

const escapeXml = (value) =>
  String(value).replace(/[<>&'"]/g, (character) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });

const { products, categories } = await fetchProductCatalog();
const pages = [
  { path: "/", priority: "1.0" },
  { path: "/shop", priority: "0.9" },
  { path: "/about", priority: "0.5" },
  { path: "/faq", priority: "0.5" },
  { path: "/contact", priority: "0.5" },
  ...categories
    .filter((category) => category.slug !== "all")
    .map((category) => ({
      path: `/shop?category=${encodeURIComponent(category.slug)}`,
      priority: "0.7",
      image: category.image,
    })),
  ...products.map((product) => ({
    path: `/product/${product.slug}`,
    priority: "0.8",
    image: product.image,
  })),
];

const urls = pages
  .map(
    ({ path, priority, image }) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    ${
      image
        ? `<image:image>
      <image:loc>${escapeXml(image)}</image:loc>
    </image:image>`
        : ""
    }
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
const sitemapPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await writeFile(sitemapPath, sitemap, "utf8");
console.log(`Generated sitemap with ${pages.length} URLs.`);
