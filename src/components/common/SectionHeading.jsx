import React from 'react';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto'
  }[align] || 'text-center mx-auto';

  return (
    <div className={`max-w-2xl mb-12 ${alignClasses} ${className}`}>
      {subtitle && (
        <span className="inline-block text-xs font-bold tracking-widest text-honey-600 uppercase bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 bg-honey-normal rounded-full"></div>
        <div className="w-2.5 h-1 bg-honey-400 rounded-full"></div>
        <div className="w-1 h-1 bg-amber-200 rounded-full"></div>
      </div>
    </div>
  );
}
