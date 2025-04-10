
import { motion } from 'framer-motion';

type ProductGridTitleProps = {
  title: string;
};

export const ProductGridTitle = ({ title }: ProductGridTitleProps) => {
  return (
    <motion.h2 
      className="text-2xl font-bold mb-6 text-secondary"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {title}
    </motion.h2>
  );
};
