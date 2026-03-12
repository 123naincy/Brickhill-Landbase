import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Plots() {

  const plots = [
    {
      size: "350 sq.yd",
      highlight: "Ideal for Luxury Villas"
    },
    {
      size: "425 sq.yd",
      highlight: "Premium Corner Plots",
      featured: true
    },
    {
      size: "500 sq.yd",
      highlight: "Large Estate Size"
    }
  ];

  return (
    <section className="plots-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2 className="display-4 fw-bold">
            Premium Plot Sizes
          </h2>

          <p className="text-muted">
            Exclusive residential plots ranging from 350 to 500 sq.yd
          </p>

        </motion.div>


        <Row className="g-4 justify-content-center">

          {plots.map((plot, index) => (

            <Col md={6} lg={4} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >

                <Card className={`plot-card ${plot.featured ? "featured-card" : ""}`}>

                  <Card.Body className="text-center">

                    <h1 className="plot-size">
                      {plot.size}
                    </h1>

                    <p className="plot-highlight">
                      {plot.highlight}
                    </p>

                    <div className="plot-price">
                      ₹25,000 / sq.yd
                    </div>


                    {/* Payment Plan */}

                    <div className="payment-box">

                      <h5>Payment Plan</h5>

                      <p>
                        25% Booking
                      </p>

                      <p>
                        25% After 30 Days
                      </p>

                      <p>
                        25% After 60 Days
                      </p>

                      <p>
                        25% On Possession
                      </p>

                    </div>


                    <Button className="plot-btn">
                      Book Site Visit
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