import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";
import cc2 from "../../../assets/cc2.png";
import cc3 from "../../../assets/cc3.png";

const womenLinks = [
  "Evening dresses",
  "Denim jackets",
  "Pleated skirts",
  "Tops & bodysuits",
];

const sideCollections = [
  {
    eyebrow: "Modern essentials",
    title: "Men's premium suiting",
    action: "Shop men's",
    href: "/shop?category=men",
    image: cc2,
  },
  {
    eyebrow: "Finishing touches",
    title: "Curated accessories",
    action: "Shop accessories",
    href: "/shop?category=accessories",
    image: cc3,
  },
];

const CategoryCollections = () => (
  <section data-home-reveal className="bg-[#FAF8F6] py-14 sm:py-16 md:py-20">
    <Container>
      <div className="mb-8 flex flex-col gap-5 border-b border-[#EAE4DF] pb-6 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E53E3E] sm:text-xs">
            <span className="size-1.5 rounded-full bg-[#E53E3E]" />
            Find your next favorite
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl">
            Collections for every side of you.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#74787C]">
            Thoughtfully picked styles, from everyday essentials to finishing touches.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#1A1A1A] transition-colors hover:text-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53E3E]"
        >
          Browse all collections
          <FaArrowRight aria-hidden="true" className="text-xs" />
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <article className="relative isolate flex min-h-[26rem] overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#E53E3E] to-[#B9272D] text-white sm:min-h-[29rem] lg:col-span-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-white/15 bg-white/5"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -right-8 size-72 rounded-full border border-white/15"
          />

          <div className="relative flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-white/10 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                The women's edit
              </span>
              <span className="text-xs font-medium text-white/70">01 / 03</span>
            </div>

            <div className="mt-12 max-w-xl">
              <h3 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                A wardrobe that feels like you.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Discover considered silhouettes and effortless pieces made for wherever the day takes you.
              </p>

              <div className="mt-6 grid max-w-md grid-cols-2 gap-2">
                {womenLinks.map((label) => (
                  <Link
                    key={label}
                    to="/shop?category=women"
                    className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium text-white transition-colors hover:border-white/50 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/shop?category=women"
              className="mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#B9272D] transition-colors hover:bg-[#1A1A1A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore women's
              <span className="grid size-8 place-items-center rounded-full bg-[#B9272D] text-white">
                <FaArrowRight aria-hidden="true" className="text-[10px]" />
              </span>
            </Link>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {sideCollections.map((collection, index) => (
            <Link
              key={collection.href}
              to={collection.href}
              style={{ backgroundImage: `url(${collection.image})` }}
              className="group relative isolate flex min-h-56 items-end overflow-hidden rounded-[1.75rem] border border-[#EAE4DF] bg-[#F0E9E5] bg-cover bg-center p-6 transition-colors hover:border-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53E3E] sm:min-h-64 sm:p-7 lg:min-h-0 lg:flex-1 lg:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/95 via-white/75 to-white/10"
              />
              <span className="absolute right-5 top-5 z-10 text-xs font-medium text-[#5F5B57]/70 sm:right-6 sm:top-6">
                0{index + 2} / 03
              </span>

              <span className="relative z-10 max-w-xs">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E53E3E] sm:text-xs">
                  {collection.eyebrow}
                </span>
                <span className="mt-2 block font-serif text-2xl font-semibold leading-tight text-[#1A1A1A] sm:text-3xl">
                  {collection.title}
                </span>
                <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#E53E3E]">
                  {collection.action}
                  <FaArrowRight aria-hidden="true" className="text-[10px]" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default CategoryCollections;
