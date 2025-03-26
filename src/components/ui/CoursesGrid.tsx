
import { useState } from 'react';
import { Course } from '@/lib/data';
import { CourseCard } from '@/components/ui/CourseCard';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from '@/components/ui/pagination';
import { useIsMobile } from '@/hooks/use-mobile';

interface CoursesGridProps {
  courses: Course[];
  title?: string;
  itemsPerPage?: number;
  showProgress?: boolean;
}

export function CoursesGrid({ 
  courses, 
  title,
  itemsPerPage = 12,
  showProgress = false
}: CoursesGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  
  // Calculate pagination
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);
  
  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Generate page numbers to display
  const renderPageNumbers = () => {
    const pages = [];
    // Adjust max displayed pages based on screen size
    const maxDisplayedPages = isMobile ? 3 : 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);
    
    // Adjust start page if end page is max
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxDisplayedPages + 1);
    }
    
    // Add first page if not visible
    if (startPage > 1) {
      pages.push(
        <PaginationItem key="first">
          <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
        </PaginationItem>
      );
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Add last page if not visible
    if (endPage < totalPages) {
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      pages.push(
        <PaginationItem key="last">
          <PaginationLink onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pages;
  };
  
  // Check if no courses are found
  if (courses.length === 0) {
    return (
      <div className="w-full text-center py-12">
        <h3 className="text-xl font-medium mb-4">No courses found</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your search criteria or explore our categories.</p>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-display font-medium mb-6">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {currentCourses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            showProgress={showProgress}
            progress={showProgress ? Math.floor(Math.random() * 100) : undefined} // Demo purpose only
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {!isMobile && renderPageNumbers()}
            
            {isMobile && (
              <PaginationItem>
                <span className="px-2">
                  {currentPage} / {totalPages}
                </span>
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      
      <div className="text-center text-sm text-muted-foreground mt-4">
        Showing {startIndex + 1}-{Math.min(endIndex, courses.length)} of {courses.length} courses
      </div>
    </div>
  );
}

// Define the PaginationEllipsis component
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <span>...</span>
    <span className="sr-only">More pages</span>
  </span>
);
