import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandBenefits from '../components/home/BrandBenefits';
import CategoryShowcase from '../components/home/CategoryShowcase';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutPreview from '../components/home/AboutPreview';
import CertificationsSection from '../components/home/CertificationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Madhuram Honey - 100% Pure, Raw & Natural Honey From Our Beehives";
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandBenefits />
      <CategoryShowcase />
      <FeaturedProducts />
      <AboutPreview />
      <CertificationsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
