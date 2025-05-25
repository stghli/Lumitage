
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, Download } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: "$85.99",
      items: 3,
      product: "Authentic Ashanti Beads Set"
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "shipped",
      total: "$112.50",
      items: 2,
      product: "Handwoven Kente Bag"
    },
    {
      id: "ORD-003",
      date: "2024-01-08",
      status: "processing",
      total: "$43.25",
      items: 1,
      product: "Traditional Leather Sandals"
    },
    {
      id: "ORD-004",
      date: "2024-01-05",
      status: "delivered",
      total: "$67.99",
      items: 4,
      product: "Mixed Bead Collection"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Orders</h1>
        <p className="text-gray-500 mt-2">Track and manage your purchases</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{order.product}</CardTitle>
                  <CardDescription>
                    Order {order.id} • Placed on {order.date}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Package className="h-4 w-4" />
                    {order.items} item{order.items > 1 ? 's' : ''}
                  </div>
                  <div className="text-lg font-semibold">{order.total}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Invoice
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Orders;
