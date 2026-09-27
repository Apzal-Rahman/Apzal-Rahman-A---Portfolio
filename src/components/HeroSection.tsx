import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  onResumeClick: (location?: any, meta?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResumeClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
      aria-label="Introduction and Hero"
    >
      {/* Hero Ambient Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(217,119,6,0.06),transparent_70%)] z-0" 
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        {/* Small top diamond ornament */}
        <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#9E783E]" />
          <span className="w-2 h-2 rotate-45 border border-[#9E783E] bg-[#9E783E]/20" />
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#9E783E]" />
        </div>

        {/* Main Display Name - Editorial Serif Heading with generous tracking */}
        <h1 
          id="hero-name-heading"
          className="font-serif-heading font-normal tracking-[0.08em] sm:tracking-[0.14em] text-[#141312] text-3xl sm:text-7xl md:text-8xl lg:text-[6.25rem] leading-[1.1] sm:leading-[1.05] uppercase select-none max-w-5xl"
        >
          APZAL <br />
          RAHMAN
        </h1>

        {/* Professional Positioning Tracked Subtitle / Header Tagline */}
        <p 
          id="hero-positioning-tag"
          className="mt-3.5 sm:mt-6 text-[10px] sm:text-sm tracking-[0.16em] sm:tracking-[0.24em] font-semibold text-[#9E783E] uppercase px-2"
        >
          Performance &amp; Creative Marketing Strategist —
        </p>

        {/* Hero Narrative Copy - Editorial Serif Italic */}
        <p 
          id="hero-statement"
          className="font-editorial italic font-normal mt-3.5 sm:mt-6 max-w-3xl text-lg sm:text-3xl md:text-[2rem] text-[#141312] leading-snug text-center px-2 sm:px-4"
        >
          “I turn product truths and business problems into stories people remember.”
        </p>

        {/* Supporting Performance Metrics Callout Line */}
        <p 
          id="hero-metrics-subline"
          className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-[15px] font-medium text-[#78716A] max-w-2xl text-center px-4 tracking-normal leading-relaxed"
        >
          242K+ people reached, 35 qualified leads, 5.39M views, 5,200+ subscribers gained — performance marketing backed by creative execution.
        </p>

        {/* About / Bio Section */}
        <div 
          id="about"
          className="mt-5 sm:mt-7 max-w-3xl bg-white/80 backdrop-blur-xs border border-[#EAE4DA] rounded-2xl p-4 sm:p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C6527]">
              ABOUT APZAL RAHMAN
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#4A453F] font-normal">
            A marketing professional blending creative storytelling with performance-driven execution — from scriptwriting and content development to running paid campaigns across Meta, Google, and YouTube that have generated millions of views and measurable leads. I combine content that connects with campaigns that convert, and I&apos;m looking to grow as a Performance &amp; Creative Marketing Strategist who can own both the story and the numbers behind it.
          </p>
          
          {/* Relocation / Availability Line */}
          <div className="mt-3.5 pt-3 border-t border-[#EAE4DA]/70 flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium text-[#4B1F2A]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Open to relocating — actively exploring opportunities in the UAE (Dubai).</span>
          </div>
        </div>

        {/* Subtle decorative diamond divider */}
        <div className="flex items-center gap-2 my-3 sm:my-5 opacity-60">
          <span className="w-6 h-[1px] bg-[#9E783E]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          <span className="w-6 h-[1px] bg-[#9E783E]" />
        </div>

        {/* Secondary capabilities punchline */}
        <p 
          id="hero-subtext"
          className="text-xs sm:text-base text-[#5C564F] tracking-normal max-w-xl font-normal leading-relaxed px-2"
        >
          Paid media, creative strategy, scriptwriting and digital growth.
        </p>

        {/* Actions Row */}
        <div 
          id="hero-actions-row"
          className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4 w-full max-w-xs sm:max-w-2xl"
        >
          <a
            href="#work"
            id="hero-btn-view-work"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#4B1F2A] hover:bg-[#5C2634] text-[#FAF8F5] text-[11px] sm:text-[13px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-200 shadow-md hover:shadow-lg rounded-full min-h-[40px] sm:min-h-[44px] w-full sm:w-auto"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8C7A5] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            id="hero-btn-connect"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white hover:bg-[#FAF8F5] text-[#141312] border border-[#DCD5CA] hover:border-[#9E783E] text-[11px] sm:text-[13px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-200 rounded-full shadow-xs min-h-[40px] sm:min-h-[44px] w-full sm:w-auto"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#78716A] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Strategic Resume Action: Hero */}
          <button
            onClick={() => onResumeClick('hero_section', { buttonId: 'hero-btn-download-resume', buttonName: 'Resume Hero Action' })}
            id="hero-btn-download-resume"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 bg-[#FBF8F2] hover:bg-[#F5EFE4] text-[#8C6527] border border-[#D8C7A5] text-[11px] sm:text-[13px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-200 rounded-full cursor-pointer shadow-xs min-h-[40px] sm:min-h-[44px] w-full sm:w-auto"
          >
            <span>DOWNLOAD RESUME</span>
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9E783E] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
