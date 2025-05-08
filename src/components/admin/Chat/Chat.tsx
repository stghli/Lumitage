
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { MessageCircle, Send, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";

type Message = {
  id: string;
  content: string;
  isAi: boolean;
  timestamp: Date;
};

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your AI assistant. How can I help you manage your store today?",
      isAi: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "" || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      isAi: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate AI response (this would be replaced with actual API call)
      setTimeout(() => {
        const aiResponse = generateAIResponse(input);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: aiResponse,
            isAi: true,
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsLoading(false);
    }
  };

  // This is a placeholder function - would be replaced with actual API integration
  const generateAIResponse = (userInput: string) => {
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes("sales") || userInputLower.includes("revenue")) {
      return "Sales are trending upward this month. Total revenue is up 15% compared to last month.";
    } else if (userInputLower.includes("order") || userInputLower.includes("shipment")) {
      return "You have 18 pending orders waiting to be shipped. Would you like me to show them?";
    } else if (userInputLower.includes("customer") || userInputLower.includes("user")) {
      return "You have 8 new customers this week. Customer retention rate is currently at 85%.";
    } else if (userInputLower.includes("product") || userInputLower.includes("inventory")) {
      return "5 products are currently out of stock. Would you like to view the inventory report?";
    } else if (userInputLower.includes("hello") || userInputLower.includes("hi")) {
      return `Hello ${user?.email?.split('@')[0] || 'admin'}! How can I assist you today?`;
    } else {
      return "I'm here to help with your store management. You can ask about orders, customers, inventory, or sales analytics.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" className="h-12 w-12 rounded-full shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:max-w-[400px] h-[600px] p-0 flex flex-col">
          <SheetHeader className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <SheetTitle>Store Assistant</SheetTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </SheetHeader>
          
          <ScrollArea className="flex-grow p-4">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.content}
                isAi={msg.isAi}
                timestamp={msg.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
            
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground ml-12">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                </div>
                <span>AI is typing...</span>
              </div>
            )}
          </ScrollArea>
          
          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};
