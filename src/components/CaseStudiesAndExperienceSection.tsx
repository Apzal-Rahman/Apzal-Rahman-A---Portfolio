import React from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { CASE_STUDIES, EXPERIENCES, CaseStudy } from '../data/portfolioData';

interface CaseStudiesAndExperienceProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onResumeClick: () => void;
}

export const CaseStudiesAndExperienceSection: React.FC<CaseStudiesAndExperienceProps> = ({
  onSelectCaseStudy,
  onResumeClick,
}) => {
  return (
    <section
      id="case-studies"
      className="relative py-20 bg-transparent border-t border-slate-200/80"
      aria-label="Creative Case Studies and Experience"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Two-Column Responsive Layout: Case Studies on Left, Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* LEFT: Creative Case Studies */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
              <h2 className="font-serif-heading font-normal text-base sm:text-xl tracking-[0.16em] text-[#141312] uppercase">
                CREATIVE CASE STUDIES
              </h2>
            </div>

            {/* Case Studies Interactive Rows */}
            <div className="border border-[#EAE4DA] rounded-2xl overflow-hidden bg-white divide-y divide-[#EAE4DA] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {CASE_STUDIES.map((study) => (
                <div
                  key={study.id}
                  id={`case-study-row-${study.id}`}
                  onClick={() => onSelectCaseStudy(study)}
                  className="group p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 hover:bg-[#FAF8F5] transition-all duration-200 cursor-pointer min-h-[56px]"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                    <div className="w-7 h-7 rounded-full border border-[#E8DECE] bg-[#FBF8F2] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:border-[#9E783E] transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-[#9E783E]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wide uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors">
                          {study.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] tracking-wider uppercase font-semibold border ${
                          study.contributionType === 'entire-script'
                            ? 'border-[#D8C7A5] text-[#8C6527] bg-[#FBF8F2]'
                            : 'border-emerald-200 text-emerald-800 bg-emerald-50/70'
                        }`}>
                          {study.contributionType === 'entire-script' ? 'Entire Work: Scripting' : 'Contributed with Team'}
                        </span>
                      </div>
                      {study.fileName && (
                        <p className="font-mono text-[10px] text-[#8C827A] mt-0.5">
                          {study.fileName}
                        </p>
                      )}
                      <p className="font-editorial italic text-xs text-[#5C564F] mt-1 truncate">
                        {study.oneLineSummary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#9E783E] font-semibold group-hover:translate-x-0.5 transition-all shrink-0 min-w-[28px] justify-end">
                    <span className="hidden sm:inline">VIEW</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Trust Statement */}
            <p 
              id="case-studies-trust-statement"
              className="mt-4 text-[10.5px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#78716A] font-semibold pl-1"
            >
              MY ROLE IS CLEARLY IDENTIFIED ON EVERY PROJECT.
            </p>
          </div>


          {/* RIGHT: Experience Timeline */}
          <div id="experience" className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
                <h2 className="font-serif-heading font-normal text-base sm:text-xl tracking-[0.16em] text-[#141312] uppercase">
                  EXPERIENCE
                </h2>
              </div>

              {/* Strategic Resume Action 2 */}
              <button
                onClick={onResumeClick}
                id="experience-resume-btn"
                className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase font-semibold text-[#8C6527] hover:text-[#73521E] py-2 sm:py-1.5 px-4 sm:px-3.5 border border-[#D8C7A5] bg-[#FBF8F2] hover:bg-[#F5EFE4] rounded-full transition-colors cursor-pointer shadow-xs min-h-[38px]"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l border-[#EAE4DA] space-y-6 ml-2">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#9E783E] group-hover:bg-[#9E783E] group-hover:scale-125 transition-all shadow-xs" />

                  <div className="bg-white border border-[#EAE4DA] group-hover:border-[#B38742]/80 p-4 sm:p-5 rounded-2xl transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold text-[#9E783E] uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase text-[#141312] mt-1">
                      {exp.company}
                    </h3>

                    <p className="text-xs font-semibold text-[#8C6527] mt-0.5 tracking-wide uppercase">
                      {exp.role}
                    </p>

                    <p className="text-xs text-[#5C564F] mt-2 leading-relaxed font-normal">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Team Statement */}
            <p 
              id="experience-team-statement"
              className="mt-6 text-[11px] tracking-[0.16em] uppercase text-[#78716A] font-semibold pl-2 italic"
            >
              Creative work developed with the support of my team.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
