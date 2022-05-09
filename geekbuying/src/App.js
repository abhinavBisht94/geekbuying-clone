import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import signin  from  "./components/signin";
import { Billing } from "./components/CheckOut/Billing";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Login/>
        <Registration/>
        <Route path="/home" element={<Home />} />
        
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/mobile/:id" element={<Desc />} />
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/billing" element={<Billing/>}/>
        {/* Default page */}
        <Route path="" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
      <signin/>
    </div>
  );
}

export default App;
