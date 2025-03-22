
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Moon, Sun, Monitor, Palette, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const themeOptions = [
  { id: 'light', name: 'Light', icon: <Sun className="h-4 w-4 mr-2" /> },
  { id: 'dark', name: 'Dark', icon: <Moon className="h-4 w-4 mr-2" /> },
  { id: 'system', name: 'System', icon: <Monitor className="h-4 w-4 mr-2" /> },
];

const colorThemes = [
  { id: 'default', name: 'Default Blue', primaryColor: '#3b82f6', accentColor: '#60a5fa' },
  { id: 'green', name: 'Emerald', primaryColor: '#10b981', accentColor: '#34d399' },
  { id: 'purple', name: 'Purple', primaryColor: '#8b5cf6', accentColor: '#a78bfa' },
  { id: 'orange', name: 'Orange', primaryColor: '#f97316', accentColor: '#fb923c' },
  { id: 'pink', name: 'Pink', primaryColor: '#ec4899', accentColor: '#f472b6' },
  { id: 'teal', name: 'Teal', primaryColor: '#14b8a6', accentColor: '#2dd4bf' },
  { id: 'red', name: 'Ruby', primaryColor: '#ef4444', accentColor: '#f87171' },
  { id: 'indigo', name: 'Indigo', primaryColor: '#6366f1', accentColor: '#818cf8' },
];

const fontOptions = [
  { id: 'default', name: 'Default (Inter)', fontFamily: 'var(--font-sans)' },
  { id: 'serif', name: 'Serif', fontFamily: 'Georgia, serif' },
  { id: 'mono', name: 'Monospace', fontFamily: 'monospace' },
];

export default function ThemeSettings() {
  const [themeMode, setThemeMode] = useState('light');
  const [colorTheme, setColorTheme] = useState('default');
  const [fontTheme, setFontTheme] = useState('default');
  const [activeTab, setActiveTab] = useState('appearance');
  
  useEffect(() => {
    // Check for saved preferences
    const savedTheme = localStorage.getItem('theme-mode');
    const savedColor = localStorage.getItem('theme-color');
    const savedFont = localStorage.getItem('theme-font');
    
    if (savedTheme) setThemeMode(savedTheme);
    if (savedColor) setColorTheme(savedColor);
    if (savedFont) setFontTheme(savedFont);
  }, []);

  useEffect(() => {
    // Apply dark mode class to body if theme is dark
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  useEffect(() => {
    // Apply color theme
    const root = document.documentElement;
    const selectedTheme = colorThemes.find(theme => theme.id === colorTheme) || colorThemes[0];
    
    root.style.setProperty('--color-primary', selectedTheme.primaryColor);
    root.style.setProperty('--color-accent', selectedTheme.accentColor);
    
    // Convert hex to hsl for tailwind compatibility
    const hexToHSL = (hex) => {
      // Convert hex to RGB
      let r = parseInt(hex.slice(1, 3), 16) / 255;
      let g = parseInt(hex.slice(3, 5), 16) / 255;
      let b = parseInt(hex.slice(5, 7), 16) / 255;
      
      // Find greatest and smallest RGB values
      let cmin = Math.min(r, g, b);
      let cmax = Math.max(r, g, b);
      let delta = cmax - cmin;
      let h = 0;
      let s = 0;
      let l = 0;

      // Calculate hue
      if (delta === 0) h = 0;
      else if (cmax === r) h = ((g - b) / delta) % 6;
      else if (cmax === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;

      h = Math.round(h * 60);
      if (h < 0) h += 360;

      // Calculate lightness
      l = (cmax + cmin) / 2;

      // Calculate saturation
      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
      // Convert to percentages
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
      
      return `${h} ${s}% ${l}%`;
    };
    
    const primaryHSL = hexToHSL(selectedTheme.primaryColor);
    const accentHSL = hexToHSL(selectedTheme.accentColor);
    
    root.style.setProperty('--primary', primaryHSL);
    root.style.setProperty('--accent', accentHSL);
  }, [colorTheme]);

  useEffect(() => {
    // Apply font theme
    const root = document.documentElement;
    const selectedFont = fontOptions.find(font => font.id === fontTheme) || fontOptions[0];
    
    root.style.setProperty('--font-custom', selectedFont.fontFamily);
    document.body.style.fontFamily = selectedFont.fontFamily;
  }, [fontTheme]);

  const saveThemeChanges = () => {
    // Save all theme preferences
    localStorage.setItem('theme-mode', themeMode);
    localStorage.setItem('theme-color', colorTheme);
    localStorage.setItem('theme-font', fontTheme);

    toast({
      title: "Theme Updated",
      description: "Your theme preferences have been saved.",
    });
  };

  const resetToDefaults = () => {
    setThemeMode('light');
    setColorTheme('default');
    setFontTheme('default');
    
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-mode', 'light');
    localStorage.setItem('theme-color', 'default');
    localStorage.setItem('theme-font', 'default');
    
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
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 justify-start">
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <span>Mode</span>
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Colors</span>
            </TabsTrigger>
            <TabsTrigger value="fonts" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Fonts</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="appearance" className="mt-0 space-y-6">
            <h3 className="text-lg font-medium mb-4">Appearance Mode</h3>
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
          </TabsContent>
          
          <TabsContent value="colors" className="mt-0 space-y-6">
            <h3 className="text-lg font-medium mb-4">Color Theme</h3>
            <RadioGroup 
              value={colorTheme}
              onValueChange={setColorTheme}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {colorThemes.map((theme) => (
                <div 
                  key={theme.id} 
                  className={cn(
                    "flex flex-col space-y-2 rounded-md border-2 border-muted p-4 hover:border-primary hover:bg-muted/10 transition-all cursor-pointer",
                    colorTheme === theme.id && "border-primary bg-primary/5"
                  )}
                  onClick={() => setColorTheme(theme.id)}
                >
                  <div className="flex justify-center mb-2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: theme.primaryColor,
                        color: '#fff' 
                      }}
                    >
                      {colorTheme === theme.id && <Check className="h-5 w-5" />}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <RadioGroupItem value={theme.id} id={`color-${theme.id}`} className="sr-only" />
                    <Label htmlFor={`color-${theme.id}`} className="font-medium text-center">{theme.name}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>
          
          <TabsContent value="fonts" className="mt-0 space-y-6">
            <h3 className="text-lg font-medium mb-4">Font Style</h3>
            <RadioGroup 
              value={fontTheme}
              onValueChange={setFontTheme}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {fontOptions.map((font) => (
                <div 
                  key={font.id} 
                  className={cn(
                    "flex flex-col items-center space-y-2 rounded-md border-2 border-muted p-4 hover:border-primary hover:bg-muted/10 transition-all cursor-pointer",
                    fontTheme === font.id && "border-primary bg-primary/5"
                  )}
                  onClick={() => setFontTheme(font.id)}
                >
                  <div className="w-full text-center py-2 px-4" style={{ fontFamily: font.fontFamily }}>
                    <p className="text-lg">Aa Bb Cc</p>
                    <p className="text-xs">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={font.id} id={`font-${font.id}`} className="sr-only" />
                    <Label htmlFor={`font-${font.id}`} className="font-medium">{font.name}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>
          
          <div className="mt-6">
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
          
          <div className="flex justify-between mt-6">
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
        </Tabs>
      </Card>
    </div>
  );
}
