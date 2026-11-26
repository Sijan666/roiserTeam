import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import RouteSeo from "./RouteSeo";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { FiCheckCircle } from "react-icons/fi";

const ToastNotification = ({ message }) => {
  const [displayedMessage, setDisplayedMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setDisplayedMessage(message);
      setIsVisible(true);
      return undefined;
    }

    setIsVisible(false);
    const timeout = window.setTimeout(() => setDisplayedMessage(null), 300);
    return () => window.clearTimeout(timeout);
  }, [message]);

  if (!displayedMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-3 left-3 right-3 z-50 mx-auto flex w-auto max-w-sm items-center gap-3 rounded-md bg-[#1A1A1A] px-4 py-3 text-white shadow-2xl sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:px-5 ${
        isVisible ? "toast-enter" : "toast-exit"
      }`}
    >
      <FiCheckCircle className="shrink-0 text-lg text-[#E53E3E]" />
      <span className="min-w-0 break-words text-sm font-medium leading-snug">
        {displayedMessage}
      </span>
    </div>
  );
};

const RootLayout = () => {
  const { pathname } = useLocation();
  const { lastNotification: cartNotif } = useCart();
  const { lastNotification: wishNotif } = useWishlist();

  const activeNotification = cartNotif || wishNotif;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#1A1A1A] relative">
      {/* Toast Notification Banner */}
      <ToastNotification message={activeNotification} />

      {/* Cart Drawer */}
      <CartDrawer />
      <RouteSeo />

      <div>
        <HeaderTop />
        <Header />
        <main>
          <div key={pathname} className="site-page-enter">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
