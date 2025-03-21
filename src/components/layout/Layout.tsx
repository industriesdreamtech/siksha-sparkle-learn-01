
import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  
  // Apply any theme settings on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  // Don't render until client-side to prevent theme flash
  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-20 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
