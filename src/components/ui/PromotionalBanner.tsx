
import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Clock, Award, Users, BookOpen, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface PromotionalBannerProps {
  onClose?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  showCloseButton?: boolean;
  position?: 'top' | 'middle' | 'bottom';
  link?: string;
  className?: string;
}

export function PromotionalBanner({
  onClose,
  variant = 'primary',
  showCloseButton = true,
  position = 'top',
  link = '/courses',
  className = '',
}: PromotionalBannerProps) {
  const [bannerIndex, setBannerIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const banners = [
    {
      title: "30% Off All AI Courses",
      description: "Master AI & Machine Learning with our best-selling courses",
      cta: "Enroll Now",
      icon: <Award className="h-5 w-5" />,
      stats: [
        { icon: <Users className="h-4 w-4" />, text: "22,000+ enrolled" },
        { icon: <Clock className="h-4 w-4" />, text: "Last day" },
      ],
      bg: "bg-gradient-to-r from-blue-500 to-purple-600",
      link: "/courses?category=AI%20%26%20ML"
    },
    {
      title: "Free Data Science Workshop",
      description: "Join our live workshop and learn data visualization techniques",
      cta: "Reserve Spot",
      icon: <BookOpen className="h-5 w-5" />,
      stats: [
        { icon: <Video className="h-4 w-4" />, text: "Live on Aug 15" },
        { icon: <Users className="h-4 w-4" />, text: "Limited spots" },
      ],
      bg: "bg-gradient-to-r from-green-500 to-teal-500",
      link: "/courses?category=Data%20Science"
    },
    {
      title: "New: Cybersecurity Certification",
      description: "Industry-recognized certification program for security professionals",
      cta: "Get Certified",
      icon: <Award className="h-5 w-5" />,
      stats: [
        { icon: <BookOpen className="h-4 w-4" />, text: "12 modules" },
        { icon: <Clock className="h-4 w-4" />, text: "Self-paced" },
      ],
      bg: "bg-gradient-to-r from-orange-500 to-red-600",
      link: "/courses?category=Cybersecurity"
    }
  ];

  useEffect(() => {
    // Auto-rotate banners every 6 seconds
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBanner = banners[bannerIndex];
  
  const getBannerClasses = () => {
    let baseClasses = `w-full transition-all duration-300 flex items-center justify-between rounded-lg overflow-hidden shadow-md px-4 py-3 ${currentBanner.bg} text-white`;
    
    if (isMobile) {
      baseClasses += ' flex-col text-center gap-3';
    }
    
    return `${baseClasses} ${className}`;
  };

  return (
    <div className={getBannerClasses()}>
      <div className={`flex ${isMobile ? 'flex-col items-center' : 'items-center'} gap-3`}>
        <div className="rounded-full bg-white/20 p-2 flex-shrink-0">
          {currentBanner.icon}
        </div>
        <div>
          <h3 className="font-medium text-sm sm:text-base">{currentBanner.title}</h3>
          <p className="text-xs sm:text-sm text-white/80 mt-0.5">{currentBanner.description}</p>
          
          <div className={`flex gap-3 mt-1 text-xs text-white/80 ${isMobile ? 'justify-center' : ''}`}>
            {currentBanner.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1">
                {stat.icon}
                <span>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`flex items-center gap-2 mt-1 ${isMobile ? 'w-full justify-center' : ''}`}>
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-white text-gray-800 hover:bg-white/90 whitespace-nowrap text-xs sm:text-sm"
          asChild
        >
          <Link to={currentBanner.link || link}>
            {currentBanner.cta}
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
        
        {showCloseButton && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={onClose}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Close</span>
          </Button>
        )}
        
        <div className="hidden sm:flex items-center gap-1 ml-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full ${index === bannerIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/40'} transition-all`}
              onClick={() => setBannerIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
