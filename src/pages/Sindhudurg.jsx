import Hero from "../components/sections/sindhudurg/Hero";
import About from  "../components/sections/sindhudurg/About";
import Features from "../components/sections/sindhudurg/Features";
import Gallery from "../components/sections/sindhudurg/Gallery";
import Plots from "../components/sections/sindhudurg/Plots";
import Location from "../components/sections/sindhudurg/Location";
import Investment from "../components/sections/sindhudurg/Investment";
import Testimonials from "../components/sections/sindhudurg/Testimonals";
import Contact from "../components/sections/sindhudurg/Contact";
import Footer from "../components/layout/Footer"
function Sindhudurg(){
return(
   <>
    <Hero />
      <About />
      <Features />
      <Gallery />
      <Plots />
      <Location />
      <Investment />
      <Testimonials />
      <Contact />
      <Footer />
   </>
);
}
export default Sindhudurg;