import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactSection } from './components/ContactSection';
import { CvPreviewModal } from './components/CvPreviewModal';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectCaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'case-study' | 'demo'>('case-study');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleSelectProject = (
    project: ProjectCaseStudy,
    initialTab: 'case-study' | 'demo'
  ) => {
    setModalInitialTab(initialTab);
    setSelectedProject(project);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        <Navbar />

        <main>
          <HeroSection onPreviewCv={() => setCvModalOpen(true)} />
          <AboutSection />
          <ProjectsSection onSelectProject={handleSelectProject} />
          <SkillsSection />
          <ExperienceSection />
          <PublicationsSection />
          <ContactSection />
        </main>

        <Footer />

        <AnimatePresence>
          {selectedProject && (
            <CaseStudyModal
              key={selectedProject.id}
              project={selectedProject}
              initialTab={modalInitialTab}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {cvModalOpen && (
            <CvPreviewModal key="cv-preview-modal" open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
