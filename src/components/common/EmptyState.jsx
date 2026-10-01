import React from 'react';
import { Link } from 'react-router-dom';
import { PackageOpen, ArrowRight } from 'lucide-react';

export default function EmptyState({
  title = "No Honey Found",
  description = "We couldn't find any products matching your criteria. Try adjusting your filters or search terms.",
  actionText = "View All Honey Products",
  actionLink = "/shop",
  onReset
}) {
  return (
    <div className="text-center py-16 px-4 bg-white rounded-3xl border border-amber-100 max-w-lg mx-auto shadow-soft my-8">
      <div className="w-16 h-16 mx-auto mb-4 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 border border-amber-200">
        <PackageOpen className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">{title}</h3>
      <p className="text-stone-600 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>

      {onReset ? (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-honey-normal hover:bg-honey-dark text-white rounded-xl text-sm font-semibold shadow-honey transition-all"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-honey-normal hover:bg-honey-dark text-white rounded-xl text-sm font-semibold shadow-honey transition-all"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
