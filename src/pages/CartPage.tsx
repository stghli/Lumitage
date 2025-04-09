
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CartPage = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  
  const handleQuantityUpdate = (id: string, quantity: number, size?: string) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity, size);
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-6 text-gray-400">
                <ShoppingBag className="mx-auto h-16 w-16" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild className="bg-primary hover:bg-red-700">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">Your Shopping Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>
                
                {items.map((item) => (
                  <div 
                    key={`${item.id}-${item.size || 'default'}`} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b items-center"
                  >
                    {/* Product Info (Mobile & Desktop) */}
                    <div className="col-span-1 md:col-span-6 flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 rounded overflow-hidden mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-medium text-secondary hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.size && (
                          <div className="text-sm text-gray-500 mt-1">
                            Size: {item.size}
                          </div>
                        )}
                        
                        {/* Mobile Only: Price & Quantity Controls */}
                        <div className="md:hidden mt-3 flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex items-center border rounded">
                            <button
                              onClick={() => handleQuantityUpdate(item.id, item.quantity - 1, item.size)}
                              className={cn(
                                "p-1",
                                item.quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600"
                              )}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityUpdate(item.id, item.quantity + 1, item.size)}
                              className="p-1 text-gray-600"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Mobile Only: Subtotal & Remove */}
                        <div className="md:hidden mt-3 flex justify-between items-center">
                          <div className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-gray-500 hover:text-primary"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Only: Price, Quantity, Subtotal */}
                    <div className="hidden md:block md:col-span-2 text-center">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="hidden md:flex md:col-span-2 justify-center items-center">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => handleQuantityUpdate(item.id, item.quantity - 1, item.size)}
                          className={cn(
                            "p-1",
                            item.quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600"
                          )}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityUpdate(item.id, item.quantity + 1, item.size)}
                          className="p-1 text-gray-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex md:col-span-2 justify-end items-center">
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="ml-4 text-gray-500 hover:text-primary"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 flex justify-between items-center text-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-gray-500 hover:text-primary"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear Cart
                  </Button>
                  
                  <Button asChild size="sm" variant="outline">
                    <Link to="/">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-primary hover:bg-red-700">
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>We accept</p>
                  <div className="flex justify-center space-x-2 mt-2">
                    <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">Mastercard</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">PayPal</span>
                  </div>
                </div>
              </div>
              
              {/* Promo code - could be expanded in a real implementation */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h3 className="text-sm font-medium mb-3">Promo Code</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  <Button
                    variant="secondary"
                    className="rounded-l-none"
                  >
                    Apply
                  </Button>
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

export default CartPage;
