
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-secondary text-center">Contact Us</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Contact Info */}
                <div className="md:col-span-2 bg-secondary text-white p-8">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <p className="mb-8">
                    We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or want to learn more about our artisans, we're here to help.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Our Location</h3>
                        <p className="text-gray-200">
                          123 Craft Avenue, Accra, Ghana
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <p className="text-gray-200">
                          +233 123 456 789
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-gray-200">
                          info@lumitage.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Hours</h3>
                        <p className="text-gray-200">
                          Monday - Friday: 9am - 5pm <br />
                          Saturday: 10am - 4pm <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="md:col-span-3 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-secondary">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-red-700 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Find Us</h2>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Map will be displayed here</p>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-secondary text-center">Frequently Asked Questions</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">How long does shipping take?</h3>
                  <p className="text-gray-700">
                    Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders may take 10-14 business days.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Do you offer custom designs?</h3>
                  <p className="text-gray-700">
                    Yes! We offer custom design services for both beads and sandals. Please contact us directly with your requirements for a quote.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">What is your return policy?</h3>
                  <p className="text-gray-700">
                    We accept returns within 30 days of delivery. Items must be unworn, undamaged, and in their original packaging.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">How do I care for my beads/sandals?</h3>
                  <p className="text-gray-700">
                    For beads, avoid exposing them to harsh chemicals or excessive moisture. For sandals, clean with a damp cloth and allow to air dry. Apply leather conditioner occasionally to maintain softness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
