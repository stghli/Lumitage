
import { useState } from "react";
import { User } from "lucide-react";
import { CustomerCard, Customer } from "@/components/admin/customers/CustomerCard";
import { CustomerFilters } from "@/components/admin/customers/CustomerFilters";
import { CustomerStats } from "@/components/admin/customers/CustomerStats";
import { CustomerProfileModal } from "@/components/admin/customers/CustomerProfileModal";

// Enhanced mock data for customers
const mockCustomers: Customer[] = [
  { 
    id: "CUST-001", 
    name: "John Doe", 
    email: "john.doe@example.com", 
    phone: "+1 (555) 123-4567",
    company: "Tech Solutions Inc.",
    orders: 5, 
    spent: "$352.75", 
    lastOrder: "2025-05-01",
    joinDate: "2024-08-15",
    status: "active",
    address: "123 Main Street",
    city: "New York",
    country: "USA",
    rating: 4.8,
    favoriteProducts: ["Handwoven Kente Bag", "Artisan Beads"],
    totalSpent: 352.75,
    averageOrderValue: "$70.55"
  },
  { 
    id: "CUST-002", 
    name: "Jane Smith", 
    email: "jane.smith@example.com", 
    phone: "+1 (555) 987-6543",
    company: "Design Studio Pro",
    orders: 8, 
    spent: "$689.50", 
    lastOrder: "2025-05-07",
    joinDate: "2024-06-20",
    status: "active",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    country: "USA",
    rating: 4.9,
    favoriteProducts: ["Traditional Sandals", "Ceramic Pottery"],
    totalSpent: 689.50,
    averageOrderValue: "$86.19"
  },
  { 
    id: "CUST-003", 
    name: "Mike Johnson", 
    email: "mike.johnson@example.com", 
    phone: "+1 (555) 246-8101",
    orders: 2, 
    spent: "$145.25", 
    lastOrder: "2025-04-25",
    joinDate: "2024-11-10",
    status: "inactive",
    address: "789 Pine Street",
    city: "Chicago",
    country: "USA",
    rating: 4.5,
    favoriteProducts: ["Woven Basket"],
    totalSpent: 145.25,
    averageOrderValue: "$72.63"
  },
  { 
    id: "CUST-004", 
    name: "Sarah Williams", 
    email: "sarah.w@example.com", 
    phone: "+1 (555) 369-2580",
    company: "Creative Agency",
    orders: 12, 
    spent: "$1,245.99", 
    lastOrder: "2025-05-06",
    joinDate: "2024-03-05",
    status: "active",
    address: "321 Elm Drive",
    city: "Miami",
    country: "USA",
    rating: 5.0,
    favoriteProducts: ["Artisan Beads", "Traditional Sandals", "Handwoven Kente Bag"],
    totalSpent: 1245.99,
    averageOrderValue: "$103.83"
  },
  { 
    id: "CUST-005", 
    name: "Robert Brown", 
    email: "robert.b@example.com", 
    phone: "+1 (555) 147-9632",
    orders: 3, 
    spent: "$218.50", 
    lastOrder: "2025-04-30",
    joinDate: "2024-09-12",
    status: "prospect",
    address: "654 Maple Lane",
    city: "Seattle",
    country: "USA",
    rating: 4.3,
    favoriteProducts: ["Ceramic Pottery"],
    totalSpent: 218.50,
    averageOrderValue: "$72.83"
  },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [customers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter and sort customers
  const filteredCustomers = customers
    .filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.company?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "orders":
          return b.orders - a.orders;
        case "spent":
          return b.totalSpent - a.totalSpent;
        case "lastOrder":
          return new Date(b.lastOrder).getTime() - new Date(a.lastOrder).getTime();
        default:
          return 0;
      }
    });

  // Handle bulk selection
  const toggleCustomerSelection = (customerId: string) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId) 
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const toggleAllSelection = () => {
    setSelectedCustomers(
      selectedCustomers.length === filteredCustomers.length 
        ? [] 
        : filteredCustomers.map(c => c.id)
    );
  };

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Customer Management</h1>
        <p className="text-green-100">Build and maintain strong customer relationships</p>
      </div>
      
      {/* Filters and Search */}
      <CustomerFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCustomers={selectedCustomers}
        filteredCustomers={filteredCustomers}
        onToggleAllSelection={toggleAllSelection}
      />

      {/* Customers Grid */}
      <div className="w-full">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {filteredCustomers.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No customers found matching your criteria.</p>
            </div>
          ) : (
            filteredCustomers.map((customer, index) => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                index={index}
                isSelected={selectedCustomers.includes(customer.id)}
                onToggleSelection={toggleCustomerSelection}
                onViewDetails={handleViewDetails}
              />
            ))
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <CustomerStats customers={filteredCustomers} />

      {/* Customer Profile Modal */}
      <CustomerProfileModal
        customer={selectedCustomer}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Customers;
