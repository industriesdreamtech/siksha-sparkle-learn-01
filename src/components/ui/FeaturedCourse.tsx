
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen, Star } from 'lucide-react';
import { Course } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FeaturedCourseProps {
  course: Course;
}

export function FeaturedCourse({ course }: FeaturedCourseProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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
        </div>
        
        {/* Content */}
        <div className="relative md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <Badge className="inline-flex w-fit mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Featured Course
          </Badge>
          
          <h2 className="font-display text-2xl md:text-3xl font-medium mb-3 leading-tight text-balance">
            {course.title}
          </h2>
          
          <p className="text-muted-foreground mb-5">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1.5" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1.5" />
              <span>{course.rating.toFixed(1)} ({course.students.toLocaleString()} students)</span>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Price</div>
              <div className="text-2xl font-medium">${course.price}</div>
            </div>
            
            <Button asChild>
              <Link to={`/course/${course.id}`} className="group">
                <span>View Course</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
