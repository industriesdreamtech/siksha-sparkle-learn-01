
import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { App as CapacitorApp } from '@capacitor/core';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  // Apply any theme settings on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    if (isMobile) {
      // Add a viewport meta tag with content-fit=cover for better mobile display
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1');
      
      // Add class to body for mobile-specific styling
      document.body.classList.add('mobile-device');
      
      // Handle hardware back button for Android
      const setupBackButtonHandler = async () => {
        try {
          // Only run this in Capacitor environment
          if ('Capacitor' in window) {
            CapacitorApp.addListener('backButton', ({ canGoBack }) => {
              if (canGoBack) {
                window.history.back();
              } else {
                // Ask user if they want to exit the app
                if (confirm('Are you sure you want to exit the app?')) {
                  CapacitorApp.exitApp();
                }
              }
            });
          }
        } catch (error) {
          console.log('Not running in Capacitor environment', error);
        }
      };
      
      setupBackButtonHandler();
      
      // Fix iOS keyboard issues by adding listener for focus events
      const fixIOSKeyboard = () => {
        document.body.classList.add('keyboard-open');
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 300);
      };
      
      const resetIOSKeyboard = () => {
        document.body.classList.remove('keyboard-open');
      };
      
      // Apply to inputs, select fields, and textareas
      const formFields = document.querySelectorAll('input, select, textarea');
      formFields.forEach(field => {
        field.addEventListener('focus', fixIOSKeyboard);
        field.addEventListener('blur', resetIOSKeyboard);
      });
      
      return () => {
        formFields.forEach(field => {
          field.removeEventListener('focus', fixIOSKeyboard);
          field.removeEventListener('blur', resetIOSKeyboard);
        });
        
        // Clean up Capacitor listeners
        if ('Capacitor' in window) {
          CapacitorApp.removeAllListeners();
        }
      };
    } else {
      document.body.classList.remove('mobile-device');
    }
    
    setMounted(true);
    
    // Simulate loading to ensure content renders properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Don't render until client-side to prevent theme flash
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse h-8 w-8 rounded-full bg-primary/20"></div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen bg-background ${isMobile ? 'mobile-layout' : ''}`}>
      <Navbar />
      <main className={`flex-1 pt-16 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
