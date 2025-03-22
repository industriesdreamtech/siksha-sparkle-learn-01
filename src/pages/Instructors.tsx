import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Users, Star, ExternalLink, Twitter, Linkedin, Github, Globe, IndianRupee, Map } from 'lucide-react';
import { instructors } from '@/lib/data';
import { globalTutors } from '@/lib/tutors';
import { TutorCard } from '@/components/ui/TutorCard';
import { GlobalTutors } from '@/components/sections/GlobalTutors';

const Instructors = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [filteredInstructors, setFilteredInstructors] = useState([...instructors, ...globalTutors.slice(0, 15)]);

  // Get unique languages from tutors
  const languages = [{ value: 'all', label: 'All Languages' }];
  const languageSet = new Set<string>();
  
  globalTutors.forEach(tutor => {
    if (tutor.languages) {
      tutor.languages.forEach(lang => languageSet.add(lang));
    }
  });
  
  // Convert set to array of objects for the filter
  Array.from(languageSet).sort().forEach(lang => {
    languages.push({ value: lang.toLowerCase(), label: lang });
  });

  // List of regions based on tutors
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'africa', label: 'Africa' },
    { value: 'south-america', label: 'South America' },
    { value: 'oceania', label: 'Oceania' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get a mix of featured tutors and original instructors
    let filtered = [...instructors, ...globalTutors.slice(0, 15)];
    
    // Apply region filter
    if (selectedCountry !== 'all') {
      const regionName = regions.find(r => r.value === selectedCountry)?.label || '';
      filtered = filtered.filter(instructor => {
        if ('region' in instructor) {
          return instructor.region === regionName;
        }
        // Handle original instructors
        if (selectedCountry === 'asia' && 
            instructor.education.some(edu => 
              edu.institution.includes('IIT') || 
              edu.institution.includes('NIT') || 
              edu.institution.includes('BITS') ||
              edu.institution.includes('VIT') ||
              edu.institution.includes('NID')
            )) {
          return true;
        }
        if (selectedCountry === 'north-america' && 
            instructor.education.some(edu => 
              edu.institution.includes('Stanford') || 
              edu.institution.includes('MIT') || 
              edu.institution.includes('Berkeley') ||
              edu.institution.includes('Georgia') ||
              edu.institution.includes('Washington') ||
              edu.institution.includes('Carnegie') ||
              edu.institution.includes('Purdue')
            )) {
          return true;
        }
        return false;
      });
    }
    
    // Apply language filter
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(instructor => {
        if ('languages' in instructor && instructor.languages) {
          return instructor.languages.some(lang => 
            lang.toLowerCase() === selectedLanguage
          );
        }
        return false;
      });
    }
    
    setFilteredInstructors(filtered);
  }, [selectedCountry, selectedLanguage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-2">
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            <span>100+ Global Tutors</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-semibold mb-4">Meet Our Expert Instructors</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Learn from industry professionals and academic experts who are passionate about sharing their knowledge and experience in over 30 languages.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <div className="flex flex-wrap justify-center gap-2 mb-2 w-full md:mb-0 md:w-auto">
              <span className="text-sm text-muted-foreground self-center mr-1">Region:</span>
              {regions.map((region) => (
                <Badge
                  key={region.value}
                  variant={selectedCountry === region.value ? "default" : "outline"}
                  className="px-3 py-1.5 text-sm cursor-pointer"
                  onClick={() => setSelectedCountry(region.value)}
                >
                  {region.value === 'asia' && <Map className="mr-1 h-3 w-3" />}
                  {region.label}
                </Badge>
              ))}
            </div>
            
            {languages.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-3 w-full">
                <span className="text-sm text-muted-foreground self-center mr-1">Language:</span>
                {languages.slice(0, 8).map((language) => (
                  <Badge
                    key={language.value}
                    variant={selectedLanguage === language.value ? "default" : "outline"}
                    className="px-3 py-1.5 text-sm cursor-pointer"
                    onClick={() => setSelectedLanguage(language.value)}
                  >
                    {language.value !== 'all' && <Globe className="mr-1 h-3 w-3" />}
                    {language.label}
                  </Badge>
                ))}
                {languages.length > 8 && (
                  <Badge
                    variant="outline"
                    className="px-3 py-1.5 text-sm cursor-pointer"
                    onClick={() => {/* Open dropdown with all languages */}}
                  >
                    +{languages.length - 8} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Instructors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredInstructors.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium mb-2">No instructors found</h3>
              <p className="text-muted-foreground">Try selecting different filter options</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredInstructors.map((instructor) => (
                <TutorCard key={instructor.name} instructor={instructor} />
              ))}
            </div>
          )}
          
          {filteredInstructors.length > 0 && (
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More Instructors
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Global Tutors Section */}
      <GlobalTutors />

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
