
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Download, Receipt as ReceiptIcon, Mail, Calendar, User, MapPin, Phone, Copy, KeyRound } from 'lucide-react';
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
  temporaryCredentials?: { email: string; password: string } | null;
  onClose: () => void;
};

export const Receipt = ({ orderData, onClose, temporaryCredentials }: ReceiptProps) => {
  const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const credentialsText = temporaryCredentials ? `\nTEMPORARY ACCOUNT:\nEmail: ${temporaryCredentials.email}\nPassword: ${temporaryCredentials.password}\nPlease change your password after logging in.\n` : '';

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
${credentialsText}
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-0">
        <CardHeader className="text-center border-b border-gray-100 bg-gradient-to-br from-green-50 to-emerald-50 pb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full shadow-lg">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Payment Successful!
          </CardTitle>
          <p className="text-gray-600 text-lg">Your order has been confirmed and is being processed</p>
        </CardHeader>
        
        <CardContent className="p-8">
          {/* Order Details Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-100 p-2 rounded-lg">
                <ReceiptIcon className="h-5 w-5 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Order Details</h3>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ReceiptIcon className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Reference</p>
                      <p className="font-bold text-gray-900 font-mono">{orderData.reference}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Date</p>
                      <p className="font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Customer</p>
                      <p className="font-semibold text-gray-900">{orderData.customerInfo.firstName} {orderData.customerInfo.lastName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="font-semibold text-gray-900">{orderData.customerInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Items Purchased</h4>
            <div className="space-y-3">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-gray-100"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                    {item.size && <p className="text-sm text-gray-500 mt-1">Size: <span className="font-medium">{item.size}</span></p>}
                    <p className="text-sm text-gray-500 mt-1">Quantity: <span className="font-medium">{item.quantity}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-900">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 mb-8">
            <h4 className="font-bold text-lg text-gray-900 mb-4">Payment Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">GH₵{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="font-semibold">GH₵{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (7%)</span>
                <span className="font-semibold">GH₵{tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-xl">
                <span className="text-gray-900">Total Paid</span>
                <span className="text-green-600">GH₵{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <h4 className="font-bold text-lg text-gray-900">Shipping Address</h4>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-xl">
              <p className="text-gray-700 leading-relaxed">{orderData.shippingAddress}</p>
            </div>
          </div>

          {temporaryCredentials && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <KeyRound className="h-5 w-5 text-gray-500" />
                <h4 className="font-bold text-lg text-gray-900">Your Temporary Account</h4>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl space-y-2">
                <p className="text-sm text-yellow-800">Use these credentials to log in, then you will be asked to change your password.</p>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 border">
                  <div>
                    <p className="text-gray-700"><span className="font-medium">Email:</span> {temporaryCredentials.email}</p>
                    <p className="text-gray-700"><span className="font-medium">Temp Password:</span> {temporaryCredentials.password}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(`${temporaryCredentials.email} | ${temporaryCredentials.password}`)}
                  >
                    <Copy className="h-4 w-4 mr-2" /> Copy
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button onClick={handlePrint} variant="outline" className="flex-1 h-12 border-2 hover:bg-gray-50">
              <ReceiptIcon className="h-4 w-4 mr-2" />
              Print Receipt
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex-1 h-12 border-2 hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button onClick={onClose} className="flex-1 h-12 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary shadow-lg hover:shadow-xl transition-all">
              Continue Shopping
            </Button>
          </div>

          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-700 flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                A confirmation email has been sent to <span className="font-semibold">{orderData.customerInfo.email}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
