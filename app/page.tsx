'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import LoginModal from '@/components/login-modal';
import PageTransition from '@/components/page-transition';

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
            alt="Crystal background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-100 dark:to-white animate-gradient">
            Welcome to Crystal.Money
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Experience the future of banking with our sleek, modern, and secure platform.
            Manage your finances with crystal-clear precision and ease.
          </p>
          <LoginModal>
            <Button size="lg" className="text-lg px-8 py-6 bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              Get Started
            </Button>
          </LoginModal>
        </div>
      </main>
    </PageTransition>
  );
}