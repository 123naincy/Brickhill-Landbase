import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Palmtree, Waves, Sun } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Palmtree,
      title: "Tropical Paradise",
      desc: "Surrounded by swaying palms and exotic flora",
    },
    {
      icon: Waves,
      title: "Beach Access",
      desc: "Minutes away from pristine Goan beaches",
    },
    {
      icon: Sun,
      title: "Sunny Climate",
      desc: "Perfect weather for outdoor living",
    },
  ];

  return (
    <section className="about-new-section">
      <Container>

        {/* CENTER CONTENT */}
        <motion.div
          className="about-main-card text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="about-title">Live the Resort Life</h2>

          <p className="about-sub">
            Experience unparalleled luxury in Goa's most prestigious
            residential development
          </p>
        </motion.div>

        {/* FLOATING FEATURES */}
        <div className="about-floating">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className={`floating-card floating-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="floating-icon">
                  <Icon size={24} />
                </div>

                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}