import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormState } from '@/hooks/useCheckout';

type CheckoutFormProps = {
  formState: FormState;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (checked: boolean) => void;
};

export const CheckoutForm = ({ formState, onInputChange, onCheckboxChange }: CheckoutFormProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
          onChange={onInputChange}
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
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={formState.state}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formState.zipCode}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            value={formState.country}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="saveInfo"
            checked={formState.saveInfo}
            onCheckedChange={onCheckboxChange}
          />
          <Label htmlFor="saveInfo" className="text-sm">
            Save this information for next time
          </Label>
        </div>
      </div>
    </div>
  );
};
