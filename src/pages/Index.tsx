import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm a detail-oriented Software Quality Control Engineer with a passion for ensuring flawless user experiences.
          Skilled in both manual and automation testing, I apply ISTQB standards and Agile methodologies to deliver reliable,
          high-quality software. I thrive on finding bugs before users do.
        </p>
      </div>
    </section>
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Sara Saad. Built with precision.
    </footer>
  </div>
);

export default Index;
