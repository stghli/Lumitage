
import { motion } from 'framer-motion';
import { HeroFeatureCard } from './HeroFeatureCard';

export const HeroFeatureCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="grid md:grid-cols-3 gap-6 mb-16"
    >
      <HeroFeatureCard 
        title="Premium Materials" 
        description="Carefully selected authentic materials from Ghana's finest sources."
        delay={1.3}
      />
      <HeroFeatureCard 
        title="Traditional Crafting" 
        description="Techniques passed down through generations of skilled artisans."
        delay={1.5}
      />
      <HeroFeatureCard 
        title="Cultural Heritage" 
        description="Each piece tells a unique story of Ghana's rich cultural history."
        delay={1.7}
      />
    </motion.div>
  );
};
