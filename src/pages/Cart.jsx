import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useCart } from "../hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { FiTrash2, FiShoppingBag, FiArrowRight, FiCheck } from "react-icons/fi";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount,
    appliedCoupon,
    discountAmount,
    discountRate,
    applyCoupon,
    removeCoupon,
  } = useCart();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState(null);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const result = applyCoupon(couponCode);
    if (result.success) {
      setCouponMessage({ type: "success", text: `${result.coupon.label} applied successfully!` });
      setCouponCode("");
    } else {
      setCouponMessage({ type: "error", text: result.error });
    }
  };

  const shippingFee = cartSubtotal > 150 || cartSubtotal === 0 ? 0 : 10.0;
  const taxableAmount = Math.max(0, cartSubtotal - discountAmount);
  const estimatedTax = taxableAmount * 0.05; // 5% tax
  const orderTotal = Math.max(0, taxableAmount + shippingFee + estimatedTax);

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart | Roiser</title>
        </Helmet>
        <Container className="py-20 text-center">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiShoppingBag className="text-4xl text-gray-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-Jost mb-3">
            Your Shopping Cart is Empty
          </h2>
          <p className="text-sm text-[#74787C] max-w-md mx-auto mb-8">
            You don't have any items in your shopping bag. Explore our collection of seasonal garments and luxury fashion.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Explore Our Collection
            </Button>
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Shopping Cart (${cartCount}) | Roiser`}</title>
      </Helmet>

      {/* Breadcrumb Header */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-1">
            Review your selected items before proceeding to checkout
          </p>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column: Cart Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-md bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase text-[#74787C] tracking-wider">
                    <th className="py-4 px-5">Product</th>
                    <th className="py-4 px-4">Price</th>
                    <th className="py-4 px-4 text-center">Quantity</th>
                    <th className="py-4 px-4">Subtotal</th>
                    <th className="py-4 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {cart.map((item) => (
                    <tr key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-4">
                          <Link
                            to={`/product/${item.slug}`}
                            className="w-16 h-16 bg-[#F6F6F7] rounded p-2 flex items-center justify-center shrink-0 overflow-hidden"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </Link>
                          <div>
                            <Link
                              to={`/product/${item.slug}`}
                              className="font-semibold text-[#1A1A1A] hover:text-[#E53E3E] transition-colors line-clamp-1"
                            >
                              {item.title}
                            </Link>
                            <p className="text-xs text-[#74787C] mt-0.5">
                              Size: {item.selectedSize} &bull; Color: {item.selectedColor}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-medium text-[#1A1A1A]">
                        {formatCurrency(item.price)}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center border border-gray-200 rounded w-24 mx-auto">
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
                            className="px-2.5 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-[#1A1A1A]">
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
                            className="px-2.5 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-bold text-[#1A1A1A]">
                        {formatCurrency(item.price * item.quantity)}
                      </td>

                      <td className="py-4 px-4 text-center">
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id, item.selectedSize, item.selectedColor)
                          }
                          className="text-gray-400 hover:text-[#E53E3E] transition-colors p-2"
                        >
                          <FiTrash2 className="text-base" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View (screens < 640px) */}
            <div className="sm:hidden space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="bg-white border border-gray-200 rounded-md p-4 flex gap-4 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-[#F6F6F7] rounded p-2 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      className="font-semibold text-sm text-[#1A1A1A] line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-[#74787C] mb-2">
                      {item.selectedSize} / {item.selectedColor}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded">
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
                          className="px-2 py-0.5 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
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
                          className="px-2 py-0.5 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-sm text-[#1A1A1A]">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id, item.selectedSize, item.selectedColor)
                    }
                    className="text-gray-400 hover:text-[#E53E3E] p-2"
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <Link to="/shop">
                <Button variant="outlineDark" size="sm">
                  &larr; Continue Shopping
                </Button>
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-[#74787C] hover:text-[#E53E3E] underline font-medium"
              >
                Clear entire shopping cart
              </button>
            </div>

            {/* Promo Code Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
              <h4 className="text-sm font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">
                Have a Promotional Voucher?
              </h4>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-emerald-600 text-sm" />
                    <span>
                      Active Code: <strong>{appliedCoupon.code}</strong> ({(discountRate * 100).toFixed(0)}% Off)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeCoupon();
                      setCouponMessage(null);
                    }}
                    className="text-red-500 hover:underline font-semibold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    placeholder="Try 'ROISER15' or 'ROISER30'"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 text-xs sm:text-sm bg-white border border-gray-300 rounded px-3 py-2 outline-none uppercase font-semibold text-[#1A1A1A] focus:border-[#E53E3E]"
                  />
                  <Button type="submit" variant="primary" size="sm">
                    Apply Code
                  </Button>
                </form>
              )}

              {couponMessage && (
                <p
                  className={`text-xs mt-2 font-medium ${
                    couponMessage.type === "success" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {couponMessage.text}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 shadow-xs space-y-5">
            <h3 className="text-lg font-bold text-[#1A1A1A] pb-4 border-b border-gray-100 font-Jost uppercase tracking-wider">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#74787C]">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-semibold text-[#1A1A1A]">
                  {formatCurrency(cartSubtotal)}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Discount ({appliedCoupon?.code || `${(discountRate * 100).toFixed(0)}%`})</span>
                  <span>-{formatCurrency(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span className="font-semibold text-[#1A1A1A]">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 font-bold uppercase">Free</span>
                  ) : (
                    formatCurrency(shippingFee)
                  )}
                </span>
              </div>
              {shippingFee > 0 && (
                <p className="text-[11px] text-gray-400">
                  Add {formatCurrency(150 - cartSubtotal)} more to qualify for Free Shipping!
                </p>
              )}

              <div className="flex justify-between">
                <span>Estimated Sales Tax (5%)</span>
                <span className="font-semibold text-[#1A1A1A]">
                  {formatCurrency(estimatedTax)}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-between items-baseline">
              <span className="text-base font-bold text-[#1A1A1A]">Estimated Total</span>
              <span className="text-2xl font-bold text-[#E53E3E]">
                {formatCurrency(orderTotal)}
              </span>
            </div>

            <Button
              onClick={() => navigate("/checkout")}
              variant="primary"
              size="lg"
              className="w-full flex items-center justify-center gap-2 py-3.5 uppercase tracking-wider"
            >
              Proceed To Checkout <FiArrowRight />
            </Button>

            <p className="text-[11px] text-[#74787C] text-center">
              Taxes and shipping confirmed during checkout step.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
