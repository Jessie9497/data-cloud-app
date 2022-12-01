
import React from "react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Cloud from "./components/cloud/Cloud";
import Recovery from "./components/recovery/Recovery";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recovery />
      <Cloud />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
