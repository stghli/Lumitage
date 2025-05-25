
import { Badge } from '@/components/ui/badge';

export const AboutMission = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary">
                Our Purpose
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary leading-tight">
                Our Mission
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                At Lumitage, our mission is to preserve and promote traditional Ghanaian craftsmanship while creating sustainable livelihoods for local artisans. We believe in the power of handcrafted goods to tell stories, preserve culture, and connect people across the globe.
              </p>
              <p className="text-gray-700">
                Each product we create is a testament to centuries-old techniques passed down through generations. Our artisans blend traditional methods with contemporary designs to create unique pieces that honor our heritage while appealing to modern aesthetics.
              </p>
              <p className="text-gray-700">
                We are committed to ethical practices, fair compensation, and sustainable production methods that respect both our artisans and the environment.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <img 
              src="/lovable-uploads/sandals-making-process.jpg" 
              alt="Artisans working on traditional sandals" 
              className="relative rounded-2xl shadow-2xl h-full w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
