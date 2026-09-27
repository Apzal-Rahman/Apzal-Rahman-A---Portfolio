import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FluidSimulationCanvas } from './components/FluidSimulationCanvas';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { CaseStudiesAndExperienceSection } from './components/CaseStudiesAndExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProofAndLearningSection } from './components/ProofAndLearningSection';
import { AllWebsitesSection } from './components/AllWebsitesSection';
import { ContactAndFooterSection } from './components/ContactAndFooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { VideoModal } from './components/VideoModal';
import { WebsiteModal } from './components/WebsiteModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectVideo, CaseStudy, WebsiteItem } from './data/portfolioData';
import { initGA4, trackEvent } from './utils/analytics';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectVideo | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Google Analytics 4 (GA4) with user's Measurement ID
    const gaId = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || 'G-3ELF0DKPF1';
    if (gaId) initGA4(gaId);
  }, []);

  const handleOpenResume = () => {
    setResumeOpen(true);
    trackEvent('view_resume_modal', { source: 'portfolio_navigation' });
  };

  return (
    <div className="min-h-screen bg-white text-[#141312] selection:bg-[#4B1F2A] selection:text-white relative">
      {/* Global Interactive WebGL Fluid Cursor Simulation */}
      <FluidSimulationCanvas />

      {/* Top Fixed Editorial Navigation */}
      <Navigation onResumeClick={handleOpenResume} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Interactive WebGL Fluid Simulation */}
        <HeroSection onResumeClick={handleOpenResume} />

        {/* 2. Case Studies & Campaigns (Manufacturing & Healthcare verified results) */}
        <CaseStudiesAndExperienceSection
          onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          onResumeClick={handleOpenResume}
        />

        {/* 3. What I Do Section (8 Capabilities) */}
        <WhatIDoSection />

        {/* 4. Selected Work Section (Video/Scripting Grid) */}
        <SelectedWorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 5. Skills Section (Curated Approved Skills List & CRM Troubleshooting Callout) */}
        <SkillsSection />

        {/* 6. Proof & Learning (LinkedIn Evidence Cards & Certifications) */}
        <ProofAndLearningSection />

        {/* 7. All Websites Section (7 Unique Client Websites with Bespoke Mockups) */}
        <AllWebsitesSection onSelectWebsite={(w) => setSelectedWebsite(w)} />
      </main>

      {/* 8. Contact and Editorial Footer */}
      <ContactAndFooterSection onResumeClick={handleOpenResume} />

      {/* Interactive Detail Modals */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <WebsiteModal
        website={selectedWebsite}
        onClose={() => setSelectedWebsite(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
