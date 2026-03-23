import { motion } from "framer-motion";

import card1 from "../../../assets/hero-slider-three.jpg";
import card2 from "../../../assets/hero-slider-three.jpg";
import card3 from "../../../assets/hero-slider-three.jpg";
import card4 from "../../../assets/hero-slider-three.jpg";

const cardAnimationTop = {
  initial: { y: -300, opacity: 0 },
  animate: {
    y: [ -300, 0, 0, -300 ],
    opacity: [0, 1, 1, 0]
  }
};

const cardAnimationBottom = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: [ 300, 0, 0, 300 ],
    opacity: [0, 1, 1, 0]
  }
};

export default function AboutCards() {

  const transition = {
    duration: 4,
    times: [0, 0.3, 0.7, 1]
  };

  return (
    <div className="cards-wrapper">

      {/* CARD 1 */}
      <motion.div
        className="about-card card1"
        variants={cardAnimationTop}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 1 }}
      >
        <img src={card1} alt="" />
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        className="about-card card2"
        variants={cardAnimationTop}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 1.2 }}
      >
        <img src={card2} alt="" />
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        className="about-card card3"
        variants={cardAnimationBottom}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 1.4 }}
      >
        <img src={card3} alt="" />
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        className="about-card card4"
        variants={cardAnimationBottom}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 1.6 }}
      >
        <img src={card4} alt="" />
      </motion.div>

    </div>
  );
}