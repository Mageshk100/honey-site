import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { BRAND_INFO } from '../../data/brandInfo';

export default function Navbar() {
  const { totalItemsCount, subtotal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Filter products for quick search
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinkClasses = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 py-1.5 ${
      isActive
        ? 'text-honey-normal font-bold'
        : 'text-stone-700 hover:text-honey-normal'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-warm-cream/90 backdrop-blur-sm border-b border-amber-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group shrink-0 focus:outline-none focus:ring-2 focus:ring-honey-normal rounded-lg"
              aria-label="Madhuram Honey Home"
            >
              <img
                src="/assets/navbar-B0ors2B9.png"
                alt="Madhuram Honey & Bee Farm"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden xl:flex flex-col">
                <span className="font-serif font-bold text-lg text-amber-950 tracking-tight leading-none">
                  Madhuram
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-honey-600">
                  Honey & Bee Farm
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              <NavLink to="/" className={navLinkClasses} end>
                Home
              </NavLink>
              <NavLink to="/shop" className={navLinkClasses}>
                Shop All Honey
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                Our Story & Farm
              </NavLink>
              <NavLink to="/faq" className={navLinkClasses}>
                Purity & FAQs
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact Us
              </NavLink>
            </nav>

            {/* Actions: Search, WhatsApp, Cart, Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-stone-700 hover:text-honey-normal hover:bg-amber-50 rounded-full transition-colors relative"
                aria-label="Search honey products"
                title="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Quick Order Link */}
              <a
                href={BRAND_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-all shadow-xs"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>WhatsApp Order</span>
              </a>

              {/* Cart Button */}
              <Link
                to="/cart"
                className="relative inline-flex items-center justify-center p-2 text-stone-800 hover:text-honey-normal hover:bg-amber-50 rounded-full transition-colors group"
                aria-label={`Shopping cart with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-stone-700 group-hover:text-honey-normal transition-colors" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-honey-normal text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse-subtle">
                    {totalItemsCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700 hover:text-honey-normal hover:bg-amber-50 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay / Bar */}
        {searchOpen && (
          <div className="border-t border-amber-200/60 bg-amber-50/95 backdrop-blur-md py-4 px-4 shadow-inner animate-in fade-in slide-in-from-top-2">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-amber-700/60" />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pure honey, moringa, dry fruits, wild forest..."
                  className="w-full pl-12 pr-24 py-2.5 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-honey-normal focus:border-transparent bg-white text-stone-900 text-sm shadow-xs"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-1.5 bg-honey-normal hover:bg-honey-dark text-white rounded-full text-xs font-semibold shadow-xs transition-colors"
                >
                  Search
                </button>
              </form>

              {/* Quick Results Preview */}
              {searchQuery.trim().length > 1 && (
                <div className="mt-3 bg-white rounded-2xl shadow-xl border border-amber-100 p-3 max-h-72 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <div className="divide-y divide-amber-50">
                      {filteredProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-amber-50 transition-colors"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-contain bg-amber-50/80 rounded-lg p-1"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-stone-900 truncate">
                              {p.name}
                            </p>
                            <p className="text-xs text-amber-800">
                              Starts from ₹{p.variants[0].price} • {p.categoryName}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-amber-400" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center text-stone-500 text-sm">
                      No honey matches found for "{searchQuery}". Try searching for "forest", "moringa", or "dry fruits".
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-warm-cream h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-amber-200">
                <img
                  src="/assets/navbar-B0ors2B9.png"
                  alt="Madhuram Honey"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-amber-100/50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mt-6">
                <Link
                  to="/"
                  className="px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors"
                >
                  Shop Pure Honey
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors"
                >
                  Our Story & Farm
                </Link>
                <Link
                  to="/faq"
                  className="px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors"
                >
                  Purity & FAQs
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors"
                >
                  Contact & Support
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-stone-800 hover:bg-amber-100/70 hover:text-honey-normal transition-colors mt-2 bg-amber-50/80"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-honey-normal" />
                    My Cart
                  </span>
                  <span className="bg-honey-normal text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {totalItemsCount}
                  </span>
                </Link>
              </nav>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-amber-200 space-y-4">
              <a
                href={BRAND_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <div className="text-xs text-stone-600 space-y-1">
                <p className="font-semibold text-stone-800">Madhuram Honey & Bee Farm</p>
                <p>Sawyerpuram & Coimbatore, Tamil Nadu</p>
                <p>Phone: {BRAND_INFO.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
