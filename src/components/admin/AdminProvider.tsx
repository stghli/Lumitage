
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const AdminProvider = () => {
  return (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  );
};
