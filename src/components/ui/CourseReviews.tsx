
import { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  date: string;
  title: string;
  content: string;
  helpfulCount: number;
  isHelpful?: boolean;
}

interface CourseReviewsProps {
  courseId: string;
  averageRating: number;
  totalReviews: number;
  ratingDistribution: number[];
  reviews: Review[];
}

export function CourseReviews({
  courseId,
  averageRating,
  totalReviews,
  ratingDistribution,
  reviews
}: CourseReviewsProps) {
  const [activeReviews, setActiveReviews] = useState<Review[]>(reviews);
  const [filter, setFilter] = useState<number | null>(null);
  const { toast } = useToast();
  
  // Calculate the percentage for each star rating
  const calculatePercentage = (count: number) => {
    return totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
  };
  
  // Filter reviews by rating
  const filterReviews = (rating: number | null) => {
    setFilter(rating);
    if (rating === null) {
      setActiveReviews(reviews);
    } else {
      setActiveReviews(reviews.filter(review => review.rating === rating));
    }
  };
  
  // Mark review as helpful
  const markHelpful = (reviewId: string) => {
    setActiveReviews(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { 
              ...review, 
              helpfulCount: review.isHelpful ? review.helpfulCount - 1 : review.helpfulCount + 1,
              isHelpful: !review.isHelpful 
            } 
          : review
      )
    );
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your response helps improve our community reviews.",
    });
  };
  
  // Report review
  const reportReview = (reviewId: string) => {
    toast({
      title: "Review reported",
      description: "Our team will review this feedback shortly.",
    });
  };
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-display font-medium">Student Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rating summary */}
        <div className="md:col-span-1 bg-card border border-border rounded-lg p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(averageRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Based on {totalReviews} reviews
            </div>
          </div>
          
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                onClick={() => filterReviews(filter === star ? null : star)}
                className={`w-full flex items-center text-sm ${
                  filter === star ? 'font-medium' : ''
                }`}
              >
                <div className="flex items-center w-16">
                  {star} 
                  <Star className="h-3 w-3 ml-1 text-yellow-400 fill-yellow-400" />
                </div>
                <Progress 
                  value={calculatePercentage(ratingDistribution[5 - star])} 
                  className="h-2 flex-1 mx-2" 
                />
                <div className="w-10 text-right">
                  {calculatePercentage(ratingDistribution[5 - star])}%
                </div>
              </button>
            ))}
          </div>
          
          {filter !== null && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-4 w-full"
              onClick={() => filterReviews(null)}
            >
              Clear filter
            </Button>
          )}
        </div>
        
        {/* Reviews list */}
        <div className="md:col-span-2">
          {activeReviews.length > 0 ? (
            <div className="space-y-6">
              {activeReviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6 last:border-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={review.user.avatar} alt={review.user.name} />
                        <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{review.user.name}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="mx-2">•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mt-3">{review.title}</h4>
                  <p className="text-muted-foreground mt-1">{review.content}</p>
                  
                  <div className="flex items-center mt-4 text-sm">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={review.isHelpful ? "text-primary" : ""}
                      onClick={() => markHelpful(review.id)}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpfulCount})
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => reportReview(review.id)}
                    >
                      <Flag className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border border-dashed border-border rounded-lg">
              <MessageSquare className="h-10 w-10 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No reviews found</h3>
              <p className="mt-1 text-muted-foreground">
                {filter !== null
                  ? `There are no ${filter}-star reviews for this course.`
                  : 'This course has no reviews yet.'}
              </p>
              {filter !== null && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => filterReviews(null)}
                >
                  View all reviews
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
