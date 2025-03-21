
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen, Star } from 'lucide-react';
import { Course } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeaturedCourseProps {
  course: Course;
}

export function FeaturedCourse({ course }: FeaturedCourseProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="group relative bg-gradient-to-br from-primary/5 to-transparent rounded-2xl overflow-hidden border border-primary/10 p-1">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)] [mask-size:10px]"></div>
      <div className="relative rounded-xl overflow-hidden flex flex-col md:flex-row h-full">
        {/* Image */}
        <div className="relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40 animate-pulse"></div>
          )}
          <img 
            src={course.image} 
            alt={course.title}
            className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Free Badge */}
          {course.isFree && (
            <Badge className="absolute bottom-3 left-3 bg-green-100 text-green-700 hover:bg-green-200">
              Free
            </Badge>
          )}
        </div>
        
        {/* Content */}
        <div className="relative md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <Badge className="inline-flex w-fit mb-3 md:mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Featured Course
          </Badge>
          
          <h2 className="font-display text-xl md:text-3xl font-medium mb-2 md:mb-3 leading-tight text-balance">
            {course.title}
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-5 line-clamp-2 md:line-clamp-none">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{course.rating.toFixed(1)} ({course.students.toLocaleString()} students)</span>
            </div>
          </div>
          
          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs md:text-sm text-muted-foreground">Price</div>
              {course.isFree ? (
                <div className="text-lg md:text-2xl font-medium text-green-600">Free</div>
              ) : (
                <div className="text-lg md:text-2xl font-medium">₹{course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}</div>
              )}
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              {!isMobile && (
                <Button asChild variant="outline" size="sm">
                  <Link to={`/instructor/${encodeURIComponent(course.instructor)}`} className="group">
                    <span>View Instructor</span>
                  </Link>
                </Button>
              )}
              
              <Button asChild className={isMobile ? "w-full" : ""}>
                <Link to={`/course/${course.id}`} className="group">
                  <span>View Course</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
