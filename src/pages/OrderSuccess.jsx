import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { storage } from "../utils/storage";
import { FiCheckCircle, FiPackage, FiPrinter } from "react-icons/fi";

const OrderSuccess = () => {
  const { orderId } = useParams();

  // Retrieve order details from localStorage
  const order = useMemo(() => {
    const orders = storage.get("roiser_orders", []);
    return orders.find((o) => o.orderId === orderId) || orders[0] || null;
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Order Confirmed | Roiser</title>
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
            Your order <strong>#{order?.orderId || orderId}</strong> has been registered. A confirmation email has been sent with your tracking info.
          </p>

          {/* Receipt Breakdown Box */}
          {order && (
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
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
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
          )}

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
