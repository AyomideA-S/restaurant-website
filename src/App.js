import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from './components/Footer';
import Home from "./pages/home";
import Product from "./pages/product.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact";
import './App.css'

const App = () => {
    return (
        <div className="body">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/product' element={<Product/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;