
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Star, Video } from 'lucide-react';
import { Course } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300",
        featured ? "md:col-span-2" : ""
      )}
    >
      <Link to={`/course/${course.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40 animate-pulse"></div>
          )}
          <img 
            src={course.image} 
            alt={course.title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          <Badge 
            className="absolute top-3 left-3 bg-white/90 text-foreground hover:bg-white/80"
          >
            {course.category}
          </Badge>
          
          {/* Video Indicator */}
          {course.videoUrl && (
            <Badge 
              className="absolute top-3 left-[calc(3rem+8px+var(--badge-width,0px))] bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              <Video className="h-3 w-3 mr-1" />
              Video
            </Badge>
          )}
          
          {/* Free Course Badge */}
          {course.isFree && (
            <Badge 
              className="absolute bottom-3 left-3 bg-green-100 text-green-700 hover:bg-green-200"
            >
              Free
            </Badge>
          )}
          
          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 text-foreground rounded-full px-2 py-1 text-xs font-medium">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="font-display text-lg font-medium leading-tight group-hover:text-primary transition-colors duration-200">
            {course.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center text-xs text-muted-foreground space-x-4">
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-3.5 w-3.5 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Users className="h-3.5 w-3.5 mr-1" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="font-medium">
              {course.isFree ? (
                <span className="text-lg text-green-600">Free</span>
              ) : (
                <span className="text-lg">₹{course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}</span>
              )}
            </div>
            <Badge variant="outline" className={
              course.level === 'Beginner' 
                ? "border-green-200 bg-green-50 text-green-700" 
                : course.level === 'Intermediate'
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-purple-200 bg-purple-50 text-purple-700"
            }>
              {course.level}
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
}
