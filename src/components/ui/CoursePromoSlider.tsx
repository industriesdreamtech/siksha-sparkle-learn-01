
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Clock, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface CoursePromo {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: string;
  duration: string;
  features: string[];
  price: string;
  salePrice?: string;
  badgeText?: string;
  bgColor: string;
  imageUrl: string;
}

interface CoursePromoSliderProps {
  title?: string;
  subtitle?: string;
}

export function CoursePromoSlider({ title, subtitle }: CoursePromoSliderProps) {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const promos: CoursePromo[] = [
    {
      id: 101,
      title: "Python for Data Science & Machine Learning",
      instructor: "Dr. Sarah Williams",
      rating: 4.8,
      students: "42,189",
      duration: "68 hours",
      features: ["50+ hands-on exercises", "Certificate included", "Lifetime access"],
      price: "$129.99",
      salePrice: "$49.99",
      badgeText: "Bestseller",
      bgColor: "from-blue-600 to-indigo-700",
      imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    },
    {
      id: 102,
      title: "Complete Web Development Bootcamp 2023",
      instructor: "Michael Chen",
      rating: 4.9,
      students: "85,320",
      duration: "75 hours",
      features: ["20 real-world projects", "Job interview preparation", "Personal portfolio"],
      price: "$149.99",
      salePrice: "$59.99",
      badgeText: "Top Rated",
      bgColor: "from-purple-600 to-pink-600",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
      id: 103,
      title: "Advanced UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: "32,456",
      duration: "52 hours",
      features: ["Figma & Adobe XD", "Design system creation", "User research methods"],
      price: "$119.99",
      salePrice: "$44.99",
      badgeText: "New",
      bgColor: "from-green-600 to-teal-600",
      imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const handleScrollProgress = (api: any) => {
    if (!api) return;
    const progress = Math.round(api.scrollProgress() * (promos.length - 1));
    setCurrentSlide(progress);
  };
  
  useEffect(() => {
    // Auto-rotate promos every 8 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % promos.length);
      
      // Find and control the carousel
      const nextBtn = document.querySelector('.course-promo-next') as HTMLButtonElement;
      if (nextBtn) nextBtn.click();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-6 text-center">
          {title && <h2 className="text-2xl md:text-3xl font-medium mb-2">{title}</h2>}
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onScrollProgress={handleScrollProgress}
      >
        <CarouselContent>
          {promos.map((promo) => (
            <CarouselItem key={`promo-${promo.id}`} className="pl-4 md:pl-6 basis-full">
              <div className={`bg-gradient-to-r ${promo.bgColor} rounded-xl overflow-hidden shadow-lg`}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image section for desktop only */}
                  <div className="hidden md:block md:w-2/5 lg:w-1/3 relative h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${promo.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                    {promo.badgeText && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        {promo.badgeText}
                      </div>
                    )}
                  </div>
                  
                  {/* Content section */}
                  <div className="w-full md:w-3/5 lg:w-2/3 p-6 md:p-8 text-white">
                    {/* Mobile-only badge */}
                    {isMobile && promo.badgeText && (
                      <div className="inline-block bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-3">
                        {promo.badgeText}
                      </div>
                    )}
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">{promo.title}</h3>
                    <p className="text-white/80 text-sm text-left mb-2">By {promo.instructor}</p>
                    
                    <div className="flex items-center mb-4 text-left">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(promo.rating) ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm">{promo.rating}</span>
                      <span className="mx-2 text-white/60">•</span>
                      <span className="text-sm flex items-center">
                        <Users className="h-3.5 w-3.5 mr-1" />
                        {promo.students} students
                      </span>
                      <span className="mx-2 text-white/60">•</span>
                      <span className="text-sm flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {promo.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-1 mb-4 text-left">
                      {promo.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-6">
                      <div className="mb-4 md:mb-0 text-left">
                        {promo.salePrice ? (
                          <div>
                            <span className="text-2xl font-bold">{promo.salePrice}</span>
                            <span className="ml-2 text-white/70 line-through">{promo.price}</span>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold">{promo.price}</span>
                        )}
                        <div className="text-xs text-white/70 mt-1">Limited time offer</div>
                      </div>
                      
                      <Button asChild 
                        className="bg-white text-gray-900 hover:bg-white/90"
                        size={isMobile ? "default" : "lg"}
                      >
                        <Link to={`/courses/${promo.id}`}>
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-4 gap-1">
          {promos.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-primary/20'
              }`}
              onClick={() => {
                setCurrentSlide(index);
                // Logic to jump to this slide would go here
              }}
              aria-label={`Go to promotion ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
