
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { 
  Search, 
  BookOpen,
  User,
  School,
  X,
  ArrowRight,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleCourses } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

type SearchResult = {
  id: string;
  title: string;
  type: "course" | "instructor" | "university";
  url: string;
  icon: React.ReactNode;
  subtitle?: string;
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Mock search function - in a real app, this would query your backend
  const performSearch = (query: string) => {
    setIsSearching(true);
    
    // Simulate API delay
    setTimeout(() => {
      if (query.trim() === "") {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }
      
      const normalizedQuery = query.toLowerCase();
      
      // Search in courses
      const courseResults = sampleCourses
        .filter(course => 
          course.title.toLowerCase().includes(normalizedQuery) || 
          course.description.toLowerCase().includes(normalizedQuery) ||
          course.instructor.toLowerCase().includes(normalizedQuery) ||
          course.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
        )
        .slice(0, 3)
        .map(course => ({
          id: course.id,
          title: course.title,
          type: "course" as const,
          url: `/course/${course.id}`,
          icon: <BookOpen className="h-4 w-4" />,
          subtitle: `By ${course.instructor} • ${course.category}`
        }));
      
      // Mock instructors search
      const instructorResults = sampleCourses
        .filter(course => course.instructor.toLowerCase().includes(normalizedQuery))
        .slice(0, 2)
        .map(course => ({
          id: `instructor-${course.id}`,
          title: course.instructor,
          type: "instructor" as const,
          url: `/instructor/${encodeURIComponent(course.instructor)}`,
          icon: <User className="h-4 w-4" />,
          subtitle: `${Math.floor(Math.random() * 10) + 1} courses`
        }))
        .filter((instructor, index, self) => 
          // Remove duplicates by title
          index === self.findIndex(i => i.title === instructor.title)
        );
      
      // Mock universities (just for demo purposes)
      const universityResults = [
        { name: "Harvard University", courses: 42 },
        { name: "MIT", courses: 38 },
        { name: "Stanford University", courses: 35 },
        { name: "University of California", courses: 28 },
        { name: "Oxford University", courses: 31 }
      ]
        .filter(uni => uni.name.toLowerCase().includes(normalizedQuery))
        .slice(0, 2)
        .map(uni => ({
          id: `uni-${uni.name}`,
          title: uni.name,
          type: "university" as const,
          url: `/courses?university=${encodeURIComponent(uni.name)}`,
          icon: <School className="h-4 w-4" />,
          subtitle: `${uni.courses} courses`
        }));
      
      setSearchResults([...courseResults, ...instructorResults, ...universityResults]);
      setIsSearching(false);
    }, 300);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    navigate(result.url);
  };
  
  const handleSearchClose = () => {
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <Button
        variant="outline"
        className={`relative ${isMobile ? 'w-full h-10' : 'w-full md:w-[300px] lg:w-[400px]'} justify-start text-sm text-muted-foreground px-3 gap-2`}
        onClick={() => setOpen(true)}
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left truncate">
          {isMobile ? "Search..." : "Search courses, instructors, universities..."}
        </span>
        {!isMobile && (
          <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen} className="mobile-search-dialog">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            ref={inputRef}
            placeholder={isMobile ? "Search..." : "Search anything..."}
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full flex items-center justify-center"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear</span>
            </Button>
          )}
        </div>
        <CommandList className={isMobile ? "mobile-command-list" : ""}>
          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary/70" />
            </div>
          ) : searchQuery === "" ? (
            <div className="py-6 text-center text-sm">
              Start typing to search...
            </div>
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              
              {searchResults.filter(r => r.type === "course").length > 0 && (
                <CommandGroup heading="Courses">
                  {searchResults
                    .filter(result => result.type === "course")
                    .map(result => (
                      <CommandItem
                        key={result.id}
                        value={result.id}
                        onSelect={() => handleSelect(result)}
                        className={isMobile ? "p-3" : ""}
                      >
                        <div className="flex items-center w-full">
                          <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            {result.icon}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="truncate font-medium">{result.title}</p>
                            {result.subtitle && (
                              <p className="truncate text-xs text-muted-foreground">
                                {result.subtitle}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              )}
              
              {searchResults.filter(r => r.type === "instructor").length > 0 && (
                <CommandGroup heading="Instructors">
                  {searchResults
                    .filter(result => result.type === "instructor")
                    .map(result => (
                      <CommandItem
                        key={result.id}
                        value={result.id}
                        onSelect={() => handleSelect(result)}
                        className={isMobile ? "p-3" : ""}
                      >
                        <div className="flex items-center w-full">
                          <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            {result.icon}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="truncate font-medium">{result.title}</p>
                            {result.subtitle && (
                              <p className="truncate text-xs text-muted-foreground">
                                {result.subtitle}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              )}
              
              {searchResults.filter(r => r.type === "university").length > 0 && (
                <CommandGroup heading="Universities">
                  {searchResults
                    .filter(result => result.type === "university")
                    .map(result => (
                      <CommandItem
                        key={result.id}
                        value={result.id}
                        onSelect={() => handleSelect(result)}
                        className={isMobile ? "p-3" : ""}
                      >
                        <div className="flex items-center w-full">
                          <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            {result.icon}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="truncate font-medium">{result.title}</p>
                            {result.subtitle && (
                              <p className="truncate text-xs text-muted-foreground">
                                {result.subtitle}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              )}
              
              {isMobile ? (
                <div className="py-3 px-4 text-center border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full" 
                    onClick={handleSearchClose}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <div className="py-2 px-2 text-xs text-center text-muted-foreground border-t">
                  <p>Press <kbd className="px-1 rounded border bg-muted">Enter</kbd> to view all results or <kbd className="px-1 rounded border bg-muted">Esc</kbd> to close</p>
                </div>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
