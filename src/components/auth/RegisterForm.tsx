
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { KeyRound, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const registerSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

// Animation variants
const formFieldVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const RegisterForm = () => {
  const { signUp, loading } = useAuth();

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onRegisterSubmit = async (values: z.infer<typeof registerSchema>) => {
    await signUp(values.email, values.password, values.firstName, values.lastName);
  };

  return (
    <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
        <motion.div variants={formFieldVariants} className="grid grid-cols-2 gap-4">
          <FormField
            control={registerForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">First Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="First Name" 
                    {...field} 
                    className="bg-white/10 backdrop-blur-sm border-white/20 focus:ring-2 focus:ring-primary/50 transition-all text-white" 
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Last Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Last Name" 
                    {...field} 
                    className="bg-white/10 backdrop-blur-sm border-white/20 focus:ring-2 focus:ring-primary/50 transition-all text-white" 
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants}>
          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Email" 
                      {...field} 
                      className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 focus:ring-2 focus:ring-primary/50 transition-all text-white" 
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants}>
          <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="password" 
                      placeholder="Password" 
                      {...field} 
                      className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 focus:ring-2 focus:ring-primary/50 transition-all text-white" 
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-red-700 transition-all shadow-md" 
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};
