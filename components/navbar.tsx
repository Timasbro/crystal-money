'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { CreditCard, Home, Code, Settings, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLandingPage(pathname === '/');
  }, [pathname]);

  return (
    <motion.div
      initial={false}
      animate={{
        width: isLandingPage ? '70%' : '90%',
        maxWidth: '1200px',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <Card className="p-2 flex items-center justify-between w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex items-center">
          <Image src="/crystal-money-logo.png" alt="Crystal.Money Logo" width={40} height={40} />
          <span className="ml-2 text-lg font-semibold hidden sm:inline">Crystal.Money</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavButton href="/" icon={<Home className="h-4 w-4" />} label="Home" />
          <NavButton href="/cards" icon={<CreditCard className="h-4 w-4" />} label="Cards" />
          <NavButton href="/develop" icon={<Code className="h-4 w-4" />} label="Develop" />
          <NavButton href="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </Card>
      {isMenuOpen && (
        <Card className="mt-2 p-2 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-2">
            <NavButton href="/" icon={<Home className="h-4 w-4" />} label="Home" onClick={() => setIsMenuOpen(false)} />
            <NavButton href="/cards" icon={<CreditCard className="h-4 w-4" />} label="Cards" onClick={() => setIsMenuOpen(false)} />
            <NavButton href="/develop" icon={<Code className="h-4 w-4" />} label="Develop" onClick={() => setIsMenuOpen(false)} />
            <NavButton href="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" onClick={() => setIsMenuOpen(false)} />
          </div>
        </Card>
      )}
    </motion.div>
  );
}

function NavButton({ href, icon, label, onClick }) {
  return (
    <Button variant="ghost" asChild onClick={onClick}>
      <Link href={href} className="flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
      </Link>
    </Button>
  );
}