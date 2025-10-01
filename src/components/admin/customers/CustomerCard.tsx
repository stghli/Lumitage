import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Eye, Star } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";

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
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const getStatusVariant = (status: Customer["status"]) => {
    switch (status) {
      case "active": return "default";
      case "inactive": return "secondary";
      case "prospect": return "outline";
      default: return "default";
    }
  };

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggleSelection(customer.id)}
        />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {getInitials(customer.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{customer.name}</div>
            <div className="text-sm text-muted-foreground">{customer.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{customer.company || '-'}</TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span>{customer.rating}</span>
        </div>
      </TableCell>
      <TableCell className="text-center">{customer.orders}</TableCell>
      <TableCell>{customer.spent}</TableCell>
      <TableCell>
        <div className="text-sm">
          <div>{customer.city}</div>
          <div className="text-muted-foreground">{customer.country}</div>
        </div>
      </TableCell>
      <TableCell>
        <Badge variant={getStatusVariant(customer.status)}>
          {customer.status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onViewDetails(customer)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
