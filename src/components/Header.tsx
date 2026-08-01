'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Search, Globe, Menu, X, Shield, ChevronDown, Lock } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 glass-header text-white border-b border-amber-900/30 shadow-lg">
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 px-4 py-1.5 text-xs border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 text-amber-200/90 font-medium">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              {t.badgeSgfi}
            </span>
            <span className="hidden sm:inline text-amber-500/40">•</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              {t.badgeKifi}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 transition-all text-xs font-semibold"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Quick Admin Indicator if logged in */}
            {isAdminLoggedIn && (
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center space-x-1 text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 text-[11px]"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Active</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Lockup */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-red-900 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-red-950 rounded-full flex items-center justify-center text-amber-400 font-extrabold text-lg border border-amber-400/40">
                TN
              </div>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-amber-100 leading-tight group-hover:text-amber-400 transition-colors">
                {t.associationName}
              </h1>
              <p className="text-[11px] text-amber-200/70 hidden sm:block">
                {t.associationSub}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'home' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navHome}
            </button>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'about' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
                }`}
              >
                <span>{t.navAbout}</span>
                <ChevronDown className="w-4 h-4 text-amber-400/70" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-56 bg-zinc-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutWhoWeAre}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutHistory}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutMission}
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    {t.aboutLeadership}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('districts')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'districts' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navDistricts}
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'events' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navEvents}
            </button>

            <button
              onClick={() => handleNavClick('achievements')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'achievements' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navAchievements}
            </button>

            <button
              onClick={() => handleNavClick('resources')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'resources' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navResources}
            </button>

            <button
              onClick={() => handleNavClick('media')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'media' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navMedia}
            </button>

            <button
              onClick={() => handleNavClick('faqs')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'faqs' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navFaqs}
            </button>

            {/* Added Standalone Contact Link per Senior Review */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'contact' ? 'text-amber-400 bg-amber-500/10' : 'text-gray-200 hover:text-amber-300'
              }`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Action Buttons: Search & Primary CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-amber-200/80 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('districts')}
              className="gold-gradient-bg text-red-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
            >
              {t.findAcademy}
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-amber-200 hover:bg-amber-500/10"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-amber-200 hover:bg-amber-500/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navHome}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navAbout}
          </button>
          <button
            onClick={() => handleNavClick('districts')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navDistricts}
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navEvents}
          </button>
          <button
            onClick={() => handleNavClick('achievements')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navAchievements}
          </button>
          <button
            onClick={() => handleNavClick('resources')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navResources}
          </button>
          <button
            onClick={() => handleNavClick('media')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navMedia}
          </button>
          <button
            onClick={() => handleNavClick('faqs')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navFaqs}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:bg-amber-900/30"
          >
            {t.navContact}
          </button>

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
