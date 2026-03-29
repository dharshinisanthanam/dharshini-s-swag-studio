import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek, animated personal portfolio built with React and Framer Motion featuring 3D visuals and particle effects.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard with real-time analytics, inventory management, and beautiful data visualizations.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses, featuring a clean interface and smooth message animations.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management tool with boards, labels, and team collaboration features.",
    tech: ["React", "Firebase", "DnD Kit", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovering ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">My work</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient-orange">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
