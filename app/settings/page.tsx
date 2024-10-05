'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageTransition from '@/components/page-transition';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [theme, setTheme] = useState('system');

  return (
    <PageTransition>
      <div className="container mx-auto p-4 pt-24 min-h-screen">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="text-base sm:text-lg">Enable Notifications</Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="twoFactor" className="text-base sm:text-lg">Two-Factor Authentication</Label>
                <Switch
                  id="twoFactor"
                  checked={twoFactor}
                  onCheckedChange={setTwoFactor}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="theme" className="text-base sm:text-lg">Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}