import React, { useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, PackageCheck, Printer, ArrowRight, 
  MessageCircle, MapPin, Truck, Calendar, Phone, Mail 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/brandInfo';

export default function OrderConfirmationPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();
  const { getOrderById } = useCart();

  const order = orderId ? getOrderById(orderId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Order Confirmation #${orderId || ''} - Madhurum Honey`;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f7941d', '#f59e0b', '#d97706', '#10b981', '#fbbf24']
      });
    } catch (e) {
      // Fallback silently if canvas-confetti is not loaded
    }
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  // If no order found in storage, render fallback message
  if (!order) {
    return (
      <div className="min-h-screen bg-warm-cream py-16 px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-amber-200">
          <PackageCheck className="w-12 h-12 text-honey-600 mx-auto mb-3" />
          <h2 className="text-xl font-serif font-bold text-stone-900">Order Placed</h2>
          <p className="text-stone-600 text-sm mt-2 mb-6">
            Thank you for ordering with Madhurum Honey! If you placed an order recently, our dispatch team is currently preparing your natural honey jars.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-honey-normal text-white rounded-xl font-bold text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const { customer, items, pricing, payment, deliveryEstimate } = order;

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Success Badge */}
        <div className="text-center mb-8 print:hidden">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-soft">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-honey-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Order Confirmed & Received
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            Thank You, {customer.fullName}!
          </h1>
          <p className="text-stone-600 text-sm mt-1 max-w-md mx-auto">
            Your fresh, unadulterated honey order has been successfully placed. We're getting your packages ready for secure dispatch from our Coimbatore apiary.
          </p>
        </div>

        {/* Printable Order Receipt Card */}
        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-soft p-6 sm:p-10 space-y-8 print:border-none print:shadow-none print:p-0">
          
          {/* Receipt Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-100">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/navbar-B0ors2B9.png"
                  alt="Madhuram Honey"
                  className="h-10 w-auto"
                />
                <span className="font-serif font-bold text-xl text-stone-900">
                  Madhuram Honey
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Tax Invoice / Order Confirmation
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-stone-500 block">Order Reference ID</span>
              <span className="font-mono text-base sm:text-lg font-bold text-stone-900">
                #{order.id}
              </span>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* Quick Info Grid: Delivery & Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-50/50 rounded-2xl p-5 border border-amber-100">
            
            {/* Delivery details */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-honey-600" />
                <span>Shipping Address</span>
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-stone-900">
                {customer.fullName}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {customer.address}, {customer.city}, {customer.state} - {customer.pinCode}
              </p>
              <p className="text-xs text-stone-600 flex items-center gap-3 pt-1">
                <span>Phone: {customer.phone}</span>
                <span>•</span>
                <span>Email: {customer.email}</span>
              </p>
            </div>

            {/* Payment & Transit info */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-honey-600" />
                <span>Shipment & Payment Status</span>
              </h3>
              <div className="text-xs space-y-1">
                <p>
                  <strong>Payment Mode:</strong> {payment.method}
                </p>
                <p className="text-emerald-700 font-semibold">
                  <strong>Status:</strong> {payment.status}
                </p>
                <p className="text-stone-600">
                  <strong>Estimated Delivery:</strong> {deliveryEstimate}
                </p>
                {customer.orderNotes && (
                  <p className="text-stone-500 italic">
                    <strong>Note:</strong> "{customer.orderNotes}"
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Itemized Table */}
          <div>
            <h3 className="font-bold text-sm text-stone-900 mb-3">Purchased Items</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-amber-200 text-stone-500 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-2.5">Item</th>
                    <th className="py-2.5">Variant</th>
                    <th className="py-2.5 text-center">Qty</th>
                    <th className="py-2.5 text-right">Price</th>
                    <th className="py-2.5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-50 text-stone-800">
                  {items.map((item) => (
                    <tr key={item.variantKey}>
                      <td className="py-3 font-medium flex items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-8 h-8 object-contain bg-amber-50 rounded-lg p-0.5 print:hidden"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="py-3 text-stone-600">{item.variantSize}</td>
                      <td className="py-3 text-center">{item.quantity}</td>
                      <td className="py-3 text-right">₹{item.price}</td>
                      <td className="py-3 text-right font-bold">₹{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Breakdown */}
          <div className="flex flex-col sm:flex-row sm:justify-end border-t border-amber-100 pt-4">
            <div className="w-full sm:w-64 space-y-2 text-xs sm:text-sm text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-stone-900">₹{pricing.subtotal}</span>
              </div>
              {pricing.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount:</span>
                  <span>-₹{pricing.discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span className="font-semibold text-stone-900">
                  {pricing.shippingAmount === 0 ? 'FREE' : `₹${pricing.shippingAmount}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-amber-200">
                <span>Total Amount:</span>
                <span className="text-lg font-serif font-extrabold text-stone-900">
                  ₹{pricing.grandTotal}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
          
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-amber-50 text-stone-800 rounded-xl font-bold text-sm border border-amber-300 shadow-soft transition-all"
          >
            <Printer className="w-4 h-4 text-honey-600" />
            <span>Print Invoice</span>
          </button>

          <a
            href={`https://wa.me/919566610023?text=Hi%20Madhuram%20Honey,%20I%20have%20placed%20Order%20${order.id}.%20Please%20confirm%20dispatch.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-soft transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Track on WhatsApp</span>
          </a>

          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-honey-normal hover:bg-honey-dark text-white rounded-xl font-bold text-sm shadow-honey transition-all"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </div>
  );
}
