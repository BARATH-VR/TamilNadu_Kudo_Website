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
    <div className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-red-950 text-white pt-12 pb-24 overflow-hidden border-b border-amber-900/30 w-full">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge pill */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-red-900/40 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 shadow-md">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-amber-100 leading-tight tracking-tight">
              {language === 'en' ? (
                <>
                  Official Governing Body of <span className="gold-gradient-text">Kudo</span> in Tamil Nadu
                </>
              ) : (
                <>
                  தமிழ்நாட்டில் <span className="gold-gradient-text">குடோ</span> விளையாட்டுக்கான அதிகாரப்பூர்வ அமைப்பு
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setCurrentView('districts');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto gold-gradient-bg text-red-950 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4.5 h-4.5" />
                <span>{t.heroCtaPrimary}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-zinc-900/80 border border-amber-500/40 text-amber-200 hover:bg-amber-500/10 font-semibold px-7 py-4 rounded-xl text-sm transition-all flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{t.heroCtaSecondary}</span>
              </button>
            </div>

            {/* Recognition Badge Strip */}
            <div className="pt-6 border-t border-amber-900/30 flex flex-wrap justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="font-semibold">{t.badgeSgfi}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="font-semibold">{t.badgeKifi}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="font-semibold">{t.badgeKifJapan}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glassmorphic Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-amber-500/30 via-red-900/40 to-zinc-900 border border-amber-500/40 shadow-2xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10">
                  <img
                    src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80"
                    alt="Tamil Nadu Kudo Athletes in Action with Head Protector"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-md rounded-xl p-3.5 border border-amber-500/30 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg maroon-gradient-bg flex items-center justify-center text-amber-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-200">
                        {language === 'en' ? 'Neo-Head Protector Super Safe Guard' : 'சூப்பர் சேஃப் தலைக்கவச பாதுகாப்பு'}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {language === 'en' ? 'Patented safety gear approved for sub-juniors & youth' : 'சிறுவர் மற்றும் இளைஞர்களுக்கான சான்றளிக்கப்பட்ட பாதுகாப்பு'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Counters Overlay Card */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-zinc-900/90 rounded-xl p-3.5 border border-amber-500/20 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-amber-400">14+</span>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold">
                    {language === 'en' ? 'Districts' : 'மாவட்டங்கள்'}
                  </p>
                </div>
                <div className="bg-zinc-900/90 rounded-xl p-3.5 border border-amber-500/20 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-amber-400">3,500+</span>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold">
                    {language === 'en' ? 'Athletes' : 'வீரர்கள்'}
                  </p>
                </div>
                <div className="bg-zinc-900/90 rounded-xl p-3.5 border border-amber-500/20 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-amber-400">24</span>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold">
                    {language === 'en' ? 'National Medals' : 'தேசிய பதக்கங்கள்'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
