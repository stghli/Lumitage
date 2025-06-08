
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const IntegrationsSettings = () => {
  return (
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
  );
};
