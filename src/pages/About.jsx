import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import ashBg from "../assets/ashBg.png";
import { FaLeaf, FaGem, FaGlobeAmericas, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Roiser | Handcrafted Luxury & Sustainable Fashion</title>
        <meta
          name="description"
          content="Learn about Roiser's commitment to timeless silhouettes, ethical European craftsmanship, and sustainable luxury."
        />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-12 md:py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#E53E3E] uppercase tracking-widest block mb-2">
              Our Heritage & Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] font-Jost leading-tight">
              Crafting Timeless Elegance with Conscience
            </h1>
            <p className="text-sm sm:text-base text-[#74787C] mt-4 leading-relaxed">
              Founded with a commitment to slow, deliberate fashion. We fuse traditional tailoring with modern minimalist silhouettes for everyday distinction.
            </p>
          </div>
        </Container>
      </div>

      {/* Story & Image Section */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase text-[#E53E3E] tracking-wider">
                Since 2018
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost leading-snug">
                We believe true luxury begins with provenance, honesty, and uncompromising quality.
              </h2>
              <p className="text-sm text-[#74787C] leading-relaxed">
                Roiser was created in response to the cycle of disposable fast fashion. Every suit, dress, knit, and accessory is meticulously crafted in small family-owned ateliers across Italy and Portugal.
              </p>
              <p className="text-sm text-[#74787C] leading-relaxed">
                Our materials speak for themselves: extra-fine Australian merino wool, unblended Normandy flax linen, and Italian full-grain vegetable-tanned leather. We design garments engineered to endure across seasons, developing personal character over years of wear.
              </p>
              <div className="pt-2">
                <Link to="/shop">
                  <Button variant="primary" size="md">
                    Explore Our Collection
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={ashBg}
                alt="Roiser Store Interior"
                className="w-full rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#1A1A1A] text-white p-6 rounded-md shadow-xl max-w-xs">
                <p className="text-2xl font-bold font-Jost text-[#E53E3E]">15,800+</p>
                <p className="text-xs text-gray-300 mt-1">
                  Garments delivered to conscious fashion lovers worldwide in 45+ countries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-12 md:py-20 bg-[#FAFAFA] border-y border-gray-200">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-Jost uppercase">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#74787C] mt-2">
              Every design decision balances aesthetic longevity and planetary respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-md border border-gray-200 shadow-2xs text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#E53E3E] flex items-center justify-center mx-auto mb-4 text-xl">
                <FaLeaf />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Sustainable Sourcing</h3>
              <p className="text-xs text-[#74787C] leading-relaxed">
                Certified GOTS organic cotton and Responsible Wool Standard fibers with non-toxic botanical dyes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-gray-200 shadow-2xs text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#E53E3E] flex items-center justify-center mx-auto mb-4 text-xl">
                <FaGem />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Artisanal Precision</h3>
              <p className="text-xs text-[#74787C] leading-relaxed">
                Hand-cut patterns, double-bound seam finishes, and natural horn and mother-of-pearl buttons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-gray-200 shadow-2xs text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#E53E3E] flex items-center justify-center mx-auto mb-4 text-xl">
                <FaGlobeAmericas />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Fair Living Wages</h3>
              <p className="text-xs text-[#74787C] leading-relaxed">
                Direct partnerships with verified European workshops guaranteeing safe working conditions and fair pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-gray-200 shadow-2xs text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#E53E3E] flex items-center justify-center mx-auto mb-4 text-xl">
                <FaHeart />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2">Lifetime Care</h3>
              <p className="text-xs text-[#74787C] leading-relaxed">
                Free spare button packs and care instruction guides included with every garment purchase.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship Boutiques */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-xl text-center mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#1A1A1A] font-Jost">
              Visit Our Flagship Stores
            </h2>
            <p className="text-xs sm:text-sm text-[#74787C] mt-2">
              Experience the fabrics in person, receive custom suiting advice, and enjoy espresso in our retail spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-md p-6 bg-white shadow-2xs">
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">New York Boutique</h4>
              <p className="text-xs text-[#74787C] leading-relaxed mb-4">
                482 West Broadway, SoHo, NY 10012<br />
                Mon – Sat: 10:00am – 7:00pm<br />
                Phone: +1 (212) 555-0198
              </p>
              <span className="text-xs font-semibold text-[#E53E3E]">Valet Parking &bull; Fitting Suites</span>
            </div>

            <div className="border border-gray-200 rounded-md p-6 bg-white shadow-2xs">
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">London Showroom</h4>
              <p className="text-xs text-[#74787C] leading-relaxed mb-4">
                14 Savile Row, Mayfair, London W1S 3JN<br />
                Mon – Sat: 10:00am – 6:30pm<br />
                Phone: +44 20 7946 0912
              </p>
              <span className="text-xs font-semibold text-[#E53E3E]">Bespoke Tailoring &bull; Lounge</span>
            </div>

            <div className="border border-gray-200 rounded-md p-6 bg-white shadow-2xs">
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Milan Atelier</h4>
              <p className="text-xs text-[#74787C] leading-relaxed mb-4">
                Via Montenapoleone 8, 20121 Milano MI<br />
                Mon – Sat: 10:00am – 7:00pm<br />
                Phone: +39 02 8945 2210
              </p>
              <span className="text-xs font-semibold text-[#E53E3E]">Exclusive Leather &bull; Champagne Bar</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
