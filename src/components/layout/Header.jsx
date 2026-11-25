import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/logo.png";
import { FiPhone, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCatalog } from "../../hooks/useCatalog";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, cartSubtotal, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { categories } = useCatalog();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append("search", searchQuery.trim());
    if (selectedCategory && selectedCategory !== "all") {
      params.append("category", selectedCategory);
    }
    navigate(`/shop?${params.toString()}`);
  };

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "SHOP", path: "/shop" },
    { label: "WOMEN", path: "/shop?category=women" },
    { label: "MEN", path: "/shop?category=men" },
    { label: "ACCESSORIES", path: "/shop?category=accessories" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Main Bar */}
      <Container className="py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img src={logo} alt="Roiser Logo" className="h-7 sm:h-8 md:h-10 object-contain" />
          </Link>

          {/* Search Bar (Tablet & Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center flex-1 max-w-xl mx-4 border-2 border-[#E8E8E8] rounded-[4px] p-1.5 focus-within:border-[#E53E3E] transition-colors"
          >
            {/* Category Dropdown */}
            <div className="relative shrink-0 border-r border-gray-200 pr-2 mr-2">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A] px-2 py-1 outline-none cursor-pointer hover:text-[#E53E3E]"
              >
                <span className="truncate max-w-[110px]">
                  {categories.find((c) => c.slug === selectedCategory)?.name || "All"}
                </span>
                <IoIosArrowDown className="text-xs shrink-0" />
              </button>

              {isCategoryOpen && (
                <>
                  {/* Backdrop to auto-close on outside click */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCategoryOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-2xl border border-gray-200 py-1.5 min-w-[210px] max-h-72 overflow-y-auto z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                      Filter Category
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          selectedCategory === cat.slug
                            ? "bg-red-50 text-[#E53E3E] font-bold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-gray-400 font-normal">
                          ({cat.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Keyword Input */}
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm outline-none px-2 text-[#1A1A1A] placeholder:text-gray-400 bg-transparent"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#E53E3E] hover:bg-[#c93232] text-white px-4 py-2 rounded-[3px] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors shrink-0"
            >
              <FiSearch className="text-sm" />
              <span>Search</span>
            </button>
          </form>

          {/* Right Action Icons & Phone */}
          <div className="flex items-center gap-1.5 sm:gap-6">
            {/* Phone (Desktop) */}
            <div className="hidden xl:flex items-center gap-3 border-r border-gray-200 pr-6">
              <div className="w-10 h-10 rounded-full bg-[#F5F6F2] flex items-center justify-center text-[#1A1A1A]">
                <FiPhone className="text-base" />
              </div>
              <div>
                <p className="text-[11px] text-[#74787C] uppercase tracking-wide">
                  Call Us 24/7
                </p>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  +(258) 2159-2159
                </p>
              </div>
            </div>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-1.5 sm:p-2 text-gray-700 hover:text-[#E53E3E] transition-colors"
              title="View Wishlist"
            >
              <FaRegHeart className="text-lg sm:text-2xl" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#E53E3E] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <div
              onClick={openCart}
              className="flex items-center gap-1.5 sm:gap-3 cursor-pointer group"
              title="Open Shopping Cart"
            >
              <div className="relative p-1.5 sm:p-2 text-gray-700 group-hover:text-[#E53E3E] transition-colors">
                <BiShoppingBag className="text-xl sm:text-3xl" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-[#E53E3E] text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-[11px] text-[#74787C] leading-none mb-1">
                  Your cart
                </p>
                <p className="text-sm font-semibold text-[#1A1A1A] leading-none">
                  {formatCurrency(cartSubtotal)}
                </p>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-gray-700 hover:text-[#E53E3E] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-xl sm:text-2xl" />
              ) : (
                <FiMenu className="text-xl sm:text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input (Visible only on mobile screens < 768px) */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-2.5 flex md:hidden items-center border border-gray-200 rounded-[4px] p-1 focus-within:border-[#E53E3E]"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-xs outline-none px-2 py-1 text-[#1A1A1A] bg-transparent min-w-0"
          />
          <button
            type="submit"
            className="bg-[#E53E3E] text-white px-2.5 py-1.5 rounded-[3px] text-xs font-semibold shrink-0 cursor-pointer"
          >
            <FiSearch />
          </button>
        </form>
      </Container>

      {/* Desktop Main Navigation Bar */}
      <div className="hidden md:block bg-[#1A1A1A] text-white">
        <Container>
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname + location.search === link.path ||
                  (link.path === "/shop" && location.pathname === "/shop" && !location.search);

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`py-3.5 px-3 lg:px-4 text-xs lg:text-sm font-semibold tracking-wider transition-colors duration-200 flex items-center ${
                      isActive
                        ? "text-[#E53E3E] bg-black/40"
                        : "text-white/90 hover:text-[#E53E3E]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Promo Flash */}
            <div className="flex items-center gap-2 bg-[#E53E3E] py-2 px-4 rounded-sm text-xs font-bold uppercase tracking-wider text-white">
              <span>Get 30% Off Today</span>
              <span className="bg-white text-[#E53E3E] text-[10px] px-1.5 py-0.5 rounded-full">
                SALE
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] text-white border-t border-gray-800">
          <Container className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold hover:text-[#E53E3E] transition-colors border-b border-gray-800/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex justify-between text-xs text-gray-400">
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white"
              >
                About Store
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white"
              >
                Help & FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
