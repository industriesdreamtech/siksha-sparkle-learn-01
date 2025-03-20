
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Users, BookOpen, Star, Award, ChevronRight, Play, 
  Share2, BookmarkPlus, ShoppingCart, CheckCircle, Sparkles, User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getCourseById } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState(id ? getCourseById(id) : null);
  const [activeTab, setActiveTab] = useState('overview');
  const [previewVisible, setPreviewVisible] = useState(false);
  
  useEffect(() => {
    if (id) {
      const courseData = getCourseById(id);
      setCourse(courseData);
      
      if (!courseData) {
        console.error(`Course with ID ${id} not found`);
      }
    }
    
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-3">Course not found</h2>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist or has been removed.
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
  
  // Mock data
  const curriculum = [
    { 
      section: "Introduction", 
      lessons: [
        { title: "Welcome to the Course", duration: "5:12", free: true },
        { title: "Course Overview", duration: "8:45", free: true },
        { title: "Setting Up Your Environment", duration: "12:30", free: false }
      ]
    },
    { 
      section: "Core Concepts", 
      lessons: [
        { title: "Understanding the Basics", duration: "15:20", free: false },
        { title: "Key Principles and Techniques", duration: "18:45", free: false },
        { title: "Practical Examples", duration: "22:10", free: false },
        { title: "Common Challenges and Solutions", duration: "14:35", free: false }
      ]
    },
    { 
      section: "Advanced Topics", 
      lessons: [
        { title: "Advanced Implementation", duration: "24:18", free: false },
        { title: "Optimization Strategies", duration: "19:50", free: false },
        { title: "Industry Best Practices", duration: "16:40", free: false }
      ]
    },
    { 
      section: "Final Project", 
      lessons: [
        { title: "Project Brief and Requirements", duration: "10:15", free: false },
        { title: "Step-by-Step Implementation", duration: "28:30", free: false },
        { title: "Testing and Debugging", duration: "17:45", free: false },
        { title: "Final Review and Submission", duration: "11:20", free: false }
      ]
    }
  ];
  
  const reviews = [
    {
      name: "Alex Johnson",
      rating: 5,
      date: "2 months ago",
      content: "This course exceeded my expectations! The instructor explains complex concepts in a clear and concise manner. The hands-on projects were challenging but incredibly rewarding. I feel confident applying these skills in my job now."
    },
    {
      name: "Sarah Williams",
      rating: 4,
      date: "3 months ago",
      content: "Great course with excellent content. The instructor is knowledgeable and engaging. I particularly enjoyed the practical exercises. My only suggestion would be to include more real-world examples in some sections."
    },
    {
      name: "Michael Brown",
      rating: 5,
      date: "1 month ago",
      content: "One of the best online courses I've ever taken. The curriculum is well-structured and builds your knowledge incrementally. The instructor responds quickly to questions and provides valuable feedback on assignments."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Course Preview Modal */}
      {previewVisible && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-white/80"
              onClick={() => setPreviewVisible(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
              </svg>
            </button>
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Course Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      {/* Course Header */}
      <section className="pt-32 pb-8 relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Course Info */}
            <div className="lg:w-2/3 animate-fade-in">
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <Link to="/courses" className="hover:text-foreground transition-colors">Courses</Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <Link to={`/courses?category=${encodeURIComponent(course.category)}`} className="hover:text-foreground transition-colors">
                  {course.category}
                </Link>
              </div>
              
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {course.category}
              </Badge>
              
              <h1 className="font-display text-3xl md:text-4xl font-medium mb-4 leading-tight text-balance">
                {course.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1.5" />
                  <span className="font-medium">{course.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground ml-1">({course.students.toLocaleString()} students)</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <BookOpen className="h-4 w-4 mr-1.5" />
                  <span>{course.lessons} lessons</span>
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
              
              <div className="flex items-center mb-8">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground">Course Instructor</p>
                </div>
              </div>
              
              {/* Course Action Buttons - Mobile Only */}
              <div className="flex flex-col gap-3 mb-8 lg:hidden">
                <Button size="lg" className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Enroll Now - ₹{course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" onClick={() => setPreviewVisible(true)}>
                  <Play className="mr-2 h-4 w-4" />
                  Watch Preview
                </Button>
              </div>
            </div>
            
            {/* Right Column - Course Card */}
            <div className="lg:w-1/3 animate-fade-in animation-delay-200">
              <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-md sticky top-24">
                {/* Course Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full bg-white/20 hover:bg-white/30 text-white w-16 h-16"
                      onClick={() => setPreviewVisible(true)}
                    >
                      <Play className="h-8 w-8 fill-white" />
                    </Button>
                  </div>
                </div>
                
                {/* Course Info */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-3xl font-display font-medium">₹{course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Full lifetime access</p>
                        <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Certificate of completion</p>
                        <p className="text-sm text-muted-foreground">Boost your career profile</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Instructor Q&A</p>
                        <p className="text-sm text-muted-foreground">Direct access to the expert</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button size="lg" className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      30-day money-back guarantee
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="flex-1">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-3xl grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <div className="max-w-3xl">
              {/* Overview Tab */}
              <TabsContent value="overview" className="animate-fade-in">
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-display text-2xl font-medium mb-4">About This Course</h2>
                  <p>
                    This comprehensive course is designed to take you from the fundamentals to advanced concepts in {course.category}. 
                    Whether you're a beginner looking to build a solid foundation or an experienced professional aiming to enhance your skills, 
                    this course offers valuable insights and practical knowledge that you can apply immediately.
                  </p>
                  
                  <h3 className="font-display text-xl font-medium mt-8 mb-4">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 list-none pl-0">
                    {course.tags.map((tag, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Master {tag} concepts and best practices</span>
                      </li>
                    ))}
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Build real-world projects from scratch</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Solve common challenges in the industry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Implement best practices for production environments</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-display text-xl font-medium mt-8 mb-4">Requirements</h3>
                  <ul className="space-y-2 pl-0 list-none">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Basic computer knowledge and familiarity with operating systems</span>
                    </li>
                    {course.level !== 'Beginner' && (
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Foundational knowledge in {course.category.toLowerCase()}</span>
                      </li>
                    )}
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Dedication and willingness to practice with hands-on exercises</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-display text-xl font-medium mt-8 mb-4">Who This Course Is For</h3>
                  <ul className="space-y-2 pl-0 list-none">
                    {course.level === 'Beginner' && (
                      <li className="flex items-start">
                        <User className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Complete beginners with no prior experience in {course.category.toLowerCase()}</span>
                      </li>
                    )}
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Students looking to expand their knowledge in {course.category.toLowerCase()}</span>
                    </li>
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Professionals wanting to upskill or transition to a new role</span>
                    </li>
                    {course.level === 'Advanced' && (
                      <li className="flex items-start">
                        <User className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Experienced practitioners seeking to master advanced techniques</span>
                      </li>
                    )}
                  </ul>
                </div>
              </TabsContent>
              
              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="animate-fade-in">
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-medium mb-2">Course Curriculum</h2>
                  <p className="text-muted-foreground">
                    {curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} lessons • {course.duration} total
                  </p>
                </div>
                
                <div className="space-y-4">
                  {curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-border/50 rounded-lg overflow-hidden">
                      <div className="bg-secondary/30 px-6 py-4">
                        <h3 className="font-medium">Section {sectionIndex + 1}: {section.section}</h3>
                      </div>
                      <div className="divide-y divide-border/50">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between px-6 py-4 hover:bg-secondary/10 transition-colors">
                            <div className="flex items-center">
                              <Play className="h-4 w-4 mr-3 text-primary" />
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                                {lesson.free && (
                                  <Badge variant="outline" className="mt-1 text-xs">
                                    Preview Available
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews" className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-medium mb-6">Student Reviews</h2>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center p-6 bg-secondary/20 rounded-xl">
                    <div className="text-center md:text-left">
                      <div className="text-5xl font-display font-medium mb-2">{course.rating.toFixed(1)}</div>
                      <div className="flex items-center justify-center md:justify-start mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.round(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {course.students.toLocaleString()} students
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2 w-full max-w-xs">
                      {[5, 4, 3, 2, 1].map((star) => {
                        // Calculate a mock percentage based on the rating
                        const percentage = Math.max(0, Math.min(100, 
                          star === 5 ? 70 :
                          star === 4 ? 20 :
                          star === 3 ? 8 :
                          star === 2 ? 1.5 :
                          0.5
                        ));
                        
                        return (
                          <div key={star} className="flex items-center">
                            <div className="flex items-center w-16">
                              <span className="text-sm mr-1">{star}</span>
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            </div>
                            <div className="flex-1 mx-2">
                              <Progress value={percentage} className="h-2" />
                            </div>
                            <div className="w-10 text-right text-sm text-muted-foreground">
                              {percentage}%
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-border/50 pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3.5 w-3.5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                                />
                              ))}
                              <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {review.content}
                      </p>
                    </div>
                  ))}
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

export default CourseDetail;
