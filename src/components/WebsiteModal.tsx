import React, { useEffect } from 'react';
import { X, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import { WebsiteItem } from '../data/portfolioData';

interface WebsiteModalProps {
  website: WebsiteItem | null;
  onClose: () => void;
}

export const WebsiteModal: React.FC<WebsiteModalProps> = ({ website, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (website) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [website, onClose]);

  if (!website) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="website-modal-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative p-5 sm:p-7 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-1">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4 mb-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Globe className="w-4 h-4 text-amber-700" />
              <span className="text-[11px] tracking-[0.16em] uppercase text-amber-700 font-bold">
                {website.category}
              </span>
              {website.clientLocation && (
                <>
                  <span className="text-slate-400">•</span>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-slate-500 font-medium">
                    {website.clientLocation}
                  </span>
                </>
              )}
            </div>
            <h3 
              id="website-modal-title"
              className="font-bold text-xl sm:text-2xl tracking-tight uppercase text-slate-900"
            >
              {website.name}
            </h3>
            <p className="text-xs font-mono text-amber-800 mt-1 font-semibold">
              https://{website.domain}
            </p>
          </div>

          {/* Browser Mockup Window with Screenshot */}
          {website.image && (
            <div className="mb-5 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 shadow-xs">
              <div className="bg-slate-100 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="text-[10px] text-slate-600 font-mono tracking-tight truncate max-w-[240px]">
                  https://{website.domain}
                </span>
                <a
                  href={website.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-700 transition-colors"
                  title="Open live website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="w-full max-h-[320px] overflow-y-auto bg-white">
                <img 
                  src={website.image} 
                  alt={`${website.name} website screenshot`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          )}

          {/* Details & Roles */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-amber-800 font-bold block mb-1">
                Verified Project Role
              </span>
              <p className="text-sm font-semibold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {website.roleLabel}
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-amber-800 font-bold block mb-1">
                Project Scope & Brand Truth
              </span>
              <p className="text-xs leading-relaxed text-slate-700 font-normal">
                {website.tagline}
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-amber-800 font-bold block mb-2">
                Key Implementations & Focus Areas
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {website.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <a
            href={website.redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-xs tracking-wider uppercase font-semibold text-white rounded-full transition-colors shadow-xs"
          >
            <span>VISIT LIVE WEBSITE</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-xs uppercase tracking-wider text-slate-700 rounded-full transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
