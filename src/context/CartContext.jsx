import React, { useState, useEffect } from "react";
import { storage } from "../utils/storage";
import { CartContext } from "./cart.context";

const CART_STORAGE_KEY = "roiser_cart";
const COUPON_STORAGE_KEY = "roiser_coupon";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => storage.get(CART_STORAGE_KEY, []));
  const [appliedCoupon, setAppliedCoupon] = useState(() =>
    storage.get(COUPON_STORAGE_KEY, null)
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastNotification, setLastNotification] = useState(null);

  useEffect(() => {
    storage.set(CART_STORAGE_KEY, cart);
  }, [cart]);

  useEffect(() => {
    if (appliedCoupon) {
      storage.set(COUPON_STORAGE_KEY, appliedCoupon);
    } else {
      storage.remove(COUPON_STORAGE_KEY);
    }
  }, [appliedCoupon]);

  // Add item to cart
  const addToCart = (product, quantity = 1, size = null, color = null) => {
    const selectedSize = size || (product.sizes && product.sizes[0]) || "One Size";
    const selectedColor = color || (product.colors && product.colors[0]?.name) || "Default";

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prevCart,
        {
          id: product.id,
          slug: product.slug,
          title: product.title,
          price: product.price,
          originalPrice: product.originalPrice || product.price,
          image: product.image,
          category: product.category,
          brand: product.brand,
          selectedSize,
          selectedColor,
          quantity,
        },
      ];
    });

    setLastNotification(`Added ${product.title} to cart`);
    setIsCartOpen(true);
    setTimeout(() => setLastNotification(null), 3000);
  };

  const removeFromCart = (id, selectedSize, selectedColor) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  const updateQuantity = (id, quantity, selectedSize, selectedColor) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedSize, selectedColor);
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (rawCode) => {
    const code = (rawCode || "").trim().toUpperCase();
    if (!code) {
      return { success: false, error: "Please enter a promo code." };
    }

    if (code === "ROISER15" || code === "WELCOME15") {
      const coupon = { code, discountRate: 0.15, label: "15% Promo Discount" };
      setAppliedCoupon(coupon);
      setLastNotification("15% Promo discount applied!");
      setTimeout(() => setLastNotification(null), 3000);
      return { success: true, coupon };
    }

    if (code === "ROISER30") {
      const coupon = { code, discountRate: 0.30, label: "30% VIP Promo Discount" };
      setAppliedCoupon(coupon);
      setLastNotification("30% VIP promo discount applied!");
      setTimeout(() => setLastNotification(null), 3000);
      return { success: true, coupon };
    }

    return { success: false, error: "Invalid promo code. Try 'ROISER15' or 'ROISER30'." };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountRate = appliedCoupon ? appliedCoupon.discountRate : 0;
  const discountAmount = Number((cartSubtotal * discountRate).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        appliedCoupon,
        discountRate,
        discountAmount,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        lastNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
