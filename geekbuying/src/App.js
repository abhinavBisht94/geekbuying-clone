import Footer from "./components/Footer";
import { Home } from "./components/home/Home";
import Navbar from "./components/Navbar";
import './components/home/home.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
