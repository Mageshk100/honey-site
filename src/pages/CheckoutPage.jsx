import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, Lock, Truck, ArrowLeft, Check, AlertCircle, 
  CreditCard, Banknote, MessageCircle, Info, ChevronRight, X 
} from 'lucide-react';
import { useCart, INDIAN_STATES } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { BRAND_INFO } from '../data/brandInfo';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const {
    items,
    subtotal,
    shippingAmount,
    discountAmount,
    grandTotal,
    weightInKg,
    totalItemsCount,
    selectedState,
    setSelectedState,
    coupon,
    clearCart,
    saveOrder
  } = useCart();

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: selectedState,
    pinCode: '',
    orderNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'online'
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [onlineModalOpen, setOnlineModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Secure Checkout - Madhurum Honey";
  }, []);

  // Sync state selection
  const handleStateChange = (e) => {
    const newState = e.target.value;
    setFormData(prev => ({ ...prev, state: newState }));
    setSelectedState(newState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (!formData.address.trim() || formData.address.trim().length < 8) {
      newErrors.address = 'Please enter a complete delivery address with door/street details';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city / town';
    }

    const cleanPin = formData.pinCode.replace(/\D/g, '');
    if (!cleanPin || cleanPin.length !== 6) {
      newErrors.pinCode = 'Please enter a valid 6-digit PIN code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (items.length === 0) {
      addToast('Your cart is empty. Please add products to checkout.', 'error');
      navigate('/shop');
      return;
    }

    if (!validateForm()) {
      addToast('Please complete all required shipping fields correctly.', 'error');
      return;
    }

    // If Online Payment is chosen, uphold the guideline:
    // "Never simulate a successful online payment. Integrate a payment gateway only when real credentials and backend support are configured."
    if (paymentMethod === 'online') {
      setOnlineModalOpen(true);
      return;
    }

    // Process Cash on Delivery Order
    setIsSubmitting(true);

    const orderId = `MDH-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      createdAt: new Date().toISOString(),
      customer: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pinCode,
        orderNotes: formData.orderNotes
      },
      items: [...items],
      pricing: {
        subtotal,
        shippingAmount,
        discountAmount,
        grandTotal,
        couponCode: coupon?.code || null
      },
      payment: {
        method: 'Cash on Delivery (COD)',
        status: 'Pending Collection Upon Delivery'
      },
      deliveryEstimate: '3 - 5 Business Days'
    };

    saveOrder(newOrder);
    clearCart();
    setIsSubmitting(false);
    addToast(`Order placed successfully! Order ID: ${orderId}`, 'success');
    navigate(`/order-confirmation?orderId=${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-cream py-16 px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-amber-200">
          <AlertCircle className="w-12 h-12 text-honey-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-stone-900">Your Cart is Empty</h2>
          <p className="text-stone-600 text-sm mt-2 mb-6">
            Please select pure honey products from our shop before checking out.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-honey-normal text-white rounded-xl font-bold text-sm"
          >
            Explore Honey Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-8">
          <Link to="/cart" className="flex items-center gap-1 hover:text-honey-normal">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Cart</span>
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-900 font-bold">Secure Delivery Checkout</span>
        </div>

        <form onSubmit={handleFormSubmit} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Customer & Shipping Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Delivery Address Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-amber-100">
                  <h2 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-honey-normal" />
                    <span>1. Shipping & Delivery Address</span>
                  </h2>
                  <span className="text-xs text-stone-500 font-medium">Step 1 of 2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      10-Digit Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-xs font-bold text-stone-400">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98765 43210"
                        className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Street Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Delivery Street Address (House No, Building, Street, Area) *
                    </label>
                    <textarea
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. 14B, Green Meadows Apartment, MG Road"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.address ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.address && <p className="text-xs text-rose-600 mt-1">{errors.address}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      City / District *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Coimbatore"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.city ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.city && <p className="text-xs text-rose-600 mt-1">{errors.city}</p>}
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Destination State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleStateChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-honey-normal bg-white"
                    >
                      {INDIAN_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* PIN Code */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      6-Digit PIN Code *
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      maxLength="6"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      placeholder="e.g. 641014"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.pinCode ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.pinCode && <p className="text-xs text-rose-600 mt-1">{errors.pinCode}</p>}
                  </div>

                  {/* Order Notes */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Order Notes (Optional)
                    </label>
                    <input
                      type="text"
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      placeholder="e.g. Call before delivery"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-honey-normal"
                    />
                  </div>

                </div>

              </div>

              {/* Payment Method Selection Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft space-y-5">
                
                <div className="flex items-center justify-between pb-4 border-b border-amber-100">
                  <h2 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-honey-normal" />
                    <span>2. Select Payment Method</span>
                  </h2>
                  <span className="text-xs text-stone-500 font-medium">Step 2 of 2</span>
                </div>

                <div className="space-y-3">
                  {/* Cash On Delivery Option */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-honey-normal bg-amber-50/60 ring-2 ring-honey-100'
                        : 'border-stone-200 hover:border-amber-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 text-honey-normal focus:ring-honey-normal"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900 text-sm flex items-center gap-2">
                          <Banknote className="w-4 h-4 text-emerald-600" />
                          Cash on Delivery (COD)
                        </span>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Available Nationwide
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Pay in cash or via mobile UPI QR scan directly to the delivery courier agent upon receiving your securely packaged honey jars.
                      </p>
                    </div>
                  </label>

                  {/* Online Payment Option */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'online'
                        ? 'border-honey-normal bg-amber-50/60 ring-2 ring-honey-100'
                        : 'border-stone-200 hover:border-amber-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                      className="mt-1 text-honey-normal focus:ring-honey-normal"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900 text-sm flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-honey-600" />
                          Online Payment (UPI, Cards & Net Banking)
                        </span>
                        <span className="text-[11px] font-medium text-stone-500">
                          Gateway Inquiry
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Secure instant online transaction or direct UPI settlement with our customer team.
                      </p>
                    </div>
                  </label>
                </div>

              </div>

            </div>

            {/* Right Column: Itemized Order Summary (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-soft space-y-5 sticky top-24">
                
                <h3 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-amber-100">
                  Order Summary ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
                </h3>

                {/* Items List */}
                <div className="max-h-60 overflow-y-auto divide-y divide-amber-50 pr-1 space-y-2">
                  {items.map((item) => (
                    <div key={item.variantKey} className="pt-2 first:pt-0 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 object-contain bg-amber-50 rounded-lg p-1 border border-amber-100"
                        />
                        <div>
                          <p className="font-bold text-stone-900 truncate max-w-[170px]">{item.name}</p>
                          <p className="text-[11px] text-stone-500">{item.variantSize} × {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-stone-900">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Calculation breakdown */}
                <div className="space-y-2.5 pt-4 border-t border-amber-100 text-xs sm:text-sm text-stone-600">
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
                        {formData.state} ({weightInKg} kg)
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
                    <span>Total Payable Amount</span>
                    <span className="text-xl font-serif font-extrabold text-stone-900">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-honey-normal hover:bg-honey-dark text-white rounded-2xl font-bold text-sm shadow-honey hover:shadow-honey-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? 'Processing Your Order...'
                      : paymentMethod === 'cod'
                      ? `Place Order (Cash on Delivery) • ₹${grandTotal}`
                      : `Continue with Online Payment`}
                  </span>
                </button>

                {/* Safety guarantees */}
                <div className="pt-2 text-center space-y-1 text-[11px] text-stone-500">
                  <p className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Transit Glass Breakage Guarantee</span>
                  </p>
                  <p>Estimated Delivery: 3 to 5 Business Days</p>
                </div>

              </div>

            </div>

          </div>
        </form>

      </div>

      {/* Online Payment Integration Notice Modal */}
      {onlineModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Payment Gateway Notice"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs animate-in fade-in"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-amber-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg">
                <Info className="w-5 h-5 text-honey-600" />
                <span>Online Payment Gateway Notice</span>
              </div>
              <button
                onClick={() => setOnlineModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-stone-600 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>
                In strict adherence to real-world e-commerce standards, automated online debit/credit card and payment gateway capture (Razorpay/PayTM) requires active production credentials and merchant backend server routing.
              </p>
              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-amber-950 font-medium text-xs">
                💡 <strong>Recommended immediate options:</strong>
                <ul className="list-disc pl-4 mt-1.5 space-y-1 text-xs">
                  <li><strong>Cash on Delivery (COD):</strong> Place your order now with 1-click and pay in cash or via UPI scan when your parcel arrives!</li>
                  <li><strong>Direct WhatsApp Transfer:</strong> Pay via official Google Pay / PhonePe directly to Madhurum Honey and share your screenshot.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod('cod');
                  setOnlineModalOpen(false);
                  addToast('Switched payment method to Cash on Delivery (COD)', 'info');
                }}
                className="w-full py-3 px-4 bg-honey-normal hover:bg-honey-dark text-white rounded-xl text-xs font-bold shadow-xs transition-all"
              >
                Switch to Cash on Delivery (COD)
              </button>

              <a
                href={`https://wa.me/919566610023?text=Hi%20Madhuram%20Honey,%20I%20would%20like%20to%20complete%20online%20payment%20of%20Rs.${grandTotal}%20for%20my%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pay via WhatsApp UPI</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
