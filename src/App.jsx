import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/layout/NavbarComponent";
import Home from "./pages/Home";
import Sindhudurg from "./pages/Sindhudurg";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sindhudurg" element={<Sindhudurg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;