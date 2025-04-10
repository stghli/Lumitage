
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 md:pr-12 z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Handcrafted With <span className="text-primary">Love</span> <br />
            Made In Ghana
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md">
            Discover our unique collection of handmade beads and sandals crafted using traditional techniques and premium materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-red-700 shadow-lg transform transition duration-300 hover:scale-105">
              <Link to="/products/beads">Shop Beads</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transform transition duration-300 hover:scale-105">
              <Link to="/products/sandals">Shop Sandals</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
            <img 
              src="https://images.unsplash.com/photo-1606150797142-da7ec9c602c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Handcrafted Beads and Sandals" 
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full p-6 shadow-lg"
          >
            <div className="text-center">
              <span className="block font-bold text-2xl">100%</span>
              <span className="text-sm">Handmade</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
    </div>
  );
};
