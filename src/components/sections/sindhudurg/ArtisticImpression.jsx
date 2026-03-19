import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../../assets/artistic-impression-one.png";
import img2 from "../../../assets/artistic-impression-two.jpg";
import img3 from "../../../assets/artistic-impression-three.jpg";
import img4 from "../../../assets/artistic-impression-four.png";
import img5 from "../../../assets/artistic-impression-five.png";
import img6 from "../../../assets/artistic-impression-seven.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function ArtisticImpression() {
  return (
    <section className="artistic-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="artistic-title">Artistic Impression of Development</h2>
          <p className="artistic-sub">
            Visual representation of the planned development,
            showcasing the lifestyle and infrastructure envisioned
            for the project.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="artistic-slider"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="artistic-slide-card">
                  <div className="artistic-img-wrap">
                    <img src={img} alt={`Artistic Impression ${index + 1}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}