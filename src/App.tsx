import "./App.css";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Contribuciones from "./sections/contribuciones";
import ProyectsList from "./sections/Proyects/ProyectsList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Contribuciones />
      <ProyectsList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
