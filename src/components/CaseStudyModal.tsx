import React, { useEffect } from 'react';
import { X, UserCheck, Users, Lightbulb, Target, BookOpen, FileText, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const isEntireScript = caseStudy.contributionType === 'entire-script';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#141312]/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="bg-white border border-[#EAE4DA] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#78716A] hover:text-[#141312] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#EAE4DA] transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#EAE4DA] pb-5 mb-6 pr-10 sm:pr-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#8C6527] font-semibold">
              CASE STUDY & NARRATIVE BREAKDOWN
            </span>
          </div>
          <h2 
            id="case-study-title"
            className="font-serif-heading font-semibold text-xl sm:text-3xl tracking-wide uppercase text-[#141312]"
          >
            {caseStudy.title}
          </h2>
          <p className="text-sm text-[#8C6527] font-medium mt-1">
            {caseStudy.oneLineSummary}
          </p>
          
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className={`text-[10px] tracking-[0.16em] uppercase font-semibold px-3 py-1 rounded-full border ${
              isEntireScript 
                ? 'bg-[#FBF8F2] border-[#D8C7A5] text-[#8C6527]' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              {isEntireScript ? 'Entire Work: Scripting' : 'Contributed with Team'}
            </span>
            {caseStudy.fileName && (
              <span className="font-mono text-[11px] text-[#78716A] bg-[#FAF8F5] px-2.5 py-0.5 rounded border border-[#EAE4DA]">
                {caseStudy.fileName}
              </span>
            )}
          </div>
        </div>

        {/* Work Attribution Clarification Callout */}
        <div className={`mb-6 p-3.5 rounded-xl border flex items-start gap-3 ${
          isEntireScript 
            ? 'bg-[#FBF8F2] border-[#D8C7A5] text-[#8C6527]' 
            : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
        }`}>
          {isEntireScript ? (
            <FileText className="w-4 h-4 text-[#9E783E] shrink-0 mt-0.5" />
          ) : (
            <Users className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          )}
          <div className="text-xs">
            <span className="font-semibold uppercase tracking-wider block">
              {isEntireScript ? 'Entire Work: Scripting Part' : 'Collaborative Contribution with Team'}
            </span>
            <p className="text-[#5C564F] mt-0.5">
              {isEntireScript 
                ? 'Scripting was my entire work (not the editing or any other post-production aspects).'
                : 'Contributed as part of the creative team on dialogue, concept, on-screen performance, or ad copy.'}
            </p>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-6 text-sm text-[#4A453F]">
          
          {/* Context */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-3 bg-[#9E783E] rounded-xs" /> Context
            </h3>
            <p className="leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
              {caseStudy.context}
            </p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] flex items-center gap-2 mb-1.5">
              <Target className="w-3.5 h-3.5 text-[#9E783E]" /> Objective
            </h3>
            <p className="leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
              {caseStudy.objective}
            </p>
          </div>

          {/* The Idea */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] flex items-center gap-2 mb-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#9E783E]" /> The Idea
            </h3>
            <p className="leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
              {caseStudy.theIdea}
            </p>
          </div>

          {/* My Contribution */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#8C6527] flex items-center gap-2 mb-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#9E783E]" /> My Contribution
            </h3>
            <p className="leading-relaxed bg-[#FBF8F2] p-3.5 rounded-xl border border-[#D8C7A5] text-[#141312] font-medium">
              {caseStudy.myContribution}
            </p>
          </div>

          {/* Team Collaboration */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] flex items-center gap-2 mb-1.5">
              <Users className="w-3.5 h-3.5 text-[#9E783E]" /> Team Collaboration
            </h3>
            <p className="leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
              {caseStudy.teamCollaboration}
            </p>
          </div>

          {/* What Was Produced & Public Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] mb-1.5">
                What Was Produced
              </h3>
              <p className="text-xs leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
                {caseStudy.whatWasProduced}
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] mb-1.5">
                Public Proof / Video
              </h3>
              <p className="text-xs leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#4A453F]">
                {caseStudy.publicProof}
              </p>
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <h3 className="text-xs tracking-[0.16em] uppercase font-semibold text-[#141312] flex items-center gap-2 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#9E783E]" /> What I Learned
            </h3>
            <p className="leading-relaxed italic text-sm bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE4DA] text-[#141312] font-medium font-serif">
              “{caseStudy.whatILearned}”
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#EAE4DA] flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#78716A]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Portfolio Documentation
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#D8C7A5] hover:bg-[#FAF8F5] text-xs tracking-wider uppercase text-[#141312] rounded-full transition-colors font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
