
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Users, Award, Heart } from 'lucide-react';

export const AboutValues = () => {
  return (
    <div className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">What We Stand For</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our Values & Practices</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We're guided by principles that prioritize people, culture, and sustainability in everything we do.
            </p>
          </div>
          
          <Tabs defaultValue="ethical" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="ethical" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Globe className="h-4 w-4 mr-2" />
                Ethical Sourcing
              </TabsTrigger>
              <TabsTrigger value="fair" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Award className="h-4 w-4 mr-2" />
                Fair Compensation
              </TabsTrigger>
              <TabsTrigger value="cultural" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Users className="h-4 w-4 mr-2" />
                Cultural Preservation
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Heart className="h-4 w-4 mr-2" />
                Community Impact
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <TabsContent value="ethical" className="mt-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Ethical Sourcing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We source all our raw materials locally and ethically, supporting Ghanaian suppliers and minimizing our environmental footprint. Our beads are made from recycled glass, clay, and natural materials, while our leather is vegetable-tanned using traditional methods that have minimal impact on the environment.
                </p>
              </TabsContent>
              
              <TabsContent value="fair" className="mt-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Fair Compensation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in fair pay for fair work. Our artisans receive compensation well above market rates, along with benefits such as healthcare and educational support for their children. We're committed to creating sustainable livelihoods that allow our artisans to thrive and continue their craft with pride and dignity.
                </p>
              </TabsContent>
              
              <TabsContent value="cultural" className="mt-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Preservation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each product we create helps preserve traditional crafting techniques that might otherwise be lost. We document these techniques and support apprenticeship programs that pass knowledge to the next generation of artisans, ensuring that Ghana's rich artistic heritage continues to flourish in the modern world.
                </p>
              </TabsContent>
              
              <TabsContent value="community" className="mt-0">
                <h3 className="text-xl font-semibold mb-3 text-primary">Community Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  A portion of every sale goes to our community development fund, which supports local education, healthcare, and infrastructure projects in the communities where our artisans live and work. We believe that sustainable business should lift up entire communities, not just individuals.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
