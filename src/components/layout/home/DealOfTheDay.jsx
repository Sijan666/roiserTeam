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
    <section className="bg-[#FAFAFA] py-12 md:py-20">
      <Container>
        <div
          className="overflow-hidden rounded-lg border border-gray-200 bg-cover bg-center p-6 sm:p-12"
          style={{ backgroundImage: `url(${dealBg})` }}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-sm bg-[#E53E3E] px-3 py-1 text-xs font-bold uppercase text-white">
                <RiDiscountPercentLine className="text-base" /> Limited Time Offer
              </span>
              <h2 className="mb-4 text-3xl font-bold uppercase leading-tight text-[#1A1A1A] sm:text-4xl">
                Deal Of The Day
              </h2>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-[#74787C]">
                Take advantage of special markdowns on executive two-piece office suits and
                breathable casual outerwear.
              </p>

              <div className="mb-8 flex items-center gap-3">
                {countdownItems.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {index > 0 && <span className="text-xl font-bold text-gray-400">:</span>}
                    <div className="min-w-[65px] rounded-md border border-gray-200 bg-white p-3 text-center shadow-xs">
                      <span
                        className={`block text-2xl font-bold ${
                          item.accent ? "text-[#E53E3E]" : "text-[#1A1A1A]"
                        }`}
                      >
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold uppercase text-[#74787C]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/shop">
                <Button variant="primary" size="lg">
                  Claim Deal Now
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
