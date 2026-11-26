export const MOBILE_SCROLL_QUERY = "(max-width: 767px)";

export const isMobileViewport = () =>
  window.matchMedia(MOBILE_SCROLL_QUERY).matches;

export const scrollToTop = (lenis, immediate = false) => {
  if (lenis && !isMobileViewport()) {
    if (immediate) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      lenis.scrollTo(0);
    }
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: immediate ? "auto" : "smooth",
  });
};
