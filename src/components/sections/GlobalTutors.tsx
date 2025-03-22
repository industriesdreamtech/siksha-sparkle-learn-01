
import { useMemo } from "react";
import { CoursesSlider } from "@/components/ui/CoursesSlider";
import { globalTutors } from "@/lib/tutors";
import { Globe } from "lucide-react";

export function GlobalTutors() {
  const regions = useMemo(() => {
    // Group tutors by region
    const regionMap = globalTutors.reduce((acc, tutor) => {
      const region = tutor.region || "Other";
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(tutor);
      return acc;
    }, {} as Record<string, typeof globalTutors>);
    
    return Object.entries(regionMap).map(([region, tutors]) => ({
      region,
      tutors,
      count: tutors.length
    }));
  }, []);
  
  const languageCount = useMemo(() => {
    const languages = new Set();
    globalTutors.forEach(tutor => {
      if (tutor.languages) {
        tutor.languages.forEach(lang => languages.add(lang));
      }
    });
    return languages.size;
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-2">
            <Globe className="h-3.5 w-3.5 mr-1.5" />
            <span>Global Learning Network</span>
          </div>
          <h2 className="font-display text-4xl font-medium mb-4">Learn from {globalTutors.length}+ Expert Tutors Worldwide</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Connect with professional tutors from around the globe who teach in {languageCount} different languages. 
            Find the perfect instructor for your learning style, schedule, and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {regions.slice(0, 3).map(({ region, count }) => (
            <div key={region} className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-2xl font-medium mb-2">{region}</h3>
              <p className="text-muted-foreground">
                {count} expert {count === 1 ? 'tutor' : 'tutors'} available
              </p>
            </div>
          ))}
        </div>
        
        <CoursesSlider
          title="Featured Global Tutors"
          subtitle="Meet our worldwide network of expert instructors ready to help you master new skills"
          instructors={globalTutors}
          variant="tutors"
          viewAllLink="/tutors"
          badgeText="100+ Languages Available"
          badgeIcon={<Globe className="h-3.5 w-3.5" />}
        />
      </div>
    </section>
  );
}
