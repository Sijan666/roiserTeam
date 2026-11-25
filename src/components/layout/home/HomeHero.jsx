import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";
import Button from "../../common/Button";

const heroSlides = [
  {
    badge: "THE NEW SEASON",
    title: "A little",
    highlight: "more",
    subtitle: "refined",
    description: "Discover considered silhouettes, beautiful details, and pieces made to feel like you.",
    cta: { label: "Explore the edit", href: "/shop" },
    ctaSecondary: { label: "Shop dresses", href: "/shop?category=womens-dresses" },
  },
  {
    badge: "THE ROISER EDIT",
    title: "Effortless",
    highlight: "style",
    subtitle: "starts here",
    description: "Meet timeless wardrobe staples and modern favorites, selected for everyday confidence.",
    cta: { label: "Shop new arrivals", href: "/shop" },
    ctaSecondary: { label: "Discover menswear", href: "/shop?category=mens-shirts" },
  },
  {
    badge: "MADE TO BE WORN",
    title: "Details",
    highlight: "make",
    subtitle: "the difference",
    description: "From statement accessories to the finishing touch, find pieces that feel distinctly yours.",
    cta: { label: "Find your favorites", href: "/shop" },
    ctaSecondary: { label: "Shop accessories", href: "/shop?category=womens-bags" },
  },
];

const HomeHero = ({ categories }) => {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroCategories = ["womens-dresses", "mens-shirts", "womens-bags", "womens-shoes"]
    .map((slug) => categories.find((category) => category.slug === slug))
    .filter(Boolean);

  const nextHeroSlide = () => setHeroSlide((previous) => (previous + 1) % heroSlides.length);
  const prevHeroSlide = () =>
    setHeroSlide((previous) => (previous - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const interval = setInterval(nextHeroSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8F5F1] text-[#1A1A1A]">
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-[#E53E3E]/[0.06] blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#D9C6B3]/[0.2] blur-3xl" />
      <Container className="relative z-10 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative flex min-h-[340px] flex-col justify-center">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.badge}
                className={`transition-all duration-700 ease-in-out ${
                  heroSlide === index
                    ? "relative translate-y-0 opacity-100"
                    : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
                }`}
              >
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8F3B36]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E53E3E]" />
                  {slide.badge}
                </span>
                <h1 className="mb-5 max-w-xl font-Jost text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                  {slide.title}{" "}
                  <span className="font-serif font-normal italic text-[#B63B36]">
                    {slide.highlight}
                  </span>{" "}
                  {slide.subtitle}
                </h1>
                <p className="mb-7 max-w-lg text-sm leading-relaxed text-[#74706C] sm:text-base">
                  {slide.description}
                </p>
                <div className="mb-8 flex flex-wrap gap-3">
                  <Link to={slide.cta.href}>
                    <Button variant="primary" size="lg">
                      {slide.cta.label}
                    </Button>
                  </Link>
                  <Link to={slide.ctaSecondary.href}>
                    <button className="rounded border border-[#D8C9BB] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#E53E3E] hover:text-[#B63B36]">
                      {slide.ctaSecondary.label}
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            <div className="mt-2 flex flex-wrap gap-2">
              {heroCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop?category=${category.slug}`}
                  className="rounded-full border border-[#E8DDD3] bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-[#665F59] transition-colors hover:border-[#D9B6AD] hover:bg-white hover:text-[#B63B36]"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prevHeroSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C9BB] text-[#665F59] transition-colors hover:border-[#B63B36] hover:text-[#B63B36]"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.badge}
                    onClick={() => setHeroSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      heroSlide === index ? "w-8 bg-[#B63B36]" : "w-3 bg-[#D8C9BB]"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextHeroSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C9BB] text-[#665F59] transition-colors hover:border-[#B63B36] hover:text-[#B63B36]"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-3 lg:grid">
            {heroCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.slug}`}
                className="group relative overflow-hidden rounded-xl border border-[#E8DDD3] bg-[#EFE9E2] shadow-sm"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-contain p-4 pb-16 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#E8DDD3] bg-white/95 px-4 py-3">
                  <div>
                    <p className="text-sm font-bold leading-snug text-[#1A1A1A]">{category.name}</p>
                    <p className="mt-0.5 text-[11px] text-[#8A8179]">
                      {category.count} pieces to explore
                    </p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DDD3] text-[#B63B36] transition-colors group-hover:border-[#B63B36] group-hover:bg-[#B63B36] group-hover:text-white">
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
                {index === 0 && (
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-[#E8DDD3] bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#8F3B36]">
                      The edit
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>

          <div className="-mx-3 lg:hidden">
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2">
              {heroCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop?category=${category.slug}`}
                  className="relative h-40 shrink-0 snap-start overflow-hidden rounded-xl border border-[#E8DDD3] bg-[#EFE9E2] shadow-sm"
                  style={{ width: "160px" }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-contain p-3 pb-10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 border-t border-[#E8DDD3] bg-white/95 px-3 py-2">
                    <p className="text-xs font-semibold text-[#1A1A1A]">{category.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[#E8DDD3] bg-white/60">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-[#E8DDD3] py-4">
            {[
              { number: "24", label: "Curated collections" },
              { number: "30 days", label: "Easy returns" },
              { number: "$150+", label: "Complimentary delivery" },
            ].map((stat) => (
              <div key={stat.label} className="px-2 py-1 text-center">
                <p className="text-lg font-bold text-[#B63B36] sm:text-xl">{stat.number}</p>
                <p className="text-xs text-[#8A8179]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeHero;
