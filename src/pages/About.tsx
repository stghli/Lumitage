
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
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
        
        {/* Our Mission */}
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
                  src="https://images.unsplash.com/photo-1581329957085-f4afe7340024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Artisans at work" 
                  className="rounded-2xl shadow-xl h-full w-full object-cover"
                />
                <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our History */}
        <div className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Traditional craftwork" 
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
        
        {/* Our Artisans */}
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
                    src="https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Artisan Kofi" 
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
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Artisan Ama" 
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
                    src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Artisan Kwame" 
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
        
        {/* Values & Practices */}
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
        
        {/* CTA */}
        <div className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Authentic Ghanaian Craftsmanship</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Each purchase supports traditional artisans and helps preserve cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium">
                <Link to="/products/beads">Shop Beads</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg font-medium">
                <Link to="/products/sandals">Shop Sandals</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
