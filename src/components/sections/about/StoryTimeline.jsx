import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";


import img1 from "../../../assets/hero-slider-three.jpg";
import img2 from "../../../assets/hero-slider-three.jpg";
import img3 from "../../../assets/hero-slider-three.jpg";
import img4 from "../../../assets/hero-slider-three.jpg";

function StoryTimeline() {
  const timeline = [
    {
      year: "01",
      title: "The Vision",
      text: "A dream to create a premium coastal destination where luxury, nature, and lifestyle come together in perfect harmony.",
      image: img1,
    },
    {
      year: "02",
      title: "The Location",
      text: "A carefully chosen setting with strong connectivity, scenic surroundings, and future-ready potential for exceptional value.",
      image: img2,
    },
    {
      year: "03",
      title: "The Planning",
      text: "Thoughtful layout, premium infrastructure, curated amenities, and elegant design language to shape a refined living experience.",
      image: img3,
    },
    {
      year: "04",
      title: "The Promise",
      text: "A secure, premium, and inspiring address built to deliver comfort today and confidence for the future.",
      image: img4,
    },
  ];

  return (
    <section className="story-curve-section">
      <div className="story-curve-glow story-curve-glow-left"></div>
      <div className="story-curve-glow story-curve-glow-right"></div>

      <Container>
        <motion.div
          className="story-curve-heading text-center"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="story-curve-tag">OUR JOURNEY</p>
          <h2 className="story-curve-title">
            The Story Behind <span>The Vision</span>
          </h2>
          <p className="story-curve-subtitle">
            Every landmark destination begins with a purpose. Our journey is a
            reflection of ambition, precision, and the promise of premium living.
          </p>
        </motion.div>

        <div className="story-curve-timeline">
          <div className="story-curve-path"></div>

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`story-curve-item ${isLeft ? "left" : "right"}`}
                initial={{ opacity: 0, y: 60, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.75, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="story-curve-dot-wrap">
                  <motion.div
                    className="story-curve-dot"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <img src={item.image} alt={item.title} />
                  </motion.div>
                </div>

                <motion.div
                  className="story-curve-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="story-curve-image">
                    <img src={item.image} alt={item.title} />
                    <div className="story-curve-image-overlay"></div>
                    <span className="story-curve-year">{item.year}</span>
                  </div>

                  <div className="story-curve-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default StoryTimeline;