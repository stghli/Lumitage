
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  size?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number, size?: string) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity = 1, size?: string) => {
    setItems(prevItems => {
      // Check if the item is already in the cart (with the same size if applicable)
      const existingItemIndex = prevItems.findIndex(
        i => i.id === item.id && (!size || i.size === size)
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast.success(`${item.name} quantity updated in cart`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`${item.name} added to cart`);
        return [...prevItems, { ...item, quantity, size }];
      }
    });
  };

  const removeItem = (id: string, size?: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(
        item => !(item.id === id && (!size || item.size === size))
      );
      toast.info('Item removed from cart');
      return updatedItems;
    });
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && (!size || item.size === size)) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared');
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
