
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, AlertTriangle, Clock, CheckCircle, BarChart3, Eye, ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trend,
  trendValue,
  color = "default"
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
  trend?: string;
  trendValue?: number;
  color?: "default" | "success" | "warning" | "danger";
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100";
      case "warning":
        return "border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100";
      case "danger":
        return "border-red-200 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100";
      default:
        return "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100";
    }
  };

  return (
    <Card className={`shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${getColorClasses()}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <div className="p-2 rounded-full bg-white/50">
          <Icon className="h-5 w-5 text-gray-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
        <div className="flex items-center justify-between">
          <CardDescription className="text-sm">{description}</CardDescription>
          {trend && (
            <div className="flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-600" />
              <Badge variant="secondary" className="text-xs text-green-700 bg-green-100">
                {trend}
              </Badge>
            </div>
          )}
        </div>
        {trendValue && (
          <Progress value={trendValue} className="mt-2 h-2" />
        )}
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
    { id: "ORD-001", customer: "John Doe", amount: "$85.99", items: 3, status: "delivered", time: "2 hours ago", product: "Handwoven Kente Bag" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$112.50", items: 2, status: "shipped", time: "4 hours ago", product: "Artisan Beads Set" },
    { id: "ORD-003", customer: "Mike Johnson", amount: "$43.25", items: 1, status: "processing", time: "6 hours ago", product: "Traditional Sandals" },
    { id: "ORD-004", customer: "Sarah Wilson", amount: "$67.99", items: 4, status: "confirmed", time: "8 hours ago", product: "Woven Basket" },
    { id: "ORD-005", customer: "David Brown", amount: "$156.75", items: 3, status: "delivered", time: "1 day ago", product: "Ceramic Pottery Set" },
  ];

  const topProducts = [
    { name: "Handwoven Kente Bag", sales: 254, revenue: "$12,700", rating: 4.9, trend: "+12%" },
    { name: "Artisan Beads Set", sales: 187, revenue: "$8,976", rating: 4.8, trend: "+8%" },
    { name: "Traditional Sandals", sales: 145, revenue: "$7,250", rating: 4.7, trend: "+15%" },
    { name: "Ceramic Pottery", sales: 89, revenue: "$4,450", rating: 4.6, trend: "+5%" },
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
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.email?.split('@')[0] || 'Admin'}!</h1>
            <p className="text-blue-100 text-lg mb-6">Here's what's happening with your store today.</p>
            <div className="flex gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Package className="h-4 w-4 mr-2" />
                Manage Inventory
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="h-16 w-16 text-white" />
            </div>
          </div>
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
            trendValue={75}
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
            trendValue={60}
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
            trendValue={40}
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
            trendValue={85}
            color="success"
          />
        </motion.div>
      </motion.div>
      
      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Orders - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="shadow-xl border-0 bg-white overflow-hidden">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                  <CardDescription>Latest orders from your store</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  View All Orders
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-50">
                {recentOrders.map((order, index) => (
                  <motion.div 
                    key={order.id}
                    className="p-6 hover:bg-gray-50/50 transition-all duration-200 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                          <ShoppingCart className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.product}</p>
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
          <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardTitle className="text-purple-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
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

          {/* Top Products */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
              <CardTitle className="text-green-900">Top Products</CardTitle>
              <CardDescription>Best performing items this month</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{product.sales} sold</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-green-600">{product.revenue}</p>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">{product.trend}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Low Stock Alert</p>
                    <p className="text-xs text-gray-600">5 products need restocking</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-green-200 shadow-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
