import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact <span className="text-gradient-orange">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "dharshini@example.com" },
                { icon: MapPin, label: "Chennai, India" },
                { icon: Phone, label: "+91 XXXXX XXXXX" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 glow-orange"
            >
              {sent ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✓ Message Sent!
                </motion.span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
