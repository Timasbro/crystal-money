'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CardCreationModal from '@/components/card-creation-modal';
import CardList from '@/components/card-list';
import PageTransition from '@/components/page-transition';

export default function CardsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const handleCreateCard = (newCard) => {
    setCards([...cards, newCard]);
    setIsModalOpen(false);
  };

  return (
    <PageTransition>
      <div className="container mx-auto p-4 pt-24 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-50 z-0" />
        <Card className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Your Crystal Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
              Manage your Crystal.Money cards with ease. Create new cards for different purposes or view your existing ones.
              Each card comes with unique features tailored to your financial needs.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="mb-8 bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <Plus className="mr-2 h-4 w-4" /> Create New Card
            </Button>
            <CardList cards={cards} setCards={setCards} />
          </CardContent>
        </Card>
        <CardCreationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateCard={handleCreateCard} />
      </div>
    </PageTransition>
  );
}