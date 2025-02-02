import React from "react";
import Nav from "./components/nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/Language";

function App() {
  return (
    <>
      <LanguageProvider>
        <Nav />
        <About />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
