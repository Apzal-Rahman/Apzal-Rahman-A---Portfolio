import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Download, Check, Copy, Phone, Send, Clock, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';
import { trackEvent, trackLeadSubmission } from '../utils/analytics';

interface ContactAndFooterSectionProps {
  onResumeClick: (location?: any, meta?: any) => void;
}

export const ContactAndFooterSection: React.FC<ContactAndFooterSectionProps> = ({ onResumeClick }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'Performance Marketing',
    preferredTime: 'Anytime',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BIO_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || (!formState.phone.trim() && !formState.email.trim())) {
      setSubmitStatus('error');
      setStatusMessage('Please provide your name and at least a phone number or email so I can reach you.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Web3Forms access key provided by user (with env override support)
    const web3FormsKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || 'ba3c8aa6-6c7c-47ea-a224-64bbc0602ccf';

    try {
      if (web3FormsKey) {
        // Send via Web3Forms API directly to Apzal's inbox
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `🎯 New Lead & Callback Request: ${formState.name} - ${formState.purpose}`,
            from_name: `${formState.name} (Portfolio Inquiry)`,
            name: formState.name,
            phone: formState.phone,
            email: formState.email || 'Not provided',
            service_requested: formState.purpose,
            best_time_to_call: formState.preferredTime,
            message: formState.message || 'No additional note provided'
          })
        });

        const data = await response.json();
        if (data.success) {
          setSubmitStatus('success');
          // Fire GA4 Key Event: 'generate_lead' and 'lead_form_submitted'
          trackLeadSubmission({
            purpose: formState.purpose,
            hasPhone: !!formState.phone.trim(),
            hasEmail: !!formState.email.trim(),
            preferredTime: formState.preferredTime,
            source: 'contact_section_web3forms',
          });

          setFormState({
            name: '',
            phone: '',
            email: '',
            purpose: 'Performance Marketing',
            preferredTime: 'Anytime',
            message: ''
          });
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } else {
        // Fallback: Opens pre-filled email draft to apzalrahman@gmail.com with all callback details
        const emailSubject = encodeURIComponent(`Callback Request from ${formState.name} (${formState.purpose})`);
        const emailBody = encodeURIComponent(
          `Hi Apzal,\n\nI'd like to request a callback / discuss an opportunity.\n\n` +
          `• Name: ${formState.name}\n` +
          `• Phone Number: ${formState.phone}\n` +
          `• Email: ${formState.email}\n` +
          `• Topic / Purpose: ${formState.purpose}\n` +
          `• Preferred Callback Time: ${formState.preferredTime}\n` +
          `• Note: ${formState.message || 'N/A'}\n\n` +
          `Looking forward to connecting!`
        );
        window.location.href = `mailto:${BIO_DATA.email}?subject=${emailSubject}&body=${emailBody}`;
        setSubmitStatus('success');
        setStatusMessage('Opening your email client to send your callback details directly to Apzal.');

        trackLeadSubmission({
          purpose: formState.purpose,
          hasPhone: !!formState.phone.trim(),
          hasEmail: !!formState.email.trim(),
          preferredTime: formState.preferredTime,
          source: 'contact_section_mailto_fallback',
        });
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setStatusMessage('Could not send automatically. Please reach out via email or LinkedIn below!');
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Relocation / Availability Badge */}
        <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-[11px] sm:text-xs font-medium text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>Open to relocating — actively exploring opportunities in the UAE (Dubai).</span>
        </div>

        {/* Lead Capture / Request Callback Form Card */}
        <div className="mt-10 sm:mt-14 max-w-2xl mx-auto text-left bg-white border border-[#E8DECE] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#EAE4DA]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E783E]">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Callback & Inquiries</span>
              </div>
              <h3 className="font-serif-heading text-lg sm:text-xl text-[#141312] mt-1">
                Leave your details — I'll call you back
              </h3>
            </div>
            <span className="text-[11px] text-[#78716A] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#EAE4DA] self-start sm:self-auto flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#9E783E]" />
              Response within 24 hours
            </span>
          </div>

          {submitStatus === 'success' ? (
            <div className="py-10 text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif-heading text-xl text-[#141312] mb-2">Request Received!</h4>
              <p className="text-sm text-[#5C564F] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. I have your contact details and will call you back at your requested time.
              </p>
              {statusMessage && (
                <p className="text-xs text-[#78716A] mt-2 italic">{statusMessage}</p>
              )}
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#9E783E] hover:text-[#73521E] underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                    Your Name <span className="text-[#9E783E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EAE4DA] rounded-lg text-sm text-[#141312] placeholder-[#A69F94] focus:outline-none focus:border-[#9E783E] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                    Phone / WhatsApp <span className="text-[#9E783E]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="+971 50 000 0000 or +91..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EAE4DA] rounded-lg text-sm text-[#141312] placeholder-[#A69F94] focus:outline-none focus:border-[#9E783E] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email & Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-email" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="lead-email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EAE4DA] rounded-lg text-sm text-[#141312] placeholder-[#A69F94] focus:outline-none focus:border-[#9E783E] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lead-purpose" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                    Topic / Opportunity
                  </label>
                  <select
                    id="lead-purpose"
                    name="purpose"
                    value={formState.purpose}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EAE4DA] rounded-lg text-sm text-[#141312] focus:outline-none focus:border-[#9E783E] focus:bg-white transition-all"
                  >
                    <option value="Performance Marketing & Paid Media">Performance Marketing & Paid Media</option>
                    <option value="UAE / Dubai Relocation Opportunity">UAE / Dubai Role Opportunity</option>
                    <option value="Creative Strategy & Video Scripts">Creative Strategy & Video Scripts</option>
                    <option value="Tracking & CRM Troubleshooting">Tracking & CRM Troubleshooting</option>
                    <option value="General Consultation / Other">General Consultation / Other</option>
                  </select>
                </div>
              </div>

              {/* Preferred Callback Time */}
              <div>
                <label htmlFor="lead-time" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                  Best Time To Call You Back
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Morning (9am - 12pm)', 'Afternoon (12pm - 4pm)', 'Evening (4pm - 8pm)', 'Anytime'].map((timeOpt) => (
                    <button
                      key={timeOpt}
                      type="button"
                      onClick={() => setFormState(prev => ({ ...prev, preferredTime: timeOpt }))}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        formState.preferredTime === timeOpt
                          ? 'bg-[#141312] text-white border-[#141312] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#5C564F] border-[#EAE4DA] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {timeOpt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Note / Message */}
              <div>
                <label htmlFor="lead-message" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1.5">
                  Brief Note <span className="text-[#8C8479] font-normal normal-case">(optional)</span>
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={2}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me a little about the project, company, or role..."
                  className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#EAE4DA] rounded-lg text-sm text-[#141312] placeholder-[#A69F94] focus:outline-none focus:border-[#9E783E] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button & Fast WhatsApp Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#141312] hover:bg-[#2C2722] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Details...</span>
                  ) : (
                    <>
                      <span>Request Callback</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/917358928968?text=${encodeURIComponent("Hi Apzal, I reviewed your portfolio and would like to connect with you.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* 4 Contact Links Grid */}
        <div 
          id="contact-links-row"
          className="mt-8 sm:mt-12 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border border-[#EAE4DA] bg-white p-4 sm:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
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
              EMAIL
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917358928968"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp-link"
            className="group flex flex-col items-center gap-2 p-2.5 sm:p-3 hover:bg-[#FAF8F5] transition-all rounded-xl min-h-[44px] justify-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald-200 bg-emerald-50/70 flex items-center justify-center group-hover:border-emerald-500 group-hover:scale-110 transition-all">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="font-serif-heading font-semibold text-xs tracking-wider uppercase text-[#141312] group-hover:text-emerald-700 transition-colors">
              WHATSAPP
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

          {/* RESUME 3 (Contact Grid) */}
          <button
            onClick={() => onResumeClick('footer_section', { buttonId: 'footer-resume-link', buttonName: 'Resume 3 (Footer Card)' })}
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
        </div>

        {/* 1-Click Copy & Quick Contact Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Email Copy Pill */}
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

          {/* WhatsApp / Phone Pill */}
          <a
            href="https://wa.me/917358928968"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-200 rounded-full text-xs text-[#141312] transition-all cursor-pointer shadow-xs min-h-[44px]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-emerald-950">+91 73589 28968</span>
            <span className="text-[10px] text-emerald-700 bg-white/70 px-1.5 py-0.5 rounded font-semibold uppercase">Chat</span>
          </a>
        </div>

        {/* Strategic Resume Action 3: Resume Three - Bottom Footer button */}
        <div className="mt-8">
          <button
            onClick={() => onResumeClick('footer_section', { buttonId: 'footer-quiet-resume-action', buttonName: 'Resume 3 (Bottom Footer Button)' })}
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

