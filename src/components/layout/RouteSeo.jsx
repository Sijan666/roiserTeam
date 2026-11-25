import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useCatalog } from "../../hooks/useCatalog";
import { resolveCategoryMeta } from "../../utils/categories";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_URL } from "../../utils/seo";

const routeMetadata = {
  "/": {
    title: "Roiser | Modern eCommerce Fashion Store",
    description:
      "Explore curated fashion, trending apparel, statement jewelry, and premium outerwear at Roiser.",
  },
  "/shop": {
    title: "Shop Fashion & Apparel | Roiser",
    description:
      "Browse fashion, beauty, electronics, home, and lifestyle products in Roiser's complete online catalog.",
  },
  "/about": {
    title: "About Roiser | Handcrafted Luxury & Sustainable Fashion",
    description:
      "Learn about Roiser's commitment to timeless silhouettes, ethical European craftsmanship, and sustainable luxury.",
  },
  "/faq": {
    title: "Frequently Asked Questions (FAQ) | Roiser",
    description:
      "Answers to questions regarding shipping speeds, returns, international duties, sizing, and order payments at Roiser.",
  },
  "/contact": {
    title: "Contact Customer Concierge | Roiser",
    description:
      "Get in touch with Roiser customer concierge for bespoke tailoring appointments, sizing queries, and order support.",
  },
  "/cart": {
    title: "Shopping Cart | Roiser",
    description: "Review the products in your Roiser shopping cart.",
    noindex: true,
  },
  "/wishlist": {
    title: "My Wishlist | Roiser",
    description: "View the products saved to your Roiser wishlist.",
    noindex: true,
  },
  "/checkout": {
    title: "Secure Checkout | Roiser",
    description: "Complete your Roiser order using our secure checkout.",
    noindex: true,
  },
  "/account": {
    title: "My Account & Orders | Roiser",
    description: "Manage your Roiser account profile and view previous orders.",
    noindex: true,
  },
  "/login": {
    title: "Account Login | Roiser",
    description: "Sign in to your Roiser account to manage your orders and shopping.",
    noindex: true,
  },
  "/signup": {
    title: "Create Account | Roiser eCommerce",
    description: "Create a Roiser account to shop, save products, and manage your orders.",
    noindex: true,
  },
  "/order-success": {
    title: "Order Confirmed | Roiser",
    description: "Your Roiser order has been successfully placed.",
    noindex: true,
  },
};

const truncateDescription = (description) => {
  const cleanDescription = description.replace(/\s+/g, " ").trim();
  return cleanDescription.length > 160
    ? `${cleanDescription.slice(0, 157).trimEnd()}...`
    : cleanDescription;
};

const RouteSeo = () => {
  const location = useLocation();
  const { categories } = useCatalog();
  const searchParams = new URLSearchParams(location.search);
  const categorySlug = location.pathname === "/shop" ? searchParams.get("category") : null;
  const category = resolveCategoryMeta(categorySlug, categories);
  const isProductRoute = /^\/product\/[^/]+\/?$/.test(location.pathname);
  const isOrderSuccess = location.pathname.startsWith("/order-success/");
  const metadata = category
    ? {
        title: `${category.name} Products | Roiser`,
        description: `Shop ${category.name.toLowerCase()} products at Roiser. Browse the latest selection and find your next favorite.`,
      }
    : isOrderSuccess
      ? routeMetadata["/order-success"]
      : routeMetadata[location.pathname] || {
          title: "Roiser | Modern eCommerce Fashion Store",
          description:
            "Shop fashion, beauty, electronics, home, and lifestyle products at Roiser.",
        };
  const noindex = Boolean(metadata.noindex);
  const canonicalPath = category
    ? `/shop?category=${encodeURIComponent(category.slug)}`
    : location.pathname;
  const canonicalUrl = noindex ? null : absoluteUrl(canonicalPath);
  const imageUrl = DEFAULT_OG_IMAGE;
  const schemas = [];

  if (isProductRoute) {
    return null;
  }

  if (location.pathname === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Roiser",
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Roiser",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/shop?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    });
  }

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={truncateDescription(metadata.description)} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:site_name" content="Roiser" />
      <meta property="og:type" content={metadata.type || "website"} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={truncateDescription(metadata.description)} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={metadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={truncateDescription(metadata.description)} />
      <meta name="twitter:image" content={imageUrl} />
      {schemas.map((schema) => (
        <script key={schema["@type"]} type="application/ld+json">
          {JSON.stringify(schema).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Helmet>
  );
};

export default RouteSeo;
