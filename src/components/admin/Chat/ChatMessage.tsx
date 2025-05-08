
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  message: string;
  isAi: boolean;
  timestamp: Date;
};

export const ChatMessage = ({ message, isAi, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex w-full gap-3 mb-4", isAi ? "justify-start" : "justify-end")}>
      {isAi && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-lg px-4 py-2",
          isAi ? "bg-muted" : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm">{message}</p>
        <p className="text-xs opacity-70 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      {!isAi && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-secondary text-secondary-foreground">AD</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
