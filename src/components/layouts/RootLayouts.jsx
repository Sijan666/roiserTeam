import { Outlet } from "react-router-dom";
import HeaderTop from "../layouts/HeaderTop"
import Header from "./Header";
import Footer from "./Footer";

const RootLayouts = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayouts;
