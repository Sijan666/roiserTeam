import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";

const heroSlugs = ["womens-dresses", "mens-shirts", "womens-bags", "womens-shoes"];

const stats = [
  { number: "24", label: "Curated collections" },
  { number: "30 days", label: "Easy returns" },
  { number: "$150+", label: "Complimentary delivery" },
];

const heroStyles = `
@keyframes heroTileIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
.hero-tile-in { animation: heroTileIn 800ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@media (prefers-reduced-motion: reduce) { .hero-tile-in { animation: none; } }
`;

const focusRed =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53E3E]";

const ArrowDot = ({ className = "" }) => (
  <span
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E53E3E] text-white transition-transform duration-300 group-hover:translate-x-1 ${className}`}
  >
    <FaArrowRight className="text-[11px]" />
  </span>
);

const HomeHero = ({ categories = [] }) => {
  const heroCategories = heroSlugs
    .map((slug) => categories.find((category) => category.slug === slug))
    .filter(Boolean);

  const [featured, ...rest] = heroCategories;
  const small = rest.slice(0, 3);

  return (
    <section data-home-reveal className="bg-white text-[#1A1A1A]">
      <style>{heroStyles}</style>

      <Container className="py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-4 lg:h-150 lg:grid-cols-12 xl:h-160">
          {/* ---------- brand tile ---------- */}
          <div
            className={`hero-tile-in relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#E53E3E] to-[#C42B2B] p-7 text-white sm:p-10 xl:p-12 ${
              featured ? "lg:col-span-5" : "lg:col-span-12"
            }`}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                The new season
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl xl:text-[3.5rem]">
                A little more refined.
              </h1>
              <p className="mt-5 max-w-sm text-base leading-7 text-white">
                Discover considered silhouettes, beautiful details, and pieces made to feel like you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  to="/shop"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#C42B2B] transition-colors hover:bg-[#1A1A1A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore the edit
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C42B2B] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </Link>
              </div>
            </div>

            <dl className="relative mt-10 grid grid-cols-3 gap-2 border-t border-white/30 pt-5 sm:gap-4 lg:mt-0">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="whitespace-nowrap text-lg font-normal leading-none sm:text-2xl lg:text-xl xl:text-3xl">
                    {stat.number}
                  </dd>
                  <dd className="mt-1.5 text-xs font-normal text-white sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------- category tiles ---------- */}
          {featured && (
            <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:grid-cols-3 lg:grid-rows-[1.15fr_1fr]">
              {/* wide featured tile */}
              <Link
                to={`/shop?category=${featured.slug}`}
                style={{ animationDelay: "120ms" }}
                className={`hero-tile-in group relative col-span-2 flex min-h-80 flex-col overflow-hidden rounded-[1.75rem] bg-[#FFF1EF] sm:flex-row sm:min-h-65 lg:col-span-3 ${focusRed}`}
              >
                <div className="relative order-2 flex flex-1 flex-col justify-between p-6 sm:order-1 sm:p-8">
                  <div>
                    <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                      {featured.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#5F5B57]">{featured.count} pieces to discover</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold sm:mt-0">
                    Shop {featured.name}
                    <ArrowDot />
                  </span>
                </div>
                <div className="relative order-1 h-52 sm:order-2 sm:h-auto sm:w-[52%]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply"
                  />
                </div>
              </Link>

              {/* small tiles */}
              {small.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/shop?category=${category.slug}`}
                  style={{ animationDelay: `${220 + index * 90}ms` }}
                  className={`hero-tile-in group relative flex h-60 flex-col overflow-hidden rounded-[1.75rem] border border-[#F0DAD7] bg-white transition-colors hover:border-[#E53E3E] lg:h-auto ${
                    index === small.length - 1 && small.length % 2 === 1 ? "col-span-2 lg:col-span-1" : ""
                  } ${focusRed}`}
                >
                  <div className="relative min-h-0 flex-1">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-4 pb-4">
                    <span className="min-w-0">
                      <span className="block truncate font-serif text-lg font-semibold leading-tight">
                        {category.name}
                      </span>
                      <span className="block text-xs text-[#5F5B57]">{category.count} pieces</span>
                    </span>
                    <ArrowDot className="h-9 w-9" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;