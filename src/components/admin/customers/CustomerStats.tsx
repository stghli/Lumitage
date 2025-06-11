
import { Card, CardContent } from "@/components/ui/card";
import { Customer } from "./CustomerCard";

type CustomerStatsProps = {
  customers: Customer[];
};

export const CustomerStats = ({ customers }: CustomerStatsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{customers.length}</p>
          <p className="text-sm text-blue-800">Total Customers</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {customers.filter(c => c.status === "active").length}
          </p>
          <p className="text-sm text-green-800">Active</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {customers.filter(c => c.status === "prospect").length}
          </p>
          <p className="text-sm text-purple-800">Prospects</p>
        </CardContent>
      </Card>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-amber-100">
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">
            ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
          </p>
          <p className="text-sm text-amber-800">Total Revenue</p>
        </CardContent>
      </Card>
    </div>
  );
};
