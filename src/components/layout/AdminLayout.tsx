
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, Package, Settings, ShoppingCart, Users, LogOut } from "lucide-react";
import { Outlet, NavLink, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Chat } from "../admin/Chat/Chat";

export const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const { toggleSidebar } = useSidebar();
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar variant="inset">
          <SidebarHeader className="border-b border-border/50 p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-2 text-primary-foreground">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <div className="font-semibold text-lg">Admin Portal</div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/admin/dashboard')}
                      tooltip="Dashboard"
                    >
                      <NavLink to="/admin/dashboard">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/admin/orders')}
                      tooltip="Orders"
                    >
                      <NavLink to="/admin/orders">
                        <ShoppingCart />
                        <span>Orders</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/admin/products')}
                      tooltip="Products"
                    >
                      <NavLink to="/admin/products">
                        <Package />
                        <span>Products</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/admin/customers')}
                      tooltip="Customers"
                    >
                      <NavLink to="/admin/customers">
                        <Users />
                        <span>Customers</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/admin/settings')}
                      tooltip="Settings"
                    >
                      <NavLink to="/admin/settings">
                        <Settings />
                        <span>Settings</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-border/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {user?.email?.[0].toUpperCase() || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">
                    {user?.email?.split('@')[0] || 'Admin'}
                  </div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <SidebarTrigger />
            </div>
            <div>
              <Button variant="outline" size="sm" asChild>
                <NavLink to="/">View Store</NavLink>
              </Button>
            </div>
          </div>
          
          <Outlet />
        </main>
      </div>

      {/* Add Chat Component */}
      <Chat />
    </div>
  );
};
