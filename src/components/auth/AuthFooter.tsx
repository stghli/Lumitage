

import { motion } from 'framer-motion';
import { ShieldCheck, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AuthFooterProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const AuthFooter = ({
  activeTab,
  onTabChange
}: AuthFooterProps) => {
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return <>
      <motion.div variants={itemVariants} className="text-center mt-6">
        <p className="text-sm text-gray-200">
          Accounts are created automatically after purchase. Use the credentials on your receipt to sign in.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 text-center space-y-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            asChild 
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-2 font-medium"
          >
            <a href="/admin-auth" className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Admin Login
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </>;
};

