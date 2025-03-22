
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FeaturedCourse } from "@/components/ui/FeaturedCourse";
import { CourseCard } from "@/components/ui/CourseCard";
import { Course } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

interface CoursesSliderProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  viewAllLink?: string;
  variant?: "featured" | "regular";
  badgeText?: string;
  badgeIcon?: React.ReactNode;
}

export function CoursesSlider({
  title,
  subtitle,
  courses,
  viewAllLink,
  variant = "regular",
  badgeText,
  badgeIcon
}: CoursesSliderProps) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const isMobile = useIsMobile();
  
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
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
        onScrollProgress={(api) => {
          if (!api) return;
          setCanScrollPrev(api.canScrollPrev());
          setCanScrollNext(api.canScrollNext());
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {courses.map((course) => (
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
          ))}
        </CarouselContent>
        
        {!isMobile && (
          <>
            <CarouselPrevious
              className="absolute -left-12 md:-left-6"
              disabled={!canScrollPrev}
            />
            <CarouselNext
              className="absolute -right-12 md:-right-6"
              disabled={!canScrollNext}
            />
          </>
        )}
      </Carousel>
      
      {viewAllLink && (
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href={viewAllLink}>View All {title}</a>
          </Button>
        </div>
      )}
    </div>
  );
}
