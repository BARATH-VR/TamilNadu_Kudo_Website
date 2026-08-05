'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, MapPin, Award, ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  const { language, t } = useLanguage();

  return (
    <div className="relative bg-zinc-950 text-white pt-12 pb-20 overflow-hidden border-b border-amber-500/20 w-full">
      
      {/* Brilliant Pure Gold Radial Aura Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/12 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-8 text-left">
          
          {/* Badge pill */}
          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 shadow-lg backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Meaningful Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
            {language === 'en' ? (
              <>
                Building Champions, Fostering Discipline & <span className="gold-gradient-text">Excellence in Kudo</span>
              </>
            ) : (
              <>
                தமிழ்நாட்டில் ஒழுக்கம், பாதுகாப்பு மற்றும் <span className="gold-gradient-text">குடோ விளையாட்டுச் சிறப்பை</span> உருவாக்குதல்
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
            {t.heroSubtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
            <button
              onClick={() => {
                setCurrentView('districts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto gold-gradient-bg text-zinc-950 font-black px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl hover:brightness-110 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.heroCtaPrimary}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-zinc-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 backdrop-blur-md shadow-lg"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{t.heroCtaSecondary}</span>
            </button>
          </div>

          {/* 3 STAT COUNTER CARDS (Moved directly below Action Buttons as requested) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl pt-2">
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-amber-500/20 text-center shadow-lg hover:border-amber-400/40 transition-all">
              <span className="text-xl sm:text-3xl font-black text-amber-400 block">14+</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'Districts' : 'மாவட்டங்கள்'}
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-amber-500/20 text-center shadow-lg hover:border-amber-400/40 transition-all">
              <span className="text-xl sm:text-3xl font-black text-amber-400 block">3,500+</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'Athletes' : 'வீரர்கள்'}
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-amber-500/20 text-center shadow-lg hover:border-amber-400/40 transition-all">
              <span className="text-xl sm:text-3xl font-black text-amber-400 block">24</span>
              <p className="text-[10px] sm:text-xs text-zinc-300 uppercase font-bold tracking-wider mt-1">
                {language === 'en' ? 'National Medals' : 'தேசிய பதக்கங்கள்'}
              </p>
            </div>
          </div>

          {/* Recognition Badge Strip */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap gap-6 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400"></div>
              <span className="font-semibold">{t.badgeSgfi}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400"></div>
              <span className="font-semibold">{t.badgeKifi}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400"></div>
              <span className="font-semibold">{t.badgeKifJapan}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
