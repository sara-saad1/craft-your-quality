import { motion } from "framer-motion";
import { Bug, Wrench, Brain } from "lucide-react";

const categories = [
  {
    icon: Bug,
    title: "Software Testing",
    skills: ["Manual Testing", "Automation Testing", "ISTQB Standards", "Database Testing", "Agile & Scrum"],
  },
  {
    icon: Wrench,
    title: "Test Tools",
    skills: ["Selenium", "Postman"],
  },
  {
    icon: Brain,
    title: "Problem Solving",
    skills: ["Data Structures", "Algorithms", "Analytical Thinking"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Technical <span className="text-gradient">Skills</span>
      </motion.h2>
      <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
        Core competencies honed through hands-on testing and continuous learning.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 card-hover"
          >
            <cat.icon className="text-primary mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
