import Container from "../../common/Container";

const BrandMarquee = ({ products }) => {
  const brands = [
    ...new Set(
      products
        .map((product) => product.brand?.trim())
        .filter((brand) => brand && brand.toLowerCase() !== "authentic")
    ),
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#EEE8E2] bg-[#F8F5F1] py-14 md:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#E53E3E]">
            The Roiser brand edit
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1A1A1A] sm:text-3xl">
            Partnered With World-Class Brands
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#74787C]">
            Iconic names and modern favorites, thoughtfully selected for your wardrobe.
          </p>
        </div>
        <div className="brand-marquee-viewport" aria-label="Brands featured in the Roiser catalog">
          <div className="brand-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="brand-marquee-group"
                role="list"
                aria-hidden={copy === 1}
              >
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex shrink-0 items-center gap-8 font-serif text-lg font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] sm:text-xl"
                    role="listitem"
                  >
                    {brand}
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#E53E3E]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandMarquee;
