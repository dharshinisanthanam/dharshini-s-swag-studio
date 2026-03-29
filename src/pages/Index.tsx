import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
