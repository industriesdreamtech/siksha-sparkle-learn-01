
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState({
    courseUpdates: true,
    newCourses: true,
    promotions: false,
    reminders: true,
    comments: true,
    mentions: true,
  });
  
  const [pushNotifications, setPushNotifications] = useState({
    courseUpdates: true,
    comments: true,
    mentions: true,
    messages: true,
  });
  
  const [emailFrequency, setEmailFrequency] = useState("daily");
  
  const handleSave = () => {
    toast({
      title: "Notification Preferences Saved",
      description: "Your notification settings have been updated successfully.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium">Notification Preferences</h2>
        <p className="text-muted-foreground">Manage how and when you receive notifications</p>
      </div>
      
      <div className="space-y-6">
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Email Notifications</h3>
            <p className="text-sm text-muted-foreground">Control which emails you receive from us</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-course-updates" className="font-medium">Course Updates</Label>
                <p className="text-sm text-muted-foreground">Receive updates about courses you're enrolled in</p>
              </div>
              <Switch 
                id="email-course-updates" 
                checked={emailNotifications.courseUpdates}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, courseUpdates: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-new-courses" className="font-medium">New Courses</Label>
                <p className="text-sm text-muted-foreground">Be notified when new courses are available</p>
              </div>
              <Switch 
                id="email-new-courses" 
                checked={emailNotifications.newCourses}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, newCourses: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-promotions" className="font-medium">Promotions & Offers</Label>
                <p className="text-sm text-muted-foreground">Receive emails about special offers and discounts</p>
              </div>
              <Switch 
                id="email-promotions" 
                checked={emailNotifications.promotions}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, promotions: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-reminders" className="font-medium">Learning Reminders</Label>
                <p className="text-sm text-muted-foreground">Get reminded to continue your learning</p>
              </div>
              <Switch 
                id="email-reminders" 
                checked={emailNotifications.reminders}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, reminders: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-comments" className="font-medium">Comments</Label>
                <p className="text-sm text-muted-foreground">Receive emails when someone comments on your posts</p>
              </div>
              <Switch 
                id="email-comments" 
                checked={emailNotifications.comments}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, comments: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-mentions" className="font-medium">Mentions</Label>
                <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
              </div>
              <Switch 
                id="email-mentions" 
                checked={emailNotifications.mentions}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, mentions: checked})}
              />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Push Notifications</h3>
            <p className="text-sm text-muted-foreground">Control notifications on this device</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-course-updates" className="font-medium">Course Updates</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for course updates</p>
              </div>
              <Switch 
                id="push-course-updates" 
                checked={pushNotifications.courseUpdates}
                onCheckedChange={(checked) => setPushNotifications({...pushNotifications, courseUpdates: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-comments" className="font-medium">Comments</Label>
                <p className="text-sm text-muted-foreground">Get notified when someone comments on your posts</p>
              </div>
              <Switch 
                id="push-comments" 
                checked={pushNotifications.comments}
                onCheckedChange={(checked) => setPushNotifications({...pushNotifications, comments: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-mentions" className="font-medium">Mentions</Label>
                <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
              </div>
              <Switch 
                id="push-mentions" 
                checked={pushNotifications.mentions}
                onCheckedChange={(checked) => setPushNotifications({...pushNotifications, mentions: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-messages" className="font-medium">Direct Messages</Label>
                <p className="text-sm text-muted-foreground">Get notified when you receive a direct message</p>
              </div>
              <Switch 
                id="push-messages" 
                checked={pushNotifications.messages}
                onCheckedChange={(checked) => setPushNotifications({...pushNotifications, messages: checked})}
              />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Email Frequency</h3>
            <p className="text-sm text-muted-foreground">Choose how often you'd like to receive email digests</p>
          </div>
          
          <RadioGroup 
            defaultValue="daily" 
            value={emailFrequency}
            onValueChange={setEmailFrequency}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="realtime" id="freq-realtime" />
              <Label htmlFor="freq-realtime">Real-time: Send emails as events happen</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="freq-daily" />
              <Label htmlFor="freq-daily">Daily Digest: Group notifications into a single daily email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="freq-weekly" />
              <Label htmlFor="freq-weekly">Weekly Digest: Group notifications into a single weekly email</Label>
            </div>
          </RadioGroup>
        </Card>
        
        <div className="flex justify-end">
          <Button onClick={handleSave} className="flex gap-2">
            <Save className="h-4 w-4" /> Save Notification Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
