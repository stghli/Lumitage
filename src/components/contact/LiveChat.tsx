
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '@/components/admin/Chat/ChatMessage';

type Message = {
  id: string;
  content: string;
  isAi: boolean;
  timestamp: Date;
};

export const LiveChat = () => {
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
  );
};
