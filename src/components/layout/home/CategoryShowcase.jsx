import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../common/Container";

const CategoryShowcase = ({ categories }) => (
  <section data-home-reveal className="border-b border-gray-100 py-12 md:py-20">
    <Container>
      <div className="mb-8 flex flex-col items-center justify-between border-b border-gray-200 pb-6 sm:flex-row">
        <div>
          <h2 className="font-Jost text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            Explore Top Categories
          </h2>
          <p className="mt-1 text-sm text-[#74787C]">
            Handcrafted garments and modern seasonal accessories
          </p>
        </div>
        <Link
          to="/shop"
          className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[#E53E3E] transition-colors hover:text-[#1A1A1A] sm:mt-0"
        >
          Browse All Shop <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
        {categories
          .filter((category) => category.slug !== "all")
          .slice(0, 6)
          .map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group flex flex-col items-center rounded-md bg-[#F6F6F7] p-4 text-center transition-all duration-300 hover:bg-[#E53E3E]"
            >
              <div className="mb-3 flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-white p-1.5">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full rounded-sm object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A] transition-colors group-hover:text-white sm:text-base">
                {category.name}
              </h3>
              <p className="mt-0.5 text-xs text-[#74787C] transition-colors group-hover:text-white/80">
                {category.count} Products
              </p>
            </Link>
          ))}
      </div>
    </Container>
  </section>
);

export default CategoryShowcase;
