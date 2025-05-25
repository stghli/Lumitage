
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, ShoppingBag, Heart, Clock, User, LogOut, Home } from "lucide-react";
import { Outlet, NavLink, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { toast } from "sonner";

export const UserLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const { toggleSidebar } = useSidebar();
  
  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/auth" />;
  }
  
  // Check if we're on a specific route for active state
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
    if (location.pathname === '/user/dashboard') {
      toast.success(`Welcome to your dashboard, ${user.email?.split('@')[0] || 'User'}`);
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
              <div className="font-semibold text-lg">My Account</div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/user/dashboard')}
                      tooltip="Dashboard"
                    >
                      <NavLink to="/user/dashboard">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/user/orders')}
                      tooltip="My Orders"
                    >
                      <NavLink to="/user/orders">
                        <ShoppingBag />
                        <span>My Orders</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/user/wishlist')}
                      tooltip="Wishlist"
                    >
                      <NavLink to="/user/wishlist">
                        <Heart />
                        <span>Wishlist</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/user/tracking')}
                      tooltip="Order Tracking"
                    >
                      <NavLink to="/user/tracking">
                        <Clock />
                        <span>Order Tracking</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive('/user/profile')}
                      tooltip="Profile Settings"
                    >
                      <NavLink to="/user/profile">
                        <User />
                        <span>Profile Settings</span>
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
                    {user?.email?.[0].toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">
                    {user?.email?.split('@')[0] || 'User'}
                  </div>
                  <div className="text-xs text-muted-foreground">Customer</div>
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
                <NavLink to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Store
                </NavLink>
              </Button>
            </div>
          </div>
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};
