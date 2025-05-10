
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SupportOptions } from '@/components/contact/SupportOptions';
import { MapSection } from '@/components/contact/MapSection';
import { FaqSection } from '@/components/contact/FaqSection';
import { LiveChat } from '@/components/contact/LiveChat';

const Contact = () => {
  const isMobile = useIsMobile();
  
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
              <ContactInfo />
              
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
                      <ContactForm />
                    </TabsContent>
                    <TabsContent value="support">
                      <SupportOptions />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Map */}
            <MapSection />
            
            {/* FAQ Section */}
            <FaqSection />
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Live Chat Feature */}
      <LiveChat />
    </div>
  );
};

export default Contact;
