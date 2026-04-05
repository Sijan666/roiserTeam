import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Loader from "./components/Loader";
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Women = lazy(() => import("./components/pages/Women"));
const MyAccount = lazy(() => import("./components/pages/MyAccount"));
const Wishlist = lazy(() => import("./components/pages/Wishlist"));
const Checkout = lazy(() => import("./components/pages/Checkout"));
const StoreLocation = lazy(() => import("./components/pages/StoreLocation"));
const ShopGrid = lazy(() => import("./components/pages/ShopGrid"));
const BlogDetailes = lazy(() => import("./components/pages/BlogDetailes"));
const Shop_Grid = lazy(() => import("./components/pages/Shop_Grid"));
const FAQ = lazy(() => import("./components/pages/FAQ"));
const Bloglist = lazy(() => import("./components/pages/Bloglist"));
const Bloggrid = lazy(() => import("./components/pages/Bloggrid"));
const Login = lazy(() => import("./components/pages/Login"));
const Signup = lazy(() => import("./components/pages/Signup"));
const Contact = lazy(() => import("./components/pages/Contact"));
const ProductsDetails = lazy(() => import("./components/pages/ProductsDetails"));
const Error = lazy(() => import("./components/pages/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/women" element={<Women />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/storelocation" element={<StoreLocation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shopgrid" element={<ShopGrid />} />
            <Route path="/shop_grid" element={<Shop_Grid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bloglist" element={<Bloglist />} />
            <Route path="/bloggrid" element={<Bloggrid />} />
            <Route path="/blogdetailes" element={<BlogDetailes />} />
            <Route path="/productdetails" element={<ProductsDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;