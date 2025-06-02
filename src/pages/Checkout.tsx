
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Landmark, Wallet, Check } from 'lucide-react';
import { PaystackButton } from 'react-paystack';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: 'paystack',
    saveInfo: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Paystack configuration
  const paystackConfig = {
    reference: `order_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`,
    email: formState.email,
    amount: Math.round((total + 5.99 + (total * 0.07)) * 100), // Convert to kobo (smallest currency unit)
    publicKey: 'pk_test_4ac9f2c43514cdc6c3b878b0d6a997e70b8b0bb2', // Demo public key - replace with your own
    text: 'Pay Now',
    currency: 'NGN',
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
    metadata: {
      custom_fields: [
        {
          display_name: 'Order Items',
          variable_name: 'order_items',
          value: items.length.toString()
        }
      ]
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, saveInfo: checked }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormState(prev => ({ ...prev, paymentMethod: value }));
  };
  
  const handlePaystackSuccess = (reference: any) => {
    console.log('Payment successful:', reference);
    toast({
      title: "Payment Successful!",
      description: `Payment completed with reference: ${reference.reference}`,
    });
    
    // Create order record
    const orderData = {
      reference: reference.reference,
      email: formState.email,
      amount: reference.amount / 100,
      status: 'paid',
      items: items,
      shippingAddress: `${formState.address}, ${formState.city}, ${formState.state} ${formState.zipCode}, ${formState.country}`,
      customerInfo: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone
      }
    };
    
    console.log('Order created:', orderData);
    clearCart();
    navigate('/order-confirmation');
  };
  
  const handlePaystackClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "Your payment was cancelled. You can try again.",
      variant: "destructive"
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to proceed with payment.",
        variant: "destructive"
      });
      return;
    }
    
    if (formState.paymentMethod !== 'paystack') {
      setIsSubmitting(true);
      // Simulate other payment methods
      setTimeout(() => {
        toast({
          title: "Order Placed Successfully!",
          description: "Thank you for your purchase. You will receive a confirmation email shortly.",
        });
        clearCart();
        navigate('/order-confirmation');
        setIsSubmitting(false);
      }, 1500);
    }
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">Checkout</h1>
          
          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Demo Mode</h3>
                <p className="text-sm text-blue-700">
                  This is a live Paystack integration demo. Use test card: 4084 0840 8408 4081, CVV: 408, Expiry: 12/25
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit}>
                {/* Shipping Information */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="Required for payment"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formState.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formState.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formState.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveInfo"
                        checked={formState.saveInfo}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="saveInfo" className="text-sm">
                        Save this information for next time
                      </Label>
                    </div>
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  
                  <RadioGroup
                    value={formState.paymentMethod}
                    onValueChange={handleRadioChange}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors bg-green-50">
                      <RadioGroupItem id="paystack" value="paystack" />
                      <Label htmlFor="paystack" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                          <span className="font-medium">Paystack (Recommended)</span>
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">LIVE DEMO</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Pay with cards, bank transfer, USSD, or mobile money</p>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem id="paypal" value="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <Wallet className="h-5 w-5 mr-2 text-primary" />
                          <span>PayPal</span>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem id="bank-transfer" value="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <Landmark className="h-5 w-5 mr-2 text-primary" />
                          <span>Bank Transfer</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {formState.paymentMethod === 'paystack' && formState.email && (
                    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-medium mb-2">Ready to pay with Paystack</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Secure payment powered by Paystack. All major payment methods accepted.
                      </p>
                      <PaystackButton
                        {...paystackConfig}
                        onSuccess={handlePaystackSuccess}
                        onClose={handlePaystackClose}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button
                    asChild
                    variant="outline"
                  >
                    <Link to="/cart">Back to Cart</Link>
                  </Button>
                  
                  {formState.paymentMethod !== 'paystack' && (
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-red-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Place Order'
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="max-h-80 overflow-y-auto mb-4 pr-2">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size || 'default'}`}
                      className="flex py-3 border-b last:border-0"
                    >
                      <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-secondary">{item.name}</h4>
                        {item.size && (
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                        )}
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>${(total * 0.07).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(total + 5.99 + (total * 0.07)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
