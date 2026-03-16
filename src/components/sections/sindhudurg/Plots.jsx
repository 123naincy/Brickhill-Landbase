import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Plots() {

const paymentPlans = [
{
title:"25 : 25 : 25 : 25",
desc:"25% Booking • 25% After 30 Days • 25% After 60 Days • 25% On Possession"
},
{
title:"50 : 50",
desc:"50% Booking • 50% On Possession"
},
{
title:"90 : 10",
desc:"90% Booking • 10% On Possession"
}
];

return(

<section className="plots-section">

<Container>

{/* Heading */}

<motion.div
className="plots-heading text-center"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<h2>Premium Residential Plots</h2>

<p>
Multiple plot sizes available between
<b> 350 – 450 sq.yd </b>
in a premium resort-style community near Goa.
</p>

</motion.div>


<Row className="align-items-center g-5">

{/* LEFT SIDE PLOT RANGE */}

<Col lg={6}>

<motion.div
className="plot-highlight-card"
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h1 className="plot-range">
350 – 450
</h1>

<span className="range-unit">
sq.yd Plot Sizes
</span>

<div className="plot-price">
₹25,000 <span>/ sq.yd</span>
</div>

<ul className="plot-features">

<li>Gated Community</li>
<li>Wide Internal Roads</li>
<li>Near Goa Beaches</li>
<li>High Investment Potential</li>

</ul>

<Button className="plot-btn">
Book Free Site Visit
</Button>

</motion.div>

</Col>


{/* RIGHT SIDE PAYMENT PLANS */}

<Col lg={6}>

<Row className="g-4">

{paymentPlans.map((plan,index)=>(

<Col md={12} key={index}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
>

<Card className="payment-card">

<Card.Body>

<h4>{plan.title}</h4>

<p>{plan.desc}</p>

</Card.Body>

</Card>

</motion.div>

</Col>

))}

</Row>

</Col>

</Row>

</Container>

</section>

);

}