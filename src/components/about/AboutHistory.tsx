
import { Badge } from '@/components/ui/badge';

export const AboutHistory = () => {
  return (
    <div className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <img 
              src="/assets/images/traditional-bags.jpg" 
              alt="Traditional handcrafted bags" 
              className="rounded-2xl shadow-xl h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge variant="secondary" className="mb-2">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our History</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lumitage was founded in 2015 by a group of passionate Ghanaian entrepreneurs with a shared vision of bringing authentic African craftsmanship to the global market. Drawing inspiration from Ghana's rich cultural heritage, we started with a small workshop in Accra focused on traditional beadwork.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As demand for our handcrafted beads grew, we expanded our offerings to include traditional sandals, working with skilled artisans who had been crafting leather goods for generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, Lumitage has grown into a thriving enterprise supporting dozens of artisans across Ghana, while maintaining our commitment to authenticity, quality, and fair trade practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
