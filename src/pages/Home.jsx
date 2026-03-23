import HeroSection from "../components/sections/sindhudurg/Hero";
import FeaturedSection from "../components/sections/FeaturedSection";
import WhyChoose from "../components/sections/WhyChoose";
import VideoSection from "../components/sections/VideoSection";
import InvestmentJourney from "../components/sections/InvestmentJourney";
import HowItWorks from "../components/sections/HowItWorks";
import InvestmentOpportunities from "../components/sections/InvestmentOpportunities";
import CtaBanner from "../components/sections/CtaBanner";
export default function Home() {
  return (
    <div className="app-shell">
      <HeroSection />
       <WhyChoose />  
        <InvestmentJourney /> 
      <FeaturedSection />
      <VideoSection />
      <HowItWorks />  
       <CtaBanner />
      <InvestmentOpportunities />
    </div>
  );
} 