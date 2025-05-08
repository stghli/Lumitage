
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const AdminAuth = () => {
  const { user, signIn, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await signIn(values.email, values.password);
      
      // In a real app, you would verify admin status against your DB
      // This is a placeholder for demonstration
      if (values.email.includes('admin')) {
        setIsAdmin(true);
        toast.success('Welcome to the Admin Dashboard!');
        navigate('/admin/dashboard');
      } else {
        toast.error('Access denied. Admin privileges required.');
      }
    } catch (error) {
      toast.error('Failed to sign in. Please check your credentials.');
    }
  };

  // Redirect if user is already logged in
  if (user && isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  } else if (user && !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-1"
        >
          <Card className="border-0 shadow-xl">
            <CardHeader className="space-y-1 bg-gradient-to-r from-primary/90 to-red-700 text-white rounded-t-lg">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-white/20 rounded-full">
                  <Lock className="h-6 w-6" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Admin Portal</CardTitle>
              <CardDescription className="text-gray-100">
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="admin@example.com" {...field} className="border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} className="border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-red-700 transition-all" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign in to Admin'}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Use any email with "admin" in it and any password (min 6 chars) for demo access
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminAuth;
