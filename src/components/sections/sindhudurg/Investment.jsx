import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Calendar, ArrowRight } from "lucide-react";

export default function Investment() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "25% Annual Growth",
      desc: "Goa real estate consistently appreciates with strong long-term demand.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Thoughtfully planned development with premium infrastructure and lifestyle appeal.",
    },
    {
      icon: Users,
      title: "Rental Income",
      desc: "High tourism activity supports strong holiday home and rental return potential.",
    },
    {
      icon: Calendar,
      title: "Flexible Payment",
      desc: "Investor-friendly payment plans designed for convenience and smooth booking.",
    },
  ];

  const stats = [
    { value: "200+", label: "Happy Investors" },
    { value: "45", label: "Premium Plots" },
    { value: "6.2 Acres", label: "Prime Residential Land" },
  ];

  return (
    <section className="investment-luxury-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.div
              className="investment-content-wrap"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="investment-tag">Wealth + Lifestyle</span>

              <h2 className="investment-main-title">Smart Investment</h2>

              <p className="investment-main-sub">
                More than a home, it’s your financial future. Invest in a
                premium plotted community that combines lifestyle value, rental
                potential, and long-term capital appreciation.
              </p>

              <div className="investment-mini-points">
                <div className="mini-point">High growth destination</div>
                <div className="mini-point">Tourism-driven demand</div>
                <div className="mini-point">Premium plotted inventory</div>
              </div>

              <Button className="investment-cta-btn">
                Explore Investment Opportunity <ArrowRight size={18} />
              </Button>
            </motion.div>
          </Col>

          <Col lg={7}>
            <Row className="g-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <Col md={6} key={index}>
                    <motion.div
                      className={`investment-card-new card-tone-${(index % 4) + 1}`}
                      initial={{ opacity: 0, y: 50, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="investment-icon-new">
                        <Icon size={28} strokeWidth={2.1} />
                      </div>

                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <motion.div
          className="investment-stats-strip"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Row className="g-4 text-center">
            {stats.map((stat, index) => (
              <Col md={4} key={index}>
                <div className="investment-stat-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}