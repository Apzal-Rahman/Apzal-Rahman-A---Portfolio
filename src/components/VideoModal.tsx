import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Film, CheckCircle2, FileText, Users } from 'lucide-react';
import { ProjectVideo } from '../data/portfolioData';

interface VideoModalProps {
  project: ProjectVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isEntireScript = project.workType === 'entire-script';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#141312]/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        className="bg-white border border-[#EAE4DA] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EAE4DA] bg-[#FAF8F5]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Film className="w-4 h-4 text-[#9E783E] shrink-0" />
            <span className={`text-[10px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${
              isEntireScript 
                ? 'bg-[#FBF8F2] border-[#D8C7A5] text-[#8C6527]' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              {isEntireScript ? 'Entire Work: Scripting' : 'Contributed with Team'}
            </span>
            {project.fileName && (
              <span className="hidden sm:inline-block font-mono text-[11px] text-[#78716A] bg-white px-2 py-0.5 rounded border border-[#EAE4DA]">
                {project.fileName}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#78716A] hover:text-[#141312] bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close video player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Canvas */}
        <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden flex items-center justify-center">
          {project.youtubeId ? (
            <iframe
              className="w-full h-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-black/60" />

              {/* Player Callout Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#141312]/85 border border-[#D8C7A5] flex items-center justify-center shadow-xl mb-3 hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-[#FAF8F5] fill-[#FAF8F5] ml-0.5" />
                </div>

                <h3 
                  id="video-modal-title"
                  className="font-serif-heading font-normal text-xl sm:text-2xl tracking-wide uppercase text-white"
                >
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#FAF8F5]/85 max-w-lg font-normal">
                  {project.shortDescription}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-[#4B1F2A] hover:bg-[#5C2634] text-[#FAF8F5] font-semibold text-xs tracking-wider uppercase rounded-full transition-colors shadow-md cursor-pointer border border-[#D8C7A5]/40"
                >
                  <span>WATCH ON YOUTUBE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8C7A5]" />
                </a>
              </div>
            </>
          )}
        </div>

        {/* Modal Information Footer */}
        <div className="p-6 sm:p-7 bg-white space-y-4">
          
          {/* Work Attribution Banner */}
          <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
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
                  ? 'The script for this project was written entirely by Apzal (scripting only, not video editing or other production).'
                  : 'Developed collaboratively with the creative team, contributing to dialogue, concept, on-screen performance, or ad copy.'}
              </p>
            </div>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#8C6527] font-semibold block">
              ROLE & RESPONSIBILITY
            </span>
            <p className="font-serif-heading font-semibold text-sm sm:text-base text-[#141312] mt-1">
              {project.role}
            </p>
          </div>

          <p className="text-xs sm:text-[13px] text-[#4A453F] leading-relaxed bg-[#FAF8F5] p-4 border border-[#EAE4DA] rounded-xl font-normal">
            {project.details}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#EAE4DA] text-xs text-[#78716A]">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#5C564F]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Video Portfolio Asset ({project.fileName})
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 border border-[#D8C7A5] hover:bg-[#FAF8F5] text-xs uppercase tracking-wider text-[#141312] rounded-full font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
