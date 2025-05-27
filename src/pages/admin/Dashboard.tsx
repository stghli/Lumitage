
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trend,
  color = "default"
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
  trend?: string;
  color?: "default" | "success" | "warning" | "danger";
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50";
      case "warning":
        return "border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50";
      case "danger":
        return "border-red-200 bg-gradient-to-br from-red-50 to-pink-50";
      default:
        return "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50";
    }
  };

  return (
    <Card className={`shadow-lg border-0 ${getColorClasses()}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <Icon className="h-5 w-5 text-gray-600" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="flex items-center justify-between">
          <CardDescription className="text-sm">{description}</CardDescription>
          {trend && (
            <Badge variant="secondary" className="text-xs">
              {trend}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const { user } = useAuth();

  // Animation variants
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

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$85.99", items: 3, status: "delivered", time: "2 hours ago" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$112.50", items: 2, status: "shipped", time: "4 hours ago" },
    { id: "ORD-003", customer: "Mike Johnson", amount: "$43.25", items: 1, status: "processing", time: "6 hours ago" },
    { id: "ORD-004", customer: "Sarah Wilson", amount: "$67.99", items: 4, status: "confirmed", time: "8 hours ago" },
    { id: "ORD-005", customer: "David Brown", amount: "$156.75", items: 3, status: "delivered", time: "1 day ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-emerald-100 text-emerald-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-amber-100 text-amber-800";
      case "confirmed": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8 p-2">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-blue-100 text-lg">Welcome back, {user?.email?.split('@')[0] || 'Admin'}! Here's what's happening with your store today.</p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Package className="h-4 w-4 mr-2" />
            Manage Inventory
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Total Revenue" 
            value="$45,231" 
            description="Up 20.1% from last month" 
            icon={DollarSign}
            trend="+20.1%"
            color="success"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Orders Today" 
            value="124" 
            description="18 pending fulfillment" 
            icon={ShoppingCart}
            trend="+12%"
            color="default"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Active Products" 
            value="89" 
            description="5 low stock items" 
            icon={Package}
            trend="5 alerts"
            color="warning"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Total Customers" 
            value="2,463" 
            description="45 new this week" 
            icon={Users}
            trend="+45"
            color="success"
          />
        </motion.div>
      </motion.div>
      
      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Orders - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                  <CardDescription>Latest orders from your store</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All Orders
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {recentOrders.map((order, index) => (
                  <motion.div 
                    key={order.id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{order.amount}</p>
                        <p className="text-sm text-gray-600">{order.items} items</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <p className="text-xs text-gray-500">{order.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                <Package className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
              <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-100">
                <Users className="h-4 w-4 mr-2" />
                View Customers
              </Button>
              <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-100">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Low Stock Alert</p>
                    <p className="text-xs text-gray-600">5 products need restocking</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment Received</p>
                    <p className="text-xs text-gray-600">$1,250 from recent orders</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-green-900">Top Products</CardTitle>
              <CardDescription>Best selling items this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Handwoven Kente Bag</p>
                    <p className="text-xs text-gray-600">254 sold</p>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">Best Seller</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Artisan Beads Set</p>
                    <p className="text-xs text-gray-600">187 sold</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Traditional Sandals</p>
                    <p className="text-xs text-gray-600">145 sold</p>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">Trending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
