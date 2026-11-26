import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { scrollToTop } from "../utils/scrollToTop";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    scrollToTop(lenis, true);
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
