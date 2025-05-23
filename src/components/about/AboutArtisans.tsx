
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const AboutArtisans = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">The Talent</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Meet Our Artisans</h2>
          <p className="text-gray-700 text-lg">
            Behind every Lumitage product is a skilled artisan with years of experience and a deep connection to Ghanaian cultural traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="/assets/images/artisan-beads.jpg" 
                alt="Artisan Kofi working with beads" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Kofi Mensah</h3>
              <p className="text-primary mb-4 text-sm font-medium">Master Bead Craftsman</p>
              <p className="text-gray-700">
                With over 30 years of experience, Kofi creates intricate bead designs that tell stories of Ghana's rich cultural history.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="/assets/images/artisan-bags.jpg" 
                alt="Artisan Ama designing bags" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Ama Osei</h3>
              <p className="text-primary mb-4 text-sm font-medium">Lead Designer</p>
              <p className="text-gray-700">
                Ama combines traditional techniques with contemporary aesthetics to create unique designs that appeal to global markets.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="/assets/images/artisan-sandals.jpg" 
                alt="Artisan Kwame crafting sandals" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Kwame Boateng</h3>
              <p className="text-primary mb-4 text-sm font-medium">Master Leather Craftsman</p>
              <p className="text-gray-700">
                Kwame specializes in creating durable, comfortable sandals using traditional techniques passed down through generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
