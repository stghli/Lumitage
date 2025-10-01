import { Package } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

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
      <Card className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-12 w-12 text-muted-foreground mb-3" />
        <p className="text-muted-foreground">No products found</p>
      </Card>
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Stock</TableHead>
            <TableHead className="text-center">Sales</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onViewDetails={onViewDetails}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
