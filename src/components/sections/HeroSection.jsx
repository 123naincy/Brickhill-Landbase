import { Carousel, Container } from "react-bootstrap";
import hero1 from "../../assets/hero-slider-one.jpg";
import hero2 from "../../assets/hero-slider-two.jpg";
import hero3 from "../../assets/hero-slider-three.jpg";
import SearchBox from "./SearchBox";

const slides = [
  {
    image: hero1,
    title: "Best Real Estate Deals",
    text: "Buy, Sell or Rent Properties Easily"
  },
  {
    image: hero2,
    title: "Find Your Dream Home",
    text: "Discover Premium Locations"
  },
  {
    image: hero3,
    title: "Luxury Living Spaces",
    text: "Modern Homes for Modern Life"
  }
];

export default function HeroSection() {
  return (
    <Carousel fade interval={4000} controls={false}>

      {slides.map((slide, index) => (

        <Carousel.Item key={index}>

          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >

            <div className="hero-overlay"></div>

            <Container className="hero-content">

              <h1>{slide.title}</h1>
              <p>{slide.text}</p>

              <SearchBox />

            </Container>

          </div>

        </Carousel.Item>

      ))}

    </Carousel>
  );
}