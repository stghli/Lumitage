
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Facebook, Twitter, Phone, ChevronRight } from 'lucide-react';

export const SupportOptions = () => {
  return (
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
  );
};
