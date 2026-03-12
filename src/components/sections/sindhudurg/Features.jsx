import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Dumbbell, Droplet, Trees, Shield, Building, Sparkles } from "lucide-react";

export default function Features() {

 const features = [
  {
    icon: Building,
    title: "Luxury Clubhouse",
    desc: "Elegant clubhouse with indoor games, lounge, and community spaces"
  },
  {
    icon: Dumbbell,
    title: "Open Air Gym",
    desc: "Fitness area surrounded by nature for healthy outdoor workouts"
  },
  {
    icon: Trees,
    title: "Walking Trail",
    desc: "Beautiful landscaped walking and jogging trails across the property"
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness Center",
    desc: "Relax and rejuvenate with spa therapies and wellness facilities"
  },
  {
    icon: Droplet,
    title: "Swimming Pool",
    desc: "Resort-style swimming pool with sun deck and relaxing spaces"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    desc: "Gated community with CCTV surveillance and professional security"
  }
];

  return (
    <section className="features-section">

      <Container>

        {/* Section Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="display-4 fw-bold mb-3">
            World-Class Amenities
          </h2>

          <p className="text-muted">
            Every comfort and convenience at your doorstep
          </p>

        </motion.div>


        {/* Features Grid */}

        <Row className="g-4 justify-content-center">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <Col md={6} lg={4} key={index}>

                <motion.div
                  className="feature-card"
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15
                  }}
                >

                  <div className="feature-icon">

                    <Icon size={30} color="white" />

                  </div>

                  <h4 className="fw-bold mt-4">
                    {feature.title}
                  </h4>

                  <p className="text-muted">
                    {feature.desc}
                  </p>

                </motion.div>

              </Col>
            );
          })}

        </Row>

      </Container>

    </section>
  );
}