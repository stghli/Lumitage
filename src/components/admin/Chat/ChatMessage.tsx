
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { BotIcon } from "lucide-react";

type ChatMessageProps = {
  message: string;
  isAi: boolean;
  timestamp: Date;
  username?: string;
};

export const ChatMessage = ({ message, isAi, timestamp, username = "You" }: ChatMessageProps) => {
  return (
    <div className={cn("flex w-full gap-3 mb-4", isAi ? "justify-start" : "justify-end")}>
      {isAi && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary/90 text-primary-foreground flex items-center justify-center">
            <BotIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-2 shadow-sm",
          isAi 
            ? "bg-gradient-to-br from-muted to-muted/70 text-foreground" 
            : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message}</p>
        <div className="flex justify-between items-center mt-1 opacity-70">
          <span className="text-xs">
            {isAi ? "Assistant" : username}
          </span>
          <span className="text-xs">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
      {!isAi && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            {username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
