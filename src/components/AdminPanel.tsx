'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Lock, Plus, Trash2, CheckCircle2, ShieldAlert, LogOut, FileText, Calendar, MapPin, Download } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    news,
    events,
    academies,
    documents,
    addNews,
    deleteNews,
    addEvent,
    deleteEvent,
    addAcademy,
    deleteAcademy,
    addDocument,
    deleteDocument
  } = useAdmin();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'academies' | 'docs'>('news');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form States
  const [newsTitleEn, setNewsTitleEn] = useState('');
  const [newsTitleTa, setNewsTitleTa] = useState('');
  const [newsCategory, setNewsCategory] = useState('Official Notice');
  const [newsExcerptEn, setNewsExcerptEn] = useState('');
  const [newsExcerptTa, setNewsExcerptTa] = useState('');

  const [eventTitleEn, setEventTitleEn] = useState('');
  const [eventTitleTa, setEventTitleTa] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventVenueEn, setEventVenueEn] = useState('');
  const [eventDistrictEn, setEventDistrictEn] = useState('Chennai');

  const [academyNameEn, setAcademyNameEn] = useState('');
  const [academyNameTa, setAcademyNameTa] = useState('');
  const [academyDistrictEn, setAcademyDistrictEn] = useState('Chennai');
  const [academyInstructorEn, setAcademyInstructorEn] = useState('');
  const [academyAddressEn, setAcademyAddressEn] = useState('');
  const [academyAddressTa, setAcademyAddressTa] = useState('');
  const [academyPhone, setAcademyPhone] = useState('');

  const [docTitleEn, setDocTitleEn] = useState('');
  const [docTitleTa, setDocTitleTa] = useState('');
  const [docCategoryEn, setDocCategoryEn] = useState('Official Circular');
  const [docSize, setDocSize] = useState('1.2 MB');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passwordInput);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPasswordInput('');
      showToast('Login successful!');
    }
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitleEn || !newsExcerptEn) return;
    addNews({
      titleEn: newsTitleEn,
      titleTa: newsTitleTa || newsTitleEn,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      categoryEn: newsCategory,
      categoryTa: newsCategory === 'Official Notice' ? 'அதிகாரப்பூர்வ அறிவிப்பு' : 'செய்தி',
      excerptEn: newsExcerptEn,
      excerptTa: newsExcerptTa || newsExcerptEn,
      contentEn: newsExcerptEn,
      contentTa: newsExcerptTa || newsExcerptEn,
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
      isNotice: newsCategory === 'Official Notice'
    });
    setNewsTitleEn('');
    setNewsTitleTa('');
    setNewsExcerptEn('');
    setNewsExcerptTa('');
    showToast('News / Announcement published live!');
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitleEn || !eventDate) return;
    addEvent({
      titleEn: eventTitleEn,
      titleTa: eventTitleTa || eventTitleEn,
      date: eventDate,
      venueEn: eventVenueEn || 'SDAT Stadium',
      venueTa: eventVenueEn || 'SDAT உள்விளையாட்டரங்கம்',
      districtEn: eventDistrictEn,
      districtTa: eventDistrictEn,
      isUpcoming: true,
      descriptionEn: "Official TNSKA tournament event.",
      descriptionTa: "அதிகாரப்பூர்வ TNSKA போட்டி நிகழ்வு."
    });
    setEventTitleEn('');
    setEventTitleTa('');
    setEventDate('');
    setEventVenueEn('');
    showToast('Upcoming Event created live!');
  };

  const handleAddAcademy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!academyNameEn || !academyInstructorEn) return;
    addAcademy({
      nameEn: academyNameEn,
      nameTa: academyNameTa || academyNameEn,
      districtEn: academyDistrictEn,
      districtTa: academyDistrictEn,
      instructorEn: academyInstructorEn,
      instructorTa: academyInstructorEn,
      addressEn: academyAddressEn || 'Main Street, Dojo Hall',
      addressTa: academyAddressTa || academyAddressEn || 'பிரதான வீதி, டோஜோ ஹால்',
      phone: academyPhone || '+91 98400 00000',
      email: `${academyDistrictEn.toLowerCase()}@tnkudo.org`
    });
    setAcademyNameEn('');
    setAcademyNameTa('');
    setAcademyInstructorEn('');
    setAcademyAddressEn('');
    setAcademyAddressTa('');
    setAcademyPhone('');
    showToast('Academy added to District directory!');
  };

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docTitleEn) return;
    addDocument({
      titleEn: docTitleEn,
      titleTa: docTitleTa || docTitleEn,
      categoryEn: docCategoryEn,
      categoryTa: docCategoryEn,
      fileSize: docSize,
      uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fileUrl: '#'
    });
    setDocTitleEn('');
    setDocTitleTa('');
    showToast('Document uploaded to download library!');
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="py-20 bg-zinc-950 text-white min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-zinc-900 border border-amber-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full maroon-gradient-bg border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-amber-200">
              {t.adminTitle}
            </h2>
            <p className="text-xs text-gray-400">
              {language === 'en' ? 'Enter admin passcode to manage website content.' : 'இணையதளத்தின் உள்ளடக்கங்களை மாற்ற நிர்வாகி குறியீட்டை உள்ளிடவும்.'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-amber-400 mb-1">
                {language === 'en' ? 'Admin Passcode' : 'நிர்வாகி கடவுச்சொல்'}
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter passcode (e.g. kudo2026 or admin)"
                className="w-full bg-zinc-950 border border-amber-500/30 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-400"
              />
              {loginError && (
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {language === 'en' ? 'Invalid passcode. Try "kudo2026" or "admin"' : 'தவறான குறியீடு.'}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full gold-gradient-bg text-red-950 font-bold py-3 rounded-xl text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
            >
              {language === 'en' ? 'Access Admin Portal' : 'நிர்வாகப் பக்கத்திற்குச் செல்க'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-zinc-950 text-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-900 border border-emerald-500/50 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 text-xs font-semibold animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-amber-900/40 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Authenticated Admin
              </span>
            </div>
            <h2 className="text-2xl font-black text-amber-200 mt-1">
              {t.adminTitle}
            </h2>
            <p className="text-xs text-gray-400">
              {t.adminSubtitle}
            </p>
          </div>

          <button
            onClick={logoutAdmin}
            className="flex items-center space-x-1.5 bg-zinc-900 border border-rose-500/30 text-rose-300 hover:bg-rose-950/40 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>{t.adminLogout}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-3">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'news'
                ? 'gold-gradient-bg text-red-950 shadow-md'
                : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>News & Circulars ({news.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'events'
                ? 'gold-gradient-bg text-red-950 shadow-md'
                : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Tournaments / Events ({events.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('academies')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'academies'
                ? 'gold-gradient-bg text-red-950 shadow-md'
                : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>District Academies ({academies.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'docs'
                ? 'gold-gradient-bg text-red-950 shadow-md'
                : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>PDF Forms & Downloads ({documents.length})</span>
          </button>
        </div>

        {/* Tab 1: News */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 h-fit">
              <h3 className="text-sm font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Publish News / Circular
              </h3>

              <form onSubmit={handleAddNews} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Title (English)</label>
                  <input
                    type="text"
                    required
                    value={newsTitleEn}
                    onChange={(e) => setNewsTitleEn(e.target.value)}
                    placeholder="e.g. 14th State Selection Trial Regulations"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Title (Tamil)</label>
                  <input
                    type="text"
                    value={newsTitleTa}
                    onChange={(e) => setNewsTitleTa(e.target.value)}
                    placeholder="e.g. 14வது மாநிலத் தேர்வுப் போட்டி விதிகள்"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Category</label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Official Notice">Official Notice</option>
                    <option value="Championship Result">Championship Result</option>
                    <option value="Belt Grading">Belt Grading</option>
                    <option value="Association News">Association News</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Summary / Excerpt (English)</label>
                  <textarea
                    required
                    rows={3}
                    value={newsExcerptEn}
                    onChange={(e) => setNewsExcerptEn(e.target.value)}
                    placeholder="Brief description of the announcement..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-red-950 font-bold py-2.5 rounded-lg uppercase tracking-wider"
                >
                  Publish Announcement
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-amber-300 mb-2">Live Published News & Circulars</h3>
              {news.map(nw => (
                <div key={nw.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-start">
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded">
                      {nw.categoryEn}
                    </span>
                    <h4 className="text-xs font-bold text-gray-200">{nw.titleEn}</h4>
                    <p className="text-[11px] text-gray-400">{nw.date} • {nw.excerptEn}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteNews(nw.id);
                      showToast('Item deleted.');
                    }}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/50 hover:text-rose-200 shrink-0"
                    title="Delete Record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Events */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 h-fit">
              <h3 className="text-sm font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Add Tournament / Event
              </h3>

              <form onSubmit={handleAddEvent} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Event Name (English)</label>
                  <input
                    type="text"
                    required
                    value={eventTitleEn}
                    onChange={(e) => setEventTitleEn(e.target.value)}
                    placeholder="e.g. 15th State Championship 2026"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Event Date</label>
                  <input
                    type="text"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="e.g. October 15 - 17, 2026"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Venue & Location</label>
                  <input
                    type="text"
                    value={eventVenueEn}
                    onChange={(e) => setEventVenueEn(e.target.value)}
                    placeholder="e.g. Nehru Indoor Stadium, Chennai"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-red-950 font-bold py-2.5 rounded-lg uppercase tracking-wider"
                >
                  Create Event
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-amber-300 mb-2">Live Tournament Calendar</h3>
              {events.map(ev => (
                <div key={ev.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-2 py-0.5 rounded">
                      {ev.date}
                    </span>
                    <h4 className="text-xs font-bold text-gray-200">{ev.titleEn}</h4>
                    <p className="text-[11px] text-gray-400">{ev.venueEn}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteEvent(ev.id);
                      showToast('Event deleted.');
                    }}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/50 hover:text-rose-200 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Academies */}
        {activeTab === 'academies' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 h-fit">
              <h3 className="text-sm font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Add District Training Academy
              </h3>

              <form onSubmit={handleAddAcademy} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Academy Dojo Name (English)</label>
                  <input
                    type="text"
                    required
                    value={academyNameEn}
                    onChange={(e) => setAcademyNameEn(e.target.value)}
                    placeholder="e.g. Trichy City Kudo Dojo"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Academy Dojo Name (Tamil)</label>
                  <input
                    type="text"
                    value={academyNameTa}
                    onChange={(e) => setAcademyNameTa(e.target.value)}
                    placeholder="e.g. திருச்சி சிட்டி குடோ டோஜோ"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">District</label>
                  <select
                    value={academyDistrictEn}
                    onChange={(e) => setAcademyDistrictEn(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Tiruchirappalli">Tiruchirappalli</option>
                    <option value="Salem">Salem</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Erode">Erode</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Kanchipuram">Kanchipuram</option>
                    <option value="Tiruppur">Tiruppur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Full Address / Specific Location (English)</label>
                  <textarea
                    required
                    rows={2}
                    value={academyAddressEn}
                    onChange={(e) => setAcademyAddressEn(e.target.value)}
                    placeholder="e.g. No. 12, Sports Complex Road, Near City Center, Trichy - 620001"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">முழு முகவரி / அமைவிடம் (தமிழ்)</label>
                  <textarea
                    rows={2}
                    value={academyAddressTa}
                    onChange={(e) => setAcademyAddressTa(e.target.value)}
                    placeholder="எ.கா. எண் 12, விளையாட்டு வளாக சாலை, திருச்சி"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Head Instructor / Sensei</label>
                  <input
                    type="text"
                    required
                    value={academyInstructorEn}
                    onChange={(e) => setAcademyInstructorEn(e.target.value)}
                    placeholder="e.g. Sensei R. Kumar (3rd Dan)"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={academyPhone}
                    onChange={(e) => setAcademyPhone(e.target.value)}
                    placeholder="+91 98400 12345"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-red-950 font-bold py-2.5 rounded-lg uppercase tracking-wider"
                >
                  Save Academy
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-amber-300 mb-2">Affiliated Academies Directory</h3>
              {academies.map(ac => (
                <div key={ac.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded">
                      {ac.districtEn}
                    </span>
                    <h4 className="text-xs font-bold text-gray-200">{ac.nameEn}</h4>
                    <p className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      {ac.addressEn}
                    </p>
                    <p className="text-[11px] text-gray-400">{ac.instructorEn} • {ac.phone}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteAcademy(ac.id);
                      showToast('Academy removed.');
                    }}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/50 hover:text-rose-200 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Documents */}
        {activeTab === 'docs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 h-fit">
              <h3 className="text-sm font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Upload Official PDF / Form
              </h3>

              <form onSubmit={handleAddDocument} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Document Title (English)</label>
                  <input
                    type="text"
                    required
                    value={docTitleEn}
                    onChange={(e) => setDocTitleEn(e.target.value)}
                    placeholder="e.g. 2026 Athlete Medical Clearance Form"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Category</label>
                  <select
                    value={docCategoryEn}
                    onChange={(e) => setDocCategoryEn(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-gray-100"
                  >
                    <option value="Official Circular">Official Circular</option>
                    <option value="Forms & Downloads">Forms & Downloads</option>
                    <option value="Rules & Syllabus">Rules & Syllabus</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-red-950 font-bold py-2.5 rounded-lg uppercase tracking-wider"
                >
                  Upload Document
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-amber-300 mb-2">Available PDF Documents</h3>
              {documents.map(doc => (
                <div key={doc.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded">
                      {doc.categoryEn}
                    </span>
                    <h4 className="text-xs font-bold text-gray-200">{doc.titleEn}</h4>
                    <p className="text-[11px] text-gray-400">{doc.fileSize} • {doc.uploadDate}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteDocument(doc.id);
                      showToast('Document deleted.');
                    }}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/50 hover:text-rose-200 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
