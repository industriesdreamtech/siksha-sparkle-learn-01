
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/data';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  const [scrollX, setScrollX] = useState(0);
  
  // Function to scroll the categories left or right
  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 200;
    if (direction === 'left') {
      setScrollX(Math.min(scrollX + scrollAmount, 0));
    } else {
      setScrollX(scrollX - scrollAmount);
    }
  };
  
  return (
    <div className="relative w-full">
      {/* Left shadow/scroll button */}
      {scrollX < 0 && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
      )}
      
      {/* Categories wrapper */}
      <div className="overflow-hidden relative">
        <div 
          className="flex space-x-2 py-2 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {/* All category option */}
          <button
            onClick={() => onSelectCategory('All')}
            className={cn(
              "inline-flex whitespace-nowrap items-center px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === 'All'
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary/60 text-foreground hover:bg-secondary"
            )}
          >
            All Courses
          </button>
          
          {/* Category options */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "inline-flex whitespace-nowrap items-center px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/60 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Right shadow/scroll button */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
}
