import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { SKILLS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'categorized' | 'all'>('categorized');

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 bg-transparent border-t border-[#EAE4DA]"
      aria-label="Core Competencies and Skills"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 className="font-serif-heading font-normal text-lg sm:text-2xl md:text-3xl tracking-[0.16em] sm:tracking-[0.18em] text-[#141312] uppercase">
              SKILLS &amp; CAPABILITIES
            </h2>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
        </div>

        {/* CRM & Tracking Troubleshooting Skill Card Callout */}
        <div 
          id="skill-card-crm-troubleshooting"
          className="mb-8 sm:mb-10 max-w-4xl mx-auto bg-white border border-[#D8C7A5] hover:border-[#9E783E] rounded-2xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] border border-[#E8DECE] flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="w-5 h-5 text-[#9E783E]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-[#8C6527]">
                    SPECIALIZED COMPETENCY
                  </span>
                </div>
                <h3 className="font-serif-heading font-semibold text-base sm:text-lg tracking-wide uppercase text-[#141312]">
                  CRM &amp; Tracking Troubleshooting
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4A453F] leading-relaxed font-normal">
                  Diagnosed and resolved lead-capture failures across SellDo, GA4, and GTM — including duplicate trigger conflicts and CRM integration gaps — ensuring leads flow correctly from ad platform to sales team.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap md:flex-col gap-1.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#EAE4DA] md:items-end">
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EAE4DA] rounded-full text-[11px] font-semibold text-[#8C6527]">
                SellDo CRM
              </span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EAE4DA] rounded-full text-[11px] font-semibold text-[#8C6527]">
                Google Analytics 4
              </span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EAE4DA] rounded-full text-[11px] font-semibold text-[#8C6527]">
                Google Tag Manager
              </span>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <button
            onClick={() => setViewMode('categorized')}
            className={`px-3.5 py-1.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
              viewMode === 'categorized'
                ? 'bg-[#4B1F2A] text-white shadow-xs'
                : 'bg-white text-[#78716A] border border-[#EAE4DA] hover:bg-[#FAF8F5]'
            }`}
          >
            By Category
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
              viewMode === 'all'
                ? 'bg-[#4B1F2A] text-white shadow-xs'
                : 'bg-white text-[#78716A] border border-[#EAE4DA] hover:bg-[#FAF8F5]'
            }`}
          >
            All Skills
          </button>
        </div>

        {viewMode === 'categorized' ? (
          /* Categorized Skill Blocks */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAE4DA] hover:border-[#9E783E]/80 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-[#F2ECE1]">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
                    <h3 className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase text-[#141312]">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#9E783E] text-[#2E2A26] hover:text-[#9E783E] rounded-full text-xs tracking-wide transition-colors font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Curated approved skills list - High readability pills */
          <div 
            id="skills-grid"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-4xl mx-auto"
          >
            {SKILLS_LIST.map((skill, index) => (
              <div
                key={index}
                id={`skill-tag-${index}`}
                className="px-3.5 py-2 sm:px-6 sm:py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#9E783E] rounded-full transition-all duration-200 text-center cursor-default group shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
              >
                <span className="text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.16em] font-semibold text-[#2E2A26] group-hover:text-[#9E783E] uppercase whitespace-nowrap transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Subtle note honoring the editorial brief */}
        <p className="mt-8 text-center text-[11px] tracking-[0.16em] uppercase text-[#78716A] font-semibold">
          Curated core competencies in paid media, creative strategy, scriptwriting, and performance marketing
        </p>

      </div>
    </section>
  );
};
