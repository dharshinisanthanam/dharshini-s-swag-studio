import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2025 <span className="text-primary font-semibold">Dharshini</span>. Built with passion.
      </p>
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <s.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
