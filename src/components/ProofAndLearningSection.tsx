import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Heart, Award, CheckCircle2, Eye } from 'lucide-react';
import { LINKEDIN_POSTS, CERTIFICATIONS } from '../data/portfolioData';

export const ProofAndLearningSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'weekly' | 'creative'>('all');

  const filteredPosts = LINKEDIN_POSTS.filter((post) => {
    if (activeFilter === 'weekly') return post.entryNumber?.startsWith('Entry');
    if (activeFilter === 'creative') return !post.entryNumber?.startsWith('Entry');
    return true;
  });

  const MAX_DISPLAY_POSTS = 4;
  const displayedPosts = filteredPosts.slice(0, MAX_DISPLAY_POSTS);

  return (
    <section
      id="proof"
      className="relative py-20 bg-transparent border-t border-[#EAE4DA]"
      aria-label="Proof and Learning"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header with Centered Diamond Motif */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 className="font-serif-heading font-normal text-lg sm:text-2xl md:text-3xl tracking-[0.16em] sm:tracking-[0.18em] text-[#141312] uppercase">
              PROOF AND LEARNING
            </h2>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
        </div>

        {/* Layout Grid: LinkedIn Posts on Left/Center, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LinkedIn Posts and Feature Card - 8 columns */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAE4DA] pb-3 gap-3">
              <div>
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#9E783E] font-semibold">
                  DOCUMENTED LINKEDIN WRITING & CASE REFLECTIONS
                </span>
                <p className="text-xs text-[#5C564F] mt-0.5">
                  Real lessons from ad tech, on-set scripts, CRM troubleshooting, and generative video.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.16em] uppercase text-[#141312] hover:text-[#9E783E] font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0 min-h-[36px]"
              >
                <span>OPEN LINKEDIN FEED</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9E783E]" />
              </a>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 sm:py-1 text-[10px] tracking-[0.16em] uppercase font-semibold rounded-full transition-all cursor-pointer min-h-[36px] flex items-center justify-center ${
                  activeFilter === 'all'
                    ? 'bg-[#4B1F2A] text-[#FAF8F5]'
                    : 'bg-white text-[#5C564F] hover:text-[#141312] border border-[#EAE4DA]'
                }`}
              >
                Featured Posts ({activeFilter === 'all' ? displayedPosts.length : LINKEDIN_POSTS.length})
              </button>
              <button
                onClick={() => setActiveFilter('weekly')}
                className={`px-3.5 py-1.5 sm:py-1 text-[10px] tracking-[0.16em] uppercase font-semibold rounded-full transition-all cursor-pointer min-h-[36px] flex items-center justify-center ${
                  activeFilter === 'weekly'
                    ? 'bg-[#4B1F2A] text-[#FAF8F5]'
                    : 'bg-white text-[#5C564F] hover:text-[#141312] border border-[#EAE4DA]'
                }`}
              >
                One Week Series
              </button>
              <button
                onClick={() => setActiveFilter('creative')}
                className={`px-3.5 py-1.5 sm:py-1 text-[10px] tracking-[0.16em] uppercase font-semibold rounded-full transition-all cursor-pointer min-h-[36px] flex items-center justify-center ${
                  activeFilter === 'creative'
                    ? 'bg-[#4B1F2A] text-[#FAF8F5]'
                    : 'bg-white text-[#5C564F] hover:text-[#141312] border border-[#EAE4DA]'
                }`}
              >
                Creative & AdTech
              </button>
            </div>

            {/* LinkedIn Post Cards Grid - 2 Columns on Mobile, 2 Columns on Desktop (Max 4 posts) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {displayedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-[#EAE4DA] hover:border-[#B38742]/80 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:bg-[#FAF8F5] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md"
                >
                  {/* LinkedIn post author header */}
                  <div>
                    <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-[#F0EBE1] mb-2 sm:mb-3">
                      <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FAF8F5] border border-[#D8C7A5] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#8C6527] shrink-0">
                          AR
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] sm:text-xs font-semibold text-[#141312] truncate">
                              Apzal
                            </span>
                            <span className="hidden sm:inline text-xs font-semibold text-[#141312] truncate">
                              Rahman A
                            </span>
                            <span className="text-[8px] sm:text-[9px] text-[#9E783E] font-semibold">• 1st</span>
                          </div>
                          <span className="text-[8.5px] sm:text-[10px] text-[#78716A] block truncate">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {post.entryNumber && (
                        <span className="px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] tracking-tight sm:tracking-wider uppercase font-semibold border border-[#D8C7A5] text-[#8C6527] bg-[#FBF8F2] shrink-0">
                          {post.entryNumber}
                        </span>
                      )}
                    </div>

                    {/* Post Content */}
                    <h3 className="font-serif-heading font-semibold text-[11px] sm:text-[13px] tracking-tight sm:tracking-wide text-[#141312] group-hover:text-[#9E783E] transition-colors uppercase line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#5C564F] leading-tight sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {post.summary}
                    </p>

                    {/* Tags */}
                    {post.tags && (
                      <div className="hidden sm:flex mt-3 flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] text-[#8C6527] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer with reactions and Read Post link */}
                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-3 text-[#78716A] text-[9px] sm:text-[11px] font-medium">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500" /> {post.likes}
                      </span>
                      {post.impressions && (
                        <span className="hidden sm:flex items-center gap-1 text-[10px]">
                          <Eye className="w-3 h-3 text-[#9E783E]" /> {post.impressions}
                        </span>
                      )}
                      <span className="text-[8.5px] sm:text-[10px] text-[#78716A] truncate max-w-[60px] sm:max-w-none">{post.date}</span>
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] sm:text-[11px] tracking-tight sm:tracking-[0.16em] uppercase text-[#9E783E] group-hover:text-[#141312] font-semibold flex items-center gap-0.5 sm:gap-1 transition-colors"
                    >
                      <span>VIEW</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Highlight Banner Card */}
            <div className="p-5 sm:p-6 bg-[#FBF8F2] border border-[#E8DECE] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E783E] font-semibold block mb-1">
                  FEATURED EDITORIAL SERIES
                </span>
                <h3 className="font-serif-heading font-semibold text-sm sm:text-base md:text-lg tracking-wider text-[#141312] uppercase">
                  ONE WEEK. ONE LESSON. ONE EXPERIENCE.
                </h3>
                <p className="font-editorial italic text-xs sm:text-sm text-[#5C564F] mt-1">
                  Weekly transparent notes on what failed, what worked, and what moved consumer perception.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center shrink-0 px-6 py-3 bg-[#4B1F2A] hover:bg-[#5C2634] text-xs tracking-[0.18em] uppercase font-semibold text-[#FAF8F5] flex items-center gap-2 rounded-full transition-all shadow-md min-h-[44px]"
              >
                <span>VIEW ALL ON LINKEDIN</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8C7A5]" />
              </a>
            </div>
          </div>

          {/* RIGHT: Certifications and Learning Tiles - 4 columns */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="border-b border-[#EAE4DA] pb-2">
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#9E783E] font-semibold">
                CERTIFICATIONS & ACCREDITATIONS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:space-y-3.5 sm:gap-0">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-2.5 sm:p-4 bg-white border border-[#EAE4DA] hover:border-[#B38742]/80 rounded-xl sm:rounded-2xl transition-all flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 group hover:bg-[#FAF8F5] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FBF8F2] border border-[#E8DECE] flex items-center justify-center shrink-0 group-hover:border-[#9E783E] transition-colors">
                    {cert.id === 'google-digital' ? (
                      <span className="font-bold text-xs sm:text-sm text-blue-600">G</span>
                    ) : cert.id === 'trade-desk' ? (
                      <span className="font-bold text-[10px] sm:text-xs text-[#8C6527]">TTD</span>
                    ) : cert.id === 'stackadapt' ? (
                      <span className="font-bold text-[10px] sm:text-xs text-[#8C6527]">SA</span>
                    ) : (
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9E783E]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-heading font-semibold text-[11px] sm:text-xs tracking-tight sm:tracking-wider uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors truncate">
                        {cert.title}
                      </h4>
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0 ml-1" />
                    </div>

                    <p className="text-[9.5px] sm:text-[11px] text-[#9E783E] font-semibold mt-0.5 truncate">
                      {cert.issuer}
                    </p>

                    <p className="text-[9px] sm:text-[10px] text-[#5C564F] mt-1 leading-tight font-normal line-clamp-2 sm:line-clamp-none">
                      {cert.skillsGained}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] tracking-[0.16em] uppercase text-[#78716A] text-center mt-2 font-semibold">
              Verified skills & quantitative marketing fundamentals
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
