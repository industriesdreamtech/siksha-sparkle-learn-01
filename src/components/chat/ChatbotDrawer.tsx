
import React, { useState } from 'react';
import { Heart, MessageCircleHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AIshaChatbot } from './AIshaChatbot';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ChatbotDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button 
                variant="secondary" 
                size="icon" 
                className="fixed left-4 bottom-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-primary hover:bg-secondary"
              >
                <MessageCircleHeart className="h-5 w-5 text-white" />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-primary text-primary-foreground">
            <p>Talk to AIsha</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SheetContent 
        side="left" 
        className="w-[33.333%] sm:max-w-none border-r border-border"
      >
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center">
            <Heart className="mr-2 h-5 w-5 text-pink-400" />
            AIsha - Your Learning Assistant
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-hidden h-[calc(100vh-60px)]">
          <AIshaChatbot />
        </div>
      </SheetContent>
    </Sheet>
  );
}
