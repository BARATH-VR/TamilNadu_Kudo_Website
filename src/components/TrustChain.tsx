'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, MapPin, Award, Globe, ArrowRight } from 'lucide-react';

export const TrustChain: React.FC = () => {
  const { language, t } = useLanguage();

  const nodes = [
    {
      title: t.nodeDistrict,
      subtitle: t.nodeDistrictSub,
      descEn: "14 Affiliated District Secretariats across Tamil Nadu training sub-juniors to seniors.",
      descTa: "14 மாவட்ட செயலாக்க அலுவலகங்கள் மூலம் பயிற்சி வழங்கப்படுகிறது.",
      icon: MapPin,
      color: "from-amber-600 to-amber-800"
    },
    {
      title: t.nodeState,
      subtitle: t.nodeStateSub,
      descEn: "Official State Body conducting state championships and belt grading certifications.",
      descTa: "மாநில சாம்பியன்ஷிப் மற்றும் பெல்ட் தரவரிசைகளை நடத்தும் அதிகாரப்பூர்வ அமைப்பு.",
      icon: ShieldCheck,
      color: "from-red-700 to-red-900"
    },
    {
      title: t.nodeNational,
      subtitle: t.nodeNationalSub,
      descEn: "Kudo International Federation India (KIFI) recognized by Ministry & SGFI.",
      descTa: "அமைச்சகம் மற்றும் SGFI ஆல் அங்கீகரிக்கப்பட்ட இந்திய கூட்டமைப்பு.",
      icon: Award,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: t.nodeGlobal,
      subtitle: t.nodeGlobalSub,
      descEn: "KIF Japan & IOC World Games recognized non-profit international movement.",
      descTa: "ஜப்பான் தலைமை மற்றும் ஒலிம்பிக் இயக்க அங்கீகாரம் பெற்ற உலகளாவிய அமைப்பு.",
      icon: Globe,
      color: "from-yellow-500 to-amber-600"
    }
  ];

  return (
    <section className="py-16 bg-zinc-900 text-white relative overflow-hidden w-full">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            {language === 'en' ? 'Institutional Credibility' : 'அமைப்பின் அங்கீகாரம்'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mt-4 leading-tight">
            {t.trustChainTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3">
            {t.trustChainSubtitle}
          </p>
        </div>

        {/* 4 Node Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div
                key={index}
                className="bg-zinc-950/80 rounded-2xl p-6 border border-amber-500/20 shadow-xl relative hover:border-amber-400/50 transition-all card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  Step 0{index + 1}
                </span>

                <h3 className="text-lg font-bold text-gray-100 group-hover:text-amber-300 transition-colors">
                  {node.title}
                </h3>

                <p className="text-xs text-amber-200/70 font-medium mb-3">
                  {node.subtitle}
                </p>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {language === 'en' ? node.descEn : node.descTa}
                </p>

                {index < nodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
