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
  Send
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
    <div className="space-y-0 w-full max-w-[100vw] overflow-x-hidden">
      
      {/* 1. Hero Banner */}
      <Hero setCurrentView={setCurrentView} />

      {/* 2. Featured Event Announcement Ticker (Optimized Responsive Mobile Layout) */}
      {featuredEvent && (
        <section className="bg-zinc-900/90 border-y border-amber-500/30 py-4 px-4 sm:px-8 lg:px-12 text-white w-full backdrop-blur-md shadow-xl">
          <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <span className="gold-gradient-bg text-zinc-950 font-black text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-md shrink-0 shadow-md">
                {t.noticeTitle}
              </span>
              <div className="w-full">
                <h4 className="text-xs sm:text-sm font-bold text-amber-200 leading-snug">
                  {language === 'en' ? featuredEvent.titleEn : featuredEvent.titleTa}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5">
                  {featuredEvent.date} • {featuredEvent.venueEn}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentView('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full md:w-auto bg-zinc-950 hover:bg-amber-500/10 text-amber-300 border border-amber-500/40 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 transition-all"
            >
              {t.viewDetails}
            </button>
          </div>
        </section>
      )}

      {/* 3. Trust Lineage Trail */}
      <TrustChain />

      {/* 4. Executive Leadership Messages Section */}
      <section className="py-16 sm:py-20 bg-zinc-900 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
              {t.aboutLeadership}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-amber-100">
              {language === 'en' ? 'State Association Leadership Message' : 'மாநில சங்கத் தலைவர்களின் உரை'}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* President Card */}
            {president && (
              <div className="bg-zinc-950 border border-amber-500/30 hover:border-amber-400/60 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl transition-all">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/15 absolute top-6 right-6" />
                <div className="flex items-center space-x-4">
                  <img
                    src={president.image}
                    alt={president.nameEn}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-200">
                      {language === 'en' ? president.nameEn : president.nameTa}
                    </h3>
                    <p className="text-xs text-amber-400 font-bold">
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
              <div className="bg-zinc-950 border border-amber-500/30 hover:border-amber-400/60 rounded-3xl p-6 sm:p-8 space-y-4 relative card-hover shadow-xl transition-all">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/15 absolute top-6 right-6" />
                <div className="flex items-center space-x-4">
                  <img
                    src={secretary.image}
                    alt={secretary.nameEn}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-200">
                      {language === 'en' ? secretary.nameEn : secretary.nameTa}
                    </h3>
                    <p className="text-xs text-amber-400 font-bold">
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

      {/* 5. What is Kudo Section */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l-4 border-amber-400 pl-4 space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
                  {language === 'en' ? 'Budo Discipline & Safety' : 'பாதுகாப்பு & ஒழக்கம்'}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 leading-tight">
                  {t.whatIsKudoTitle}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.whatIsKudoDesc}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5 bg-zinc-900/90 p-4 rounded-2xl border border-amber-500/20 shadow-lg">
                  <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-zinc-950 font-bold shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-200">{t.featureSafety}</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5">{t.featureSafetyDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-zinc-900/90 p-4 rounded-2xl border border-amber-500/20 shadow-lg">
                  <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-zinc-950 font-bold shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-200">{t.featureDiscipline}</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5">{t.featureDisciplineDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-zinc-900 p-4 sm:p-6 rounded-3xl border border-amber-500/30 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
                  alt="Kudo Training"
                  className="rounded-2xl w-full h-64 sm:h-80 object-cover border border-amber-400/30"
                />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 bg-zinc-950/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-amber-500/30 text-center shadow-xl">
                  <p className="text-[11px] sm:text-xs font-bold text-amber-300">
                    {language === 'en' ? 'Official KIFI & SGFI School Games Pathway' : 'அதிகாரப்பூர்வ SGFI பள்ளி விளையாட்டுப் பாதை'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Achievement Highlights */}
      <section className="py-16 sm:py-20 bg-zinc-900 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-amber-900/30 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block mb-1">
                {t.navAchievements}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100">
                {t.achievementsTitle}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('achievements');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 transition-colors"
            >
              <span>{language === 'en' ? 'View All Achievements' : 'அனைத்து சாதனைகளையும் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightAchievements.map(ach => (
              <div key={ach.id} className="bg-zinc-950 border border-amber-500/20 rounded-2xl overflow-hidden card-hover space-y-3 p-5 shadow-lg">
                <img src={ach.image} alt={ach.titleEn} className="w-full h-40 object-cover rounded-xl border border-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {ach.level} • {ach.year}
                  </span>
                  <span className="text-xs font-bold">🥇 {ach.medal}</span>
                </div>
                <h4 className="text-sm font-bold text-amber-100">
                  {language === 'en' ? ach.titleEn : ach.titleTa}
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {language === 'en' ? ach.descriptionEn : ach.descriptionTa}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Latest News & Official Announcements */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-amber-900/30 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block mb-1">
                {t.categoryCirculars}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100">
                {language === 'en' ? 'Latest News & Official Notices' : 'சமீபத்திய செய்திகள் & சுற்றறிக்கைகள்'}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 transition-colors"
            >
              <span>{language === 'en' ? 'View All Notices' : 'அனைத்து சுற்றறிக்கைகளையும் பார்க்க'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(nw => (
              <div key={nw.id} className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 space-y-3 card-hover shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {nw.categoryEn}
                  </span>
                  <span className="text-[11px] text-zinc-400">{nw.date}</span>
                </div>
                <h4 className="text-sm font-bold text-amber-100">
                  {language === 'en' ? nw.titleEn : nw.titleTa}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? nw.excerptEn : nw.excerptTa}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Official Sponsors & Institutional Partners */}
      <section className="py-16 bg-zinc-900 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
              {language === 'en' ? 'Official Partners & Sponsors' : 'அதிகாரப்பூர்வ பங்காளிகள்'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100">
              {language === 'en' ? 'Partner With Tamil Nadu Kudo' : 'தமிழ்நாடு குடோவுடன் இணையுங்கள்'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              {language === 'en' 
                ? 'Empowering Tamil Nadu state athletes and supporting recognized martial sports excellence.'
                : 'மாநில விளையாட்டு வீரர்களுக்கு ஆதரவளித்து தற்காப்பு விளையாட்டை மேம்படுத்துங்கள்.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
            <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 text-center space-y-1.5 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto" />
              <span className="text-xs font-bold text-zinc-200 block">KIFI India</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-extrabold">National Governing Body</span>
            </div>
            <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 text-center space-y-1.5 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto" />
              <span className="text-xs font-bold text-zinc-200 block">SDAT Tamil Nadu</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-extrabold">Sports Infrastructure</span>
            </div>
            <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 text-center space-y-1.5 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto" />
              <span className="text-xs font-bold text-zinc-200 block">Neo Protective Equipment</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-extrabold">Official Safety Gear</span>
            </div>
            <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 text-center space-y-1.5 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto" />
              <span className="text-xs font-bold text-zinc-200 block">KIF Japan</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-extrabold">Global Federation</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-zinc-950 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'en' ? 'Sponsor / Partner Inquiry' : 'பங்காளர் விருப்பப் படிவம்'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 9. Tournament Photo Gallery Preview */}
      <section className="py-16 sm:py-20 bg-zinc-900 text-white border-b border-amber-500/20 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-amber-900/30 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block mb-1">
                {t.navMedia}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100">
                {language === 'en' ? 'State Tournament Gallery Preview' : 'போட்டி புகைப்படங்கள்'}
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('media');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 transition-colors"
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
                className="aspect-square rounded-2xl overflow-hidden border border-amber-500/20 cursor-pointer card-hover shadow-lg"
              >
                <img src={url} alt="Kudo Action" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Call to Action Banner Band */}
      <section className="py-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-amber-500/30 text-white text-center w-full shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-amber-100">
            {language === 'en' ? 'Join the Official Kudo Movement in Tamil Nadu' : 'தமிழ்நாடு குடோ இயக்கத்தில் இணையுங்கள்'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 max-w-2xl mx-auto leading-relaxed">
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
              className="w-full sm:w-auto gold-gradient-bg text-zinc-950 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-xl hover:brightness-110 transition-all"
            >
              {t.heroCtaPrimary}
            </button>

            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-zinc-900 border border-amber-500/40 text-amber-200 hover:bg-amber-500/10 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              {t.navContact}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
