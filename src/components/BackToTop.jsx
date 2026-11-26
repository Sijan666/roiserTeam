import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { FiArrowUp } from "react-icons/fi";
import { isMobileViewport, scrollToTop } from "../utils/scrollToTop";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const BackToTop = () => {
  const lenis = useLenis();
  const circleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const updateProgress = useCallback((scroll, limit) => {
    const progress =
      limit > 0
        ? Math.min(Math.max(scroll / limit, 0), 1)
        : 0;

    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset =
        CIRCUMFERENCE - progress * CIRCUMFERENCE;
    }

    setIsVisible(scroll > 300);
  }, []);

  useEffect(() => {
    if (lenis && !isMobileViewport()) {
      const updateFromLenis = (instance) => {
        updateProgress(instance.scroll, instance.limit);
      };

      updateFromLenis(lenis);
      lenis.on("scroll", updateFromLenis);

      return () => lenis.off("scroll", updateFromLenis);
    }

    const updateFromNativeScroll = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      updateProgress(scroll, limit);
    };

    updateFromNativeScroll();
    window.addEventListener("scroll", updateFromNativeScroll, { passive: true });
    window.addEventListener("resize", updateFromNativeScroll);

    return () => {
      window.removeEventListener("scroll", updateFromNativeScroll);
      window.removeEventListener("resize", updateFromNativeScroll);
    };
  }, [lenis, updateProgress]);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed bottom-5 right-4 z-40 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none sm:bottom-8 sm:right-8 ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Back to top"
        disabled={!isVisible}
        tabIndex={isVisible ? 0 : -1}
        onClick={() => scrollToTop(lenis)}
        className="group relative grid size-12 place-items-center rounded-full bg-white shadow-lg shadow-black/10 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(229,62,62,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E53E3E] focus-visible:ring-offset-2 motion-reduce:transition-none sm:size-14"
      >
        <svg
          className="absolute inset-0 size-full -rotate-90 transform"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle
            cx="25"
            cy="25"
            r={RADIUS}
            fill="none"
            stroke="#FCE4E4"
            strokeWidth="2.5"
          />
          <circle
            ref={circleRef}
            cx="25"
            cy="25"
            r={RADIUS}
            fill="none"
            stroke="#E53E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            className="transition-[stroke-dashoffset] duration-100 motion-reduce:transition-none"
          />
        </svg>
        <span className="relative grid size-9 place-items-center rounded-full bg-[#FFF3F3] text-[#E53E3E] transition-colors duration-300 group-hover:bg-[#E53E3E] group-hover:text-white motion-reduce:transition-none sm:size-11">
          <FiArrowUp
            aria-hidden="true"
            className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </span>
      </button>
    </div>
  );
};

export default BackToTop;
