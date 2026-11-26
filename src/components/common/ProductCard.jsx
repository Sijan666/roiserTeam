import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { useCurrency } from "../../hooks/useCurrency";
import Rating from "./Rating";
import Badge from "./Badge";

const ProductCard = ({ product, className = "" }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice: formatCurrency } = useCurrency();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const isOutOfStock =
    !product.inStock || (product.stockCount !== undefined && product.stockCount <= 0);

  const hasDiscount =
    product.originalPrice && Number(product.originalPrice) > Number(product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

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
      className={`group relative flex h-full w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-neutral-200/80 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] cursor-pointer ${className}`}
    >
      {/* Top Image Container */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F7F7F8]">
        {/* Top-Left Badges (Status + Discount %) */}
        <div className="absolute top-2 left-2 z-10 flex flex-col items-start gap-1 sm:top-3 sm:left-3">
          {isOutOfStock ? (
            <span className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-[11px]">
              Sold Out
            </span>
          ) : (
            <>
              {product.badge && (
                <Badge variant={product.badgeType || "primary"}>
                  {product.badge}
                </Badge>
              )}
              {hasDiscount && discountPercent > 0 && (
                <span className="rounded bg-[#E53E3E] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white shadow-xs sm:px-2 sm:text-[11px]">
                  -{discountPercent}%
                </span>
              )}
            </>
          )}
        </div>

        {/* Top-Right Wishlist & Quick View Floating Pills */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1.5 sm:top-3 sm:right-3">
          <button
            type="button"
            aria-label={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            onClick={handleToggleWishlist}
            className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 shadow-xs sm:h-8 sm:w-8 ${
              inWishlist
                ? "bg-[#E53E3E] text-white"
                : "bg-white/90 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
            }`}
          >
            {inWishlist ? (
              <FaHeart className="text-[11px] sm:text-xs" />
            ) : (
              <FaRegHeart className="text-[11px] sm:text-xs" />
            )}
          </button>

          <button
            type="button"
            aria-label="Quick View"
            title="View Details"
            onClick={handleQuickView}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] backdrop-blur-md transition-all duration-200 shadow-xs hover:bg-[#1A1A1A] hover:text-white sm:h-8 sm:w-8 md:opacity-0 md:group-hover:opacity-100"
          >
            <FaEye className="text-[11px] sm:text-xs" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`h-full w-full object-contain p-3 sm:p-4 ${
            isOutOfStock ? "opacity-60 grayscale-30" : ""
          }`}
        />

        {/* Desktop Hover Quick Add Bar */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-semibold uppercase tracking-wider shadow-md backdrop-blur-md transition-colors ${
              isOutOfStock
                ? "cursor-not-allowed bg-neutral-200/95 text-neutral-500"
                : "bg-[#1A1A1A]/95 text-white hover:bg-[#E53E3E] cursor-pointer"
            }`}
          >
            <FaShoppingBag className="text-xs" />
            {isOutOfStock ? "Out of Stock" : "Quick Add"}
          </button>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex grow flex-col justify-between p-2.5 sm:p-4">
        <div className="min-w-0">
          {/* Brand / Category */}
          <p className="mb-0.5 truncate text-[10px] font-semibold uppercase tracking-widest text-neutral-400 sm:text-[11px]">
            {product.brand || product.category}
          </p>

          {/* Product Title */}
          <Link
            to={`/product/${product.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="mb-1.5 block line-clamp-1 font-Jost text-xs font-semibold text-[#1A1A1A] transition-colors hover:text-[#E53E3E] sm:text-sm md:text-[15px]"
          >
            {product.title}
          </Link>

          {/* Rating */}
          <div className="mb-2 origin-left scale-[0.85] sm:mb-2.5 sm:scale-95">
            <Rating value={product.rating} reviewCount={product.reviewCount} />
          </div>
        </div>

        {/* Price & Mobile/Tablet Add Button */}
        <div className="mt-auto flex flex-col gap-2 border-t border-neutral-100 pt-2 sm:pt-2.5">
          {/* Price Row */}
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <span className="break-all font-Jost text-xs font-bold tracking-tight text-[#1A1A1A] sm:text-sm md:text-base">
              {formatCurrency(product.price)}
            </span>
            {hasDiscount && (
              <span className="break-all text-[10px] font-medium text-neutral-400 line-through sm:text-xs">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Persistent Add to Bag Button for Mobile/Touch */}
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            className={`flex w-full items-center justify-center gap-1.5 rounded-md py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors md:hidden ${
              isOutOfStock
                ? "cursor-not-allowed bg-neutral-100 text-neutral-400"
                : "border border-neutral-200 bg-neutral-50 text-[#1A1A1A] active:bg-[#1A1A1A] active:text-white"
            }`}
          >
            <FaShoppingBag className="text-[10px]" />
            {isOutOfStock ? "Sold Out" : "Add to Bag"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;