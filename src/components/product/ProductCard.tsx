
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category
    });
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {product.new && (
          <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary/90">New</Badge>
        )}
        
        {/* Color options indicator */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute bottom-2 left-2 flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <motion.div 
                key={index}
                className="w-4 h-4 rounded-full border border-white shadow-sm"
                style={{ 
                  backgroundColor: 
                    color === 'red' ? '#FF0000' : 
                    color === 'blue' ? '#0000FF' : 
                    color === 'black' ? '#000000' : 
                    color === 'brown' ? '#964B00' : 
                    color === 'gold' ? '#FFD700' : 
                    color === 'tan' ? '#D2B48C' : 
                    color === 'pink' ? '#FFC0CB' : 
                    color === 'multicolor' ? 'linear-gradient(90deg, red, blue, green)' : 
                    color === 'earth tones' ? '#A67B5B' : 
                    color === 'blue tones' ? '#4682B4' : 
                    '#888888'
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border border-white">
                +{product.colors.length - 3}
              </div>
            )}
          </div>
        )}
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium text-secondary hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating || 0)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-secondary hover:bg-primary"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
