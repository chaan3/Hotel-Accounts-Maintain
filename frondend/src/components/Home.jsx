import React, { useState } from "react";
import About from "./About";
import NavBar from "./NavBar";
import Services from "./Services";
import Footerpage from "./Footer";

const Home = () => {
 
 

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-white text-white">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: 'url(src/assets/bghome.png)' }}
        ></div>
        <div className="relative h-72 sm:px-12 lg:px-24 text-center bg-green-600/0 backdrop-blur-sm">
        <NavBar/>
          
           
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mt-5">Welcome to Sri Rajavirundhu</h1>
          <p className="mt-4 text-lg sm:text-xl mb-5">
            Experience the perfect combination of comfort, tradition, and exceptional dining in the heart of our food hotel.
          </p>
        </div>
      </section>

      <section id="about" className="py-12 px-6 sm:px-12 lg:px-24 bg-white text-green-800">
      
        
      </section>
      <h2 className="text-3xl font-bold text-center mb-6">About</h2>
      <About />
      <Services/>
      <Footerpage/>
    
      
      
    </div>
  );
};

export default Home;
