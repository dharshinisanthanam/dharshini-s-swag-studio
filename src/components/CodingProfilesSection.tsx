import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Trophy, Code2 } from "lucide-react";

const profiles = [
  {
    platform: "GitHub",
    icon: Github,
    username: "@dharshini",
    stats: [
      { label: "Repositories", value: "45+" },
      { label: "Contributions", value: "500+" },
      { label: "Stars", value: "120+" },
    ],
    link: "https://github.com",
    color: "from-[hsl(0,0%,30%)] to-[hsl(0,0%,15%)]",
  },
  {
    platform: "LeetCode",
    icon: Trophy,
    username: "@dharshini",
    stats: [
      { label: "Problems", value: "200+" },
      { label: "Contest Rating", value: "1650" },
      { label: "Streak", value: "30 days" },
    ],
    link: "https://leetcode.com",
    color: "from-[hsl(35,80%,30%)] to-[hsl(25,60%,15%)]",
  },
  {
    platform: "HackerRank",
    icon: Code2,
    username: "@dharshini",
    stats: [
      { label: "Badges", value: "12" },
      { label: "Certificates", value: "5" },
      { label: "Stars", value: "6★" },
    ],
    link: "https://hackerrank.com",
    color: "from-[hsl(140,40%,25%)] to-[hsl(140,30%,12%)]",
  },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Competitive</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Coding <span className="text-gradient-orange">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 group block overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <profile.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{profile.platform}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{profile.username}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg font-bold text-primary">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
