
import React, { useState } from 'react';
import { Heart, MessageCircleHeart, X } from 'lucide-react';
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
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ChatbotDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen} data-drawer="chat-drawer">
        <DrawerTrigger asChild>
          <Button 
            variant="secondary" 
            size="icon" 
            className="fixed right-4 bottom-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-primary hover:bg-primary/90"
          >
            <MessageCircleHeart className="h-5 w-5 text-primary-foreground" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] max-h-[90vh] py-4" data-drawer="chat-content">
          <DrawerHeader className="border-b pb-3 px-4">
            <DrawerTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-pink-400" />
                <span>AIsha - Your Learning Assistant</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 overflow-hidden h-[calc(90vh-80px)]">
            <AIshaChatbot isMobileDrawer={true} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button 
                variant="secondary" 
                size="icon" 
                className="fixed left-4 bottom-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-primary hover:bg-primary/90"
              >
                <MessageCircleHeart className="h-5 w-5 text-primary-foreground" />
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
