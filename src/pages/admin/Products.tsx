import { useState } from "react";
import { ProductsHeader } from "@/components/admin/products/ProductsHeader";
import { ProductsFilters } from "@/components/admin/products/ProductsFilters";
import { ProductsGrid } from "@/components/admin/products/ProductsGrid";
import { ProductDetailsModal } from "@/components/admin/products/ProductDetailsModal";
import { DeleteProductModal } from "@/components/admin/products/DeleteProductModal";
import { ProductsStats } from "@/components/admin/products/ProductsStats";

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
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  
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
  
  const handleDeleteProduct = () => {
    if (deleteProductId) {
      setProducts(products.filter(product => product.id !== deleteProductId));
      setDeleteProductId(null);
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];
  const productToDelete = products.find(p => p.id === deleteProductId);

  return (
    <div className="space-y-6">
      <ProductsHeader />
      
      <ProductsStats products={filteredProducts} />
      
      <ProductsFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
      />

      <ProductsGrid
        products={filteredProducts}
        onViewDetails={handleViewDetails}
        onDelete={setDeleteProductId}
      />

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />

      <DeleteProductModal
        isOpen={!!deleteProductId}
        productName={productToDelete?.name || ""}
        onConfirm={handleDeleteProduct}
        onCancel={() => setDeleteProductId(null)}
      />
    </div>
  );
};

export default Products;
