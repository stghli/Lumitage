
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Authentic Ghanaian Craftsmanship</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Each purchase supports traditional artisans and helps preserve cultural heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium">
            <Link to="/products/beads">Shop Beads</Link>
          </Button>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg font-medium">
            <Link to="/products/sandals">Shop Sandals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
