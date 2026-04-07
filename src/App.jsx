import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/layout/NavbarComponent";
import Home from "./pages/Home";
import Sindhudurg from "./pages/Sindhudurg";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sindhudurg" element={<Sindhudurg />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;