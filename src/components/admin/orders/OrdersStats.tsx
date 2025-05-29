
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Order } from "./OrderCard";

type OrdersStatsProps = {
  orders: Order[];
};

const OrdersStats = ({ orders }: OrdersStatsProps) => {
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
      <Card className="shadow-sm border bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-3 text-center">
          <p className="text-xl font-bold text-blue-600">{orders.length}</p>
          <p className="text-xs text-blue-800">Total Orders</p>
        </CardContent>
      </Card>
      <Card className="shadow-sm border bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-3 text-center">
          <p className="text-xl font-bold text-green-600">
            {orders.filter(o => o.status === "delivered").length}
          </p>
          <p className="text-xs text-green-800">Delivered</p>
        </CardContent>
      </Card>
      <Card className="shadow-sm border bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="p-3 text-center">
          <p className="text-xl font-bold text-purple-600">
            {orders.filter(o => o.status === "shipped").length}
          </p>
          <p className="text-xs text-purple-800">Shipped</p>
        </CardContent>
      </Card>
      <Card className="shadow-sm border bg-gradient-to-br from-amber-50 to-amber-100">
        <CardContent className="p-3 text-center">
          <p className="text-xl font-bold text-amber-600">
            {orders.filter(o => o.status === "processing").length}
          </p>
          <p className="text-xs text-amber-800">Processing</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersStats;
