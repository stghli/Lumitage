import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Eye, Edit, MoreHorizontal, Package, User, Calendar, DollarSign, Truck, CheckCircle, Clock, XCircle } from "lucide-react";
import { motion } from "framer-motion";

type Order = {
  id: string;
  customer: string;
  customerEmail: string;
  date: string;
  total: string;
  status: "processing" | "shipped" | "delivered" | "cancelled" | "pending";
  paymentStatus: "paid" | "pending" | "failed";
  items: number;
  products: string[];
  shippingAddress: string;
  phone: string;
};

// Enhanced mock data for orders
const mockOrders: Order[] = [
  { 
    id: "ORD-1234", 
    customer: "John Doe", 
    customerEmail: "john.doe@example.com",
    date: "2025-05-08", 
    total: "$85.99", 
    status: "processing", 
    paymentStatus: "paid",
    items: 3,
    products: ["Handwoven Kente Bag", "Artisan Beads", "Traditional Cloth"],
    shippingAddress: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567"
  },
  { 
    id: "ORD-1235", 
    customer: "Jane Smith", 
    customerEmail: "jane.smith@example.com",
    date: "2025-05-07", 
    total: "$112.50", 
    status: "shipped", 
    paymentStatus: "paid",
    items: 5,
    products: ["Ceramic Pottery Set", "Woven Basket", "Traditional Sandals"],
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
    phone: "+1 (555) 987-6543"
  },
  { 
    id: "ORD-1236", 
    customer: "Mike Johnson", 
    customerEmail: "mike.j@example.com",
    date: "2025-05-07", 
    total: "$43.25", 
    status: "delivered", 
    paymentStatus: "paid",
    items: 2,
    products: ["Artisan Jewelry", "Handmade Soap"],
    shippingAddress: "789 Pine St, Chicago, IL 60601",
    phone: "+1 (555) 246-8101"
  },
  { 
    id: "ORD-1237", 
    customer: "Sarah Williams", 
    customerEmail: "sarah.w@example.com",
    date: "2025-05-06", 
    total: "$199.99", 
    status: "pending", 
    paymentStatus: "pending",
    items: 1,
    products: ["Premium Textile Collection"],
    shippingAddress: "321 Elm Dr, Miami, FL 33101",
    phone: "+1 (555) 369-2580"
  },
  { 
    id: "ORD-1238", 
    customer: "Robert Brown", 
    customerEmail: "robert.b@example.com",
    date: "2025-05-05", 
    total: "$65.75", 
    status: "cancelled", 
    paymentStatus: "failed",
    items: 4,
    products: ["Wooden Crafts", "Traditional Masks"],
    shippingAddress: "654 Maple Ln, Seattle, WA 98101",
    phone: "+1 (555) 147-9632"
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  // Filter orders based on search term and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });
  
  // Get badge color based on status
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing": return "bg-blue-100 text-blue-800";
      case "shipped": return "bg-purple-100 text-purple-800";
      case "delivered": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "";
    }
  };
  
  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "processing": return <Clock className="h-3 w-3" />;
      case "shipped": return <Truck className="h-3 w-3" />;
      case "delivered": return <CheckCircle className="h-3 w-3" />;
      case "cancelled": return <XCircle className="h-3 w-3" />;
      case "pending": return <Clock className="h-3 w-3" />;
      default: return null;
    }
  };
  
  // Get badge color for payment status
  const getPaymentStatusColor = (status: Order["paymentStatus"]) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "";
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">Orders Management</h1>
        <p className="text-blue-100 text-sm">Track and manage all your store orders</p>
      </div>
      
      {/* Filters and Search */}
      <Card className="shadow-sm border">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search orders by ID or customer..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40 h-9">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-full md:w-40 h-9">
                <SelectValue placeholder="Payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            
            <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 h-9">
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredOrders.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No orders found matching your criteria.</p>
          </div>
        ) : (
          filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="shadow-sm border hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer bg-white">
                <CardHeader className="pb-2 p-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-bold text-gray-900 truncate">{order.id}</CardTitle>
                    <Badge className={`${getStatusColor(order.status)} text-xs px-1.5 py-0.5`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 p-3 pt-0">
                  {/* Customer Info */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 text-xs truncate">{order.customer}</p>
                      <p className="text-xs text-gray-600 truncate">{order.customerEmail}</p>
                    </div>
                  </div>
                  
                  {/* Order Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gray-500" />
                      <span className="text-gray-600 truncate">{order.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="h-3 w-3 text-gray-500" />
                      <span className="text-gray-600">{order.items} items</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-gray-500" />
                      <span className="font-semibold text-gray-900">{order.total}</span>
                    </div>
                    <div className="flex justify-end">
                      <Badge className={`${getPaymentStatusColor(order.paymentStatus)} text-xs px-1 py-0.5`}>
                        {order.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Products Preview */}
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Products:</p>
                    <p className="text-xs text-gray-700 line-clamp-1 truncate">
                      {order.products.join(", ")}
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-1 pt-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 h-7 text-xs"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
                          <DialogDescription>
                            Complete order information and management
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedOrder && (
                          <div className="space-y-6">
                            {/* Customer Information */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h3 className="font-semibold mb-3">Customer Information</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600">Name</p>
                                  <p className="font-medium">{selectedOrder.customer}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Email</p>
                                  <p className="font-medium">{selectedOrder.customerEmail}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Phone</p>
                                  <p className="font-medium">{selectedOrder.phone}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Order Date</p>
                                  <p className="font-medium">{selectedOrder.date}</p>
                                </div>
                              </div>
                              <div className="mt-3">
                                <p className="text-gray-600">Shipping Address</p>
                                <p className="font-medium">{selectedOrder.shippingAddress}</p>
                              </div>
                            </div>
                            
                            {/* Order Items */}
                            <div>
                              <h3 className="font-semibold mb-3">Order Items ({selectedOrder.items})</h3>
                              <div className="space-y-2">
                                {selectedOrder.products.map((product, index) => (
                                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                    <span>{product}</span>
                                    <span className="font-medium">1x</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Order Summary */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Total Amount</span>
                                <span className="text-xl font-bold text-blue-600">{selectedOrder.total}</span>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <span>Payment Status</span>
                                <Badge className={getPaymentStatusColor(selectedOrder.paymentStatus)}>
                                  {selectedOrder.paymentStatus}
                                </Badge>
                              </div>
                            </div>
                            
                            {/* Status Management */}
                            <div>
                              <h3 className="font-semibold mb-3">Update Order Status</h3>
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => updateOrderStatus(selectedOrder.id, "processing")}
                                  className="flex-1"
                                >
                                  Mark Processing
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => updateOrderStatus(selectedOrder.id, "shipped")}
                                  className="flex-1"
                                >
                                  Mark Shipped
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => updateOrderStatus(selectedOrder.id, "delivered")}
                                  className="flex-1"
                                >
                                  Mark Delivered
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <DialogFooter>
                          <Button variant="outline">Print Order</Button>
                          <Button>Send Update Email</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
        <Card className="shadow-sm border bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-blue-600">{filteredOrders.length}</p>
            <p className="text-xs text-blue-800">Total Orders</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">
              {filteredOrders.filter(o => o.status === "delivered").length}
            </p>
            <p className="text-xs text-green-800">Delivered</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-purple-600">
              {filteredOrders.filter(o => o.status === "shipped").length}
            </p>
            <p className="text-xs text-purple-800">Shipped</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-amber-600">
              {filteredOrders.filter(o => o.status === "processing").length}
            </p>
            <p className="text-xs text-amber-800">Processing</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Orders;
