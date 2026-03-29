import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", desc: "Building modern web apps" },
  { icon: Palette, label: "UI Designer", desc: "Crafting pixel-perfect UIs" },
  { icon: Sparkles, label: "Problem Solver", desc: "Competitive programming" },
  { icon: GraduationCap, label: "CS Student", desc: "Always learning & growing" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-gradient-orange">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hey! I'm <span className="text-foreground font-semibold">Dharshini</span>, a passionate Computer Science student and frontend developer who loves building beautiful, interactive web experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in React.js, TypeScript, and modern web technologies. My passion lies in creating seamless user interfaces that combine aesthetics with functionality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me solving problems on LeetCode, exploring new design trends, or contributing to open-source projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-5 text-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors group-hover:glow-orange-sm">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
