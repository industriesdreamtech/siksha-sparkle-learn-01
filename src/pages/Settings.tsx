
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserProfileSettings from '@/components/settings/UserProfileSettings';
import ThemeSettings from '@/components/settings/ThemeSettings';
import AppSettings from '@/components/settings/AppSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import { User, Settings as Cog, Palette, Bell } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <Layout>
      <div className="container max-w-6xl py-8 animate-fade-in">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-display font-medium">Settings</h1>
            <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl shadow-sm">
            <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="sm:flex border-b border-border">
                <TabsList className="h-auto w-full sm:w-auto flex-col sm:flex-row sm:justify-start justify-center bg-transparent p-0">
                  <TabsTrigger 
                    value="profile" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary flex gap-2 px-4 py-3"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="theme" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary flex gap-2 px-4 py-3"
                  >
                    <Palette className="h-4 w-4" />
                    <span>Theme</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notifications" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary flex gap-2 px-4 py-3"
                  >
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="app" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary flex gap-2 px-4 py-3"
                  >
                    <Cog className="h-4 w-4" />
                    <span>App Settings</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="profile" className="mt-0">
                  <UserProfileSettings />
                </TabsContent>
                <TabsContent value="theme" className="mt-0">
                  <ThemeSettings />
                </TabsContent>
                <TabsContent value="notifications" className="mt-0">
                  <NotificationSettings />
                </TabsContent>
                <TabsContent value="app" className="mt-0">
                  <AppSettings />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}
