import { Link } from "react-router-dom";
import Container from "../../common/Container";
import ProductCard from "../../common/ProductCard";

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 8);

  return (
    <section className="bg-[#FAFAFA] py-10 sm:py-12 md:py-20">
      <Container>
        <div className="mb-6 flex flex-col items-start justify-between border-b border-gray-200 pb-5 sm:mb-8 sm:flex-row sm:items-center sm:pb-6">
          <div>
            <h2 className="font-Jost text-xl font-bold uppercase tracking-wide text-[#1A1A1A] sm:text-2xl md:text-3xl">
              Get Your Fashion Style
            </h2>
            <p className="mt-1 text-xs text-[#74787C] sm:text-sm">
              Hand-picked trending items chosen by our in-house stylists
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-3 text-xs font-semibold text-[#E53E3E] transition-colors hover:text-[#1A1A1A] sm:mt-0 sm:text-sm"
          >
            View Full Collection &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;