
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Handcrafted With{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-primary inline-block"
            >
              Love
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <br />Made In Ghana
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-md"
          >
            Discover our unique collection of handmade beads and sandals crafted using traditional techniques and premium materials.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-red-700 shadow-lg transform transition duration-300">
                <Link to="/products/beads">Shop Beads</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transform transition duration-300">
                <Link to="/products/sandals">Shop Sandals</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <motion.div 
            className="rounded-lg overflow-hidden shadow-2xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1606150797142-da7ec9c602c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Handcrafted Beads and Sandals" 
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5 } }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <motion.p 
                  className="text-white text-lg font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Traditional craftsmanship meets modern design
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5, 
              transition: { type: "spring", stiffness: 300 } 
            }}
            whileTap={{ scale: 0.9 }}
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
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
          backgroundRepeat: 'repeat'
        }}></div>
      </motion.div>
    </div>
  );
};
