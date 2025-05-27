
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: "$85.99",
      items: 3,
      product: "Authentic Ashanti Beads Set",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "shipped",
      total: "$112.50",
      items: 2,
      product: "Handwoven Kente Bag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: "ORD-003",
      date: "2024-01-08",
      status: "processing",
      total: "$43.25",
      items: 1,
      product: "Traditional Leather Sandals",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: "ORD-004",
      date: "2024-01-05",
      status: "delivered",
      total: "$67.99",
      items: 4,
      product: "Mixed Bead Collection",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: "ORD-005",
      date: "2024-01-03",
      status: "cancelled",
      total: "$29.99",
      items: 1,
      product: "Small Craft Beads",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: "ORD-006",
      date: "2024-01-01",
      status: "delivered",
      total: "$156.75",
      items: 3,
      product: "Premium Artisan Set",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "shipped": return "bg-blue-100 text-blue-800 border-blue-200";
      case "processing": return "bg-amber-100 text-amber-800 border-amber-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen -m-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              My Orders
            </h1>
            <p className="text-gray-600 mt-2">Track and manage your purchases</p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search orders..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {orders.map((order) => (
          <motion.div key={order.id} variants={itemVariants}>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img 
                      src={order.image} 
                      alt={order.product}
                      className="w-12 h-12 rounded-lg object-cover shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-lg line-clamp-1">{order.product}</CardTitle>
                      <CardDescription className="text-sm">
                        {order.id} • {order.date}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(order.status)} border font-medium`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Order Details */}
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Package className="h-4 w-4" />
                      {order.items} item{order.items > 1 ? 's' : ''}
                    </div>
                    <div className="text-xl font-bold text-gray-900">{order.total}</div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Order Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-900">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">4</div>
              <div className="text-sm text-gray-600">Delivered</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="text-sm text-gray-600">Shipped</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-amber-600">1</div>
              <div className="text-sm text-gray-600">Processing</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-gray-600">Cancelled</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
