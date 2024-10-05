'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function AppModal({ isOpen, onClose, onCreateApp, app = null }) {
  const [name, setName] = useState(app ? app.name : '');
  const [description, setDescription] = useState(app ? app.description : '');
  const [icon, setIcon] = useState(app ? app.icon : '');

  const handleSubmit = () => {
    const newApp = {
      id: app ? app.id : Date.now(),
      name,
      description,
      icon,
      apiToken: app ? app.apiToken : `app_${Math.random().toString(36).substr(2, 9)}`,
    };
    onCreateApp(newApp);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{app ? 'Edit App' : 'Create New App'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="icon" className="text-right">
              Icon URL
            </Label>
            <Input
              id="icon"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          {app && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="apiToken" className="text-right">
                API Token
              </Label>
              <Input
                id="apiToken"
                value={app.apiToken}
                readOnly
                className="col-span-3"
              />
            </div>
          )}
        </div>
        <Button onClick={handleSubmit}>{app ? 'Update App' : 'Create App'}</Button>
      </DialogContent>
    </Dialog>
  );
}