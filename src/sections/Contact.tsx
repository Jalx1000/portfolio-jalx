import boxSvg from "../assets/box.svg";

const Contact = () => {
  return (
    <section className="my-36  ">
      <img className="-left-48 top-full absolute -z-30" src={boxSvg} alt="" />
      <img className="absolute -right-36 top-28 -z-30 " src={boxSvg} alt="" />
      <div className=" flex justify-between w-[90%] m-auto flex-wrap md:flex-nowrap">
        <div className="w-[100%] md:w-[10%]">
          <h2 className="subtitle text-white font-bold hidden absolute left-3 sm:block md:mt-36 md:text-4xl xl:left-10 xl:text-4x xl:mt-16">
            CONTACTAME
          </h2>
          {/* <h2 className="sm:hidden  my-4 text-white font-bold text-4xl">
            CONTACTAME
          </h2> */}
        </div>

        <div className="xl:flex ">
          <div className="m-auto">
            <h3 className="overflow-hidden text-4xl md:text-6xl xl:w-[80%] font-bold">
              <span className="text-redj">¿</span>LISTO PARA TRABAJAR JUNTOS
              <span className="text-redj">?</span>
            </h3>
            <h4 className="text-3xl mt-2 md:mt-5 mb-6 xl:mb-0">
              Mencioname que es lo que nececitas
            </h4>
          </div>

          <article className="m-auto md:m-0 w-[100%] xl:w-[449px] mt-5">
            <form className="" action="">
              <div className="flex flex-col">
                <label className="text-2xl md:text-4xl font-bold" htmlFor="">
                  Nombre
                </label>
                <input
                  className="h-10 pl-2 placeholder:text-placeholder"
                  type="text"
                  placeholder="Javier Alejandro Mogro Peñafiel"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="text-2xl md:text-4xl font-bold" htmlFor="">
                  Correo
                </label>
                <input
                  className="h-10 pl-2 placeholder:text-placeholder"
                  type="text"
                  placeholder="nombre@correo.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-2xl md:text-4xl font-bold" htmlFor="">
                  Mensaje
                </label>
                <textarea
                  className="h-40 pl-2 placeholder:text-placeholder"
                  placeholder="Hola!!.. Quisiera saber de.. "
                />
              </div>
              <button className="mt-5 text-2xl md:text-3xl font-bold bg-redj w-[100%] py-3 md:py-8 px-2.5">
                Enviar Correo
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
