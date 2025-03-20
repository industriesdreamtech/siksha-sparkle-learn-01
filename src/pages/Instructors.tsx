
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Users, Star, ExternalLink, Twitter, Linkedin, Github, Globe, IndianRupee } from 'lucide-react';
import { instructors } from '@/lib/data';

const Instructors = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [filteredInstructors, setFilteredInstructors] = useState(instructors);

  // List of countries based on instructors' educational background
  const countries = [
    { value: 'all', label: 'All Countries' },
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'United States' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedCountry === 'all') {
      setFilteredInstructors(instructors);
    } else if (selectedCountry === 'india') {
      const indianInstructors = instructors.filter(instructor => 
        instructor.education.some(edu => 
          edu.institution.includes('IIT') || 
          edu.institution.includes('NIT') || 
          edu.institution.includes('BITS') ||
          edu.institution.includes('VIT') ||
          edu.institution.includes('NID')
        )
      );
      setFilteredInstructors(indianInstructors);
    } else if (selectedCountry === 'usa') {
      const usaInstructors = instructors.filter(instructor => 
        instructor.education.some(edu => 
          edu.institution.includes('Stanford') || 
          edu.institution.includes('MIT') || 
          edu.institution.includes('Berkeley') ||
          edu.institution.includes('Georgia') ||
          edu.institution.includes('Washington') ||
          edu.institution.includes('Carnegie') ||
          edu.institution.includes('Purdue')
        )
      );
      setFilteredInstructors(usaInstructors);
    }
  }, [selectedCountry]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-semibold mb-4">Meet Our Expert Instructors</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Learn from industry professionals and academic experts who are passionate about sharing their knowledge and experience.
          </p>

          {/* Country Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <Badge
                key={country.value}
                variant={selectedCountry === country.value ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer"
                onClick={() => setSelectedCountry(country.value)}
              >
                {country.value === 'india' && <IndianRupee className="mr-1 h-3 w-3" />}
                {country.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredInstructors.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium mb-2">No instructors found</h3>
              <p className="text-muted-foreground">Try selecting a different country filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInstructors.map((instructor) => (
                <Card key={instructor.name} className="overflow-hidden transition-all hover:shadow-md group">
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-1 bg-background rounded-full">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-background">
                        <img 
                          src={instructor.avatar} 
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="pt-14 text-center">
                    <h3 className="font-display text-xl font-medium mb-1">{instructor.name}</h3>
                    <p className="text-muted-foreground mb-3">{instructor.title}</p>
                    
                    {/* Check if instructor is from India based on education */}
                    {instructor.education.some(edu => 
                      edu.institution.includes('IIT') || 
                      edu.institution.includes('NIT') || 
                      edu.institution.includes('BITS') ||
                      edu.institution.includes('VIT') ||
                      edu.institution.includes('NID')
                    ) && (
                      <Badge variant="outline" className="mb-3">
                        <IndianRupee className="mr-1 h-3 w-3" />
                        Indian Instructor
                      </Badge>
                    )}
                    
                    <div className="flex justify-center space-x-3 mb-4">
                      {instructor.social.twitter && (
                        <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      
                      {instructor.social.linkedin && (
                        <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      
                      {instructor.social.github && (
                        <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      
                      {instructor.social.website && (
                        <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-muted-foreground">
                      <div className="flex flex-col items-center">
                        <GraduationCap className="h-4 w-4 mb-1 text-primary" />
                        <span>{instructor.totalCourses} Courses</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Users className="h-4 w-4 mb-1 text-primary" />
                        <span>{(instructor.totalStudents / 1000).toFixed(1)}k Students</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Star className="h-4 w-4 mb-1 fill-yellow-400 text-yellow-400" />
                        <span>{instructor.rating.toFixed(1)} Rating</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full group">
                      <Link to={`/instructor/${encodeURIComponent(instructor.name)}`}>
                        <span>View Profile</span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join as Instructor CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl border border-border shadow-lg p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">Share Your Expertise with the World</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community of expert instructors and help students master new skills. Create engaging courses and reach thousands of learners.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline">Learn More</Button>
              <Button size="lg">Apply as Instructor</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Instructors;
