'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Search, Globe, Menu, X, Shield, ChevronDown, Lock, MapPin } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, onOpenSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isAdminLoggedIn } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ultra-balanced bilingual navigation labels to guarantee zero overlap across all monitor widths
  const navLabels = {
    en: {
      brandTitle: "Tamil Nadu State Kudo Association",
      brandShort: "TNSKA Tamil Nadu",
      about: "About TNSKA",
      districts: "Districts & Academies",
      events: "Events & Results",
      resources: "Media & Resources",
      contact: "Contact",
      cta: "Find Dojo"
    },
    ta: {
      brandTitle: "தமிழ்நாடு மாநில குடோ சங்கம்",
      brandShort: "தமிழ்நாடு குடோ சங்கம்",
      about: "எங்களைப் பற்றி",
      districts: "மாவட்டங்கள்",
      events: "நிகழ்வுகள் & முடிவுகள்",
      resources: "ஊடகம் & வளங்கள்",
      contact: "தொடர்பு",
      cta: "பயிற்றுவிப்பகம்"
    }
  };

  const currentLabels = navLabels[language];

  return (
    <header className="sticky top-0 z-50 glass-header text-white border-b border-amber-900/30 shadow-xl w-full">
      
      {/* 1. Top Utility Bar */}
      <div className="min-h-[36px] py-1 bg-gradient-to-r from-red-950 via-red-900 to-amber-950 px-4 sm:px-8 lg:px-12 text-[11px] border-b border-amber-500/20 flex items-center w-full">
        <div className="w-full flex justify-between items-center gap-2">
          
          {/* Trust Badges Bar */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-amber-200/90 font-medium truncate">
            <span className="flex items-center gap-1.5 shrink-0 text-[10px] sm:text-xs">
              <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{language === 'en' ? 'SGFI & KIFI Recognized Governing Body' : 'SGFI & KIFI அங்கீகாரம் பெற்ற அமைப்பு'}</span>
            </span>
          </div>

          {/* Right Controls: Language Switcher & Admin Indicator */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {isAdminLoggedIn && (
              <button
                onClick={() => handleNavClick('admin')}
                className="hidden sm:flex items-center space-x-1 text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px] font-semibold"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Active</span>
              </button>
            )}

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30 transition-all font-bold text-[11px] sm:text-xs shrink-0"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header (Strict 3-Column Grid Isolation to Prevent Text Overlap) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-[76px] gap-4 xl:gap-8 w-full">
          
          {/* Column 1: Brand Lockup (Cell 1 - Bounded & Isolated) */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0 min-w-0 max-w-[280px] xl:max-w-[360px]"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-red-900 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-red-950 rounded-full flex items-center justify-center text-amber-400 font-extrabold text-xs sm:text-base border border-amber-400/40">
                TN
              </div>
            </div>
            
            <div className="min-w-0 overflow-hidden">
              <h1 className="text-xs sm:text-sm lg:text-base font-bold text-amber-100 leading-tight group-hover:text-amber-400 transition-colors truncate">
                {currentLabels.brandTitle}
              </h1>
              <p className="text-[10px] text-amber-200/70 truncate hidden 2xl:block">
                {t.associationSub}
              </p>
            </div>
          </div>

          {/* Column 2: Center Navigation (Cell 2 - Strictly Bounded Flex Row, No Overlap Into Brand or Action Cells) */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-3 min-w-0 overflow-hidden px-2">
            
            {/* Nav 1: About Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center space-x-1 px-2.5 xl:px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-xs xl:text-sm font-medium' : 'text-xs xl:text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'about' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.about}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-56 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutWhoWeAre}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutHistory}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutMission}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutLeadership}
                  </button>
                </div>
              )}
            </div>

            {/* Nav 2: Districts & Academies */}
            <button
              onClick={() => handleNavClick('districts')}
              className={`px-2.5 xl:px-3 py-2 rounded-md ${
                language === 'ta' ? 'text-xs xl:text-sm font-medium' : 'text-xs xl:text-sm font-semibold'
              } whitespace-nowrap transition-colors shrink-0 ${
                currentView === 'districts' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {currentLabels.districts}
            </button>

            {/* Nav 3: Events & Results Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setActiveDropdown('events')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('events')}
                className={`flex items-center space-x-1 px-2.5 xl:px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-xs xl:text-sm font-medium' : 'text-xs xl:text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'events' || currentView === 'achievements' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.events}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'events' && (
                <div className="absolute top-full left-0 w-56 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.navEvents}
                  </button>
                  <button
                    onClick={() => handleNavClick('achievements')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.navAchievements}
                  </button>
                </div>
              )}
            </div>

            {/* Nav 4: Media & Resources Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('resources')}
                className={`flex items-center space-x-1 px-2.5 xl:px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-xs xl:text-sm font-medium' : 'text-xs xl:text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'resources' || currentView === 'media' || currentView === 'faqs' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.resources}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-56 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                  <button
                    onClick={() => handleNavClick('resources')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.navResources}
                  </button>
                  <button
                    onClick={() => handleNavClick('media')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.navMedia}
                  </button>
                  <button
                    onClick={() => handleNavClick('faqs')}
                    className="w-full text-left px-4 py-2.5 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.navFaqs}
                  </button>
                </div>
              )}
            </div>

            {/* Nav 5: Contact Link */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 xl:px-3 py-2 rounded-md ${
                language === 'ta' ? 'text-xs xl:text-sm font-medium' : 'text-xs xl:text-sm font-semibold'
              } whitespace-nowrap transition-colors shrink-0 ${
                currentView === 'contact' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {currentLabels.contact}
            </button>
          </nav>

          {/* Column 3: Right Action Cluster (Cell 3 - Bounded & Isolated, Never Overlapped By Center Nav) */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-amber-200/90 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
              aria-label="Search"
              title="Search website"
            >
              <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </button>

            {/* Primary CTA Button */}
            <button
              onClick={() => handleNavClick('districts')}
              className="hidden sm:flex gold-gradient-bg text-red-950 font-extrabold px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all whitespace-nowrap items-center space-x-1.5 h-9"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{currentLabels.cta}</span>
            </button>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-amber-300 bg-zinc-900 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-amber-500/30 px-4 pt-3 pb-8 space-y-4 shadow-2xl">
          <div className="pt-1">
            <button
              onClick={() => handleNavClick('districts')}
              className="w-full gold-gradient-bg text-red-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.heroCtaPrimary}</span>
            </button>
          </div>

          <div className="space-y-1 pt-2">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-amber-900/30"
            >
              {t.navHome}
            </button>

            <div className="border-t border-zinc-900 pt-2">
              <span className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-400/80 block mb-1">
                {t.navAbout}
              </span>
              <button
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.aboutWhoWeAre}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.aboutLeadership}
              </button>
            </div>

            <div className="border-t border-zinc-900 pt-2">
              <button
                onClick={() => handleNavClick('districts')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-amber-900/30"
              >
                {t.navDistricts}
              </button>
            </div>

            <div className="border-t border-zinc-900 pt-2">
              <span className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-400/80 block mb-1">
                {t.navEvents}
              </span>
              <button
                onClick={() => handleNavClick('events')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.navEvents}
              </button>
              <button
                onClick={() => handleNavClick('achievements')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.navAchievements}
              </button>
            </div>

            <div className="border-t border-zinc-900 pt-2">
              <span className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-400/80 block mb-1">
                {t.navResources}
              </span>
              <button
                onClick={() => handleNavClick('resources')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.navResources}
              </button>
              <button
                onClick={() => handleNavClick('media')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.navMedia}
              </button>
              <button
                onClick={() => handleNavClick('faqs')}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-gray-300 hover:bg-amber-900/30"
              >
                {t.navFaqs}
              </button>
            </div>

            <div className="border-t border-zinc-900 pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-amber-900/30"
              >
                {t.navContact}
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
