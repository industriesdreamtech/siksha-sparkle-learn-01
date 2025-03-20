
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, Users, Award, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { CourseCard } from '@/components/ui/CourseCard';
import { FeaturedCourse } from '@/components/ui/FeaturedCourse';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getFeaturedCourses, getCoursesByCategory, categories } from '@/lib/data';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayCourses, setDisplayCourses] = useState(getCoursesByCategory('All').slice(0, 3));
  const [featuredCourses, setFeaturedCourses] = useState(getFeaturedCourses());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setDisplayCourses(getCoursesByCategory(selectedCategory).slice(0, 3));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
        <div className="absolute right-0 top-1/3 -translate-y-1/2 w-2/3 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/80 text-foreground mb-5">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
                <span>Professional tech courses to advance your career</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 md:leading-tight text-balance">
                Elevate Your Skills with <span className="text-gradient">Siksha</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access premium courses from industry experts in programming, AI, cybersecurity, and more. Learn at your own pace and transform your career.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses" className="group">
                    <span>Explore Courses</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-up">
              <div className="text-3xl md:text-4xl font-display font-medium text-foreground">150+</div>
              <p className="text-sm text-muted-foreground">Expert Instructors</p>
            </div>
            <div className="space-y-2 animate-fade-up animation-delay-200">
              <div className="text-3xl md:text-4xl font-display font-medium text-foreground">500+</div>
              <p className="text-sm text-muted-foreground">Courses Available</p>
            </div>
            <div className="space-y-2 animate-fade-up animation-delay-400">
              <div className="text-3xl md:text-4xl font-display font-medium text-foreground">25K+</div>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="space-y-2 animate-fade-up animation-delay-400">
              <div className="text-3xl md:text-4xl font-display font-medium text-foreground">95%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Course Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-medium mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">Handpicked courses to kick-start your learning journey</p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link to="/courses" className="group">
                <span>View All</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-8">
            {featuredCourses.map((course) => (
              <FeaturedCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Course Categories Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-medium mb-4">Explore Our Courses</h2>
            <p className="text-muted-foreground">
              Discover courses by category and find the perfect match for your learning goals
            </p>
          </div>
          
          <div className="mb-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/courses" className="group">
                <span>Browse All Courses</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-medium mb-4">Why Choose Siksha</h2>
            <p className="text-muted-foreground">
              Our platform offers a premium learning experience with features designed to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-transform hover:translate-y-[-5px] duration-300 animate-fade-up">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Premium Courses</h3>
              <p className="text-muted-foreground">
                Expert-crafted courses with comprehensive curriculum, hands-on projects, and up-to-date content.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-transform hover:translate-y-[-5px] duration-300 animate-fade-up animation-delay-200">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Live Query Sessions</h3>
              <p className="text-muted-foreground">
                Interactive Q&A sessions with instructors to clarify concepts and get personalized guidance.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-transform hover:translate-y-[-5px] duration-300 animate-fade-up animation-delay-400">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Certifications</h3>
              <p className="text-muted-foreground">
                Earn industry-recognized certificates to showcase your skills and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 -z-10"></div>
        <div className="absolute right-0 bottom-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 text-balance">
              Ready to Take Your Skills to the Next Level?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are advancing their careers with Siksha's premium learning platform.
            </p>
            <Button size="lg" asChild>
              <Link to="/courses" className="group">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
