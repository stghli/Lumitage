
import { Package } from "lucide-react";
import { ProductCard } from "./ProductCard";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  stock: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  image: string;
  description: string;
  rating: number;
  reviews: number;
  sales: number;
  supplier: string;
  dateAdded: string;
};

type ProductsGridProps = {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onDelete: (productId: string) => void;
};

export const ProductsGrid = ({ products, onViewDetails, onDelete }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <div className="w-full">
        <div className="col-span-full text-center py-12">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onViewDetails={onViewDetails}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
