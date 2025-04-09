
import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

type ProductGridProps = {
  products: Product[];
  title?: string;
};

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-secondary">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
