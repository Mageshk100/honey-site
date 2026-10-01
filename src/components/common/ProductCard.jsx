import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(() => {
    const popularIndex = product.variants.findIndex(v => v.isPopular);
    return popularIndex > -1 ? popularIndex : 0;
  });
  const [isAdded, setIsAdded] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, currentVariant, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const discountPercent = currentVariant.originalPrice
    ? Math.round(((currentVariant.originalPrice - currentVariant.price) / currentVariant.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-3xl border border-amber-100 hover:border-amber-300 shadow-soft hover:shadow-honey transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Image Container */}
      <Link 
        to={`/product/${product.slug}`} 
        className="relative block aspect-square bg-gradient-to-b from-amber-50/70 to-amber-100/40 p-6 overflow-hidden cursor-pointer"
      >
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-amber-500 text-white shadow-xs">
            {product.badge}
          </span>
        )}

        {discountPercent > 0 && (
          <span className="absolute top-3.5 right-3.5 z-10 px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            {discountPercent}% OFF
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Quick View Hover Tag */}
        <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="bg-white/95 text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-honey-600" />
            View Details
          </span>
        </div>
      </Link>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Tamil Name */}
          <div className="flex items-center justify-between gap-2 text-xs text-amber-800/80 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">
              {product.categoryName}
            </span>
            {product.tamilName && (
              <span className="text-[11px] text-stone-500 font-medium truncate">
                {product.tamilName}
              </span>
            )}
          </div>

          {/* Title */}
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-bold text-stone-900 text-base leading-snug group-hover:text-honey-normal transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mt-1.5 mb-2.5">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-amber-100 text-amber-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-800">{product.rating}</span>
            <span className="text-[11px] text-stone-500">({product.reviewCount})</span>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Variants & Action Area */}
        <div className="pt-2 border-t border-amber-100/80">
          
          {/* Weight variant pills */}
          <div className="flex items-center gap-1.5 mb-3 flex-wrap">
            <span className="text-[11px] font-medium text-stone-500 mr-1">Weight:</span>
            {product.variants.map((variant, index) => (
              <button
                key={variant.size}
                type="button"
                onClick={() => setSelectedVariantIndex(index)}
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-lg border transition-all ${
                  selectedVariantIndex === index
                    ? 'bg-amber-100 text-amber-950 border-amber-500 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-amber-50/50'
                }`}
              >
                {variant.size}
              </button>
            ))}
          </div>

          {/* Pricing & Add to Cart Button */}
          <div className="flex items-center justify-between gap-3 mt-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold text-stone-900">
                  ₹{currentVariant.price}
                </span>
                {currentVariant.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ₹{currentVariant.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-emerald-700 font-medium">In Stock • Raw</span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`relative inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-honey-normal hover:bg-honey-dark text-white shadow-honey/30 hover:shadow-honey'
              }`}
              aria-label={`Add ${product.name} ${currentVariant.size} to cart`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
