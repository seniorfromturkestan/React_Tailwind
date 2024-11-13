import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Analytics from "./components/analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
