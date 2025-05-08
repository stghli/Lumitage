
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Mail } from "lucide-react";

type Customer = {
  id: string;
  name: string;
  email: string;
  orders: number;
  spent: string;
  lastOrder: string;
};

// Mock data for customers
const mockCustomers: Customer[] = [
  { id: "CUST-001", name: "John Doe", email: "john.doe@example.com", orders: 5, spent: "$352.75", lastOrder: "2025-05-01" },
  { id: "CUST-002", name: "Jane Smith", email: "jane.smith@example.com", orders: 8, spent: "$689.50", lastOrder: "2025-05-07" },
  { id: "CUST-003", name: "Mike Johnson", email: "mike.johnson@example.com", orders: 2, spent: "$145.25", lastOrder: "2025-04-25" },
  { id: "CUST-004", name: "Sarah Williams", email: "sarah.w@example.com", orders: 12, spent: "$1,245.99", lastOrder: "2025-05-06" },
  { id: "CUST-005", name: "Robert Brown", email: "robert.b@example.com", orders: 3, spent: "$218.50", lastOrder: "2025-04-30" },
  { id: "CUST-006", name: "Emily Taylor", email: "emily.t@example.com", orders: 7, spent: "$576.25", lastOrder: "2025-05-04" },
  { id: "CUST-007", name: "David Wilson", email: "david.w@example.com", orders: 4, spent: "$312.75", lastOrder: "2025-05-03" },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers] = useState<Customer[]>(mockCustomers);
  
  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get initials from customer name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="text-gray-500 mt-2">Manage your customer relationships</p>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search customers by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>Export Customers</Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No customers found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm">
                          {getInitials(customer.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-xs text-muted-foreground">{customer.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1">
                        <Mail className="h-4 w-4" />
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Customers;
