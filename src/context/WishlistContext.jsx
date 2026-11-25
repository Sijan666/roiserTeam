import React, { useState, useEffect } from "react";
import { storage } from "../utils/storage";
import { WishlistContext } from "./wishlist.context";

const WISHLIST_STORAGE_KEY = "roiser_wishlist";

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const raw = storage.get(WISHLIST_STORAGE_KEY, []);
    // Sanitize any existing corrupted items from localStorage
    if (Array.isArray(raw)) {
      return raw.filter((item) => item && typeof item === "object" && item.id);
    }
    return [];
  });
  const [lastNotification, setLastNotification] = useState(null);

  useEffect(() => {
    storage.set(WISHLIST_STORAGE_KEY, wishlist);
  }, [wishlist]);

  const isInWishlist = (productId) => {
    if (!productId) return false;
    return wishlist.some((item) => item && (item.id === productId || item.id === String(productId)));
  };

  const addToWishlist = (product) => {
    if (!product || !product.id) return;
    if (!isInWishlist(product.id)) {
      // Store a clean product object
      const safeProduct = {
        id: product.id,
        slug: product.slug || `product-${product.id}`,
        title: product.title || "Product",
        price: product.price || 0,
        originalPrice: product.originalPrice || null,
        brand: product.brand || "",
        category: product.category || "",
        image: product.image || (product.images && product.images[0]) || product.thumbnail || "",
      };
      setWishlist((prev) => [...prev, safeProduct]);
      setLastNotification(`Added ${product.title} to wishlist`);
      setTimeout(() => setLastNotification(null), 3000);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item && item.id !== productId && item.id !== String(productId)));
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      setLastNotification(`Removed ${product.title} from wishlist`);
    } else {
      addToWishlist(product);
    }
    setTimeout(() => setLastNotification(null), 3000);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        lastNotification,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
