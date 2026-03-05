import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>
      <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
        Real-world testing projects showcasing quality assurance expertise.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card border border-border rounded-xl overflow-hidden card-hover"
      >
        {/* Accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/40" />

        <div className="p-8">
          <span className="text-xs font-mono text-primary tracking-wider uppercase">Manual Testing</span>
          <h3 className="text-xl font-bold mt-2 mb-3">Stack Demo Manual Testing</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            A comprehensive manual testing project covering test case design, execution, and defect reporting for a stack demo application.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Test Cases", "Bug Reports", "Test Plan", "Traceability"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/sara-saad1/stack-demo-manual-testing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Project
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
