
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Bell, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
  }, [location.pathname]);

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
            className="px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
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
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <div className="h-6 w-px bg-border"></div>
          <Button variant="secondary" size="sm" className="px-4">Sign In</Button>
          <Button size="sm" className="px-4">Sign Up</Button>
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
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary/50"
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
              <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-secondary/80 text-foreground">
                Sign In
              </button>
              <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
