
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Edit, Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
};

// Mock data for products
const mockProducts: Product[] = [
  { id: "PRD-001", name: "Premium Headphones", category: "Electronics", price: "$149.99", stock: 45, status: "in-stock" },
  { id: "PRD-002", name: "Wireless Earbuds", category: "Electronics", price: "$89.99", stock: 32, status: "in-stock" },
  { id: "PRD-003", name: "Smart Watch", category: "Accessories", price: "$199.99", stock: 8, status: "low-stock" },
  { id: "PRD-004", name: "Bluetooth Speaker", category: "Electronics", price: "$79.99", stock: 0, status: "out-of-stock" },
  { id: "PRD-005", name: "Laptop Sleeve", category: "Accessories", price: "$29.99", stock: 56, status: "in-stock" },
  { id: "PRD-006", name: "Wireless Mouse", category: "Electronics", price: "$49.99", stock: 23, status: "in-stock" },
  { id: "PRD-007", name: "Phone Case", category: "Accessories", price: "$19.99", stock: 12, status: "low-stock" },
  { id: "PRD-008", name: "USB-C Cable", category: "Electronics", price: "$14.99", stock: 67, status: "in-stock" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get badge color based on status
  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "in-stock": return "bg-green-100 text-green-800";
      case "low-stock": return "bg-yellow-100 text-yellow-800";
      case "out-of-stock": return "bg-red-100 text-red-800";
      default: return "";
    }
  };
  
  // Handle product deletion
  const handleDeleteProduct = () => {
    if (deleteProductId) {
      setProducts(products.filter(product => product.id !== deleteProductId));
      setDeleteProductId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Products Management</h1>
        <p className="text-gray-500 mt-2">View and manage your store products</p>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search products by name or category..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No products found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(product.status)}>
                      {product.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-600"
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
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
