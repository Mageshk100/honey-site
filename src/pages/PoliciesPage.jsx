import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, FileText, ChevronRight } from 'lucide-react';
import { POLICIES } from '../data/policies';
import SectionHeading from '../components/common/SectionHeading';

export default function PoliciesPage({ defaultPolicy = 'shipping' }) {
  const location = useLocation();

  // Determine which policy to show based on URL path or prop
  let currentKey = defaultPolicy;
  if (location.pathname.includes('refund') || location.pathname.includes('return')) {
    currentKey = 'returns';
  } else if (location.pathname.includes('privacy')) {
    currentKey = 'privacy';
  } else if (location.pathname.includes('terms')) {
    currentKey = 'terms';
  } else if (location.pathname.includes('shipping')) {
    currentKey = 'shipping';
  }

  const policy = POLICIES[currentKey] || POLICIES.shipping;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${policy.title} - Madhurum Honey`;
  }, [currentKey, policy]);

  const tabs = [
    { key: 'shipping', label: 'Shipping & Delivery', path: '/shipping-policy', icon: Truck },
    { key: 'returns', label: 'Returns & Refunds', path: '/refund-policy', icon: RotateCcw },
    { key: 'privacy', label: 'Privacy Policy', path: '/privacy-policy', icon: ShieldCheck },
    { key: 'terms', label: 'Terms of Service', path: '/terms-conditions', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-warm-cream py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-honey-normal">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Store Policies</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 font-bold">{policy.title}</span>
        </div>

        {/* Header */}
        <SectionHeading
          subtitle="Legal & Customer Care"
          title={policy.title}
          description={`Last updated: ${policy.lastUpdated}. Please review our authentic guidelines and commitments.`}
        />

        {/* Tab switcher buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentKey === tab.key;
            return (
              <Link
                key={tab.key}
                to={tab.path}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-soft'
                    : 'bg-white text-stone-700 border border-amber-200/80 hover:bg-amber-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Policy Document Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-amber-100 shadow-soft space-y-8">
          {policy.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 pb-6 border-b border-amber-50 last:border-b-0 last:pb-0">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                {section.heading}
              </h3>
              <div className="text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-3xl text-center text-xs text-stone-600">
          Have additional policy questions or need special dispatch arrangements? Reach out to us at{' '}
          <a href="mailto:madhurumindia@gmail.com" className="font-bold text-honey-600 hover:underline">
            madhurumindia@gmail.com
          </a>{' '}
          or call <strong className="text-stone-800">+91 95666 10023</strong>.
        </div>

      </div>
    </div>
  );
}
