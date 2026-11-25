import React, { Suspense, lazy } from "react";
import "./index.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Loader from "./components/Loader";
import ReactLenis from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import { useAuth } from "./hooks/useAuth";

// Code-split pages for production performance
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: `${location.pathname}${location.search}` }}
        replace
      />
    );
  }

  return children;
};

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    >
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Core Home & Shop */}
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />

            {/* Dynamic Product Details by slug */}
            <Route path="product/:slug" element={<ProductDetails />} />

            {/* E-Commerce Flows */}
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="order-success/:orderId"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />

            {/* Editorial & Information */}
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />

            {/* Authentication */}
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/* Backwards compatibility aliases for previous prototype routes */}
            <Route path="shopgrid" element={<Navigate to="/shop" replace />} />
            <Route path="shop_grid" element={<Navigate to="/shop" replace />} />
            <Route
              path="productdetails"
              element={<Navigate to="/product/monica-diara-party-dress" replace />}
            />
          </Route>

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ReactLenis>
  );
}

export default App;
