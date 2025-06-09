
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  saveInfo: boolean;
};

export const useCheckout = () => {
  const { items, total, clearCart } = useCart();
  const { user, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formState, setFormState] = useState<FormState>({
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
  
  const createAccountForUser = async (email: string, firstName: string, lastName: string) => {
    try {
      const randomPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      
      console.log('Creating account for user:', email);
      await signUp(email, randomPassword, firstName, lastName);
      
      toast({
        title: "Account Created!",
        description: `An account has been created for ${email}. Check your email for login details.`,
      });
    } catch (error) {
      console.log('Account creation failed (user might already exist):', error);
    }
  };
  
  const handlePaystackSuccess = async (reference: any) => {
    console.log('Payment successful:', reference);
    
    if (!user && formState.email && formState.firstName && formState.lastName) {
      await createAccountForUser(formState.email, formState.firstName, formState.lastName);
    }
    
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
  
  const handleSubmit = async (e: React.FormEvent) => {
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
      
      if (!user && formState.firstName && formState.lastName) {
        await createAccountForUser(formState.email, formState.firstName, formState.lastName);
      }
      
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
  
  return {
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
  };
};
