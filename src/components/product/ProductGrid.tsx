
import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

type ProductGridProps = {
  products: Product[];
  title?: string;
};

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.h2 
          className="text-2xl font-bold mb-6 text-secondary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
