
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Moon, Sun, Monitor } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const themeOptions = [
  { id: 'light', name: 'Light', icon: <Sun className="h-4 w-4 mr-2" /> },
  { id: 'dark', name: 'Dark', icon: <Moon className="h-4 w-4 mr-2" /> },
  { id: 'system', name: 'System', icon: <Monitor className="h-4 w-4 mr-2" /> },
];

export default function ThemeSettings() {
  const [themeMode, setThemeMode] = useState('light');
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body if theme is dark
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const saveThemeChanges = () => {
    // Save theme mode preference
    localStorage.setItem('theme', themeMode);

    toast({
      title: "Theme Updated",
      description: "Your theme preferences have been saved.",
    });
  };

  const resetToDefaults = () => {
    setThemeMode('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    
    toast({
      title: "Theme Reset",
      description: "Theme has been reset to default values.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium">Theme Settings</h2>
        <p className="text-muted-foreground">Customize the appearance of your learning environment</p>
      </div>
      
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Appearance</h3>
            <RadioGroup 
              value={themeMode}
              onValueChange={setThemeMode}
              className="grid grid-cols-3 gap-4"
            >
              {themeOptions.map((theme) => (
                <div 
                  key={theme.id} 
                  className={cn(
                    "flex flex-col items-center space-y-2 rounded-md border-2 border-muted p-4 hover:border-primary hover:bg-muted/10 transition-all cursor-pointer",
                    themeMode === theme.id && "border-primary bg-primary/5"
                  )}
                  onClick={() => setThemeMode(theme.id)}
                >
                  <div className="flex items-center justify-center">
                    {theme.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={theme.id} id={`theme-${theme.id}`} className="sr-only" />
                    <Label htmlFor={`theme-${theme.id}`} className="font-medium">{theme.name}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Preview</h3>
            <div className="space-y-3 border rounded-md p-4">
              <div className="flex flex-wrap gap-3">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div className="p-4 bg-card border border-border rounded-md">
                This is how card components will appear with your selected theme.
              </div>
              <div className="p-4 bg-muted rounded-md">
                This is text on a muted background.
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={resetToDefaults}
            >
              Reset to Defaults
            </Button>
            <Button 
              onClick={saveThemeChanges}
            >
              Save Theme
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
