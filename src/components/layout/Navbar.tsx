
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Bell, User, BookOpen, Settings, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sampleCourses } from '@/lib/data';
import { toast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { GlobalSearch } from '@/components/ui/GlobalSearch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
    setShowNotifications(false);
  }, [location.pathname]);

  // Handle click outside notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="hidden lg:flex items-center gap-6 flex-1 max-w-xl ml-6">
          <GlobalSearch />
        </div>

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
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/community"
                ? "text-primary" 
                : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
            )}
          >
            Community
          </Link>
        </nav>

        {/* Right side - Search, Account, etc */}
        <div className="hidden md:flex items-center space-x-4">
          <div ref={notificationsRef} className="relative">
            <button 
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg p-3 animate-fade-in z-50">
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
                            "p-3 border-l-2 rounded-r-md transition-colors cursor-pointer",
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
          
          <Link 
            to="/settings" 
            className={cn(
              "p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors",
              location.pathname.includes("/settings") && "text-primary bg-primary/10"
            )}
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </Link>
          
          <div className="h-6 w-px bg-border"></div>
          
          {/* Combined Sign In/Sign Up Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm" className="gap-1">
                <User className="h-4 w-4" />
                <span>Account</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/sign-in" className="w-full cursor-pointer">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/sign-up" className="w-full cursor-pointer">Create Account</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Search & Menu */}
        <div className="md:hidden flex items-center gap-2 flex-1 max-w-full justify-end">
          <div className={`${isMenuOpen ? 'hidden' : 'flex-1'}`}>
            <GlobalSearch />
          </div>
          
          <button 
            className="p-2 text-foreground/70 hover:text-foreground rounded-full flex-shrink-0" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/20 px-4 py-5 animate-fade-in">
          {/* Add search bar at the top of mobile menu when menu is open */}
          <div className="mb-4">
            <GlobalSearch />
          </div>
          
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
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                location.pathname === "/community"
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary/50"
              )}
            >
              Community
            </Link>
            <Link 
              to="/settings" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                location.pathname === "/settings"
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-secondary/50"
              )}
            >
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </div>
            </Link>

            <div className="h-px w-full bg-border/50 my-2"></div>

            <div className="flex items-center space-x-2">
              <Button 
                variant="secondary"
                size="sm"
                className="flex-1 gap-1"
                onClick={() => navigate("/sign-in")}
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
