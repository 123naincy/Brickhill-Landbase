import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaIndustry, FaWarehouse } from "react-icons/fa";

const categories = [
    { icon: <FaHome />, title: "Residential", count: 52 },
    { icon: <FaBuilding />, title: "Commercial", count: 20 },
    { icon: <FaIndustry />, title: "Industrial", count: 10 },
    { icon: <FaWarehouse />, title: "Building Code", count: 27 }
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25
        }
    }
};

const item = {
    hidden: {
        opacity: 0,
        x: -150
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export default function Categories() {
    return (
        <section className="categories">

            <Container>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >

                    <Row className="justify-content-center">

                        {categories.map((cat, index) => (
                            <Col lg={3} md={4} key={index}>

                                <motion.div
                                    className="category-card"
                                    variants={item}
                                >

                                    <div className="icon">
                                        {cat.icon}
                                    </div>

                                    <h5>{cat.title}</h5>

                                    <div className="count">
                                        {cat.count}
                                    </div>

                                </motion.div>

                            </Col>
                        ))}

                    </Row>

                </motion.div>

                <div className="text-center mt-4">
                    <button className="all-btn">
                        <span>All Categories →</span>
                    </button>
                </div>

            </Container>

        </section>
    );
}