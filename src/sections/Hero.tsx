import topology from "/assets/hero/Topology-4.svg";
import person from "/assets/hero/person.svg";
import arrow from "/assets/hero/arrow.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-0 right-0 w-[25rem] md:w-96 bgRed xl:w-[40%] 2xl:w-[30%] h-screen -z-10">
        <img
          className="absolute bg-image bg-no-repeat bg-cover bottom-0 "
          src={person}
          alt=""
        />
      </div>
      <img
        className="absolute top-0 -right-32 xl:-right-20 bg-no-repeat -z-20 md:block"
        src={topology}
        alt=""
      />

      <section className="">
        <div className="absolute flex flex-col left-32 top-[32rem] md:top-[26rem]">
          <h1 className="xl:text-[10rem] xl:h-[200px] line-clamp-1 -ml-2 md:-ml-10">
            <span className="hidden">Porfolio del desarrollador</span>
            <p className="lg:block flex flex-col">
              <span className="text-7xl md:text-9xl">FULL</span>
              <span className="text-redj text-7xl md:text-9xl">STACK</span>
            </p>
            <span className="hidden">de Javier Alejandro Mogro Peñafiel</span>
          </h1>
          <ul className="flex text-2xl underline md:-ml-8">
            <li className="mr-10">
              <a
                className="link "
                target="_blank"
                href="https://www.linkedin.com/in/javier-alejandro-mogro-pe%C3%B1afiel"
              >
                LINKEDLN
              </a>
            </li>
            <li className="">
              <a
                className="link "
                target="_blank"
                href="https://github.com/jalx1000"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute flex items-center bottom-16 left-32">
          <img className="select-none" src={arrow} alt="" />
          <h3 className="ml-8 text-2xl md:text-3xl w-[80%] lg:w-7/12 md:w-[90%]">
            HOLA, SOY JAVIER MOGRO, GUSTO EN CONOCERTE, BIENVENIDO A MI
            PORTAFOLIO
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Hero;
