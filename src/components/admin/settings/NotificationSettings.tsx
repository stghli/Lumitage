
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type NotificationSettingsData = {
  emailNotifications: boolean;
  orderConfirmations: boolean;
  orderUpdates: boolean;
  inventoryAlerts: boolean;
  marketingEmails: boolean;
};

interface NotificationSettingsProps {
  initialSettings: NotificationSettingsData;
  onSettingsChange: (settings: NotificationSettingsData) => void;
}

export const NotificationSettings = ({ initialSettings, onSettingsChange }: NotificationSettingsProps) => {
  const [settings, setSettings] = useState(initialSettings);
  
  const handleToggle = (name: string, checked: boolean) => {
    const newSettings = { ...settings, [name]: checked };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };
  
  return (
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
              checked={settings.emailNotifications} 
              onCheckedChange={(checked) => handleToggle("emailNotifications", checked)} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="orderConfirmations" className="inline-block">Order Confirmations</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when new orders are placed</p>
            </div>
            <Switch 
              id="orderConfirmations" 
              checked={settings.orderConfirmations} 
              onCheckedChange={(checked) => handleToggle("orderConfirmations", checked)} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="orderUpdates" className="inline-block">Order Status Updates</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when order status changes</p>
            </div>
            <Switch 
              id="orderUpdates" 
              checked={settings.orderUpdates} 
              onCheckedChange={(checked) => handleToggle("orderUpdates", checked)} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="inventoryAlerts" className="inline-block">Inventory Alerts</Label>
              <p className="text-sm text-muted-foreground">Receive alerts when products are low in stock</p>
            </div>
            <Switch 
              id="inventoryAlerts" 
              checked={settings.inventoryAlerts} 
              onCheckedChange={(checked) => handleToggle("inventoryAlerts", checked)} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="marketingEmails" className="inline-block">Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">Receive marketing tips and updates</p>
            </div>
            <Switch 
              id="marketingEmails" 
              checked={settings.marketingEmails} 
              onCheckedChange={(checked) => handleToggle("marketingEmails", checked)} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
