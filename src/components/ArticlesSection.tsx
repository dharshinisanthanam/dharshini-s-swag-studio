import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Building Accessible React Components",
    description: "A deep dive into creating inclusive UI components that work for everyone, with practical patterns and best practices.",
    date: "Mar 2025",
    readTime: "8 min",
    link: "#",
  },
  {
    title: "The Power of CSS Container Queries",
    description: "How container queries are changing the way we think about responsive design and component architecture.",
    date: "Feb 2025",
    readTime: "6 min",
    link: "#",
  },
  {
    title: "Mastering Framer Motion Animations",
    description: "From basic transitions to complex orchestrated animations — a complete guide to Framer Motion in React.",
    date: "Jan 2025",
    readTime: "10 min",
    link: "#",
  },
];

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Blog</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient-orange">Articles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 group block"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-mono">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors flex items-start gap-2">
                {article.title}
                <ArrowUpRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
