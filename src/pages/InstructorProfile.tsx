
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CourseCard } from '@/components/ui/CourseCard';
import { 
  GraduationCap, Briefcase, Star, Users, BookOpen, Award, 
  Calendar, ChevronRight, Twitter, Linkedin, Github, Globe, Mail 
} from 'lucide-react';
import { getInstructorByName, getCoursesByInstructor } from '@/lib/data';

const InstructorProfile = () => {
  const { name } = useParams<{ name: string }>();
  const [instructor, setInstructor] = useState(name ? getInstructorByName(decodeURIComponent(name)) : null);
  const [instructorCourses, setInstructorCourses] = useState(name ? getCoursesByInstructor(decodeURIComponent(name)) : []);
  const [activeTab, setActiveTab] = useState('courses');
  
  useEffect(() => {
    if (name) {
      const decodedName = decodeURIComponent(name);
      const instructorData = getInstructorByName(decodedName);
      setInstructor(instructorData);
      
      const courses = getCoursesByInstructor(decodedName);
      setInstructorCourses(courses);
      
      if (!instructorData) {
        console.error(`Instructor with name ${decodedName} not found`);
      }
    }
    
    window.scrollTo(0, 0);
  }, [name]);
  
  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-3">Instructor not found</h2>
            <p className="text-muted-foreground mb-6">
              The instructor you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Instructor Hero Section */}
      <section className="pt-24 relative">
        <div className="h-64 md:h-80 w-full overflow-hidden relative">
          <img 
            src={instructor.coverImage} 
            alt={`${instructor.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative -mt-20">
          <div className="bg-card rounded-xl border border-border shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden flex-shrink-0">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-display font-medium mb-2">{instructor.name}</h1>
                    <p className="text-xl text-muted-foreground">{instructor.title}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    
                    <Button size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    <span>{instructor.totalCourses} Courses</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <span>{instructor.totalStudents.toLocaleString()} Students</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-yellow-400" />
                    <span>{instructor.rating.toFixed(1)} Instructor Rating ({instructor.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <span>{instructor.experience}+ Years Experience</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  {instructor.social.twitter && (
                    <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  
                  {instructor.social.linkedin && (
                    <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  
                  {instructor.social.github && (
                    <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  
                  {instructor.social.website && (
                    <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instructor Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="courses" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-3xl grid grid-cols-3 mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <div>
              {/* Courses Tab */}
              <TabsContent value="courses" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {instructorCourses.length > 0 ? (
                    instructorCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No courses available from this instructor yet.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* About Tab */}
              <TabsContent value="about" className="max-w-3xl animate-fade-in">
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-display text-2xl font-medium mb-4">Biography</h2>
                  <p className="text-muted-foreground mb-8">{instructor.bio}</p>
                  
                  <h3 className="font-display text-xl font-medium mb-4">Specializations</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {instructor.specializations.map((specialization, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {specialization}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-display text-xl font-medium mb-4">Education</h3>
                  <div className="space-y-4 mb-8">
                    {instructor.education.map((edu, index) => (
                      <div key={index} className="flex items-start">
                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <div className="font-medium">{edu.degree}</div>
                          <div className="text-muted-foreground">
                            {edu.institution}, {edu.year}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="font-display text-xl font-medium mb-4">Achievements</h3>
                  <div className="space-y-4 mb-8">
                    {instructor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>{achievement}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews" className="max-w-3xl animate-fade-in">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-medium mb-4">Student Feedback</h2>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                      <span className="text-2xl font-bold">{instructor.rating.toFixed(1)}</span>
                    </div>
                    
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.round(instructor.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                          />
                        ))}
                      </div>
                      <div className="text-muted-foreground">
                        Based on {instructor.reviews.toLocaleString()} reviews
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock Reviews */}
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                                {String.fromCharCode(65 + index)}
                              </div>
                              <div>
                                <p className="font-medium">Student {String.fromCharCode(65 + index)}</p>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-3.5 w-3.5 ${i < 5 - index % 2 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                                    />
                                  ))}
                                  <span className="text-xs text-muted-foreground ml-2">{index + 1} month{index > 0 ? 's' : ''} ago</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {index === 0 && "Excellent course! The instructor explains complex concepts clearly and provides practical examples. Highly recommended for anyone looking to advance their skills."}
                            {index === 1 && "Very knowledgeable instructor with a great teaching style. The course content was well-structured and the exercises helped reinforce the concepts."}
                            {index === 2 && "I've taken several courses with this instructor and they never disappoint. Always up-to-date content with real-world applications. Worth every penny!"}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InstructorProfile;
