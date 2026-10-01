import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { BRAND_INFO } from '../data/brandInfo';
import SectionHeading from '../components/common/SectionHeading';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Purity & FAQs - Madhurum Honey";
  }, []);

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <SectionHeading
          subtitle="Help Center & Knowledge"
          title="Frequently Asked Questions"
          description="Everything you need to know about Madhurum pure honey, natural crystallization, ethical beekeeping, and shipping timelines."
        />

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. crystallization, shipping, pure)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-amber-200 text-stone-900 text-sm shadow-soft focus:outline-none focus:ring-2 focus:ring-honey-normal"
          />
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-amber-100 shadow-soft overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-stone-900 hover:text-honey-normal transition-colors"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-honey-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-serif">{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-honey-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-50 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-amber-100 p-6">
              <HelpCircle className="w-10 h-10 text-stone-400 mx-auto mb-2" />
              <p className="text-stone-700 font-semibold text-sm">No matching questions found.</p>
              <p className="text-stone-500 text-xs mt-1">Try another search term or chat with our team on WhatsApp.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200 text-center space-y-4">
          <Sparkles className="w-6 h-6 text-honey-600 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-stone-900">
            Have A Specific Question About Our Honey?
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Our founder and beekeeping staff love talking about bees and honey purity. Send us a message on WhatsApp anytime!
          </p>
          <div>
            <a
              href={BRAND_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
