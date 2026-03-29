import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseEnterInteractive = () => setIsHovering(true);
    const onMouseLeaveInteractive = () => setIsHovering(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: position.x - (isHovering ? 20 : 8),
          y: position.y - (isHovering ? 20 : 8),
          width: isHovering ? 40 : 16,
          height: isHovering ? 40 : 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          background: isHovering
            ? "hsl(25 95% 53% / 0.2)"
            : "hsl(25 95% 53%)",
          border: isHovering ? "2px solid hsl(25 95% 53%)" : "none",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          width: 48,
          height: 48,
          background: "hsl(25 95% 53%)",
          filter: "blur(8px)",
        }}
      />
    </>
  );
};

export default CustomCursor;
