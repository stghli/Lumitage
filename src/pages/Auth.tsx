
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { KeyRound, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

// Import refactored components
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { AuthFooter } from '@/components/auth/AuthFooter';
import { 
  containerVariants,
  AnimatedBackground,
  DecorationBubbles
} from '@/components/auth/AuthAnimations';

const Auth = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('login');

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Animated backgrounds */}
      <AnimatedBackground />
      
      {/* Decorative elements */}
      <DecorationBubbles />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-md"
        >
          <Card className="p-8 shadow-xl border-0 bg-white/20 backdrop-blur-md rounded-2xl">
            <AuthHeader activeTab={activeTab} />

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
                <LoginForm />
              </TabsContent>

              <TabsContent value="register" className="space-y-4 mt-4">
                <RegisterForm />
              </TabsContent>
            </Tabs>

            <AuthFooter activeTab={activeTab} onTabChange={setActiveTab} />
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
