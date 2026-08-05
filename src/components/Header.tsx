'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import {
  Search,
  Globe,
  Menu,
  X,
  Shield,
  ChevronDown,
  Lock,
  MapPin,
  KeyRound,
  AlertCircle,
  Home,
  Info,
  Trophy,
  FileText,
  Phone,
  ChevronRight
} from 'lucide-react';

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

  // Mobile Accordion Section Expand State
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>('about');

  // Admin Login Modal State
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll ONLY when mobile menu drawer or admin login modal is active
  useEffect(() => {
    if (mobileMenuOpen || showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, showLoginModal]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (dropdownName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  const toggleMobileAccordion = (sectionName: string) => {
    setExpandedMobileSection(prev => (prev === sectionName ? null : sectionName));
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
      about: "About TNSKA",
      districts: "Districts & Academies",
      events: "Events & Results",
      resources: "Media & Resources",
      contact: "Contact",
      cta: "Find Dojo"
    },
    ta: {
      brandTitle: "தமிழ்நாடு மாநில குடோ சங்கம்",
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
      <header ref={headerRef} className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md text-white border-b border-amber-500/20 shadow-2xl w-full">
        
        {/* 1. Top Utility Bar */}
        <div className="min-h-[36px] py-1 bg-zinc-950 px-3 sm:px-6 lg:px-10 text-[11px] border-b border-amber-500/20 flex items-center w-full">
          <div className="w-full flex justify-between items-center gap-2">
            
            {/* Trust Badges Bar */}
            <div className="hidden sm:flex items-center space-x-2 text-amber-300 font-medium truncate">
              <span className="flex items-center gap-1.5 shrink-0 text-[10px] sm:text-xs">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{language === 'en' ? 'SGFI & KIFI Recognized Governing Body' : 'SGFI & KIFI அங்கீகாரம் பெற்ற அமைப்பு'}</span>
              </span>
            </div>

            <div className="sm:hidden flex items-center space-x-1 text-amber-400 font-bold text-[10px]">
              <Shield className="w-3 h-3 shrink-0" />
              <span>TNSKA Official</span>
            </div>

            {/* Right Controls: Admin Button & Language Switcher */}
            <div className="flex items-center space-x-2 shrink-0 ml-auto">
              
              <button
                onClick={handleAdminButtonClick}
                className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-md border transition-all text-[10px] sm:text-[11px] font-bold ${
                  isAdminLoggedIn
                    ? 'text-emerald-400 bg-emerald-950/90 border-emerald-500/50 hover:bg-emerald-900'
                    : 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30'
                }`}
                title={isAdminLoggedIn ? "Open Admin Panel" : "Admin Login Portal"}
              >
                <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{isAdminLoggedIn ? (language === 'en' ? 'Admin' : 'நிர்வாகி') : (language === 'en' ? 'Admin Portal' : 'நிர்வாகி')}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 transition-all font-bold text-[10px] sm:text-xs shrink-0"
                title="Switch Language"
              >
                <Globe className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Header Bar */}
        <div className="w-full px-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px] sm:h-[76px] gap-2 sm:gap-4 w-full">
            
            {/* Column 1: Brand Lockup */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink min-w-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center text-amber-400 font-black text-xs sm:text-base border border-amber-400/40">
                  TN
                </div>
              </div>
              
              <div className="shrink min-w-0">
                <h1 className="text-xs sm:text-sm xl:text-base font-black text-white leading-tight group-hover:text-amber-400 transition-colors truncate max-w-[160px] xs:max-w-[220px] sm:max-w-none">
                  {currentLabels.brandTitle}
                </h1>
                <p className="text-[10px] text-amber-200/80 whitespace-nowrap hidden 2xl:block">
                  {t.associationSub}
                </p>
              </div>
            </div>

            {/* Column 2: Center Navigation (Gapless Hover & Click Dropdowns) */}
            <nav className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4 shrink-0">
              
              {/* Nav 1: About Dropdown */}
              <div 
                className="relative py-2 shrink-0 group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => toggleDropdown('about', e)}
                  aria-expanded={activeDropdown === 'about'}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    currentView === 'about' || activeDropdown === 'about'
                      ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                      : 'text-zinc-200 hover:text-amber-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{currentLabels.about}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {/* Gapless Dropdown Box (pt-1 padding bridge prevents hover gap cutoff) */}
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-amber-500/40 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-md">
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.aboutWhoWeAre}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.aboutHistory}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.aboutMission}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.aboutLeadership}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 2: Districts & Academies */}
              <button
                onClick={() => handleNavClick('districts')}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                  currentView === 'districts' ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30' : 'text-zinc-200 hover:text-amber-300 hover:bg-zinc-900'
                }`}
              >
                {currentLabels.districts}
              </button>

              {/* Nav 3: Events & Results Dropdown */}
              <div 
                className="relative py-2 shrink-0 group"
                onMouseEnter={() => setActiveDropdown('events')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => toggleDropdown('events', e)}
                  aria-expanded={activeDropdown === 'events'}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    currentView === 'events' || currentView === 'achievements' || activeDropdown === 'events'
                      ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                      : 'text-zinc-200 hover:text-amber-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{currentLabels.events}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-200 ${activeDropdown === 'events' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'events' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-amber-500/40 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-md">
                      <button
                        onClick={() => handleNavClick('events')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.navEvents}
                      </button>
                      <button
                        onClick={() => handleNavClick('achievements')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.navAchievements}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 4: Media & Resources Dropdown */}
              <div 
                className="relative py-2 shrink-0 group"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => toggleDropdown('resources', e)}
                  aria-expanded={activeDropdown === 'resources'}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    currentView === 'resources' || currentView === 'media' || currentView === 'faqs' || activeDropdown === 'resources'
                      ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                      : 'text-zinc-200 hover:text-amber-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{currentLabels.resources}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-amber-500/40 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-md">
                      <button
                        onClick={() => handleNavClick('resources')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.navResources}
                      </button>
                      <button
                        onClick={() => handleNavClick('media')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all"
                      >
                        {t.navMedia}
                      </button>
                      <button
                        onClick={() => handleNavClick('faqs')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-amber-500/15 hover:text-amber-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.navFaqs}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 5: Contact Link */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                  currentView === 'contact' ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30' : 'text-zinc-200 hover:text-amber-300 hover:bg-zinc-900'
                }`}
              >
                {currentLabels.contact}
              </button>
            </nav>

            {/* Column 3: Right Action Cluster */}
            <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
              <button
                onClick={onOpenSearch}
                className="p-1.5 sm:p-2 rounded-full text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors"
                aria-label="Search"
                title="Search website"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => handleNavClick('districts')}
                className="hidden sm:flex gold-gradient-bg text-zinc-950 font-black px-3.5 py-2 sm:px-4 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all whitespace-nowrap items-center space-x-1.5 h-9"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{currentLabels.cta}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-amber-300 bg-zinc-900 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Sleek Accordion Drawer System for Mobile & Tablet */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-amber-500/30 px-4 pt-3 pb-8 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
            
            {/* Show CTA button inside drawer ONLY on mobile screens where top bar button is hidden */}
            <div className="sm:hidden pt-1 pb-2">
              <button
                onClick={() => handleNavClick('districts')}
                className="w-full gold-gradient-bg text-zinc-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{t.heroCtaPrimary}</span>
              </button>
            </div>

            {/* Accordion List Cards */}
            <div className="space-y-2">
              
              {/* Home Item */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  currentView === 'home'
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-amber-500/30'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <Home className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.navHome}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              {/* Accordion 1: About TNSKA */}
              <div className="bg-zinc-900/90 border border-amber-500/20 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('about')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-amber-200 hover:bg-amber-500/10 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <Info className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{currentLabels.about}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${expandedMobileSection === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'about' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.aboutWhoWeAre}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.aboutHistory}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.aboutMission}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300 border-t border-zinc-900 pt-2"
                    >
                      {t.aboutLeadership}
                    </button>
                  </div>
                )}
              </div>

              {/* Districts & Academies Item */}
              <button
                onClick={() => handleNavClick('districts')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  currentView === 'districts'
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-amber-500/30'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{currentLabels.districts}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              {/* Accordion 2: Events & Results */}
              <div className="bg-zinc-900/90 border border-amber-500/20 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('events')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-amber-200 hover:bg-amber-500/10 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{currentLabels.events}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${expandedMobileSection === 'events' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'events' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('events')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.navEvents}
                    </button>
                    <button
                      onClick={() => handleNavClick('achievements')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300 border-t border-zinc-900 pt-2"
                    >
                      {t.navAchievements}
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 3: Media & Resources */}
              <div className="bg-zinc-900/90 border border-amber-500/20 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('resources')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-amber-200 hover:bg-amber-500/10 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{currentLabels.resources}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${expandedMobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'resources' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('resources')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.navResources}
                    </button>
                    <button
                      onClick={() => handleNavClick('media')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300"
                    >
                      {t.navMedia}
                    </button>
                    <button
                      onClick={() => handleNavClick('faqs')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:bg-amber-500/15 hover:text-amber-300 border-t border-zinc-900 pt-2"
                    >
                      {t.navFaqs}
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Item */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  currentView === 'contact'
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-amber-500/30'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{currentLabels.contact}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

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
