'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import AppModal from '@/components/app-modal';
import AppList from '@/components/app-list';
import PageTransition from '@/components/page-transition';

export default function DevelopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apps, setApps] = useState([]);

  const handleCreateApp = (newApp) => {
    setApps([...apps, newApp]);
    setIsModalOpen(false);
  };

  return (
    <PageTransition>
      <div className="container mx-auto p-4 pt-24 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 opacity-50 z-0" />
        <Card className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Developer Apps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
              Create and manage your Crystal.Money developer apps. These apps allow you to integrate our banking services
              into your own applications, providing a seamless financial experience for your users.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="mb-8 bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <Plus className="mr-2 h-4 w-4" /> Create New App
            </Button>
            <AppList apps={apps} setApps={setApps} />
          </CardContent>
        </Card>
        <AppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateApp={handleCreateApp} />
      </div>
    </PageTransition>
  );
}