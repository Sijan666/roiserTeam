import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { formatCurrency } from "../utils/formatCurrency";
import { storage } from "../utils/storage";

const ORDERS_STORAGE_KEY = "roiser_orders";

const createOrderId = () => "ORD-" + Date.now().toString().slice(-6);
const createOrderTimestamp = () => new Date().toISOString();

const Checkout = () => {
  const {
    cart,
    cartSubtotal,
    cartCount,
    clearCart,
    appliedCoupon,
    discountAmount,
    discountRate,
    applyCoupon,
    removeCoupon,
  } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [checkoutCouponCode, setCheckoutCouponCode] = useState("");
  const [checkoutCouponMessage, setCheckoutCouponMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.name?.split(" ")[0] || "",
      lastName: user?.name?.split(" ")[1] || "",
      email: user?.email || "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      orderNotes: "",
    },
  });

  const shippingFee =
    shippingMethod === "express" ? 15.0 : cartSubtotal > 150 ? 0 : 10.0;
  const taxableAmount = Math.max(0, cartSubtotal - discountAmount);
  const estimatedTax = taxableAmount * 0.05;
  const orderTotal = Math.max(0, taxableAmount + shippingFee + estimatedTax);

  const handleApplyCheckoutCoupon = (e) => {
    e.preventDefault();
    const result = applyCoupon(checkoutCouponCode);
    if (result.success) {
      setCheckoutCouponMessage({ type: "success", text: `${result.coupon.label} applied!` });
      setCheckoutCouponCode("");
    } else {
      setCheckoutCouponMessage({ type: "error", text: result.error });
    }
  };

  const onPlaceOrder = async (formData) => {
    if (cart.length === 0) return;
    if (!user) {
      navigate("/login", { state: { from: "/checkout" }, replace: true });
      return;
    }

    setIsSubmittingOrder(true);
    // Simulate payment / order processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    const orderId = createOrderId();
    const orderRecord = {
      orderId,
      userId: user.id || null,
      userEmail: user.email,
      createdAt: createOrderTimestamp(),
      customer: formData,
      items: cart,
      summary: {
        subtotal: cartSubtotal,
        discountAmount,
        couponCode: appliedCoupon?.code || null,
        shippingFee,
        shippingMethod,
        tax: estimatedTax,
        total: orderTotal,
        paymentMethod,
      },
    };

    // Save to localStorage
    const existingOrders = storage.get(ORDERS_STORAGE_KEY, []);
    storage.set(ORDERS_STORAGE_KEY, [orderRecord, ...existingOrders]);

    // Clear cart and redirect
    clearCart();
    setIsSubmittingOrder(false);
    navigate(`/order-success/${orderId}`);
  };

  if (cart.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-3 font-Jost">Your Cart is Empty</h2>
        <p className="text-sm text-[#74787C] mb-6">
          Please add products to your cart before proceeding to checkout.
        </p>
        <Link to="/shop">
          <Button variant="primary">Shop Now</Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Secure Checkout | Roiser eCommerce</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Checkout
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-1">
            Complete your order with 256-bit SSL encrypted security
          </p>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        <form onSubmit={handleSubmit(onPlaceOrder)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Billing & Delivery Details */}
            <div className="lg:col-span-7 space-y-8">
              {/* Billing Address Form */}
              <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1A1A1A] pb-4 border-b border-gray-100 font-Jost mb-6">
                  Billing & Shipping Address
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.firstName ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.firstName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.lastName ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.lastName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Valid email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: { value: 7, message: "Phone number is too short" },
                        })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.phone ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      {...register("address", { required: "Street address is required" })}
                      className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                        errors.address ? "border-red-500" : "border-gray-200"
                      } focus:border-[#1A1A1A] mb-1`}
                    />
                    {errors.address && (
                      <span className="text-xs text-red-500 mb-2 block">
                        {errors.address.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        Town / City *
                      </label>
                      <input
                        type="text"
                        {...register("city", { required: "City is required" })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.city ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.city && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.city.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        State / County *
                      </label>
                      <input
                        type="text"
                        {...register("state", { required: "State is required" })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.state ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.state && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.state.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        Zip / Postal Code *
                      </label>
                      <input
                        type="text"
                        {...register("zipCode", { required: "Zip code is required" })}
                        className={`w-full text-xs sm:text-sm p-3 border rounded outline-none ${
                          errors.zipCode ? "border-red-500" : "border-gray-200"
                        } focus:border-[#1A1A1A]`}
                      />
                      {errors.zipCode && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.zipCode.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Notes about your order, e.g. special delivery instructions."
                      {...register("orderNotes")}
                      className="w-full text-xs sm:text-sm p-3 border border-gray-200 rounded outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method Options */}
              <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1A1A1A] pb-4 border-b border-gray-100 font-Jost mb-4">
                  Select Shipping Method
                </h3>
                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-colors ${
                      shippingMethod === "standard"
                        ? "border-[#E53E3E] bg-red-50/30"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="accent-[#E53E3E]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">Standard Delivery</p>
                        <p className="text-xs text-[#74787C]">3–5 business days</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {cartSubtotal > 150 ? "FREE" : "$10.00"}
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-colors ${
                      shippingMethod === "express"
                        ? "border-[#E53E3E] bg-red-50/30"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="accent-[#E53E3E]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">Express Courier</p>
                        <p className="text-xs text-[#74787C]">1–2 business days priority</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#1A1A1A]">$15.00</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Order Summary & Place Order */}
            <div className="lg:col-span-5 bg-[#F6F6F7] border border-gray-200 rounded-md p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] pb-4 border-b border-gray-200 font-Jost uppercase tracking-wider">
                Your Order ({cartCount})
              </h3>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto divide-y divide-gray-200 pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="py-3 flex items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain bg-white rounded p-1 border border-gray-200 shrink-0"
                      />
                      <div className="truncate">
                        <p className="font-semibold text-[#1A1A1A] truncate">{item.title}</p>
                        <p className="text-xs text-[#74787C]">
                          Qty: {item.quantity} &bull; {item.selectedSize}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-[#1A1A1A] shrink-0">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="space-y-2.5 pt-4 border-t border-gray-200 text-xs sm:text-sm text-[#74787C]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
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
                <div className="flex justify-between">
                  <span>Shipping ({shippingMethod === "express" ? "Express" : "Standard"})</span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {shippingFee === 0 ? "FREE" : formatCurrency(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (5%)</span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {formatCurrency(estimatedTax)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1A1A1A] pt-3 border-t border-gray-200">
                  <span>Total Order</span>
                  <span className="text-xl text-[#E53E3E]">{formatCurrency(orderTotal)}</span>
                </div>
              </div>

              {/* Promo Code Box in Checkout */}
              <div className="pt-2 border-t border-gray-200">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-white border border-emerald-200 p-2.5 rounded text-xs text-emerald-800">
                    <span>
                      Coupon: <strong>{appliedCoupon.code}</strong> ({(discountRate * 100).toFixed(0)}% off)
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        removeCoupon();
                        setCheckoutCouponMessage(null);
                      }}
                      className="text-red-500 hover:underline font-semibold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code (e.g. ROISER15)"
                        value={checkoutCouponCode}
                        onChange={(e) => setCheckoutCouponCode(e.target.value)}
                        className="flex-1 text-xs bg-white border border-gray-300 rounded px-3 py-2 outline-none uppercase font-semibold text-[#1A1A1A] focus:border-[#E53E3E]"
                      />
                      <Button
                        type="button"
                        onClick={handleApplyCheckoutCoupon}
                        variant="outlineDark"
                        size="sm"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                )}
                {checkoutCouponMessage && (
                  <p
                    className={`text-xs mt-1.5 font-medium ${
                      checkoutCouponMessage.type === "success" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {checkoutCouponMessage.text}
                  </p>
                )}
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <h4 className="text-sm font-bold text-[#1A1A1A] uppercase">Payment Method</h4>

                <label className="flex items-center gap-2.5 text-xs text-[#1A1A1A] cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-[#E53E3E]"
                  />
                  <span className="font-medium">Cash On Delivery (COD)</span>
                </label>

                <label className="flex items-center gap-2.5 text-xs text-[#1A1A1A] cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-[#E53E3E]"
                  />
                  <span className="font-medium">Credit / Debit Card (Online)</span>
                </label>

                <label className="flex items-center gap-2.5 text-xs text-[#1A1A1A] cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="accent-[#E53E3E]"
                  />
                  <span className="font-medium">PayPal Checkout</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmittingOrder}
                variant="primary"
                size="lg"
                className="w-full py-4 text-sm font-bold uppercase tracking-wider"
              >
                {isSubmittingOrder ? "Processing Order..." : "Place Order Now"}
              </Button>

              <p className="text-[11px] text-[#74787C] text-center leading-relaxed">
                By clicking "Place Order Now", you agree to our terms of service and acknowledge that your order information will be saved securely.
              </p>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Checkout;
