import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import CatalogStatus from "../components/common/CatalogStatus";
import Button from "../components/common/Button";
import Rating from "../components/common/Rating";
import ProductCard from "../components/common/ProductCard";
import ProductSeo from "../components/layout/ProductSeo";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import { useCatalog } from "../hooks/useCatalog";
import { formatCurrency } from "../utils/formatCurrency";

import { FaHeart, FaRegHeart, FaShippingFast, FaUndoAlt, FaShieldAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products, loading, error, retry } = useCatalog();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = products.find((p) => p.slug === slug);

  const [userSelectedImage, setUserSelectedImage] = useState(null);
  const [userSelectedSize, setUserSelectedSize] = useState(null);
  const [userSelectedColor, setUserSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // 'description' | 'additional' | 'reviews'

  // Reset component state when navigating between products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setUserSelectedImage(null);
    setUserSelectedSize(null);
    setUserSelectedColor(null);
    setQuantity(1);
    setActiveTab("description");
  }, [slug]);

  const activeImage = userSelectedImage || product?.image;
  const selectedSize =
    userSelectedSize || (product?.sizes ? product.sizes[0] : "One Size");
  const selectedColor =
    userSelectedColor || (product?.colors ? product.colors[0]?.name : "Default");

  if (loading || error) {
    return (
      <>
        <ProductSeo product={product} />
        <CatalogStatus loading={loading} error={error} onRetry={retry} />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <ProductSeo product={product} />
        <Container className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop">
            <Button variant="primary">Return to Shop</Button>
          </Link>
        </Container>
      </>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const isOutOfStock = !product.inStock || (product.stockCount !== undefined && product.stockCount <= 0);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate("/checkout");
  };

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductSeo product={product} />

      {/* Breadcrumb Header */}
      <div className="bg-[#F5F5F3] py-8 md:py-12 border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#74787C]">
            <Link to="/" className="hover:text-[#1A1A1A]">
              Home
            </Link>
            <IoIosArrowForward className="text-xs" />
            <Link to="/shop" className="hover:text-[#1A1A1A]">
              Shop
            </Link>
            <IoIosArrowForward className="text-xs" />
            <Link
              to={`/shop?category=${product.category}`}
              className="capitalize hover:text-[#1A1A1A]"
            >
              {product.category}
            </Link>
            <IoIosArrowForward className="text-xs" />
            <span className="text-[#1A1A1A] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {product.title}
            </span>
          </div>
        </Container>
      </div>

      {/* Product Detail Section */}
      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 items-start">
            {/* Thumbnail selector */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible w-full sm:w-20 shrink-0">
              {product.gallery?.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setUserSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#F6F6F7] rounded-md border-2 transition-all overflow-hidden flex items-center justify-center shrink-0 cursor-pointer ${
                    activeImage === img
                      ? "border-[#E53E3E] shadow-sm"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-full h-full ${
                      img?.includes("dummyjson") ? "object-contain p-1" : "object-cover"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="flex-1 w-full bg-[#F6F6F7] rounded-lg aspect-square flex items-center justify-center relative overflow-hidden shadow-xs">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-[#E53E3E] text-white text-xs font-bold uppercase px-3 py-1 rounded-sm shadow-xs">
                  {product.badge}
                </span>
              )}
              <img
                src={activeImage || product.image}
                alt={product.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80";
                }}
                className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
                  (activeImage || product.image)?.includes("dummyjson")
                    ? "object-contain p-6"
                    : "object-cover"
                }`}
              />
            </div>
          </div>

          {/* Right Column: Product Meta, Pricing, Options */}
          <div className="space-y-6">
            <div>
              <p className="text-xs sm:text-sm uppercase font-semibold text-[#E53E3E] tracking-widest mb-1.5">
                {product.brand} &bull; {product.category}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] font-Jost leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <Rating value={product.rating} reviewCount={product.reviewCount} size="md" />
                <span className="text-xs text-gray-400">|</span>
                {isOutOfStock ? (
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    Out of Stock
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    In Stock ({product.stockCount} items left)
                  </span>
                )}
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-4 py-4 border-y border-gray-100">
              <span className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-lg text-[#74787C] line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-xs font-bold text-[#E53E3E] bg-red-50 px-2.5 py-1 rounded">
                  Save {formatCurrency(product.originalPrice - product.price)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-[#74787C] leading-relaxed">
              {product.shortDescription || product.description}
            </p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-2.5">
                  Color: <span className="text-[#74787C] font-normal">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setUserSelectedColor(c.name)}
                      title={c.name}
                      className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 cursor-pointer ${
                        selectedColor === c.name
                          ? "border-[#1A1A1A] scale-110 shadow-sm"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <span
                        className="block w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-2.5">
                  Select Size: <span className="text-[#74787C] font-normal">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setUserSelectedSize(s)}
                      className={`px-4 py-2 text-xs font-bold rounded-sm border transition-colors cursor-pointer ${
                        selectedSize === s
                          ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                          : "bg-white text-[#1A1A1A] border-gray-200 hover:border-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3">
                {/* Stepper */}
                <div className={`inline-flex items-center border rounded-[3px] bg-white ${isOutOfStock ? 'opacity-50 border-gray-200' : 'border-gray-300'}`}>
                  <button
                    type="button"
                    disabled={isOutOfStock}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 sm:py-3 text-base font-semibold text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#1A1A1A] min-w-[32px] text-center">
                    {isOutOfStock ? 0 : quantity}
                  </span>
                  <button
                    type="button"
                    disabled={isOutOfStock}
                    onClick={() => setQuantity((q) => Math.min(product.stockCount || 10, q + 1))}
                    className="px-3 py-2 sm:py-3 text-base font-semibold text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist toggle */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  title={inWishlist ? "In Wishlist" : "Add to Wishlist"}
                  className={`p-2.5 sm:p-3 rounded-[3px] border transition-colors flex items-center justify-center cursor-pointer ${
                    inWishlist
                      ? "border-[#E53E3E] text-[#E53E3E] bg-red-50"
                      : "border-gray-300 text-gray-700 hover:border-black"
                  }`}
                >
                  {inWishlist ? <FaHeart className="text-base sm:text-lg" /> : <FaRegHeart className="text-base sm:text-lg" />}
                </button>
              </div>

              {/* Add to Cart */}
              <Button
                type="button"
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                variant={isOutOfStock ? "ghost" : "outlineDark"}
                size="lg"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 text-xs sm:text-sm ${isOutOfStock ? 'border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed' : ''}`}
              >
                <HiOutlineShoppingBag className="text-base" /> {isOutOfStock ? "Out of Stock" : "Add To Cart"}
              </Button>

              {/* Buy Now */}
              <Button
                type="button"
                disabled={isOutOfStock}
                onClick={handleBuyNow}
                variant="primary"
                size="lg"
                className={`flex-1 py-2.5 sm:py-3 text-xs sm:text-sm ${isOutOfStock ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                {isOutOfStock ? "Sold Out" : "Buy Now"}
              </Button>
            </div>

            {/* Reassurance Value Props */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5 text-xs text-[#74787C]">
              <div className="flex items-center gap-2.5">
                <FaShippingFast className="text-[#E53E3E] text-base shrink-0" />
                <span>Free worldwide shipping on orders over $150</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaUndoAlt className="text-[#E53E3E] text-sm shrink-0" />
                <span>30 days free return & exchange guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaShieldAlt className="text-[#E53E3E] text-sm shrink-0" />
                <span>256-bit SSL encrypted safe checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section (Description, Additional Info, Reviews) */}
        <div className="mt-16 sm:mt-24 border-t border-gray-200 pt-10">
          <div className="flex gap-4 sm:gap-8 border-b border-gray-200 pb-3">
            {[
              { id: "description", label: "Product Description" },
              { id: "additional", label: "Additional Information" },
              { id: "reviews", label: `Reviews (${product.reviewCount})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm sm:text-base font-semibold pb-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#E53E3E] text-[#E53E3E]"
                    : "border-transparent text-[#74787C] hover:text-[#1A1A1A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-6 text-sm text-[#74787C] leading-relaxed">
            {activeTab === "description" && (
              <div className="space-y-4 max-w-3xl">
                <p>{product.description}</p>
                <p>
                  Every piece in our collection is precision-crafted with ethically sourced fabrics.
                  Our Italian and Portuguese manufacturing partners adhere to strict environmental
                  and human rights standards, ensuring fashion that respects both artisan and wearer.
                </p>
              </div>
            )}

            {activeTab === "additional" && (
              <div className="max-w-2xl bg-gray-50 rounded-md p-6 border border-gray-100">
                <table className="w-full text-xs sm:text-sm">
                  <tbody className="divide-y divide-gray-200">
                    {product.additionalInfo ? (
                      Object.entries(product.additionalInfo).map(([key, value]) => (
                        <tr key={key}>
                          <td className="py-2.5 font-semibold text-[#1A1A1A] capitalize w-1/3">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="py-2.5 text-[#74787C]">{value}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="py-2 font-medium">Material:</td>
                        <td>100% Sustainable Organic Textile</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-md">
                  <div>
                    <span className="text-4xl font-bold text-[#1A1A1A]">{product.rating}</span>
                    <span className="text-xs text-gray-500"> / 5.0</span>
                    <Rating value={product.rating} showCount={false} className="mt-1" />
                  </div>
                  <div className="border-l border-gray-200 pl-4 text-xs text-[#74787C]">
                    Based on {product.reviewCount} verified customer ratings and reviews.
                  </div>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((rev, index) => (
                      <div key={index} className="pt-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-[#1A1A1A]">
                            {rev.reviewerName || "Verified Buyer"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {rev.date ? new Date(rev.date).toLocaleDateString() : "Verified Purchase"}
                          </span>
                        </div>
                        <Rating value={rev.rating || 5} showCount={false} size="xs" className="mb-2" />
                        <p className="text-xs text-gray-600">
                          {rev.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="pt-4 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-[#1A1A1A]">Jessica M.</span>
                          <span className="text-xs text-gray-400">Verified Buyer &bull; 2 weeks ago</span>
                        </div>
                        <Rating value={5} showCount={false} size="xs" className="mb-2" />
                        <p className="text-xs text-gray-600">
                          Exceptional craftsmanship! The fit is true to size and the fabric feels like pure luxury. Delivery arrived in 3 days.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-[#1A1A1A]">David R.</span>
                          <span className="text-xs text-gray-400">Verified Buyer &bull; 1 month ago</span>
                        </div>
                        <Rating value={5} showCount={false} size="xs" className="mb-2" />
                        <p className="text-xs text-gray-600">
                          Top notch quality. Highly recommended for formal occasions or daily stylish wear.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 font-Jost uppercase">
              You May Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
