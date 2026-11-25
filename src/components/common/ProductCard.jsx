import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { formatCurrency } from "../../utils/formatCurrency";
import Rating from "./Rating";
import Badge from "./Badge";

const ProductCard = ({ product, className = "" }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const isOutOfStock = !product.inStock || (product.stockCount !== undefined && product.stockCount <= 0);

  const handleCardClick = () => {
    navigate(`/product/${product.slug}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative bg-white border border-[#E8E8E8] rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between ${className}`}
    >
      {/* Top Image & Actions Area */}
      <div className="relative bg-[#F6F6F7] overflow-hidden aspect-square flex items-center justify-center">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={product.badgeType || "primary"}>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full p-2 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
          {/* Add to Cart button */}
          <button
            type="button"
            disabled={isOutOfStock}
            title={isOutOfStock ? "Out of Stock" : "Add to Cart"}
            onClick={handleAddToCart}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 ${
              isOutOfStock
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#1A1A1A] hover:bg-[#E53E3E] hover:text-white"
            }`}
          >
            <FaShoppingBag className="text-sm" />
          </button>

          {/* Wishlist button */}
          <button
            type="button"
            title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            onClick={handleToggleWishlist}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 ${
              inWishlist
                ? "bg-[#E53E3E] text-white"
                : "bg-white text-[#1A1A1A] hover:bg-[#E53E3E] hover:text-white"
            }`}
          >
            {inWishlist ? (
              <FaHeart className="text-sm" />
            ) : (
              <FaRegHeart className="text-sm" />
            )}
          </button>

          {/* Quick View / Details button */}
          <button
            type="button"
            title="View Details"
            onClick={handleQuickView}
            className="w-9 h-9 rounded-full bg-white text-[#1A1A1A] hover:bg-[#E53E3E] hover:text-white flex items-center justify-center shadow-md transition-colors duration-200"
          >
            <FaEye className="text-sm" />
          </button>
        </div>
      </div>

      {/* Product Details Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between border-t border-[#E8E8E8]/60 bg-white">
        <div>
          <p className="text-[11px] sm:text-xs uppercase font-medium text-[#74787C] tracking-wider mb-1">
            {product.brand || product.category}
          </p>
          <Link
            to={`/product/${product.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="font-medium text-sm sm:text-base text-[#1A1A1A] hover:text-[#E53E3E] transition-colors line-clamp-1 mb-2 font-Jost"
          >
            {product.title}
          </Link>
          <Rating
            value={product.rating}
            reviewCount={product.reviewCount}
            className="mb-3"
          />
        </div>

        <div className="flex items-baseline justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-base sm:text-lg text-[#1A1A1A]">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-[#74787C] line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
              isOutOfStock
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#E53E3E] hover:text-black cursor-pointer"
            }`}
          >
            {isOutOfStock ? "Sold Out" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
