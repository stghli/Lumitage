
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingBag, Heart, Clock, User, Package, Star, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  color = "text-primary",
  gradient = "from-blue-500 to-blue-600"
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
  color?: string;
  gradient?: string;
}) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-8 translate-x-8`} />
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <CardDescription className="text-gray-500 mt-1">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const UserDashboard = () => {
  const { user } = useAuth();

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
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            {user?.email?.split('@')[0] || 'User'}! 
          </p>
        </div>
        <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg">
          <Link to="/products/beads">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Total Orders" 
            value="12" 
            description="Completed purchases" 
            icon={ShoppingBag}
            gradient="from-blue-500 to-blue-600"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Wishlist Items" 
            value="8" 
            description="Saved for later" 
            icon={Heart}
            gradient="from-pink-500 to-rose-600"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Pending Orders" 
            value="2" 
            description="Being processed" 
            icon={Clock}
            gradient="from-orange-500 to-amber-600"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Reward Points" 
            value="245" 
            description="Available to use" 
            icon={Star}
            gradient="from-yellow-500 to-orange-500"
          />
        </motion.div>
      </motion.div>
      
      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Recent Orders</CardTitle>
                <CardDescription>Your latest purchases</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { id: "ORD-001", product: "Authentic Ashanti Beads", price: "$85.99", status: "Delivered", color: "emerald" },
                { id: "ORD-002", product: "Handwoven Kente Bag", price: "$112.50", status: "Shipped", color: "blue" },
                { id: "ORD-003", product: "Traditional Sandals", price: "$43.25", status: "Processing", color: "orange" }
              ].map((order, index) => (
                <div key={order.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{order.product}</p>
                      <p className="text-sm text-gray-500">{order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{order.price}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${order.color}-100 text-${order.color}-800`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 border-2 hover:bg-gray-50">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Account Information</CardTitle>
                <CardDescription>Manage your profile and preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <User className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Member Since</p>
                <p className="text-sm text-gray-600">January 2024</p>
              </div>
            </div>
            <div className="grid gap-3 mt-6">
              <Button variant="outline" className="justify-start border-2 hover:bg-gray-50">
                Edit Profile
              </Button>
              <Button variant="outline" className="justify-start border-2 hover:bg-gray-50">
                Shipping Addresses
              </Button>
              <Button variant="outline" className="justify-start border-2 hover:bg-gray-50">
                Payment Methods
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <ShoppingBag className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-100">
              <Link to="/products/beads">Browse Beads</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-100">
              <Link to="/products/sandals">Browse Sandals</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-100">
              <Link to="/cart">View Cart</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <Clock className="h-5 w-5" />
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild variant="outline" className="w-full justify-start border-green-200 hover:bg-green-100">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start border-green-200 hover:bg-green-100">
              Track Order
            </Button>
            <Button variant="outline" className="w-full justify-start border-green-200 hover:bg-green-100">
              Return Request
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <TrendingUp className="h-5 w-5" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg"></div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Kente Pattern Beads</p>
                  <p className="text-purple-600 font-medium">$45.00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg"></div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Leather Sandals</p>
                  <p className="text-purple-600 font-medium">$65.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
