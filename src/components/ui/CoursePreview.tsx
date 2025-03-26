
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface CoursePreviewProps {
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration?: string;
}

export function CoursePreview({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  duration
}: CoursePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer rounded-lg overflow-hidden">
          <img 
            src={thumbnailUrl} 
            alt={`Preview of ${title}`} 
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <div className="bg-white/90 rounded-full p-3 transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-primary fill-primary" />
            </div>
            
            {duration && (
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {duration}
              </div>
            )}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <p className="font-medium">Watch Preview</p>
            {description && <p className="text-xs text-white/80 mt-1">{description}</p>}
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        
        <div className="mt-4 relative aspect-video">
          <iframe
            src={videoUrl}
            title={`${title} preview`}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md"
          ></iframe>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
