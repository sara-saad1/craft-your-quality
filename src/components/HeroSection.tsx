import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Quality Assurance Engineer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Sara <span className="text-gradient">Saad</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Quality Control Engineer — Manual &amp; Automation Tester.
            Building confidence in software, one test at a time.
          </p>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all animate-pulse-glow"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
