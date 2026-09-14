import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onResumeClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#what-i-do' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#EAE4DA] py-3.5 shadow-xs'
          : 'bg-white/75 backdrop-blur-md border-b border-[#EAE4DA]/60 py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark with decorative gold diamond */}
        <a
          href="#home"
          id="nav-brand-link"
          className="group flex items-center gap-2 sm:gap-2.5 text-decoration-none focus:outline-none"
        >
          <span className="font-serif-heading font-normal text-base sm:text-xl tracking-[0.14em] sm:tracking-[0.18em] text-[#141312] transition-colors group-hover:text-[#9E783E]">
            APZAL RAHMAN
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E] inline-block opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className="text-[12px] tracking-[0.18em] font-semibold text-[#4A453F] hover:text-[#141312] transition-colors relative py-1 focus:outline-none uppercase"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9E783E] transition-all duration-300 hover:w-full" />
            </a>
          ))}
          
          <button
            onClick={onResumeClick}
            id="nav-resume-btn"
            className="text-[11px] tracking-[0.16em] uppercase font-semibold px-4 py-1.5 border border-[#D8C7A5] bg-[#FBF8F2] text-[#8C6527] hover:bg-[#F5EFE4] transition-all rounded-full cursor-pointer shadow-xs"
          >
            Resume
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="nav-mobile-toggle-btn"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#141312] hover:text-[#9E783E] focus:outline-none rounded-lg active:bg-[#FAF8F5]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-dropdown"
          className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-[#EAE4DA] px-6 py-5 animate-fadeIn shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[13px] tracking-[0.18em] font-semibold text-[#4A453F] active:text-[#141312] py-3.5 border-b border-[#F0EBE1] uppercase flex items-center justify-between min-h-[44px]"
              >
                <span>{link.label}</span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#9E783E]/50" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="mt-3 text-[12px] tracking-[0.16em] uppercase font-semibold py-3 px-5 text-center border border-[#D8C7A5] bg-[#FBF8F2] active:bg-[#F5EFE4] text-[#8C6527] transition-colors rounded-full min-h-[44px] flex items-center justify-center shadow-xs"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
