import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowDown, Send } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const FloatingContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the floating button when the user reaches the actual contact form at the bottom of the page
    const handleScroll = () => {
      const contactEl = document.getElementById('callback-form-card') || document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // If the contact form is visible in viewport or near it, hide the floating button
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('floating_contact_button_click', {
      action: 'scroll_to_callback_form',
      location: 'bottom_right_widget'
    });

    const targetCard = document.getElementById('callback-form-card') || document.getElementById('contact');
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Highlight the card with a gold ring temporarily
      targetCard.classList.add('ring-2', 'ring-[#9E783E]', 'shadow-2xl');
      setTimeout(() => {
        targetCard.classList.remove('ring-2', 'ring-[#9E783E]', 'shadow-2xl');
      }, 2000);

      // Focus the name input field after smooth scroll completes
      setTimeout(() => {
        const nameInput = document.getElementById('lead-name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 600);
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href="#contact"
        onClick={handleClick}
        id="floating-contact-form-widget"
        className="group flex items-center gap-2.5 sm:gap-3 pl-3.5 pr-4 sm:pl-4 sm:pr-5 py-2.5 sm:py-3 rounded-full bg-[#141312] hover:bg-[#24201C] text-[#FAF8F5] border border-[#D8C7A5]/80 shadow-[0_8px_30px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_36px_rgba(158,120,62,0.32)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
        title="Go to Contact & Callback Form"
      >
        {/* Pulsing Availability Dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
        </div>

        {/* Action Text */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-semibold text-[#FAF8F5] group-hover:text-[#D8C7A5] transition-colors leading-tight whitespace-nowrap">
            CONTACT FORM
          </span>
          <span className="text-[9px] text-[#A69F94] tracking-wider uppercase font-medium leading-tight hidden sm:block">
            Request Callback
          </span>
        </div>

        {/* Icon Emblem */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#4B1F2A] border border-[#D8C7A5]/50 flex items-center justify-center transition-colors shrink-0 ml-0.5">
          <Send className="w-3.5 h-3.5 text-[#D8C7A5] group-hover:translate-x-0.5 transition-transform" />
        </div>
      </a>
    </div>
  );
};
