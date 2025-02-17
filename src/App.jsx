// import './App.css'
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CoreProducts from "./components/CoreProducts";
import Location from "./components/Location";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
     
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
