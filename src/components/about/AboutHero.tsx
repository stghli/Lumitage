
import { Badge } from '@/components/ui/badge';

export const AboutHero = () => {
  return (
    <div className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-white/30 text-white px-4 py-1.5">Est. 2015</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Crafting authentic Ghanaian beads and sandals with pride, tradition, and excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
