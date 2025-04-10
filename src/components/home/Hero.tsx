
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-black to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-0.5 w-10 bg-primary"></div>
              <p className="text-primary/90 font-medium tracking-wide uppercase text-sm">Authentic Ghanaian Craft</p>
              <Sparkles className="text-primary h-4 w-4" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Handcrafted With {" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-primary inline-block relative"
              >
                Love
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Made In Ghana
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Discover our unique collection of handmade beads and sandals crafted using 
              traditional techniques and premium materials that celebrate Ghanaian culture.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-red-700 shadow-lg rounded-full px-8 font-medium"
                >
                  <Link to="/products/beads">Explore Beads</Link>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-2 text-white border-white/20 hover:bg-white/10 rounded-full px-8 backdrop-blur-sm"
                >
                  <Link to="/products/sandals">Discover Sandals</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="hidden md:flex items-center gap-3 text-sm text-gray-400"
            >
              <div className="h-[1px] w-8 bg-gray-500"></div>
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative"
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1601924440224-c977a8f61e34?q=80&w=1000"
                alt="Handcrafted Ghanaian Beads and Jewelry" 
                className="w-full h-[550px] object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.08 }}
                style={{ transition: "transform 1.2s ease-in-out" }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ opacity: 0.8 }}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                  >
                    <p className="text-white text-lg font-medium mb-1">
                      Traditional craftsmanship
                    </p>
                    <p className="text-gray-300 text-sm">
                      Each piece tells a unique story of heritage and skill
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 z-0 h-20 w-20 bg-primary/20 rounded-full blur-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div 
              className="absolute -bottom-8 -left-8 z-0 h-32 w-32 bg-secondary/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5, 
                transition: { type: "spring", stiffness: 200 } 
              }}
              className="absolute -bottom-6 -right-2 z-20 bg-primary text-white rounded-full p-6 shadow-lg"
            >
              <div className="text-center">
                <span className="block font-bold text-2xl">100%</span>
                <span className="text-xs font-medium">Handmade</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
