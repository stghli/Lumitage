
import { Shield, Truck, Repeat, Award } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "On all orders over $100"
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payment",
      description: "100% secure checkout"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "Handcrafted with care"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
