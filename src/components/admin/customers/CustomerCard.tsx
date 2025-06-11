
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Eye, Edit, Star, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  orders: number;
  spent: string;
  lastOrder: string;
  joinDate: string;
  status: "active" | "inactive" | "prospect";
  address: string;
  city: string;
  country: string;
  rating: number;
  favoriteProducts: string[];
  totalSpent: number;
  averageOrderValue: string;
};

type CustomerCardProps = {
  customer: Customer;
  index: number;
  isSelected: boolean;
  onToggleSelection: (customerId: string) => void;
  onViewDetails: (customer: Customer) => void;
};

export const CustomerCard = ({ customer, index, isSelected, onToggleSelection, onViewDetails }: CustomerCardProps) => {
  // Get initials from customer name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Get status color
  const getStatusColor = (status: Customer["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "prospect": return "bg-blue-100 text-blue-800";
      default: return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => onToggleSelection(customer.id)}
              />
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 font-semibold">
                  {getInitials(customer.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {customer.name}
                </CardTitle>
                {customer.company && (
                  <p className="text-sm text-gray-600">{customer.company}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              {customer.rating >= 4.5 && (
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              )}
              <Badge className={getStatusColor(customer.status)}>
                {customer.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700 truncate">{customer.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{customer.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{customer.city}, {customer.country}</span>
            </div>
          </div>
          
          {/* Customer Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-lg font-bold text-blue-600">{customer.orders}</p>
              <p className="text-xs text-blue-800">Orders</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-lg font-bold text-green-600">{customer.spent}</p>
              <p className="text-xs text-green-800">Total Spent</p>
            </div>
          </div>
          
          {/* Last Order */}
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Last order: {customer.lastOrder}</span>
          </div>
          
          {/* Quick Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => onViewDetails(customer)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
