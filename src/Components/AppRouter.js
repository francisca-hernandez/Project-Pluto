
import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

//Pages
import Home from "../pages/home";
import Products from "../pages/products";
import Contact from "../pages/contact";
import About from "../pages/about";


//Components
// import Navbar from './Navbar/index.js';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';



 
function AppRouter() {
    return (
     
        <BrowserRouter>
       
       <main className="main-content">
         <div>


                <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact"element={<Contact />} />
                <Route path="/about"element={<About />}
                />
               
               </Routes>
</div>
</main>

        </BrowserRouter>
    );
}
 
export default AppRouter;