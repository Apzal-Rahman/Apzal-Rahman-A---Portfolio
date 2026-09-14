import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Github, Download, Check, Copy } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';

interface ContactAndFooterSectionProps {
  onResumeClick: () => void;
}

export const ContactAndFooterSection: React.FC<ContactAndFooterSectionProps> = ({ onResumeClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative bg-transparent border-t border-[#EAE4DA] pt-14 sm:pt-20 pb-12 sm:pb-14 text-center"
      aria-label="Contact and Footer"
    >
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Contact Headline */}
        <h2 
          id="contact-headline"
          className="font-serif-heading font-normal text-2xl sm:text-4xl md:text-5xl tracking-[0.03em] sm:tracking-[0.04em] text-[#141312] uppercase leading-tight max-w-4xl mx-auto px-2"
        >
          {BIO_DATA.contactHeadline}
        </h2>

        <p className="mt-3 sm:mt-4 font-editorial italic text-xs sm:text-base text-[#5C564F] px-2">
          Open for performance marketing, creative strategy, and narrative collaboration.
        </p>

        {/* 4 Contact Links Grid */}
        <div 
          id="contact-links-row"
          className="mt-8 sm:mt-12 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 border border-[#EAE4DA] bg-white p-4 sm:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          {/* CONTACT / EMAIL */}
          <a
            href={`mailto:${BIO_DATA.email}`}
            id="footer-contact-link"
            className="group flex flex-col items-center gap-2 p-2.5 sm:p-3 hover:bg-[#FAF8F5] transition-all rounded-xl min-h-[44px] justify-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E8DECE] bg-[#FBF8F2] flex items-center justify-center group-hover:border-[#9E783E] group-hover:scale-110 transition-all">
              <Mail className="w-4 h-4 text-[#9E783E]" />
            </div>
            <span className="font-serif-heading font-semibold text-xs tracking-wider uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors">
              CONTACT
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin-link"
            className="group flex flex-col items-center gap-2 p-2.5 sm:p-3 hover:bg-[#FAF8F5] transition-all rounded-xl min-h-[44px] justify-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E8DECE] bg-[#FBF8F2] flex items-center justify-center group-hover:border-[#9E783E] group-hover:scale-110 transition-all">
              <Linkedin className="w-4 h-4 text-[#9E783E]" />
            </div>
            <span className="font-serif-heading font-semibold text-xs tracking-wider uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors">
              LINKEDIN
            </span>
          </a>

          {/* RESUME */}
          <button
            onClick={onResumeClick}
            id="footer-resume-link"
            className="group flex flex-col items-center gap-2 p-2.5 sm:p-3 hover:bg-[#FAF8F5] transition-all rounded-xl cursor-pointer min-h-[44px] justify-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E8DECE] bg-[#FBF8F2] flex items-center justify-center group-hover:border-[#9E783E] group-hover:scale-110 transition-all">
              <FileText className="w-4 h-4 text-[#9E783E]" />
            </div>
            <span className="font-serif-heading font-semibold text-xs tracking-wider uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors">
              RESUME
            </span>
          </button>

          {/* GITHUB */}
          <a
            href={BIO_DATA.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github-link"
            className="group flex flex-col items-center gap-2 p-2.5 sm:p-3 hover:bg-[#FAF8F5] transition-all rounded-xl min-h-[44px] justify-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E8DECE] bg-[#FBF8F2] flex items-center justify-center group-hover:border-[#9E783E] group-hover:scale-110 transition-all">
              <Github className="w-4 h-4 text-[#9E783E]" />
            </div>
            <span className="font-serif-heading font-semibold text-xs tracking-wider uppercase text-[#141312] group-hover:text-[#9E783E] transition-colors">
              GITHUB
            </span>
          </a>
        </div>

        {/* 1-Click Copy Email Pill */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#FBF8F2] hover:bg-[#F5EFE4] border border-[#D8C7A5] rounded-full text-xs text-[#141312] transition-all cursor-pointer shadow-xs min-h-[44px]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied {BIO_DATA.email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#9E783E]" />
                <span className="font-medium text-[#2E2A26]">{BIO_DATA.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Strategic Resume Action 3: Quiet footer resume link */}
        <div className="mt-8">
          <button
            onClick={onResumeClick}
            id="footer-quiet-resume-action"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-semibold text-[#8C6527] hover:text-[#73521E] py-2 px-5 border border-[#D8C7A5] bg-[#FBF8F2] hover:bg-[#F5EFE4] rounded-full transition-colors cursor-pointer shadow-xs"
          >
            <span>DOWNLOAD RESUME</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer Signature Line */}
        <div className="mt-12 pt-8 border-t border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716A]">
          <p className="font-editorial italic tracking-wide text-xs sm:text-sm text-[#8C6527]">
            {BIO_DATA.footerLine}
          </p>
          <p className="tracking-wide text-[11px] text-[#78716A]">
            © {new Date().getFullYear()} Apzal Rahman. Performance Marketer & Creative Strategist.
          </p>
        </div>

      </div>
    </footer>
  );
};
