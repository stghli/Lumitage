
import { Check } from 'lucide-react';

export const LiveIntegrationNotice = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Check className="h-5 w-5 text-green-600" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Live Paystack Integration</h3>
          <p className="text-sm text-green-700">
            This is a live Paystack integration. Use test card: 4084 0840 8408 4081, CVV: 408, Expiry: 12/25
          </p>
        </div>
      </div>
    </div>
  );
};
