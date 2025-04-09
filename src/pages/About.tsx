
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-secondary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-lg md:text-xl opacity-90">
                Crafting authentic Ghanaian beads and sandals with pride, tradition, and excellence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At Lumitage, our mission is to preserve and promote traditional Ghanaian craftsmanship while creating sustainable livelihoods for local artisans. We believe in the power of handcrafted goods to tell stories, preserve culture, and connect people across the globe.
                </p>
                <p className="text-gray-700 mb-4">
                  Each product we create is a testament to centuries-old techniques passed down through generations. Our artisans blend traditional methods with contemporary designs to create unique pieces that honor our heritage while appealing to modern aesthetics.
                </p>
                <p className="text-gray-700">
                  We are committed to ethical practices, fair compensation, and sustainable production methods that respect both our artisans and the environment.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581329957085-f4afe7340024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Artisans at work" 
                  className="rounded-lg shadow-lg h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our History */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Traditional craftwork" 
                  className="rounded-lg shadow-lg h-full w-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Our History</h2>
                <p className="text-gray-700 mb-4">
                  Lumitage was founded in 2015 by a group of passionate Ghanaian entrepreneurs with a shared vision of bringing authentic African craftsmanship to the global market. Drawing inspiration from Ghana's rich cultural heritage, we started with a small workshop in Accra focused on traditional beadwork.
                </p>
                <p className="text-gray-700 mb-4">
                  As demand for our handcrafted beads grew, we expanded our offerings to include traditional sandals, working with skilled artisans who had been crafting leather goods for generations.
                </p>
                <p className="text-gray-700">
                  Today, Lumitage has grown into a thriving enterprise supporting dozens of artisans across Ghana, while maintaining our commitment to authenticity, quality, and fair trade practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Artisans */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Meet Our Artisans</h2>
              <p className="text-gray-700">
                Behind every Lumitage product is a skilled artisan with years of experience and a deep connection to Ghanaian cultural traditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Artisan Kofi" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Kofi Mensah</h3>
                  <p className="text-gray-600 mb-2">Master Bead Craftsman</p>
                  <p className="text-gray-700">
                    With over 30 years of experience, Kofi creates intricate bead designs that tell stories of Ghana's rich cultural history.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Artisan Ama" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ama Osei</h3>
                  <p className="text-gray-600 mb-2">Lead Designer</p>
                  <p className="text-gray-700">
                    Ama combines traditional techniques with contemporary aesthetics to create unique designs that appeal to global markets.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Artisan Kwame" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Kwame Boateng</h3>
                  <p className="text-gray-600 mb-2">Master Leather Craftsman</p>
                  <p className="text-gray-700">
                    Kwame specializes in creating durable, comfortable sandals using traditional techniques passed down through generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values & Practices */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary text-center">Our Values & Practices</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Ethical Sourcing</h3>
                  <p className="text-gray-700">
                    We source all our raw materials locally and ethically, supporting Ghanaian suppliers and minimizing our environmental footprint. Our beads are made from recycled glass, clay, and natural materials, while our leather is vegetable-tanned using traditional methods.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Fair Compensation</h3>
                  <p className="text-gray-700">
                    We believe in fair pay for fair work. Our artisans receive compensation well above market rates, along with benefits such as healthcare and educational support for their children. We're committed to creating sustainable livelihoods that allow our artisans to thrive.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Preservation</h3>
                  <p className="text-gray-700">
                    Each product we create helps preserve traditional crafting techniques that might otherwise be lost. We document these techniques and support apprenticeship programs that pass knowledge to the next generation of artisans.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Community Impact</h3>
                  <p className="text-gray-700">
                    A portion of every sale goes to our community development fund, which supports local education, healthcare, and infrastructure projects in the communities where our artisans live and work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience Authentic Ghanaian Craftsmanship</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Each purchase supports traditional artisans and helps preserve cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/products/beads">Shop Beads</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
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
