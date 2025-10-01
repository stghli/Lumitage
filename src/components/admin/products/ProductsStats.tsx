
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  status: "in-stock" | "low-stock" | "out-of-stock";
};

type ProductsStatsProps = {
  products: Product[];
};

export const ProductsStats = ({ products }: ProductsStatsProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Total Products</p>
          </div>
          <p className="text-2xl font-semibold mt-2">{products.length}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">In Stock</p>
          </div>
          <p className="text-2xl font-semibold mt-2 text-green-600">
            {products.filter(p => p.status === "in-stock").length}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
          </div>
          <p className="text-2xl font-semibold mt-2 text-amber-600">
            {products.filter(p => p.status === "low-stock").length}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
          </div>
          <p className="text-2xl font-semibold mt-2 text-red-600">
            {products.filter(p => p.status === "out-of-stock").length}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
