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
    <section className="py-20 bg-zinc-900 text-white relative overflow-hidden w-full border-b border-amber-900/30">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:18px_18px]"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold block">
            {language === 'en' ? 'Institutional Credibility' : 'அமைப்பின் அங்கீகாரம்'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 leading-tight">
            {t.trustChainTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {t.trustChainSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full mx-auto"></div>
        </div>

        {/* 4 Node Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div
                key={index}
                className="bg-zinc-950/90 rounded-2xl p-6 border border-amber-500/20 shadow-xl relative hover:border-amber-400/60 transition-all card-hover group backdrop-blur-md"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] text-amber-400 font-black uppercase tracking-widest block mb-1">
                  Step 0{index + 1}
                </span>

                <h3 className="text-base font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {node.title}
                </h3>

                <p className="text-xs text-amber-200/80 font-semibold mb-3">
                  {node.subtitle}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {language === 'en' ? node.descEn : node.descTa}
                </p>

                {index < nodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
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
