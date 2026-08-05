'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Search, Globe, Menu, X, Shield, ChevronDown, Lock, MapPin, KeyRound, AlertCircle } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, onOpenSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isAdminLoggedIn, loginAdmin } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Admin Login Modal State
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminButtonClick = () => {
    if (isAdminLoggedIn) {
      handleNavClick('admin');
    } else {
      setShowLoginModal(true);
      setLoginError(false);
      setPasscode('');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (success) {
      setShowLoginModal(false);
      setPasscode('');
      setLoginError(false);
      handleNavClick('admin');
    } else {
      setLoginError(true);
    }
  };

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
      events: "நிகழ்வுகள்",
      resources: "வளங்கள்",
      contact: "தொடர்பு",
      cta: "பயிற்றுவிப்பகம்"
    }
  };

  const currentLabels = navLabels[language];

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md text-white border-b border-amber-500/20 shadow-2xl w-full">
        
        {/* 1. Top Utility Bar (Sleek Obsidian & Pure Gold Accent) */}
        <div className="min-h-[36px] py-1 bg-zinc-950 px-3 sm:px-6 lg:px-10 text-[11px] border-b border-amber-500/20 flex items-center w-full">
          <div className="w-full flex justify-between items-center gap-2">
            
            {/* Trust Badges Bar */}
            <div className="flex items-center space-x-2 sm:space-x-4 text-amber-300 font-medium truncate">
              <span className="flex items-center gap-1.5 shrink-0 text-[10px] sm:text-xs">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{language === 'en' ? 'SGFI & KIFI Recognized Governing Body' : 'SGFI & KIFI அங்கீகாரம் பெற்ற அமைப்பு'}</span>
              </span>
            </div>

            {/* Right Controls: Admin Button & Language Switcher */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              
              {/* Always-Visible Admin Button */}
              <button
                onClick={handleAdminButtonClick}
                className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-md border transition-all text-[11px] font-bold ${
                  isAdminLoggedIn
                    ? 'text-emerald-400 bg-emerald-950/90 border-emerald-500/50 hover:bg-emerald-900'
                    : 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30'
                }`}
                title={isAdminLoggedIn ? "Open Admin Panel" : "Admin Login Portal"}
              >
                <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{isAdminLoggedIn ? (language === 'en' ? 'Admin Active' : 'நிர்வாகி செயலில்') : (language === 'en' ? 'Admin Portal' : 'நிர்வாகி')}</span>
              </button>

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

        {/* 2. Main Navigation Header Bar */}
        <div className="w-full px-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[76px] gap-4 xl:gap-8 w-full">
            
            {/* Column 1: Brand Lockup */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center text-amber-400 font-black text-xs sm:text-base border border-amber-400/40">
                  TN
                </div>
              </div>
              
              <div className="shrink-0">
                <h1 className="text-xs sm:text-sm xl:text-base font-black text-white leading-tight group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  {currentLabels.brandTitle}
                </h1>
                <p className="text-[10px] text-amber-200/80 whitespace-nowrap hidden 2xl:block">
                  {t.associationSub}
                </p>
              </div>
            </div>

            {/* Column 2: Center Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4 shrink-0">
              
              {/* Nav 1: About Dropdown */}
              <div 
                className="relative shrink-0"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center space-x-1 px-2.5 xl:px-3 py-2 rounded-md ${
                    language === 'ta' ? 'text-xs xl:text-sm font-semibold' : 'text-xs xl:text-sm font-semibold'
                  } whitespace-nowrap transition-colors ${
                    currentView === 'about' ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-200 hover:text-amber-300'
                  }`}
                >
                  <span>{currentLabels.about}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 w-56 bg-zinc-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.aboutWhoWeAre}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.aboutHistory}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.aboutMission}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
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
                  language === 'ta' ? 'text-xs xl:text-sm font-semibold' : 'text-xs xl:text-sm font-semibold'
                } whitespace-nowrap transition-colors shrink-0 ${
                  currentView === 'districts' ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-200 hover:text-amber-300'
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
                    language === 'ta' ? 'text-xs xl:text-sm font-semibold' : 'text-xs xl:text-sm font-semibold'
                  } whitespace-nowrap transition-colors ${
                    currentView === 'events' || currentView === 'achievements' ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-200 hover:text-amber-300'
                  }`}
                >
                  <span>{currentLabels.events}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                </button>

                {activeDropdown === 'events' && (
                  <div className="absolute top-full left-0 w-56 bg-zinc-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                    <button
                      onClick={() => handleNavClick('events')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.navEvents}
                    </button>
                    <button
                      onClick={() => handleNavClick('achievements')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
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
                    language === 'ta' ? 'text-xs xl:text-sm font-semibold' : 'text-xs xl:text-sm font-semibold'
                  } whitespace-nowrap transition-colors ${
                    currentView === 'resources' || currentView === 'media' || currentView === 'faqs' ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-200 hover:text-amber-300'
                  }`}
                >
                  <span>{currentLabels.resources}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 w-56 bg-zinc-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-500/20 py-2 mt-1 z-50">
                    <button
                      onClick={() => handleNavClick('resources')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.navResources}
                    </button>
                    <button
                      onClick={() => handleNavClick('media')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
                    >
                      {t.navMedia}
                    </button>
                    <button
                      onClick={() => handleNavClick('faqs')}
                      className="w-full text-left px-4 py-2.5 text-xs text-zinc-200 hover:bg-amber-500/10 hover:text-amber-300"
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
                  language === 'ta' ? 'text-xs xl:text-sm font-semibold' : 'text-xs xl:text-sm font-semibold'
                } whitespace-nowrap transition-colors shrink-0 ${
                  currentView === 'contact' ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-200 hover:text-amber-300'
                }`}
              >
                {currentLabels.contact}
              </button>
            </nav>

            {/* Column 3: Right Action Cluster */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-full text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors"
                aria-label="Search"
                title="Search website"
              >
                <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </button>

              {/* Primary CTA Button */}
              <button
                onClick={() => handleNavClick('districts')}
                className="hidden sm:flex gold-gradient-bg text-zinc-950 font-black px-3 py-2 sm:px-4 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all whitespace-nowrap items-center space-x-1.5 h-9"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{currentLabels.cta}</span>
              </button>

              {/* Mobile Hamburger Trigger */}
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
                className="w-full gold-gradient-bg text-zinc-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.heroCtaPrimary}</span>
              </button>
            </div>

            <div className="space-y-1 pt-2">
              <button
                onClick={() => handleNavClick('home')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-zinc-900"
              >
                {t.navHome}
              </button>

              <div className="border-t border-zinc-900 pt-2">
                <span className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-400/80 block mb-1">
                  {t.navAbout}
                </span>
                <button
                  onClick={() => handleNavClick('about')}
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.aboutWhoWeAre}
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.aboutLeadership}
                </button>
              </div>

              <div className="border-t border-zinc-900 pt-2">
                <button
                  onClick={() => handleNavClick('districts')}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-zinc-900"
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
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.navEvents}
                </button>
                <button
                  onClick={() => handleNavClick('achievements')}
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
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
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.navResources}
                </button>
                <button
                  onClick={() => handleNavClick('media')}
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.navMedia}
                </button>
                <button
                  onClick={() => handleNavClick('faqs')}
                  className="block w-full text-left px-3 py-2 rounded-md text-xs font-medium text-zinc-300 hover:bg-zinc-900"
                >
                  {t.navFaqs}
                </button>
              </div>

              <div className="border-t border-zinc-900 pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-amber-200 hover:bg-zinc-900"
                >
                  {t.navContact}
                </button>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* 4. ADMIN LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300/40 flex items-center justify-center text-zinc-950 font-black mx-auto shadow-lg">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-amber-100">
                {language === 'en' ? 'TNSKA Admin Portal Login' : 'TNSKA நிர்வாகி உள்நுழைவு'}
              </h3>
              <p className="text-xs text-zinc-300">
                {language === 'en'
                  ? 'Enter the official state administrator passcode to access CMS management.'
                  : 'CMS மேலாண்மைக்கான அதிகாரப்பூர்வ கடவுச்சொல்லை உள்ளிடவும்.'}
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-amber-200/90 mb-1">
                  {language === 'en' ? 'Admin Passcode' : 'நிர்வாகி கடவுச்சொல்'}
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter passcode (e.g. kudo2026)"
                  className="w-full bg-zinc-900 border border-amber-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  autoFocus
                />
              </div>

              {loginError && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-950/60 p-3 rounded-xl border border-red-500/30 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'en'
                      ? 'Invalid passcode. Try "kudo2026" or "admin".'
                      : 'தவறான கடவுச்சொல். "kudo2026" அல்லது "admin" முயற்சிக்கவும்.'}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full gold-gradient-bg text-zinc-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
              >
                {language === 'en' ? 'Authenticate & Enter Admin' : 'உள்நுழையவும்'}
              </button>
            </form>

            <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-[11px] text-zinc-300 text-center">
              💡 {language === 'en' ? 'Demo Passcode:' : 'டெமோ கடவுச்சொல்:'} <code className="text-amber-300 font-bold">kudo2026</code>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
