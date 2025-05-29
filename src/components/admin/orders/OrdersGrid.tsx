
import React from 'react';
import { Package } from "lucide-react";
import OrderCard, { Order } from "./OrderCard";

type OrdersGridProps = {
  orders: Order[];
  onViewOrder: (order: Order) => void;
};

const OrdersGrid = ({ orders, onViewOrder }: OrdersGridProps) => {
  if (orders.length === 0) {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="col-span-full text-center py-8">
          <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No orders found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {orders.map((order, index) => (
        <OrderCard
          key={order.id}
          order={order}
          index={index}
          onViewOrder={onViewOrder}
        />
      ))}
    </div>
  );
};

export default OrdersGrid;
