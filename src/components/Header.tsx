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

  const navLabels = {
    en: {
      about: "About TNSKA",
      districts: "Districts & Academies",
      events: "Events & Results",
      resources: "Media & Resources",
      contact: "Contact Us",
      cta: "Find Dojo"
    },
    ta: {
      about: "எங்களைப் பற்றி",
      districts: "மாவட்டங்கள் & பயிற்றுவிப்பகம்",
      events: "நிகழ்வுகள் & முடிவுகள்",
      resources: "ஊடகம் & வளங்கள்",
      contact: "தொடர்பு கொள்ள",
      cta: "பயிற்றுவிப்பகம்"
    }
  };

  const currentLabels = navLabels[language];

  return (
    <header className="sticky top-0 z-50 glass-header text-white border-b border-amber-900/30 shadow-xl w-full">
      {/* 1. Top Utility Bar (Full Screen Width) */}
      <div className="h-[38px] bg-gradient-to-r from-red-950 via-red-900 to-amber-950 px-4 sm:px-8 lg:px-12 text-xs border-b border-amber-500/20 flex items-center w-full">
        <div className="w-full flex justify-between items-center gap-4">
          
          {/* Trust Badges Bar */}
          <div className="flex items-center space-x-4 text-amber-200/90 font-medium">
            <span className="flex items-center gap-1.5 shrink-0">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.badgeSgfi}</span>
            </span>
            <span className="text-amber-500/40">•</span>
            <span className="flex items-center gap-1 shrink-0">
              <span>{t.badgeKifi}</span>
            </span>
          </div>

          {/* Right Controls: Language Switcher & Admin Indicator */}
          <div className="flex items-center space-x-4 shrink-0">
            {isAdminLoggedIn && (
              <button
                onClick={() => handleNavClick('admin')}
                className="hidden sm:flex items-center space-x-1 text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/40 text-[11px] font-semibold"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Active</span>
              </button>
            )}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30 transition-all font-semibold text-xs"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header (Full Screen Width - Utilizes edge-to-edge space) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[78px] gap-4 xl:gap-8">
          
          {/* Column 1: Full Un-truncated Brand Lockup */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-red-900 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-red-950 rounded-full flex items-center justify-center text-amber-400 font-extrabold text-base border border-amber-400/40">
                TN
              </div>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-amber-100 leading-tight group-hover:text-amber-400 transition-colors whitespace-nowrap">
                {t.associationName}
              </h1>
              <p className="text-[11px] text-amber-200/70 hidden sm:block whitespace-nowrap">
                {t.associationSub}
              </p>
            </div>
          </div>

          {/* Column 2: Spacious Primary Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4">
            
            {/* Nav 1: About Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-sm leading-snug font-medium' : 'text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'about' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.about}</span>
                <ChevronDown className="w-4 h-4 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
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
              className={`px-3 py-2 rounded-md ${
                language === 'ta' ? 'text-sm leading-snug font-medium' : 'text-sm font-semibold'
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
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-sm leading-snug font-medium' : 'text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'events' || currentView === 'achievements' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.events}</span>
                <ChevronDown className="w-4 h-4 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'events' && (
                <div className="absolute top-full left-0 w-60 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
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
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-md ${
                  language === 'ta' ? 'text-sm leading-snug font-medium' : 'text-sm font-semibold'
                } whitespace-nowrap transition-colors ${
                  currentView === 'resources' || currentView === 'media' || currentView === 'faqs' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{currentLabels.resources}</span>
                <ChevronDown className="w-4 h-4 text-amber-400/70 shrink-0" />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-60 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
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
              className={`px-3 py-2 rounded-md ${
                language === 'ta' ? 'text-sm leading-snug font-medium' : 'text-sm font-semibold'
              } whitespace-nowrap transition-colors shrink-0 ${
                currentView === 'contact' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {currentLabels.contact}
            </button>
          </nav>

          {/* Column 3: Actions Cluster (Search Icon + Primary CTA Button) */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-amber-200/90 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
              aria-label="Search"
              title="Search website"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('districts')}
              className="gold-gradient-bg text-red-950 font-extrabold px-4 py-2 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all whitespace-nowrap flex items-center space-x-1.5 h-9"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{currentLabels.cta}</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-200 hover:bg-amber-500/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navHome}
          </button>

          <div className="border-t border-zinc-900 pt-2">
            <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-amber-400/70 block mb-1">
              {t.navAbout}
            </span>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.aboutWhoWeAre}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.aboutLeadership}
            </button>
          </div>

          <div className="border-t border-zinc-900 pt-2">
            <button
              onClick={() => handleNavClick('districts')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
            >
              {t.navDistricts}
            </button>
          </div>

          <div className="border-t border-zinc-900 pt-2">
            <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-amber-400/70 block mb-1">
              {t.navEvents}
            </span>
            <button
              onClick={() => handleNavClick('events')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.navEvents}
            </button>
            <button
              onClick={() => handleNavClick('achievements')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.navAchievements}
            </button>
          </div>

          <div className="border-t border-zinc-900 pt-2">
            <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-amber-400/70 block mb-1">
              {t.navResources}
            </span>
            <button
              onClick={() => handleNavClick('resources')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.navResources}
            </button>
            <button
              onClick={() => handleNavClick('media')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.navMedia}
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-300 hover:bg-amber-900/30"
            >
              {t.navFaqs}
            </button>
          </div>

          <div className="border-t border-zinc-900 pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
            >
              {t.navContact}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('districts')}
              className="w-full gold-gradient-bg text-red-950 font-bold py-2.5 rounded-lg text-sm uppercase tracking-wider shadow-md"
            >
              {t.findAcademy}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
