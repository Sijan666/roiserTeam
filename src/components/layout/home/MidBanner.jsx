import { Link } from "react-router-dom";
import Container from "../../common/Container";
import Button from "../../common/Button";

const MidBanner = () => (
  <section className="bg-[#E53E3E] py-16 text-center text-white md:py-24">
    <Container className="max-w-4xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-90 sm:text-sm">
        Spring &amp; Summer 2026 Collection
      </p>
      <h2 className="mb-6 font-Jost text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Get 15% Off Your Entire Seasonal Wardrobe
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
        Use checkout promo code{" "}
        <strong className="rounded bg-black/20 px-2 py-0.5 text-white">ROISER15</strong> to unlock
        exclusive reductions on all handcrafted items.
      </p>
      <Link to="/shop">
        <Button
          variant="light"
          size="lg"
          className="font-bold uppercase tracking-wider hover:bg-[#1A1A1A] hover:text-white"
        >
          Shop New Arrivals
        </Button>
      </Link>
    </Container>
  </section>
);

export default MidBanner;
