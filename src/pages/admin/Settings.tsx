
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
  
  // Handler for general settings changes
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handler for toggle switch changes in general settings
  const handleGeneralToggle = (name: string, checked: boolean) => {
    setGeneralSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  // Handler for notification settings toggle
  const handleNotificationToggle = (name: string, checked: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  // Save settings handler
  const saveSettings = () => {
    toast.success("Settings saved successfully");
  };
  
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-2">Configure your store settings</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure basic information about your store.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input 
                    id="storeName" 
                    name="storeName" 
                    value={generalSettings.storeName} 
                    onChange={handleGeneralChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="storeDescription">Store Description</Label>
                  <Textarea 
                    id="storeDescription" 
                    name="storeDescription" 
                    value={generalSettings.storeDescription} 
                    onChange={handleGeneralChange} 
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input 
                    id="contactEmail" 
                    name="contactEmail" 
                    value={generalSettings.contactEmail} 
                    onChange={handleGeneralChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input 
                    id="contactPhone" 
                    name="contactPhone" 
                    value={generalSettings.contactPhone} 
                    onChange={handleGeneralChange} 
                  />
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Homepage Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableFeaturedProducts" className="inline-block">Enable Featured Products</Label>
                      <p className="text-sm text-muted-foreground">Show featured products section on homepage</p>
                    </div>
                    <Switch 
                      id="enableFeaturedProducts" 
                      checked={generalSettings.enableFeaturedProducts} 
                      onCheckedChange={(checked) => handleGeneralToggle("enableFeaturedProducts", checked)} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableNewArrivals" className="inline-block">Enable New Arrivals</Label>
                      <p className="text-sm text-muted-foreground">Show new arrivals section on homepage</p>
                    </div>
                    <Switch 
                      id="enableNewArrivals" 
                      checked={generalSettings.enableNewArrivals} 
                      onCheckedChange={(checked) => handleGeneralToggle("enableNewArrivals", checked)} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableReviews" className="inline-block">Enable Product Reviews</Label>
                      <p className="text-sm text-muted-foreground">Allow customers to leave reviews on products</p>
                    </div>
                    <Switch 
                      id="enableReviews" 
                      checked={generalSettings.enableReviews} 
                      onCheckedChange={(checked) => handleGeneralToggle("enableReviews", checked)} 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how you receive notifications about your store activity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications" className="inline-block">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive store notifications via email</p>
                  </div>
                  <Switch 
                    id="emailNotifications" 
                    checked={notificationSettings.emailNotifications} 
                    onCheckedChange={(checked) => handleNotificationToggle("emailNotifications", checked)} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="orderConfirmations" className="inline-block">Order Confirmations</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when new orders are placed</p>
                  </div>
                  <Switch 
                    id="orderConfirmations" 
                    checked={notificationSettings.orderConfirmations} 
                    onCheckedChange={(checked) => handleNotificationToggle("orderConfirmations", checked)} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="orderUpdates" className="inline-block">Order Status Updates</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when order status changes</p>
                  </div>
                  <Switch 
                    id="orderUpdates" 
                    checked={notificationSettings.orderUpdates} 
                    onCheckedChange={(checked) => handleNotificationToggle("orderUpdates", checked)} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="inventoryAlerts" className="inline-block">Inventory Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts when products are low in stock</p>
                  </div>
                  <Switch 
                    id="inventoryAlerts" 
                    checked={notificationSettings.inventoryAlerts} 
                    onCheckedChange={(checked) => handleNotificationToggle("inventoryAlerts", checked)} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketingEmails" className="inline-block">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing tips and updates</p>
                  </div>
                  <Switch 
                    id="marketingEmails" 
                    checked={notificationSettings.marketingEmails} 
                    onCheckedChange={(checked) => handleNotificationToggle("marketingEmails", checked)} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how your store looks to customers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 border rounded-md bg-gray-50">
                <p className="text-muted-foreground">Appearance settings coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect your store with third-party services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 border rounded-md bg-gray-50">
                <p className="text-muted-foreground">Integrations coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end">
        <Button onClick={saveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default Settings;
