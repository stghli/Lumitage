
import { motion } from 'framer-motion';

// Container animation variants
export const containerVariants = {
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

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const formFieldVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

// Background motion component with fixed animation type
export const AnimatedBackground = () => {
  return (
    <>
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-800 opacity-90"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
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
    </>
  );
};

// Decorative bubbles component
export const DecorationBubbles = () => {
  // Bubble positions for decorative elements
  const bubbles = [
    { x: '10%', y: '10%', delay: 0, size: 80 },
    { x: '85%', y: '15%', delay: 1.5, size: 120 },
    { x: '70%', y: '80%', delay: 0.5, size: 100 },
    { x: '20%', y: '70%', delay: 2, size: 90 },
    { x: '50%', y: '35%', delay: 1, size: 70 },
  ];

  return (
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
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + bubble.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
