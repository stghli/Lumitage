
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { GeneralSettings } from "@/components/admin/settings/GeneralSettings";
import { NotificationSettings } from "@/components/admin/settings/NotificationSettings";
import { AppearanceSettings } from "@/components/admin/settings/AppearanceSettings";
import { IntegrationsSettings } from "@/components/admin/settings/IntegrationsSettings";
import { SettingsHeader } from "@/components/admin/settings/SettingsHeader";

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    storeName: "Your Store Name",
    storeDescription: "Your store description goes here. This will be displayed on your homepage.",
    contactEmail: "contact@yourstore.com",
    contactPhone: "+1 (555) 123-4567",
    enableFeaturedProducts: true,
    enableNewArrivals: true,
    enableReviews: true
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderConfirmations: true,
    orderUpdates: true,
    inventoryAlerts: true,
    marketingEmails: false
  });
  
  const saveSettings = () => {
    toast.success("Settings saved successfully");
  };
  
  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6">
      <SettingsHeader />
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6 w-full sm:w-auto">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="w-full">
          <GeneralSettings 
            initialSettings={generalSettings}
            onSettingsChange={setGeneralSettings}
          />
        </TabsContent>
        
        <TabsContent value="notifications" className="w-full">
          <NotificationSettings 
            initialSettings={notificationSettings}
            onSettingsChange={setNotificationSettings}
          />
        </TabsContent>
        
        <TabsContent value="appearance" className="w-full">
          <AppearanceSettings />
        </TabsContent>
        
        <TabsContent value="integrations" className="w-full">
          <IntegrationsSettings />
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end pb-8">
        <Button onClick={saveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default Settings;
