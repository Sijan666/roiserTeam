import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiTrash2, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../common/Button";

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartSubtotal, cartCount } =
    useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    closeCart();
    navigate("/checkout");
  };

  const handleViewCartClick = () => {
    closeCart();
    navigate("/cart");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="text-[#E53E3E] text-xl" />
              <h3 className="font-semibold text-lg text-[#1A1A1A] font-Jost">
                Shopping Cart ({cartCount})
              </h3>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-gray-400 hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-gray-100"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <FiShoppingBag className="text-3xl text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">
                  Your cart is empty
                </h4>
                <p className="text-sm text-[#74787C] max-w-[240px] mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Button
                  onClick={() => {
                    closeCart();
                    navigate("/shop");
                  }}
                  variant="primary"
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="py-4 flex gap-4 items-start"
                >
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="w-20 h-20 bg-[#F6F6F7] rounded-md shrink-0 p-2 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-medium text-sm text-[#1A1A1A] hover:text-[#E53E3E] transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-[#74787C] mt-1 mb-2">
                      <span>Size: {item.selectedSize}</span>
                      <span>•</span>
                      <span>Color: {item.selectedColor}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="px-2.5 py-0.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="px-2.5 py-0.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-semibold text-sm text-[#1A1A1A]">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    title="Remove item"
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.selectedSize,
                        item.selectedColor
                      )
                    }
                    className="text-gray-400 hover:text-[#E53E3E] transition-colors p-1"
                  >
                    <FiTrash2 className="text-base" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-[#FBFBFA] space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-sm text-[#74787C]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-base text-[#1A1A1A]">
                    {formatCurrency(cartSubtotal)}
                  </span>
                </div>
                <p className="text-xs text-[#74787C]">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleViewCartClick}
                  variant="outlineDark"
                  className="w-full text-xs sm:text-sm py-3"
                >
                  View Cart
                </Button>
                <Button
                  onClick={handleCheckoutClick}
                  variant="primary"
                  className="w-full text-xs sm:text-sm py-3 flex items-center justify-center gap-1"
                >
                  Checkout <FiArrowRight />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
