
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Edit, Star, MapPin, Calendar } from "lucide-react";
import { Customer } from "./CustomerCard";

type CustomerProfileModalProps = {
  customer: Customer | null;
  isOpen: boolean;
  onClose: () => void;
};

export const CustomerProfileModal = ({ customer, isOpen, onClose }: CustomerProfileModalProps) => {
  if (!customer) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Customer Profile - {customer.name}</DialogTitle>
          <DialogDescription>
            Complete customer information and activity history
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Customer Header */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 font-bold text-xl">
                {getInitials(customer.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{customer.name}</h3>
              {customer.company && (
                <p className="text-gray-600">{customer.company}</p>
              )}
              <div className="flex items-center gap-2 mt-1">
                <Badge className={getStatusColor(customer.status)}>
                  {customer.status}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{customer.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{customer.address}, {customer.city}, {customer.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Joined: {customer.joinDate}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Order Statistics</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-xl font-bold text-blue-600">{customer.orders}</p>
                  <p className="text-xs text-blue-800">Total Orders</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-xl font-bold text-green-600">{customer.spent}</p>
                  <p className="text-xs text-green-800">Total Spent</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <p className="text-xl font-bold text-purple-600">{customer.averageOrderValue}</p>
                  <p className="text-xs text-purple-800">Avg. Order</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg text-center">
                  <p className="text-xl font-bold text-amber-600">{customer.lastOrder}</p>
                  <p className="text-xs text-amber-800">Last Order</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Favorite Products */}
          <div>
            <h4 className="font-semibold mb-3">Favorite Products</h4>
            <div className="flex flex-wrap gap-2">
              {customer.favoriteProducts.map((product, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {product}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit Customer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
