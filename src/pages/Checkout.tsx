
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { Receipt } from '@/components/checkout/Receipt';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { PaymentMethodSelector } from '@/components/checkout/PaymentMethodSelector';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { PaystackPayment } from '@/components/checkout/PaystackPayment';
import { LiveIntegrationNotice } from '@/components/checkout/LiveIntegrationNotice';

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
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  
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
    
    const newOrderData = {
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
    
    console.log('Order created:', newOrderData);
    setOrderData(newOrderData);
    setShowReceipt(true);
    
    toast({
      title: "Payment Successful!",
      description: `Payment completed with reference: ${reference.reference}`,
    });
  };
  
  const handlePaystackClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "Your payment was cancelled. You can try again.",
      variant: "destructive"
    });
  };
  
  const handleCloseReceipt = () => {
    setShowReceipt(false);
    clearCart();
    navigate('/');
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
          
          <LiveIntegrationNotice />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit}>
                <CheckoutForm
                  formState={formState}
                  onInputChange={handleChange}
                  onCheckboxChange={handleCheckboxChange}
                />
                
                <PaymentMethodSelector
                  selectedMethod={formState.paymentMethod}
                  onMethodChange={handleRadioChange}
                />
                
                {formState.paymentMethod === 'paystack' && formState.email && (
                  <PaystackPayment
                    email={formState.email}
                    total={total}
                    onSuccess={handlePaystackSuccess}
                    onClose={handlePaystackClose}
                  />
                )}
                
                <div className="flex justify-between mt-6">
                  <Button asChild variant="outline">
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
            
            <div className="lg:w-1/3">
              <OrderSummary items={items} total={total} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {showReceipt && orderData && (
        <Receipt orderData={orderData} onClose={handleCloseReceipt} />
      )}
    </div>
  );
};

export default Checkout;
