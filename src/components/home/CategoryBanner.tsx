
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CategoryBanner = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-lg group">
          <img 
            src="https://images.unsplash.com/photo-1535632066278-0e59d9d3d657?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
            alt="Handcrafted Beads" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Traditional Beads</h3>
            <p className="mb-4">Discover our collection of handcrafted beads</p>
            <Button asChild size="sm" className="w-fit">
              <Link to="/products/beads">Shop Now</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-lg group">
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
            alt="Handcrafted Sandals" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Authentic Sandals</h3>
            <p className="mb-4">Explore our range of handmade sandals</p>
            <Button asChild size="sm" className="w-fit">
              <Link to="/products/sandals">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
