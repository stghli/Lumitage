
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ShoppingCart, Package, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription>{description}</CardDescription>
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back, {user?.email?.split('@')[0] || 'Admin'}</p>
      </div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Total Sales" 
            value="$12,345" 
            description="Up by 14% from last month" 
            icon={DollarSign} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Orders" 
            value="124" 
            description="18 pending shipment" 
            icon={ShoppingCart} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Products" 
            value="45" 
            description="5 out of stock" 
            icon={Package} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardCard 
            title="Customers" 
            value="463" 
            description="8 new this week" 
            icon={Users} 
          />
        </motion.div>
      </motion.div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Order #12345</p>
                  <p className="text-sm text-muted-foreground">John Doe</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$85.99</p>
                  <p className="text-sm text-muted-foreground">3 items</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Order #12344</p>
                  <p className="text-sm text-muted-foreground">Jane Smith</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$112.50</p>
                  <p className="text-sm text-muted-foreground">5 items</p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <div>
                  <p className="font-medium">Order #12343</p>
                  <p className="text-sm text-muted-foreground">Mike Johnson</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$43.25</p>
                  <p className="text-sm text-muted-foreground">2 items</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>Your most purchased products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Premium Headphones</p>
                  <p className="text-sm text-muted-foreground">Electronics</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">254 sold</p>
                  <p className="text-sm text-emerald-500">In stock</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Wireless Earbuds</p>
                  <p className="text-sm text-muted-foreground">Electronics</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">187 sold</p>
                  <p className="text-sm text-emerald-500">In stock</p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <div>
                  <p className="font-medium">Smart Watch</p>
                  <p className="text-sm text-muted-foreground">Accessories</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">145 sold</p>
                  <p className="text-sm text-red-500">Low stock</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
