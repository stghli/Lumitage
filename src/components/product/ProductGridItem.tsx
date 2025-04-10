
import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

type ProductGridItemProps = {
  product: Product;
  index: number;
};

export const ProductGridItem = ({ product, index }: ProductGridItemProps) => {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <ProductCard product={product} />
    </motion.div>
  );
};
