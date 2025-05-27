
import { Badge } from '@/components/ui/badge';

export const AboutHistory = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80" 
              alt="Traditional handcrafted bags in workshop" 
              className="relative rounded-2xl shadow-2xl h-full w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary">
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary leading-tight">
                Our History
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                Lumitage was founded in 2015 by a group of passionate Ghanaian entrepreneurs with a shared vision of bringing authentic African craftsmanship to the global market. Drawing inspiration from Ghana's rich cultural heritage, we started with a small workshop in Accra focused on traditional beadwork.
              </p>
              <p className="text-gray-700">
                As demand for our handcrafted beads grew, we expanded our offerings to include traditional sandals and bags, working with skilled artisans who had been crafting leather goods for generations.
              </p>
              <p className="text-gray-700">
                Today, Lumitage has grown into a thriving enterprise supporting dozens of artisans across Ghana, while maintaining our commitment to authenticity, quality, and fair trade practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
