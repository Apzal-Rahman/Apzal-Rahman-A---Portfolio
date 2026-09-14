import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, Mail, Linkedin } from 'lucide-react';
import { BIO_DATA, EXPERIENCES, SKILLS_LIST, CERTIFICATIONS } from '../data/portfolioData';

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
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
APZAL RAHMAN
Performance Marketer / Creative Strategist
Email: ${BIO_DATA.email}
LinkedIn: https://www.linkedin.com/in/apzal-rahman/recent-activity/all/
GitHub: ${BIO_DATA.gitHubUrl}

PROFESSIONAL POSITIONING:
Performance Marketer with a Creative Edge
"I turn product truths and business problems into stories people remember. Paid media, creative strategy, scriptwriting and digital growth."

EXPERIENCE:
${EXPERIENCES.map(
  (e) => `
* ${e.company} | ${e.role} (${e.period})
  ${e.description}
  Key Responsibilities:
  ${e.responsibilities.map((r) => `  - ${r}`).join('\n')}
`
).join('\n')}

CORE SKILLS:
${SKILLS_LIST.join(', ')}

CERTIFICATIONS:
${CERTIFICATIONS.map((c) => `* ${c.title} - ${c.issuer} (${c.skillsGained})`).join('\n')}

TEAM STATEMENT:
Creative work developed with the support of my team.
`.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Apzal-Rahman-Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EAE4DA] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]" />
            <h2 id="resume-modal-title" className="font-serif-heading font-semibold text-[11px] sm:text-sm tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#141312]">
              APZAL RAHMAN — CV
            </h2>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white hover:bg-[#FAF8F5] border border-[#D8C7A5] text-[#141312] text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer font-medium min-h-[36px]"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#9E783E]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 bg-[#4B1F2A] hover:bg-[#5C2634] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full transition-colors cursor-pointer shadow-xs min-h-[36px]"
              title="Download Resume Data"
            >
              <Download className="w-3.5 h-3.5 text-[#D8C7A5]" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#78716A] hover:text-[#141312] bg-[#FAF8F5] hover:bg-[#F0EBE1] transition-colors ml-1 sm:ml-2 cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div ref={resumeRef} className="p-4 sm:p-10 overflow-y-auto bg-white text-[#2E2A26] space-y-6 sm:space-y-8 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#EAE4DA] pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="font-serif-heading font-normal text-3xl sm:text-4xl tracking-tight uppercase text-[#141312]">
                APZAL RAHMAN
              </h1>
              <p className="text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6527] mt-1">
                PERFORMANCE MARKETER / CREATIVE STRATEGIST
              </p>
              <p className="font-editorial italic text-sm text-[#5C564F] mt-2 max-w-lg">
                “I turn product truths and business problems into stories people remember. Paid media, creative strategy, scriptwriting and digital growth.”
              </p>
            </div>

            <div className="text-xs text-[#5C564F] space-y-1.5 text-center sm:text-right shrink-0">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9E783E]" />
                <a href={`mailto:${BIO_DATA.email}`} className="hover:text-[#9E783E]">{BIO_DATA.email}</a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#9E783E]" />
                <a href="https://www.linkedin.com/in/apzal-rahman/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9E783E]">linkedin.com/in/apzal-rahman</a>
              </p>
              <p className="text-[11px] text-[#8C6527] font-medium">
                Erode & Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xs tracking-[0.18em] uppercase font-semibold text-[#8C6527] border-b border-[#EAE4DA] pb-1.5 mb-4">
              EXPERIENCE
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="font-serif-heading font-semibold text-sm text-[#141312] uppercase tracking-wide">
                      {exp.company}
                    </span>
                    <span className="text-[11px] tracking-wider text-[#9E783E] font-semibold uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#8C6527] tracking-wide uppercase">
                    {exp.role}
                  </div>
                  <p className="text-xs text-[#5C564F] leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-slate-500 italic border-l-2 border-amber-500 pl-3">
              {BIO_DATA.teamStatement}
            </p>
          </div>

          {/* Core Competencies / Skills */}
          <div>
            <h2 className="text-xs tracking-[0.16em] uppercase font-bold text-amber-800 border-b border-slate-200 pb-1.5 mb-3">
              CORE COMPETENCIES & SKILLS
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {SKILLS_LIST.map((skill, i) => (
                <span key={i} className="text-[11px] px-3 py-1 bg-slate-50 border border-slate-200 text-slate-800 font-medium tracking-wide uppercase rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs tracking-[0.16em] uppercase font-bold text-amber-800 border-b border-slate-200 pb-1.5 mb-3">
              CERTIFICATIONS & ACCREDITATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div className="font-bold text-slate-900 tracking-wide uppercase">{cert.title}</div>
                  <div className="text-amber-700 text-[11px] font-semibold">{cert.issuer}</div>
                  <div className="text-slate-500 text-[10px] mt-1">{cert.skillsGained}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

