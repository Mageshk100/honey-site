import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';
import SectionHeading from '../common/SectionHeading';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Bestsellers' },
    { id: 'organic-wild', label: 'Wild Forest' },
    { id: 'monofloral', label: 'Moringa & Monofloral' },
    { id: 'infused-dryfruits', label: 'Infused Dry Fruits' }
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter(p => p.category === activeTab).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="Customer Favorites"
          title="Bestselling Pure Honey Jars"
          description="Hand-harvested from our beehives in Tamil Nadu. 100% natural, raw, and unpasteurized."
        />

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-amber-200/80 hover:bg-amber-50 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to Shop Page */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-amber-50 text-stone-900 border border-amber-300 font-bold text-sm shadow-soft hover:shadow-honey transition-all"
          >
            <span>View All 100% Pure Honey Products</span>
            <ArrowRight className="w-4 h-4 text-honey-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
