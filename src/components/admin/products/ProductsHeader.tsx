
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ProductsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your product catalog and inventory</p>
      </div>
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        Add Product
      </Button>
    </div>
  );
};
