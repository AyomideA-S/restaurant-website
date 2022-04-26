import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Menu from "./pages/menu.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;