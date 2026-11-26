import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CatalogStatus from "../components/common/CatalogStatus";
import HomeHero from "../components/layout/home/HomeHero";
import CategoryShowcase from "../components/layout/home/CategoryShowcase";
import SeasonalPromoCards from "../components/layout/home/SeasonalPromoCards";
import FeaturedProducts from "../components/layout/home/FeaturedProducts";
import CategoryCollections from "../components/layout/home/CategoryCollections";
import MidBanner from "../components/layout/home/MidBanner";
import BrandMarquee from "../components/layout/home/BrandMarquee";
import DealOfTheDay from "../components/layout/home/DealOfTheDay";
import { useCatalog } from "../hooks/useCatalog";

const Home = () => {
  const { products, categories, loading, error, retry } = useCatalog();

  useEffect(() => {
    if (loading || error) return undefined;

    const sections = document.querySelectorAll("[data-home-reveal]");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [loading, error]);

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
