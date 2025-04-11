
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const HeroHeading = () => {
  return (
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
  );
};
