import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Droplet,
  Trees,
  Shield,
  Building,
  Sparkles,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Building,
      title: "Luxury Clubhouse",
      desc: "Elegant clubhouse with indoor games, lounge, and community spaces",
    },
    {
      icon: Dumbbell,
      title: "Open Air Gym",
      desc: "Fitness area surrounded by nature for healthy outdoor workouts",
    },
    {
      icon: Trees,
      title: "Walking Trail",
      desc: "Beautiful landscaped walking and jogging trails across the property",
    },
    {
      icon: Sparkles,
      title: "Spa & Wellness Center",
      desc: "Relax and rejuvenate with spa therapies and wellness facilities",
    },
    {
      icon: Droplet,
      title: "Swimming Pool",
      desc: "Resort-style swimming pool with sun deck and relaxing spaces",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      desc: "Gated community with CCTV surveillance and professional security",
    },
  ];

  return (
    <section className="zigzag-features-section">
      <Container>
        <motion.div
          className="zigzag-features-heading text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="zigzag-tag">Premium Amenities</span>
          <h2>World-Class Amenities</h2>
          <p>Every comfort and convenience at your doorstep</p>
        </motion.div>

        <div className="zigzag-features-wrapper">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`zigzag-feature-row ${isLeft ? "left" : "right"}`}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Row className="align-items-center">
                  <Col lg={6}>
                    <motion.div
                      className={`zigzag-feature-card ${index % 3 === 0 ? "style-one" : index % 3 === 1 ? "style-two" : "style-three"}`}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="zigzag-feature-icon"
                        animate={{
                          y: [0, -6, 0],
                          boxShadow: [
                            "0 10px 24px rgba(6, 182, 212, 0.22)",
                            "0 16px 30px rgba(20, 184, 166, 0.34)",
                            "0 10px 24px rgba(6, 182, 212, 0.22)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <Icon size={30} strokeWidth={2.1} />
                      </motion.div>

                      <div className="zigzag-feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={6}>
                    <div className="zigzag-empty-space"></div>
                  </Col>
                </Row>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}