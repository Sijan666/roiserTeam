import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
import boxIcon from "../../assets/box.png";
import carIcon from "../../assets/Car.png";
import cardIcon from "../../assets/credit-card.png";
import timeIcon from "../../assets/24-hours.png";
import cardLogo from "../../assets/CardLogo.png";
import callIcon from "../../assets/Call.png";
import { FiCheckCircle } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F6F7] text-[#1A1A1A] pt-12 md:pt-16 pb-8 border-t border-gray-200">
      <Container>
        {/* Value Propositions Bar */}
        <div className="bg-white rounded-md p-6 lg:p-8 shadow-xs border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Free Shipping */}
          <div className="flex items-center gap-4">
            <img src={boxIcon} alt="Free shipping" className="w-10 h-10 object-contain shrink-0" />
            <div>
              <h5 className="font-semibold text-base text-[#1A1A1A]">Free Shipping</h5>
              <p className="text-xs text-[#74787C]">Free delivery on orders over $150</p>
            </div>
          </div>

          {/* 30-Day Returns */}
          <div className="flex items-center gap-4">
            <img src={carIcon} alt="Free Returns" className="w-10 h-10 object-contain shrink-0" />
            <div>
              <h5 className="font-semibold text-base text-[#1A1A1A]">30-Day Returns</h5>
              <p className="text-xs text-[#74787C]">Hassle-free return policy</p>
            </div>
          </div>

          {/* Secured Payment */}
          <div className="flex items-center gap-4">
            <img src={cardIcon} alt="Secured Payment" className="w-10 h-10 object-contain shrink-0" />
            <div>
              <h5 className="font-semibold text-base text-[#1A1A1A]">Secured Payments</h5>
              <p className="text-xs text-[#74787C]">All major cards & SSL verified</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center gap-4">
            <img src={timeIcon} alt="Customer Service" className="w-10 h-10 object-contain shrink-0" />
            <div>
              <h5 className="font-semibold text-base text-[#1A1A1A]">Customer Service</h5>
              <p className="text-xs text-[#74787C]">Dedicated support anytime</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-gray-200">
          {/* Store Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base text-[#1A1A1A] mb-4 uppercase tracking-wider">
              About Store
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <img src={callIcon} alt="Support Call" className="w-8 h-8 object-contain" />
              <div>
                <p className="text-xs text-[#74787C]">Questions? Call 24/7</p>
                <p className="text-[#E53E3E] font-bold text-lg">+258 3692 2569</p>
              </div>
            </div>
            <p className="text-xs text-[#74787C] mb-1">
              Mon – Fri: <span className="text-[#1A1A1A] font-medium">8:00am – 6:00pm</span>
            </p>
            <p className="text-xs text-[#74787C] mb-1">
              Saturday: <span className="text-[#1A1A1A] font-medium">9:00am – 5:00pm</span>
            </p>
            <p className="text-xs text-[#74787C]">
              Sunday: <span className="text-[#1A1A1A] font-medium">Closed</span>
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base text-[#1A1A1A] mb-4 uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#74787C]">
              <li>
                <Link to="/shop?category=women" className="hover:text-[#E53E3E] transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="hover:text-[#E53E3E] transition-colors">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="hover:text-[#E53E3E] transition-colors">
                  Accessories & Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=footwear" className="hover:text-[#E53E3E] transition-colors">
                  Footwear & Shoes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#E53E3E] transition-colors">
                  All New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base text-[#1A1A1A] mb-4 uppercase tracking-wider">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#74787C]">
              <li>
                <Link to="/about" className="hover:text-[#E53E3E] transition-colors">
                  Our Brand Story
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#E53E3E] transition-colors">
                  FAQ & Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E53E3E] transition-colors">
                  Contact Customer Care
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-[#E53E3E] transition-colors">
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Locations */}
          <div>
            <h3 className="font-semibold text-base text-[#1A1A1A] mb-4 uppercase tracking-wider">
              Flagship Stores
            </h3>
            <ul className="space-y-2.5 text-sm text-[#74787C]">
              <li className="hover:text-[#1A1A1A]">New York: 5th Ave Fashion District</li>
              <li className="hover:text-[#1A1A1A]">London: Regent Street Central</li>
              <li className="hover:text-[#1A1A1A]">Paris: Rue du Faubourg Saint-Honoré</li>
              <li className="hover:text-[#1A1A1A]">Tokyo: Ginza Shopping Arcade</li>
              <li className="hover:text-[#1A1A1A]">Milan: Via Montenapoleone</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base text-[#1A1A1A] mb-4 uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-xs text-[#74787C] mb-4 leading-relaxed">
              Subscribe to unlock 15% off your first order and receive weekly fashion drops.
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3 rounded flex items-center gap-2">
                <FiCheckCircle className="text-base text-emerald-600 shrink-0" />
                <span>Thank you! Your 15% discount code is <strong>WELCOME15</strong></span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-sm overflow-hidden border border-gray-300 focus-within:border-[#E53E3E] bg-white">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 outline-none text-[#1A1A1A]"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="rounded-none shrink-0 uppercase tracking-wider text-xs px-4"
                  >
                    Join
                  </Button>
                </div>
                <p className="text-[11px] text-[#74787C]">
                  By signing up, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#74787C]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="font-medium text-[#1A1A1A]">Payment Partners:</span>
            <img src={cardLogo} alt="Supported Payment Systems" className="h-5 sm:h-6 object-contain max-w-[180px]" />
          </div>

          <p className="text-center md:text-right">
            Copyright &copy; {currentYear}{" "}
            <strong className="text-[#1A1A1A]">Roiser eCommerce</strong>. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
