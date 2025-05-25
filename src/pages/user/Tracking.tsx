
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const trackingSteps = [
    {
      status: "completed",
      title: "Order Confirmed",
      description: "Your order has been confirmed and is being prepared",
      date: "Jan 10, 2024 - 10:30 AM",
      icon: CheckCircle
    },
    {
      status: "completed", 
      title: "Package Prepared",
      description: "Your items have been carefully packaged",
      date: "Jan 11, 2024 - 2:15 PM",
      icon: Package
    },
    {
      status: "current",
      title: "In Transit",
      description: "Your package is on its way to you",
      date: "Jan 12, 2024 - 8:00 AM",
      icon: Truck
    },
    {
      status: "pending",
      title: "Out for Delivery",
      description: "Your package is out for delivery",
      date: "Expected Jan 15, 2024",
      icon: MapPin
    },
    {
      status: "pending",
      title: "Delivered",
      description: "Package delivered successfully",
      date: "Expected Jan 15, 2024",
      icon: CheckCircle
    }
  ];

  const getStepStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 text-white";
      case "current":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-200 text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Order Tracking</h1>
        <p className="text-gray-500 mt-2">Track your orders in real-time</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Track Your Order</CardTitle>
          <CardDescription>Enter your tracking number to see the latest updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Enter tracking number (e.g., TRK123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Order #ORD-002</CardTitle>
              <CardDescription>Handwoven Kente Bag - Tracking: TRK123456789</CardDescription>
            </div>
            <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {trackingSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStepStyle(step.status)}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-12 mt-2 ${step.status === "completed" ? "bg-green-500" : "bg-gray-200"}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className={`font-semibold ${step.status === "current" ? "text-blue-600" : ""}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    <p className="text-xs text-gray-500 mt-2">{step.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Shipping Address</h4>
              <p className="text-sm text-gray-600">
                John Doe<br />
                123 Main Street<br />
                Accra, Ghana<br />
                GA-123-4567
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Estimated Delivery</h4>
              <p className="text-sm text-gray-600">
                Monday, January 15, 2024<br />
                Between 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tracking;
