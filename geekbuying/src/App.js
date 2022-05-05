import { Home } from "./components/home/Home";
import "./components/home/home.css";
import Navbar from "./components/Navbar-Footer/Navbar";
import Footer from "./components/Navbar-Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
