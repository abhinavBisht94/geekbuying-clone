import "./components/home/home.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar-Footer/Navbar";
import Footer from "./components/Navbar-Footer/Footer";
import AboutUS from "./components/Navbar-Footer/AboutUS";
import { Home } from "./components/home/Home";
import { Mobile } from "./components/Products/Mobile";
import {Cart} from './components/CartPage/Cart';
import Desc from './components/productDesc/Desc';
import {ToastContainer} from "react-toastify";



import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/mobile/:id" element={<Desc />} />
        <Route path="/cart"  element={<Cart/>}/>

        {/* Default page */}
        <Route path="" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
