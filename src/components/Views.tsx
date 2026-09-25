'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { TAMILNADU_DISTRICTS } from '@/data/kudoData';
import {
  Award,
  Calendar,
  MapPin,
  FileText,
  Download,
  Phone,
  Mail,
  User,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Send,
  HelpCircle,
  Image as ImageIcon,
  Calculator,
  Flame,
  Zap,
  BookOpen,
  Layers,
  Activity
} from 'lucide-react';

// ==============================================
// ABOUT VIEW (Sleek Obsidian & Pure Gold Palette)
// ==============================================
export const AboutView: React.FC = () => {
  const { language, t } = useLanguage();
  const { committee } = useAdmin();
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const historyTimeline = [
    {
      year: "2010",
      titleEn: "Founding of Kudo in Tamil Nadu",
      titleTa: "தமிழ்நாட்டில் குடோவின் ஆரம்பம்",
      descEn: "Hanshi V. Ramachandran introduced Kudo under KIFI India guidance, launching the first official dojo in Chennai.",
      descTa: "ஹான்ஷி வி. ராமச்சந்திரன் சென்னையில் முதல் குடோ பயிற்றுவிப்பகத்தைத் தொடங்கினார்."
    },
    {
      year: "2015",
      titleEn: "SGFI & School Games Recognition",
      titleTa: "SGFI மற்றும் பள்ளி விளையாட்டு அங்கீகாரம்",
      descEn: "Kudo recognized across school games, allowing student athletes to compete at national inter-school games.",
      descTa: "பள்ளி விளையாட்டுப் போட்டிகளில் குடோ அங்கீகரிக்கப்பட்டு மாணவர்கள் பங்கேற்றனர்."
    },
    {
      year: "2020",
      titleEn: "Expansion to 14 Districts",
      titleTa: "14 மாவட்டங்களுக்கு விரிவாக்கம்",
      descEn: "Establishment of affiliated district secretariats in Coimbatore, Madurai, Trichy, Salem, Tirunelveli, and more.",
      descTa: "கோவை, மதுரை, திருச்சி உள்ளிட்ட 14 மாவட்டங்களில் கிளைச் சங்கங்கள் அமைக்கப்பட்டன."
    },
    {
      year: "2025-26",
      titleEn: "International Medal Victory",
      titleTa: "சர்வதேச பதக்க வெற்றி",
      descEn: "Tamil Nadu athlete secures bronze medal at the 6th Kudo World Cup in Nagoya, Japan.",
      descTa: "ஜப்பானின் நாகோயாவில் நடைபெற்ற உலகக் கோப்பையில் தமிழ்நாடு வீரர் வெண்கலப் பதக்கம் வென்றார்."
    }
  ];

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh] space-y-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navAbout}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {language === 'en' ? 'About Tamil Nadu State Kudo Association' : 'தமிழ்நாடு மாநில குடோ சங்கம் பற்றி'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {t.associationSub}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Who We Are & Mission Grid (Unified Single Gold Icon Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Who We Are Card */}
          <div className="bg-zinc-900 border border-amber-500/30 hover:border-amber-400/60 rounded-3xl p-8 space-y-4 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl gold-gradient-bg border border-amber-300/40 flex items-center justify-center text-zinc-950 font-black shadow-md">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-amber-200">
              {t.aboutWhoWeAre}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {language === 'en'
                ? "The Tamil Nadu State Kudo Association (TNSKA) is the sole official governing organization authorized by Kudo International Federation India (KIFI) and KIF Japan to oversee the practice, promotion, and competition of Kudo across Tamil Nadu."
                : "தமிழ்நாடு மாநில குடோ சங்கம் (TNSKA) என்பது இந்தியாவில் KIFI மற்றும் ஜப்பானின் KIF அமைப்புகளால் தமிழ்நாட்டில் குடோ விளையாட்டை கட்டுப்படுத்த அனுமதி பெற்ற ஒரே அதிகாரப்பூர்வ அமைப்பாகும்."}
            </p>
          </div>

          {/* Mission & Vision Card */}
          <div className="bg-zinc-900 border border-amber-500/30 hover:border-amber-400/60 rounded-3xl p-8 space-y-4 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl gold-gradient-bg border border-amber-300/40 flex items-center justify-center text-zinc-950 font-black shadow-md">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-amber-200">
              {t.aboutMission}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {language === 'en'
                ? "Our mission is to foster physical fitness, mental discipline, and world-class martial sports excellence among youth across all 38 districts, ensuring complete athlete safety with certified protective gear."
                : "எங்கள் நோக்கம் அனைத்து மாவட்டங்களிலும் உள்ள இளைஞர்களிடையே உடற்தகுதி, மன ஒழுக்கம் மற்றும் உலகத்தரம் வாய்ந்த விளையாட்டு சிறப்பை பாதுகாப்பான முறையில் வளர்ப்பதாகும்."}
            </p>
          </div>

        </div>

        {/* Visual History Timeline */}
        <div className="space-y-8 mb-16">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-extrabold text-amber-200">
              {t.aboutHistory}
            </h3>
            <p className="text-xs text-zinc-300">
              {language === 'en' ? 'Milestones of Kudo growth in Tamil Nadu' : 'தமிழ்நாட்டில் குடோ வளர்ச்சியின் முக்கிய மைல்கற்கள்'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyTimeline.map((item, idx) => (
              <div key={idx} className="bg-zinc-900/90 border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-6 relative shadow-lg transition-all">
                <span className="text-2xl font-black text-amber-400 block mb-2">{item.year}</span>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">
                  {language === 'en' ? item.titleEn : item.titleTa}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? item.descEn : item.descTa}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Committee Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-extrabold text-amber-200">
              {t.aboutLeadership}
            </h3>
            <p className="text-xs text-zinc-300">
              {language === 'en' ? 'Experienced leaders and certified Dan grandmasters steering TNSKA' : 'TNSKA அமைப்பை வழிநடத்தும் அனுபவமிக்க தலைவர்கள்'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-zinc-900 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all cursor-pointer card-hover text-center p-5 space-y-3 shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.nameEn}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-amber-400 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-amber-100">
                    {language === 'en' ? member.nameEn : member.nameTa}
                  </h4>
                  <p className="text-[11px] text-amber-400 font-bold mt-0.5">
                    {language === 'en' ? member.roleEn : member.roleTa}
                  </p>
                </div>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {language === 'en' ? member.bioEn : member.bioTa}
                </p>
                <span className="inline-block text-[11px] text-amber-300 underline font-semibold">
                  {language === 'en' ? 'View Bio' : 'விவரங்களைப் பார்க்க'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Member Bio Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-amber-500/30 rounded-3xl p-6 max-w-lg w-full space-y-4 relative shadow-2xl">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-zinc-800"
              >
                ✕
              </button>
              <div className="flex items-center space-x-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.nameEn}
                  className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-bold text-amber-200">
                    {language === 'en' ? selectedMember.nameEn : selectedMember.nameTa}
                  </h4>
                  <p className="text-xs text-amber-400 font-bold">
                    {language === 'en' ? selectedMember.roleEn : selectedMember.roleTa}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800 pt-4">
                {language === 'en' ? selectedMember.bioEn : selectedMember.bioTa}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// ==============================================
// DISTRICTS & ACADEMIES VIEW
// ==============================================
export const DistrictsView: React.FC = () => {
  const { language, t } = useLanguage();
  const { academies } = useAdmin();
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAcademies = academies.filter(ac => {
    const matchesDistrict = selectedDistrict === 'All' || ac.districtEn === selectedDistrict;
    const matchesSearch = !searchQuery || 
      ac.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
      ac.districtEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ac.instructorEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navDistricts}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.academiesTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.academiesSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-zinc-900 p-4 sm:p-5 rounded-2xl border border-amber-500/20 shadow-xl">
          
          {/* District Dropdown Selector */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-xs text-amber-400 font-bold whitespace-nowrap hidden md:inline">
              {language === 'en' ? 'Filter District:' : 'மாவட்டம்:'}
            </span>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full sm:w-64 bg-zinc-950 border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400"
            >
              <option value="All">{t.allDistricts} (38 {language === 'en' ? 'Districts' : 'மாவட்டங்கள்'})</option>
              {TAMILNADU_DISTRICTS.map(dist => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchDistrictPlaceholder}
            className="w-full sm:w-72 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Academy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAcademies.map(ac => (
            <div
              key={ac.id}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 space-y-4 hover:border-amber-400/50 transition-all card-hover shadow-lg"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {ac.districtEn}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Dojo
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-amber-100">
                  {language === 'en' ? ac.nameEn : ac.nameTa}
                </h3>
                <p className="text-xs text-amber-300/90 font-semibold mt-1">
                  {t.headInstructor}: {language === 'en' ? ac.instructorEn : ac.instructorTa}
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-300 border-t border-zinc-800 pt-3">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{language === 'en' ? ac.addressEn : ac.addressTa}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{ac.phone}</span>
                </p>
              </div>

              <a
                href={ac.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ac.nameEn + ' ' + ac.districtEn + ' Tamil Nadu')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 gold-gradient-bg text-zinc-950 font-black py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all hover:brightness-110 shadow-lg mt-2"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{language === 'en' ? 'Get Directions' : 'திசைகளைப் பெற'}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==============================================
// EVENTS VIEW
// ==============================================
export const EventsView: React.FC = () => {
  const { language, t } = useLanguage();
  const { events } = useAdmin();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navEvents}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.eventsTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.eventsSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center">
          <div className="bg-zinc-900 p-1.5 rounded-2xl border border-amber-500/20 inline-flex space-x-2 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${
                activeTab === 'upcoming'
                  ? 'gold-gradient-bg text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.upcomingTab} ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${
                activeTab === 'past'
                  ? 'gold-gradient-bg text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.pastTab} ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map(ev => (
            <div
              key={ev.id}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6 hover:border-amber-400/50 transition-all card-hover shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-0.5 rounded-full">
                    {ev.date}
                  </span>
                  <span className="text-xs font-semibold text-zinc-300">
                    {ev.districtEn} District
                  </span>
                </div>

                <h3 className="text-lg font-bold text-amber-100">
                  {language === 'en' ? ev.titleEn : ev.titleTa}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? ev.descriptionEn : ev.descriptionTa}
                </p>

                <p className="text-xs text-zinc-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{language === 'en' ? ev.venueEn : ev.venueTa}</span>
                </p>
              </div>

              {!ev.isUpcoming && (
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 shrink-0 text-center space-y-2 justify-center flex flex-col shadow-inner">
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
                    Medal Tally
                  </span>
                  <div className="flex justify-center space-x-3 text-xs">
                    <span className="text-amber-400 font-extrabold">🥇 {ev.goldCount || 0}</span>
                    <span className="text-zinc-200 font-extrabold">🥈 {ev.silverCount || 0}</span>
                    <span className="text-amber-600 font-extrabold">🥉 {ev.bronzeCount || 0}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// ==============================================
// ACHIEVEMENTS VIEW
// ==============================================
export const AchievementsView: React.FC = () => {
  const { language, t } = useLanguage();
  const { achievements } = useAdmin();
  const [filterLevel, setFilterLevel] = useState<string>('All');

  const filtered = filterLevel === 'All'
    ? achievements
    : achievements.filter(a => a.level === filterLevel);

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navAchievements}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.achievementsTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.achievementsSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Level Filters */}
        <div className="flex justify-center space-x-2">
          {['All', 'International', 'National', 'State'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setFilterLevel(lvl)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterLevel === lvl
                  ? 'gold-gradient-bg text-zinc-950 shadow-md'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              {lvl === 'All' ? t.tabAll : lvl}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(ach => (
            <div
              key={ach.id}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all card-hover flex flex-col sm:flex-row shadow-lg"
            >
              <img
                src={ach.image}
                alt={ach.titleEn}
                className="w-full sm:w-48 h-48 sm:h-auto object-cover shrink-0"
              />

              <div className="p-6 space-y-3 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {ach.level} • {ach.year}
                  </span>
                  <span className="text-sm font-bold">
                    {ach.medal === 'Gold' ? '🥇 Gold' : ach.medal === 'Silver' ? '🥈 Silver' : '🥉 Bronze'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-amber-100">
                  {language === 'en' ? ach.titleEn : ach.titleTa}
                </h3>

                <p className="text-xs text-amber-300 font-semibold">
                  {t.headInstructor}: {language === 'en' ? ach.athleteEn : ach.athleteTa}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? ach.descriptionEn : ach.descriptionTa}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// ==============================================
// RESOURCES & NOTICES VIEW
// ==============================================
export const ResourcesView: React.FC = () => {
  const { language, t } = useLanguage();
  const { news, documents } = useAdmin();

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navResources}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.resourcesTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.resourcesSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Section 1: Official Circulars */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2 border-b border-amber-900/30 pb-3">
            <FileText className="w-5 h-5 text-amber-400" />
            {t.categoryCirculars}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map(nw => (
              <div key={nw.id} className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {nw.categoryEn}
                  </span>
                  <span className="text-xs text-zinc-400">{nw.date}</span>
                </div>
                <h4 className="text-base font-bold text-amber-100">
                  {language === 'en' ? nw.titleEn : nw.titleTa}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? nw.excerptEn : nw.excerptTa}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Downloads & Forms Library */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2 border-b border-amber-900/30 pb-3">
            <Download className="w-5 h-5 text-amber-400" />
            {t.categoryForms}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map(doc => (
              <div key={doc.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between hover:border-amber-500/30 transition-all shadow-md">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-zinc-200">
                    {language === 'en' ? doc.titleEn : doc.titleTa}
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    {doc.categoryEn} • {t.fileSize}: {doc.fileSize}
                  </p>
                </div>

                <a
                  href={doc.fileUrl !== '#' ? doc.fileUrl : '#'}
                  download={doc.fileUrl !== '#' ? `${doc.titleEn}.pdf` : undefined}
                  onClick={(e) => {
                    if (doc.fileUrl === '#' || !doc.fileUrl) {
                      e.preventDefault();
                      // Create a downloadable sample PDF blob fallback
                      const blob = new Blob([`TNSKA Official Document: ${doc.titleEn}\nCategory: ${doc.categoryEn}\nDate: ${doc.uploadDate}\n\nTamil Nadu State Kudo Association (TNSKA)`], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${doc.titleEn.replace(/\s+/g, '_')}.txt`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 shrink-0 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// ==============================================
// MEDIA & GALLERY VIEW
// ==============================================
export const MediaView: React.FC<{ onOpenLightbox: (idx: number) => void }> = ({ onOpenLightbox }) => {
  const { language, t } = useLanguage();

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80",
      title: "Super Safe Head Guard Sparring Action",
      event: "13th Tamil Nadu State Championship"
    },
    {
      url: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?auto=format&fit=crop&w=800&q=80",
      title: "Podium Ceremony - National Gold Winners",
      event: "KIFI National Games Mumbai"
    },
    {
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
      title: "State Black Belt Grading Seminar",
      event: "Chennai HQ Dojo"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      title: "Sub-Junior Athlete Technique Demo",
      event: "Coimbatore Dojo"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      title: "Referee Certification Workshop",
      event: "TNSKA Secretariat"
    },
    {
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      title: "Youth Women's Self-Defense Camp",
      event: "Madurai District Dojo"
    }
  ];

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navMedia}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {language === 'en' ? 'TNSKA Official Photo Gallery' : 'அதிகாரப்பூர்வ புகைப்படக் காட்சியகம்'}
          </h2>
          <p className="text-sm text-zinc-300">
            {language === 'en' ? 'Click any photograph to view high-resolution image in Lightbox viewer.' : 'புகைப்படத்தை பெரிதாகப் பார்க்க அழுத்தவும்.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(idx)}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-400/60 transition-all card-hover group relative shadow-lg"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  {img.event}
                </span>
                <h4 className="text-xs font-bold text-zinc-200 group-hover:text-amber-300">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// ==============================================
// FAQS VIEW
// ==============================================
export const FaqsView: React.FC = () => {
  const { language, t } = useLanguage();
  const { faqs } = useAdmin();
  const [activePersona, setActivePersona] = useState<'parents' | 'students' | 'districts'>('parents');
  const [expandedId, setExpandedId] = useState<string | null>(faqs[0]?.id || null);

  const filtered = faqs.filter(f => f.category === activePersona);

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navFaqs}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.faqsTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.faqsSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Persona Tabs */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setActivePersona('parents')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'parents'
                ? 'gold-gradient-bg text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300'
            }`}
          >
            {t.faqTabParents}
          </button>
          <button
            onClick={() => setActivePersona('students')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'students'
                ? 'gold-gradient-bg text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300'
            }`}
          >
            {t.faqTabStudents}
          </button>
          <button
            onClick={() => setActivePersona('districts')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'districts'
                ? 'gold-gradient-bg text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300'
            }`}
          >
            {t.faqTabDistricts}
          </button>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filtered.map(faq => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-amber-500/5 transition-colors"
                >
                  <h3 className="text-sm font-bold text-amber-200">
                    {language === 'en' ? faq.questionEn : faq.questionTa}
                  </h3>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800">
                    {language === 'en' ? faq.answerEn : faq.answerTa}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

// ==============================================
// CONTACT VIEW
// ==============================================
export const ContactView: React.FC = () => {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [websiteHp, setWebsiteHp] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const showToastNotification = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Theme-matched validation check
    const errs: { name?: string; email?: string; subject?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please fill in this field.';
    if (!email.trim()) {
      errs.email = 'Please fill in this field.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) errs.subject = 'Please fill in this field.';
    if (!message.trim()) errs.message = 'Please fill in this field.';

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      showToastNotification('error', 'Please fill in all required fields marked with *');
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
      const whatsappUrl = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : '';

      // Direct Client Browser Dispatch to FormSubmit (bypasses cloud server IP filters)
      const formData = new FormData();
      formData.append('_subject', `[TNSKA Inquiry - ${category || 'General'}] ${subject}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('Sender Name', name);
      formData.append('Sender Email', email);
      formData.append('WhatsApp Phone', phone || 'Not provided');
      if (whatsappUrl) {
        formData.append('WhatsApp Chat Link', whatsappUrl);
      }
      formData.append('Inquiry Category', category || 'General Inquiry');
      formData.append('Subject', subject);
      formData.append('Message', message);

      const directRes = await fetch('https://formsubmit.co/ajax/barathvr385@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const fsResult = await directRes.json();
      console.log('FormSubmit Client Dispatch Result:', fsResult);

      // Trigger internal API logging in background
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, category, subject, message, website_hp: websiteHp })
      }).catch(() => {});

      showToastNotification('success', 'Inquiry sent successfully! Our Secretariat will contact you via WhatsApp / Email within 24 hours.');
      
      // Clear fields cleanly
      setName('');
      setEmail('');
      setPhone('');
      setCategory('General Inquiry');
      setSubject('');
      setMessage('');
    } catch (err) {
      showToastNotification('error', 'Network error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-zinc-950 text-white min-h-[80vh] relative">
      
      {/* Toast Alert Banner */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-bold border transition-all animate-bounce ${
          toast.type === 'success'
            ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50'
            : 'bg-rose-950/90 text-rose-200 border-rose-500/50'
        }`}>
          <CheckCircle2 className={`w-5 h-5 shrink-0 ${toast.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`} />
          <span>{toast.msg}</span>
        </div>
      )}

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {t.navContact}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-100">
            {t.contactTitle}
          </h2>
          <p className="text-sm text-zinc-300">
            {t.contactSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/20 rounded-3xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-200">
                {t.officeAddressTitle}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.officeAddress}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{t.officePhone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{t.officeEmail}</span>
                </p>
              </div>
            </div>

            {/* Interactive Map Embed Box */}
            <div className="border border-amber-500/20 rounded-2xl overflow-hidden aspect-16/9 bg-zinc-950 flex flex-col items-center justify-center p-4 text-center space-y-2 shadow-inner mt-4">
              <MapPin className="w-8 h-8 text-amber-400 animate-bounce" />
              <p className="text-xs font-bold text-amber-200">Jawaharlal Nehru Indoor Stadium, Periamet, Chennai</p>
              <a
                href="https://maps.google.com/?q=Jawaharlal+Nehru+Stadium+Chennai"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-400 underline font-semibold flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Location in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Inquiry Form Card */}
          <div className="lg:col-span-7 bg-zinc-900 border border-amber-500/20 rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-amber-200">
                  Send Official Inquiry / Feedback
                </h3>
              </div>

              {/* Honeypot Field for anti-bot protection */}
              <input
                type="text"
                name="website_hp"
                value={websiteHp}
                onChange={(e) => setWebsiteHp(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Sender Name */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (formErrors.name) setFormErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Enter your full name"
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none transition-all ${
                    formErrors.name
                      ? 'border-amber-500 bg-amber-950/20 ring-1 ring-amber-500/80'
                      : 'border-zinc-800 focus:border-amber-400'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center gap-1.5 animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{formErrors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formErrors.email) setFormErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    placeholder="Enter your email address"
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none transition-all ${
                      formErrors.email
                        ? 'border-amber-500 bg-amber-950/20 ring-1 ring-amber-500/80'
                        : 'border-zinc-800 focus:border-amber-400'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center gap-1.5 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98400 00000"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-400"
                  />
                  <p className="text-[10px] text-zinc-400 mt-1">
                    Provide your WhatsApp number for faster response.
                  </p>
                </div>
              </div>

              {/* Inquiry Category & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    Inquiry Category <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="District Academy / Dojo Interest">District Academy / Dojo Interest</option>
                    <option value="Tournament & Event Support">Tournament & Event Support</option>
                    <option value="Belt Grading & Certification">Belt Grading & Certification</option>
                    <option value="Sponsorship & Media">Sponsorship & Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    Subject <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (formErrors.subject) setFormErrors(prev => ({ ...prev, subject: undefined }));
                    }}
                    placeholder="Enter inquiry subject"
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none transition-all ${
                      formErrors.subject
                        ? 'border-amber-500 bg-amber-950/20 ring-1 ring-amber-500/80'
                        : 'border-zinc-800 focus:border-amber-400'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center gap-1.5 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Your Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (formErrors.message) setFormErrors(prev => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Please describe your inquiry or question in detail..."
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none transition-all ${
                    formErrors.message
                      ? 'border-amber-500 bg-amber-950/20 ring-1 ring-amber-500/80'
                      : 'border-zinc-800 focus:border-amber-400'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center gap-1.5 animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{formErrors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-black py-3.5 rounded-xl uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all ${
                  isSubmitting
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'gold-gradient-bg text-zinc-950 hover:brightness-110'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Official Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==============================================
// WHAT IS KUDO VIEW (Comprehensive Martial Art Guide)
// ==============================================
export const WhatIsKudoView: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-theme-main text-theme-main min-h-[80vh] space-y-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
            {language === 'en' ? 'The Modern Budo Martial Sport' : 'நவீன புடோ தற்காப்புக் கலை'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            {language === 'en' ? 'What is Kudo (空道)?' : 'குடோ (空道) என்றால் என்ன?'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {language === 'en'
              ? 'A safe, hybrid, full-contact Japanese martial art combining Karate striking, Judo throwing, and Jujitsu grappling under the patented SuperSafe head armor.'
              : 'கராத்தே, ஜூடோ, மற்றும் ஜூஜிட்சு உத்திகளை இணைத்து, பிரத்யேக முகக்கவசத்துடன் பயிற்சி செய்யப்படும் முழுமையான ஜப்பானிய தற்காப்புக் கலை.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto"></div>
        </div>

        {/* 2-Column Origins & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-rose-500 pl-4 space-y-2">
              <span className="text-xs uppercase tracking-widest text-rose-400 font-bold block">
                {language === 'en' ? 'Heritage & Lineage' : 'வரலாறு & மரபு'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {language === 'en' ? 'Founded by Grandmaster Azuma Takashi (1981)' : 'கிராண்ட்மாஸ்டர் அசுமா தகாஷி (1981)'}
              </h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {language === 'en'
                ? 'Kudo was established in Sendai, Japan in 1981 as Daido Juku by Grandmaster Azuma Takashi. Seeking a realistic martial art that retained traditional Japanese Budo etiquette (respect, humility, self-control), Azuma developed a hybrid combat sport where fighters can strike with punches, kicks, elbows, knees, and headbutts while seamlessly transitioning into throws, takedowns, and submissions.'
                : '1981 ஆம் ஆண்டு ஜப்பானின் செண்டாயில் கிராண்ட்மாஸ்டர் அசுமா தகாஷியால் உருவாக்கப்பட்டது. ஜப்பானிய பாரம்பரிய ஒழுக்கத்துடன், நிஜ சண்டை உத்திகளை (குத்து, உதை, தள்ளிவிடுதல், மூட்டுப் பூட்டுகள்) பாதுகாப்பாகப் பயில இது வடிவமைக்கப்பட்டது.'}
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {language === 'en'
                ? 'Today, Kudo is governed globally by the Kudo International Federation (KIF) in Tokyo, and in India by KIFI India (under Hanshi Mehul Vora), recognized by the School Games Federation of India (SGFI).'
                : 'தற்போது இது டோக்கியோவில் உள்ள சர்வதேச கூட்டமைப்பு (KIF) மற்றும் இந்தியாவில் KIFI மூலம் இயக்கப்பட்டு SGFI பள்ளி விளையாட்டுப் போட்டிகளில் அங்கீகரிக்கப்பட்டுள்ளது.'}
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h4 className="text-lg font-bold text-rose-300">
              {language === 'en' ? 'The 4 Combat Pillars of Kudo' : 'குடோவின் 4 முக்கிய அம்சங்கள்'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-xs font-bold text-rose-400 block">01. Striking (Atemi)</span>
                <p className="text-xs text-zinc-300">Punches, kicks, knees, elbows, and headbutts with full realism.</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-xs font-bold text-amber-400 block">02. Throwing (Nage)</span>
                <p className="text-xs text-zinc-300">Judo hip throws, sweeps, and dynamic takedowns while gripping the dogi.</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-xs font-bold text-emerald-400 block">03. Submissions (Kansetsu)</span>
                <p className="text-xs text-zinc-300">Armbars, kimuras, and chokeholds for rapid technical tapout victories.</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-xs font-bold text-rose-300 block">04. Ground Control (Ne-Waza)</span>
                <p className="text-xs text-zinc-300">Fast-paced 30-second ground transition with ground strikes permitted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SuperSafe Armor Feature Card */}
        <div className="bg-gradient-to-r from-rose-950/40 via-zinc-900 to-zinc-900 border border-rose-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
                {language === 'en' ? 'Patented Safety Armor' : 'பாதுகாப்பு முகக்கவசம்'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {language === 'en' ? 'The Iconic SuperSafe (NHG) Headgear' : 'சூப்பர் சேஃப் முகக்கவச பாதுகாப்பு'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {language === 'en'
                  ? 'Kudo revolutionized combat sports safety with the patented Neo-Head Guard (SuperSafe helmet), featuring an ultra-clear, high-impact polycarbonate visor. This completely eliminates facial lacerations, broken noses, and ocular injuries, allowing athletes of all ages (from 6-year-old sub-juniors to 50+ masters) to train at full power without danger.'
                  : 'காப்புரிமை பெற்ற பல்கார்பனேட் வெளிப்படையான முகக்கவசம் மூலம் முகத்தில் காயங்கள், மூக்கு உடைவு ஏற்படுவது தடுக்கப்படுகிறது. இதனால் பள்ளி மாணவர்கள் முதல் பெரியவர்கள் வரை அனைவரும் பாதுகாப்பாக பயிற்சி பெறலாம்.'}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-rose-600/15 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-xl">
                <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 stroke-[2]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==============================================
// RULES & PI CALCULATOR VIEW (Official Regulations)
// ==============================================
export const RulesView: React.FC = () => {
  const { language } = useLanguage();

  const [heightCm, setHeightCm] = useState<string>('175');
  const [weightKg, setWeightKg] = useState<string>('70');

  const parsedH = parseFloat(heightCm) || 0;
  const parsedW = parseFloat(weightKg) || 0;
  const calculatedPI = parsedH + parsedW;

  const getPICategory = (pi: number) => {
    if (pi === 0) return 'Enter measurements above';
    if (pi < 230) return 'Under 230 Index Division';
    if (pi <= 240) return '230 - 240 Index Division';
    if (pi <= 250) return '240 - 250 Index Division';
    if (pi <= 260) return '250 - 260 Index Division';
    if (pi <= 270) return '260 - 270 Index Division';
    return '270+ Open Super Heavy Division';
  };

  return (
    <div className="py-16 bg-theme-main text-theme-main min-h-[80vh] space-y-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
            {language === 'en' ? 'Official KIF Competition Regulations' : 'அதிகாரப்பூர்வ போட்டி விதிகள்'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            {language === 'en' ? 'Kudo Rules & Physical Index' : 'குடோ விதிகள் & PI கணக்கீடு'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {language === 'en'
              ? 'Kudo uses the Physical Index (Height + Weight) system rather than weight alone, ensuring fair and safe matchmaking without dangerous dehydration cuts.'
              : 'குடோவில் எடையுடன் உயரத்தையும் சேர்த்து (உயரம் + எடை) கணக்கிடும் முறையால் நியாயமான போட்டிப் பிரிவுகள் தீர்மானிக்கப்படுகின்றன.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto"></div>
        </div>

        {/* Interactive Physical Index Calculator Widget */}
        <div className="bg-zinc-900 border border-rose-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-rose-400">
            <Calculator className="w-6 h-6" />
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {language === 'en' ? 'Interactive Physical Index (PI) Calculator' : 'உடனடி PI கணக்கீட்டுக் கருவி'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                {language === 'en' ? 'Your Height (in cm)' : 'உங்கள் உயரம் (செ.மீ)'}
              </label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="e.g. 175"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 font-mono text-lg"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                {language === 'en' ? 'Your Weight (in kg)' : 'உங்கள் எடை (கிலோ)'}
              </label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                placeholder="e.g. 70"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 font-mono text-lg"
              />
            </div>
          </div>

          {/* Calculator Output */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-zinc-400 font-semibold block">
                {language === 'en' ? 'Calculated Physical Index (PI = Height + Weight):' : 'கணக்கிடப்பட்ட குறியீடு:'}
              </span>
              <span className="text-3xl font-black text-rose-400 font-mono">
                {calculatedPI > 0 ? calculatedPI : '--'}
              </span>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs text-zinc-400 font-semibold block">
                {language === 'en' ? 'Your Official Competitive Category:' : 'உங்கள் போட்டிப் பிரிவு:'}
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full inline-block mt-1">
                {getPICategory(calculatedPI)}
              </span>
            </div>
          </div>
        </div>

        {/* Scoring System Grid */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
            {language === 'en' ? 'Official Match Victory & Scoring System' : 'வெற்றி மற்றும் மதிப்பெண் அளவுகோல்'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-rose-500/30 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-black text-rose-400 uppercase tracking-wider block">IPPON (Full Win)</span>
              <h4 className="text-base font-bold text-white">Knockout / Tapout</h4>
              <p className="text-xs text-zinc-300">Clean strike knocking opponent down for 4+ seconds, or submission tapout. Match ends instantly.</p>
            </div>

            <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">WAZA-ARI (Half Win)</span>
              <h4 className="text-base font-bold text-white">Heavy Stun / Throw</h4>
              <p className="text-xs text-zinc-300">Strike causing opponent to lose balance for 2-4 seconds, or high-amplitude throw followed by clean ground punch.</p>
            </div>

            <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider block">YUKO & KOKA (Points)</span>
              <h4 className="text-base font-bold text-white">Minor Points</h4>
              <p className="text-xs text-zinc-300">Clean power strikes causing momentary stagger (Yuko), or quick technical flurry / takedown control (Koka).</p>
            </div>

            <div className="bg-zinc-900 border border-white/15 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-black text-zinc-300 uppercase tracking-wider block">HANTEI (Decision)</span>
              <h4 className="text-base font-bold text-white">Referee Decision</h4>
              <p className="text-xs text-zinc-300">When points are tied at the end of regular time (3 minutes), judges decide based on aggression and technique.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==============================================
// SYLLABUS & BELT GRADING VIEW
// ==============================================
export const SyllabusView: React.FC = () => {
  const { language } = useLanguage();

  const beltRanks = [
    { rank: "White Belt (Mukyu)", colorBg: "bg-white text-zinc-950", minTime: "Beginner", focus: "Kihon basics, stances, safe falling (Ukemi), etiquette." },
    { rank: "Purple Belt (8th - 7th Kyu)", colorBg: "bg-purple-600 text-white", minTime: "3-6 Months", focus: "Basic punch-kick combinations, moving basics (Ido Geiko)." },
    { rank: "Yellow Belt (6th - 5th Kyu)", colorBg: "bg-yellow-400 text-zinc-950", minTime: "6-12 Months", focus: "Yakusoku Kumite drills, basic Judo throws, entry defense." },
    { rank: "Green Belt (4th - 3rd Kyu)", colorBg: "bg-emerald-600 text-white", minTime: "1-2 Years", focus: "Continuous sparring (Randori), ground transitions, armbars." },
    { rank: "Brown Belt (2nd - 1st Kyu)", colorBg: "bg-amber-800 text-white", minTime: "2-3 Years", focus: "Full-contact sparring, advanced chokes, referee fundamentals." },
    { rank: "Black Belt (Shodan 1st Dan+)", colorBg: "bg-black text-amber-300 border border-amber-500/50", minTime: "3-4+ Years", focus: "Mastery of all 4 combat pillars, state referee certification, 10-man Kumite." },
  ];

  return (
    <div className="py-16 bg-theme-main text-theme-main min-h-[80vh] space-y-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-extrabold block">
            {language === 'en' ? 'Standardized International Curriculum' : 'சர்வதேச பெல்ட் தரவரிசை முறை'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            {language === 'en' ? 'Belt Grading & Dan Syllabus' : 'பெல்ட் தரம் & பாடத்திட்டம்'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {language === 'en'
              ? 'TNSKA follows the official Japanese KIF syllabus, progressing from White Belt to Senior Dan Black Belt through rigorous technical and sparring evaluations.'
              : 'ஜப்பான் சர்வதேச குடோ கூட்டமைப்பின் அங்கீகரிக்கப்பட்ட விதிகளின்படி வெள்ளை பெல்ட் முதல் பிளாக் பெல்ட் வரையிலான பயிற்சி முறை.'}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto"></div>
        </div>

        {/* Belt Hierarchy Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beltRanks.map((b, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl card-hover flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${b.colorBg}`}>
                    {b.rank}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-semibold">{b.minTime}</span>
                </div>
                <h4 className="text-base font-bold text-white pt-1">
                  {b.focus}
                </h4>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                <span>KIF Japan Standard Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
