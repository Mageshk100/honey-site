import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const SHOWCASE_CATEGORIES = [
  {
    id: "organic-wild",
    title: "Organic Wild Forest Honey",
    tamilTitle: "இயற்கை காட்டு தேன்",
    description: "Deep, rich, raw amber honey gathered by wild bees in undisturbed Western Ghats forests.",
    image: "/assets/wildforesthoney-Dk_XVgTC.png",
    accent: "bg-amber-500/10 text-amber-700 border-amber-300"
  },
  {
    id: "monofloral",
    title: "Moringa & Single-Blossom Honey",
    tamilTitle: "முருங்கை பூ தேன்",
    description: "Nutrient-packed monofloral nectar collected during dedicated single flower blooming periods.",
    image: "/assets/moringahoney-CyVso1zD.png",
    accent: "bg-emerald-500/10 text-emerald-700 border-emerald-300"
  },
  {
    id: "infused-dryfruits",
    title: "Dry Fruits & Fig Infused Honey",
    tamilTitle: "உலர் பழங்கள் & அத்திப்பழ தேன்",
    description: "Crunchy California nuts and sun-dried organic figs steeped in thick raw honey.",
    image: "/assets/dryfruitsh-D5pXICcT.png",
    accent: "bg-orange-500/10 text-orange-700 border-orange-300"
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="Shop By Category"
          title="Explore Our Pure Honey Collections"
          description="From wild mountain forests to organic herbal farms, taste nature's unadulterated sweetness in every variety."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHOWCASE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 hover:border-amber-300 shadow-soft hover:shadow-honey transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Details */}
              <div className="relative z-10">
                <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-3 ${cat.accent}`}>
                  Collection
                </span>
                <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-honey-normal transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-amber-700 font-medium mt-0.5">
                  {cat.tamilTitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Product Visual Container */}
              <div className="relative w-full aspect-square my-4 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl transform group-hover:scale-95 transition-transform" />
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-amber-50 flex items-center justify-between text-sm font-bold text-honey-600 group-hover:text-honey-dark">
                <span>Explore Products</span>
                <div className="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-honey-normal group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
