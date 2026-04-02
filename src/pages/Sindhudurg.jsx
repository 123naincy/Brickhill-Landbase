import Hero from "../components/sections/HeroSection";
import Features from "../components/sections/sindhudurg/Features";
import Gallery from "../components/sections/sindhudurg/Gallery";
import Plots from "../components/sections/sindhudurg/Plots";
import Location from "../components/sections/sindhudurg/Location";
import Investment from "../components/sections/sindhudurg/Investment";
import Testimonials from "../components/sections/sindhudurg/Testimonals";
import Contact from "../components/sections/sindhudurg/Contact";
import Footer from "../components/layout/Footer"
import ArtisticImpression from "../components/sections/sindhudurg/ArtisticImpression";
function Sindhudurg(){
return(
   <>
    <Hero />
      <ArtisticImpression />
      <Features />
      <Plots />
      <Location />
      <Testimonials />
       <Gallery />
      <Contact /> 
   </>
);
}
export default Sindhudurg;