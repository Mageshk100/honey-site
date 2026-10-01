import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { BRAND_INFO } from '../../data/brandInfo';

export default function CertificationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-warm-cream border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="Quality & Accreditations"
          title="Celebrating Excellence In Natural Honey"
          description="Every batch of Madhurum Honey undergoes stringent quality verification. Certified purity you and your family can trust completely."
        />

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_INFO.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-soft hover:shadow-honey transition-all flex flex-col items-center text-center group"
            >
              {/* Document Image Container */}
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-amber-50/50 mb-5 border border-amber-100 p-2 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-honey-600 bg-amber-50 px-3 py-1 rounded-full mb-2">
                {cert.category}
              </span>

              <h4 className="font-bold text-stone-900 text-base mb-1">
                {cert.title}
              </h4>

              <p className="text-xs text-stone-500">
                Issued by {cert.issuer}
              </p>
            </div>
          ))}
        </div>

        {/* Lab Testing Highlights */}
        <div className="mt-12 bg-amber-50/80 border border-amber-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-serif font-extrabold text-amber-900">0% Added Sugar</div>
              <p className="text-xs text-stone-600">Zero C3/C4 corn syrup, rice syrup, or inverted cane sugars</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-amber-200 pt-4 sm:pt-0">
              <div className="text-2xl font-serif font-extrabold text-amber-900">&lt; 18% Moisture</div>
              <p className="text-xs text-stone-600">Perfect natural density ensuring zero spoilage or fermentation</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 border-amber-200 pt-4 sm:pt-0">
              <div className="text-2xl font-serif font-extrabold text-amber-900">Active Diastase</div>
              <p className="text-xs text-stone-600">Living honey enzymes preserved intact with zero heat treatment</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
