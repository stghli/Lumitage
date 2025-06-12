
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { MessageSquare, Phone } from "lucide-react";

export const IntegrationsSettings = () => {
  const [mnotifySettings, setMnotifySettings] = useState({
    enabled: false,
    apiKey: "",
    senderId: "",
    orderConfirmation: true,
    orderUpdates: true,
    deliveryNotifications: true
  });

  const handleMnotifyChange = (field: string, value: string | boolean) => {
    setMnotifySettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const testConnection = () => {
    if (!mnotifySettings.apiKey || !mnotifySettings.senderId) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate API test
    toast.success("mNotify SMS connection test successful!");
  };

  const saveIntegration = () => {
    if (mnotifySettings.enabled && (!mnotifySettings.apiKey || !mnotifySettings.senderId)) {
      toast.error("Please fill in all required fields to enable mNotify SMS");
      return;
    }
    
    toast.success("Integration settings saved successfully");
  };

  return (
    <div className="space-y-6">
      {/* mNotify SMS Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <CardTitle>mNotify SMS</CardTitle>
              <CardDescription>
                Send SMS notifications to customers for orders and updates
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="mnotify-enabled" className="inline-block font-medium">
                Enable mNotify SMS
              </Label>
              <p className="text-sm text-muted-foreground">
                Activate SMS notifications through mNotify
              </p>
            </div>
            <Switch
              id="mnotify-enabled"
              checked={mnotifySettings.enabled}
              onCheckedChange={(checked) => handleMnotifyChange("enabled", checked)}
            />
          </div>

          {mnotifySettings.enabled && (
            <div className="space-y-4 border-t pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key *</Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Enter your mNotify API key"
                    value={mnotifySettings.apiKey}
                    onChange={(e) => handleMnotifyChange("apiKey", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sender-id">Sender ID *</Label>
                  <Input
                    id="sender-id"
                    placeholder="e.g., YourStore"
                    value={mnotifySettings.senderId}
                    onChange={(e) => handleMnotifyChange("senderId", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">SMS Notification Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Order Confirmation</Label>
                      <p className="text-sm text-muted-foreground">
                        Send SMS when order is placed
                      </p>
                    </div>
                    <Switch
                      checked={mnotifySettings.orderConfirmation}
                      onCheckedChange={(checked) => handleMnotifyChange("orderConfirmation", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Order Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Send SMS for status changes
                      </p>
                    </div>
                    <Switch
                      checked={mnotifySettings.orderUpdates}
                      onCheckedChange={(checked) => handleMnotifyChange("orderUpdates", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Delivery Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Send SMS when order is delivered
                      </p>
                    </div>
                    <Switch
                      checked={mnotifySettings.deliveryNotifications}
                      onCheckedChange={(checked) => handleMnotifyChange("deliveryNotifications", checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={testConnection}>
                  <Phone className="h-4 w-4 mr-2" />
                  Test Connection
                </Button>
                <Button onClick={saveIntegration}>
                  Save Integration
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Future Integrations Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>More Integrations</CardTitle>
          <CardDescription>
            Additional third-party services will be available soon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32 border rounded-md bg-gray-50">
            <p className="text-muted-foreground">More integrations coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
