import { Home } from "./components/home/Home";
import "./components/home/home.css";
import Navbar from "./components/Navbar-Footer/Navbar";
import Footer from "./components/Navbar-Footer/Footer";
import Mobile from "./components/Products/Mobile"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Mobile/>
      <Footer />

    </div>
  );
}

export default App;
