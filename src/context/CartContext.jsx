import React, { useState, useEffect } from "react";
import { storage } from "../utils/storage";
import { CartContext } from "./cart.context";

const CART_STORAGE_KEY = "roiser_cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => storage.get(CART_STORAGE_KEY, []));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastNotification, setLastNotification] = useState(null);

  useEffect(() => {
    storage.set(CART_STORAGE_KEY, cart);
  }, [cart]);

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
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
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
