import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import signin  from  "./components/signin";
import { Billing } from "./components/CheckOut/Billing";

// import Login from "./components/Login/Login";
 import Registration from "./components/Login/Signup";
import Footer from "./components/Navbar-Footer/Footer";
import "./components/home/home.css";
import "react-toastify/dist/ReactToastify.css";
import AboutUS from "./components/Navbar-Footer/AboutUS";
import { Home } from "./components/home/Home";
import { Mobile } from "./components/Products/Mobile";
import {Cart} from './components/CartPage/Cart';
import Desc from './components/productDesc/Desc';
import {ToastContainer} from "react-toastify";
import Navbar from "./components/Navbar-Footer/Navbar"

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
<<<<<<< HEAD
        <Route path="/billing" element={<Billing/>}/>
        {/* Default page */}
=======
        <Route path="/login" element={<Registration/>}/> 
>>>>>>> 5c06b3c2512541d64182e36eafa07983884e32f9
        <Route path="" element={<Navigate to="home" />} />

      </Routes>
      <Footer />
      <signin/>
    </div>
  );
}

export default App;
