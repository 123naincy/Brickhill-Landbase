import React from "react";
import Navbar from "./components/layout/NavbarComponent";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import FeaturedSection from "./components/sections/FeaturedSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import VideoSection from "./components/sections/VideoSection";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <VideoSection />
      <WhyChooseUsSection />
      <Footer />
      {/* <Projects />
      <Agents />
      <Testimonials />
      <Blog />
      <Footer /> */}
    </div>
  );
} 