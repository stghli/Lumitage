
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AppearanceSettings = () => {
  return (
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
  );
};
