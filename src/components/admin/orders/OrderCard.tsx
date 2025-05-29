
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Calendar, Package, DollarSign, Eye, Edit, Clock, Truck, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export type Order = {
  id: string;
  customer: string;
  customerEmail: string;
  date: string;
  total: string;
  status: "processing" | "shipped" | "delivered" | "cancelled" | "pending";
  paymentStatus: "paid" | "pending" | "failed";
  items: number;
  products: string[];
  shippingAddress: string;
  phone: string;
};

type OrderCardProps = {
  order: Order;
  index: number;
  onViewOrder: (order: Order) => void;
};

const OrderCard = ({ order, index, onViewOrder }: OrderCardProps) => {
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing": return "bg-blue-100 text-blue-800";
      case "shipped": return "bg-purple-100 text-purple-800";
      case "delivered": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "";
    }
  };
  
  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "processing": return <Clock className="h-3 w-3" />;
      case "shipped": return <Truck className="h-3 w-3" />;
      case "delivered": return <CheckCircle className="h-3 w-3" />;
      case "cancelled": return <XCircle className="h-3 w-3" />;
      case "pending": return <Clock className="h-3 w-3" />;
      default: return null;
    }
  };
  
  const getPaymentStatusColor = (status: Order["paymentStatus"]) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="shadow-sm border hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer bg-white">
        <CardHeader className="pb-2 p-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-bold text-gray-900 truncate">{order.id}</CardTitle>
            <Badge className={`${getStatusColor(order.status)} text-xs px-1.5 py-0.5`}>
              {getStatusIcon(order.status)}
              <span className="ml-1 capitalize">{order.status}</span>
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3 p-3 pt-0">
          {/* Customer Info */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-3 w-3 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900 text-xs truncate">{order.customer}</p>
              <p className="text-xs text-gray-600 truncate">{order.customerEmail}</p>
            </div>
          </div>
          
          {/* Order Details */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600 truncate">{order.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Package className="h-3 w-3 text-gray-500" />
              <span className="text-gray-600">{order.items} items</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-3 w-3 text-gray-500" />
              <span className="font-semibold text-gray-900">{order.total}</span>
            </div>
            <div className="flex justify-end">
              <Badge className={`${getPaymentStatusColor(order.paymentStatus)} text-xs px-1 py-0.5`}>
                {order.paymentStatus}
              </Badge>
            </div>
          </div>
          
          {/* Products Preview */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Products:</p>
            <p className="text-xs text-gray-700 line-clamp-1 truncate">
              {order.products.join(", ")}
            </p>
          </div>
          
          {/* Actions */}
          <div className="flex gap-1 pt-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 h-7 text-xs"
              onClick={() => onViewOrder(order)}
            >
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
            
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Edit className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OrderCard;
