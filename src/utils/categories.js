export const CATEGORY_GROUPS = {
  women: {
    slug: "women",
    name: "Women's Fashion",
    categories: [
      "womens-dresses",
      "tops",
      "womens-shoes",
      "womens-bags",
      "womens-jewellery",
      "womens-watches",
    ],
  },
  men: {
    slug: "men",
    name: "Men's Fashion",
    categories: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  accessories: {
    slug: "accessories",
    name: "Accessories & Jewelry",
    categories: [
      "womens-jewellery",
      "womens-bags",
      "mens-watches",
      "womens-watches",
      "sunglasses",
    ],
  },
  footwear: {
    slug: "footwear",
    name: "Footwear & Shoes",
    categories: ["mens-shoes", "womens-shoes"],
  },
};

/**
 * Matches a product against a category slug, collection group, or department name
 * using exact membership rather than substring matching.
 */
export const matchesCategoryFilter = (product, selectedCategory) => {
  if (!selectedCategory || selectedCategory === "all") return true;

  const normalized = selectedCategory.trim().toLowerCase();
  const group = CATEGORY_GROUPS[normalized];
  const productCategory = product.category?.toLowerCase();

  if (group) {
    return group.categories.includes(productCategory);
  }

  return (
    productCategory === normalized ||
    product.department?.toLowerCase() === normalized
  );
};

/**
 * Resolves display metadata for either a curated collection slug or a catalog category slug.
 */
export const resolveCategoryMeta = (selectedCategory, categories = []) => {
  if (!selectedCategory || selectedCategory === "all") return null;

  const normalized = selectedCategory.trim().toLowerCase();
  if (CATEGORY_GROUPS[normalized]) {
    return CATEGORY_GROUPS[normalized];
  }

  return categories.find((item) => item.slug.toLowerCase() === normalized) || null;
};
