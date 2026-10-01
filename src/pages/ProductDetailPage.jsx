import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, ShoppingBag, Truck, ShieldCheck, Heart, Share2, 
  Check, ArrowRight, Droplet, Sparkles, MessageCircle, 
  ChevronRight, AlertCircle, Info, RefreshCw 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BRAND_INFO } from '../data/brandInfo';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/common/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} - Madhurum Honey`;
      setActiveImage(product.image);
      // Default to popular variant if available
      const popIdx = product.variants.findIndex(v => v.isPopular);
      setSelectedVariantIndex(popIdx > -1 ? popIdx : 0);
      setQuantity(1);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen py-20 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link to="/shop" className="text-honey-normal underline mt-4 inline-block">Return to Shop</Link>
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, currentVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addToCart(product, currentVariant, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} - Madhurum Honey`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Product link copied to clipboard!', 'info');
    }
  };

  // Related products from same category or general
  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const discountPercent = currentVariant.originalPrice
    ? Math.round(((currentVariant.originalPrice - currentVariant.price) / currentVariant.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-warm-cream py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/" className="hover:text-honey-normal transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-honey-normal transition-colors">Shop Honey</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-honey-normal transition-colors">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 font-semibold">{product.name}</span>
        </nav>

        {/* Top Product Section: Image Gallery & Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-soft">
          
          {/* Gallery Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Main Image */}
            <div className="relative aspect-square rounded-3xl bg-gradient-to-b from-amber-50/70 to-amber-100/40 border border-amber-200/80 p-8 flex items-center justify-center overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-honey-normal text-white shadow-xs">
                  {product.badge}
                </span>
              )}

              {discountPercent > 0 && (
                <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                  Save {discountPercent}%
                </span>
              )}

              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-xl transition-all duration-300"
              />
            </div>

            {/* Thumbnail Selectors */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl p-2 bg-amber-50/50 border-2 transition-all overflow-hidden ${
                      activeImage === img
                        ? 'border-honey-normal shadow-xs ring-2 ring-honey-100'
                        : 'border-amber-200/60 hover:border-amber-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Farm Authenticity Note */}
            <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/70 flex items-center gap-3 text-xs text-amber-950">
              <Sparkles className="w-5 h-5 text-honey-600 shrink-0" />
              <div>
                <strong>Single-Source Raw Honey:</strong> Harvested from our 2,000 beehives in Tamil Nadu. Zero ultra-filtration or heating.
              </div>
            </div>

          </div>

          {/* Product Details & Actions Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category & Tamil Name */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-honey-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                  {product.categoryName}
                </span>

                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-amber-50 transition-colors"
                  title="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Product Titles */}
              <div>
                <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                  {product.name}
                </h1>
                {product.tamilName && (
                  <p className="text-sm font-medium text-amber-800 mt-1">
                    {product.tamilName}
                  </p>
                )}
              </div>

              {/* Rating & Reviews Bar */}
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-100 text-amber-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-stone-800">{product.rating}</span>
                <span className="text-stone-400">•</span>
                <span className="text-stone-600 underline cursor-pointer">
                  {product.reviewCount} customer reviews
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-emerald-700 font-semibold text-xs flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 100% Original
                </span>
              </div>

              {/* Price Banner */}
              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
                  ₹{currentVariant.price}
                </span>
                {currentVariant.originalPrice && (
                  <>
                    <span className="text-lg text-stone-400 line-through">
                      ₹{currentVariant.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      Save ₹{currentVariant.originalPrice - currentVariant.price}
                    </span>
                  </>
                )}
                <span className="text-xs text-stone-500 ml-auto">Inclusive of all taxes</span>
              </div>

              {/* Short Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variant Selector */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-800 uppercase tracking-wider">
                    Select Jar Weight:
                  </span>
                  <span className="text-stone-500">
                    Selected: <strong>{currentVariant.size}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`relative p-3 rounded-2xl border text-left transition-all ${
                        selectedVariantIndex === idx
                          ? 'border-honey-normal bg-amber-50/90 ring-2 ring-honey-200 shadow-xs'
                          : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      {v.isPopular && (
                        <span className="absolute -top-2 right-2 text-[9px] uppercase tracking-wider font-bold bg-honey-normal text-white px-1.5 py-0.2 rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="font-bold text-xs text-stone-900">{v.size}</div>
                      <div className="text-xs font-semibold text-honey-700 mt-0.5">₹{v.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Stock Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">Quantity:</span>
                  <div className="flex items-center border border-amber-300 rounded-xl bg-white shadow-xs overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3.5 py-2 text-stone-600 hover:bg-amber-50 text-sm font-bold"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm font-bold text-stone-900 min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3.5 py-2 text-stone-600 hover:bg-amber-50 text-sm font-bold"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>In Stock (Fresh Hive Harvest)</span>
                </div>

              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm transition-all shadow-honey active:scale-98 ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-honey-normal hover:bg-honey-dark text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added To Your Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add To Cart • ₹{currentVariant.price * quantity}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm bg-stone-900 hover:bg-stone-800 text-white shadow-soft transition-all active:scale-98"
                >
                  <span>Buy Now (Fast Checkout)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* WhatsApp Quick Ask */}
              <div className="pt-2 text-center">
                <a
                  href={`https://wa.me/919566610023?text=Hi%20Madhuram%20Honey,%20I%20have%20a%20question%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Have questions about this honey? Chat with Beekeeper Anath on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Trust highlights footer */}
            <div className="pt-6 border-t border-amber-100 grid grid-cols-3 gap-3 text-center text-[11px] text-stone-600">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-honey-600" />
                <span>Free Ship &gt; ₹2,000</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-honey-600" />
                <span>Damage Guarantee</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Droplet className="w-4 h-4 text-honey-600" />
                <span>100% Raw Nectar</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Benefits, Ingredients, Storage & Shipping */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-soft">
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-3 sm:gap-6 border-b border-amber-100 overflow-x-auto pb-3 mb-8">
            {[
              { id: 'benefits', label: 'Health Benefits' },
              { id: 'details', label: 'Full Description & Flora' },
              { id: 'nutrition', label: 'Ingredients & Nutrition' },
              { id: 'storage', label: 'Storage & Crystallization' },
              { id: 'shipping', label: 'Packaging & Delivery' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-bold pb-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-honey-normal text-honey-normal'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl space-y-6">
            {activeTab === 'benefits' && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Natural Health Benefits of {product.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Unlike commercial supermarket honey that has been heated to extreme temperatures, Madhurum raw honey preserves its native therapeutic compounds:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {product.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-4 animate-in fade-in text-sm text-stone-600 leading-relaxed">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Harvest Details & Origin
                </h3>
                <p>{product.fullDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-amber-100">
                  <div>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">Flora Source:</span>
                    <span className="text-stone-700">{product.floraSource}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">Harvest Location:</span>
                    <span className="text-stone-700">{product.harvestLocation}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">Color & Hue:</span>
                    <span className="text-stone-700">{product.color}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">Taste Profile:</span>
                    <span className="text-stone-700">{product.tasteProfile}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Ingredients & Nutritional Facts
                </h3>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-sm text-stone-800">
                  <strong>Ingredients:</strong> {product.ingredients}
                </div>
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-sm border-collapse border border-amber-100 rounded-2xl overflow-hidden">
                    <thead className="bg-amber-100/70 text-amber-950 font-bold text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3 border-b border-amber-200">Nutrient (per 100g)</th>
                        <th className="p-3 border-b border-amber-200">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100 text-stone-700">
                      {Object.entries(product.nutritionPer100g).map(([key, val]) => (
                        <tr key={key} className="hover:bg-amber-50/50">
                          <td className="p-3 capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                          <td className="p-3 font-semibold text-stone-900">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-4 animate-in fade-in text-sm text-stone-600 leading-relaxed">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Storage & Natural Crystallization
                </h3>
                <p><strong>Storage Guidelines:</strong> {product.storage}</p>
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <Info className="w-4 h-4 text-honey-600" />
                    <span>Why Crystallization Is A Sign Of Purity:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Pure honey has natural glucose and fructose. As raw honey is never heated, natural pollen grains act as nucleation sites where crystals gently form in cooler weather. This proves the honey has not been adulterated with corn syrup or damaged by high boiling! If you prefer a runny consistency, simply place your jar in a bowl of warm water (under 40°C) for a few minutes.
                  </p>
                </div>
                <p className="text-xs text-stone-500">
                  Shelf life: {product.shelfLife}. Always use a clean, dry spoon.
                </p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4 animate-in fade-in text-sm text-stone-600 leading-relaxed">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Safe Packaging & Shipping Timelines
                </h3>
                <p>
                  Honey jars are fragile and precious. We use heavy-duty biodegradable honeycomb wrap and reinforced outer cartons to ensure zero damage in transit.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700">
                  <li><strong>Free Delivery:</strong> All orders of ₹2,000 and above qualify for 100% Free Shipping.</li>
                  <li><strong>Transit Time:</strong> 3 to 5 business days for major metropolitan hubs; 5 to 7 days for regional locations.</li>
                  <li><strong>Tracking:</strong> Complete shipment tracking details are dispatched via email and WhatsApp once the package leaves our Coimbatore apiary depot.</li>
                  <li><strong>Damage Guarantee:</strong> In the rare event of transit breakage, notify us within 24 hours with photos for an immediate free replacement.</li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Related Products Section */}
        <div className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-honey-600">You Might Also Love</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Other Hive Treasures</h2>
            </div>
            <Link to="/shop" className="text-xs sm:text-sm font-bold text-honey-600 hover:text-honey-800 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
