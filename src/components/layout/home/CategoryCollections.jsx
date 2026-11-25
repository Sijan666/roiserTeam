import { Link } from "react-router-dom";
import Container from "../../common/Container";
import Button from "../../common/Button";
import cc2 from "../../../assets/cc2.png";
import cc3 from "../../../assets/cc3.png";

const CategoryCollections = () => (
  <section className="py-12 md:py-20">
    <Container>
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-md bg-[#E8E8E8] p-8 sm:p-12">
          <div>
            <span className="mb-4 inline-block rounded-sm bg-white px-3 py-1.5 text-xs font-bold text-[#E53E3E] shadow-xs">
              1500+ Verified Styles
            </span>
            <h2 className="mb-3 text-2xl font-bold uppercase text-[#1A1A1A] sm:text-3xl">
              Women&apos;s Wardrobe Collections
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-[#74787C]">
              From high-waist pleated skirts to organic cotton dresses, elevate your everyday
              presence with tailored luxury.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium text-[#1A1A1A]">
              <Link to="/shop?category=women" className="transition-colors hover:text-[#E53E3E]">
                &bull; Evening Dresses
              </Link>
              <Link to="/shop?category=women" className="transition-colors hover:text-[#E53E3E]">
                &bull; Denim Jackets
              </Link>
              <Link to="/shop?category=women" className="transition-colors hover:text-[#E53E3E]">
                &bull; Pleated Skirts
              </Link>
              <Link to="/shop?category=women" className="transition-colors hover:text-[#E53E3E]">
                &bull; Bodysuits &amp; Tops
              </Link>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/shop?category=women">
              <Button variant="primary" size="md">
                Explore Women&apos;s
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div
            className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md bg-cover bg-center p-8 sm:p-10"
            style={{ backgroundImage: `url(${cc2})` }}
          >
            <div className="relative z-10">
              <span className="mb-3 inline-block rounded-sm bg-white px-3 py-1 text-xs font-bold text-[#E53E3E] shadow-xs">
                Modern Essentials
              </span>
              <h3 className="mb-2 text-xl font-bold uppercase text-[#1A1A1A] sm:text-2xl">
                Men&apos;s Premium Suiting
              </h3>
              <Link
                to="/shop?category=men"
                className="mt-3 inline-block text-sm font-bold text-[#E53E3E] hover:underline"
              >
                Shop Men&apos;s &rarr;
              </Link>
            </div>
          </div>

          <div
            className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md bg-cover bg-center p-8 sm:p-10"
            style={{ backgroundImage: `url(${cc3})` }}
          >
            <div className="relative z-10">
              <span className="mb-3 inline-block rounded-sm bg-white px-3 py-1 text-xs font-bold text-[#E53E3E] shadow-xs">
                Finishing Touches
              </span>
              <h3 className="mb-2 text-xl font-bold uppercase text-[#1A1A1A] sm:text-2xl">
                Curated Accessories
              </h3>
              <Link
                to="/shop?category=accessories"
                className="mt-3 inline-block text-sm font-bold text-[#E53E3E] hover:underline"
              >
                Shop Accessories &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CategoryCollections;
