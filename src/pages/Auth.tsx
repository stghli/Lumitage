
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { User, KeyRound, Mail, UserPlus, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const registerSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5
    }
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

const formFieldVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

// Background animation variants
const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const floatingBubblesVariants = {
  animate: custom => ({
    y: [0, -15, 0],
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3 + custom,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const Auth = () => {
  const { user, signIn, signUp, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('login');

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
    await signIn(values.email, values.password);
  };

  const onRegisterSubmit = async (values: z.infer<typeof registerSchema>) => {
    await signUp(values.email, values.password, values.firstName, values.lastName);
    setActiveTab('login');
  };

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/" />;
  }

  // Bubble positions for decorative elements
  const bubbles = [
    { x: '10%', y: '10%', delay: 0, size: 80 },
    { x: '85%', y: '15%', delay: 1.5, size: 120 },
    { x: '70%', y: '80%', delay: 0.5, size: 100 },
    { x: '20%', y: '70%', delay: 2, size: 90 },
    { x: '50%', y: '35%', delay: 1, size: 70 },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-800 opacity-90"
        variants={backgroundVariants}
        animate="animate"
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <motion.div 
            key={index}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
            }}
            variants={floatingBubblesVariants}
            custom={bubble.delay}
            animate="animate"
          />
        ))}
      </div>
      
      {/* Animated pattern overlay */}
      <motion.div 
        className="absolute inset-0 -z-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-md"
        >
          <Card className="p-8 shadow-xl border-0 bg-white/20 backdrop-blur-md rounded-2xl">
            <motion.div 
              variants={itemVariants}
              className="text-center mb-6"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2 
                }}
                className="inline-flex p-3 rounded-full bg-primary/20 backdrop-blur-md mb-4"
              >
                <User className="h-6 w-6 text-white" />
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-2xl font-bold text-white"
              >
                Welcome to Lumitage
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-gray-200 mt-2"
              >
                Sign in or create an account
              </motion.p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/20 backdrop-blur-md">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
                >
                  <KeyRound className="h-4 w-4 mr-2" />
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-4">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                    <motion.div variants={formFieldVariants}>
                      <FormField
                        control={loginForm.control}
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
                        control={loginForm.control}
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
                        {loading ? 'Logging in...' : 'Log in'}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="register" className="space-y-4 mt-4">
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
              </TabsContent>
            </Tabs>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-6"
            >
              <p className="text-sm text-gray-200">
                {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
                <motion.button 
                  onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
                  className="text-primary hover:underline font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === 'login' ? 'Register' : 'Login'}
                </motion.button>
              </p>
            </motion.div>
          </Card>

          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <motion.a 
              href="/admin-auth" 
              className="text-sm text-gray-300 hover:text-primary inline-flex items-center gap-1"
              whileHover={{ scale: 1.05, color: "#FF0000" }}
              whileTap={{ scale: 0.95 }}
            >
              <ShieldCheck className="h-4 w-4" />
              Admin Login
            </motion.a>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
