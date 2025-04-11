
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

export const HeroFeatureCard = ({ title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 bg-black/40 border border-white/10 backdrop-blur-sm text-white h-full">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <Separator className="bg-white/10 my-3" />
        <p className="text-gray-300">{description}</p>
      </Card>
    </motion.div>
  );
};
