import professor from "../assets/professor.png";
import cv from "../Javier Alejandro Mogro Peñafiel .pdf";
function About() {
  return (
    <section id="about" className="flex justify-center items-center ">
      <p className="text-center text-3xl font-bold ml-14">
        A<br />C<br />E<br />R<br />C<br />A<br />
        <br />D<br />E<br />
        <br />M<br />I
      </p>
      <article className="flex items-center justify-center m-auto ml-20 ">
        <div className="w-1/2 ">
          <h2 className="text-8xl"><span className="text-redj">J</span>VIER<br /><span className="text-redj">AL</span>EJANDRO</h2>
          <p className="text-xl mt-10">
            Soy un apasionado aspirante a desarrollador full stack con
            experiencia sólida en el ámbito del front-end. Mi fascinación por la
            tecnología y mi compromiso con la creatividad me impulsan a explorar
            nuevas fronteras en el desarrollo web, con un enfoque en la creación
            de experiencias atractivas y funcionales para los usuarios.
          </p>
          <button className="mt-10 hover:text-redj">
            <a className="text-2xl" href={cv} download>DESCARGAR <span className="text-redj">CV</span></a>
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="w-[90%] -scale-x-90 select-none"
            src={professor}
            alt="professor"
          />
        </div>
      </article>
    </section>
  );
}

export default About;
