
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/30 pt-16 pb-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2 font-display text-xl font-medium">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>Siksha</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Elevate your skills with premium courses from industry experts. Learn at your own pace and transform your career.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-medium mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-medium mb-5">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses?category=programming" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/courses?category=data-science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/courses?category=ai-machine-learning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/courses?category=web-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=cybersecurity" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-medium mb-5">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest courses and educational content.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 text-sm rounded-l-md bg-background border border-r-0 border-input focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="px-4 rounded-r-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Siksha Learning. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
