import { Container, Row, Col, Card } from "react-bootstrap";

export default function AgentsSection(){

return(

<section className="agents">

<Container>

<h2 className="section-title">Meet Our Agents</h2>

<Row>

<Col md={3}>
<Card className="agent-card">
<Card.Img src="/images/agent1.jpg"/>
<Card.Body>
<h5>John Smith</h5>
<p>Senior Agent</p>
</Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="agent-card">
<Card.Img src="/images/agent2.jpg"/>
<Card.Body>
<h5>Emily Rose</h5>
<p>Property Consultant</p>
</Card.Body>
</Card>
</Col>

</Row>

</Container>

</section>

)

}