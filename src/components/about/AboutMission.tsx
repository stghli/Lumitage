
import { Badge } from '@/components/ui/badge';

export const AboutMission = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-2">Our Purpose</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Lumitage, our mission is to preserve and promote traditional Ghanaian craftsmanship while creating sustainable livelihoods for local artisans. We believe in the power of handcrafted goods to tell stories, preserve culture, and connect people across the globe.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each product we create is a testament to centuries-old techniques passed down through generations. Our artisans blend traditional methods with contemporary designs to create unique pieces that honor our heritage while appealing to modern aesthetics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to ethical practices, fair compensation, and sustainable production methods that respect both our artisans and the environment.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/assets/images/artisans-beads.jpg" 
              alt="Artisans working on beads" 
              className="rounded-2xl shadow-xl h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
