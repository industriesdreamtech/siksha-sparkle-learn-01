
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MessageSquare, ThumbsUp, ThumbsDown, Share2, BookmarkPlus, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock data for community posts
const MOCK_POSTS = [
  {
    id: 1,
    title: 'How to master React.js in 30 days?',
    content: 'I am a beginner and want to learn React.js completely in 30 days. Any suggestions on resources or learning path?',
    author: {
      name: 'Dev_learner',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=dev1',
    },
    upvotes: 42,
    comments: 15,
    timePosted: '2 hours ago',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: 2,
    title: 'What are the best resources for machine learning?',
    content: 'I want to dive into machine learning but there are so many resources out there. Which ones do you recommend for beginners?',
    author: {
      name: 'AIEnthusiast',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=ai2',
    },
    upvotes: 28,
    comments: 23,
    timePosted: '5 hours ago',
    tags: ['Machine Learning', 'AI', 'Data Science'],
  },
  {
    id: 3,
    title: 'Looking for study partners for the AWS certification',
    content: 'I am preparing for the AWS Solutions Architect certification and looking for study partners. Anyone interested?',
    author: {
      name: 'CloudNinja',
      avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=cloud3',
    },
    upvotes: 15,
    comments: 8,
    timePosted: '1 day ago',
    tags: ['AWS', 'Cloud', 'Certification'],
  },
];

export default function Community() {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        content: newPostContent,
        author: {
          name: 'Current_User',
          avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=user',
        },
        upvotes: 0,
        comments: 0,
        timePosted: 'Just now',
        tags: [],
      };
      
      setPosts([newPost, ...posts]);
      setNewPostTitle('');
      setNewPostContent('');
      setShowNewPostForm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-4">Siksha Community</h1>
            <p className="text-muted-foreground">
              Connect with fellow learners, share knowledge, and ask questions in our learning community.
            </p>
          </div>
          
          <div className="mb-8 flex justify-between items-center">
            <Tabs defaultValue="trending" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="top">Top</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button 
              onClick={() => setShowNewPostForm(!showNewPostForm)}
              className="bg-primary hover:bg-secondary"
            >
              Create Post
            </Button>
          </div>
          
          {showNewPostForm && (
            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle>Create a new post</CardTitle>
                <CardDescription>Share your thoughts or questions with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Title"
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="What's on your mind?"
                      rows={5}
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowNewPostForm(false)}>Cancel</Button>
                <Button className="bg-primary hover:bg-secondary" onClick={handleCreatePost}>Post</Button>
              </CardFooter>
            </Card>
          )}
          
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <div className="flex flex-col items-center mr-2">
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                          <ArrowUp className="h-5 w-5" />
                        </Button>
                        <span className="text-sm font-medium">{post.upvotes}</span>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-sm font-medium">{post.author.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">{post.timePosted}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 text-muted-foreground">
                    <Button variant="ghost" size="sm" className="flex gap-1 items-center">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BookmarkPlus className="h-4 w-4 mr-1" />
                      <span>Save</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
