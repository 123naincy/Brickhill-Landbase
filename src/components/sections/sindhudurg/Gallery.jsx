import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import gallery_one from "../../../assets/taj-hotel.jpg"
import gallery_two from "../../../assets/fort.jpg"
import gallery_three from "../../../assets/beautiful-landscape-cityscape-hua-hin-city-around-sea-ocean-bay.jpg";
import gallery_four from "../../../assets/night-lift.jpg";
import gallery_five from "../../../assets/goa-carnivals-beach-water-sports-activities.jpg";
import gallery_six from "../../../assets/watersports.jpg";
export default function Gallery() {

  const images = [
    {
      img: gallery_one,
      label: "Taj Hotel"
    },
    {
      img: gallery_five,
      label: "Beach Activities"
    },
    {
      img: gallery_three,
      label: "Beach Views"
    },
    {
      img: gallery_four,
      label: "Night View"
    },
    {
      img: gallery_two,
      label: "Historical Fort"
    },
    {
      img: gallery_six,
      label: "Parasailing"
    }
  ];

  return (
    <section className="gallery-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="display-4 fw-bold text-white mb-3">
            Glimpse of Paradise
          </h2>

          <p className="text-light">
            Discover the beauty that awaits you
          </p>

        </motion.div>


        {/* Gallery Grid */}

        <Row className="g-4 justify-content-center">

          {images.map((img, index) => (

            <Col md={6} lg={4} key={index}>

              <motion.div
                className="gallery-card"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15
                }}
              >

                <img
                  src={img.img}
                  alt={img.label}
                  className="gallery-img"
                />

                <div className="gallery-overlay">

                  <h4>{img.label}</h4>

                </div>

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}