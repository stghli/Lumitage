
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Edit, Trash2, Eye, Package, TrendingUp, Star, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

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
  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "in-stock": return "bg-green-100 text-green-800";
      case "low-stock": return "bg-yellow-100 text-yellow-800";
      case "out-of-stock": return "bg-red-100 text-red-800";
      default: return "";
    }
  };
  
  const getStatusIcon = (status: Product["status"]) => {
    switch (status) {
      case "in-stock": return <Package className="h-3 w-3" />;
      case "low-stock": return <AlertTriangle className="h-3 w-3" />;
      case "out-of-stock": return <AlertTriangle className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-gray-50 h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2">
              <Badge className={getStatusColor(product.status)}>
                {getStatusIcon(product.status)}
                <span className="ml-1">{product.status.replace('-', ' ')}</span>
              </Badge>
            </div>
            {product.originalPrice && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-red-500 text-white">Sale</Badge>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
          <div>
            <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
              {product.name}
            </CardTitle>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{product.stock} in stock</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{product.sales} sold</span>
            </div>
          </div>
          
          <div className="flex gap-2 pt-2 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => onViewDetails(product)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-red-600"
              onClick={() => onDelete(product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
