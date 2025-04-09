
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const OrderConfirmation = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-secondary">Order Confirmed!</h1>
              <p className="text-gray-600 mt-2">
                Thank you for your purchase. We've received your order and will process it as soon as possible.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">#{orderNumber}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span>customer@example.com</span>
              </div>
            </div>
            
            <div className="border-t pt-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>We're preparing your order for shipping.</span>
                </li>
                <li className="flex">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>You'll receive a shipping confirmation email with tracking information soon.</span>
                </li>
                <li className="flex">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Your package is on its way! You can track its journey using the tracking number.</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center space-y-4">
              <Button asChild className="bg-primary hover:bg-red-700">
                <Link to="/">Continue Shopping</Link>
              </Button>
              <div>
                <p className="text-sm text-gray-600">
                  Have questions about your order? <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
