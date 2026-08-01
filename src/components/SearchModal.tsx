'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAdmin } from '@/context/AdminContext';
import { Search, X, Calendar, MapPin, FileText, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentView: (view: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, setCurrentView }) => {
  const { language, t } = useLanguage();
  const { events, news, academies, documents } = useAdmin();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredEvents = cleanQuery ? events.filter(e => 
    e.titleEn.toLowerCase().includes(cleanQuery) || 
    e.titleTa.toLowerCase().includes(cleanQuery) ||
    e.venueEn.toLowerCase().includes(cleanQuery)
  ) : [];

  const filteredNews = cleanQuery ? news.filter(n => 
    n.titleEn.toLowerCase().includes(cleanQuery) || 
    n.titleTa.toLowerCase().includes(cleanQuery) ||
    n.excerptEn.toLowerCase().includes(cleanQuery)
  ) : [];

  const filteredAcademies = cleanQuery ? academies.filter(a => 
    a.nameEn.toLowerCase().includes(cleanQuery) || 
    a.districtEn.toLowerCase().includes(cleanQuery) ||
    a.instructorEn.toLowerCase().includes(cleanQuery)
  ) : [];

  const filteredDocs = cleanQuery ? documents.filter(d => 
    d.titleEn.toLowerCase().includes(cleanQuery) || 
    d.categoryEn.toLowerCase().includes(cleanQuery)
  ) : [];

  const totalResults = filteredEvents.length + filteredNews.length + filteredAcademies.length + filteredDocs.length;

  const handleSelectResult = (view: string) => {
    setCurrentView(view);
    onClose();
    setQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        
        {/* Search Header Input */}
        <div className="p-4 border-b border-amber-900/30 flex items-center space-x-3 bg-zinc-950">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchDistrictPlaceholder}
            className="w-full bg-transparent text-gray-100 placeholder-gray-500 focus:outline-none text-sm font-medium"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!cleanQuery ? (
            <p className="text-xs text-gray-400 text-center py-8">
              {language === 'en' ? 'Type a district, event name, document, or academy...' : 'மாவட்ட பெயர், போட்டி அல்லது ஆவணத்தை தட்டச்சு செய்யவும்...'}
            </p>
          ) : totalResults === 0 ? (
            <p className="text-xs text-gray-400 text-center py-8">
              {language === 'en' ? 'No matching results found.' : 'முடிவுகள் எதுவும் கிடைக்கவில்லை.'}
            </p>
          ) : (
            <>
              {/* Events Results */}
              {filteredEvents.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {t.navEvents} ({filteredEvents.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredEvents.map(ev => (
                      <div
                        key={ev.id}
                        onClick={() => handleSelectResult('events')}
                        className="p-3 bg-zinc-950/60 rounded-xl hover:bg-amber-950/40 cursor-pointer border border-amber-500/10 flex justify-between items-center"
                      >
                        <div>
                          <h5 className="text-xs font-bold text-gray-200">
                            {language === 'en' ? ev.titleEn : ev.titleTa}
                          </h5>
                          <p className="text-[11px] text-gray-400">{ev.date} • {ev.venueEn}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Academies Results */}
              {filteredAcademies.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {t.navDistricts} ({filteredAcademies.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredAcademies.map(ac => (
                      <div
                        key={ac.id}
                        onClick={() => handleSelectResult('districts')}
                        className="p-3 bg-zinc-950/60 rounded-xl hover:bg-amber-950/40 cursor-pointer border border-amber-500/10 flex justify-between items-center"
                      >
                        <div>
                          <h5 className="text-xs font-bold text-gray-200">
                            {language === 'en' ? ac.nameEn : ac.nameTa}
                          </h5>
                          <p className="text-[11px] text-gray-400">{ac.districtEn} • {ac.instructorEn}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News & Notices */}
              {filteredNews.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {t.navResources} ({filteredNews.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredNews.map(nw => (
                      <div
                        key={nw.id}
                        onClick={() => handleSelectResult('resources')}
                        className="p-3 bg-zinc-950/60 rounded-xl hover:bg-amber-950/40 cursor-pointer border border-amber-500/10 flex justify-between items-center"
                      >
                        <div>
                          <h5 className="text-xs font-bold text-gray-200">
                            {language === 'en' ? nw.titleEn : nw.titleTa}
                          </h5>
                          <p className="text-[11px] text-gray-400">{nw.date} • {nw.categoryEn}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {filteredDocs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {t.categoryForms} ({filteredDocs.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredDocs.map(dc => (
                      <div
                        key={dc.id}
                        onClick={() => handleSelectResult('resources')}
                        className="p-3 bg-zinc-950/60 rounded-xl hover:bg-amber-950/40 cursor-pointer border border-amber-500/10 flex justify-between items-center"
                      >
                        <div>
                          <h5 className="text-xs font-bold text-gray-200">
                            {language === 'en' ? dc.titleEn : dc.titleTa}
                          </h5>
                          <p className="text-[11px] text-gray-400">{dc.categoryEn} • {dc.fileSize}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
