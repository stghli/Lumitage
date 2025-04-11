
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroCallToAction = () => {
  return (
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
  );
};
