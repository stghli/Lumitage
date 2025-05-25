
import { motion } from 'framer-motion';
import { ShieldCheck, LayoutDashboard } from 'lucide-react';

type AuthFooterProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const AuthFooter = ({ activeTab, onTabChange }: AuthFooterProps) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      <motion.div 
        variants={itemVariants}
        className="text-center mt-6"
      >
        <p className="text-sm text-gray-200">
          {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
          <motion.button 
            onClick={() => onTabChange(activeTab === 'login' ? 'register' : 'login')}
            className="text-primary hover:underline font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === 'login' ? 'Register' : 'Login'}
          </motion.button>
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-8 text-center space-y-3"
      >
        <motion.a 
          href="/admin-auth" 
          className="text-sm text-gray-300 hover:text-primary inline-flex items-center gap-1 block"
          whileHover={{ scale: 1.05, color: "#FF0000" }}
          whileTap={{ scale: 0.95 }}
        >
          <ShieldCheck className="h-4 w-4" />
          Admin Login
        </motion.a>
        
        <motion.a 
          href="/user/dashboard" 
          className="text-sm text-gray-300 hover:text-primary inline-flex items-center gap-1 block"
          whileHover={{ scale: 1.05, color: "#FF0000" }}
          whileTap={{ scale: 0.95 }}
        >
          <LayoutDashboard className="h-4 w-4" />
          User Dashboard
        </motion.a>
      </motion.div>
    </>
  );
};
