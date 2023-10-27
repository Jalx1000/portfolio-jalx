import { proyects } from "../type/ProyectType";
import prueba2 from "../assets/prueba2.png";

const Proyects = () => {
  console.log(proyects);
  return (
    <section id="proyects" className="px-20 py-32 mt-10">
      <header className="mb-14 select-none">
        <h2 className="text-7xl">PROYECTOS DESDE</h2>
        <h4 className="text-[rgb(156,156,156)] text-5xl">2020 - 2023</h4>
      </header>

      <article className="flex justify-between flex-wrap">
        <div className="bg-[#2E2E2E] px-10 pt-6 pb-12 w-[730px] h-[541px] mb-24">
          <header className="flex justify-between">
            <div className="mb-10">
              <h4 className="text-2xl">Dashboard Mern</h4>
              <div className="flex">
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
              </div>
            </div>
            <p className="text-7xl">00</p>
          </header>
          <img className="w-[47rem]" src={prueba2} alt="" />
        </div>
        <div className="bg-[#2E2E2E] px-10 pt-6 pb-12 w-[730px] h-[541px] mb-24">
          <header className="flex justify-between">
            <div className="mb-10">
              <h4 className="text-2xl">Dashboard Mern</h4>
              <div className="flex">
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
              </div>
            </div>
            <p className="text-7xl">00</p>
          </header>
          <img className="w-[47rem]" src={prueba2} alt="" />
        </div>
        <div className="bg-[#2E2E2E] px-10 pt-6 pb-12 w-[730px] h-[541px] mb-24">
          <header className="flex justify-between">
            <div className="mb-10">
              <h4 className="text-2xl">Dashboard Mern</h4>
              <div className="flex">
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
              </div>
            </div>
            <p className="text-7xl">00</p>
          </header>
          <img className="w-[47rem]" src={prueba2} alt="" />
        </div>
        <div className="bg-[#2E2E2E] px-10 pt-6 pb-12 w-[730px] h-[541px] mb-24">
          <header className="flex justify-between">
            <div className="mb-10">
              <h4 className="text-2xl">Dashboard Mern</h4>
              <div className="flex">
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
                <img
                  className="h-9 w-9 mr-3"
                  src={proyects[0].stacks[0].url}
                  alt=""
                />
              </div>
            </div>
            <p className="text-7xl">00</p>
          </header>
          <img className="w-[47rem]" src={prueba2} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Proyects;
