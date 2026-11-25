import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useAuth } from "../hooks/useAuth";
import { storage } from "../utils/storage";
import { formatCurrency } from "../utils/formatCurrency";
import { FiUser, FiPackage, FiShoppingBag, FiArrowRight } from "react-icons/fi";

const Account = () => {
  const { user, logout } = useAuth();

  const userOrders = useMemo(() => {
    const allOrders = storage.get("roiser_orders", []);
    if (!Array.isArray(allOrders)) return [];
    if (!user) return [];
    return allOrders.filter(
      (order) => order.userEmail === user.email || order.customer?.email === user.email
    );
  }, [user]);

  return (
    <>
      <Helmet>
        <title>My Account | Roiser</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
                My Account
              </h1>
              <p className="text-xs sm:text-sm text-[#74787C] mt-1">
                Manage your profile, order receipts, and member activity
              </p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="text-xs font-bold text-[#E53E3E] hover:underline cursor-pointer border border-[#E53E3E] px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* User Profile Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-[#E53E3E] rounded-full flex items-center justify-center text-xl font-bold">
                <FiUser />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#1A1A1A]">{user?.name}</h3>
                <p className="text-xs text-[#74787C]">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#74787C]">
              <div className="flex justify-between">
                <span>Account Role:</span>
                <span className="font-semibold text-[#1A1A1A] capitalize">{user?.role || "Customer"}</span>
              </div>
              <div className="flex justify-between">
                <span>Member Since:</span>
                <span className="font-semibold text-[#1A1A1A]">
                  {user?.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : "2026"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Orders:</span>
                <span className="font-bold text-[#E53E3E]">{userOrders.length}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link to="/wishlist">
                <Button variant="outlineDark" size="sm" className="w-full justify-between">
                  <span>View Wishlist</span>
                  <FiArrowRight />
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="primary" size="sm" className="w-full justify-between">
                  <span>Browse Shop</span>
                  <FiArrowRight />
                </Button>
              </Link>
            </div>
          </div>

          {/* Orders History Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#1A1A1A] font-Jost uppercase tracking-wide flex items-center gap-2">
                <FiPackage className="text-[#E53E3E]" /> Order History ({userOrders.length})
              </h2>
            </div>

            {userOrders.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-10 text-center">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FiShoppingBag />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">No Orders Yet</h3>
                <p className="text-xs sm:text-sm text-[#74787C] max-w-sm mx-auto mb-6">
                  You haven&apos;t placed any orders yet. Discover our curated collection and place your first order.
                </p>
                <Link to="/shop">
                  <Button variant="primary" size="md">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userOrders.map((order) => (
                  <div
                    key={order.orderId}
                    className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs space-y-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100 text-xs">
                      <div>
                        <span className="text-[#74787C]">Order ID: </span>
                        <strong className="text-[#1A1A1A] font-bold">#{order.orderId}</strong>
                      </div>
                      <div className="text-[#74787C]">
                        {new Date(order.createdAt).toLocaleDateString()} &bull;{" "}
                        <span className="capitalize font-semibold text-[#1A1A1A]">
                          {order.summary?.paymentMethod?.toUpperCase()}
                        </span>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-0.5 rounded text-[11px] uppercase">
                        Confirmed
                      </span>
                    </div>

                    {/* Order Items summary */}
                    <div className="divide-y divide-gray-100">
                      {order.items?.map((item, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-10 h-10 object-contain bg-gray-50 rounded p-1 border border-gray-100 shrink-0"
                            />
                            <div className="truncate">
                              <p className="font-semibold text-[#1A1A1A] truncate">{item.title}</p>
                              <p className="text-[11px] text-[#74787C]">
                                Qty: {item.quantity} &bull; {item.selectedSize}
                              </p>
                            </div>
                          </div>
                          <span className="font-semibold text-[#1A1A1A] shrink-0">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs">
                        <span className="text-[#74787C]">Order Total: </span>
                        <strong className="text-base text-[#E53E3E] font-bold">
                          {formatCurrency(order.summary?.total)}
                        </strong>
                      </div>
                      <Link to={`/order-success/${order.orderId}`}>
                        <Button variant="outlineDark" size="sm">
                          View Receipt &rarr;
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Account;
