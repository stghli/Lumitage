
import { Badge } from '@/components/ui/badge';

export const AboutHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 border-white/40 text-white px-6 py-2 text-sm font-medium backdrop-blur-sm bg-white/10">
            Established 2015
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto font-light">
            Crafting authentic Ghanaian beads, sandals, and bags with pride, tradition, and excellence.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
