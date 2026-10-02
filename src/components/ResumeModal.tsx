import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, Mail, Linkedin, Phone, Globe } from 'lucide-react';
import { BIO_DATA, EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';
import { downloadResumePDF } from '../utils/pdfGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    trackEvent('resume_print_pdf', { action: 'print_or_save_pdf' });
    window.print();
  };

  const handleDownloadPDF = async () => {
    trackEvent('resume_download_pdf', { action: 'download_pdf_document' });
    await downloadResumePDF();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="bg-white border border-[#EAE4DA] rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#EAE4DA] bg-[#FAF8F5] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9E783E]" />
            <h2 id="resume-modal-title" className="font-serif-heading font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase text-[#141312]">
              Official Resume — Apzal Rahman A
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#FAF8F5] border border-[#D8C7A5] text-[#141312] text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer font-medium"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#9E783E]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141312] hover:bg-[#2C2722] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#D8C7A5]" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#78716A] hover:text-[#141312] hover:bg-[#EAE4DA]/60 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet (Replicating exact uploaded layout) */}
        <div 
          ref={resumeRef} 
          className="p-6 sm:p-12 overflow-y-auto bg-white text-[#111111] font-serif leading-normal print:p-0 print:bg-white print:text-black selection:bg-neutral-200"
          style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
        >
          {/* Header */}
          <div className="text-center pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-black">
              Apzal Rahman A
            </h1>
            <div className="mt-2 text-xs sm:text-[13px] text-[#222222] flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <a href="tel:7358928968" className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3 inline" /> 7358928968
              </a>
              <span>•</span>
              <a href="#hero" onClick={onClose} className="hover:underline flex items-center gap-1">
                <Globe className="w-3 h-3 inline" /> Portfolio
              </a>
              <span>•</span>
              <a href={BIO_DATA.linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3 inline" /> LinkedIn
              </a>
              <span>•</span>
              <a href={`mailto:${BIO_DATA.email}`} className="hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3 inline" /> {BIO_DATA.email}
              </a>
            </div>
          </div>

          {/* CAREER OBJECTIVE */}
          <section className="mt-4">
            <h2 className="text-[13px] sm:text-sm font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-[12.5px] leading-relaxed text-[#111111] text-justify">
              A marketing professional blending creative storytelling with performance-driven execution — from
              scriptwriting and content development to running paid campaigns across Meta, Google, and YouTube
              that have generated millions of views and measurable leads. I combine content that connects with
              campaigns that convert, and I’m looking to grow as a Performance &amp; Creative Marketing Strategist
              who can own both the story and the numbers behind it.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mt-5">
            <h2 className="text-[13px] sm:text-sm font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-[12.5px]">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>{edu.institution}</span>
                    <span className="font-normal text-[#222222]">{edu.score}</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[#222222]">
                    <span>{edu.degree}</span>
                    <span className="not-italic text-[11px] sm:text-xs text-[#444444]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mt-5">
            <h2 className="text-[13px] sm:text-sm font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="text-xs sm:text-[12.5px]">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>{exp.role}</span>
                    <span className="font-normal text-[#333333] text-[11px] sm:text-xs">{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[#222222] mb-1">
                    <span>{exp.company}</span>
                    {exp.location && <span className="not-italic text-[11px] text-[#444444]">{exp.location}</span>}
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-[#111111] leading-relaxed text-[11.5px] sm:text-[12px]">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="mt-5">
            <h2 className="text-[13px] sm:text-sm font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Certifications
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[12px] text-[#111111]">
              <div className="flex justify-between items-baseline">
                <span>
                  <span className="font-semibold">The Trade Desk Edge Academy Certified: Data-Driven Planning</span> | The Trade Desk
                </span>
                <span className="text-[11px] text-[#444444] shrink-0 ml-2">Aug. 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>
                  <span className="font-semibold">The Trade Desk Edge Academy – Marketing Essentials</span> | The Trade Desk
                </span>
                <span className="text-[11px] text-[#444444] shrink-0 ml-2">Jul. 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>
                  <span className="font-semibold">Programmatic Masterclass</span> | StackAdapt
                </span>
                <span className="text-[11px] text-[#444444] shrink-0 ml-2">May. 2026</span>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-5">
            <h2 className="text-[13px] sm:text-sm font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-[12px] leading-relaxed text-[#111111]">
              <p>
                <span className="font-bold">Tools:</span> WordPress, WooCommerce, Excel, SEO..
              </p>
              <p>
                <span className="font-bold">Content &amp; Creative:</span> Scriptwriting, Content Writing, Promotional Video Concepting, Dialogue Writing..
              </p>
              <p>
                <span className="font-bold">Campaign &amp; Coordination:</span> Influencer Marketing Coordination, Content Calendar Management, Cross-team Collaboration (Creative/Production)..
              </p>
              <p>
                <span className="font-bold">Marketing Platforms:</span> Meta Business Suite, Google Ads, Meta Ads, YouTube Ads, Amazon Sponsored Ads..
              </p>
              <p>
                <span className="font-bold">Problem-Solving:</span> Ad Account Troubleshooting &amp; Escalation, Client Communication..
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};


