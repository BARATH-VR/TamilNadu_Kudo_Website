'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeView } from '@/components/HomeView';
import {
  AboutView,
  DistrictsView,
  EventsView,
  AchievementsView,
  ResourcesView,
  MediaView,
  FaqsView,
  ContactView
} from '@/components/Views';
import { AdminPanel } from '@/components/AdminPanel';
import { SearchModal } from '@/components/SearchModal';
import { LightboxModal } from '@/components/LightboxModal';

export default function MainPage() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Sync Hash in URL for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'districts', 'events', 'achievements', 'resources', 'media', 'faqs', 'contact', 'admin'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSetCurrentView = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
  };

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80",
      title: "Super Safe Head Guard Sparring Action",
      event: "13th Tamil Nadu State Championship"
    },
    {
      url: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?auto=format&fit=crop&w=800&q=80",
      title: "Podium Ceremony - National Gold Winners",
      event: "KIFI National Games Mumbai"
    },
    {
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
      title: "State Black Belt Grading Seminar",
      event: "Chennai HQ Dojo"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      title: "Sub-Junior Athlete Technique Demo",
      event: "Coimbatore Dojo"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Persistent Glassmorphic Header */}
      <Header
        currentView={currentView}
        setCurrentView={handleSetCurrentView}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView setCurrentView={handleSetCurrentView} onOpenLightbox={openLightbox} />
        )}
        {currentView === 'about' && <AboutView />}
        {currentView === 'districts' && <DistrictsView />}
        {currentView === 'events' && <EventsView />}
        {currentView === 'achievements' && <AchievementsView />}
        {currentView === 'resources' && <ResourcesView />}
        {currentView === 'media' && <MediaView onOpenLightbox={openLightbox} />}
        {currentView === 'faqs' && <FaqsView />}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'admin' && <AdminPanel />}
      </main>

      {/* Persistent Footer */}
      <Footer setCurrentView={handleSetCurrentView} />

      {/* Search Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setCurrentView={handleSetCurrentView}
      />

      {/* Lightbox Overlay */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={galleryImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}
