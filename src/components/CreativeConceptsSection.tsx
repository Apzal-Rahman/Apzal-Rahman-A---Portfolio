import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  FileText
} from 'lucide-react';
import { CONCEPT_POSTERS } from '../data/creativeConceptsData';
import { trackEvent } from '../utils/analytics';

export const CreativeConceptsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const featuredPosters = CONCEPT_POSTERS.slice(0, 4);
  const displayedPosters = isExpanded ? CONCEPT_POSTERS : featuredPosters;

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    trackEvent('creative_concept_lightbox_open', {
      concept_id: CONCEPT_POSTERS[index]?.id,
      concept_number: index + 1
    });
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showPrevPoster = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? CONCEPT_POSTERS.length - 1 : prev - 1;
    });
  }, []);

  const showNextPoster = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === CONCEPT_POSTERS.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevPoster();
      } else if (e.key === 'ArrowRight') {
        showNextPoster();
      }
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, closeLightbox, showPrevPoster, showNextPoster]);

  return (
    <section
      id="creative-concepts"
      className="relative py-20 border-t border-[#EAE4DA] bg-transparent"
      aria-label="Creative Concepts"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header with Centered Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-3 sm:mb-4">
            <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[120px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
              <h2 className="font-serif-heading font-normal text-base sm:text-2xl md:text-3xl tracking-[0.12em] sm:tracking-[0.18em] text-[#141312] uppercase text-center">
                Creative Concepts
              </h2>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            </div>
            <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[120px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
          </div>
          <p className="font-editorial italic text-xs sm:text-base text-[#5C564F] px-2 leading-relaxed">
            Poster ideas. Concept and direction by Apzal. Visuals AI-generated.
          </p>
        </div>

        {/* Poster Cards Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {displayedPosters.map((poster, index) => {
            return (
              <div
                key={poster.id}
                id={`concept-card-${poster.id}`}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#B38742]/80 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(158,120,62,0.12)] hover:-translate-y-1"
              >
                {/* Poster Image Container */}
                <div className="relative aspect-[4/5] sm:aspect-[1/1] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={poster.image}
                    alt={poster.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
                  />

                  {/* Subtle Vignette & Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Direction Number Badge (Top Left) */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="px-2.5 py-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-semibold rounded-full backdrop-blur-md bg-[#141312]/85 border border-[#D8C7A5]/80 text-[#FAF8F5] shadow-xs">
                      Direction {poster.number.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Quick Zoom Action Icon (Top Right) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-[#141312]/80 border border-[#D8C7A5] flex items-center justify-center text-white backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D8C7A5]" />
                    </div>
                  </div>

                  {/* Bottom Image Tagline Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                    <p className="text-white/90 text-xs sm:text-sm font-serif italic drop-shadow-md">
                      &ldquo;{poster.tagline}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-t border-[#EAE4DA] bg-white group-hover:bg-[#FAF8F5] transition-colors">
                  <div className="min-w-0">
                    <h4 className="font-serif-heading font-medium text-sm sm:text-base text-[#141312] truncate">
                      {poster.directionTitle}
                    </h4>
                    <p className="text-xs text-[#78716A] truncate mt-0.5 font-normal">
                      {poster.aesthetic}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold tracking-wider uppercase text-[#8C6527] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    View
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Concepts / Collapse Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            type="button"
            onClick={() => {
              const nextState = !isExpanded;
              setIsExpanded(nextState);
              trackEvent('creative_concepts_toggle_expand', { expanded: nextState });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-[#FAF8F5] border border-[#D8C7A5] hover:border-[#9E783E] text-[#141312] text-xs sm:text-[13px] tracking-[0.14em] uppercase font-semibold rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>
              {isExpanded 
                ? 'Show Fewer Concepts' 
                : `View All Concepts (${CONCEPT_POSTERS.length} Directions)`}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#9E783E]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#9E783E]" />
            )}
          </button>
        </div>

        {/* Caption Block Under Grid */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto bg-white border border-[#EAE4DA] rounded-2xl p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold rounded-full bg-[#FBF8F2] text-[#8C6527] border border-[#D8C7A5]">
              <FileText className="w-3.5 h-3.5" />
              <span>Concept &amp; direction</span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#8C6527] tracking-wider uppercase bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EAE4DA]">
              {CONCEPT_POSTERS.length} Visual Directions
            </span>
          </div>

          <h3 className="font-serif-heading font-medium text-lg sm:text-xl text-[#141312]">
            Super Singer 12: The Judges (concept)
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
            One idea explored across {CONCEPT_POSTERS.length} visual directions: ex-contestants turned judges. Tagline:{' '}
            <span className="font-serif italic font-semibold text-[#141312]">
              &lsquo;Once they sang. Now they decide.&rsquo;
            </span>
          </p>

          <p className="mt-2 text-[11px] sm:text-xs text-[#8C8479] italic font-normal">
            Independent concept work, not an official campaign.
          </p>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && CONCEPT_POSTERS[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Poster Concept Lightbox"
        >
          {/* Main Lightbox Card Container */}
          <div
            className="relative max-w-5xl w-full max-h-[96vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 px-1 text-white">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/10 text-[#D8C7A5] border border-white/20">
                  {CONCEPT_POSTERS[activeLightboxIndex].number.toString().padStart(2, '0')} / {CONCEPT_POSTERS.length}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90 hidden sm:inline">
                  {CONCEPT_POSTERS[activeLightboxIndex].directionTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-white/50 hidden md:inline">
                  ESC to close • Arrows to navigate
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster Image with Navigation Arrows */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/60 border border-white/10 shadow-2xl">
              
              {/* Previous Button */}
              <button
                type="button"
                onClick={showPrevPoster}
                className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#4B1F2A] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-lg"
                aria-label="Previous Poster"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center p-2">
                <img
                  src={CONCEPT_POSTERS[activeLightboxIndex].image}
                  alt={CONCEPT_POSTERS[activeLightboxIndex].alt}
                  className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={showNextPoster}
                className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#4B1F2A] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-lg"
                aria-label="Next Poster"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-serif italic text-[#D8C7A5]">
                  &ldquo;{CONCEPT_POSTERS[activeLightboxIndex].tagline}&rdquo;
                </p>
                <p className="text-[11px] sm:text-xs text-white/70 truncate">
                  Super Singer 12: The Judges (concept) • {CONCEPT_POSTERS[activeLightboxIndex].directionTitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] tracking-wider uppercase text-white/50">
                  Concept &amp; direction by Apzal
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
