
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Bell, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sampleCourses } from '@/lib/data';
import { toast } from '@/hooks/use-toast';

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Course Available',
      message: 'Check out our new course on Advanced Data Visualization!',
      read: false,
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    },
    {
      id: '2',
      title: 'Special Offer',
      message: 'Get 25% off on all Excel courses this week!',
      read: false,
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: '3',
      title: 'Community Update',
      message: 'Join our upcoming webinar on Career Development next Friday',
      read: true,
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
    },
  ]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setShowSearch(false);
    setShowNotifications(false);
  }, [location.pathname]);

  // Handle click outside search and notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const query = value.toLowerCase();
    const filteredCourses = sampleCourses.filter(course => 
      course.title.toLowerCase().includes(query) || 
      course.description.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.tags.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 5);
    
    setSearchResults(filteredCourses);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setShowSearch(false);
      navigate(`/courses?search=${encodeURIComponent(searchValue)}`);
      setSearchValue('');
    }
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
    toast({
      title: "Notifications",
      description: "All notifications marked as read",
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 glass shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-display text-xl font-medium"
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="animate-fade-in">Siksha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/" 
                ? "text-primary" 
                : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
            )}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname.includes("/courses") && !location.pathname.includes("/course/") 
                ? "text-primary" 
                : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
            )}
          >
            Courses
          </Link>
          <Link 
            to="/instructors" 
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname.includes("/instructors") && !location.pathname.includes("/instructor/") 
                ? "text-primary" 
                : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
            )}
          >
            Instructors
          </Link>
          <Link 
            to="/community" 
            className="px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            Community
          </Link>
        </nav>

        {/* Right side - Search, Account, etc */}
        <div className="hidden md:flex items-center space-x-4">
          <div ref={searchRef} className="relative">
            <button 
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </button>
            
            {showSearch && (
              <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg p-3 animate-fade-in">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search courses, instructors..."
                      value={searchValue}
                      onChange={handleSearch}
                      className="w-full bg-background border border-input pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      autoFocus
                    />
                  </div>
                </form>
                
                {searchResults.length > 0 && (
                  <div className="mt-3 max-h-80 overflow-y-auto">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      Results
                    </div>
                    <div className="space-y-2">
                      {searchResults.map(course => (
                        <Link 
                          key={course.id}
                          to={`/course/${course.id}`}
                          className="block p-2 hover:bg-secondary/10 rounded-md transition-colors"
                          onClick={() => setShowSearch(false)}
                        >
                          <div className="font-medium text-foreground line-clamp-1">{course.title}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">{course.instructor} • {course.category}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full"
                        onClick={() => {
                          setShowSearch(false);
                          navigate(`/courses?search=${encodeURIComponent(searchValue)}`);
                        }}
                      >
                        View all results
                      </Button>
                    </div>
                  </div>
                )}
                
                {searchValue.trim() !== '' && searchResults.length === 0 && (
                  <div className="text-center py-3 text-muted-foreground">
                    No results found for "{searchValue}"
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div ref={notificationsRef} className="relative">
            <button 
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg p-3 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Notifications</h3>
                  {unreadCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                      Mark all as read
                    </Button>
                  )}
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    <div className="space-y-2">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id}
                          className={cn(
                            "p-3 border-l-2 rounded-r-md transition-colors",
                            notification.read 
                              ? "border-border bg-background/50" 
                              : "border-primary bg-primary/5"
                          )}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            <span className="text-xs text-muted-foreground">
                              {notification.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No notifications
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="h-6 w-px bg-border"></div>
          
          <Button variant="secondary" size="sm" className="px-4" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
          
          <Button size="sm" className="px-4" asChild>
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground/70 hover:text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/20 px-4 py-5 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                location.pathname === "/" 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary/50"
              )}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                location.pathname.includes("/courses") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary/50"
              )}
            >
              Courses
            </Link>
            <Link 
              to="/instructors" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                location.pathname.includes("/instructors") 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary/50"
              )}
            >
              Instructors
            </Link>
            <Link 
              to="/community" 
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary/50"
            >
              Community
            </Link>

            <div className="h-px w-full bg-border/50 my-2"></div>

            <div className="flex items-center space-x-2">
              <Link 
                to="/sign-in"
                className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-secondary/80 text-foreground text-center"
              >
                Sign In
              </Link>
              <Link 
                to="/sign-up"
                className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground text-center"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
