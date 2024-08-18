import { proyects } from "../type/ProyectType";
import soon from "../assets/proyects/soon.webp";

const Proyects = () => {
  const anhio = new Date();
  return (
    <section id="proyects" className="px-24 py-32 mt-5">
      <header className="mb-14 select-none">
        <h2 className="text-7xl">PROYECTOS DESDE</h2>
        <h4 className="text-[rgb(156,156,156)] text-5xl">
          2022 - {anhio.getFullYear()}
        </h4>
      </header>

      <article className="flex justify-center sm:justify-between items-center flex-wrap">
        {proyects.map((proyecto, index) => (
          <div
            key={index}
            className="bg-[#2E2E2E] px-10 pt-6 pb-12 w-[730px] h-[541px] mb-24"
          >
            <header className="flex justify-between">
              <div className="mb-10">
                <h4 className="text-2xl uppercase">{proyecto.name}</h4>
                <div className="flex mt-2">
                  {proyecto.stacks.map((icons, index) => (
                    <img
                      key={index}
                      className="h-9 mr-3"
                      src={icons.url}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <p className="text-7xl">{index <= 10 ? "0" + index : index}</p>
            </header>
            {proyecto.url != "" ? (
              <iframe
                className="w-full h-[370px] bg-white"
                src={proyecto.url}
              />
            ) : (
              <img className="w-full h-[370px] bg-white" src={soon} />
            )}
          </div>
        ))}
      </article>
    </section>
  );
};

export default Proyects;
