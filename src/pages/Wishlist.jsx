import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../hooks/useCart";
import { useCurrency } from "../hooks/useCurrency";
import { FaHeart, FaTrashAlt, FaShoppingBag } from "react-icons/fa";

const WishlistImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
  />
);

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();
  const { formatPrice: formatCurrency } = useCurrency();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <>
        <Helmet>
          <title>My Wishlist | Roiser</title>
        </Helmet>
        <Container className="py-20 text-center">
          <div className="w-24 h-24 bg-red-50 text-[#E53E3E] rounded-full flex items-center justify-center mx-auto mb-6">
            <FaHeart className="text-3xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-Jost mb-3">
            Your Wishlist is Empty
          </h2>
          <p className="text-sm text-[#74787C] max-w-md mx-auto mb-8">
            Explore our curated catalog and tap the heart icon on any product to save your dream pieces for later.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Explore Catalog Now
            </Button>
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`My Wishlist (${wishlistCount}) | Roiser`}</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            My Wishlist ({wishlistCount})
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-1">
            Saved items you love, ready to be added to your cart anytime
          </p>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {wishlist.filter(Boolean).map((item, idx) => {
            const key = item.id || item.slug || `wishlist-${idx}`;
            const productSlug = item.slug || item.id || "";
            const itemImage = item.image || (item.images && item.images[0]) || item.thumbnail || "";
            const itemPrice = typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
            const originalPrice = item.originalPrice ? parseFloat(item.originalPrice) : null;

            return (
              <div
                key={key}
                className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image */}
                <Link to={productSlug ? `/product/${productSlug}` : "#"} className="block relative bg-[#F6F6F7] aspect-square overflow-hidden">
                  <WishlistImage
                    src={itemImage}
                    alt={item.title || "Product"}
                    className="w-full h-full object-contain p-4"
                  />
                </Link>

                {/* Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-[11px] uppercase font-medium text-[#74787C] tracking-wider mb-1">
                    {item.brand || item.category || "Authentic"}
                  </p>
                  <Link
                    to={productSlug ? `/product/${productSlug}` : "#"}
                    className="font-semibold text-sm text-[#1A1A1A] hover:text-[#E53E3E] transition-colors line-clamp-2 mb-2 leading-snug"
                  >
                    {item.title || "Untitled Product"}
                  </Link>
                  <p className="font-bold text-base text-[#1A1A1A] mb-4">
                    {formatCurrency(itemPrice)}
                    {originalPrice && originalPrice > itemPrice && (
                      <span className="ml-2 text-xs text-[#74787C] line-through font-normal">
                        {formatCurrency(originalPrice)}
                      </span>
                    )}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleMoveToCart(item)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#E53E3E] hover:bg-[#c53030] text-white text-xs font-semibold py-2.5 px-3 rounded transition-colors cursor-pointer"
                    >
                      <FaShoppingBag className="text-xs" /> Move to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors shrink-0 cursor-pointer"
                      title="Remove"
                    >
                      <FaTrashAlt className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link to="/shop">
            <Button variant="outlineDark" size="sm">
              &larr; Continue Shopping
            </Button>
          </Link>
          <button
            type="button"
            onClick={clearWishlist}
            className="text-xs text-[#74787C] hover:text-[#E53E3E] underline font-medium"
          >
            Clear Wishlist
          </button>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
