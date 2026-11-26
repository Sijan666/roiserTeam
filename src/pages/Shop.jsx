import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import { scrollToTop } from "../utils/scrollToTop";
import Container from "../components/common/Container";
import CatalogStatus from "../components/common/CatalogStatus";
import ProductCard from "../components/common/ProductCard";
import Button from "../components/common/Button";
import { useCurrency } from "../hooks/useCurrency";
import { matchesCategoryFilter, resolveCategoryMeta } from "../utils/categories";
import { useCatalog } from "../hooks/useCatalog";

import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiFilter, FiX, FiCheck, FiHeart } from "react-icons/fi";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";

const Shop = () => {
  const { products, categories, loading, error, retry } = useCatalog();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice: formatCurrency } = useCurrency();
  const lenis = useLenis();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state as single source of truth
  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";
  const selectedBrand = searchParams.get("brand") || "all";
  const sortBy = searchParams.get("sort") || "default";
  const selectedSize = searchParams.get("size") || "all";
  const urlPrice = searchParams.get("maxPrice");
  const parsedUrlPrice = urlPrice ? Number(urlPrice) : null;

  // View & UI state
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const maxProductPrice = useMemo(() => {
    if (!products.length) return 500;
    const maxVal = Math.max(...products.map((product) => product.price || 0));
    return Math.ceil(maxVal / 50) * 50;
  }, [products]);

  const maxPrice = parsedUrlPrice !== null && !isNaN(parsedUrlPrice) ? parsedUrlPrice : maxProductPrice;

  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (!value || value === "all" || value === "default") {
        next.delete(key);
      } else {
        next.set(key, String(value));
      }
      return next;
    });
    setCurrentPage(1);
  };

  // Unique brands from products
  const brands = useMemo(() => {
    const list = [...new Set(products.map((p) => p.brand).filter(Boolean))].sort();
    return ["all", ...list];
  }, [products]);

  // Dynamically extract unique sizes from current products
  const sizes = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (Array.isArray(p.sizes)) {
        p.sizes.forEach((s) => set.add(s));
      }
    });
    return ["all", ...Array.from(set)];
  }, [products]);

  // Filtered & Sorted products
  const activeCategoryMeta = useMemo(
    () => resolveCategoryMeta(selectedCategory, categories),
    [selectedCategory, categories]
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (!matchesCategoryFilter(p, selectedCategory)) {
          return false;
        }
        // Brand filter
        if (selectedBrand !== "all" && p.brand !== selectedBrand) {
          return false;
        }
        // Size filter
        if (selectedSize !== "all" && !p.sizes?.includes(selectedSize)) {
          return false;
        }
        // Max Price filter
        if (p.price > maxPrice) {
          return false;
        }
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchBrand = p.brand?.toLowerCase().includes(q);
          const matchDesc = p.description?.toLowerCase().includes(q);
          const matchTag = p.tags?.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchBrand && !matchDesc && !matchTag) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "newest") {
          const idA = parseInt(String(a.id).replace(/\D/g, ""), 10) || 0;
          const idB = parseInt(String(b.id).replace(/\D/g, ""), 10) || 0;
          return idB - idA;
        }
        return 0; // default
      });
  }, [products, selectedCategory, selectedBrand, selectedSize, maxPrice, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const getPaginationPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    if (!pages.includes(totalPages)) pages.push(totalPages);
    return pages;
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedBrand !== "all" ||
    selectedSize !== "all" ||
    maxPrice < maxProductPrice ||
    searchQuery.trim().length > 0;

  const renderFilterContent = () => (
    <>
      {/* Reset Filters action */}
      {hasActiveFilters && (
        <div className="p-4 bg-red-50 rounded-md border border-red-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-red-800">
            Active Filters applied
          </span>
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs text-[#E53E3E] font-bold hover:underline cursor-pointer"
          >
            Reset All
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="border border-gray-200 rounded-md p-5 bg-white shadow-2xs">
        <h4 className="font-semibold text-base text-[#1A1A1A] pb-3 border-b border-gray-100 mb-4 uppercase tracking-wide">
          Categories
        </h4>
        <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  updateParam("category", cat.slug);
                  setIsMobileFilterOpen(false);
                }}
                className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-xs sm:text-sm transition-colors text-left cursor-pointer ${
                  isSelected
                    ? "bg-red-50 text-[#E53E3E] font-bold"
                    : "text-[#1A1A1A] hover:bg-gray-50"
                }`}
              >
                <span className="truncate pr-2">{cat.name}</span>
                <span className="text-xs text-gray-400 shrink-0">({cat.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div className="border border-gray-200 rounded-md p-5 bg-white shadow-2xs">
        <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
          <h4 className="font-semibold text-base text-[#1A1A1A] uppercase tracking-wide">
            Max Price
          </h4>
          <span className="text-xs font-bold text-[#E53E3E] bg-red-50 px-2 py-0.5 rounded">
            {formatCurrency(maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="10"
          max={maxProductPrice}
          step="10"
          value={maxPrice}
          onChange={(e) => {
            const val = Number(e.target.value);
            updateParam("maxPrice", val >= maxProductPrice ? null : val);
          }}
          className="w-full accent-[#E53E3E] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$10</span>
          <span>{formatCurrency(maxProductPrice / 2)}</span>
          <span>{formatCurrency(maxProductPrice)}</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="border border-gray-200 rounded-md p-5 bg-white shadow-2xs">
        <h4 className="font-semibold text-base text-[#1A1A1A] pb-3 border-b border-gray-100 mb-4 uppercase tracking-wide">
          Brands
        </h4>
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {brands.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => {
                updateParam("brand", b);
                setIsMobileFilterOpen(false);
              }}
              className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-xs sm:text-sm capitalize transition-colors text-left cursor-pointer ${
                selectedBrand === b
                  ? "bg-red-50 text-[#E53E3E] font-bold"
                  : "text-[#1A1A1A] hover:bg-gray-50"
              }`}
            >
              <span className="truncate pr-2">{b === "all" ? "All Brands" : b}</span>
              {selectedBrand === b && <FiCheck className="text-xs shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="border border-gray-200 rounded-md p-5 bg-white shadow-2xs">
        <h4 className="font-semibold text-base text-[#1A1A1A] pb-3 border-b border-gray-100 mb-4 uppercase tracking-wide">
          Sizes
        </h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                updateParam("size", s);
                setIsMobileFilterOpen(false);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                selectedSize === s
                  ? "bg-[#E53E3E] text-white border-[#E53E3E]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {s === "all" ? "All" : s}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  if (loading || error) {
    return (
      <>
        <CatalogStatus loading={loading} error={error} onRetry={retry} />
      </>
    );
  }

  return (
    <>
      {/* Breadcrumb Header Banner */}
      <div className="bg-[#F5F5F3] py-12 md:py-16 border-b border-gray-200">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
                {selectedCategory !== "all"
                  ? activeCategoryMeta?.name || "Shop"
                  : "Shop Catalog"}
              </h1>
              <p className="text-xs sm:text-sm text-[#74787C] mt-1">
                Showing {filteredProducts.length} curated fashion items
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#74787C]">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-semibold">Shop</span>
              {selectedCategory !== "all" && (
                <>
                  <span>/</span>
                  <span className="capitalize font-semibold text-[#E53E3E]">
                    {activeCategoryMeta?.name || selectedCategory}
                  </span>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Shop Content */}
      <Container className="py-10 md:py-16">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <Button
            onClick={() => setIsMobileFilterOpen(true)}
            variant="outlineDark"
            size="sm"
            className="flex items-center gap-2"
          >
            <FiFilter /> Filter & Sort
          </Button>

          <span className="text-xs text-[#74787C]">
            {filteredProducts.length} items found
          </span>
        </div>

        {/* Mobile Filter Drawer (Opens only on mobile when triggered) */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-black/60 transition-opacity"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white p-6 overflow-y-auto shadow-2xl z-50 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 className="font-semibold text-lg text-[#1A1A1A]">Filters</h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 text-gray-500 hover:text-black cursor-pointer"
                  aria-label="Close Filters"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>
              {renderFilterContent()}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Sidebar (Static, contained in grid) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="space-y-6">
              {renderFilterContent()}
            </div>
          </aside>

          {/* Product Listing Area */}
          <main className="lg:col-span-3">
            {/* Top Toolbar: Sorting & View Mode */}
            <div className="bg-white border border-gray-200 rounded-md p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-[#74787C]">
                {/* View toggles */}
                <div className="flex items-center border border-gray-200 rounded p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-[#E53E3E] text-white"
                        : "text-gray-500 hover:text-black"
                    }`}
                    title="Grid View"
                  >
                    <CgMenuGridR className="text-lg" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-[#E53E3E] text-white"
                        : "text-gray-500 hover:text-black"
                    }`}
                    title="List View"
                  >
                    <TfiMenuAlt className="text-base" />
                  </button>
                </div>

                <span>
                  Showing{" "}
                  <strong>
                    {filteredProducts.length > 0
                      ? (currentPage - 1) * itemsPerPage + 1
                      : 0}
                    –
                    {Math.min(
                      currentPage * itemsPerPage,
                      filteredProducts.length
                    )}
                  </strong>{" "}
                  of <strong>{filteredProducts.length}</strong> products
                </span>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#74787C] whitespace-nowrap">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => updateParam("sort", e.target.value)}
                  className="text-xs font-semibold text-[#1A1A1A] border border-gray-200 rounded px-3 py-2 outline-none cursor-pointer bg-white"
                >
                  <option value="default">Default / Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-md border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-2xl font-bold">
                  !
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  No matching products found
                </h3>
                <p className="text-sm text-[#74787C] max-w-md mx-auto mb-6">
                  We couldn't find any items matching your selected filters. Try broadening your criteria or reset the filters.
                </p>
                <Button onClick={handleResetFilters} variant="primary">
                  Reset All Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-4">
                {paginatedProducts.map((product) => {
                  const inWishlist = isInWishlist(product.id);
                  const isOutOfStock = !product.inStock || (product.stockCount !== undefined && product.stockCount <= 0);

                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row gap-6 items-center hover:shadow-md transition-shadow"
                    >
                      <Link
                        to={`/product/${product.slug}`}
                        className="w-40 h-40 bg-[#F6F6F7] rounded p-3 shrink-0 flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </Link>
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <p className="text-xs uppercase text-[#74787C] font-semibold mb-1">
                          {product.brand} • {product.category}
                        </p>
                        <Link
                          to={`/product/${product.slug}`}
                          className="text-lg font-bold text-[#1A1A1A] hover:text-[#E53E3E] transition-colors"
                        >
                          {product.title}
                        </Link>
                        <p className="text-xs text-[#74787C] mt-2 mb-3 line-clamp-2">
                          {product.shortDescription || product.description}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                          <span className="text-lg font-bold text-[#1A1A1A]">
                            {formatCurrency(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {formatCurrency(product.originalPrice)}
                            </span>
                          )}
                          {isOutOfStock && (
                            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 flex sm:flex-col gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          disabled={isOutOfStock}
                          onClick={() => addToCart(product, 1)}
                          className={`px-4 py-2 text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer ${
                            isOutOfStock
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-[#E53E3E] text-white hover:bg-[#c93232]"
                          }`}
                        >
                          {isOutOfStock ? "Sold Out" : "Add to Cart"}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product)}
                          className={`px-4 py-2 text-xs font-semibold rounded border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                            inWishlist
                              ? "border-[#E53E3E] text-[#E53E3E] bg-red-50"
                              : "border-gray-300 text-gray-700 hover:border-black"
                          }`}
                        >
                          <FiHeart className={inWishlist ? "fill-current" : ""} />
                          <span>{inWishlist ? "Saved" : "Wishlist"}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Responsive Pagination Controls (320px-proof) */}
            {totalPages > 1 && (
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    scrollToTop(lenis);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                >
                  &larr; Prev
                </button>

                {getPaginationPages().map((page, idx) => {
                  if (page === "...") {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-1 text-xs text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => {
                        setCurrentPage(page);
                        scrollToTop(lenis);
                      }}
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded text-xs font-semibold transition-colors cursor-pointer ${
                        currentPage === page
                          ? "bg-[#E53E3E] text-white"
                          : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    scrollToTop(lenis);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </main>
        </div>
      </Container>
    </>
  );
};

export default Shop;
