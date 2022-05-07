import { Home } from "./components/home/Home";
import "./components/home/home.css";
import Navbar from "./components/Navbar-Footer/Navbar";
import Footer from "./components/Navbar-Footer/Footer";
import Mobile from "./components/Products/Mobile"
import AboutUS from "./components/Navbar-Footer/AboutUS";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Mobile/> */}
      {/* <AboutUS/> */}
      <Footer />

    </div>
  );
}

export default App;
