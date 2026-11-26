import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";

const promoCards = [
  {
    number: "01",
    label: "The menswear edit",
    badge: "Special 50% Off",
    title: "Men's Tailored Seasonal Trends",
    description: "Discover sharp silhouettes and pure Italian cotton blazers.",
    link: "/shop?category=men",
    action: "Explore Men",
    theme: "red",
  },
  {
    number: "02",
    label: "Finishing touches",
    badge: "Weekend Flash",
    title: "Luxury Handcrafted Accessories",
    description: "18k gold necklaces, polarized eyewear, and leather bags.",
    link: "/shop?category=accessories",
    action: "Shop Jewelry",
    theme: "neutral",
  },
  {
    number: "03",
    label: "The evening edit",
    badge: "Exclusive Drop",
    title: "Women's Runway Party Styles",
    description: "Silk evening gowns and fluid skirts made for unforgettable nights.",
    link: "/shop?category=women",
    action: "View Dresses",
    theme: "blush",
  },
];

const cardThemes = {
  red: {
    card: "border-transparent bg-linear-to-br from-[#E53E3E] to-[#C42B2B] text-white",
    badge: "bg-white/15 text-white",
    copy: "text-white/75",
    decoration: "border-white/20 bg-white/10",
    number: "text-white/15",
    action: "border-white/35 text-white hover:bg-white hover:text-[#C42B2B]",
  },
  neutral: {
    card: "border-[#EEE8E2] bg-white text-[#1A1A1A]",
    badge: "bg-[#F8F5F1] text-[#1A1A1A]",
    copy: "text-[#74787C]",
    decoration: "border-[#E8E2DD] bg-[#F8F5F1]",
    number: "text-[#E53E3E]/15",
    action: "border-[#E8E2DD] text-[#1A1A1A] hover:border-[#E53E3E] hover:text-[#E53E3E]",
  },
  blush: {
    card: "border-[#F0DAD7] bg-[#FFF1EF] text-[#1A1A1A]",
    badge: "bg-white text-[#C42B2B]",
    copy: "text-[#5F5B57]",
    decoration: "border-[#EFCFCA] bg-white/60",
    number: "text-[#E53E3E]/15",
    action: "border-[#EFCFCA] text-[#1A1A1A] hover:border-[#E53E3E] hover:text-[#E53E3E]",
  },
};

const SeasonalPromoCards = () => (
  <section data-home-reveal className="bg-white py-12 sm:py-14 md:py-16">
    <Container>
      <div className="mb-7 flex flex-col gap-5 border-b border-[#EEE8E2] pb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E53E3E] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E53E3E]" />
            The seasonal edit
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl">
            A little something for every style.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#74787C]">
            Discover considered pieces, special moments, and details worth keeping.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#1A1A1A] transition-colors hover:text-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53E3E]"
        >
          Browse the collection
          <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promoCards.map((card, index) => {
          const theme = cardThemes[card.theme];

          return (
            <article
              key={card.badge}
              className={`group relative isolate flex min-h-[18rem] flex-col overflow-hidden rounded-[1.5rem] border p-6 shadow-[0_20px_45px_-38px_rgba(26,26,26,0.35)] sm:min-h-[19rem] sm:p-7 lg:p-8 ${
                index === promoCards.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${theme.card}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-12 -top-14 h-48 w-48 rounded-full border ${theme.decoration}`}
              />
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-8 top-8 font-serif text-5xl font-semibold ${theme.number}`}
              >
                {card.number}
              </span>

              <div className="relative z-10 flex flex-1 flex-col items-start">
                <span
                  className={`inline-flex min-h-7 items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.12em] ${theme.badge}`}
                >
                  {card.badge}
                </span>

                <div className="mt-auto max-w-sm pt-10">
                  <p className={`mb-2 text-[10px] font-bold uppercase tracking-[0.2em] ${theme.copy}`}>
                    {card.label}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${theme.copy}`}>{card.description}</p>
                  <Link
                    to={card.link}
                    className={`mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53E3E] ${theme.action}`}
                  >
                    {card.action}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Container>
  </section>
);

export default SeasonalPromoCards;
