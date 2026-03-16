import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function InvestmentOpportunities() {

const opportunities = [
  {
    icon: <FaHome />,
    title: "Luxury Villa Plots",
    desc: "Premium plots ideal for building luxury villas and holiday homes near Goa’s pristine beaches."
  },
  {
    icon: <FaChartLine />,
    title: "Smart Land Investment",
    desc: "Invest in fast-growing Sindhudurg region with high appreciation potential and tourism demand."
  },
  {
    icon: <FaBuilding />,
    title: "Resort Lifestyle Community",
    desc: "Planned community with clubhouse, open gym, walking trails, spa and resort-style amenities."
  }
];
  return (
    <section className="investment-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="investment-title">
Why Invest in Premium Residential Villa Plots
</h2>

<p className="investment-sub">
Premium resort-style plots near Goa offering luxury lifestyle and high investment potential.
</p>

        </motion.div>


        {/* Cards */}

        <Row className="g-4">

          {opportunities.map((item, index) => (

            <Col lg={4} md={6} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                <Card className="investment-card">

                  <div className="investment-icon">
                    {item.icon}
                  </div>

                  <Card.Body>

                    <h4>{item.title}</h4>

                    <p>{item.desc}</p>

                    <Button className="investment-btn">
                      Explore More <FaArrowRight />
                    </Button>

                  </Card.Body>

                </Card>

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}