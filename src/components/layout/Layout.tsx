
import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Apply any theme settings on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
    
    // Simulate loading to ensure content renders properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Don't render until client-side to prevent theme flash
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse h-8 w-8 rounded-full bg-primary/20"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background layout">
      <Navbar />
      <main className={`flex-1 pt-16 md:pt-20 ${isLoading ? 'opacity-0' : 'animate-fade-in opacity-100'}`} style={{ transition: 'opacity 0.3s ease-in-out' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
