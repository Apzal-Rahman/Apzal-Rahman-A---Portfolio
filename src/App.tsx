import React, { useState } from 'react';
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

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectVideo | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#141312] selection:bg-[#4B1F2A] selection:text-white relative">
      {/* Global Interactive WebGL Fluid Cursor Simulation */}
      <FluidSimulationCanvas />

      {/* Top Fixed Editorial Navigation */}
      <Navigation onResumeClick={handleOpenResume} />

      {/* Main Content Sections in strict sequence matching brief */}
      <main>
        {/* 1. Hero Section with Interactive WebGL Fluid Simulation */}
        <HeroSection onResumeClick={handleOpenResume} />

        {/* 2. Selected Work Section (4 Video Projects) */}
        <SelectedWorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. What I Do Section (8 Capabilities) */}
        <WhatIDoSection />

        {/* 4. Creative Case Studies & Experience (Two-Column Layout) */}
        <CaseStudiesAndExperienceSection
          onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          onResumeClick={handleOpenResume}
        />

        {/* 5. Skills Section (Curated Approved Skills List, No Duplicates) */}
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
