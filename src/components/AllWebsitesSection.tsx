import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Globe, Layers, CheckCircle, ExternalLink } from 'lucide-react';
import { WEBSITES, WebsiteItem } from '../data/portfolioData';

interface AllWebsitesSectionProps {
  onSelectWebsite: (website: WebsiteItem) => void;
}

export const AllWebsitesSection: React.FC<AllWebsitesSectionProps> = ({ onSelectWebsite }) => {
  const [filter, setFilter] = useState<string>('all');

  // SVG-based bespoke mockups tailored uniquely to each client's industry domain
  const renderWebsiteMockup = (item: WebsiteItem) => {
    switch (item.mockupType) {
      case 'logistics': // Diamond Packers & Movers
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-blue-500 flex items-center justify-center text-[9px] font-black text-white">D</div>
                <span className="text-[10px] font-bold text-blue-200 tracking-wider">DIAMOND PACKERS</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">All India Relocation</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Household & Industrial Moving</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[8px] bg-blue-600/30 text-blue-200 px-1.5 py-0.5 rounded">Fast Transit</span>
                <span className="text-[8px] bg-blue-600/30 text-blue-200 px-1.5 py-0.5 rounded">GPS Tracked</span>
                <span className="text-[8px] bg-blue-600/30 text-blue-200 px-1.5 py-0.5 rounded">Zero Damage</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-blue-600 text-[9px] font-bold uppercase tracking-wider text-center text-white rounded-xs">
              Get Instant Moving Estimate
            </div>
          </div>
        );

      case 'tech': // Pico Computers
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-emerald-500 flex items-center justify-center text-[9px] font-black text-black">P</div>
                <span className="text-[10px] font-bold text-emerald-200 tracking-wider">PICO COMPUTERS</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">Hardware & Rig Builds</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Custom Gaming Rigs & Workstations</div>
              <div className="grid grid-cols-2 gap-1.5 mt-2">
                <div className="bg-emerald-950/60 p-1 border border-emerald-500/20 text-[8px] text-emerald-200 text-center rounded">RTX GPUs</div>
                <div className="bg-emerald-950/60 p-1 border border-emerald-500/20 text-[8px] text-emerald-200 text-center rounded">Intel / AMD</div>
              </div>
            </div>
            <div className="w-full py-1.5 bg-emerald-600 text-[9px] font-bold uppercase tracking-wider text-center text-white rounded-xs">
              Configure Your System
            </div>
          </div>
        );

      case 'industrial': // Rahman Steels Erode
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-amber-500 flex items-center justify-center text-[9px] font-black text-black">RS</div>
                <span className="text-[10px] font-bold text-amber-200 tracking-wider">RAHMAN STEELS ERODE</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">IS:1786 Certified</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Fe-550D TMT Reinforcement Bars</div>
              <p className="text-[8px] text-stone-300 mt-1">Wholesale steel distribution, MS channels, structural beams & coils.</p>
            </div>
            <div className="w-full py-1.5 bg-amber-600 text-[9px] font-bold uppercase tracking-wider text-center text-black rounded-xs">
              Download Weight & Price Chart
            </div>
          </div>
        );

      case 'corporate': // Raham Group
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-950 via-slate-900 to-neutral-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-purple-500 flex items-center justify-center text-[9px] font-black text-white">RG</div>
                <span className="text-[10px] font-bold text-purple-200 tracking-wider">RAHAM GROUP</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">Conglomerate</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Diversified Business Ventures</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[8px] bg-purple-800/40 text-purple-200 px-1.5 py-0.5 rounded">Hospitality</span>
                <span className="text-[8px] bg-purple-800/40 text-purple-200 px-1.5 py-0.5 rounded">Real Estate</span>
                <span className="text-[8px] bg-purple-800/40 text-purple-200 px-1.5 py-0.5 rounded">Logistics</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-purple-700 text-[9px] font-bold uppercase tracking-wider text-center text-white rounded-xs">
              Explore Group Portfolios
            </div>
          </div>
        );

      case 'tourism': // Kani Tours
        return (
          <div className="w-full h-full bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-cyan-500 flex items-center justify-center text-[9px] font-black text-black">K</div>
                <span className="text-[10px] font-bold text-cyan-200 tracking-wider">KANI TOURS & TRAVELS</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">South India Circuit</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Heritage Temple & Hill Station Packages</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[8px] bg-cyan-900/40 text-cyan-200 px-1.5 py-0.5 rounded">Madurai</span>
                <span className="text-[8px] bg-cyan-900/40 text-cyan-200 px-1.5 py-0.5 rounded">Rameshwaram</span>
                <span className="text-[8px] bg-cyan-900/40 text-cyan-200 px-1.5 py-0.5 rounded">Ooty</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-cyan-600 text-[9px] font-bold uppercase tracking-wider text-center text-black rounded-xs">
              View Itineraries & Bookings
            </div>
          </div>
        );

      case 'travel': // Kaanakinav Travels
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-950 via-slate-900 to-rose-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-pink-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-pink-500 flex items-center justify-center text-[9px] font-black text-white">KT</div>
                <span className="text-[10px] font-bold text-pink-200 tracking-wider">KAANAKINAV TRAVELS</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-medium">Premium Fleets</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Executive Chauffeured Car Rentals</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[8px] bg-pink-900/40 text-pink-200 px-1.5 py-0.5 rounded">Innova Crysta</span>
                <span className="text-[8px] bg-pink-900/40 text-pink-200 px-1.5 py-0.5 rounded">Sedans</span>
                <span className="text-[8px] bg-pink-900/40 text-pink-200 px-1.5 py-0.5 rounded">Tempo</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-pink-700 text-[9px] font-bold uppercase tracking-wider text-center text-white rounded-xs">
              Reserve Your Fleet Ride
            </div>
          </div>
        );

      case 'architecture': // 30x40 Design Studio
        return (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-950 p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-stone-500/30 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-stone-300 flex items-center justify-center text-[9px] font-black text-black">30</div>
                <span className="text-[10px] font-bold text-stone-200 tracking-wider">30x40 DESIGN STUDIO</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-stone-700/40 text-stone-300 font-medium">Architecture</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-semibold text-white tracking-wide">Contemporary Residential Architecture</div>
              <div className="flex items-center gap-2 mt-2 text-[8px] text-stone-400">
                <span>• Blueprint</span>
                <span>• Structural</span>
                <span>• Interior Lighting</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-stone-700 text-[9px] font-bold uppercase tracking-wider text-center text-stone-100 rounded-xs">
              View Architectural Archive
            </div>
          </div>
        );

      case 'fashion': // Twylla
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#2D0C1E] via-[#1A0B1A] to-[#120815] p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-rose-400/25 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-rose-300/80 flex items-center justify-center text-[9px] font-serif font-black text-black">T</div>
                <span className="text-[10px] font-serif tracking-[0.25em] text-rose-200">TWYLLA</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 font-medium border border-rose-400/20">Slow Couture</span>
            </div>
            <div className="my-auto py-2">
              <div className="text-[11px] font-serif tracking-wider text-rose-100 font-medium">Handcrafted Ethnic & Contemporary Wear</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[8px] bg-rose-950/70 border border-rose-500/25 text-rose-200 px-1.5 py-0.5 rounded">Kurtas & Suits</span>
                <span className="text-[8px] bg-rose-950/70 border border-rose-500/25 text-rose-200 px-1.5 py-0.5 rounded">Custom Sizing</span>
                <span className="text-[8px] bg-rose-950/70 border border-rose-500/25 text-rose-200 px-1.5 py-0.5 rounded">Co-ords</span>
              </div>
            </div>
            <div className="w-full py-1.5 bg-rose-900/80 hover:bg-rose-800 text-[9px] font-bold uppercase tracking-widest text-center text-rose-100 rounded-xs border border-rose-400/30">
              Explore Collection
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="websites"
      className="relative py-20 bg-transparent border-t border-[#EAE4DA]"
      aria-label="Website Projects"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header with Centered Diamond Motif */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14">
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-[#9E783E]/50" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 className="font-serif-heading font-normal text-lg sm:text-2xl md:text-3xl tracking-[0.16em] sm:tracking-[0.18em] text-[#141312] uppercase">
              ALL WEBSITES
            </h2>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
          </div>
          <div className="h-[1px] flex-1 max-w-[60px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-[#9E783E]/50" />
        </div>

        {/* Descriptive guidance */}
        <p className="text-center font-editorial italic text-xs sm:text-base text-[#5C564F] max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          “Documenting digital presence, WordPress structuring, and marketing support across verified commercial projects.”
        </p>

        {/* 8 Website Cards Grid - 2 Columns on Mobile, 3-4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
          {WEBSITES.map((site) => (
            <div
              key={site.id}
              id={`website-card-${site.id}`}
              className="group bg-white hover:bg-[#FAF8F5] border border-[#EAE4DA] hover:border-[#B38742]/80 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md hover:-translate-y-1"
            >
              {/* Browser window chrome container */}
              <div className="w-full">
                <div className="bg-[#FAF8F5] px-2.5 sm:px-3.5 py-1.5 sm:py-2 border-b border-[#EAE4DA] flex items-center justify-between">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-[8.5px] sm:text-[10px] text-[#78716A] font-mono tracking-tight truncate max-w-[95px] sm:max-w-[170px]">
                    {site.domain}
                  </span>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                </div>

                {/* Website screenshot preview container with browser viewport */}
                <div 
                  onClick={() => onSelectWebsite(site)}
                  className="aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-[#EAE4DA] relative group/mockup bg-slate-900"
                >
                  {site.image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={site.image} 
                        alt={`${site.name} website preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Category badge over image */}
                      <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#141312]/85 backdrop-blur-md border border-white/20 shadow-xs">
                        <span className="text-[7.5px] sm:text-[9px] tracking-tight sm:tracking-[0.16em] uppercase text-[#D8C7A5] font-semibold">
                          {site.category}
                        </span>
                      </div>

                      {/* Hover action overlay */}
                      <div className="absolute inset-0 bg-[#141312]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#141312] text-[10px] tracking-[0.18em] uppercase font-semibold text-[#FAF8F5] shadow-md">
                          INSPECT PROJECT
                        </span>
                      </div>
                    </div>
                  ) : (
                    renderWebsiteMockup(site)
                  )}
                </div>
              </div>

              {/* Information Body with Tagline */}
              <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between bg-transparent">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif-heading font-semibold text-[11px] sm:text-sm tracking-tight sm:tracking-wide uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors line-clamp-1">
                      {site.name}
                    </h3>
                  </div>

                  <p className="mt-0.5 sm:mt-1 text-[8.5px] sm:text-[10px] tracking-tight sm:tracking-[0.18em] uppercase text-[#9E783E] font-semibold truncate">
                    {site.roleLabel}
                  </p>

                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#5C564F] leading-tight sm:leading-relaxed line-clamp-2 font-normal">
                    {site.tagline}
                  </p>
                </div>

                {/* Bottom link: Details & VISIT WEBSITE -> */}
                <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                  <button
                    onClick={() => onSelectWebsite(site)}
                    className="text-[9px] sm:text-[10px] tracking-tight sm:tracking-[0.16em] uppercase text-[#78716A] hover:text-[#141312] font-semibold transition-colors cursor-pointer"
                  >
                    Details
                  </button>

                  <a
                    href={site.redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px] tracking-tight sm:tracking-[0.16em] uppercase text-[#9E783E] hover:text-[#141312] font-semibold transition-colors"
                  >
                    <span className="hidden sm:inline">VISIT WEBSITE</span>
                    <span className="sm:hidden">VISIT</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section-level Action */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            id="all-websites-section-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4B1F2A] hover:bg-[#5C2634] text-xs sm:text-sm tracking-[0.18em] uppercase text-[#FAF8F5] font-semibold transition-all duration-200 rounded-full shadow-md hover:shadow-lg"
          >
            <span>VIEW ALL WEBSITES ON LINKEDIN</span>
            <ArrowRight className="w-4 h-4 text-[#D8C7A5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
