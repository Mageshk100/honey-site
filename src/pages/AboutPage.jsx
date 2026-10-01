import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Award, HeartHandshake, Trees, ShieldCheck, 
  ArrowRight, Users, Sparkles, MapPin 
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';
import SectionHeading from '../components/common/SectionHeading';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story & Bee Farm - Madhurum Honey";
  }, []);

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-honey-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            About Madhurum Honey & Bee Farm
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Where Pure Honey Meets Passion, Science & Tradition
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Welcome to Madhurum Natural Honey and Farm. We manage over 2,000 beehives across the pristine agricultural landscapes of Tamil Nadu, producing 100% authentic, raw, unheated honey with a zero-adulteration promise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl p-8 border border-amber-100 shadow-soft">
          {BRAND_INFO.stats.map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-900">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-bold text-amber-900">{stat.label}</p>
              <p className="text-[11px] text-stone-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-honey-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
              The Journey of Our Founder
            </span>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Anath — From Sawyerpuram Roots to Master Beekeeper
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Born into an agricultural family in <strong className="text-stone-900">Sawyerpuram, Tuticorin district</strong>, founder Anath embarked on an entrepreneurial journey after eight years in the private corporate sector.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              His first agricultural venture into oyster mushroom farming in Madurai taught him valuable fundamentals about organic ecosystems and commercial sustainability. However, during honey trading interactions, customers repeatedly asked one searching question:
            </p>

            {/* Quote Callout */}
            <div className="border-l-4 border-honey-normal pl-4 py-2 bg-amber-50/60 rounded-r-2xl text-stone-900 font-serif italic text-base sm:text-lg">
              "Is this pure and original honey?"
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              This pivotal question sparked a profound realization: the only true way to guarantee 100% purity is to oversee the entire beekeeping lifecycle directly. Anath enrolled at the renowned <strong className="text-stone-900">Tamil Nadu Agricultural University (TNAU)</strong> to receive professional apiculture training from the university's entomology department.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Despite severe initial setbacks — including the tragic loss of the first ten beehives — continuous scientific guidance from the university helped overcome these challenges. Today, Madhurum Natural Honey and Farm stands proud as a flourishing operation managing <strong className="text-stone-900">2,000 beehives</strong> producing over <strong className="text-stone-900">3,000 kg</strong> of pure multiflower honey monthly.
            </p>

          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-200 aspect-4/3 relative">
              <img
                src="/assets/Homea1-BXfUOH0T.jpg"
                alt="Founder Anath at Madhurum Honey Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-honey-300 font-bold text-sm">Anath</span>
                <span className="text-stone-300 text-xs">Founder, Madhurum Honey & Bee Farm</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-4/3 border border-amber-100 shadow-sm">
                <img
                  src="/assets/Homea2-BaeEHGee.jpg"
                  alt="Beekeeping inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-4/3 border border-amber-100 shadow-sm">
                <img
                  src="/assets/Homea3-ZN1IhO53.jpg"
                  alt="Honey frames"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Sustainable Beekeeping Practices */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-honey-400 bg-honey-500/10 px-3 py-1 rounded-full border border-honey-500/20">
              Ecological Stewardship
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-3">
              100% Bee-Friendly Harvesting Protocols
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 leading-relaxed">
              Honeybees are essential pollinators responsible for one-third of the world's food supply. At Madhurum Honey, bee welfare is our highest priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-800/60 rounded-2xl p-6 border border-stone-700/60 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Surplus Harvest Only</h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                We only extract surplus honey after ensuring the hive has more than enough honey and pollen reserves for winter and monsoon sustenance.
              </p>
            </div>

            <div className="bg-stone-800/60 rounded-2xl p-6 border border-stone-700/60 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Gentle, Cruelty-Free Extraction</h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                We never use toxic chemical repellents or suffocating smoke. Our beekeepers handle honeycombs with extreme gentleness to avoid harming queen bees or brood cells.
              </p>
            </div>

            <div className="bg-stone-800/60 rounded-2xl p-6 border border-stone-700/60 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-honey-normal/10 flex items-center justify-center text-honey-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Free Farmer Training</h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                We believe in community empowerment. We conduct free apiculture training programs for local farmers to expand beekeeping knowledge and enhance crop pollination.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery of Farm Operations */}
        <div className="space-y-8">
          <SectionHeading
            subtitle="Authentic Gallery"
            title="Life Across Madhurum Apiaries"
            description="A glimpse into our hives, ethical honey extraction, and natural surroundings in Tamil Nadu."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square border border-amber-200 shadow-soft">
              <img
                src="/assets/Homea1-BXfUOH0T.jpg"
                alt="Madhuram Bee Farm"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square border border-amber-200 shadow-soft">
              <img
                src="/assets/Homea4-CDdZXS_r.jpg"
                alt="Honey frame extraction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square border border-amber-200 shadow-soft">
              <img
                src="/assets/Homea5-6n4Sn_d6.jpg"
                alt="Apiary flora"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square border border-amber-200 shadow-soft">
              <img
                src="/assets/Homea2-BaeEHGee.jpg"
                alt="Hive inspection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="bg-gradient-to-r from-amber-500/10 via-honey-normal/10 to-amber-500/10 rounded-3xl p-8 sm:p-12 text-center border border-amber-200 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Taste The Purity Of Madhurum Honey Today
          </h2>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Directly from our 2,000 beehives to your doorstep. Free shipping on all orders over ₹2,000.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-honey-normal hover:bg-honey-dark text-white rounded-2xl font-bold text-sm shadow-honey transition-all"
            >
              <span>Explore Pure Honey Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
