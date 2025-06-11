
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, Package, Settings, ShoppingCart, Users, LogOut, Store } from "lucide-react";
import { Outlet, NavLink, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Chat } from "../admin/Chat/Chat";

export const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [isAdminUser, setIsAdminUser] = useState(false);
  
  // Check if the user is admin based on email
  useEffect(() => {
    if (user && user.email && user.email.includes('admin')) {
      setIsAdminUser(true);
    }
  }, [user]);
  
  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/admin-auth" />;
  }
  
  // Check if we're on a specific dashboard route for active state
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    toast.success("Successfully signed out");
  };

  // Welcome toast on dashboard load
  useEffect(() => {
    if (location.pathname === '/admin/dashboard') {
      toast.success(`Welcome to admin dashboard, ${user.email?.split('@')[0] || 'Admin'}`);
    }
  }, [location.pathname, user.email]);

  const navigationItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/customers', label: 'Customers', icon: Users },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-primary to-red-600 p-2 text-white">
                <Store className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Artisan Market</h1>
                <p className="text-xs text-gray-500">Admin Portal</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* User Profile & Actions */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                <NavLink to="/">
                  <Store className="h-4 w-4 mr-2" />
                  View Store
                </NavLink>
              </Button>
              
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-white">
                    {user?.email?.[0].toUpperCase() || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-gray-900">
                    {user?.email?.split('@')[0] || 'Admin'}
                  </div>
                  <div className="text-xs text-gray-500">Administrator</div>
                </div>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="px-4 py-2">
            <div className="flex overflow-x-auto space-x-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Chat Component */}
      <Chat />
    </div>
  );
};
