import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { CommandPalette } from './components/CommandPalette';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectId } from './data/portfolioData';

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectId>('digital-twin');
  const [viewMode, setViewMode] = useState<'stage' | 'all'>('stage');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProjectFromPalette = (projectId: string) => {
    setActiveProject(projectId as ProjectId);
    setViewMode('stage');
    window.requestAnimationFrame(() => {
      const target = document.getElementById('projets');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F5F5F3] text-[#334155]">
        <Navbar />

        <main>
          <HeroSection onOpenCommandMenu={() => setCommandOpen(true)} />
          <AboutSection />
          <ProjectsSection
            activeProject={activeProject}
            viewMode={viewMode}
            onSelectProject={setActiveProject}
            onChangeViewMode={setViewMode}
          />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />

        <CommandPalette
          open={commandOpen}
          onClose={() => setCommandOpen(false)}
          onSelectProject={handleSelectProjectFromPalette}
        />
      </div>
    </MotionConfig>
  );
}
