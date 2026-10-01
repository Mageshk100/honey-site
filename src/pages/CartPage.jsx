import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Trash2, ShoppingBag, ArrowRight, ArrowLeft, Truck, 
  Sparkles, Tag, Check, ShieldCheck, MapPin, AlertCircle 
} from 'lucide-react';
import { useCart, INDIAN_STATES } from '../context/CartContext';
import EmptyState from '../components/common/EmptyState';

export default function CartPage() {
  const navigate = useNavigate();
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shippingAmount,
    discountAmount,
    grandTotal,
    isFreeShipping,
    freeShippingRemaining,
    totalWeightGrams,
    weightInKg,
    totalItemsCount,
    selectedState,
    setSelectedState,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Shopping Cart (${totalItemsCount}) - Madhurum Honey`;
  }, [totalItemsCount]);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const result = applyCoupon(couponInput);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponInput('');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-cream py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <EmptyState
            title="Your Honey Jar is Empty"
            description="You haven't added any pure honey jars to your cart yet. Explore our raw multi-floral, moringa, and infused varieties to get started."
            actionText="Start Shopping Honey"
            actionLink="/shop"
          />
        </div>
      </div>
    );
  }

  // Progress for free shipping bar (up to ₹2000)
  const freeShippingProgress = Math.min(100, Math.round((subtotal / 2000) * 100));

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Your Shopping Cart
            </h1>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              You have <strong className="text-stone-800">{totalItemsCount}</strong> {totalItemsCount === 1 ? 'jar' : 'jars'} in your honey basket ({totalWeightGrams}g total weight)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>

            <button
              onClick={clearCart}
              className="text-xs text-rose-600 hover:text-rose-800 font-medium px-3 py-1.5 rounded-lg hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-soft mb-8">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="flex items-center gap-2 text-stone-800">
              <Truck className="w-4 h-4 text-honey-600" />
              {isFreeShipping ? (
                <span className="text-emerald-700 font-bold">🎉 You've unlocked FREE Shipping!</span>
              ) : (
                <span>Add <strong className="text-honey-normal">₹{freeShippingRemaining}</strong> more pure honey to get <strong>FREE Delivery</strong> across India!</span>
              )}
            </span>
            <span className="text-stone-500">{freeShippingProgress}%</span>
          </div>

          <div className="w-full bg-amber-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-honey-normal to-amber-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Layout: Items List (8 cols) + Summary (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Items Table / Cards */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-amber-100 shadow-soft divide-y divide-amber-100">
            {items.map((item) => (
              <div
                key={item.variantKey}
                className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
              >
                {/* Product Info with Image */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Link
                    to={`/product/${item.slug}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-b from-amber-50 to-amber-100/40 rounded-2xl p-2 shrink-0 border border-amber-200/80 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </Link>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-honey-600">
                      {item.categoryName}
                    </span>
                    <Link to={`/product/${item.slug}`}>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base hover:text-honey-normal transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="text-xs text-stone-500 flex items-center gap-2">
                      <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md font-medium border border-amber-200/60">
                        Weight: {item.variantSize}
                      </span>
                      <span>•</span>
                      <span>₹{item.price} / jar</span>
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-50">
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-amber-200 rounded-xl bg-amber-50/50 shadow-2xs overflow-hidden">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.variantKey, item.quantity - 1)}
                      className="px-2.5 py-1 text-stone-600 hover:bg-amber-100 font-bold text-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-stone-900 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.variantKey, item.quantity + 1)}
                      className="px-2.5 py-1 text-stone-600 hover:bg-amber-100 font-bold text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[5rem]">
                    <div className="text-base font-extrabold text-stone-900">
                      ₹{item.price * item.quantity}
                    </div>
                    {item.originalPrice && (
                      <div className="text-[11px] text-stone-400 line-through">
                        ₹{item.originalPrice * item.quantity}
                      </div>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.variantKey)}
                    className="text-stone-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Shipping Estimator Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-soft space-y-5">
              
              <h2 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-amber-100">
                Order Summary
              </h2>

              {/* State Shipping Selector */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-honey-600" />
                  <span>Delivery Destination State:</span>
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-amber-50/50 border border-amber-200 text-stone-800 text-xs font-medium rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-honey-normal"
                >
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state} {state === 'Tamil Nadu' ? '(Local Apiary Zone)' : ''}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-500">
                  Total parcel weight: <strong>{weightInKg} kg</strong> (calculated at checkout)
                </p>
              </div>

              {/* Coupon Code Section */}
              <div className="pt-2 border-t border-amber-100">
                {coupon ? (
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-bold">{coupon.code}</span>
                        <p className="text-[10px] text-emerald-700">{coupon.label}</p>
                      </div>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-stone-500 hover:text-stone-800 text-xs font-bold underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Have a Coupon Code?
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="e.g. MADHURUM10"
                        className="flex-1 uppercase bg-amber-50/50 border border-amber-200 rounded-xl px-3 py-2 text-xs font-mono font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-honey-normal"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-xs text-rose-600">{couponError}</p>
                    )}
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                      <Sparkles className="w-3 h-3 text-honey-600" />
                      <span>Use <strong className="font-mono text-stone-700">MADHURUM10</strong> for 10% off</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2.5 pt-3 border-t border-amber-100 text-xs sm:text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({coupon?.code})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    <span>Shipping Charges</span>
                    <span className="text-[10px] text-stone-400 block">
                      {isFreeShipping ? 'Order > ₹2,000' : `${selectedState} (${weightInKg} kg)`}
                    </span>
                  </div>
                  <span className="font-semibold text-stone-900">
                    {shippingAmount === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase text-xs">FREE</span>
                    ) : (
                      `₹${shippingAmount}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-amber-200 text-base font-bold text-stone-900">
                  <span>Total Amount</span>
                  <span className="text-xl font-serif font-extrabold text-stone-900">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full py-4 px-6 bg-honey-normal hover:bg-honey-dark text-white rounded-2xl font-bold text-sm shadow-honey hover:shadow-honey-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <p className="text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Safe & Secure Packaging • Cash on Delivery Available</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
