import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, 
  Clock, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';
import { useToast } from '../context/ToastContext';
import SectionHeading from '../components/common/SectionHeading';

export default function ContactPage() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'product',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Madhurum Honey and Bee Farm";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = 'Please provide a message with at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast('Please fill out all required fields properly.', 'error');
      return;
    }

    setSubmitted(true);
    addToast('Your message has been sent to our apiary team. We will get back to you shortly!', 'success');
  };

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Heading */}
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Madhurum Honey & Farm"
          description="Have inquiries regarding bulk honey orders, farmer beekeeping training, product details, or your shipment? We are always here to assist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft space-y-6">
              <h3 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-amber-100">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-honey-600 shrink-0 border border-amber-200/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                      Store & Office Location
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {BRAND_INFO.contact.address.line1},<br />
                      {BRAND_INFO.contact.address.line2},<br />
                      {BRAND_INFO.contact.address.landmark},<br />
                      {BRAND_INFO.contact.address.city} - {BRAND_INFO.contact.address.pinCode},<br />
                      {BRAND_INFO.contact.address.state}, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-honey-600 shrink-0 border border-amber-200/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                      Customer Support
                    </h4>
                    <p className="mt-1">
                      <a 
                        href={`tel:${BRAND_INFO.contact.phoneRaw}`} 
                        className="text-stone-900 font-semibold hover:text-honey-normal transition-colors"
                      >
                        {BRAND_INFO.contact.phone}
                      </a>
                    </p>
                    <p className="text-[11px] text-stone-500">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-honey-600 shrink-0 border border-amber-200/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                      Direct Email
                    </h4>
                    <p className="mt-1">
                      <a 
                        href={`mailto:${BRAND_INFO.contact.email}`} 
                        className="text-stone-900 font-semibold hover:text-honey-normal transition-colors break-all"
                      >
                        {BRAND_INFO.contact.email}
                      </a>
                    </p>
                    <p className="text-[11px] text-stone-500">Responses within 24 business hours</p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Call-to-action */}
              <div className="pt-4 border-t border-amber-100">
                <a
                  href={BRAND_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm shadow-soft transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

            {/* Farm & Operating Notice */}
            <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200/80 space-y-2 text-xs text-amber-950">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <Clock className="w-4 h-4 text-honey-600" />
                <span>Apiary Visits & Farmer Workshops</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Apiary visits and farmer training sessions are organized by prior appointment at our Sawyerpuram and Coimbatore farms to ensure bee safety and biosecurity protocols.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-soft">
            
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
              Send Us A Message
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Fill in the form below and beekeeper Anath or our customer care team will respond promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-stone-900 font-serif">Message Sent Successfully!</h4>
                <p className="text-stone-600 text-sm max-w-sm mx-auto">
                  Thank you for reaching out to Madhurum Honey. We have received your inquiry and will contact you via email or phone shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', inquiryType: 'product', message: '' });
                  }}
                  className="px-6 py-2.5 bg-honey-normal text-white rounded-xl text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anand Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
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
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-honey-normal"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-honey-normal bg-white"
                    >
                      <option value="product">Honey Product Details</option>
                      <option value="bulk">Bulk / Wholesale Honey Order</option>
                      <option value="training">Farmer Beekeeping Workshop</option>
                      <option value="order-status">Order & Delivery Query</option>
                      <option value="other">General Feedback / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you would like to know or how we can help you..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-rose-400 ring-rose-200' : 'border-stone-300 focus:ring-honey-normal'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-honey-normal hover:bg-honey-dark text-white rounded-xl font-bold text-sm shadow-honey transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Visit Our Coimbatore Store Location
              </h3>
              <p className="text-xs text-stone-500">
                123-A, 1st Floor, 5th Street, Nehru Nagar (West), Kalapatti Main Rd, Opposite KVB Bank, Coimbatore
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kalapatti+Main+Road+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-honey-600 hover:text-honey-800 underline"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-amber-200">
            <iframe
              title="Madhuram Honey Store Location"
              src={BRAND_INFO.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
