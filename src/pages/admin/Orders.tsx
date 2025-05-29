
import { useState } from "react";
import OrdersHeader from "@/components/admin/orders/OrdersHeader";
import OrdersFilters from "@/components/admin/orders/OrdersFilters";
import OrdersGrid from "@/components/admin/orders/OrdersGrid";
import OrdersStats from "@/components/admin/orders/OrdersStats";
import OrderDetailsModal from "@/components/admin/orders/OrderDetailsModal";
import { Order } from "@/components/admin/orders/OrderCard";

// Enhanced mock data for orders
const mockOrders: Order[] = [
  { 
    id: "ORD-1234", 
    customer: "John Doe", 
    customerEmail: "john.doe@example.com",
    date: "2025-05-08", 
    total: "$85.99", 
    status: "processing", 
    paymentStatus: "paid",
    items: 3,
    products: ["Handwoven Kente Bag", "Artisan Beads", "Traditional Cloth"],
    shippingAddress: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567"
  },
  { 
    id: "ORD-1235", 
    customer: "Jane Smith", 
    customerEmail: "jane.smith@example.com",
    date: "2025-05-07", 
    total: "$112.50", 
    status: "shipped", 
    paymentStatus: "paid",
    items: 5,
    products: ["Ceramic Pottery Set", "Woven Basket", "Traditional Sandals"],
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
    phone: "+1 (555) 987-6543"
  },
  { 
    id: "ORD-1236", 
    customer: "Mike Johnson", 
    customerEmail: "mike.j@example.com",
    date: "2025-05-07", 
    total: "$43.25", 
    status: "delivered", 
    paymentStatus: "paid",
    items: 2,
    products: ["Artisan Jewelry", "Handmade Soap"],
    shippingAddress: "789 Pine St, Chicago, IL 60601",
    phone: "+1 (555) 246-8101"
  },
  { 
    id: "ORD-1237", 
    customer: "Sarah Williams", 
    customerEmail: "sarah.w@example.com",
    date: "2025-05-06", 
    total: "$199.99", 
    status: "pending", 
    paymentStatus: "pending",
    items: 1,
    products: ["Premium Textile Collection"],
    shippingAddress: "321 Elm Dr, Miami, FL 33101",
    phone: "+1 (555) 369-2580"
  },
  { 
    id: "ORD-1238", 
    customer: "Robert Brown", 
    customerEmail: "robert.b@example.com",
    date: "2025-05-05", 
    total: "$65.75", 
    status: "cancelled", 
    paymentStatus: "failed",
    items: 4,
    products: ["Wooden Crafts", "Traditional Masks"],
    shippingAddress: "654 Maple Ln, Seattle, WA 98101",
    phone: "+1 (555) 147-9632"
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter orders based on search term and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  
  return (
    <div className="space-y-6">
      <OrdersHeader />
      
      <OrdersFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        paymentFilter={paymentFilter}
        setPaymentFilter={setPaymentFilter}
      />

      <OrdersGrid 
        orders={filteredOrders}
        onViewOrder={handleViewOrder}
      />

      <OrdersStats orders={filteredOrders} />

      <OrderDetailsModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
        onUpdateOrderStatus={updateOrderStatus}
      />
    </div>
  );
};

export default Orders;
