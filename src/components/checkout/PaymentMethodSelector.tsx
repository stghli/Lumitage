
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Landmark, Wallet } from 'lucide-react';

type PaymentMethodSelectorProps = {
  selectedMethod: string;
  onMethodChange: (value: string) => void;
};

export const PaymentMethodSelector = ({ selectedMethod, onMethodChange }: PaymentMethodSelectorProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      
      <RadioGroup
        value={selectedMethod}
        onValueChange={onMethodChange}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors bg-green-50">
          <RadioGroupItem id="paystack" value="paystack" />
          <Label htmlFor="paystack" className="flex-1 cursor-pointer">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-green-600" />
              <span className="font-medium">Paystack (Recommended)</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">LIVE</span>
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
    </div>
  );
};
