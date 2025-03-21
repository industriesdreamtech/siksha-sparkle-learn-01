
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

export default function AppSettings() {
  const [autoplay, setAutoplay] = useState(true);
  const [subtitles, setSubtitles] = useState(true);
  const [videoQuality, setVideoQuality] = useState("auto");
  const [downloadEnabled, setDownloadEnabled] = useState(true);
  const [chatbotEnabled, setChatbotEnabled] = useState(true);
  const [language, setLanguage] = useState("english");
  
  const handleSave = () => {
    toast({
      title: "App Settings Saved",
      description: "Your application preferences have been updated successfully.",
    });
  };
  
  const handleAccountDelete = () => {
    // In a real app, this would trigger account deletion process
    toast({
      title: "Account Deletion Requested",
      description: "We've sent a confirmation email with further instructions.",
      variant: "destructive",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium">App Settings</h2>
        <p className="text-muted-foreground">Manage your application preferences</p>
      </div>
      
      <div className="space-y-6">
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Video Preferences</h3>
            <p className="text-sm text-muted-foreground">Customize your video viewing experience</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoplay" className="font-medium">Autoplay Videos</Label>
                <p className="text-sm text-muted-foreground">Automatically play the next video in a course</p>
              </div>
              <Switch 
                id="autoplay" 
                checked={autoplay}
                onCheckedChange={setAutoplay}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="subtitles" className="font-medium">Enable Subtitles</Label>
                <p className="text-sm text-muted-foreground">Show subtitles by default when available</p>
              </div>
              <Switch 
                id="subtitles" 
                checked={subtitles}
                onCheckedChange={setSubtitles}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="downloads" className="font-medium">Enable Downloads</Label>
                <p className="text-sm text-muted-foreground">Allow downloading course materials when available</p>
              </div>
              <Switch 
                id="downloads" 
                checked={downloadEnabled}
                onCheckedChange={setDownloadEnabled}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="video-quality" className="font-medium">Default Video Quality</Label>
                <Select value={videoQuality} onValueChange={setVideoQuality}>
                  <SelectTrigger id="video-quality" className="mt-1">
                    <SelectValue placeholder="Select video quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto (Recommended)</SelectItem>
                    <SelectItem value="low">Low (480p)</SelectItem>
                    <SelectItem value="medium">Medium (720p)</SelectItem>
                    <SelectItem value="high">High (1080p)</SelectItem>
                    <SelectItem value="very-high">Very High (1440p+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">App Features</h3>
            <p className="text-sm text-muted-foreground">Control which features are enabled</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="chatbot" className="font-medium">AI Learning Assistant</Label>
                <p className="text-sm text-muted-foreground">Enable the AI chatbot to help with your learning</p>
              </div>
              <Switch 
                id="chatbot" 
                checked={chatbotEnabled}
                onCheckedChange={setChatbotEnabled}
              />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Language</h3>
            <p className="text-sm text-muted-foreground">Choose your preferred language</p>
          </div>
          
          <RadioGroup 
            defaultValue="english" 
            value={language}
            onValueChange={setLanguage}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="lang-english" />
              <Label htmlFor="lang-english">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hindi" id="lang-hindi" />
              <Label htmlFor="lang-hindi">Hindi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="spanish" id="lang-spanish" />
              <Label htmlFor="lang-spanish">Spanish</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="french" id="lang-french" />
              <Label htmlFor="lang-french">French</Label>
            </div>
          </RadioGroup>
        </Card>
        
        <Card className="p-6 space-y-6 border-destructive">
          <div>
            <h3 className="text-lg font-medium text-destructive mb-2">Danger Zone</h3>
            <p className="text-sm text-muted-foreground">Permanent actions that cannot be undone</p>
          </div>
          
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="flex gap-2">
                  <Trash2 className="h-4 w-4" /> Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleAccountDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Card>
        
        <div className="flex justify-end">
          <Button onClick={handleSave} className="flex gap-2">
            <Save className="h-4 w-4" /> Save App Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
