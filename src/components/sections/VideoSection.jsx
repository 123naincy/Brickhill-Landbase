import { Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import videoBg from "../../assets/hero-slider-three.jpg";

export default function VideoSection(){

const [show, setShow] = useState(false);

return(

<section
className="video-section"
style={{ backgroundImage:`url(${videoBg})` }}
>

<Container>

<div className="video-content">

<div
className="play-wrapper"
onClick={()=>setShow(true)}
>

<div className="play-btn">

<FaPlay />

</div>

</div>

</div>

</Container>

{/* Modal */}

<Modal
show={show}
onHide={()=>setShow(false)}
centered
size="lg"
>

<Modal.Body className="p-0">

<iframe
width="100%"
height="400"
src="https://www.youtube.com/embed/NI2lDQkM4Y4?si=VmsR1s5gfkqx7d78"
allowFullScreen
/>

</Modal.Body>

</Modal>

</section>

)

}