
import { CartItem } from '@/hooks/useCart';

type OrderSummaryProps = {
  items: CartItem[];
  total: number;
};

export const OrderSummary = ({ items, total }: OrderSummaryProps) => {
  return (
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
                <span className="text-sm font-medium">GH₵{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span>GH₵{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span>GH₵5.99</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span>GH₵{(total * 0.07).toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span>GH₵{(total + 5.99 + (total * 0.07)).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
