import { Home } from "./components/home/Home";
import "./components/home/home.css";
import Navbar from "./components/Navbar-Footer/Navbar";
import Footer from "./components/Navbar-Footer/Footer";
import { Mobile } from "./components/Products/Mobile";
import AboutUS from "./components/Navbar-Footer/AboutUS";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="aboutUS" element={<AboutUS />} />

        {/* Default page */}
        <Route path="" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
