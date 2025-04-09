
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById, getRelatedProducts, Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Minus, Plus, ShoppingCart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  
  const { addItem } = useCart();
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(foundProduct));
        // Reset selections when product changes
        setQuantity(1);
        setSelectedImage(0);
        setSelectedSize(foundProduct.sizes?.[0]);
        setSelectedColor(foundProduct.colors?.[0]);
      }
    }
    
    window.scrollTo(0, 0);
  }, [id]);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          category: product.category
        },
        quantity,
        selectedSize
      );
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <p>Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to={`/products/${product.category}`} className="text-gray-500 hover:text-primary capitalize">
              {product.category}
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "w-20 h-20 rounded overflow-hidden border-2",
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">{product.name}</h1>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(product.rating || 0)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-2xl font-bold text-primary mt-2">${product.price.toFixed(2)}</div>
                
                <div className="prose max-w-none my-6 text-gray-700">
                  <p>{product.description}</p>
                </div>
              </div>
              
              {/* Product Options */}
              <div className="space-y-6">
                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Color: {selectedColor && <span className="capitalize font-normal">{selectedColor}</span>}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={cn(
                            "h-8 w-8 rounded-full border transition-all",
                            selectedColor === color 
                              ? "border-primary ring-2 ring-primary ring-offset-2" 
                              : "border-gray-300"
                          )}
                          style={{
                            backgroundColor: 
                              color === 'multicolor' 
                                ? 'linear-gradient(135deg, red, orange, yellow, green, blue, indigo, violet)' 
                                : color === 'gold' 
                                  ? '#FFD700' 
                                  : color
                          }}
                          aria-label={color}
                        >
                          {color === 'multicolor' && (
                            <div className="h-full w-full rounded-full" style={{
                              background: 'linear-gradient(135deg, red, orange, yellow, green, blue, indigo, violet)'
                            }}></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Size: {selectedSize && <span className="font-normal">{selectedSize}</span>}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={cn(
                            "px-3 py-1 border rounded text-sm transition-colors",
                            selectedSize === size
                              ? "border-primary bg-primary text-white"
                              : "border-gray-300 bg-white hover:border-gray-400"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 h-10 border-y text-center flex items-center justify-center min-w-[3rem]">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="bg-secondary hover:bg-primary flex-1"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white flex-1"
                    asChild
                  >
                    <Link to="/cart">Buy Now</Link>
                  </Button>
                </div>
                
                {/* Features */}
                <div className="mt-8 space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    <span>100% handmade with quality materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6 border rounded-b-lg">
                <h3 className="font-semibold mb-2">Product Details</h3>
                <p className="text-gray-700">{product.description}</p>
                
                <h3 className="font-semibold mt-6 mb-2">Features</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Handcrafted in Ghana</li>
                  <li>Made with premium materials</li>
                  <li>Unique design</li>
                  <li>Suitable for {product.gender === 'unisex' ? 'all genders' : product.gender + 's'}</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="p-6 border rounded-b-lg">
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <p className="text-gray-700 mb-4">
                  We offer worldwide shipping on all our products. Standard shipping takes 7-10 business days, while express shipping takes 3-5 business days.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Return Policy</h3>
                <p className="text-gray-700">
                  We accept returns within 30 days of delivery. Items must be unused, undamaged, and in their original packaging. Please contact our customer service team to initiate a return.
                </p>
              </TabsContent>
              <TabsContent value="reviews" className="p-6 border rounded-b-lg">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.round(product.rating || 0)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold">{product.rating?.toFixed(1)} out of 5</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Based on {product.reviews} reviews
                  </span>
                </div>
                
                <div className="space-y-4">
                  {/* Sample reviews - in a real app, these would come from a database */}
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Jane Smith</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= 5 ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">3 months ago</span>
                    </div>
                    <p className="text-gray-700 text-sm">Absolutely love this product! The quality is outstanding and the design is beautiful. I've received so many compliments.</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">John Doe</span>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= 4 ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">1 month ago</span>
                    </div>
                    <p className="text-gray-700 text-sm">Great product! The shipping was a bit slow, but the quality makes up for it. Would buy again.</p>
                  </div>
                </div>
                
                <Button className="mt-6" variant="outline">
                  Write a Review
                </Button>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          )}
          
          {/* Back to Category */}
          <div className="mb-8">
            <Button variant="outline" asChild className="group">
              <Link to={`/products/${product.category}`}>
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
