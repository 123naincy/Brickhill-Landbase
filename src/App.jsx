import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/layout/NavbarComponent";
import Home from "./pages/Home";
import Sindhudurg from "./pages/Sindhudurg";


function App() {
  return (
    <BrowserRouter>

      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sindhudurg-plots" element={<Sindhudurg />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;