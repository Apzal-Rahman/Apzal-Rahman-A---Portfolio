import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-transparent border-t border-[#EAE4DA]"
      aria-label="Core Competencies and Skills"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 className="font-serif-heading font-normal text-lg sm:text-2xl md:text-3xl tracking-[0.16em] sm:tracking-[0.18em] text-[#141312] uppercase">
              SKILLS
            </h2>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
        </div>

        {/* Curated approved skills list - High readability pills */}
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

        {/* Subtle note honoring the editorial brief */}
        <p className="mt-8 text-center text-[11px] tracking-[0.16em] uppercase text-[#78716A] font-semibold">
          Curated core competencies in paid media, creative strategy, and ad tech analytics
        </p>

      </div>
    </section>
  );
};
