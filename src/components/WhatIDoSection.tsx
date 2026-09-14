import React from 'react';
import {
  Target,
  Lightbulb,
  FileText,
  MessageSquare,
  BookOpen,
  Globe,
  BarChart3,
  Video
} from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export const WhatIDoSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'performance-marketing':
        return <Target className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'creative-strategy':
        return <Lightbulb className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'scriptwriting':
        return <FileText className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'dialogue':
        return <MessageSquare className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'product-storytelling':
        return <BookOpen className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'web-and-wordpress':
        return <Globe className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'analytics-and-reporting':
        return <BarChart3 className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      case 'video-collaboration':
        return <Video className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
      default:
        return <Target className="w-5 h-5 text-[#9E783E]" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="what-i-do"
      className="relative py-20 bg-transparent border-t border-[#EAE4DA]"
      aria-label="Capabilities and Services"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[80px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
              <h2 className="font-serif-heading font-normal text-lg sm:text-2xl md:text-3xl tracking-[0.16em] sm:tracking-[0.18em] text-[#141312] uppercase">
                WHAT I DO
              </h2>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            </div>
            <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[80px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
          </div>
          <p className="font-editorial italic text-base sm:text-xl text-[#5C564F] px-2">
            “I connect audience thinking, business goals and memorable ideas.”
          </p>
        </div>

        {/* 8 Capability Cards Grid - 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              id={`capability-${cap.id}`}
              className="group p-3.5 sm:p-7 bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#B38742]/80 rounded-xl sm:rounded-2xl transition-all duration-300 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_rgba(158,120,62,0.09)] hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#FBF8F2] border border-[#E8DECE] flex items-center justify-center mb-2.5 sm:mb-4 group-hover:bg-[#F5EFE4] group-hover:scale-105 transition-all [&_svg]:w-3.5 [&_svg]:h-3.5 sm:[&_svg]:w-5 sm:[&_svg]:h-5">
                {getIcon(cap.id)}
              </div>

              {/* Title */}
              <h3 className="font-serif-heading font-semibold text-[11px] sm:text-[13px] tracking-tight sm:tracking-[0.14em] text-[#141312] group-hover:text-[#9E783E] transition-colors uppercase leading-snug">
                {cap.title}
              </h3>

              {/* Short Description */}
              <p className="mt-1.5 sm:mt-2.5 text-[10px] sm:text-xs text-[#5C564F] leading-normal sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
