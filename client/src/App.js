import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import Payment from "./components/payment";
import Product from "./components/product";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
    
  );
}

export default App;