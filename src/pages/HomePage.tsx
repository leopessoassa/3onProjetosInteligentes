import HeroSection from '@/components/sections/HeroSection/HeroSection';
import StatsSection from '@/components/sections/StatsSection/StatsSection';
import AboutSimpleSection from '@/components/sections/AboutSimpleSection/AboutSimpleSection';
import KeepinSection from '@/components/sections/KeepinSection/KeepinSection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSimpleSection />
      <KeepinSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
