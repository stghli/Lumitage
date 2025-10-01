
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
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-12 w-12 text-muted-foreground mb-3" />
        <p className="text-muted-foreground">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
};
