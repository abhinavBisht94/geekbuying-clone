<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Signup";
=======
>>>>>>> Stashed changes

// import signin  from  "./components/signin";
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
<<<<<<< Updated upstream
=======
>>>>>>> 57fa2a15c399fe2628a6fde6f22efb74cd15c15a

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



>>>>>>> Stashed changes

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
<<<<<<< Updated upstream
        {/* <Login/> */}
        {/* <Registration/> */}
=======
<<<<<<< HEAD
        
=======
        {/* <Login/> */}
        {/* <Registration/> */}
>>>>>>> 57fa2a15c399fe2628a6fde6f22efb74cd15c15a
>>>>>>> Stashed changes
        <Route path="/home" element={<Home />} />
        
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        {/* <Route path="/mobile" element={<Mobile />} /> */}
        <Route path="/mobile/:id" element={<Desc />} />
        <Route path="/cart"  element={<Cart/>}/>
        
        <Route path="/login" element={<Registration/>}
        {/* Default page */}
        <Route path="" element={<Navigate to="home" />} />

      </Routes>
      <Footer />
      <signin/>
    </div>
  );
}

export default App;
