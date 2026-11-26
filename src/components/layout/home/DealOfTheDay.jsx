import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDiscountPercentLine } from "react-icons/ri";
import Container from "../../common/Container";
import Button from "../../common/Button";
import ProductCard from "../../common/ProductCard";
import dealBg from "../../../assets/dealbg.png";

const DealOfTheDay = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });
  const dealProducts = products.filter((product) => product.isDeal).slice(0, 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous.seconds > 0) return { ...previous, seconds: previous.seconds - 1 };
        if (previous.minutes > 0) return { ...previous, minutes: 59, seconds: 59 };
        if (previous.hours > 0) {
          return { ...previous, hours: previous.hours - 1, minutes: 59, seconds: 59 };
        }
        if (previous.days > 0) {
          return { ...previous, days: previous.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return previous;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "Days", accent: true },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <section data-home-reveal className="bg-[#FAFAFA] py-10 sm:py-12 md:py-20">
      <Container>
        <div
          className="overflow-hidden rounded-lg border border-gray-200 bg-cover bg-center p-4 sm:p-8 md:p-12"
          style={{ backgroundImage: `url(${dealBg})` }}
        >
          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Left Content & Countdown */}
            <div className="min-w-0">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-sm bg-[#E53E3E] px-2.5 py-1 text-[11px] font-bold uppercase text-white sm:mb-4 sm:px-3 sm:text-xs">
                <RiDiscountPercentLine className="text-sm sm:text-base" /> Limited Time Offer
              </span>
              <h2 className="mb-3 font-Jost text-2xl font-bold uppercase leading-tight text-[#1A1A1A] sm:mb-4 sm:text-3xl md:text-4xl">
                Deal Of The Day
              </h2>
              <p className="mb-5 max-w-md text-xs leading-relaxed text-[#74787C] sm:mb-6 sm:text-sm">
                Take advantage of special markdowns on executive two-piece office suits and
                breathable casual outerwear.
              </p>

              {/* Bulletproof Responsive Countdown */}
              <div className="mb-6 grid max-w-85 grid-cols-4 gap-1.5 sm:mb-8 sm:flex sm:max-w-none sm:items-center sm:gap-3">
                {countdownItems.map((item, index) => (
                  <div key={item.label} className="flex items-center sm:gap-3">
                    {index > 0 && (
                      <span className="hidden text-xl font-bold text-gray-400 sm:inline">:</span>
                    )}
                    <div className="w-full rounded-md border border-gray-200 bg-white/95 px-1.5 py-2 text-center shadow-xs backdrop-blur-xs sm:min-w-16.25 sm:p-3">
                      <span
                        className={`block text-lg font-bold leading-none sm:text-2xl ${
                          item.accent ? "text-[#E53E3E]" : "text-[#1A1A1A]"
                        }`}
                      >
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wider text-[#74787C] sm:text-[10px]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/shop" className="inline-block w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Claim Deal Now
                </Button>
              </Link>
            </div>

            {/* Right Deal Products */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5">
              {dealProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DealOfTheDay;