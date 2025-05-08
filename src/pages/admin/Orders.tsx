
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

type Order = {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "paid" | "pending" | "failed";
  items: number;
};

// Mock data for orders
const mockOrders: Order[] = [
  { 
    id: "ORD-1234", 
    customer: "John Doe", 
    date: "2025-05-08", 
    total: "$85.99", 
    status: "processing", 
    paymentStatus: "paid",
    items: 3
  },
  { 
    id: "ORD-1235", 
    customer: "Jane Smith", 
    date: "2025-05-07", 
    total: "$112.50", 
    status: "shipped", 
    paymentStatus: "paid",
    items: 5
  },
  { 
    id: "ORD-1236", 
    customer: "Mike Johnson", 
    date: "2025-05-07", 
    total: "$43.25", 
    status: "delivered", 
    paymentStatus: "paid",
    items: 2
  },
  { 
    id: "ORD-1237", 
    customer: "Sarah Williams", 
    date: "2025-05-06", 
    total: "$199.99", 
    status: "processing", 
    paymentStatus: "pending",
    items: 1
  },
  { 
    id: "ORD-1238", 
    customer: "Robert Brown", 
    date: "2025-05-05", 
    total: "$65.75", 
    status: "cancelled", 
    paymentStatus: "failed",
    items: 4
  },
  { 
    id: "ORD-1239", 
    customer: "Emily Taylor", 
    date: "2025-05-04", 
    total: "$129.50", 
    status: "delivered", 
    paymentStatus: "paid",
    items: 2
  },
  { 
    id: "ORD-1240", 
    customer: "David Wilson", 
    date: "2025-05-03", 
    total: "$78.25", 
    status: "shipped", 
    paymentStatus: "paid",
    items: 3
  }
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get badge color based on status
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing": return "bg-blue-100 text-blue-800";
      case "shipped": return "bg-purple-100 text-purple-800";
      case "delivered": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "";
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <p className="text-gray-500 mt-2">View and manage your store orders</p>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search orders by ID or customer..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>New Order</Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No orders found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPaymentStatusColor(order.paymentStatus)}>
                      {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8">
                      View Details
                    </Button>
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

export default Orders;
