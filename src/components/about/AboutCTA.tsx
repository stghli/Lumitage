
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutCTA = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Experience Authentic <br />
          <span className="text-white/90">Ghanaian Craftsmanship</span>
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Each purchase supports traditional artisans and helps preserve cultural heritage. 
          Join us in celebrating the beauty of handcrafted excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold group transition-all duration-300 shadow-2xl">
            <Link to="/products/beads" className="flex items-center">
              Shop Beads
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 px-10 py-6 text-lg font-semibold group transition-all duration-300 shadow-2xl">
            <Link to="/products/sandals" className="flex items-center">
              Shop Sandals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
