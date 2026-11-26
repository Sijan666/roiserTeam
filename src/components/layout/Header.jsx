import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { BiShoppingBag } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMenu, FiPhone, FiSearch, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../common/Container";
import { useCart } from "../../hooks/useCart";
import { useCatalog } from "../../hooks/useCatalog";
import { useCurrency } from "../../hooks/useCurrency";
import { useWishlist } from "../../hooks/useWishlist";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "SHOP", path: "/shop" },
  { label: "WOMEN", path: "/shop?category=women", category: "women" },
  { label: "MEN", path: "/shop?category=men", category: "men" },
  { label: "ACCESSORIES", path: "/shop?category=accessories", category: "accessories" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const isActiveLink = (link, pathname, category) =>
  link.path === "/"
    ? pathname === "/"
    : link.category
      ? pathname === "/shop" && category === link.category
      : link.path === "/shop"
        ? pathname === "/shop" && !category
        : pathname === link.path;

const NavigationLinks = ({ mobile = false, pathname, category, onNavigate }) => (
  <ul className={mobile ? "space-y-1" : "flex items-center gap-1 lg:gap-2"}>
    {navLinks.map((link, index) => {
      const active = isActiveLink(link, pathname, category);
      return (
        <li
          key={link.label}
          className={mobile ? "mobile-menu-item-enter" : undefined}
          style={mobile ? { animationDelay: `${index * 45}ms` } : undefined}
        >
          <Link
            to={link.path}
            aria-current={active ? "page" : undefined}
            onClick={mobile ? onNavigate : undefined}
            className={
              mobile
                ? `block border-b border-gray-800/50 py-2.5 text-sm font-semibold transition-colors hover:text-[#E53E3E] ${active ? "text-[#E53E3E]" : "text-white"}`
                : `flex items-center px-3 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-200 lg:px-4 lg:text-sm ${active ? "bg-black/40 text-[#E53E3E]" : "text-white/90 hover:text-[#E53E3E]"}`
            }
          >
            {link.label}
          </Link>
        </li>
      );
    })}
  </ul>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, cartSubtotal, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { categories } = useCatalog();
  const { currency, setCurrency, currencies, formatPrice } = useCurrency();
  const activeCategory = new URLSearchParams(location.search).get("category");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(activeCategory || "all");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedCategoryName =
    categories.find((category) => category.slug === selectedCategory)?.name || "All";

  useEffect(() => {
    setSelectedCategory(activeCategory || "all");
  }, [activeCategory]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    setIsMobileMenuOpen(false);
    const query = params.toString();
    navigate(`/shop${query ? `?${query}` : ""}`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative w-full border-b border-gray-100 bg-white">
      <Container className="py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logo} alt="Roiser Logo" className="h-7 w-auto object-contain sm:h-8 md:h-10" />
          </Link>

          <form
            onSubmit={handleSearchSubmit}
            role="search"
            className="mx-3 hidden min-w-0 max-w-xl flex-1 items-center rounded-[4px] border-2 border-[#E8E8E8] p-1.5 transition-colors focus-within:border-[#E53E3E] lg:flex"
          >
            <div className="relative mr-2 shrink-0 border-r border-gray-200 pr-2">
              <button
                type="button"
                onClick={() => setIsCategoryOpen((open) => !open)}
                aria-expanded={isCategoryOpen}
                aria-controls="header-category-menu"
                className="flex items-center gap-1.5 px-2 py-1 text-xs font-semibold text-[#1A1A1A] transition-colors hover:text-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E53E3E]"
              >
                <span className="max-w-[110px] truncate">{selectedCategoryName}</span>
                <IoIosArrowDown className="shrink-0 text-xs" aria-hidden="true" />
              </button>
              {isCategoryOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close category menu"
                    onClick={() => setIsCategoryOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <div
                    id="header-category-menu"
                    className="absolute left-0 top-full z-50 mt-2 max-h-72 min-w-[210px] overflow-y-auto rounded-md border border-gray-200 bg-white py-1.5 shadow-2xl"
                  >
                    <div className="mb-1 border-b border-gray-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Filter category
                    </div>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category.slug);
                          setIsCategoryOpen(false);
                        }}
                        className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs transition-colors ${selectedCategory === category.slug ? "bg-red-50 font-bold text-[#E53E3E]" : "text-gray-700 hover:bg-gray-50"}`}
                      >
                        <span>{category.name}</span>
                        <span className="text-[10px] font-normal text-gray-400">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <label htmlFor="desktop-product-search" className="sr-only">Search products</label>
            <input
              id="desktop-product-search"
              type="search"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[#1A1A1A] outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-[3px] bg-[#E53E3E] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#C93232] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53E3E]"
            >
              <FiSearch className="text-sm" aria-hidden="true" /> <span>Search</span>
            </button>
          </form>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:gap-3">
            <a
              href="tel:+25821592159"
              className="hidden items-center gap-3 border-r border-gray-200 pr-5 text-[#1A1A1A] transition-colors hover:text-[#E53E3E] 2xl:flex"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[#F5F6F2]">
                <FiPhone className="text-base" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-wide text-[#74787C]">Call us 24/7</span>
                <span className="block text-sm font-semibold">+(258) 2159-2159</span>
              </span>
            </a>
            <Link
              to="/wishlist"
              aria-label={`View wishlist${wishlistCount ? `, ${wishlistCount} items` : ""}`}
              title="View wishlist"
              className="relative grid size-9 place-items-center text-gray-700 transition-colors hover:text-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E53E3E] sm:size-10"
            >
              {wishlistCount > 0 ? <FaHeart className="text-lg text-[#E53E3E] sm:text-xl" aria-hidden="true" /> : <FaRegHeart className="text-lg sm:text-xl" aria-hidden="true" />}
              {wishlistCount > 0 && <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-[#E53E3E] text-[9px] font-bold text-white">{wishlistCount > 99 ? "99+" : wishlistCount}</span>}
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open shopping cart${cartCount ? `, ${cartCount} items` : ""}`}
              title="Open shopping cart"
              className="group flex items-center gap-1.5 text-left text-gray-700 transition-colors hover:text-[#E53E3E]"
            >
              <span className="relative grid size-9 place-items-center sm:size-10">
                <BiShoppingBag className="text-xl sm:text-2xl" aria-hidden="true" />
                {cartCount > 0 && <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-[#E53E3E] text-[9px] font-bold text-white">{cartCount > 99 ? "99+" : cartCount}</span>}
              </span>
              <span className="hidden text-left lg:block">
                <span className="mb-1 block text-[11px] leading-none text-[#74787C]">Your cart</span>
                <span className="block text-sm font-semibold leading-none text-[#1A1A1A]">{formatPrice(cartSubtotal)}</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="grid size-9 place-items-center text-gray-700 transition-colors hover:text-[#E53E3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E53E3E] lg:hidden sm:size-10"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <FiX className="text-xl sm:text-2xl" aria-hidden="true" /> : <FiMenu className="text-xl sm:text-2xl" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          role="search"
          className="mt-2.5 flex items-center rounded-[4px] border border-gray-200 p-1 transition-colors focus-within:border-[#E53E3E] lg:hidden"
        >
          <label htmlFor="mobile-product-search" className="sr-only">Search products</label>
          <input
            id="mobile-product-search"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="min-w-0 flex-1 bg-transparent px-2 py-1 text-xs text-[#1A1A1A] outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex size-8 shrink-0 items-center justify-center rounded-[3px] bg-[#E53E3E] text-white transition-colors hover:bg-[#C93232] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53E3E]"
          >
            <FiSearch aria-hidden="true" />
          </button>
        </form>
      </Container>

      <nav className="hidden bg-[#1A1A1A] text-white lg:block" aria-label="Main navigation">
        <Container>
          <div className="flex items-center justify-between">
            <NavigationLinks pathname={location.pathname} category={activeCategory} />
            <Link
              to="/shop"
              className="flex items-center gap-2 rounded-sm bg-[#E53E3E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C93232] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Get 30% off today</span>
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[10px] text-[#E53E3E]">SALE</span>
            </Link>
          </div>
        </Container>
      </nav>

      <Transition
        show={isMobileMenuOpen}
        enter="transition duration-200 ease-out motion-reduce:transition-none"
        enterFrom="scale-y-0 opacity-0"
        enterTo="scale-y-100 opacity-100"
        leave="transition duration-150 ease-in motion-reduce:transition-none"
        leaveFrom="scale-y-100 opacity-100"
        leaveTo="scale-y-0 opacity-0"
      >
        <div id="mobile-navigation" className="absolute inset-x-0 top-full z-30 origin-top border-t border-gray-800 bg-[#1A1A1A] text-white shadow-xl lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <NavigationLinks mobile pathname={location.pathname} category={activeCategory} onNavigate={closeMobileMenu} />
            </nav>
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-gray-800 pt-4">
              <label htmlFor="mobile-currency" className="text-xs text-gray-300">Currency</label>
              <div className="relative w-44 max-w-[65%]">
                <select
                  id="mobile-currency"
                  value={currency}
                  onChange={(event) => {
                    setCurrency(event.target.value);
                    closeMobileMenu();
                  }}
                  className="w-full appearance-none rounded-md border border-gray-700 bg-[#242424] py-2 pl-3 pr-8 text-xs text-white outline-none transition-colors focus:border-[#E53E3E]"
                >
                  {currencies.map((curr) => <option key={curr.code} value={curr.code}>{curr.code} — {curr.name}</option>)}
                </select>
                <IoIosArrowDown aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-300" />
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-3 text-xs text-gray-400">
              <Link to="/about" onClick={closeMobileMenu} className="transition-colors hover:text-white">About Store</Link>
              <Link to="/faq" onClick={closeMobileMenu} className="transition-colors hover:text-white">Help &amp; FAQ</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="transition-colors hover:text-white">Contact Us</Link>
            </div>
          </Container>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
