
import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-primary/10 filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </>
  );
};
