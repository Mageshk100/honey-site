import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-cream via-amber-50/50 to-warm-bg pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-amber-100">
      
      {/* Decorative Honeycomb & Leaf Background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20"
        style={{ backgroundImage: `url('/assets/honeycomb-Dve-Y5Qw.png')`, backgroundRepeat: 'repeat' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none transform -translate-x-20 translate-y-20"
        style={{ backgroundImage: `url('/assets/honeycomb-Dve-Y5Qw.png')`, backgroundRepeat: 'repeat' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-honey-normal" />
              <span>Straight From 2,000+ Beehives In Tamil Nadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Pure, Raw & Natural Honey,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey-normal via-amber-600 to-honey-800">
                Straight From Hive
              </span>{' '}
              To Your Home.
            </h1>

            {/* Supporting Text */}
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Harvested with care by certified beekeeper Anath and team. 
              No boiling, no ultra-filtration, no artificial sugar syrup — just pure, living honey packed 
              with native enzymes, minerals, and pristine nectar.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Unpasteurized</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bee-Friendly Harvester</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lab Tested Purity</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-honey-normal hover:bg-honey-dark text-white rounded-2xl font-bold text-base shadow-honey hover:shadow-honey-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Shop Pure Honey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-amber-50 text-stone-800 border border-amber-200 rounded-2xl font-bold text-base shadow-soft hover:border-amber-300 transition-all duration-300"
              >
                <span>Read Our Story</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-amber-200/60 max-w-xl mx-auto lg:mx-0">
              {BRAND_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-500 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-amber-300/40 via-honey-normal/30 to-amber-100/50 filter blur-2xl transform -translate-y-6" />

            {/* Main Visual Card */}
            <div className="relative w-full max-w-md bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-[36px] shadow-honey border border-amber-100 flex flex-col items-center">
              
              {/* Product Jar */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img
                  src="/assets/wildforesthoney-Dk_XVgTC.png"
                  alt="Madhuram Wild Forest Honey Jar"
                  className="w-full h-full object-contain filter drop-shadow-2xl animate-float"
                />
              </div>

              {/* Floating Award Chip */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-white p-3 rounded-2xl shadow-lg border border-amber-200 flex items-center gap-2.5 animate-bounce-subtle">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-honey-600">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left pr-1">
                  <p className="text-[11px] font-bold text-stone-900 leading-tight">Best Organic Honey</p>
                  <p className="text-[10px] text-stone-500">2023 Award</p>
                </div>
              </div>

              {/* Floating Purity Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-amber-200 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">Zero Adulteration</p>
                  <p className="text-[10px] text-emerald-700">TNAU University Trained</p>
                </div>
              </div>

              {/* Bottom Card Title */}
              <div className="text-center mt-2">
                <p className="font-serif font-bold text-lg text-stone-900">Wild Forest Raw Honey</p>
                <p className="text-xs text-stone-500">Multifloral nectar gathered from pristine forest blooms</p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-honey-600">
                  <span>Starts at ₹349</span>
                  <span>•</span>
                  <span>Free Shipping on ₹2000+</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
