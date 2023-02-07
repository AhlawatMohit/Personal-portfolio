import React from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/Social";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
    <NavBar />
    <Home />
    <SocialLinks />
    <Skills />
    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;
