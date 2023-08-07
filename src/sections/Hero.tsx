import topology from "../assets/Topology-4.svg";
import person from "../assets/person.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-0 right-0 w-0 md:w-96 bgRed xl:w-[40%] 2xl:w-[30%] h-screen -z-10">
        <img
          className="absolute bg-image bg-no-repeat bg-cover bottom-0 "
          src={person}
          alt=""
        />
      </div>
      <img
        className="absolute top-0 md:-right-32 xl:-right-20 bg-no-repeat -z-20 hidden md:block"
        src={topology}
        alt=""
      />

      <section className="">
        <div className="absolute flex flex-col left-32 top-[26rem]">
          <h1 className="xl:text-[10rem] xl:h-[200px] line-clamp-1 -ml-2">
            FRONT<span className="text-redj">END</span>
          </h1>
          <ul className="flex text-2xl underline">
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
          <img src={arrow} alt="" />
          <p className="ml-8 text-3xl w-7/12">
            HOLA, SOY JAVIER MOGRO, GUSTO EN CONOCERTE, BIENVENIDO A MI
            PORTAFOLIO
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
