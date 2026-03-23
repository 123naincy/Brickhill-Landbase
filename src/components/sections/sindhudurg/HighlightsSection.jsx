import { Container, Row, Col } from "react-bootstrap";
import { Map, Layers, LayoutGrid, Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectHighlights() {

  const [acre, setAcre] = useState(0);
  const [plots, setPlots] = useState(0);

  useEffect(() => {

    let a = 0;
    let p = 0;

    const interval = setInterval(() => {

      if (a < 80) {
        a++;
        setAcre(a);
      }

      if (p < 45) {
        p++;
        setPlots(p);
      }

      if (a === 80 && p === 45) clearInterval(interval);

    }, 30);

    return () => clearInterval(interval);

  }, []);

  const highlights = [
    {
      icon: <Map size={42} />,
      number: acre,
      label: "Acres",
      text: "Total Project Area"
    },
    {
      icon: <Layers size={42} />,
      number: "4",
      label: "Phase",
      text: "Development Phase"
    },
    {
      icon: <LayoutGrid size={42} />,
      number: "6.2",
      label: "Acres",
      text: "Residential Zone"
    },
    {
      icon: <Home size={42} />,
      number: plots,
      label: "Plots",
      text: "Limited Inventory"
    }
  ];

  return (
    <section className="luxury-highlights">

      {/* Wave Divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128V0H0Z"
          ></path>
        </svg>
      </div>

      <Container>

        <div className="text-center mb-5 text-white">

          <h2 className="display-4 fw-bold">
            Project Highlights
          </h2>

          <p className="opacity-75">
            Premium residential plots designed for luxury Goa living
          </p>

        </div>

        <Row>

          {highlights.map((item, index) => (

            <Col md={3} key={index} className="mb-4">

              <div className="glass-highlight text-center">

                <div className="highlight-icon mb-3">
                  {item.icon}
                </div>

                <h1 className="highlight-number">

                  {item.number}

                  <span>{item.label}</span>

                </h1>

                <p>{item.text}</p>

              </div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}