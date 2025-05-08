import { stacks } from "../type/ProyectType";

const Habilidades = () => {

  return (
    <section id="Habilidades" className="py-32 mt-10">
      <header>
        <h2 className="text-center text-4xl">Habilidades</h2>
        <h4 className="text-center text-[rgb(156,156,156)] text-3xl">
          Las tecnologías que componen mi conjunto de herramientas
        </h4>
      </header>
      <div className="flex justify-center items-center flex-wrap py-[50px] gap-x-[30px]">
      {stacks.map((stack, index) => (
          <img key={index} className="select-none mx-12 my-5 xl:w-20 md:w-20" src={stack.url} alt={stack.name} />
      ))}
      </div>
    </section>
  );
};

export default Habilidades;