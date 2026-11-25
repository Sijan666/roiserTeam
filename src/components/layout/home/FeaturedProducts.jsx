import { Link } from "react-router-dom";
import Container from "../../common/Container";
import ProductCard from "../../common/ProductCard";

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 8);

  return (
    <section className="bg-[#FAFAFA] py-12 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col items-center justify-between border-b border-gray-200 pb-6 sm:flex-row">
          <div>
            <h2 className="font-Jost text-2xl font-bold uppercase tracking-wide text-[#1A1A1A] sm:text-3xl">
              Get Your Fashion Style
            </h2>
            <p className="mt-1 text-sm text-[#74787C]">
              Hand-picked trending items chosen by our in-house stylists
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-3 text-sm font-semibold text-[#E53E3E] transition-colors hover:text-[#1A1A1A] sm:mt-0"
          >
            View Full Collection &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
