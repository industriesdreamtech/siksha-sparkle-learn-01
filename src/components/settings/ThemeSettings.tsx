
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Palette, PaintBucket, Save, Undo } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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

const backgroundThemes = [
  { id: 'light', name: 'Light' },
  { id: 'dark', name: 'Dark' },
  { id: 'system', name: 'System' },
];

const updateCSSVariable = (variable: string, value: string) => {
  document.documentElement.style.setProperty(variable, value);
};

export default function ThemeSettings() {
  const [themeMode, setThemeMode] = useState('light');
  const [selectedPrimary, setSelectedPrimary] = useState(primaryColors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState(secondaryColors[0]);
  const [originalColors, setOriginalColors] = useState({
    primary: document.documentElement.style.getPropertyValue('--primary') || primaryColors[0].value,
    secondary: document.documentElement.style.getPropertyValue('--secondary') || secondaryColors[0].value,
  });

  const handlePrimaryColorChange = (color: ThemeColor) => {
    setSelectedPrimary(color);
    updateCSSVariable('--primary', color.value);
  };

  const handleSecondaryColorChange = (color: ThemeColor) => {
    setSelectedSecondary(color);
    updateCSSVariable('--secondary', color.value);
  };

  const saveThemeChanges = () => {
    // In a real app, this would save to user preferences
    setOriginalColors({
      primary: selectedPrimary.value,
      secondary: selectedSecondary.value,
    });

    toast({
      title: "Theme Updated",
      description: "Your theme preferences have been saved.",
    });
  };

  const resetToDefaults = () => {
    setSelectedPrimary(primaryColors[0]);
    setSelectedSecondary(secondaryColors[0]);
    updateCSSVariable('--primary', primaryColors[0].value);
    updateCSSVariable('--secondary', secondaryColors[0].value);
    
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
            className="flex space-x-4"
          >
            {backgroundThemes.map((theme) => (
              <div key={theme.id} className="flex items-center space-x-2">
                <RadioGroupItem value={theme.id} id={`theme-${theme.id}`} />
                <Label htmlFor={`theme-${theme.id}`}>{theme.name}</Label>
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
        
        <div className="p-6 bg-background border border-border rounded-lg">
          <h3 className="text-lg font-medium mb-4">Preview</h3>
          <div className="space-y-3">
            <div className="flex space-x-3">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              This is how card components will appear with your selected theme.
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
