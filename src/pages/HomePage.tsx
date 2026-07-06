import HeroSection from '@/components/sections/HeroSection/HeroSection';
import StatsSection from '@/components/sections/StatsSection/StatsSection';
import AboutSimpleSection from '@/components/sections/AboutSimpleSection/AboutSimpleSection';
import SolutionsSection from '@/components/sections/SolutionsSection/SolutionsSection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSimpleSection />
      <SolutionsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
