import { Carousel, Container, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Hero_one from "../../../assets/sindhudurg-hero-one.jpg";
import Hero_two from "../../../assets/sindhudurg-hero-two.jpg";
import Hero_three from "../../../assets/sindhudurg-hero-three.jpg";

export default function Hero() {
  return (
    <Carousel
      fade
      interval={4000}
      controls={false}
      indicators={true}
      pause={false}
      ride="carousel"
    >

      {/* Slide 1 */}
      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Hero_one})` }}
        >
          <Container className="hero-content">

            <h1>
              Experience Coastal Luxury <br />
              <span>At Perto The Goa</span>
            </h1>

            <p className="hero-text">
              Discover premium resort-style residential plots near Goa.
              Enjoy nature, tranquility, and luxury coastal living.
            </p>

            <div className="hero-buttons">
              <Button className="btn-green">
                 Book Site Visit <FaArrowRight />
              </Button>

              <Button className="btn-glass">
               
                 Download Brochure
              </Button>
            </div>

          </Container>
        </div>
      </Carousel.Item>


      {/* Slide 2 */}
      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Hero_two})` }}
        >
          <Container className="hero-content">

            <h1>
              Your Private Retreat <br />
              <span>Near Goa Beaches</span>
            </h1>

            <p className="hero-text">
              Premium resort-inspired plots surrounded by lush greenery
              and close to Goa’s beautiful beaches.
            </p>

            <div className="hero-buttons">
              <Button className="btn-green">
                 Book Site Visit <FaArrowRight />
              </Button>

              <Button className="btn-glass">
               
                 Download Brochure
              </Button>
            </div>

          </Container>
        </div>
      </Carousel.Item>


      {/* Slide 3 */}
      <Carousel.Item>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${Hero_three})` }}
        >
          <Container className="hero-content">

            <h1>
              Invest In Coastal Living <br />
              <span>At Perto The Goa</span>
            </h1>

            <p className="hero-text">
              Limited resort-style residential plots available in Sindhudurg,
              perfect for holiday homes and investment.
            </p>

            <div className="hero-buttons">
              <Button className="btn-green">
                 Book Site Visit <FaArrowRight />
              </Button>

              <Button className="btn-glass">
               
                 Download Brochure
              </Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}