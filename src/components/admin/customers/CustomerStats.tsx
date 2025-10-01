
import { Card, CardContent } from "@/components/ui/card";
import { Customer } from "./CustomerCard";

type CustomerStatsProps = {
  customers: Customer[];
};

export const CustomerStats = ({ customers }: CustomerStatsProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
          </div>
          <p className="text-2xl font-semibold mt-2">{customers.length}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Active</p>
          </div>
          <p className="text-2xl font-semibold mt-2 text-green-600">
            {customers.filter(c => c.status === "active").length}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Prospects</p>
          </div>
          <p className="text-2xl font-semibold mt-2 text-blue-600">
            {customers.filter(c => c.status === "prospect").length}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
          </div>
          <p className="text-2xl font-semibold mt-2">
            ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
