'use client';

import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { title: 'Card Details', fields: ['name', 'domain'] },
  { title: 'Review', fields: [] },
];

export default function CardCreationModal({ isOpen, onClose, onCreateCard }) {
  const [step, setStep] = useState(0);
  const [cardData, setCardData] = useState({
    name: '',
    domain: '',
  });

  const nameInputRef = useRef(null);
  const domainInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && step === 0) {
      nameInputRef.current?.focus();
    }
  }, [isOpen, step]);

  const handleInputChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (step === 0 && e.target.name === 'name') {
        domainInputRef.current?.focus();
      } else if (step === 0 && e.target.name === 'domain') {
        handleNext();
      } else if (step === 1) {
        handleCreateCard();
      }
    }
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleCreateCard();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleCreateCard = () => {
    onCreateCard({ ...cardData, id: Date.now() });
    setStep(0);
    setCardData({
      name: '',
      domain: '',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {steps[step].title}
          </DialogTitle>
        </DialogHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-4 py-4">
              {step === 0 && (
                <>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-gray-700 dark:text-gray-300">
                      Card Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={cardData.name}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      ref={nameInputRef}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="domain" className="text-right text-gray-700 dark:text-gray-300">
                      Card Domain
                    </Label>
                    <Input
                      id="domain"
                      name="domain"
                      value={cardData.domain}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      ref={domainInputRef}
                      className="col-span-3"
                    />
                  </div>
                </>
              )}
              {step === 1 && (
                <div className="col-span-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Review Your Card Details</h3>
                  {Object.entries(cardData).map(([key, value]) => (
                    <p key={key} className="text-gray-700 dark:text-gray-300">
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <Button onClick={handleBack} disabled={step === 0} className="bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            Back
          </Button>
          <Button onClick={handleNext} className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
            {step === steps.length - 1 ? 'Create Card' : 'Next'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}