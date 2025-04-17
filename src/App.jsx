import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 middle bg-rose-600 text-white p-3 rounded-full shadow-md hover:bg-rose-700 focus:outline-none"
      >
        <img
          src="./arrow.png"
          className="w-7
        "
          alt="back to the top arrow"
        />
      </button>
    </>
  );
}

export default App;
