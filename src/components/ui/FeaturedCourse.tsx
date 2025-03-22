
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
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-all duration-300 course-card-hover">
      <div className="relative">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40 animate-pulse"></div>
          )}
          <img 
            src={course.image} 
            alt={course.title}
            className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Free Badge */}
          {course.isFree && (
            <Badge className="absolute bottom-3 left-3 bg-green-100 text-green-700 hover:bg-green-200">
              Free
            </Badge>
          )}
          
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground hover:bg-primary">
            Featured
          </Badge>
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="font-display text-lg md:text-xl font-medium mb-2 line-clamp-2 h-14 leading-tight">
            {course.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 h-10">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs md:text-sm text-muted-foreground">
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
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="mt-auto pt-2 border-t border-border flex items-center justify-between">
            <div>
              {course.isFree ? (
                <div className="text-base font-medium text-green-600">Free</div>
              ) : (
                <div className="text-base font-medium">₹{course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}</div>
              )}
            </div>
            
            <Button asChild size="sm" variant="ghost" className="group">
              <Link to={`/course/${course.id}`}>
                <span>View Course</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
