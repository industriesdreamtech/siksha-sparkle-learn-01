
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-medium mb-6 animate-fade-in">
          About Siksha Learning Platform
        </h1>
        
        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Siksha is a premier online learning platform focused on delivering high-quality courses 
                in technology, business, and personal development.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">Our Mission</h2>
              <p className="mb-4">
                To democratize education and make quality learning accessible to everyone, everywhere.
                We believe that education is a fundamental right and that everyone should have access
                to the best instructors and courses regardless of their location or background.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2023, Siksha started with a simple idea: create a platform where learners
                can access high-quality courses from industry experts without the traditional barriers
                of education. What began as a small collection of tech courses has grown into a
                comprehensive learning ecosystem with thousands of students worldwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">500+</h3>
                  <p className="text-muted-foreground">Expert-led courses</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">50,000+</h3>
                  <p className="text-muted-foreground">Active learners</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">97%</h3>
                  <p className="text-muted-foreground">Student satisfaction</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button onClick={() => navigate("/courses")} size="lg">
                  Explore Our Courses
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="animate-fade-in">
            <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
                <AccordionContent>
                  Enrolling in a course is simple. Browse our course catalog, select the course you're interested in, 
                  and click the "Enroll" button. If it's a paid course, you'll be directed to the payment page. 
                  For free courses, you'll get immediate access after enrollment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept major credit/debit cards (Visa, MasterCard, American Express), PayPal, and UPI payments for our Indian students. 
                  All transactions are secured with industry-standard encryption.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I download course content for offline viewing?</AccordionTrigger>
                <AccordionContent>
                  Yes, most courses allow you to download video lessons and course materials for offline viewing through our mobile app. 
                  However, this feature may vary by course, as some instructors may disable downloading for their content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do courses have an expiration date?</AccordionTrigger>
                <AccordionContent>
                  No, once you enroll in a course, you have lifetime access to it. You can revisit the materials 
                  whenever you need a refresher, even years after completing the course.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there certificates of completion?</AccordionTrigger>
                <AccordionContent>
                  Yes, upon successfully completing a course, you'll receive a certificate of completion that you 
                  can share on your LinkedIn profile or include in your resume. Some specialized courses also offer 
                  professional certifications recognized by industry partners.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>What if I'm not satisfied with a course?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, 
                  you can request a refund within 30 days of enrollment, provided you haven't completed more than 30% of the course.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I contact instructors?</AccordionTrigger>
                <AccordionContent>
                  Each course has a discussion forum where you can post questions and interact with instructors. 
                  For direct communication, you can use the messaging feature on the instructor's profile page. 
                  Instructors typically respond within 48 hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Are there any prerequisites for courses?</AccordionTrigger>
                <AccordionContent>
                  Prerequisites vary by course. Each course page clearly lists any required knowledge or skills 
                  you should have before enrolling. We also offer beginner-friendly courses that don't require any prior experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-10 text-center">
              <p className="mb-4 text-muted-foreground">Can't find the answer you're looking for?</p>
              <Button variant="outline" onClick={() => navigate("/contact")}>
                Contact Support
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials" className="animate-fade-in">
            <h2 className="text-2xl font-medium mb-6">What Our Students Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard 
                name="Priya Sharma"
                role="Software Developer"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                rating={5}
                course="Advanced React Patterns"
                text="The course content was comprehensive and well-structured. I was able to immediately apply what I learned to my job. The instructor's expertise and teaching style made complex concepts easy to understand."
              />
              
              <TestimonialCard 
                name="Raj Patel"
                role="Data Scientist"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                rating={5}
                course="Machine Learning Fundamentals"
                text="As a beginner in data science, I found this course incredibly helpful. The practical exercises and projects gave me hands-on experience, and the community support was exceptional."
              />
              
              <TestimonialCard 
                name="Ananya Desai"
                role="UX Designer"
                image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300"
                rating={4}
                course="UI/UX Design Masterclass"
                text="This course transformed my design approach. The instructor shared invaluable industry insights and practical techniques that I now use daily in my work."
              />
              
              <TestimonialCard 
                name="Vikram Singh"
                role="Product Manager"
                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300"
                rating={5}
                course="Product Management Essentials"
                text="The real-world case studies and interactive workshops were incredibly valuable. I gained confidence in my product decisions and earned a promotion within three months of completing the course."
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button onClick={() => navigate("/courses")} size="lg">
                Find Your Perfect Course
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  name, 
  role, 
  image, 
  rating, 
  course, 
  text 
}: { 
  name: string; 
  role: string; 
  image: string; 
  rating: number; 
  course: string; 
  text: string; 
}) => {
  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium">for {course}</span>
      </div>
      
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};

export default About;
