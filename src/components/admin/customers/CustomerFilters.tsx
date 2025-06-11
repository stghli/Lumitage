
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Mail } from "lucide-react";
import { Customer } from "./CustomerCard";

type CustomerFiltersProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  selectedCustomers: string[];
  filteredCustomers: Customer[];
  onToggleAllSelection: () => void;
};

export const CustomerFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  selectedCustomers,
  filteredCustomers,
  onToggleAllSelection
}: CustomerFiltersProps) => {
  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search customers by name, email, or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="prospect">Prospect</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="orders">Sort by Orders</SelectItem>
              <SelectItem value="spent">Sort by Spent</SelectItem>
              <SelectItem value="lastOrder">Sort by Last Order</SelectItem>
            </SelectContent>
          </Select>
          
          {selectedCustomers.length > 0 && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Email ({selectedCustomers.length})
              </Button>
              <Button variant="outline" size="sm">
                Export Selected
              </Button>
            </div>
          )}
          
          <Button className="bg-gradient-to-r from-green-600 to-teal-600">
            Export All
          </Button>
        </div>
        
        {/* Bulk Actions */}
        {filteredCustomers.length > 0 && (
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="select-all"
                checked={selectedCustomers.length === filteredCustomers.length}
                onCheckedChange={onToggleAllSelection}
              />
              <label htmlFor="select-all" className="text-sm font-medium">
                Select All ({filteredCustomers.length})
              </label>
            </div>
            {selectedCustomers.length > 0 && (
              <Badge variant="secondary">
                {selectedCustomers.length} selected
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
