
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/ui/CourseCard';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { getCoursesByCategory, categories } from '@/lib/data';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayCourses, setDisplayCourses] = useState(getCoursesByCategory('All'));
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [sortBy, setSortBy] = useState('popularity');
  
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);
  
  useEffect(() => {
    let filteredCourses = getCoursesByCategory(selectedCategory);
    
    // Filter by level if selected
    if (selectedLevel) {
      filteredCourses = filteredCourses.filter(course => course.level === selectedLevel);
    }
    
    // Filter by search query
    if (localSearchQuery.trim() !== '') {
      const query = localSearchQuery.toLowerCase().trim();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Sort courses
    switch (sortBy) {
      case 'price-low':
        filteredCourses.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredCourses.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredCourses.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'popularity'
        filteredCourses.sort((a, b) => b.students - a.students);
    }
    
    setDisplayCourses(filteredCourses);
  }, [selectedCategory, selectedLevel, localSearchQuery, sortBy]);
  
  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel(null);
    setLocalSearchQuery('');
    setSortBy('popularity');
    navigate('/courses');
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearchQuery.trim() !== searchQuery) {
      const params = new URLSearchParams(location.search);
      
      if (localSearchQuery.trim()) {
        params.set('search', localSearchQuery);
      } else {
        params.delete('search');
      }
      
      navigate({ 
        pathname: location.pathname,
        search: params.toString() 
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-medium mb-4 animate-fade-in">
              Courses
            </h1>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in">
              Browse our comprehensive collection of tech courses designed to help you achieve your learning goals
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 animate-fade-up">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full bg-background border border-input pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Filter className="mr-2 h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-input px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer pr-10 relative text-foreground"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Filter Panel */}
          {filtersOpen && (
            <div className="mt-4 p-5 bg-card rounded-lg border border-border/50 shadow-sm animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>Clear All</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <Badge 
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge 
                      variant={selectedCategory === 'All' ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory('All')}
                    >
                      All
                    </Badge>
                    {categories.map(category => (
                      <Badge 
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Category Filter */}
          <div className="mt-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          {displayCourses.length > 0 ? (
            <>
              {/* Results summary */}
              <div className="mb-6 text-sm text-muted-foreground">
                Showing {displayCourses.length} {displayCourses.length === 1 ? 'course' : 'courses'}
                {localSearchQuery && (
                  <span> for "{localSearchQuery}"</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any courses matching your search criteria.
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
