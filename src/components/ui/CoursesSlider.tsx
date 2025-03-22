
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FeaturedCourse } from "@/components/ui/FeaturedCourse";
import { CourseCard } from "@/components/ui/CourseCard";
import { Course, Instructor } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";
import { TutorCard } from "@/components/ui/TutorCard";

interface CoursesSliderProps {
  title: string;
  subtitle?: string;
  courses?: Course[];
  instructors?: Instructor[];
  viewAllLink?: string;
  variant?: "featured" | "regular" | "tutors";
  badgeText?: string;
  badgeIcon?: React.ReactNode;
}

export function CoursesSlider({
  title,
  subtitle,
  courses = [],
  instructors = [],
  viewAllLink,
  variant = "regular",
  badgeText,
  badgeIcon
}: CoursesSliderProps) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const isMobile = useIsMobile();
  
  const handleScrollProgress = (api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  };
  
  // Determine which data to use
  const isInstructorView = variant === "tutors";
  const items = isInstructorView ? instructors : courses;
  
  // Limit visible items for better carousel performance
  const visibleItems = items.slice(0, 20);
  const totalItems = items.length;
  
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          {badgeText && (
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-2">
              {badgeIcon && <span className="mr-1">{badgeIcon}</span>}
              <span>{badgeText}</span>
            </div>
          )}
          <h2 className="font-display text-3xl font-medium mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          {totalItems > 20 && (
            <p className="text-xs text-muted-foreground mt-1">
              Showing {visibleItems.length} of {totalItems} {isInstructorView ? 'tutors' : 'courses'}
            </p>
          )}
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          {!isMobile && (
            <>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                disabled={!canScrollPrev}
                onClick={() => document.querySelector('.embla__prev')?.dispatchEvent(new Event('click'))}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                disabled={!canScrollNext}
                onClick={() => document.querySelector('.embla__next')?.dispatchEvent(new Event('click'))}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
          {viewAllLink && totalItems > visibleItems.length && (
            <Button variant="outline" asChild className="ml-2">
              <a href={viewAllLink}>
                View All
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
        onScrollProgress={handleScrollProgress}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {isInstructorView ? (
            // Render instructors
            visibleItems.map((instructor: Instructor) => (
              <CarouselItem 
                key={instructor.name} 
                className={isMobile ? "pl-2 basis-full" : "pl-4 md:basis-1/2 lg:basis-1/4"}
              >
                <TutorCard instructor={instructor} />
              </CarouselItem>
            ))
          ) : (
            // Render courses
            visibleItems.map((course: Course) => (
              <CarouselItem 
                key={course.id} 
                className={isMobile ? "pl-2 basis-full" : "pl-4 md:basis-1/2 lg:basis-1/3"}
              >
                {variant === "featured" ? (
                  <FeaturedCourse course={course} />
                ) : (
                  <CourseCard course={course} />
                )}
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        
        {!isMobile && (
          <>
            <CarouselPrevious
              className="absolute -left-12 md:-left-6 embla__prev"
              disabled={!canScrollPrev}
            />
            <CarouselNext
              className="absolute -right-12 md:-right-6 embla__next"
              disabled={!canScrollNext}
            />
          </>
        )}
      </Carousel>
      
      {viewAllLink && (
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href={viewAllLink}>
              View All {title} ({totalItems})
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
