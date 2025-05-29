
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Order } from "./OrderCard";

type OrderDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
  onUpdateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
};

const OrderDetailsModal = ({ isOpen, onClose, order, onUpdateOrderStatus }: OrderDetailsModalProps) => {
  const getPaymentStatusColor = (status: Order["paymentStatus"]) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "";
    }
  };

  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order Details - {order.id}</DialogTitle>
          <DialogDescription>
            Complete order information and management
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-medium">{order.customer}</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">{order.customerEmail}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium">{order.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Order Date</p>
                <p className="font-medium">{order.date}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-gray-600">Shipping Address</p>
              <p className="font-medium">{order.shippingAddress}</p>
            </div>
          </div>
          
          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-3">Order Items ({order.items})</h3>
            <div className="space-y-2">
              {order.products.map((product, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>{product}</span>
                  <span className="font-medium">1x</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount</span>
              <span className="text-xl font-bold text-blue-600">{order.total}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Payment Status</span>
              <Badge className={getPaymentStatusColor(order.paymentStatus)}>
                {order.paymentStatus}
              </Badge>
            </div>
          </div>
          
          {/* Status Management */}
          <div>
            <h3 className="font-semibold mb-3">Update Order Status</h3>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onUpdateOrderStatus(order.id, "processing")}
                className="flex-1"
              >
                Mark Processing
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onUpdateOrderStatus(order.id, "shipped")}
                className="flex-1"
              >
                Mark Shipped
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onUpdateOrderStatus(order.id, "delivered")}
                className="flex-1"
              >
                Mark Delivered
              </Button>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline">Print Order</Button>
          <Button>Send Update Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;
