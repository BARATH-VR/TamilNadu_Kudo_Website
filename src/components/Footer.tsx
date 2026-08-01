'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, MapPin, Phone, Mail, Award } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const { language, t } = useLanguage();

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-amber-900/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About Lockup */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-red-900 flex items-center justify-center text-red-950 font-bold">
                TN
              </div>
              <h3 className="text-lg font-bold text-amber-200">
                {t.associationName}
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {language === 'en'
                ? "Official governing body responsible for promoting, regulating, and advancing Kudo martial sport across all districts of Tamil Nadu under KIFI India and KIF Japan."
                : "KIFI இந்தியா மற்றும் KIF ஜப்பான் அமைப்புகளின் கீழ் தமிழ்நாட்டின் அனைத்து மாவட்டங்களிலும் குடோ தற்காப்பு விளையாட்டை மேம்படுத்தும் அதிகாரப்பூர்வ அமைப்பு."}
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold pt-2">
              <Shield className="w-4 h-4" />
              <span>SGFI & KIFI Recognized Body</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              {language === 'en' ? 'Quick Navigation' : 'விரைவு இணைப்புகள்'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-amber-300 transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-amber-300 transition-colors">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('districts')} className="hover:text-amber-300 transition-colors">
                  {t.navDistricts}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('events')} className="hover:text-amber-300 transition-colors">
                  {t.navEvents}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('achievements')} className="hover:text-amber-300 transition-colors">
                  {t.navAchievements}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-amber-300 transition-colors">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Notices */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              {language === 'en' ? 'Resources & Documents' : 'வளங்கள் & ஆவணங்கள்'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('resources')} className="hover:text-amber-300 transition-colors">
                  {t.categoryCirculars}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('resources')} className="hover:text-amber-300 transition-colors">
                  {t.categoryForms}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('resources')} className="hover:text-amber-300 transition-colors">
                  {t.categoryRules}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faqs')} className="hover:text-amber-300 transition-colors">
                  {t.navFaqs}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              {t.officeAddressTitle}
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.officeAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.officePhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.officeEmail}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Affiliation Badge Bar */}
        <div className="border-t border-amber-900/30 pt-8 pb-6 my-6 flex flex-wrap justify-around items-center gap-6 text-center text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>School Games Federation of India (SGFI)</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Kudo International Federation India (KIFI)</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>KIF Japan (World Governing Body)</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Tamil Nadu State Kudo Association. All rights reserved.</p>
          <p className="text-[11px] text-gray-600">Official State Sports Governing Body</p>
        </div>
      </div>
    </footer>
  );
};
