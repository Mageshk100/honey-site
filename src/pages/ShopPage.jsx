import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ArrowUpDown, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/common/ProductCard';
import { ProductGridSkeleton } from '../components/common/SkeletonLoader';
import EmptyState from '../components/common/EmptyState';
import SectionHeading from '../components/common/SectionHeading';

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-500', label: 'Under ₹500', min: 0, max: 500 },
  { id: '500-1000', label: '₹500 - ₹1,000', min: 500, max: 1000 },
  { id: 'above-1000', label: 'Above ₹1,000', min: 1000, max: Infinity }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Read search & filters from URL
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop Pure Honey - Madhurum Honey and Bee Farm";
  }, []);

  // Update query params helper
  const updateParam = (key, value) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);
    if (!value || value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleResetFilters = () => {
    setSearchParams({});
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        (p.tamilName && p.tamilName.includes(q))
      );
    }

    // Price range filter
    if (priceRange !== 'all') {
      const range = PRICE_RANGES.find(r => r.id === priceRange);
      if (range) {
        result = result.filter(p => {
          const startingPrice = p.variants[0].price;
          return startingPrice >= range.min && startingPrice <= range.max;
        });
      }
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.variants[0].price - b.variants[0].price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.variants[0].price - a.variants[0].price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // 'featured' keeps default order
        break;
    }

    return result;
  }, [activeCategory, searchQuery, priceRange, sortBy]);

  const hasActiveFilters = activeCategory !== 'all' || searchQuery.trim() !== '' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeading
          subtitle="Our 100% Raw Collections"
          title="Pure Apiary Honey Catalogue"
          description="Bottled fresh from our 2,000+ beehives across Tamil Nadu. Unpasteurized, zero added sugar, full of natural floral pollen."
        />

        {/* Search & Mobile Filter Toggle Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-soft mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Live Search */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => updateParam('search', e.target.value)}
              placeholder="Search wild honey, moringa, fig, dry fruits..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-amber-50/50 border border-amber-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-honey-normal"
            />
            {searchQuery && (
              <button
                onClick={() => updateParam('search', '')}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Mobile Filters */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-stone-800 text-xs font-semibold border border-amber-200 hover:bg-amber-100"
            >
              <Filter className="w-4 h-4 text-honey-600" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>

            {/* Sort Select */}
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="bg-amber-50/60 border border-amber-200 text-stone-800 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-honey-normal cursor-pointer"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap mb-6 text-xs">
            <span className="text-stone-500 font-medium">Active filters:</span>
            
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-300">
                Category: {CATEGORIES.find(c => c.id === activeCategory)?.name}
                <button onClick={() => updateParam('category', 'all')}>
                  <X className="w-3 h-3 hover:text-red-700" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-300">
                Search: "{searchQuery}"
                <button onClick={() => updateParam('search', '')}>
                  <X className="w-3 h-3 hover:text-red-700" />
                </button>
              </span>
            )}

            {priceRange !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-300">
                Price: {PRICE_RANGES.find(p => p.id === priceRange)?.label}
                <button onClick={() => updateParam('price', 'all')}>
                  <X className="w-3 h-3 hover:text-red-700" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-honey-600 hover:text-honey-800 font-bold ml-2 underline"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            
            {/* Category Filter */}
            <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-soft">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-amber-100">
                Categories
              </h3>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  const count = cat.id === 'all'
                    ? PRODUCTS.length
                    : PRODUCTS.filter(p => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => updateParam('category', cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-amber-900 text-white shadow-xs'
                          : 'text-stone-700 hover:bg-amber-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-amber-800 text-amber-100' : 'bg-stone-100 text-stone-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-soft">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-amber-100">
                Price (Starting Variant)
              </h3>
              <div className="space-y-2">
                {PRICE_RANGES.map((range) => (
                  <label
                    key={range.id}
                    className="flex items-center gap-2.5 text-xs font-medium text-stone-700 cursor-pointer hover:text-honey-normal"
                  >
                    <input
                      type="radio"
                      name="price-filter"
                      checked={priceRange === range.id}
                      onChange={() => updateParam('price', range.id)}
                      className="text-honey-normal focus:ring-honey-normal"
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Honey Purity Assurance Box */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-3xl p-5 border border-amber-200/80">
              <div className="flex items-center gap-2 text-honey-800 font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-honey-600" />
                <span>Apiary Assurance</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                All honey is harvested from our own 2,000 beehives in Tamil Nadu. We never heat, blend, or dilute our honey.
              </p>
            </div>

          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            
            {/* Products Counter & Info */}
            <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
              <span>
                Showing <strong className="text-stone-800 font-semibold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              <span className="hidden sm:inline">
                Eligible for Free Shipping on ₹2,000+
              </span>
            </div>

            {/* Grid or Skeletons or Empty */}
            {isLoading ? (
              <ProductGridSkeleton count={6} />
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Honey Found"
                description={`No products match your current filters. Try changing or clearing your search term or category.`}
                actionText="Reset All Filters"
                onReset={handleResetFilters}
              />
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter products"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="font-bold text-stone-900 text-base">Filter Honey</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-stone-500 hover:text-stone-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mt-6">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3">
                  Categories
                </h4>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        updateParam('category', cat.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold ${
                        activeCategory === cat.id
                          ? 'bg-amber-900 text-white'
                          : 'text-stone-700 hover:bg-amber-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3">
                  Price
                </h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-2 text-xs font-medium text-stone-700"
                    >
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={priceRange === range.id}
                        onChange={() => {
                          updateParam('price', range.id);
                          setMobileFilterOpen(false);
                        }}
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                handleResetFilters();
                setMobileFilterOpen(false);
              }}
              className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
