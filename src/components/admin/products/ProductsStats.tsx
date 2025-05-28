
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
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{products.length}</p>
          <p className="text-sm text-blue-800">Total Products</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {products.filter(p => p.status === "in-stock").length}
          </p>
          <p className="text-sm text-green-800">In Stock</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-amber-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">
            {products.filter(p => p.status === "low-stock").length}
          </p>
          <p className="text-sm text-amber-800">Low Stock</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-red-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">
            {products.filter(p => p.status === "out-of-stock").length}
          </p>
          <p className="text-sm text-red-800">Out of Stock</p>
        </CardContent>
      </Card>
    </div>
  );
};
