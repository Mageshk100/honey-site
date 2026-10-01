import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-soft space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 text-honey-600 flex items-center justify-center mx-auto border border-amber-200">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-honey-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          404 - Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Lost In The Apiary?
        </h1>

        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          The page or product link you followed doesn't seem to exist. Let's guide you back to our pure honey collections.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto px-6 py-3 bg-honey-normal hover:bg-honey-dark text-white rounded-xl text-xs font-bold shadow-honey transition-all flex items-center justify-center gap-1.5"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
