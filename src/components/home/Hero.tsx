
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-black to-secondary/80 overflow-hidden">
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
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-primary/10 filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Center content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-white mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div className="h-0.5 w-10 bg-primary"></div>
              <p className="text-primary/90 font-medium tracking-wide uppercase text-sm">Authentic Ghanaian Craft</p>
              <Sparkles className="text-primary h-4 w-4" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
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
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Discover our unique collection of handmade beads and sandals crafted using 
              traditional techniques and premium materials that celebrate Ghanaian culture.
            </motion.p>
          </motion.div>
          
          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <FeatureCard 
              title="Premium Materials" 
              description="Carefully selected authentic materials from Ghana's finest sources."
              delay={1.3}
            />
            <FeatureCard 
              title="Traditional Crafting" 
              description="Techniques passed down through generations of skilled artisans."
              delay={1.5}
            />
            <FeatureCard 
              title="Cultural Heritage" 
              description="Each piece tells a unique story of Ghana's rich cultural history."
              delay={1.7}
            />
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
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
                <Link to="/products/beads" className="flex items-center gap-2">
                  Explore Beads
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
                <Link to="/products/sandals" className="flex items-center gap-2">
                  Discover Sandals
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="flex flex-col items-center gap-3 text-sm text-gray-400"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Feature card component
const FeatureCard = ({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 bg-black/40 border border-white/10 backdrop-blur-sm text-white h-full">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <Separator className="bg-white/10 my-3" />
        <p className="text-gray-300">{description}</p>
      </Card>
    </motion.div>
  );
};

