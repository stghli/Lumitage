
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Edit, Trash2, Plus, Eye, Package, DollarSign, BarChart3, AlertTriangle, TrendingUp, Star } from "lucide-react";
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

// Enhanced mock data for products
const mockProducts: Product[] = [
  { 
    id: "PRD-001", 
    name: "Handwoven Kente Bag", 
    category: "Bags", 
    price: "$149.99", 
    originalPrice: "$179.99",
    stock: 45, 
    status: "in-stock",
    image: "/assets/images/artisan-bags.jpg",
    description: "Beautiful handwoven Kente bag made by skilled artisans in Ghana. Features authentic patterns and durable construction.",
    rating: 4.8,
    reviews: 124,
    sales: 254,
    supplier: "Ghana Artisan Collective",
    dateAdded: "2025-01-15"
  },
  { 
    id: "PRD-002", 
    name: "Artisan Beads Set", 
    category: "Jewelry", 
    price: "$89.99", 
    stock: 32, 
    status: "in-stock",
    image: "/assets/images/artisan-beads.jpg",
    description: "Handcrafted bead set with traditional African patterns. Perfect for creating unique jewelry pieces.",
    rating: 4.6,
    reviews: 89,
    sales: 187,
    supplier: "Kenyan Bead Workshop",
    dateAdded: "2025-02-10"
  },
  { 
    id: "PRD-003", 
    name: "Traditional Sandals", 
    category: "Footwear", 
    price: "$199.99", 
    stock: 8, 
    status: "low-stock",
    image: "/assets/images/artisan-sandals.jpg",
    description: "Comfortable traditional sandals handcrafted with premium leather and authentic design elements.",
    rating: 4.9,
    reviews: 67,
    sales: 145,
    supplier: "Moroccan Leather Crafters",
    dateAdded: "2025-01-28"
  },
  { 
    id: "PRD-004", 
    name: "Ceramic Pottery Set", 
    category: "Home Decor", 
    price: "$79.99", 
    stock: 0, 
    status: "out-of-stock",
    image: "/placeholder.svg",
    description: "Elegant ceramic pottery set featuring traditional glazing techniques and beautiful earthy tones.",
    rating: 4.7,
    reviews: 156,
    sales: 89,
    supplier: "Ethiopian Pottery Studio",
    dateAdded: "2025-03-05"
  },
  { 
    id: "PRD-005", 
    name: "Woven Basket Collection", 
    category: "Home Decor", 
    price: "$29.99", 
    stock: 56, 
    status: "in-stock",
    image: "/placeholder.svg",
    description: "Set of three beautifully woven baskets perfect for storage and decoration.",
    rating: 4.5,
    reviews: 203,
    sales: 345,
    supplier: "Rwanda Basket Weavers",
    dateAdded: "2025-02-20"
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || product.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case "stock":
          return b.stock - a.stock;
        case "sales":
          return b.sales - a.sales;
        default:
          return 0;
      }
    });
  
  // Get badge color based on status
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
  
  // Handle product deletion
  const handleDeleteProduct = () => {
    if (deleteProductId) {
      setProducts(products.filter(product => product.id !== deleteProductId));
      setDeleteProductId(null);
    }
  };

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Products Management</h1>
        <p className="text-purple-100">Manage your product catalog and inventory</p>
      </div>
      
      {/* Filters and Search */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search products by name or category..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="price">Sort by Price</SelectItem>
                <SelectItem value="stock">Sort by Stock</SelectItem>
                <SelectItem value="sales">Sort by Sales</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-gradient-to-r from-green-600 to-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-gray-50">
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
                
                <CardContent className="p-4 space-y-3">
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  {/* Stock and Sales */}
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
                  
                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Product Details - {selectedProduct?.name}</DialogTitle>
                          <DialogDescription>
                            Complete product information and management
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedProduct && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Product Image */}
                              <div>
                                <img 
                                  src={selectedProduct.image} 
                                  alt={selectedProduct.name}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </div>
                              
                              {/* Product Info */}
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                                  <p className="text-gray-600">{selectedProduct.category}</p>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                    <span className="font-medium">{selectedProduct.rating}</span>
                                  </div>
                                  <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                                </div>
                                
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold">{selectedProduct.price}</span>
                                    {selectedProduct.originalPrice && (
                                      <span className="text-lg text-gray-500 line-through">{selectedProduct.originalPrice}</span>
                                    )}
                                  </div>
                                  <Badge className={getStatusColor(selectedProduct.status)}>
                                    {selectedProduct.status.replace('-', ' ')}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-gray-700">{selectedProduct.description}</p>
                            </div>
                            
                            {/* Product Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-blue-50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold text-blue-600">{selectedProduct.stock}</p>
                                <p className="text-sm text-blue-800">In Stock</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold text-green-600">{selectedProduct.sales}</p>
                                <p className="text-sm text-green-800">Total Sales</p>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold text-purple-600">{selectedProduct.reviews}</p>
                                <p className="text-sm text-purple-800">Reviews</p>
                              </div>
                              <div className="bg-amber-50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold text-amber-600">{selectedProduct.rating}</p>
                                <p className="text-sm text-amber-800">Rating</p>
                              </div>
                            </div>
                            
                            {/* Supplier Info */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">Supplier Information</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600">Supplier</p>
                                  <p className="font-medium">{selectedProduct.supplier}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Date Added</p>
                                  <p className="font-medium">{selectedProduct.dateAdded}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <DialogFooter>
                          <Button variant="outline">Restock Product</Button>
                          <Button>Edit Product</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600"
                          onClick={() => setDeleteProductId(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete Product</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete "{product.name}"? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setDeleteProductId(null)}>Cancel</Button>
                          <Button variant="destructive" onClick={handleDeleteProduct}>Delete</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{filteredProducts.length}</p>
            <p className="text-sm text-blue-800">Total Products</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">
              {filteredProducts.filter(p => p.status === "in-stock").length}
            </p>
            <p className="text-sm text-green-800">In Stock</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">
              {filteredProducts.filter(p => p.status === "low-stock").length}
            </p>
            <p className="text-sm text-amber-800">Low Stock</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-red-600">
              {filteredProducts.filter(p => p.status === "out-of-stock").length}
            </p>
            <p className="text-sm text-red-800">Out of Stock</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Products;
