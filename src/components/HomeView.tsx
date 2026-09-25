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
  User,
  Quote,
  Building2,
  Send,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Trophy
} from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  onOpenLightbox: (idx: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentView, onOpenLightbox }) => {
  const { language, t } = useLanguage();
  const { achievements, events, news, committee } = useAdmin();

  const featuredEvent = events.find(e => e.isUpcoming) || events[0];
  const highlightAchievements = achievements.slice(0, 3);
  const latestNews = news.slice(0, 3);
  const president = committee.find(c => c.order === 1) || committee[0];
  const secretary = committee.find(c => c.order === 2) || committee[1];

  return (
    <div className="space-y-0 w-full max-w-[100vw] overflow-x-hidden bg-theme-main text-theme-main">
      
      {/* 1. Hero Banner with Tabular Metric Ribbon */}
      <Hero setCurrentView={setCurrentView} />

      {/* 2. Featured Event Announcement Ticker */}
      {featuredEvent && (
        <section className="bg-zinc-950 border-y border-white/10 py-4 px-4 sm:px-8 lg:px-12 text-white w-full backdrop-blur-md shadow-xl">
          <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <span className="bg-rose-600 text-white font-black text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-md shrink-0 shadow-md">
                {t.noticeTitle}
              </span>
              <div className="w-full">
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {language === 'en' ? featuredEvent.titleEn : featuredEvent.titleTa}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                  {featuredEvent.date} • {featuredEvent.venueEn}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentView('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full md:w-auto bg-white/5 hover:bg-rose-600/20 text-rose-300 border border-rose-500/40 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 transition-all"
            >
              {t.viewDetails}
            </button>
          </div>
        </section>
      )}

      {/* 3. Three Pillars Bento Grid (Section 4.3 of UI Spec) */}
      <section className="py-16 sm:py-20 bg-theme-surface border-b border-white/10 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
              {language === 'en' ? 'Pillars of the Sport' : 'குடோ விளையாட்டுத் தூண்கள்'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {language === 'en' ? 'Discipline, Safety & Championship Glory' : 'ஒழுக்கம், பாதுகாப்பு & சாம்பியன்ஷிப் சிறப்பு'}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Bento Card 1: Championship Glory */}
            <div className="bg-zinc-950 border border-white/10 hover:border-rose-500/50 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shadow-md group-hover:scale-105 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Championship Glory' : 'தேசிய & சர்வதேச வெற்றிகள்'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {language === 'en'
                    ? 'State athletes regularly compete at KIFI National Championships, SGFI School Games, and KIF World Cup podiums in Japan.'
                    : 'தமிழ்நாடு வீரர்கள் தேசிய போட்டிகள், SGFI பள்ளி விளையாட்டு மற்றும் ஜப்பான் உலகக் கோப்பையில் சிறந்து விளங்குகின்றனர்.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentView('achievements');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="pt-2 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1.5 transition-colors"
              >
                <span>{language === 'en' ? 'Explore State Medalists' : 'பதக்கப் பட்டியல்'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bento Card 2: Dan Certification & Belt Syllabus */}
            <div className="bg-zinc-950 border border-white/10 hover:border-rose-500/50 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold shadow-md group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {language === 'en' ? 'Standardized Dan Syllabus' : 'பெல்ட் தரவரிசை பாடத்திட்டம்'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {language === 'en'
                    ? 'Authentic Japanese grading system strictly governed by KIF Japan rules, ensuring recognized Black Belt certification worldwide.'
                    : 'ஜப்பான் சர்வதேச விதிகளின்படி அங்கீகரிக்கப்பட்ட தகுதியான பிளாக் பெல்ட் சான்றிதழ் முறை.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentView('syllabus');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="pt-2 text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1.5 transition-colors"
              >
                <span>{language === 'en' ? 'View Grading Syllabus' : 'பாடத்திட்டம் பார்க்க'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bento Card 3: Zero Injury Mandate */}
            <div className="bg-zinc-950 border border-white/10 hover:border-rose-500/50 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shadow-md group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {language === 'en' ? 'Zero Injury Mandate' : 'முழுமையான பாதுகாப்பு கவசம்'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {language === 'en'
                    ? 'Patented SuperSafe face shield armor allows full-contact realism with absolute protection for school students and youth.'
                    : 'காப்புரிமை பெற்ற முகக்கவசம் மூலம் காயங்கள் இன்றி தற்காப்புக் கலை பயிற்சி பெற முடிகிறது.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentView('what-is-kudo');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="pt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1.5 transition-colors"
              >
                <span>{language === 'en' ? 'Learn What is Kudo' : 'குடோ பற்றி அறிய'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Institutional Lineage Trust Chain */}
      <TrustChain />

      {/* 5. Executive Leadership Messages Section */}
      <section className="py-16 sm:py-20 bg-theme-surface border-b border-white/10 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
              {t.aboutLeadership}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {language === 'en' ? 'State Association Leadership Message' : 'மாநில சங்கத் தலைவர்களின் உரை'}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* President Card */}
            {president && (
              <div className="bg-zinc-950 border border-white/10 hover:border-rose-500/40 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl transition-all">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white/5 absolute top-6 right-6" />
                <div className="flex items-center space-x-4">
                  <img
                    src={president.image}
                    alt={president.nameEn}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-rose-500 shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {language === 'en' ? president.nameEn : president.nameTa}
                    </h3>
                    <p className="text-xs text-rose-400 font-bold">
                      {language === 'en' ? president.roleEn : president.roleTa}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{language === 'en' ? president.bioEn : president.bioTa}"
                </p>
              </div>
            )}

            {/* General Secretary Card */}
            {secretary && (
              <div className="bg-zinc-950 border border-white/10 hover:border-rose-500/40 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl transition-all">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white/5 absolute top-6 right-6" />
                <div className="flex items-center space-x-4">
                  <img
                    src={secretary.image}
                    alt={secretary.nameEn}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-rose-500 shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {language === 'en' ? secretary.nameEn : secretary.nameTa}
                    </h3>
                    <p className="text-xs text-rose-400 font-bold">
                      {language === 'en' ? secretary.roleEn : secretary.roleTa}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{language === 'en' ? secretary.bioEn : secretary.bioTa}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Achievement Highlights */}
      <section className="py-16 sm:py-20 bg-theme-main border-b border-white/10 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block mb-1">
                {t.navAchievements}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {t.achievementsTitle}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('achievements');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1 transition-colors"
            >
              <span>{language === 'en' ? 'View All Achievements' : 'அனைத்து சாதனைகளையும் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightAchievements.map(ach => (
              <div key={ach.id} className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden card-hover space-y-3 p-5 shadow-lg">
                <img src={ach.image} alt={ach.titleEn} className="w-full h-40 object-cover rounded-xl border border-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {ach.level} • {ach.year}
                  </span>
                  <span className="text-xs font-bold">🥇 {ach.medal}</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {language === 'en' ? ach.titleEn : ach.titleTa}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {language === 'en' ? ach.descriptionEn : ach.descriptionTa}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Latest News & Official Announcements */}
      <section className="py-16 sm:py-20 bg-theme-surface border-b border-white/10 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block mb-1">
                {t.categoryCirculars}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {language === 'en' ? 'Latest News & Official Notices' : 'சமீபத்திய செய்திகள் & சுற்றறிக்கைகள்'}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1 transition-colors"
            >
              <span>{language === 'en' ? 'View Document Vault' : 'அனைத்து ஆவணங்கள்'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(item => (
              <div key={item.id} className="bg-zinc-950 border border-white/10 rounded-2xl p-6 space-y-4 card-hover shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-zinc-400">
                    <span className="bg-rose-500/10 text-rose-300 border border-rose-500/20 px-2 py-0.5 rounded font-bold">
                      {language === 'en' ? item.categoryEn : item.categoryTa}
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {language === 'en' ? item.titleEn : item.titleTa}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {language === 'en' ? item.excerptEn : item.excerptTa}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentView('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1 pt-2 transition-colors"
                >
                  <span>{language === 'en' ? 'Read Notice' : 'அறிவிப்பைப் படிக்க'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Bottom Fast Action Banner */}
      <section className="py-16 bg-gradient-to-r from-rose-950 via-zinc-950 to-zinc-950 border-t border-white/10 text-white w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            {language === 'en' ? 'Ready to Begin Your Kudo Journey?' : 'குடோ தற்காப்புக் கலைப் பயிற்சியைத் தொடங்க தயாரா?'}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Join over 3,500 athletes across 14+ authorized districts in Tamil Nadu. Train under certified Black Belt Senseis.'
              : 'தமிழ்நாட்டில் உள்ள 14+ மாவட்டங்களில் சான்றளிக்கப்பட்ட ஆசிரியர்களிடம் பயிற்சி பெறுங்கள்.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setCurrentView('districts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-xl transition-all"
            >
              {language === 'en' ? 'Find Authorized Academy' : 'பயிற்றுவிப்பகம் கண்டறிய'}
            </button>
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-zinc-900 border border-white/15 text-zinc-200 hover:bg-white/10 px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all"
            >
              {language === 'en' ? 'Contact Secretariat' : 'செயலகத்தை தொடர்புகொள்ள'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
