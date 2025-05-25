
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Users, Award, Heart } from 'lucide-react';

export const AboutValues = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              What We Stand For
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary leading-tight">
              Our Values & <span className="text-primary">Practices</span>
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
              We're guided by principles that prioritize people, culture, and sustainability in everything we do.
            </p>
          </div>
          
          <Tabs defaultValue="ethical" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 h-auto p-2 bg-white/80 backdrop-blur-sm border shadow-lg">
              <TabsTrigger value="ethical" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-4 text-sm font-medium">
                <Globe className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Ethical Sourcing</span>
                <span className="sm:hidden">Ethical</span>
              </TabsTrigger>
              <TabsTrigger value="fair" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-4 text-sm font-medium">
                <Award className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Fair Compensation</span>
                <span className="sm:hidden">Fair</span>
              </TabsTrigger>
              <TabsTrigger value="cultural" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-4 text-sm font-medium">
                <Users className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Cultural Preservation</span>
                <span className="sm:hidden">Cultural</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-4 text-sm font-medium">
                <Heart className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Community Impact</span>
                <span className="sm:hidden">Community</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <TabsContent value="ethical" className="mt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Ethical Sourcing</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We source all our raw materials locally and ethically, supporting Ghanaian suppliers and minimizing our environmental footprint. Our beads are made from recycled glass, clay, and natural materials, while our leather is vegetable-tanned using traditional methods that have minimal impact on the environment.
                </p>
              </TabsContent>
              
              <TabsContent value="fair" className="mt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Fair Compensation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We believe in fair pay for fair work. Our artisans receive compensation well above market rates, along with benefits such as healthcare and educational support for their children. We're committed to creating sustainable livelihoods that allow our artisans to thrive and continue their craft with pride and dignity.
                </p>
              </TabsContent>
              
              <TabsContent value="cultural" className="mt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Cultural Preservation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Each product we create helps preserve traditional crafting techniques that might otherwise be lost. We document these techniques and support apprenticeship programs that pass knowledge to the next generation of artisans, ensuring that Ghana's rich artistic heritage continues to flourish in the modern world.
                </p>
              </TabsContent>
              
              <TabsContent value="community" className="mt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Community Impact</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
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
