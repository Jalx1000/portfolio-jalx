import { proyects, stacks } from "../type/ProyectType";

const Proyects = () => {


  console.log(proyects);
  return (
    <section id="Proyects" className="px-20 py-32 mt-10">
      <header>
        <h2 className="text-7xl">PROYECTOS DESDE</h2>
        <h4 className="text-[rgb(156,156,156)] text-5xl">
          2020 - 2023
        </h4>
      </header>
      <div className="flex justify-center items-center flex-wrap py-[50px] px-[30px]">
      {stacks.map((stack, index) => (
          <img key={index} className="select-none mx-12 my-5" src={stack.url} alt={stack.name} />
      ))}
      </div>
      
      
      
    </section>
  );
};

export default Proyects;
