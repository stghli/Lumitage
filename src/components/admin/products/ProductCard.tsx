
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2, Eye, Package, TrendingUp, Star, AlertTriangle } from "lucide-react";

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

type ProductCardProps = {
  product: Product;
  index: number;
  onViewDetails: (product: Product) => void;
  onDelete: (productId: string) => void;
};

export const ProductCard = ({ product, index, onViewDetails, onDelete }: ProductCardProps) => {
  const getStatusVariant = (status: Product["status"]) => {
    switch (status) {
      case "in-stock": return "default";
      case "low-stock": return "secondary";
      case "out-of-stock": return "destructive";
      default: return "default";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={getStatusVariant(product.status)}>
              {product.status.replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <CardTitle className="text-base font-semibold line-clamp-1">
            {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5 inline mr-1" />
            {product.sales} sold
          </div>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>
        
        <div className="text-sm text-muted-foreground">
          <Package className="h-3.5 w-3.5 inline mr-1" />
          Stock: {product.stock}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(product)}
          >
            <Eye className="h-3.5 w-3.5 mr-1" />
            View
          </Button>
          
          <Button variant="outline" size="sm">
            <Edit className="h-3.5 w-3.5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onDelete(product.id)}
          >
            <Trash2 className="h-3.5 w-3.5 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
