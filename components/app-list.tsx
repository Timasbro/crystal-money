'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import AppModal from './app-modal';

export default function AppList({ apps, setApps }) {
  const [editingApp, setEditingApp] = useState(null);

  const handleEditApp = (updatedApp) => {
    setApps(apps.map(app => app.id === updatedApp.id ? updatedApp : app));
    setEditingApp(null);
  };

  const handleDeleteApp = (appId) => {
    setApps(apps.filter(app => app.id !== appId));
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {apps.map(app => (
        <Card key={app.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{app.name}</span>
              <img src={app.icon} alt={app.name} className="w-8 h-8" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">{app.description}</p>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => setEditingApp(app)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={() => handleDeleteApp(app.id)}>
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {editingApp && (
        <AppModal
          isOpen={!!editingApp}
          onClose={() => setEditingApp(null)}
          onCreateApp={handleEditApp}
          app={editingApp}
        />
      )}
    </div>
  );
}