
import { PaystackButton } from 'react-paystack';

type PaystackPaymentProps = {
  email: string;
  total: number;
  onSuccess: (reference: any) => void;
  onClose: () => void;
};

export const PaystackPayment = ({ email, total, onSuccess, onClose }: PaystackPaymentProps) => {
  const paystackConfig = {
    reference: `order_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`,
    email: email,
    amount: Math.round((total + 5.99 + (total * 0.07)) * 100), // Convert to pesewas (Ghana Cedis cents)
    publicKey: 'pk_test_8808c1f796840bcc9fbc7d52d737dc3edf015501',
    text: 'Pay Now',
    currency: 'GHS',
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
    metadata: {
      custom_fields: [
        {
          display_name: 'Order Items',
          variable_name: 'order_items',
          value: '1' // This could be dynamic based on cart items
        }
      ]
    }
  };

  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <h3 className="font-medium mb-2">Ready to pay with Paystack</h3>
      <p className="text-sm text-gray-600 mb-3">
        Secure payment powered by Paystack. All major payment methods accepted.
      </p>
      <PaystackButton
        {...paystackConfig}
        onSuccess={onSuccess}
        onClose={onClose}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
      />
    </div>
  );
};
