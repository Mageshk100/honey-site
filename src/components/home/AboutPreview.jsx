import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url('/assets/honeycomb-Dve-Y5Qw.png')`, backgroundRepeat: 'repeat' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Farm Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Farm Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/60 aspect-4/3 group">
              <img
                src="/assets/Homea1-BXfUOH0T.jpg"
                alt="Madhuram Honey Farm Apiary"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-honey-400 font-semibold text-xs tracking-wider uppercase mb-1">
                  Our Natural Apiary
                </span>
                <p className="text-white text-base sm:text-lg font-serif font-bold">
                  Managing 2,000+ Beehives In Pristine Pastures
                </p>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-square border border-stone-800 shadow-md">
                <img
                  src="/assets/Homea2-BaeEHGee.jpg"
                  alt="Beekeeping inspection"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-stone-800 shadow-md">
                <img
                  src="/assets/Homea3-ZN1IhO53.jpg"
                  alt="Healthy honey combs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-stone-800 shadow-md">
                <img
                  src="/assets/Homea4-CDdZXS_r.jpg"
                  alt="Raw honey harvesting"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-500/10 border border-honey-500/30 text-honey-400 text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>The Journey of Our Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              From A Quest For Purity To 2,000 Thriving Beehives
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Born into an agricultural family in Sawyerpuram, Tuticorin district, founder Anath embarked on an 
              entrepreneurial journey after eight years in the private sector. The transition to becoming a professional 
              beekeeper was inspired by a simple yet profound question from customers: <strong className="text-honey-300">"Is this pure and original honey?"</strong>
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              This quest for uncompromised authenticity led him to Tamil Nadu Agricultural University (TNAU) for formal apiculture training. Today, Madhurum Natural Honey and Farm oversees 2,000 beehives, harvesting over 3,000 kg of pure multiflower honey monthly while empowering local farming communities through free beekeeping workshops.
            </p>

            {/* Credibility points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-300 font-medium">
                  100% authentic honey from our own maintained beehives
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-300 font-medium">
                  Free training for local farmers to expand apiculture knowledge
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-300 font-medium">
                  3,000 kg of unpasteurized, lab-certified raw honey produced monthly
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-honey-normal hover:bg-honey-dark text-white rounded-xl font-bold text-sm shadow-honey transition-all"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
