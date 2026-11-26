import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiTrash2, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import { useCurrency } from "../../hooks/useCurrency";
import Button from "../common/Button";

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartSubtotal, cartCount } =
    useCart();
  const { formatPrice: formatCurrency } = useCurrency();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCartOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isCartOpen]);

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

      <div className="fixed inset-y-0 right-0 flex w-full max-w-md">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
          className="flex h-full min-h-0 w-full flex-col bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-4 pb-4 pt-[calc(1rem+env(safe-area-inset-top))] sm:p-5">
            <div className="flex min-w-0 items-center gap-2">
              <FiShoppingBag className="text-[#E53E3E] text-xl" />
              <h3 className="truncate font-Jost text-base font-semibold text-[#1A1A1A] sm:text-lg">
                Shopping Cart ({cartCount})
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close shopping cart"
              onClick={closeCart}
              className="ml-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#1A1A1A]"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="min-h-0 flex-1 divide-y divide-gray-100 overflow-y-auto overscroll-contain p-4 sm:p-5">
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
                  className="flex items-start gap-3 py-4 sm:gap-4"
                >
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#F6F6F7] p-2 sm:h-20 sm:w-20"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </Link>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-medium text-sm text-[#1A1A1A] hover:text-[#E53E3E] transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <div className="mb-2 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#74787C] sm:text-xs">
                      <span className="break-words">Size: {item.selectedSize}</span>
                      <span aria-hidden="true">•</span>
                      <span className="break-words">Color: {item.selectedColor}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {/* Quantity Stepper */}
                      <div className="flex shrink-0 items-center rounded-sm border border-gray-200">
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
                          className="inline-flex h-8 w-8 items-center justify-center text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-100 sm:h-9 sm:w-9"
                        >
                          -
                        </button>
                        <span className="min-w-8 px-1 text-center text-xs font-semibold text-[#1A1A1A]">
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
                          className="inline-flex h-8 w-8 items-center justify-center text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-100 sm:h-9 sm:w-9"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="whitespace-nowrap text-sm font-semibold text-[#1A1A1A]">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    aria-label={`Remove ${item.title} from cart`}
                    title="Remove item"
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.selectedSize,
                        item.selectedColor
                      )
                    }
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-1 text-gray-400 transition-colors hover:text-[#E53E3E]"
                  >
                    <FiTrash2 className="text-base" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="shrink-0 space-y-3 border-t border-gray-100 bg-[#FBFBFA] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:space-y-4 sm:p-5">
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

              <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:gap-3">
                <Button
                  onClick={handleViewCartClick}
                  variant="outlineDark"
                  className="min-h-11 w-full px-3 py-2 text-xs sm:text-sm"
                >
                  View Cart
                </Button>
                <Button
                  onClick={handleCheckoutClick}
                  variant="primary"
                  className="flex min-h-11 w-full items-center justify-center gap-1 px-3 py-2 text-xs sm:text-sm"
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
