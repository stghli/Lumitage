
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const AboutArtisans = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary">
            The Talent
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary leading-tight">
            Meet Our <span className="text-primary">Artisans</span>
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Behind every Lumitage product is a skilled artisan with years of experience and a deep connection to Ghanaian cultural traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white to-gray-50/50">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                alt="Artisan Kofi working with beads" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Kofi Mensah</h3>
              <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-wider">Master Bead Craftsman</p>
              <p className="text-gray-700 leading-relaxed">
                With over 30 years of experience, Kofi creates intricate bead designs that tell stories of Ghana's rich cultural history.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white to-gray-50/50">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b734?auto=format&fit=crop&w=400&q=80" 
                alt="Artisan Ama designing bags" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Ama Osei</h3>
              <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-wider">Lead Designer</p>
              <p className="text-gray-700 leading-relaxed">
                Ama combines traditional techniques with contemporary aesthetics to create unique designs that appeal to global markets.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white to-gray-50/50">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" 
                alt="Artisan Kwame crafting sandals" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Kwame Boateng</h3>
              <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-wider">Master Leather Craftsman</p>
              <p className="text-gray-700 leading-relaxed">
                Kwame specializes in creating durable, comfortable sandals using traditional techniques passed down through generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
