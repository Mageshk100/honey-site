import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="Real Customer Stories"
          title="What Our Patrons Say"
          description="Genuine feedback from households, health coaches, and culinary professionals across India who trust Madhurum Honey."
        />

        {/* Carousel / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft hover:shadow-honey transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Header with quote mark & rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-200 group-hover:text-honey-400 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{item.comment}"
                </p>

                {/* Tagged product */}
                <div className="text-[11px] font-semibold text-honey-700 bg-amber-50 px-2.5 py-1 rounded-lg inline-block border border-amber-200/60">
                  Verified Purchase: {item.product}
                </div>

              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {item.role} • {item.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Additional 2 Testimonials in a Dual Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="bg-amber-50/60 rounded-3xl p-6 border border-amber-200/80 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-honey-600 shrink-0 shadow-xs">
                <Quote className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-800 text-xs sm:text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
                <div className="text-xs font-bold text-stone-900 pt-1">
                  {item.name} <span className="font-normal text-stone-500">({item.role}, {item.location})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
