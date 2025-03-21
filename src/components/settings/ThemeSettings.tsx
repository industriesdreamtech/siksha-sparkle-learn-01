
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Palette, PaintBucket, Save, Undo, Moon, Sun, Monitor } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type ThemeColor = {
  name: string;
  value: string;
  tailwindClass: string;
};

const primaryColors: ThemeColor[] = [
  { name: 'Default', value: 'hsl(252, 17%, 35%)', tailwindClass: 'bg-[#433E76]' },
  { name: 'Blue', value: 'hsl(210, 100%, 50%)', tailwindClass: 'bg-blue-500' },
  { name: 'Green', value: 'hsl(142, 71%, 45%)', tailwindClass: 'bg-green-500' },
  { name: 'Purple', value: 'hsl(262, 83%, 58%)', tailwindClass: 'bg-purple-600' },
  { name: 'Orange', value: 'hsl(24, 100%, 50%)', tailwindClass: 'bg-orange-500' },
  { name: 'Teal', value: 'hsl(168, 76%, 42%)', tailwindClass: 'bg-teal-500' },
  { name: 'Red', value: 'hsl(0, 84%, 60%)', tailwindClass: 'bg-red-500' },
  { name: 'Pink', value: 'hsl(330, 81%, 60%)', tailwindClass: 'bg-pink-500' },
];

const secondaryColors: ThemeColor[] = [
  { name: 'Default', value: 'hsl(249, 23%, 41%)', tailwindClass: 'bg-[#514F81]' },
  { name: 'Blue Darker', value: 'hsl(210, 100%, 40%)', tailwindClass: 'bg-blue-600' },
  { name: 'Green Darker', value: 'hsl(142, 71%, 35%)', tailwindClass: 'bg-green-600' },
  { name: 'Purple Darker', value: 'hsl(262, 83%, 48%)', tailwindClass: 'bg-purple-700' },
  { name: 'Orange Darker', value: 'hsl(24, 100%, 40%)', tailwindClass: 'bg-orange-600' },
  { name: 'Teal Darker', value: 'hsl(168, 76%, 32%)', tailwindClass: 'bg-teal-600' },
  { name: 'Red Darker', value: 'hsl(0, 84%, 50%)', tailwindClass: 'bg-red-600' },
  { name: 'Pink Darker', value: 'hsl(330, 81%, 50%)', tailwindClass: 'bg-pink-600' },
];

const accentColors: ThemeColor[] = [
  { name: 'Default', value: 'hsl(218, 29%, 62%)', tailwindClass: 'bg-[#819CBA]' },
  { name: 'Yellow', value: 'hsl(45, 93%, 47%)', tailwindClass: 'bg-yellow-400' },
  { name: 'Lime', value: 'hsl(85, 74%, 46%)', tailwindClass: 'bg-lime-500' },
  { name: 'Cyan', value: 'hsl(185, 70%, 49%)', tailwindClass: 'bg-cyan-500' },
  { name: 'Sky', value: 'hsl(194, 82%, 49%)', tailwindClass: 'bg-sky-500' },
  { name: 'Indigo', value: 'hsl(238, 84%, 62%)', tailwindClass: 'bg-indigo-500' },
  { name: 'Rose', value: 'hsl(330, 81%, 60%)', tailwindClass: 'bg-rose-500' },
  { name: 'Amber', value: 'hsl(38, 92%, 50%)', tailwindClass: 'bg-amber-500' },
];

const backgroundThemes = [
  { id: 'light', name: 'Light', icon: <Sun className="h-4 w-4 mr-2" /> },
  { id: 'dark', name: 'Dark', icon: <Moon className="h-4 w-4 mr-2" /> },
  { id: 'system', name: 'System', icon: <Monitor className="h-4 w-4 mr-2" /> },
];

const updateCSSVariable = (variable: string, value: string) => {
  document.documentElement.style.setProperty(variable, value);
};

export default function ThemeSettings() {
  const [themeMode, setThemeMode] = useState('light');
  const [selectedPrimary, setSelectedPrimary] = useState(primaryColors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState(secondaryColors[0]);
  const [selectedAccent, setSelectedAccent] = useState(accentColors[0]);
  const [originalColors, setOriginalColors] = useState({
    primary: document.documentElement.style.getPropertyValue('--primary') || primaryColors[0].value,
    secondary: document.documentElement.style.getPropertyValue('--secondary') || secondaryColors[0].value,
    accent: document.documentElement.style.getPropertyValue('--accent') || accentColors[0].value,
  });
  const [showFullPreview, setShowFullPreview] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body if theme is dark
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const handlePrimaryColorChange = (color: ThemeColor) => {
    setSelectedPrimary(color);
    updateCSSVariable('--primary', color.value);
  };

  const handleSecondaryColorChange = (color: ThemeColor) => {
    setSelectedSecondary(color);
    updateCSSVariable('--secondary', color.value);
  };

  const handleAccentColorChange = (color: ThemeColor) => {
    setSelectedAccent(color);
    updateCSSVariable('--accent', color.value);
  };

  const saveThemeChanges = () => {
    // In a real app, this would save to user preferences
    setOriginalColors({
      primary: selectedPrimary.value,
      secondary: selectedSecondary.value,
      accent: selectedAccent.value,
    });

    // Save theme mode preference
    localStorage.setItem('theme', themeMode);

    toast({
      title: "Theme Updated",
      description: "Your theme preferences have been saved.",
    });
  };

  const resetToDefaults = () => {
    setSelectedPrimary(primaryColors[0]);
    setSelectedSecondary(secondaryColors[0]);
    setSelectedAccent(accentColors[0]);
    setThemeMode('light');
    updateCSSVariable('--primary', primaryColors[0].value);
    updateCSSVariable('--secondary', secondaryColors[0].value);
    updateCSSVariable('--accent', accentColors[0].value);
    document.documentElement.classList.remove('dark');
    
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
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Color Mode</h3>
          <RadioGroup 
            defaultValue="light" 
            value={themeMode}
            onValueChange={setThemeMode}
            className="grid grid-cols-3 gap-4"
          >
            {backgroundThemes.map((theme) => (
              <div 
                key={theme.id} 
                className={cn(
                  "flex flex-col items-center space-y-2 rounded-lg border-2 border-muted p-4 hover:border-primary hover:bg-muted/10 transition-all cursor-pointer",
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
          <h3 className="text-lg font-medium mb-4">Primary Color</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {primaryColors.map((color) => (
              <div key={color.name} className="relative">
                <button
                  type="button"
                  className={cn(
                    "w-full p-4 h-16 rounded-md border border-input hover:border-primary/50 transition-all",
                    color.tailwindClass,
                    selectedPrimary.name === color.name && "ring-2 ring-primary ring-offset-2"
                  )}
                  onClick={() => handlePrimaryColorChange(color)}
                  aria-label={`Select ${color.name} as primary color`}
                >
                  {selectedPrimary.name === color.name && (
                    <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-6 w-6" />
                  )}
                </button>
                <p className="text-xs text-center mt-1">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Secondary Color</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {secondaryColors.map((color) => (
              <div key={color.name} className="relative">
                <button
                  type="button"
                  className={cn(
                    "w-full p-4 h-16 rounded-md border border-input hover:border-primary/50 transition-all",
                    color.tailwindClass,
                    selectedSecondary.name === color.name && "ring-2 ring-primary ring-offset-2"
                  )}
                  onClick={() => handleSecondaryColorChange(color)}
                  aria-label={`Select ${color.name} as secondary color`}
                >
                  {selectedSecondary.name === color.name && (
                    <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-6 w-6" />
                  )}
                </button>
                <p className="text-xs text-center mt-1">{color.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Accent Color</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {accentColors.map((color) => (
              <div key={color.name} className="relative">
                <button
                  type="button"
                  className={cn(
                    "w-full p-4 h-16 rounded-md border border-input hover:border-primary/50 transition-all",
                    color.tailwindClass,
                    selectedAccent.name === color.name && "ring-2 ring-primary ring-offset-2"
                  )}
                  onClick={() => handleAccentColorChange(color)}
                  aria-label={`Select ${color.name} as accent color`}
                >
                  {selectedAccent.name === color.name && (
                    <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-6 w-6" />
                  )}
                </button>
                <p className="text-xs text-center mt-1">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 bg-background border border-border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Preview</h3>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" onClick={() => setShowFullPreview(true)}>
                  Full Preview
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Theme Preview</SheetTitle>
                  <SheetDescription>
                    See how your selected theme looks with various UI components
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Card Component</h4>
                    <p className="text-sm text-muted-foreground mb-4">This is how card content will appear.</p>
                    <Button size="sm">Action Button</Button>
                  </Card>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Typography</h4>
                    <div className="space-y-1">
                      <p className="text-2xl font-display">Heading Text</p>
                      <p className="text-muted-foreground">Paragraph text in muted color</p>
                      <p>Regular paragraph text</p>
                      <p className="text-sm">Small text</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Form Elements</h4>
                    <div className="grid gap-2">
                      <Label htmlFor="preview-input">Input Field</Label>
                      <input 
                        id="preview-input" 
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary" 
                        placeholder="Input text" 
                      />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              This is how card components will appear with your selected theme.
            </div>
            <div className="p-4 bg-muted rounded-lg">
              This is text on a muted background.
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={resetToDefaults}
            className="flex gap-2"
          >
            <Undo className="h-4 w-4" /> Reset to Defaults
          </Button>
          <Button 
            onClick={saveThemeChanges}
            className="flex gap-2"
          >
            <Save className="h-4 w-4" /> Save Theme
          </Button>
        </div>
      </div>
    </div>
  );
}
