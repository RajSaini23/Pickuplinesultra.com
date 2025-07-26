
"use client";

import Link from 'next/link';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { ArrowLeft, MessageSquare, LifeBuoy, Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SettingsRow = ({ icon, title, subtitle, action }: { icon: React.ReactNode, title: string, subtitle: string, action?: React.ReactNode }) => (
  <div className="p-4">
    <div className="flex items-center">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="ml-auto">
        {action}
      </div>
    </div>
  </div>
);

export default function SettingsPage() {
  const { setTheme: setNextTheme } = useTheme();
  const [preferredTheme, setPreferredTheme] = React.useState('auto');

  React.useEffect(() => {
    setPreferredTheme(localStorage.getItem('theme-preference') || 'auto');
  }, []);

  const changeTheme = (t: 'light' | 'dark' | 'auto') => {
    localStorage.setItem('theme-preference', t);
    setPreferredTheme(t);
    if (t === 'auto') {
      const hour = new Date().getHours();
      setNextTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');
    } else {
      setNextTheme(t);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center p-4 border-b bg-background/80 backdrop-blur-sm">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" aria-label="Back">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-2">Settings</h1>
      </header>
      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the app.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="font-medium">Theme</p>
                <div className="flex items-center gap-2 ml-auto">
                  <Button variant={preferredTheme === 'light' ? 'default' : 'outline'} size="icon" onClick={() => changeTheme('light')} aria-label="Light theme">
                    <Sun className="h-5 w-5" />
                  </Button>
                  <Button variant={preferredTheme === 'dark' ? 'default' : 'outline'} size="icon" onClick={() => changeTheme('dark')} aria-label="Dark theme">
                    <Moon className="h-5 w-5" />
                  </Button>
                  <Button variant={preferredTheme === 'auto' ? 'default' : 'outline'} size="icon" onClick={() => changeTheme('auto')} aria-label="Auto theme">
                    <Laptop className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>About & Support</CardTitle>
              <CardDescription>Get help or send us your thoughts.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
               <SettingsRow
                  icon={<MessageSquare className="h-6 w-6 text-primary" />}
                  title="Feedback"
                  subtitle="Help us improve the app"
                  action={<Button variant="outline">Send</Button>}
               />
               <Separator />
               <SettingsRow
                  icon={<LifeBuoy className="h-6 w-6 text-primary" />}
                  title="Support"
                  subtitle="Contact us for help"
                  action={<Button variant="outline">Email</Button>}
               />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
