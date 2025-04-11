
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroScrollIndicator = () => {
  return (
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
  );
};
