'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactView } from '@/components/Views';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  const handleSetCurrentView = (view: string) => {
    if (view === 'contact') return;
    router.push(`/#${view}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        currentView="contact"
        setCurrentView={handleSetCurrentView}
        onOpenSearch={() => {}}
      />
      <main className="flex-1">
        <ContactView />
      </main>
      <Footer setCurrentView={handleSetCurrentView} />
    </div>
  );
}
