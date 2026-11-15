import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { GitHubActivitySection } from './components/GitHubActivitySection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectCaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'case-study' | 'demo'>('case-study');

  const handleSelectProject = (
    project: ProjectCaseStudy,
    initialTab: 'case-study' | 'demo'
  ) => {
    setModalInitialTab(initialTab);
    setSelectedProject(project);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#eee6d8] text-[#1c140f]">
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection onSelectProject={handleSelectProject} />
          <SkillsSection />
          <ExperienceSection />
          <GitHubActivitySection />
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
      </div>
    </MotionConfig>
  );
}
