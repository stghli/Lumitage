
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingBag, Heart, Clock, User, Package, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  color = "text-primary"
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
  color?: string;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription>{description}</CardDescription>
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome back, {user?.email?.split('@')[0] || 'User'}!</p>
        </div>
        <Button asChild>
          <Link to="/products/beads">Shop Now</Link>
        </Button>
      </div>

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
            color="text-blue-600"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Wishlist Items" 
            value="8" 
            description="Saved for later" 
            icon={Heart}
            color="text-red-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Pending Orders" 
            value="2" 
            description="Being processed" 
            icon={Clock}
            color="text-orange-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Reward Points" 
            value="245" 
            description="Available to use" 
            icon={Star}
            color="text-yellow-500"
          />
        </motion.div>
      </motion.div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Your latest purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Authentic Ashanti Beads</p>
                    <p className="text-sm text-muted-foreground">Order #ORD-001</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$85.99</p>
                  <p className="text-sm text-emerald-600">Delivered</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Handwoven Kente Bag</p>
                    <p className="text-sm text-muted-foreground">Order #ORD-002</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$112.50</p>
                  <p className="text-sm text-blue-600">Shipped</p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Traditional Sandals</p>
                    <p className="text-sm text-muted-foreground">Order #ORD-003</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$43.25</p>
                  <p className="text-sm text-orange-500">Processing</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">View All Orders</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Manage your profile and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Member Since</p>
                <p className="text-sm text-muted-foreground">January 2024</p>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Shipping Addresses
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Payment Methods
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/products/beads">Browse Beads</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/products/sandals">Browse Sandals</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/cart">View Cart</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Track Order
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Return Request
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded"></div>
                <div className="text-sm">
                  <p className="font-medium">Kente Pattern Beads</p>
                  <p className="text-muted-foreground">$45.00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded"></div>
                <div className="text-sm">
                  <p className="font-medium">Leather Sandals</p>
                  <p className="text-muted-foreground">$65.00</p>
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
