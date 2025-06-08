
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type GeneralSettingsData = {
  storeName: string;
  storeDescription: string;
  contactEmail: string;
  contactPhone: string;
  enableFeaturedProducts: boolean;
  enableNewArrivals: boolean;
  enableReviews: boolean;
};

interface GeneralSettingsProps {
  initialSettings: GeneralSettingsData;
  onSettingsChange: (settings: GeneralSettingsData) => void;
}

export const GeneralSettings = ({ initialSettings, onSettingsChange }: GeneralSettingsProps) => {
  const [settings, setSettings] = useState(initialSettings);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newSettings = { ...settings, [name]: value };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };
  
  const handleToggle = (name: string, checked: boolean) => {
    const newSettings = { ...settings, [name]: checked };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };
  
  return (
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
              value={settings.storeName} 
              onChange={handleChange} 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="storeDescription">Store Description</Label>
            <Textarea 
              id="storeDescription" 
              name="storeDescription" 
              value={settings.storeDescription} 
              onChange={handleChange} 
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
              value={settings.contactEmail} 
              onChange={handleChange} 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contactPhone">Contact Phone</Label>
            <Input 
              id="contactPhone" 
              name="contactPhone" 
              value={settings.contactPhone} 
              onChange={handleChange} 
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
                checked={settings.enableFeaturedProducts} 
                onCheckedChange={(checked) => handleToggle("enableFeaturedProducts", checked)} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableNewArrivals" className="inline-block">Enable New Arrivals</Label>
                <p className="text-sm text-muted-foreground">Show new arrivals section on homepage</p>
              </div>
              <Switch 
                id="enableNewArrivals" 
                checked={settings.enableNewArrivals} 
                onCheckedChange={(checked) => handleToggle("enableNewArrivals", checked)} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableReviews" className="inline-block">Enable Product Reviews</Label>
                <p className="text-sm text-muted-foreground">Allow customers to leave reviews on products</p>
              </div>
              <Switch 
                id="enableReviews" 
                checked={settings.enableReviews} 
                onCheckedChange={(checked) => handleToggle("enableReviews", checked)} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
