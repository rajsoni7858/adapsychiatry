import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar'
import Footer from './component/Footer'

import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhoWeTreat from "./pages/WhoWeTreat";
import Services from "./pages/Services";
import Resources from "./pages/Resources";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/who-we-treat" element={<WhoWeTreat />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;