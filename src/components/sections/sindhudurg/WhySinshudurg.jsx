import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import {
  FaUmbrellaBeach,
  FaRoad,
  FaChartLine,
  FaLeaf,
  FaPlaneDeparture,
  FaWater
} from "react-icons/fa";

import bgImage from "../../../assets/goa-carnivals-beach-water-sports-activities.jpg";

const features = [
  {
    icon: <FaUmbrellaBeach />,
    title: "Coastal Paradise",
    desc: "Unspoiled beaches & serene coastal lifestyle."
  },
  {
    icon: <FaRoad />,
    title: "Rapid Infrastructure",
    desc: "Highways & connectivity transforming the region."
  },
  {
    icon: <FaChartLine />,
    title: "High Appreciation",
    desc: "Early investment with strong future returns."
  },
  {
    icon: <FaLeaf />,
    title: "Peaceful Living",
    desc: "Green, pollution-free environment."
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Mopa Airport",
    desc: "Boosting accessibility & tourism demand."
  },
  {
    icon: <FaWater />,
    title: "Tourism Growth",
    desc: "Ideal for rental income & holiday homes."
  }
];

export default function WhySindhudurgUltra() {
  return (
    <section
      className="why-ultra"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="why-overlay"></div>

      <Container>
        <div className="ultra-header">
          <h2>Why Sindhudurg?</h2>
          <p>
            The next Goa in making where nature meets opportunity.
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="ultraSwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="ultra-card">
                <div className="icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}