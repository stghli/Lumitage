
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Receipt } from '@/components/checkout/Receipt';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { LiveIntegrationNotice } from '@/components/checkout/LiveIntegrationNotice';
import { CheckoutFormSection } from '@/components/checkout/CheckoutFormSection';
import { CheckoutActions } from '@/components/checkout/CheckoutActions';
import { useCheckout } from '@/hooks/useCheckout';

const Checkout = () => {
  const navigate = useNavigate();
  const {
    formState,
    isSubmitting,
    showReceipt,
    orderData,
    items,
    total,
    handleChange,
    handleCheckboxChange,
    handleRadioChange,
    handlePaystackSuccess,
    handlePaystackClose,
    handleCloseReceipt,
    handleSubmit
  } = useCheckout();
  
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
                <CheckoutFormSection
                  formState={formState}
                  total={total}
                  onInputChange={handleChange}
                  onCheckboxChange={handleCheckboxChange}
                  onMethodChange={handleRadioChange}
                  onPaystackSuccess={handlePaystackSuccess}
                  onPaystackClose={handlePaystackClose}
                />
                
                <CheckoutActions
                  paymentMethod={formState.paymentMethod}
                  isSubmitting={isSubmitting}
                />
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
