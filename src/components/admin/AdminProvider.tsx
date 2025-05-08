
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const AdminProvider = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Outlet />
      </div>
    </SidebarProvider>
  );
};
