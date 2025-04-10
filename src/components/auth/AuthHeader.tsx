
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

type AuthHeaderProps = {
  activeTab: string;
};

export const AuthHeader = ({ activeTab }: AuthHeaderProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 }}
      }}
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
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
          }
        }}
        className="text-2xl font-bold text-white"
      >
        Welcome to Lumitage
      </motion.h1>
      <motion.p 
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
          }
        }}
        className="text-gray-200 mt-2"
      >
        {activeTab === 'login' ? 'Sign in to your account' : 'Create a new account'}
      </motion.p>
    </motion.div>
  );
};
