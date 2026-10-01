import React from 'react';

export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-amber-100 p-4 shadow-soft animate-pulse">
      <div className="aspect-square bg-amber-100/50 rounded-2xl mb-4"></div>
      <div className="h-3 bg-amber-100/80 rounded w-1/3 mb-2"></div>
      <div className="h-5 bg-amber-200/60 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-amber-100/60 rounded w-full mb-1"></div>
      <div className="h-3 bg-amber-100/60 rounded w-2/3 mb-4"></div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-12 bg-amber-100/80 rounded-lg"></div>
        <div className="h-6 w-12 bg-amber-100/80 rounded-lg"></div>
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-amber-50">
        <div className="h-6 w-16 bg-amber-200/80 rounded"></div>
        <div className="h-8 w-20 bg-amber-300/80 rounded-xl"></div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}
