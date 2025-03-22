
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instructor } from "@/lib/data";
import { GraduationCap, Users, Star, ExternalLink, Globe } from "lucide-react";

interface TutorCardProps {
  instructor: Instructor;
}

export function TutorCard({ instructor }: TutorCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full group">
      <div className="h-24 bg-gradient-to-r from-primary/10 to-primary/5 relative">
        {instructor.languages && instructor.languages.length > 0 && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              <Globe className="h-3 w-3 mr-1" />
              {instructor.languages.length} {instructor.languages.length === 1 ? 'language' : 'languages'}
            </Badge>
          </div>
        )}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-1 bg-background rounded-full">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-background">
            <img 
              src={instructor.avatar} 
              alt={instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <CardContent className="pt-12 text-center h-[calc(100%-6rem)] flex flex-col">
        <h3 className="font-display text-lg font-medium mb-1">{instructor.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{instructor.title}</p>
        
        {instructor.country && (
          <Badge variant="outline" className="mb-2 self-center">
            {instructor.country}
          </Badge>
        )}
        
        {instructor.languages && instructor.languages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {instructor.languages.slice(0, 3).map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang}
              </Badge>
            ))}
            {instructor.languages.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{instructor.languages.length - 3}
              </Badge>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-muted-foreground mt-auto">
          <div className="flex flex-col items-center">
            <GraduationCap className="h-4 w-4 mb-1 text-primary" />
            <span>{instructor.totalCourses} Courses</span>
          </div>
          
          <div className="flex flex-col items-center">
            <Users className="h-4 w-4 mb-1 text-primary" />
            <span>{(instructor.totalStudents / 1000).toFixed(1)}k Students</span>
          </div>
          
          <div className="flex flex-col items-center">
            <Star className="h-4 w-4 mb-1 fill-yellow-400 text-yellow-400" />
            <span>{instructor.rating.toFixed(1)} Rating</span>
          </div>
        </div>
        
        <Button asChild className="w-full mt-auto group" size="sm">
          <Link to={`/instructor/${encodeURIComponent(instructor.name)}`}>
            <span>View Profile</span>
            <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
