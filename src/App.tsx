import "./App.css";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Contribuciones from "./sections/contribuciones";
import TextSlide from "./sections/TextSlide";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Contribuciones />
      <TextSlide />
      <About/>
      <Skills/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;


