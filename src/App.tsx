import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import DashboardsSection from './components/DashboardsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <DashboardsSection />
      <ContactSection />
    </main>
  );
};

export default App;
