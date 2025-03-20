
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircleHeart, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { sampleCourses } from '@/lib/data';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  courses?: any[];
}

export function AIshaChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am AIsha, your learning assistant. How can I help you today? I can suggest courses based on your interests, skill level, or career goals.',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const analyzeCourseQuery = (query: string) => {
    const queryLower = query.toLowerCase();
    
    // Extract potential keywords
    const keywords = {
      level: ['beginner', 'intermediate', 'advanced', 'expert', 'start', 'basic', 'easy'],
      interests: [
        'programming', 'coding', 'development', 'web', 'mobile', 'app', 
        'data', 'science', 'machine learning', 'ai', 'artificial intelligence',
        'design', 'ux', 'ui', 'business', 'marketing', 'finance',
        'cloud', 'security', 'cyber', 'excel', 'python', 'javascript', 'react',
        'blockchain', 'crypto', 'cryptocurrency'
      ],
      price: ['free', 'cheap', 'affordable', 'expensive', 'premium'],
      duration: ['short', 'quick', 'long', 'comprehensive', 'brief', 'complete']
    };
    
    let detectedLevel = '';
    keywords.level.forEach(level => {
      if (queryLower.includes(level)) {
        if (level === 'start' || level === 'basic' || level === 'easy') {
          detectedLevel = 'Beginner';
        } else if (level === 'expert') {
          detectedLevel = 'Advanced';
        } else {
          detectedLevel = level.charAt(0).toUpperCase() + level.slice(1);
        }
      }
    });
    
    const detectedInterests: string[] = [];
    keywords.interests.forEach(interest => {
      if (queryLower.includes(interest.toLowerCase())) {
        detectedInterests.push(interest);
      }
    });
    
    const isFree = queryLower.includes('free');
    
    // Filter courses based on detected criteria
    let filteredCourses = [...sampleCourses];
    
    if (detectedLevel) {
      filteredCourses = filteredCourses.filter(course => 
        course.level === detectedLevel
      );
    }
    
    if (detectedInterests.length > 0) {
      filteredCourses = filteredCourses.filter(course => {
        return detectedInterests.some(interest => 
          course.title.toLowerCase().includes(interest.toLowerCase()) ||
          course.description.toLowerCase().includes(interest.toLowerCase()) ||
          course.category.toLowerCase().includes(interest.toLowerCase()) ||
          course.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
        );
      });
    }
    
    if (isFree) {
      filteredCourses = filteredCourses.filter(course => course.isFree);
    }
    
    // Sort by rating for better recommendations
    filteredCourses.sort((a, b) => b.rating - a.rating);
    
    // Return top 3 results
    return filteredCourses.slice(0, 3);
  };

  const generateResponse = (userMessage: string, recommendedCourses: any[]) => {
    const greetings = ['hi', 'hello', 'hey', 'greetings'];
    const aboutKeywords = ['about you', 'who are you', 'what can you do'];
    const helpKeywords = ['help', 'assist', 'support'];
    const thankKeywords = ['thank', 'thanks'];
    
    const messageLower = userMessage.toLowerCase();
    
    // Check if it's a greeting
    if (greetings.some(greeting => messageLower.includes(greeting))) {
      return "Hello! I'm AIsha, your learning assistant. I can help you find the right courses based on your interests and goals. What would you like to learn today?";
    }
    
    // Check if asking about the assistant
    if (aboutKeywords.some(keyword => messageLower.includes(keyword))) {
      return "I'm AIsha, your personalized learning assistant for Siksha. I can recommend courses based on your interests, skill level, and career goals. I can also answer questions about our platform and help you navigate your learning journey.";
    }
    
    // Check if thanking
    if (thankKeywords.some(keyword => messageLower.includes(keyword))) {
      return "You're welcome! I'm always here to help with your learning journey. Let me know if you need anything else!";
    }
    
    // Check if asking for general help
    if (helpKeywords.some(keyword => messageLower.includes(keyword)) && !messageLower.includes('course')) {
      return "I can help you find courses, provide information about our platform, or guide you through your learning journey. What specific area would you like assistance with?";
    }
    
    // Course recommendations
    if (recommendedCourses.length > 0) {
      let response = "Based on what you're looking for, here are some courses that might interest you:";
      
      return response;
    }
    
    // Default responses if no other conditions are met
    const defaultResponses = [
      "I'd be happy to help you find the right course. Could you tell me more about what topics you're interested in and your skill level?",
      "I can suggest some popular courses in our catalog. Are you interested in any specific area like programming, data science, or business?",
      "Let me help you find the perfect learning path. What are your learning goals or career aspirations?",
      "I'm here to guide your educational journey. What skills are you looking to develop or improve?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Analyze the message and get recommended courses
    const recommendedCourses = analyzeCourseQuery(inputValue);
    
    // Generate bot response
    const botResponseText = generateResponse(inputValue, recommendedCourses);
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date(),
        courses: recommendedCourses.length > 0 ? recommendedCourses : undefined
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground'
              }`}
            >
              <div>{message.text}</div>
              
              {message.courses && message.courses.length > 0 && (
                <div className="mt-3 space-y-2">
                  {message.courses.map(course => (
                    <Link
                      key={course.id}
                      to={`/course/${course.id}`}
                      className="block p-2 bg-background/30 hover:bg-background/50 rounded-md transition-colors"
                    >
                      <div className="font-medium">{course.title}</div>
                      <div className="text-sm opacity-80 flex items-center justify-between">
                        <span>{course.instructor}</span>
                        <span>
                          {course.isFree ? 'Free' : `₹${course.inrPrice?.toLocaleString() || (course.price * 80).toLocaleString()}`}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage} className="bg-primary hover:bg-secondary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
