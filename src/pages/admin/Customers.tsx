
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Mail, Phone, Eye, Edit, Star, MapPin, Calendar, ShoppingBag, DollarSign, User } from "lucide-react";
import { motion } from "framer-motion";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  orders: number;
  spent: string;
  lastOrder: string;
  joinDate: string;
  status: "active" | "inactive" | "prospect";
  address: string;
  city: string;
  country: string;
  rating: number;
  favoriteProducts: string[];
  totalSpent: number;
  averageOrderValue: string;
};

// Enhanced mock data for customers
const mockCustomers: Customer[] = [
  { 
    id: "CUST-001", 
    name: "John Doe", 
    email: "john.doe@example.com", 
    phone: "+1 (555) 123-4567",
    company: "Tech Solutions Inc.",
    orders: 5, 
    spent: "$352.75", 
    lastOrder: "2025-05-01",
    joinDate: "2024-08-15",
    status: "active",
    address: "123 Main Street",
    city: "New York",
    country: "USA",
    rating: 4.8,
    favoriteProducts: ["Handwoven Kente Bag", "Artisan Beads"],
    totalSpent: 352.75,
    averageOrderValue: "$70.55"
  },
  { 
    id: "CUST-002", 
    name: "Jane Smith", 
    email: "jane.smith@example.com", 
    phone: "+1 (555) 987-6543",
    company: "Design Studio Pro",
    orders: 8, 
    spent: "$689.50", 
    lastOrder: "2025-05-07",
    joinDate: "2024-06-20",
    status: "active",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    country: "USA",
    rating: 4.9,
    favoriteProducts: ["Traditional Sandals", "Ceramic Pottery"],
    totalSpent: 689.50,
    averageOrderValue: "$86.19"
  },
  { 
    id: "CUST-003", 
    name: "Mike Johnson", 
    email: "mike.johnson@example.com", 
    phone: "+1 (555) 246-8101",
    orders: 2, 
    spent: "$145.25", 
    lastOrder: "2025-04-25",
    joinDate: "2024-11-10",
    status: "inactive",
    address: "789 Pine Street",
    city: "Chicago",
    country: "USA",
    rating: 4.5,
    favoriteProducts: ["Woven Basket"],
    totalSpent: 145.25,
    averageOrderValue: "$72.63"
  },
  { 
    id: "CUST-004", 
    name: "Sarah Williams", 
    email: "sarah.w@example.com", 
    phone: "+1 (555) 369-2580",
    company: "Creative Agency",
    orders: 12, 
    spent: "$1,245.99", 
    lastOrder: "2025-05-06",
    joinDate: "2024-03-05",
    status: "active",
    address: "321 Elm Drive",
    city: "Miami",
    country: "USA",
    rating: 5.0,
    favoriteProducts: ["Artisan Beads", "Traditional Sandals", "Handwoven Kente Bag"],
    totalSpent: 1245.99,
    averageOrderValue: "$103.83"
  },
  { 
    id: "CUST-005", 
    name: "Robert Brown", 
    email: "robert.b@example.com", 
    phone: "+1 (555) 147-9632",
    orders: 3, 
    spent: "$218.50", 
    lastOrder: "2025-04-30",
    joinDate: "2024-09-12",
    status: "prospect",
    address: "654 Maple Lane",
    city: "Seattle",
    country: "USA",
    rating: 4.3,
    favoriteProducts: ["Ceramic Pottery"],
    totalSpent: 218.50,
    averageOrderValue: "$72.83"
  },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  
  // Filter and sort customers
  const filteredCustomers = customers
    .filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.company?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "orders":
          return b.orders - a.orders;
        case "spent":
          return b.totalSpent - a.totalSpent;
        case "lastOrder":
          return new Date(b.lastOrder).getTime() - new Date(a.lastOrder).getTime();
        default:
          return 0;
      }
    });
  
  // Get initials from customer name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Get status color
  const getStatusColor = (status: Customer["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "prospect": return "bg-blue-100 text-blue-800";
      default: return "";
    }
  };

  // Handle bulk selection
  const toggleCustomerSelection = (customerId: string) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId) 
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const toggleAllSelection = () => {
    setSelectedCustomers(
      selectedCustomers.length === filteredCustomers.length 
        ? [] 
        : filteredCustomers.map(c => c.id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Customer Management</h1>
        <p className="text-green-100">Build and maintain strong customer relationships</p>
      </div>
      
      {/* Filters and Search */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search customers by name, email, or company..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="prospect">Prospect</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="orders">Sort by Orders</SelectItem>
                <SelectItem value="spent">Sort by Spent</SelectItem>
                <SelectItem value="lastOrder">Sort by Last Order</SelectItem>
              </SelectContent>
            </Select>
            
            {selectedCustomers.length > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Email ({selectedCustomers.length})
                </Button>
                <Button variant="outline" size="sm">
                  Export Selected
                </Button>
              </div>
            )}
            
            <Button className="bg-gradient-to-r from-green-600 to-teal-600">
              Export All
            </Button>
          </div>
          
          {/* Bulk Actions */}
          {filteredCustomers.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={selectedCustomers.length === filteredCustomers.length}
                  onCheckedChange={toggleAllSelection}
                />
                <label htmlFor="select-all" className="text-sm font-medium">
                  Select All ({filteredCustomers.length})
                </label>
              </div>
              {selectedCustomers.length > 0 && (
                <Badge variant="secondary">
                  {selectedCustomers.length} selected
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Customers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCustomers.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No customers found matching your criteria.</p>
          </div>
        ) : (
          filteredCustomers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedCustomers.includes(customer.id)}
                        onCheckedChange={() => toggleCustomerSelection(customer.id)}
                      />
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 font-semibold">
                          {getInitials(customer.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {customer.name}
                        </CardTitle>
                        {customer.company && (
                          <p className="text-sm text-gray-600">{customer.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {customer.rating >= 4.5 && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 truncate">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{customer.city}, {customer.country}</span>
                    </div>
                  </div>
                  
                  {/* Customer Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-lg font-bold text-blue-600">{customer.orders}</p>
                      <p className="text-xs text-blue-800">Orders</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-lg font-bold text-green-600">{customer.spent}</p>
                      <p className="text-xs text-green-800">Total Spent</p>
                    </div>
                  </div>
                  
                  {/* Last Order */}
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Last order: {customer.lastOrder}</span>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedCustomer(customer)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Customer Profile - {selectedCustomer?.name}</DialogTitle>
                          <DialogDescription>
                            Complete customer information and activity history
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedCustomer && (
                          <div className="space-y-6">
                            {/* Customer Header */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                              <Avatar className="h-16 w-16">
                                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 font-bold text-xl">
                                  {getInitials(selectedCustomer.name)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold">{selectedCustomer.name}</h3>
                                {selectedCustomer.company && (
                                  <p className="text-gray-600">{selectedCustomer.company}</p>
                                )}
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className={getStatusColor(selectedCustomer.status)}>
                                    {selectedCustomer.status}
                                  </Badge>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                    <span className="text-sm font-medium">{selectedCustomer.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Contact Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Contact Information</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-500" />
                                    <span>{selectedCustomer.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-500" />
                                    <span>{selectedCustomer.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-gray-500" />
                                    <span>{selectedCustomer.address}, {selectedCustomer.city}, {selectedCustomer.country}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gray-500" />
                                    <span>Joined: {selectedCustomer.joinDate}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3">Order Statistics</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <p className="text-xl font-bold text-blue-600">{selectedCustomer.orders}</p>
                                    <p className="text-xs text-blue-800">Total Orders</p>
                                  </div>
                                  <div className="bg-green-50 p-3 rounded-lg text-center">
                                    <p className="text-xl font-bold text-green-600">{selectedCustomer.spent}</p>
                                    <p className="text-xs text-green-800">Total Spent</p>
                                  </div>
                                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                                    <p className="text-xl font-bold text-purple-600">{selectedCustomer.averageOrderValue}</p>
                                    <p className="text-xs text-purple-800">Avg. Order</p>
                                  </div>
                                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                                    <p className="text-xl font-bold text-amber-600">{selectedCustomer.lastOrder}</p>
                                    <p className="text-xs text-amber-800">Last Order</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Favorite Products */}
                            <div>
                              <h4 className="font-semibold mb-3">Favorite Products</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedCustomer.favoriteProducts.map((product, index) => (
                                  <Badge key={index} variant="outline" className="bg-gray-50">
                                    {product}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <DialogFooter>
                          <Button variant="outline">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </Button>
                          <Button>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Customer
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
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
            <p className="text-2xl font-bold text-blue-600">{filteredCustomers.length}</p>
            <p className="text-sm text-blue-800">Total Customers</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">
              {filteredCustomers.filter(c => c.status === "active").length}
            </p>
            <p className="text-sm text-green-800">Active</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">
              {filteredCustomers.filter(c => c.status === "prospect").length}
            </p>
            <p className="text-sm text-purple-800">Prospects</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">
              ${filteredCustomers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
            </p>
            <p className="text-sm text-amber-800">Total Revenue</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
