import React from 'react';
import { Droplet, Heart, Trees, GraduationCap } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const BENEFITS = [
  {
    icon: Droplet,
    title: "100% Raw & Unpasteurized",
    description: "Pure, living honey bottled without industrial heat treatments or chemical filtration. Preserves all active pollen, enzymes, and antioxidants.",
    badge: "Zero Additives"
  },
  {
    icon: Trees,
    title: "2,000+ Apiary Beehives",
    description: "We don't buy anonymous honey from middlemen. All honey comes from our own 2,000 carefully nurtured hives across Tamil Nadu.",
    badge: "Direct From Hive"
  },
  {
    icon: Heart,
    title: "100% Bee-Friendly",
    description: "Harvested ethically with cruelty-free methods. We only extract seasonal surplus, ensuring the bee colonies remain healthy and well-fed.",
    badge: "Ethical Harvest"
  },
  {
    icon: GraduationCap,
    title: "TNAU Trained & Farmer Support",
    description: "Founder Anath received formal apiculture training from Tamil Nadu Agricultural University and conducts free training workshops for local farmers.",
    badge: "Community Driven"
  }
];

export default function BrandBenefits() {
  return (
    <section className="py-16 sm:py-20 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="Why Madhurum Honey"
          title="Rooted In Purity, Passion & Bee Care"
          description="Every drop of Madhurum Honey reflects our deep dedication to authentic apiculture and ecological sustainability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 hover:border-amber-300 shadow-soft hover:shadow-honey transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-honey-normal text-honey-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-honey-normal transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-50 flex items-center text-xs font-semibold text-honey-600">
                  <span>Guaranteed Authentic</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
