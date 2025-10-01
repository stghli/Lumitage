
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye, Star } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";

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
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-muted-foreground">{product.id}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span>{product.rating}</span>
          <span className="text-muted-foreground text-xs">({product.reviews})</span>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <div className="font-medium">{product.price}</div>
          {product.originalPrice && (
            <div className="text-xs text-muted-foreground line-through">{product.originalPrice}</div>
          )}
        </div>
      </TableCell>
      <TableCell className="text-center">{product.stock}</TableCell>
      <TableCell className="text-center">{product.sales}</TableCell>
      <TableCell>
        <Badge variant={getStatusVariant(product.status)}>
          {product.status.replace('-', ' ')}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onViewDetails(product)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onDelete(product.id)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
