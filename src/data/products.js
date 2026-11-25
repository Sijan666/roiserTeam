const DUMMYJSON_API_URL = "https://dummyjson.com";

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getDepartment = (category) => {
  if (["smartphones", "laptops", "tablets", "mobile-accessories"].includes(category)) {
    return "Electronics";
  }
  if (["mens-shirts"].includes(category)) return "Men's Fashion";
  if (["womens-dresses", "womens-jewellery", "tops"].includes(category)) return "Women's Fashion";
  if (["mens-shoes", "womens-shoes"].includes(category)) return "Footwear";
  if (["beauty", "skin-care", "fragrances"].includes(category)) return "Beauty & Skincare";
  if (["mens-watches", "womens-watches", "sunglasses"].includes(category)) {
    return "Accessories & Watches";
  }
  if (category === "womens-bags") return "Bags & Luggage";
  if (["furniture", "home-decoration", "kitchen-accessories"].includes(category)) {
    return "Home & Living";
  }
  if (category === "groceries") return "Groceries & Kitchen";
  if (category === "sports-accessories") return "Sports & Outdoor";
  if (["motorcycle", "vehicle"].includes(category)) return "Automotive";
  return "Lifestyle";
};

const mapProduct = (product, slug) => {
  const department = getDepartment(product.category);
  const originalPrice = product.discountPercentage
    ? Number((product.price / (1 - product.discountPercentage / 100)).toFixed(2))
    : Number((product.price * 1.2).toFixed(2));
  const sizes = ["mens-shirts", "womens-dresses", "tops"].includes(product.category)
    ? ["S", "M", "L", "XL"]
    : ["mens-shoes", "womens-shoes"].includes(product.category)
      ? ["39", "40", "41", "42", "43", "44"]
      : ["smartphones", "tablets", "laptops"].includes(product.category)
        ? ["128GB", "256GB", "512GB"]
        : ["Standard"];
  const badge =
    product.discountPercentage > 15
      ? `-${Math.round(product.discountPercentage)}%`
      : product.rating >= 4.8
        ? "Hot"
        : product.stock < 10
          ? "Limited"
          : "Popular";
  const badgeType =
    product.discountPercentage > 15
      ? "discount"
      : product.rating >= 4.8
        ? "hot"
        : product.stock < 10
          ? "sale"
          : "primary";
  const image = product.thumbnail || product.images?.[0] || "";
  const gallery = product.images?.length ? product.images : [image];

  return {
    id: `dj-${product.id}`,
    slug,
    title: product.title,
    brand: product.brand || "Authentic",
    category: product.category,
    department,
    price: Number(product.price.toFixed(2)),
    originalPrice,
    badge,
    badgeType,
    rating: Number((product.rating || 4.5).toFixed(1)),
    reviewCount: (product.reviews?.length && product.reviews.length * 15) || 28 + (product.id % 50),
    image,
    gallery,
    shortDescription: product.description,
    description: product.description,
    additionalInfo: {
      sku: product.sku || `SKU-${product.id}`,
      warranty: product.warrantyInformation || "1 Year Official Warranty",
      shipping: product.shippingInformation || "Free Express Delivery in 2-4 days",
      origin: "Imported Authentic",
    },
    sizes,
    colors: [
      { name: "Default", hex: "#1A1A1A" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    inStock: product.stock > 0,
    stockCount: product.stock || 25,
    isFeatured: product.rating >= 4.5 && product.id % 4 === 0,
    isDeal: product.discountPercentage > 12,
    tags: product.tags?.length ? product.tags : [product.category, department],
    reviews: Array.isArray(product.reviews) ? product.reviews : [],
  };
};

const fetchJson = async (url, signal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`DummyJSON request failed (${response.status}): ${url}`);
  }
  return response.json();
};

export const fetchProductCatalog = async (signal) => {
  const [productsData, categoryData] = await Promise.all([
    fetchJson(`${DUMMYJSON_API_URL}/products?limit=0`, signal),
    fetchJson(`${DUMMYJSON_API_URL}/products/category-list`, signal),
  ]);

  if (!Array.isArray(productsData.products) || !Array.isArray(categoryData)) {
    throw new Error("DummyJSON returned an invalid product catalog.");
  }

  const usedSlugs = new Set();
  const products = productsData.products.map((product) => {
    const baseSlug = toSlug(product.title || "") || `product-${product.id}`;
    const slug = usedSlugs.has(baseSlug) ? `${baseSlug}-${product.id}` : baseSlug;
    usedSlugs.add(slug);
    return mapProduct(product, slug);
  });
  const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
  }, {});
  const categories = [
    {
      id: "cat-all",
      name: "All Categories",
      slug: "all",
      count: products.length,
      image: products[0]?.image || "",
      description: "Explore all products from the DummyJSON catalog.",
    },
    ...categoryData.map((category) => {
      const slug = typeof category === "string" ? category : category.slug;
      const name =
        typeof category === "string"
          ? slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
          : category.name;
      const sampleProduct = products.find((product) => product.category === slug);

      return {
        id: `cat-${slug}`,
        name,
        slug,
        count: categoryCounts[slug] || 0,
        image: sampleProduct?.image || products[0]?.image || "",
        description: `Browse all items in ${name}.`,
      };
    }),
  ];

  return { products, categories };
};
