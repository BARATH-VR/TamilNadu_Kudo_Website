'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, MapPin, ChevronRight, BookOpen, Award } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  const { language, t } = useLanguage();

  return (
    <div className="relative bg-theme-main text-theme-main pt-10 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-white/10 w-full max-w-[100vw]">
      
      {/* Dynamic Radial Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[600px] sm:h-[950px] bg-rose-600/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 flex flex-col items-center">
          
          {/* Official Kicker Badge */}
          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-rose-500/30 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-rose-300 shadow-lg backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.12] tracking-tight max-w-4xl px-2">
            {language === 'en' ? (
              <>
                Building Champions, Fostering Discipline & <span className="crimson-gradient-text">Excellence in Kudo</span>
              </>
            ) : (
              <>
                தமிழ்நாட்டில் ஒழுக்கம், பாதுகாப்பு மற்றும் <span className="crimson-gradient-text">குடோ விளையாட்டுச் சிறப்பை</span> உருவாக்குதல்
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal px-2">
            {t.heroSubtitle}
          </p>

          {/* High-Intent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto px-4">
            <button
              onClick={() => {
                setCurrentView('districts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl hover:shadow-rose-600/30 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{t.heroCtaPrimary}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={() => {
                setCurrentView('rules');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-zinc-900 border border-white/15 text-zinc-200 hover:bg-white/10 hover:text-white font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 backdrop-blur-md shadow-lg"
            >
              <BookOpen className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{language === 'en' ? 'Competition Rules & Scoring' : 'போட்டி விதிகள்'}</span>
            </button>
          </div>

          {/* 4-COLUMN TABULAR METRIC RIBBON */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 px-2">
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-center shadow-xl hover:border-rose-500/40 transition-all card-hover">
              <span className="text-2xl sm:text-4xl font-black text-rose-400 block font-mono">14+</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'Affiliated Districts' : 'மாவட்டங்கள்'}
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-center shadow-xl hover:border-rose-500/40 transition-all card-hover">
              <span className="text-2xl sm:text-4xl font-black text-rose-400 block font-mono">3,500+</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'Athletes' : 'வீரர்கள்'}
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-center shadow-xl hover:border-rose-500/40 transition-all card-hover">
              <span className="text-2xl sm:text-4xl font-black text-rose-400 block font-mono">24</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'National Medals' : 'தேசிய பதக்கங்கள்'}
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-center shadow-xl hover:border-rose-500/40 transition-all card-hover">
              <span className="text-2xl sm:text-4xl font-black text-emerald-400 block font-mono">100%</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'Headgear Safety' : 'பாதுகாப்பு கவசம்'}
              </p>
            </div>
          </div>

          {/* Context Lineage Trust Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400 w-full px-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 shadow-sm shadow-rose-500"></div>
              <span className="font-semibold text-zinc-300">{t.badgeSgfi}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400"></div>
              <span className="font-semibold text-zinc-300">{t.badgeKifi}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-rose-400 shadow-sm shadow-rose-400"></div>
              <span className="font-semibold text-zinc-300">{t.badgeKifJapan}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
