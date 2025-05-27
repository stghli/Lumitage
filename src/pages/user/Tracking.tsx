
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, MapPin, CheckCircle, Clock, Phone, Mail } from "lucide-react";
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
    <div className="space-y-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen -m-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Order Tracking
        </h1>
        <p className="text-gray-600 mt-2">Track your orders in real-time</p>
      </div>

      {/* Search Section */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Search className="h-6 w-6" />
            Track Your Order
          </CardTitle>
          <CardDescription className="text-blue-700">
            Enter your tracking number to see the latest updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter tracking number (e.g., TRK123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 border-blue-200 focus:border-blue-400"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Search className="h-4 w-4 mr-2" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Card */}
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&h=80&fit=crop&crop=center"
                alt="Handwoven Kente Bag"
                className="w-16 h-16 rounded-xl object-cover shadow-md"
              />
              <div>
                <CardTitle className="text-xl">Order #ORD-002</CardTitle>
                <CardDescription className="text-base">
                  Handwoven Kente Bag • Tracking: TRK123456789
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm">
              In Transit
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress Timeline */}
          <div className="space-y-8">
            {trackingSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStepStyle(step.status)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-16 mt-4 ${getLineStyle(step.status)}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className={`font-bold text-lg ${step.status === "current" ? "text-blue-600" : "text-gray-900"}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                      <div className="flex items-center justify-between mt-3">
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

      {/* Delivery Information Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <MapPin className="h-6 w-6" />
              Delivery Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
                <p className="font-medium text-green-700">Monday, January 15, 2024</p>
                <p>Between 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <Package className="h-6 w-6" />
              Package Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3 text-gray-900">Carrier Information</h4>
              <div className="text-gray-600 space-y-2">
                <p><span className="font-medium">Carrier:</span> Ghana Post</p>
                <p><span className="font-medium">Service:</span> Express Delivery</p>
                <p><span className="font-medium">Weight:</span> 1.2 kg</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3 text-gray-900">Need Help?</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-orange-200 hover:bg-orange-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="w-full justify-start border-orange-200 hover:bg-orange-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tracking;
