import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import RouteSeo from "./RouteSeo";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { FiCheckCircle } from "react-icons/fi";

const RootLayout = () => {
  const { lastNotification: cartNotif } = useCart();
  const { lastNotification: wishNotif } = useWishlist();

  const activeNotification = cartNotif || wishNotif;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#1A1A1A] relative">
      {/* Toast Notification Banner */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A1A1A] text-white px-5 py-3 rounded-md shadow-2xl flex items-center gap-3 animate-bounce">
          <FiCheckCircle className="text-[#E53E3E] text-lg shrink-0" />
          <span className="text-sm font-medium">{activeNotification}</span>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer />
      <RouteSeo />

      <div>
        <HeaderTop />
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
