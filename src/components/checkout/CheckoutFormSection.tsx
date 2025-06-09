
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { PaymentMethodSelector } from '@/components/checkout/PaymentMethodSelector';
import { PaystackPayment } from '@/components/checkout/PaystackPayment';
import { FormState } from '@/hooks/useCheckout';

type CheckoutFormSectionProps = {
  formState: FormState;
  total: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (checked: boolean) => void;
  onMethodChange: (value: string) => void;
  onPaystackSuccess: (reference: any) => void;
  onPaystackClose: () => void;
};

export const CheckoutFormSection = ({
  formState,
  total,
  onInputChange,
  onCheckboxChange,
  onMethodChange,
  onPaystackSuccess,
  onPaystackClose
}: CheckoutFormSectionProps) => {
  return (
    <>
      <CheckoutForm
        formState={formState}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
      />
      
      <PaymentMethodSelector
        selectedMethod={formState.paymentMethod}
        onMethodChange={onMethodChange}
      />
      
      {formState.paymentMethod === 'paystack' && formState.email && (
        <PaystackPayment
          email={formState.email}
          total={total}
          onSuccess={onPaystackSuccess}
          onClose={onPaystackClose}
        />
      )}
    </>
  );
};
