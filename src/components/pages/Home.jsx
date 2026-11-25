import { Helmet } from "react-helmet-async";
import CatalogStatus from "../common/CatalogStatus";
import HomeHero from "../layout/home/HomeHero";
import CategoryShowcase from "../layout/home/CategoryShowcase";
import SeasonalPromoCards from "../layout/home/SeasonalPromoCards";
import FeaturedProducts from "../layout/home/FeaturedProducts";
import CategoryCollections from "../layout/home/CategoryCollections";
import MidBanner from "../layout/home/MidBanner";
import BrandMarquee from "../layout/home/BrandMarquee";
import DealOfTheDay from "../layout/home/DealOfTheDay";
import { useCatalog } from "../../hooks/useCatalog";

const Home = () => {
  const { products, categories, loading, error, retry } = useCatalog();

  if (loading || error) {
    return (
      <>
        <Helmet>
          <title>Roiser | Modern eCommerce Fashion Store</title>
        </Helmet>
        <CatalogStatus loading={loading} error={error} onRetry={retry} />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Roiser | Modern eCommerce Fashion Store</title>
        <meta
          name="description"
          content="Explore curated fashion, trending apparel, statement jewelry, and premium outerwear at Roiser."
        />
      </Helmet>

      <HomeHero categories={categories} />
      <CategoryShowcase categories={categories} />
      <SeasonalPromoCards />
      <FeaturedProducts products={products} />
      <CategoryCollections />
      <MidBanner />
      <BrandMarquee products={products} />
      <DealOfTheDay products={products} />
    </>
  );
};

export default Home;
