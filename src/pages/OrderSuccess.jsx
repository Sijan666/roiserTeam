import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { storage } from "../utils/storage";
import { useAuth } from "../hooks/useAuth";
import { FiCheckCircle, FiPrinter, FiAlertCircle } from "react-icons/fi";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const { user } = useAuth();

  // Retrieve matching order from localStorage and verify ownership
  const order = useMemo(() => {
    if (!orderId) return null;
    const orders = storage.get("roiser_orders", []);
    const found = orders.find((o) => o.orderId === orderId);
    if (!found) return null;

    // Optional user validation if order was placed by authenticated user
    if (user && found.userEmail && found.userEmail !== user.email) {
      return null;
    }

    return found;
  }, [orderId, user]);

  const handlePrint = () => {
    window.print();
  };

  if (!order) {
    return (
      <>
        <Helmet>
          <title>Order Not Found | Roiser</title>
        </Helmet>
        <Container className="py-20 text-center max-w-lg">
          <div className="w-20 h-20 bg-red-50 text-[#E53E3E] rounded-full flex items-center justify-center mx-auto mb-6">
            <FiAlertCircle className="text-4xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-Jost mb-3">
            Order Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mb-8 leading-relaxed">
            We couldn't find an order matching reference <strong>#{orderId}</strong>. It may have been cleared from local history or placed under a different account.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/shop">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Order #${order.orderId} Confirmed | Roiser`}</title>
      </Helmet>

      <Container className="py-12 md:py-20 max-w-3xl">
        {/* Success Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-10 shadow-xs text-center">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="text-4xl" />
          </div>

          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            Payment & Order Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-Jost mt-4 mb-2">
            Thank You for Your Order!
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] max-w-md mx-auto mb-8">
            Your order <strong>#{order.orderId}</strong> has been registered. A confirmation email has been sent to <strong>{order.customer.email}</strong>.
          </p>

          {/* Receipt Breakdown Box */}
          <div className="bg-[#F8F9FA] rounded-md p-6 text-left border border-gray-200 text-xs sm:text-sm mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between pb-4 border-b border-gray-200 gap-2">
              <div>
                <span className="text-[#74787C] block text-xs">Order Number:</span>
                <strong className="text-[#1A1A1A] font-bold">{order.orderId}</strong>
              </div>
              <div>
                <span className="text-[#74787C] block text-xs">Date:</span>
                <span className="text-[#1A1A1A]">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-[#74787C] block text-xs">Payment Method:</span>
                <span className="text-[#1A1A1A] uppercase font-semibold">
                  {order.summary.paymentMethod}
                </span>
              </div>
            </div>

            {/* Delivery To */}
            <div className="pb-4 border-b border-gray-200">
              <span className="text-[#74787C] block text-xs mb-1">Delivering To:</span>
              <p className="font-semibold text-[#1A1A1A]">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p className="text-gray-600">
                {order.customer.address}, {order.customer.city}, {order.customer.state}{" "}
                {order.customer.zipCode}
              </p>
              <p className="text-gray-500 text-xs mt-0.5">Phone: {order.customer.phone}</p>
            </div>

            {/* Items Purchased */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wide block">
                Purchased Items:
              </span>
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 object-contain bg-white rounded p-1 border border-gray-200"
                    />
                    <span>
                      {item.title} &times; <strong>{item.quantity}</strong> ({item.selectedSize})
                    </span>
                  </div>
                  <span className="font-semibold text-[#1A1A1A]">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Financial Totals */}
            <div className="pt-4 border-t border-gray-200 space-y-1.5 text-xs text-[#74787C]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatCurrency(order.summary.subtotal)}</span>
              </div>
              {order.summary.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>
                    Discount {order.summary.couponCode ? `(${order.summary.couponCode})` : ""}:
                  </span>
                  <span>-{formatCurrency(order.summary.discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee ({order.summary.shippingMethod === "express" ? "Express" : "Standard"}):</span>
                <span>{formatCurrency(order.summary.shippingFee)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes:</span>
                <span>{formatCurrency(order.summary.tax)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1A1A1A] pt-2 border-t border-gray-200">
                <span>Total Amount Paid:</span>
                <span className="text-[#E53E3E] text-base">
                  {formatCurrency(order.summary.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/shop">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
            <Button
              onClick={handlePrint}
              variant="outlineDark"
              size="md"
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <FiPrinter /> Print Receipt
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OrderSuccess;
