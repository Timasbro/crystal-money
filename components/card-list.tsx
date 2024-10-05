'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function CardList({ cards, setCards }) {
  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
                <span>{card.name}</span>
                <span className="text-sm font-normal text-gray-600 dark:text-gray-300">{card.domain}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Card Number: **** **** **** {Math.floor(1000 + Math.random() * 9000)}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Expiry: {new Date().getMonth() + 1}/{new Date().getFullYear() + 4}</p>
              <div className="flex justify-end">
                <Button variant="destructive" size="sm" onClick={() => handleDeleteCard(card.id)} className="bg-red-600 hover:bg-red-700 text-white">
                  <Trash2 className="w-4 h-4 mr-2" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}