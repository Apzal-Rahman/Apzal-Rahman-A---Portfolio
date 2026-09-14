import React, { useState } from 'react';
import { Play, ArrowRight, ExternalLink, FileText, Users, CheckCircle2 } from 'lucide-react';
import { SELECTED_WORK, ProjectVideo } from '../data/portfolioData';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectVideo) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'entire-script' | 'contributed'>('all');

  const filteredProjects = SELECTED_WORK.filter((item) => {
    if (filter === 'all') return true;
    return item.workType === filter;
  });

  const entireWorkCount = SELECTED_WORK.filter(p => p.workType === 'entire-script').length;
  const contributedCount = SELECTED_WORK.filter(p => p.workType === 'contributed').length;

  return (
    <section
      id="work"
      className="relative py-20 border-t border-[#EAE4DA] bg-transparent"
      aria-label="Selected Work"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header with Centered Diamond Motif */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 className="font-serif-heading font-normal text-base sm:text-2xl md:text-3xl tracking-[0.12em] sm:tracking-[0.18em] text-[#141312] uppercase text-center">
              SELECTED WORK & VIDEO ATTRIBUTION
            </h2>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
        </div>

        {/* Attribution Scope Clarification Note */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#9E783E]" />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[#141312]">
              Verified Contribution Breakdown
            </span>
          </div>
          <p className="text-xs sm:text-[13px] text-[#5C564F] leading-relaxed">
            <strong className="text-[#8C6527] font-semibold">Entire Work:</strong> The scripting was written entirely by Apzal (scripting only, not editing or other production).{' '}
            <strong className="text-emerald-800 font-semibold ml-1">Contributed with Team:</strong> Collaborative work with creative teams on dialogue, concept, performance, or ad copy.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-2 sm:px-4 text-[11px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-full transition-all cursor-pointer font-semibold min-h-[40px] flex items-center justify-center ${
              filter === 'all'
                ? 'bg-[#141312] text-[#FAF8F5] shadow-sm'
                : 'bg-white hover:bg-[#FAF8F5] text-[#5C564F] border border-[#EAE4DA]'
            }`}
          >
            All Projects ({SELECTED_WORK.length})
          </button>
          <button
            onClick={() => setFilter('entire-script')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 text-[11px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-full transition-all cursor-pointer font-semibold min-h-[40px] ${
              filter === 'entire-script'
                ? 'bg-[#8C6527] text-white shadow-sm'
                : 'bg-[#FBF8F2] hover:bg-[#F5EEDF] text-[#8C6527] border border-[#D8C7A5]'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>Entire Work: Scripting ({entireWorkCount})</span>
          </button>
          <button
            onClick={() => setFilter('contributed')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 text-[11px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-full transition-all cursor-pointer font-semibold min-h-[40px] ${
              filter === 'contributed'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-800 border border-emerald-200'
            }`}
          >
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>Contributed with Team ({contributedCount})</span>
          </button>
        </div>

        {/* Video Cards Grid - 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredProjects.map((item) => {
            const isEntire = item.workType === 'entire-script';
            return (
              <div
                key={item.id}
                id={`card-${item.id}`}
                onClick={() => onSelectProject(item)}
                className="group cursor-pointer bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#B38742]/80 transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(158,120,62,0.12)] hover:-translate-y-1"
              >
                {/* Thumbnail Container with Play Button */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    width={600}
                    height={375}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Cinematic Vignette Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-50 group-hover:opacity-35 transition-opacity`} />

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#141312]/80 border border-[#D8C7A5] flex items-center justify-center group-hover:bg-[#4B1F2A] group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-3 h-3 sm:w-5 sm:h-5 text-[#FAF8F5] fill-[#FAF8F5] ml-0.5 transition-colors" />
                    </div>
                  </div>

                  {/* Scope Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[7.5px] sm:text-[9px] tracking-tight sm:tracking-[0.16em] uppercase font-semibold rounded-full backdrop-blur-md border shadow-xs ${
                      isEntire
                        ? 'bg-[#141312]/90 border-[#D8C7A5] text-[#FAF8F5]'
                        : 'bg-emerald-950/85 border-emerald-400/40 text-emerald-200'
                    }`}>
                      {isEntire ? (
                        <>
                          <span className="sm:hidden">Script</span>
                          <span className="hidden sm:inline">Entire Work: Scripting</span>
                        </>
                      ) : (
                        <>
                          <span className="sm:hidden">With Team</span>
                          <span className="hidden sm:inline">Contributed with Team</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* File Name Tag */}
                  {item.fileName && (
                    <div className="absolute bottom-2 right-2 hidden sm:block">
                      <span className="font-mono text-[10px] text-[#FAF8F5]/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                        {item.fileName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Information Block */}
                <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between text-left bg-transparent">
                  <div>
                    <h3 className="font-serif-heading font-semibold text-[11px] sm:text-[17px] leading-snug tracking-normal sm:tracking-wider text-[#141312] group-hover:text-[#9E783E] transition-colors uppercase line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className={`mt-0.5 sm:mt-1.5 text-[9px] sm:text-[11px] tracking-tight sm:tracking-[0.16em] uppercase font-semibold truncate ${
                      isEntire ? 'text-[#8C6527]' : 'text-emerald-800'
                    }`}>
                      {item.role}
                    </p>

                    <p className="hidden sm:block mt-2 text-[11px] italic text-[#78716A]">
                      {item.scopeNote}
                    </p>

                    <p className="mt-1 sm:mt-2.5 text-[10px] sm:text-xs text-[#5C564F] leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-3 border-t border-[#EAE4DA] flex items-center justify-between text-[9px] sm:text-[11px] tracking-tight sm:tracking-[0.18em] uppercase text-[#9E783E] group-hover:text-[#141312] font-semibold transition-colors">
                    <span>DETAILS</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link: VIEW MORE WORK ON LINKEDIN -> */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            id="work-linkedin-link"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#4A4540] hover:text-[#9E783E] font-semibold transition-colors py-2 px-4 border-b border-transparent hover:border-[#9E783E]"
          >
            <span>VIEW MORE WORK ON LINKEDIN</span>
            <ArrowRight className="w-4 h-4 text-[#9E783E]" />
          </a>
        </div>

      </div>
    </section>
  );
};
