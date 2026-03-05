import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Interested in working together? Let's connect.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-5"
          >
            <a
              href="https://www.linkedin.com/in/sara-saad18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="p-2.5 rounded-lg bg-secondary">
                <Linkedin size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">LinkedIn</p>
                <p className="text-xs text-muted-foreground">linkedin.com/in/sara-saad18</p>
              </div>
            </a>

            <a
              href="https://github.com/sara-saad1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="p-2.5 rounded-lg bg-secondary">
                <Github size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">GitHub</p>
                <p className="text-xs text-muted-foreground">github.com/sara-saad1</p>
              </div>
            </a>

            <a
              href="mailto:saranagy600@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="p-2.5 rounded-lg bg-secondary">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-xs text-muted-foreground">saranagy600@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
