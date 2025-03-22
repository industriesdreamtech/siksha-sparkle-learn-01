import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, Users, Award, BarChart3, Play, Star, ChevronRight, Search, Zap, TrendingUp, BrainCircuit, Code, Clock, CheckCircle, Filter, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getFeaturedCourses, getCoursesByCategory, categories } from '@/lib/data';
import { CoursesSlider } from '@/components/ui/CoursesSlider';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayCourses, setDisplayCourses] = useState(getCoursesByCategory('All').slice(0, 6));
  const [featuredCourses, setFeaturedCourses] = useState(getFeaturedCourses());
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [animatedSections, setAnimatedSections] = useState<string[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setAnimatedSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    const text = "Elevate Your Skills with";
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
      typingElement.innerHTML = '';
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          typingElement.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    }
  }, []);

  useEffect(() => {
    setDisplayCourses(getCoursesByCategory(selectedCategory).slice(0, 6));
  }, [selectedCategory]);
  
  const handleExploreClick = () => {
    if (heroRef.current) {
      window.scrollTo({
        top: heroRef.current.offsetHeight,
        behavior: 'smooth'
      });
    }
  };
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "The programming courses on Siksha helped me transition from a junior to senior developer in just 6 months. The hands-on projects were particularly valuable!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "I completed the Data Science path and landed my dream job within weeks. The curriculum is comprehensive and the instructors are top-notch professionals.",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      testimonial: "As someone transitioning to tech from a non-technical background, Siksha made learning accessible and engaging. The community support is amazing!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <section ref={heroRef} className="pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
        <div className="absolute right-0 top-1/3 -translate-y-1/2 w-2/3 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10"></div>
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent -z-10"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full bg-primary/10 animate-pulse`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/80 text-primary mb-6 animate-bounce">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
                <span>Transform your career with premium tech courses</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 md:leading-tight">
                <span id="typing-text" className="text-balance"></span> <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">Siksha</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join a community of over <span className="font-semibold text-foreground">25,000+</span> learners mastering in-demand skills with expert-led courses in programming, AI, cybersecurity, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto animate-fade-up" asChild>
                  <Link to="/courses" className="group">
                    <span>Explore Courses</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto animate-fade-up animation-delay-200">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
              
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={handleExploreClick}
                  className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
                  aria-label="Scroll down"
                >
                  <ChevronRight className="h-8 w-8 transform rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="categories" className={`py-16 ${animatedSections.includes('categories') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Popular Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover our most popular learning paths and skill categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card hover:bg-secondary/10 border border-border rounded-xl p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Programming</h3>
              <p className="text-sm text-muted-foreground mt-1">120+ courses</p>
            </div>
            
            <div className="bg-card hover:bg-secondary/10 border border-border rounded-xl p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">AI & ML</h3>
              <p className="text-sm text-muted-foreground mt-1">85+ courses</p>
            </div>
            
            <div className="bg-card hover:bg-secondary/10 border border-border rounded-xl p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Data Science</h3>
              <p className="text-sm text-muted-foreground mt-1">94+ courses</p>
            </div>
            
            <div className="bg-card hover:bg-secondary/10 border border-border rounded-xl p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Business</h3>
              <p className="text-sm text-muted-foreground mt-1">72+ courses</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="stats" className={`py-16 bg-gradient-to-b from-secondary/30 to-background ${animatedSections.includes('stats') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-medium text-foreground">150+</div>
              <p className="text-sm text-muted-foreground">Expert Instructors</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-medium text-foreground">500+</div>
              <p className="text-sm text-muted-foreground">Courses Available</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-medium text-foreground">25K+</div>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-medium text-foreground">95%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="featured" className={`py-16 ${animatedSections.includes('featured') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <CoursesSlider
            title="Featured Courses"
            subtitle="Handpicked premium courses to kick-start your learning journey"
            courses={featuredCourses}
            viewAllLink="/courses"
            variant="featured"
            badgeText="Top Rated"
            badgeIcon={<Star className="h-3 w-3 fill-primary text-primary" />}
          />
        </div>
      </section>
      
      <section id="explore" className={`py-20 bg-gradient-to-b from-background via-secondary/10 to-background ${animatedSections.includes('explore') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
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
          
          <CoursesSlider
            title={selectedCategory === 'All' ? 'All Courses' : `${selectedCategory} Courses`}
            courses={displayCourses}
            viewAllLink={`/courses?category=${encodeURIComponent(selectedCategory)}`}
            variant="regular"
          />
        </div>
      </section>
      
      <section id="features" className={`py-20 ${animatedSections.includes('features') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-medium mb-4">Why Choose Siksha</h2>
            <p className="text-muted-foreground">
              Our platform offers a premium learning experience with features designed to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-all hover:-translate-y-2 duration-300">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Premium Courses</h3>
              <p className="text-muted-foreground">
                Expert-crafted courses with comprehensive curriculum, hands-on projects, and up-to-date content.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-all hover:-translate-y-2 duration-300">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Live Query Sessions</h3>
              <p className="text-muted-foreground">
                Interactive Q&A sessions with instructors to clarify concepts and get personalized guidance.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm transition-all hover:-translate-y-2 duration-300">
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
      
      <section id="learning-paths" className={`py-20 bg-primary/5 relative overflow-hidden ${animatedSections.includes('learning-paths') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-grid-white/5 -z-10"></div>
        <div className="absolute right-0 bottom-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary/80 text-primary mb-2">
                <Zap className="h-3 w-3 mr-1 text-primary" />
                <span>Trending Paths</span>
              </div>
              <h2 className="font-display text-3xl font-medium mb-2">Structured Learning Paths</h2>
              <p className="text-muted-foreground max-w-lg">
                Follow our carefully designed learning paths to master complete skill sets from beginner to advanced
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <BrainCircuit className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">AI & Machine Learning</h3>
                <p className="text-muted-foreground mb-4">Master AI fundamentals to advanced ML models in 6 months</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-primary font-medium">8 courses</span>
                    <span className="text-muted-foreground"> • 6 months</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link to="/courses">
                      <span>Explore</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group">
              <div className="h-40 bg-gradient-to-r from-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">Full-Stack Development</h3>
                <p className="text-muted-foreground mb-4">Become a versatile developer with frontend and backend skills</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-primary font-medium">10 courses</span>
                    <span className="text-muted-foreground"> • 8 months</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link to="/courses">
                      <span>Explore</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group">
              <div className="h-40 bg-gradient-to-r from-orange-500 to-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">Data Analytics</h3>
                <p className="text-muted-foreground mb-4">Learn to analyze and visualize data for business insights</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-primary font-medium">7 courses</span>
                    <span className="text-muted-foreground"> • 5 months</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link to="/courses">
                      <span>Explore</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="cta" className={`py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden ${animatedSections.includes('cta') ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-grid-white/5 -z-10"></div>
        <div className="absolute left-0 top-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 text-balance">
              Ready to Take Your Skills to the Next Level?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are advancing their careers with Siksha's premium learning platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/courses">
                  <span>Get Started Today</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sign-up">Create Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
