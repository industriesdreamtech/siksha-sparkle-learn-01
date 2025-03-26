
import { Shield, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
}

interface InstructorCertificationProps {
  name: string;
  verifiedStatus: 'verified' | 'expert' | 'new';
  certifications: Certification[];
  expertise: string[];
}

export function InstructorCertification({
  name,
  verifiedStatus,
  certifications,
  expertise
}: InstructorCertificationProps) {
  // Get status badge details based on verified status
  const getStatusBadge = () => {
    switch (verifiedStatus) {
      case 'verified':
        return {
          icon: <Shield className="h-5 w-5 text-blue-500" />,
          label: 'Verified Instructor',
          description: 'This instructor has been verified by our team.',
          color: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'expert':
        return {
          icon: <Award className="h-5 w-5 text-amber-500" />,
          label: 'Industry Expert',
          description: 'Recognized expert with extensive professional experience.',
          color: 'bg-amber-50 text-amber-700 border-amber-200'
        };
      case 'new':
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          label: 'New Instructor',
          description: 'New to our platform but brings valuable knowledge.',
          color: 'bg-green-50 text-green-700 border-green-200'
        };
      default:
        return {
          icon: <Shield className="h-5 w-5 text-gray-500" />,
          label: 'Instructor',
          description: 'Teaching on our platform.',
          color: 'bg-gray-50 text-gray-700 border-gray-200'
        };
    }
  };
  
  const badge = getStatusBadge();
  
  return (
    <div className="space-y-6">
      <div className={`inline-flex items-center px-3 py-1 rounded-full border ${badge.color}`}>
        {badge.icon}
        <span className="ml-2 text-sm font-medium">{badge.label}</span>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="ml-1 cursor-help">ⓘ</span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{badge.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Certifications</CardTitle>
            <CardDescription>
              Professional qualifications & certifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            {certifications.length > 0 ? (
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.id} className="border-b border-border pb-3 last:border-0">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </div>
                    
                    {cert.verificationUrl && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 h-auto mt-1"
                        asChild
                      >
                        <a 
                          href={cert.verificationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Verify <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-sm">
                No certifications listed for this instructor.
              </p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Areas of Expertise</CardTitle>
            <CardDescription>
              Specialized skills & knowledge areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            {expertise.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/60 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">
                No specific areas of expertise listed.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
