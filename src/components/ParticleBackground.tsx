import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

const ParticleBackground = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      await loadSlim(tsParticles);
      await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#f97316" },
            links: {
              color: "#f97316",
              distance: 150,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            number: {
              density: { enable: true },
              value: 60,
            },
            opacity: { value: { min: 0.05, max: 0.2 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        },
      });
      setLoaded(true);
    };
    init();

    return () => {
      const container = tsParticles.domItem(0);
      container?.destroy();
    };
  }, []);

  return <div id="tsparticles" className="fixed inset-0 z-0" />;
};

export default ParticleBackground;
