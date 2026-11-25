import { Link } from "react-router-dom";
import Container from "../../common/Container";
import Button from "../../common/Button";
import bg1 from "../../../assets/bg1.png";
import sign from "../../../assets/sign.png";

const promoCards = [
  {
    badge: "Special 50% Off",
    title: "Men's Tailored Seasonal Trends",
    description: "Discover sharp silhouettes and pure Italian cotton blazers.",
    link: "/shop?category=men",
    action: "Explore Men",
    accent: true,
  },
  {
    badge: "Weekend Flash",
    title: "Luxury Handcrafted Accessories",
    description: "18k gold necklaces, polarized eyewear, and leather bags.",
    link: "/shop?category=accessories",
    action: "Shop Jewelry",
  },
  {
    badge: "Exclusive Drop",
    title: "Women's Runway Party Styles",
    description: "Silk evening gowns and fluid skirts made for unforgettable nights.",
    link: "/shop?category=women",
    action: "View Dresses",
    accent: true,
  },
];

const SeasonalPromoCards = () => (
  <section className="py-12 md:py-16">
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {promoCards.map((card) => (
          <div
            key={card.badge}
            className="group flex min-h-[260px] flex-col justify-between rounded-md border border-gray-100 bg-cover bg-center p-6 shadow-xs sm:p-8"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div>
              <span
                className={`mb-3 inline-block rounded-sm px-2.5 py-1 text-[11px] font-bold uppercase text-white ${
                  card.accent ? "bg-[#E53E3E]" : "bg-[#1A1A1A]"
                }`}
              >
                {card.badge}
              </span>
              <h3 className="mb-2 text-xl font-bold leading-tight text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#74787C]">{card.description}</p>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <img src={sign} alt="Signature" className="h-5 object-contain" />
              <Link to={card.link}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 font-bold text-[#1A1A1A] hover:text-[#E53E3E]"
                >
                  {card.action} &rarr;
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default SeasonalPromoCards;
