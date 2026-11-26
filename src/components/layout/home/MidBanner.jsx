import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";

const MidBanner = () => (
  <section data-home-reveal className="bg-white py-12 sm:py-14 md:py-16">
    <Container>
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#1A1A1A] via-[#302124] to-[#8B292E] text-white">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-32 size-96 rounded-full border border-white/10"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-44 right-24 size-96 rounded-full border border-white/10"
        />

        <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:p-12">
          <div className="max-w-2xl">
            <p className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs">
              <span className="size-1.5 rounded-full bg-[#E53E3E]" />
              The seasonal edit
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              A fresh edit for the season.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Discover handcrafted styles for your wardrobe and enjoy 15% off your seasonal picks.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#E53E3E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Shop new arrivals
              <span className="grid size-8 place-items-center rounded-full bg-[#E53E3E] text-white">
                <FaArrowRight aria-hidden="true" className="text-[10px]" />
              </span>
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-3 backdrop-blur-sm sm:p-4">
            <div className="rounded-[1.15rem] bg-[#FFF9F7] p-5 text-[#1A1A1A] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#74787C]">
                    A little something for you
                  </p>
                  <p className="mt-2 font-serif text-4xl font-semibold leading-none text-[#C42B2B] sm:text-5xl">
                    15% <span className="text-xl sm:text-2xl">OFF</span>
                  </p>
                </div>
                <span className="rounded-full bg-[#FCE9E7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#B9272D]">
                  Seasonal offer
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-[#E8B9B5] bg-white px-4 py-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#74787C]">
                  Use code at checkout
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[0.16em] text-[#1A1A1A] sm:text-xl">
                  ROISER15
                </p>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#74787C]">
                Apply your code to unlock savings on your seasonal wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default MidBanner;
