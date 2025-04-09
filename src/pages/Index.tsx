
import { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { CategoryBanner } from '@/components/home/CategoryBanner';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';
import { getFeaturedProducts, getNewArrivals } from '@/data/products';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <div className="container mx-auto px-4">
          <ProductGrid products={featuredProducts} title="Featured Products" />
        </div>
        <CategoryBanner />
        <div className="container mx-auto px-4">
          <ProductGrid products={newArrivals} title="New Arrivals" />
        </div>
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
