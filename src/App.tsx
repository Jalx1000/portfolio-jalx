import "./App.css";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Contribuciones from "./sections/contribuciones";
import ProyectsList from "./sections/Proyects/ProyectsList";
import TextSlide from "./sections/TextSlide";
import Nav2 from "./sections/Nav2";
import Hero from "./sections/Hero";

function App() {

  return (
    <>
      <Nav2 />
      <Hero />
      <Contribuciones />
      <TextSlide />
      <ProyectsList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
