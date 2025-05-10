
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Twitter, Send, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChatMessage } from '@/components/admin/Chat/ChatMessage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';

type Message = {
  id: string;
  content: string;
  isAi: boolean;
  timestamp: Date;
};

const Contact = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! How can I help you today?",
      isAi: true,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
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

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (chatInput.trim() === '' || isTyping) return;
    
    const userMessage = {
      id: Date.now().toString(),
      content: chatInput,
      isAi: false,
      timestamp: new Date(),
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your question! Our team will get back to you shortly.",
        "I understand your concern. Let me help you with that.",
        "That's a great question. Our artisans typically create each piece within 3-5 days.",
        "Thanks for your interest in Lumitage! Our customer support team will reach out to you with more details.",
        "We appreciate your patience. Would you like me to connect you with one of our specialists?",
      ];
      
      const aiResponse = {
        id: Date.now().toString() + "-ai",
        content: responses[Math.floor(Math.random() * responses.length)],
        isAi: true,
        timestamp: new Date(),
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/70">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">We'd love to hear from you! Our team is always ready to answer your questions and provide assistance.</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              {/* Contact Info Card */}
              <Card className="lg:col-span-2 border-none shadow-lg bg-secondary text-white overflow-hidden">
                <CardHeader className="bg-secondary/90 pb-4">
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription className="text-gray-200">
                    We're here to help with any questions or concerns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
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

                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                        <Facebook className="h-5 w-5 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a href="https://wa.me/233123456789" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Form Card */}
              <Card className="lg:col-span-3 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="contact">Contact Form</TabsTrigger>
                      <TabsTrigger value="support">Support Request</TabsTrigger>
                    </TabsList>
                    <TabsContent value="contact">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              className="bg-gray-50 border-gray-200"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              className="bg-gray-50 border-gray-200"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="bg-gray-50 border-gray-200"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formState.message}
                            onChange={handleChange}
                            className="bg-gray-50 border-gray-200"
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
                            <span className="flex items-center">
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="support">
                      <div className="space-y-4">
                        <p className="text-gray-600">Choose your preferred support option below:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="cursor-pointer hover:border-primary transition-all">
                            <CardContent className="p-4 flex items-center">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <MessageCircle className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">Live Chat</h3>
                                <p className="text-sm text-gray-500">Talk to our team now</p>
                              </div>
                              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                            </CardContent>
                          </Card>
                          
                          <Card className="cursor-pointer hover:border-primary transition-all">
                            <CardContent className="p-4 flex items-center">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <Facebook className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">Facebook Messenger</h3>
                                <p className="text-sm text-gray-500">Message us on Facebook</p>
                              </div>
                              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                            </CardContent>
                          </Card>
                          
                          <Card className="cursor-pointer hover:border-primary transition-all">
                            <CardContent className="p-4 flex items-center">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <Twitter className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">X (Twitter)</h3>
                                <p className="text-sm text-gray-500">Tweet us your question</p>
                              </div>
                              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                            </CardContent>
                          </Card>
                          
                          <Card className="cursor-pointer hover:border-primary transition-all">
                            <CardContent className="p-4 flex items-center">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <Phone className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">Phone Support</h3>
                                <p className="text-sm text-gray-500">Call our help desk</p>
                              </div>
                              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Map */}
            <Card className="mb-16 shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254021.41795561428!2d-0.2647673491155287!3d5.594692998901702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1652389681332!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lumitage Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-secondary text-center">Frequently Asked Questions</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-secondary">How long does shipping take?</h3>
                    <p className="text-gray-700">
                      Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders may take 10-14 business days.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-secondary">Do you offer custom designs?</h3>
                    <p className="text-gray-700">
                      Yes! We offer custom design services for both beads and sandals. Please contact us directly with your requirements for a quote.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-secondary">What is your return policy?</h3>
                    <p className="text-gray-700">
                      We accept returns within 30 days of delivery. Items must be unworn, undamaged, and in their original packaging.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-secondary">How do I care for my beads/sandals?</h3>
                    <p className="text-gray-700">
                      For beads, avoid exposing them to harsh chemicals or excessive moisture. For sandals, clean with a damp cloth and allow to air dry. Apply leather conditioner occasionally to maintain softness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Live Chat Feature */}
      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="h-14 w-14 rounded-full shadow-lg fixed bottom-6 right-6 z-50"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:max-w-[400px] h-[600px] p-0 flex flex-col">
          <SheetHeader className="border-b px-4 py-3 bg-primary text-primary-foreground">
            <SheetTitle>Chat with Lumitage</SheetTitle>
          </SheetHeader>
          
          <ScrollArea className="flex-grow p-4">
            {chatMessages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.content}
                isAi={msg.isAi}
                timestamp={msg.timestamp}
              />
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground ml-12">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                </div>
                <span>Assistant is typing...</span>
              </div>
            )}
          </ScrollArea>
          
          <form onSubmit={handleSendChatMessage} className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon" disabled={isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Contact;
