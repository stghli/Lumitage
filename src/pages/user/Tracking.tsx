
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, MapPin, CheckCircle, Clock, Phone, Mail, AlertCircle, Calendar, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const trackingSteps = [
    {
      status: "completed",
      title: "Order Confirmed",
      description: "Your order has been confirmed and is being prepared",
      date: "Jan 10, 2024 - 10:30 AM",
      icon: CheckCircle,
      location: "Accra, Ghana"
    },
    {
      status: "completed", 
      title: "Package Prepared",
      description: "Your items have been carefully packaged",
      date: "Jan 11, 2024 - 2:15 PM",
      icon: Package,
      location: "Fulfillment Center"
    },
    {
      status: "current",
      title: "In Transit",
      description: "Your package is on its way to you",
      date: "Jan 12, 2024 - 8:00 AM",
      icon: Truck,
      location: "Tema Port"
    },
    {
      status: "pending",
      title: "Out for Delivery",
      description: "Your package is out for delivery",
      date: "Expected Jan 15, 2024",
      icon: MapPin,
      location: "Local Delivery Hub"
    },
    {
      status: "pending",
      title: "Delivered",
      description: "Package delivered successfully",
      date: "Expected Jan 15, 2024",
      icon: CheckCircle,
      location: "Your Address"
    }
  ];

  const getStepStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30";
      case "current":
        return "bg-blue-500 text-white shadow-lg shadow-blue-500/30 animate-pulse";
      default:
        return "bg-gray-200 text-gray-400";
    }
  };

  const getLineStyle = (status: string) => {
    return status === "completed" ? "bg-emerald-500" : "bg-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Order Tracking
          </h1>
          <p className="text-gray-600 mt-3 text-lg">Track your orders in real-time with detailed updates</p>
        </div>

        {/* Order Summary - Moved to Top */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center"
                  alt="Handwoven Kente Bag"
                  className="w-20 h-20 rounded-xl object-cover shadow-lg"
                />
                <div>
                  <CardTitle className="text-2xl">Order #ORD-002</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Handwoven Kente Bag • Tracking: TRK123456789
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      Ordered: Jan 10, 2024
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Package className="h-4 w-4" />
                      1 item
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      John Doe
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-6 py-3 text-lg mb-3">
                  In Transit
                </Badge>
                <div className="text-3xl font-bold text-gray-900">$112.50</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Search Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900 text-xl">
              <Search className="h-6 w-6" />
              Track Another Order
            </CardTitle>
            <CardDescription className="text-purple-700">
              Enter a different tracking number to see updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Enter tracking number (e.g., TRK123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 border-purple-200 focus:border-purple-400 h-12"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 h-12 px-8">
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Tracking Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Timeline - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                  Shipment Progress
                </CardTitle>
                <CardDescription className="text-base">
                  Real-time updates on your package location and status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-10">
                  {trackingSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex gap-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getStepStyle(step.status)}`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div className={`w-1 h-20 mt-6 ${getLineStyle(step.status)}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-16">
                          <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                            <h3 className={`font-bold text-xl mb-2 ${step.status === "current" ? "text-blue-600" : "text-gray-900"}`}>
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-4 text-base">{step.description}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="h-4 w-4" />
                                {step.date}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin className="h-4 w-4" />
                                {step.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Information Panel */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <MapPin className="h-6 w-6" />
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Shipping Address</h4>
                  <div className="text-gray-600 space-y-1">
                    <p className="font-medium">John Doe</p>
                    <p>123 Main Street</p>
                    <p>Accra, Ghana</p>
                    <p>GA-123-4567</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Estimated Delivery</h4>
                  <div className="text-gray-600">
                    <p className="font-medium text-green-700 text-lg">Monday, January 15, 2024</p>
                    <p>Between 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Package Details */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Package className="h-6 w-6" />
                  Package Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Carrier Information</h4>
                  <div className="text-gray-600 space-y-2">
                    <p><span className="font-medium">Carrier:</span> Ghana Post</p>
                    <p><span className="font-medium">Service:</span> Express Delivery</p>
                    <p><span className="font-medium">Weight:</span> 1.2 kg</p>
                    <p><span className="font-medium">Dimensions:</span> 30x20x10 cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <AlertCircle className="h-6 w-6" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-red-200 hover:bg-red-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support: +233 20 123 4567
                </Button>
                <Button variant="outline" className="w-full justify-start border-red-200 hover:bg-red-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Email: support@artisanmarket.com
                </Button>
                <div className="bg-white p-4 rounded-xl shadow-sm mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
                      Report an Issue
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
                      Change Delivery Address
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
                      Schedule Redelivery
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
