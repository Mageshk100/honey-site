import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, ShieldCheck, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Award-Winning Purity</h4>
              <p className="text-xs text-stone-400 mt-0.5">Best Organic Honey 2023 & FSSAI certified lab tested.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">100% Raw & Unpasteurized</h4>
              <p className="text-xs text-stone-400 mt-0.5">No artificial heating, no added sugar syrup, no ultra-filtration.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Ethical Beekeeping</h4>
              <p className="text-xs text-stone-400 mt-0.5">2,000+ beehives managed with bee-friendly protocols & farmer support.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/assets/navbar-B0ors2B9.png"
                alt="Madhuram Honey"
                className="h-12 w-auto bg-white/10 p-1 rounded-xl backdrop-blur-xs"
              />
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tight">Madhuram Honey</span>
                <p className="text-xs text-honey-400 font-medium">Madhuram Natural Honey & Bee Farm</p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Delivering 100% pure and natural honey, straight from our maintained beehives to your home. 
              Our commitment to sustainable apiculture, traditional beekeeping, and zero-adulteration ensures 
              the finest honey products in every jar.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-honey-normal hover:text-white flex items-center justify-center text-stone-300 transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-honey-normal hover:text-white flex items-center justify-center text-stone-300 transition-colors"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a
                href={BRAND_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-honey-normal hover:text-white flex items-center justify-center text-stone-300 transition-colors"
                aria-label="YouTube"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
              <a
                href={BRAND_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-stone-300 transition-colors"
                aria-label="WhatsApp"
              >
                <span className="font-bold text-xs">wa</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Founder & Our Story
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Purity & FAQs
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Policies & Care</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/shipping-policy" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-stone-400 hover:text-honey-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-honey-400 shrink-0 mt-1" />
                <span className="leading-snug">
                  {BRAND_INFO.contact.address.line1}, {BRAND_INFO.contact.address.landmark}, {BRAND_INFO.contact.address.city} - {BRAND_INFO.contact.address.pinCode}, {BRAND_INFO.contact.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-honey-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.contact.phoneRaw}`} className="hover:text-honey-400 transition-colors">
                  {BRAND_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-honey-400 shrink-0" />
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-honey-400 transition-colors break-all">
                  {BRAND_INFO.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BRAND_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Direct WhatsApp Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>FSSAI Certified</span>
            <span>•</span>
            <span>TNAU Trained Apiculture</span>
            <span>•</span>
            <span>100% Authentic Indian Honey</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
