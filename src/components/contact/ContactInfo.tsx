
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const ContactInfo = () => {
  return (
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
  );
};
