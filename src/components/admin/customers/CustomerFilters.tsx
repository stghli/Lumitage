import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download } from "lucide-react";
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
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Search customers..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
          <SelectItem value="prospect">Prospect</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="orders">Orders</SelectItem>
          <SelectItem value="spent">Spent</SelectItem>
          <SelectItem value="lastOrder">Last Order</SelectItem>
        </SelectContent>
      </Select>
      
      {selectedCustomers.length > 0 && (
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export ({selectedCustomers.length})
        </Button>
      )}
    </div>
  );
};
