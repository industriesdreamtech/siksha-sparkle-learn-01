
import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { AIshaChatbot } from './AIshaChatbot';

export function ChatbotDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="secondary" 
          size="icon" 
          className="fixed left-4 bottom-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <Bot className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh] max-h-[85vh]">
        <DrawerHeader className="border-b">
          <DrawerTitle className="flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            AIsha - Your Learning Assistant
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-hidden h-[calc(85vh-60px)]">
          <AIshaChatbot />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
