'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { useTheme } from '@/context/ThemeContext';
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
  ChevronRight,
  Palette,
  BookOpen,
  Check
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, onOpenSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isAdminLoggedIn, loginAdmin } = useAdmin();
  const { theme, setTheme, availableThemes } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  // Mobile Accordion Section Expand State
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>('about');

  // Admin Login Modal State
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setShowThemeMenu(false);
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
      guide: "Kudo Guide",
      districts: "Districts & Academies",
      events: "Events & Results",
      resources: "Media & Resources",
      contact: "Contact",
      cta: "Find Academy"
    },
    ta: {
      brandTitle: "தமிழ்நாடு மாநில குடோ சங்கம்",
      about: "எங்களைப் பற்றி",
      guide: "குடோ கையேடு",
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
      <header ref={headerRef} className="sticky top-0 z-50 glass-header border-b border-theme-subtle shadow-2xl w-full">
        
        {/* 1. Top Utility Bar */}
        <div className="min-h-[36px] py-1 bg-black/40 px-3 sm:px-6 lg:px-10 text-[11px] border-b border-white/5 flex items-center w-full">
          <div className="w-full flex justify-between items-center gap-2">
            
            {/* Trust Badges Bar */}
            <div className="hidden sm:flex items-center space-x-2 text-zinc-300 font-medium truncate">
              <span className="flex items-center gap-1.5 shrink-0 text-[10px] sm:text-xs">
                <Shield className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>{language === 'en' ? 'SGFI & KIFI Recognized Governing Body' : 'SGFI & KIFI அங்கீகாரம் பெற்ற அமைப்பு'}</span>
              </span>
            </div>

            <div className="sm:hidden flex items-center space-x-1 text-rose-400 font-bold text-[10px]">
              <Shield className="w-3 h-3 shrink-0" />
              <span>TNSKA Official</span>
            </div>

            {/* Right Controls: Theme Switcher, Admin Button & Language Switcher */}
            <div className="flex items-center space-x-2 shrink-0 ml-auto">
              
              {/* Theme Switcher Popover */}
              <div className="relative" ref={themeRef}>
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="flex items-center space-x-1 px-2 py-0.5 rounded-md border border-white/10 hover:border-white/20 bg-white/5 text-zinc-300 hover:text-white transition-all text-[10px] sm:text-[11px] font-semibold"
                  title="Switch Color Theme"
                >
                  <Palette className="w-3 h-3 text-rose-400 shrink-0" />
                  <span className="hidden md:inline">Theme</span>
                </button>

                {showThemeMenu && (
                  <div className="absolute top-full right-0 mt-1 z-50 w-48 bg-zinc-950 border border-white/15 rounded-xl shadow-2xl p-1.5 space-y-1 backdrop-blur-xl">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2 py-1">
                      Select Theme
                    </p>
                    {availableThemes.map(tOption => (
                      <button
                        key={tOption.id}
                        onClick={() => {
                          setTheme(tOption.id);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          theme === tOption.id
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                            style={{ backgroundColor: tOption.dotColor }}
                          />
                          <span>{tOption.label}</span>
                        </span>
                        {theme === tOption.id && <Check className="w-3.5 h-3.5 text-rose-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
                <span>{isAdminLoggedIn ? (language === 'en' ? 'Admin' : 'நிர்வாகி') : (language === 'en' ? 'Admin' : 'நிர்வாகி')}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white px-2.5 py-0.5 rounded-full border border-white/10 transition-all font-bold text-[10px] sm:text-xs shrink-0"
                title="Switch Language"
              >
                <Globe className="w-3 h-3 text-rose-400 shrink-0" />
                <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Header Bar */}
        <div className="w-full px-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[64px] gap-2 sm:gap-4 w-full">
            
            {/* Column 1: Brand Lockup */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center text-rose-400 font-black text-xs sm:text-sm border border-rose-400/30">
                  TN
                </div>
              </div>
              
              <div className="shrink min-w-0">
                <h1 className="text-xs sm:text-sm xl:text-base font-black text-white leading-tight group-hover:text-rose-400 transition-colors truncate max-w-[160px] xs:max-w-[220px] sm:max-w-none">
                  {currentLabels.brandTitle}
                </h1>
                <p className="text-[10px] text-zinc-400 whitespace-nowrap hidden 2xl:block">
                  {t.associationSub}
                </p>
              </div>
            </div>

            {/* Column 2: Center Navigation (Gapless Hover & Click Dropdowns) */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-3 shrink-0">
              
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
                      ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30'
                      : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                  }`}
                >
                  <span>{currentLabels.about}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-rose-400 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-rose-500/30 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.aboutWhoWeAre}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.aboutHistory}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.aboutMission}
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.aboutLeadership}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 2: Kudo Guide Dropdown */}
              <div 
                className="relative py-2 shrink-0 group"
                onMouseEnter={() => setActiveDropdown('guide')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => toggleDropdown('guide', e)}
                  aria-expanded={activeDropdown === 'guide'}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    currentView === 'what-is-kudo' || currentView === 'rules' || currentView === 'syllabus' || activeDropdown === 'guide'
                      ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30'
                      : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                  }`}
                >
                  <span>{currentLabels.guide}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-rose-400 transition-transform duration-200 ${activeDropdown === 'guide' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'guide' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-rose-500/30 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('what-is-kudo')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.guideWhatIsKudo}
                      </button>
                      <button
                        onClick={() => handleNavClick('rules')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.guideRules}
                      </button>
                      <button
                        onClick={() => handleNavClick('syllabus')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.guideSyllabus}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 3: Districts & Academies */}
              <button
                onClick={() => handleNavClick('districts')}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                  currentView === 'districts' ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30' : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                }`}
              >
                {currentLabels.districts}
              </button>

              {/* Nav 4: Events & Results Dropdown */}
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
                      ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30'
                      : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                  }`}
                >
                  <span>{currentLabels.events}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-rose-400 transition-transform duration-200 ${activeDropdown === 'events' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'events' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-rose-500/30 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('events')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.navEvents}
                      </button>
                      <button
                        onClick={() => handleNavClick('achievements')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.navAchievements}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 5: Media & Resources Dropdown */}
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
                      ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30'
                      : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                  }`}
                >
                  <span>{currentLabels.resources}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-rose-400 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-1 z-50 w-64">
                    <div className="bg-zinc-950 border border-rose-500/30 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('resources')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.navResources}
                      </button>
                      <button
                        onClick={() => handleNavClick('media')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all"
                      >
                        {t.navMedia}
                      </button>
                      <button
                        onClick={() => handleNavClick('faqs')}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-rose-500/15 hover:text-rose-300 font-bold transition-all border-t border-zinc-900 pt-2"
                      >
                        {t.navFaqs}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav 6: Contact Link */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                  currentView === 'contact' ? 'text-rose-400 bg-rose-500/15 border border-rose-500/30' : 'text-zinc-200 hover:text-rose-300 hover:bg-white/5'
                }`}
              >
                {currentLabels.contact}
              </button>
            </nav>

            {/* Column 3: Right Action Cluster */}
            <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
              <button
                onClick={onOpenSearch}
                className="p-1.5 sm:p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Search"
                title="Search website"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Primary Crimson CTA Button */}
              <button
                onClick={() => handleNavClick('districts')}
                className="hidden sm:flex bg-rose-600 hover:bg-rose-700 text-white font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-rose-600/30 transition-all whitespace-nowrap items-center space-x-1.5 h-9"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{currentLabels.cta}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-zinc-300 bg-zinc-900 border border-white/10 hover:bg-white/10 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Sleek Accordion Drawer System for Mobile & Tablet */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-white/10 px-4 pt-3 pb-8 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
            
            {/* CTA button inside drawer on mobile */}
            <div className="sm:hidden pt-1 pb-2">
              <button
                onClick={() => handleNavClick('districts')}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{currentLabels.cta}</span>
              </button>
            </div>

            {/* Accordion List Cards */}
            <div className="space-y-2">
              
              {/* Home Item */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  currentView === 'home'
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-white/20'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <Home className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{t.navHome}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              {/* Accordion 1: About TNSKA */}
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('about')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-zinc-200 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <Info className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{currentLabels.about}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-rose-400 transition-transform duration-200 ${expandedMobileSection === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'about' && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.aboutWhoWeAre}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.aboutHistory}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.aboutMission}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.aboutLeadership}
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 2: Kudo Guide */}
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('guide')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-zinc-200 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <BookOpen className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{currentLabels.guide}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-rose-400 transition-transform duration-200 ${expandedMobileSection === 'guide' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'guide' && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('what-is-kudo')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.guideWhatIsKudo}
                    </button>
                    <button
                      onClick={() => handleNavClick('rules')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.guideRules}
                    </button>
                    <button
                      onClick={() => handleNavClick('syllabus')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.guideSyllabus}
                    </button>
                  </div>
                )}
              </div>

              {/* Districts Item */}
              <button
                onClick={() => handleNavClick('districts')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  currentView === 'districts'
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-white/20'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{currentLabels.districts}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              {/* Accordion 3: Events & Results */}
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('events')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-zinc-200 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <Trophy className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{currentLabels.events}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-rose-400 transition-transform duration-200 ${expandedMobileSection === 'events' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'events' && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('events')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.navEvents}
                    </button>
                    <button
                      onClick={() => handleNavClick('achievements')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.navAchievements}
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 4: Media & Resources */}
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleMobileAccordion('resources')}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-zinc-200 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{currentLabels.resources}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-rose-400 transition-transform duration-200 ${expandedMobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {expandedMobileSection === 'resources' && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-zinc-800/80 bg-zinc-950/60">
                    <button
                      onClick={() => handleNavClick('resources')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.navResources}
                    </button>
                    <button
                      onClick={() => handleNavClick('media')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
                    >
                      {t.navMedia}
                    </button>
                    <button
                      onClick={() => handleNavClick('faqs')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-rose-300 font-medium"
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
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-white/20'
                }`}
              >
                <span className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{currentLabels.contact}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

            </div>
          </div>
        )}

      </header>

      {/* Admin Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 animate-fadeIn">
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                <KeyRound className="w-4 h-4" />
                <span>{language === 'en' ? 'TNSKA Secretariat Auth' : 'நிர்வாக அங்கீகாரம்'}</span>
              </div>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white">
                {language === 'en' ? 'Administrative Portal' : 'நிர்வாகிகள் போர்டல்'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {language === 'en'
                  ? 'Enter official passcode to access state content publishing tools.'
                  : 'மாநில உள்ளடக்கத்தை நிர்வகிக்க கடவுச்சொல்லை உள்ளிடவும்.'}
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-all"
                  autoFocus
                />
                {loginError && (
                  <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Incorrect passcode. Try again.' : 'தவறான கடவுச்சொல்.'}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                {language === 'en' ? 'Authenticate & Enter' : 'உள்நுழையவும்'}
              </button>
            </form>

            <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-[11px] text-zinc-400 text-center">
              {language === 'en' ? 'Demo Passcode:' : 'டெமோ கடவுச்சொல்:'} <code className="text-rose-300 font-bold">kudo2026</code>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
