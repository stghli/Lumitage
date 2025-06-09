
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Download, Receipt as ReceiptIcon, Mail } from 'lucide-react';
import { CartItem } from '@/hooks/useCart';

type ReceiptProps = {
  orderData: {
    reference: string;
    email: string;
    amount: number;
    status: string;
    items: CartItem[];
    shippingAddress: string;
    customerInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
  };
  onClose: () => void;
};

export const Receipt = ({ orderData, onClose }: ReceiptProps) => {
  const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a simple text receipt
    const receiptText = `
RECEIPT
=======
Order Reference: ${orderData.reference}
Date: ${new Date().toLocaleDateString()}
Customer: ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
Email: ${orderData.customerInfo.email}

ITEMS:
${orderData.items.map(item => `- ${item.name} (Qty: ${item.quantity}) - GH₵${(item.price * item.quantity).toFixed(2)}`).join('\n')}

SUMMARY:
Subtotal: GH₵${subtotal.toFixed(2)}
Shipping: GH₵${shipping.toFixed(2)}
Tax: GH₵${tax.toFixed(2)}
Total: GH₵${total.toFixed(2)}

Payment Status: ${orderData.status}
Shipping Address: ${orderData.shippingAddress}
    `;

    const blob = new Blob([receiptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${orderData.reference}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center border-b">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
          <p className="text-gray-600">Your order has been confirmed</p>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Order Details */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <ReceiptIcon className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Receipt Details</h3>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Order Reference</p>
                  <p className="font-medium">{orderData.reference}</p>
                </div>
                <div>
                  <p className="text-gray-600">Date</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Customer</p>
                  <p className="font-medium">{orderData.customerInfo.firstName} {orderData.customerInfo.lastName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-medium">{orderData.customerInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Items Purchased</h4>
            <div className="space-y-3">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Order Summary */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>GH₵{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>GH₵{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span>GH₵{tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Paid</span>
              <span className="text-green-600">GH₵{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Shipping Address</h4>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{orderData.shippingAddress}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handlePrint} variant="outline" className="flex-1">
              <ReceiptIcon className="h-4 w-4 mr-2" />
              Print Receipt
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button onClick={onClose} className="flex-1 bg-primary hover:bg-red-700">
              Continue Shopping
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
              <Mail className="h-4 w-4" />
              A copy of this receipt has been sent to {orderData.customerInfo.email}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
