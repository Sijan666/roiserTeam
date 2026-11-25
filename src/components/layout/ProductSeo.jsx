import { useEffect } from "react";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "../../utils/seo";

const truncateDescription = (description) => {
  const cleanDescription = description.replace(/\s+/g, " ").trim();
  return cleanDescription.length > 160
    ? `${cleanDescription.slice(0, 157).trimEnd()}...`
    : cleanDescription;
};

const ProductSeo = ({ product }) => {
  useEffect(() => {
    const cleanups = [];
    const title = product ? `${product.title} | Roiser Luxury Fashion` : "Product | Roiser";
    const description = product
      ? truncateDescription(`${product.title} by ${product.brand}. ${product.description}`)
      : "Browse product details and shop the Roiser catalog.";
    const imageUrl = product?.image ? absoluteUrl(product.image) : DEFAULT_OG_IMAGE;
    const canonical = document.head.querySelector('link[rel="canonical"]');
    const previousTitle = document.title;

    document.title = title;
    cleanups.push(() => {
      document.title = previousTitle;
    });

    const setMeta = (attribute, key, content) => {
      const selector = `meta[${attribute}="${key}"]`;
      let element = document.head.querySelector(selector);
      const created = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      const previousContent = element.getAttribute("content");
      if (content === null) {
        element.removeAttribute("content");
      } else {
        element.setAttribute("content", content);
      }

      cleanups.push(() => {
        if (created) {
          element.remove();
        } else if (previousContent === null) {
          element.removeAttribute("content");
        } else {
          element.setAttribute("content", previousContent);
        }
      });
    };

    const canonicalParent = canonical?.parentNode;
    const canonicalNextSibling = canonical?.nextSibling;
    const previousCanonical = canonical?.getAttribute("href");
    if (product && canonical) {
      canonical.setAttribute("href", absoluteUrl(`/product/${product.slug}`));
    } else if (product) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = absoluteUrl(`/product/${product.slug}`);
      document.head.appendChild(link);
      cleanups.push(() => link.remove());
    } else {
      canonical?.remove();
    }

    if (canonical) {
      cleanups.push(() => {
        if (product) {
          if (previousCanonical === null) {
            canonical.removeAttribute("href");
          } else {
            canonical.setAttribute("href", previousCanonical);
          }
        } else if (canonicalParent) {
          canonicalParent.insertBefore(
            canonical,
            canonicalNextSibling?.parentNode === canonicalParent ? canonicalNextSibling : null
          );
        }
      });
    }

    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      product
        ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        : "noindex, nofollow"
    );
    setMeta("property", "og:site_name", "Roiser");
    setMeta("property", "og:type", product ? "product" : "website");
    setMeta("property", "og:url", product ? absoluteUrl(`/product/${product.slug}`) : null);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", title);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    if (product) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: truncateDescription(product.description),
        image: (product.gallery?.length ? product.gallery : [product.image]).map(absoluteUrl),
        sku: product.additionalInfo?.sku,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        category: product.category,
        offers: {
          "@type": "Offer",
          url: absoluteUrl(`/product/${product.slug}`),
          priceCurrency: "USD",
          price: product.price.toFixed(2),
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Roiser",
          },
        },
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
      document.head.appendChild(script);
      cleanups.push(() => script.remove());
    }

    return () => cleanups.reverse().forEach((cleanup) => cleanup());
  }, [product]);

  return null;
};

export default ProductSeo;
