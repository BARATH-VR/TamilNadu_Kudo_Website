'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Hero } from './Hero';
import { TrustChain } from './TrustChain';
import {
  ShieldCheck,
  Award,
  Calendar,
  MapPin,
  ArrowRight,
  FileText,
  CheckCircle2,
  Users,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  onOpenLightbox: (idx: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentView, onOpenLightbox }) => {
  const { language, t } = useLanguage();
  const { achievements, events, news } = useAdmin();

  const featuredEvent = events.find(e => e.isUpcoming) || events[0];
  const highlightAchievements = achievements.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Banner */}
      <Hero setCurrentView={setCurrentView} />

      {/* 2. Featured Event Banner */}
      {featuredEvent && (
        <section className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 border-y border-amber-500/30 py-4 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <span className="bg-amber-500 text-red-950 font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md shrink-0">
                {t.noticeTitle}
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-amber-200">
                  {language === 'en' ? featuredEvent.titleEn : featuredEvent.titleTa}
                </h4>
                <p className="text-[11px] text-amber-100/70">
                  {featuredEvent.date} • {featuredEvent.venueEn}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentView('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="gold-gradient-bg text-red-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider shadow-md hover:brightness-110 shrink-0"
            >
              {t.viewDetails}
            </button>
          </div>
        </section>
      )}

      {/* 3. Trust Lineage Trail */}
      <TrustChain />

      {/* 4. About Kudo Section */}
      <section className="py-20 bg-zinc-950 text-white border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {language === 'en' ? 'Budo Discipline & Safety' : 'பாதுகாப்பு & ஒழக்கம்'}
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 leading-tight">
                {t.whatIsKudoTitle}
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.whatIsKudoDesc}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 bg-zinc-900/80 p-4 rounded-2xl border border-amber-500/20">
                  <div className="w-9 h-9 rounded-xl maroon-gradient-bg flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-200">{t.featureSafety}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{t.featureSafetyDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-zinc-900/80 p-4 rounded-2xl border border-amber-500/20">
                  <div className="w-9 h-9 rounded-xl gold-gradient-bg flex items-center justify-center text-red-950 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-200">{t.featureDiscipline}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{t.featureDisciplineDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-red-950 to-zinc-900 p-6 rounded-3xl border border-amber-500/30 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
                  alt="Kudo Training"
                  className="rounded-2xl w-full h-80 object-cover border border-amber-400/30"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 text-center">
                  <p className="text-xs font-bold text-amber-300">
                    {language === 'en' ? 'Official KIFI & SGFI School Games Pathway' : 'அதிகாரப்பூர்வ SGFI பள்ளி விளையாட்டுப் பாதை'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Achievement Highlights */}
      <section className="py-20 bg-zinc-900 text-white border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {t.navAchievements}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mt-3">
                {t.achievementsTitle}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('achievements');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
            >
              <span>{language === 'en' ? 'View All Achievements' : 'அனைத்து சாதனைகளையும் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightAchievements.map(ach => (
              <div key={ach.id} className="bg-zinc-950 border border-amber-500/20 rounded-2xl overflow-hidden card-hover space-y-3 p-5">
                <img src={ach.image} alt={ach.titleEn} className="w-full h-40 object-cover rounded-xl border border-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {ach.level} • {ach.year}
                  </span>
                  <span className="text-xs">🥇 {ach.medal}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-100">
                  {language === 'en' ? ach.titleEn : ach.titleTa}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {language === 'en' ? ach.descriptionEn : ach.descriptionTa}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Latest News & Announcements */}
      <section className="py-20 bg-zinc-950 text-white border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {t.categoryCirculars}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mt-3">
                {language === 'en' ? 'Latest News & Official Notices' : 'சமீபத்திய செய்திகள் & சுற்றறிக்கைகள்'}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
            >
              <span>{language === 'en' ? 'View All Notices' : 'அனைத்து சுற்றறிக்கைகளையும் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(nw => (
              <div key={nw.id} className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 space-y-3 card-hover">
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {nw.categoryEn}
                </span>
                <span className="text-xs text-gray-500 block">{nw.date}</span>
                <h4 className="text-sm font-bold text-amber-100">
                  {language === 'en' ? nw.titleEn : nw.titleTa}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {language === 'en' ? nw.excerptEn : nw.excerptTa}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-20 bg-zinc-900 text-white border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {t.navMedia}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mt-3">
                {language === 'en' ? 'State Tournament Gallery Preview' : 'போட்டி புகைப்படங்கள்'}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('media');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
            >
              <span>{language === 'en' ? 'View Full Gallery' : 'முழு புகைப்பட தொகுப்பைப் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1561532325-7d5231a2dede?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
            ].map((url, i) => (
              <div
                key={i}
                onClick={() => onOpenLightbox(i)}
                className="aspect-square rounded-2xl overflow-hidden border border-amber-500/20 cursor-pointer card-hover"
              >
                <img src={url} alt="Kudo Action" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Call to Action Band */}
      <section className="py-16 maroon-gradient-bg border-t border-amber-500/30 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-amber-100">
            {language === 'en' ? 'Join the Official Kudo Movement in Tamil Nadu' : 'தமிழ்நாடு குடோ இயக்கத்தில் இணையுங்கள்'}
          </h2>
          <p className="text-xs sm:text-base text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Locate a certified training dojo in your district or contact the state secretariat for affiliation inquiry.'
              : 'உங்கள் மாவட்டத்தில் உள்ள சான்றளிக்கப்பட்ட பயிற்றுவிப்பகத்தைக் கண்டறியவும் அல்லது செயலகத்தை தொடர்பு கொள்ளவும்.'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => {
                setCurrentView('districts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto gold-gradient-bg text-red-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-xl hover:brightness-110"
            >
              {t.heroCtaPrimary}
            </button>

            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-zinc-900/80 border border-amber-500/40 text-amber-200 hover:bg-amber-500/10 font-semibold px-8 py-3.5 rounded-xl text-xs"
            >
              {t.navContact}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
