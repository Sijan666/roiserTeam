import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../common/Container";
import { IoIosArrowDown } from "react-icons/io";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useWishlist } from "../../hooks/useWishlist";
import { useAuth } from "../../hooks/useAuth";

const HeaderTop = () => {
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-[#E53E3E] py-2 hidden lg:block text-white">
      <Container>
        <div className="flex justify-between items-center text-xs font-medium font-Jost">
          {/* Left Navigation */}
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/about" className="hover:text-gray-200 transition-colors">
                About Us
              </Link>
            </li>

            {/* My Account Dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-1.5 outline-none cursor-pointer hover:text-gray-200 transition-colors">
                {isAuthenticated ? `Hi, ${user.name}` : "My Account"}
                <IoIosArrowDown className="text-xs" />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-white text-[#1A1A1A] p-3 rounded-md shadow-xl text-xs z-50 min-w-[150px] border border-gray-100 mt-2 font-medium"
              >
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 border-b border-gray-100 text-[#74787C]">
                      Signed in as <br />
                      <strong className="text-[#1A1A1A]">{user.email}</strong>
                    </div>
                    <Link
                      to="/wishlist"
                      className="px-3 py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      My Wishlist ({wishlistCount})
                    </Link>
                    <Link
                      to="/checkout"
                      className="px-3 py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      Checkout
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="text-left px-3 py-2 text-[#E53E3E] hover:bg-red-50 rounded transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-3 py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="px-3 py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </PopoverPanel>
            </Popover>

            <li>
              <Link
                to="/wishlist"
                className="hover:text-gray-200 transition-colors flex items-center gap-1"
              >
                Wishlist
                {wishlistCount > 0 && (
                  <span className="bg-white text-[#E53E3E] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-gray-200 transition-colors">
                Checkout
              </Link>
            </li>
          </ul>

          {/* Center Promo */}
          <div>
            <p className="font-normal text-white/90">
              Free worldwide shipping on all orders over $150
            </p>
          </div>

          {/* Right Selectors */}
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition-colors">
                Store Location
              </Link>
            </li>
            <li className="text-white/40">|</li>

            {/* Language Selector */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-1 outline-none cursor-pointer hover:text-gray-200 transition-colors">
                {language}
                <IoIosArrowDown className="text-xs" />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-white text-[#1A1A1A] p-2 rounded-md shadow-xl text-xs z-50 min-w-[120px] border border-gray-100 mt-2"
              >
                {["English", "Español", "Français", "Deutsch"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`text-left px-3 py-1.5 rounded transition-colors ${
                      language === lang
                        ? "bg-red-50 text-[#E53E3E] font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </PopoverPanel>
            </Popover>

            <li className="text-white/40">|</li>

            {/* Currency Selector */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-1 outline-none cursor-pointer hover:text-gray-200 transition-colors">
                {currency}
                <IoIosArrowDown className="text-xs" />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col bg-white text-[#1A1A1A] p-2 rounded-md shadow-xl text-xs z-50 min-w-[100px] border border-gray-100 mt-2"
              >
                {["USD", "EUR", "GBP", "CAD"].map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`text-left px-3 py-1.5 rounded transition-colors ${
                      currency === curr
                        ? "bg-red-50 text-[#E53E3E] font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </PopoverPanel>
            </Popover>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
