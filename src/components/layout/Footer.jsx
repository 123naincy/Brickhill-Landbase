import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

<Container>

<Row>

{/* ABOUT */}

<Col lg={4} md={6}>

<h4 className="footer-logo">BHL Landbase</h4>

<p>
Find the best properties with trusted service and
the most competitive real estate prices.
</p>

<div className="social-icons">

<a href="#"><FaFacebookF/></a>
<a href="#"><FaTwitter/></a>
<a href="#"><FaInstagram/></a>
<a href="#"><FaLinkedin/></a>

</div>

</Col>


{/* QUICK LINKS */}

<Col lg={2} md={6}>

<h5>Quick Links</h5>

<ul className="footer-links">

<li><a href="#">Home</a></li>
<li><a href="#">Properties</a></li>
<li><a href="#">Agents</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>

</ul>

</Col>


{/* PROPERTY LINKS */}

<Col lg={3} md={6}>

<h5>Property Types</h5>

<ul className="footer-links">

<li><a href="#">Residential</a></li>
<li><a href="#">Commercial</a></li>
<li><a href="#">Apartments</a></li>
<li><a href="#">Industrial</a></li>
<li><a href="#">Villas</a></li>

</ul>

</Col>


{/* CONTACT */}

<Col lg={3} md={6}>

<h5>Contact Us</h5>

<p><FaMapMarkerAlt/> Gurugram, India</p>
<p><FaPhone/> +91 9876543210</p>
<p><FaEnvelope/> info@bhllandbase.com</p>

</Col>

</Row>


{/* COPYRIGHT */}

<div className="footer-bottom">

<p>
© {new Date().getFullYear()} BHL Landbase. All Rights Reserved.
</p>

</div>

</Container>

</footer>

)

}