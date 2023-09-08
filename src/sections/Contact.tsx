import boxSvg from "../assets/box.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section id="contact" className="py-36 ">
      <img className="absolute -right-36 -mt-80 -z-30 " src={boxSvg} alt="" />
      <img className="absolute -left-48 pt-60 -z-30" src={boxSvg} alt="" />
      <div className=" flex justify-between w-[90%] m-auto flex-wrap md:flex-nowrap">
        <div className="w-[100%] md:w-[10%]">
          <h2 className="subtitle text-white  hidden absolute left-3 sm:block md:mt-36 md:text-4xl xl:left-10 xl:text-4x xl:mt-16">
            CONTACTAME
          </h2>
        </div>

        <div className="xl:flex ">
          <div className="m-auto">
            <h3 className="overflow-hidden text-4xl md:text-6xl xl:w-[80%] ">
              <span className="text-redj">¿</span>LISTO PARA TRABAJAR JUNTOS
              <span className="text-redj">?</span>
            </h3>
            <h4 className="text-3xl mt-2 md:mt-5 mb-6 xl:mb-0">
              Mencioname que es lo que nececitas
            </h4>
          </div>

          <article className="m-auto md:m-0 w-[100%] xl:w-[449px] mt-5">
            <form onSubmit={sendEmail}>
              <div className="flex flex-col">
                <label className="text-2xl md:text-4xl " htmlFor="">
                  Nombre
                </label>
                <input
                  className="outline-none h-10 pl-2 placeholder:text-placeholder text-placeholder focus:placeholder:text-opacity-0"
                  type="text"
                  placeholder="Nombre"
                  name="user_name"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="text-2xl md:text-4xl" htmlFor="">
                  Correo
                </label>
                <input
                  className="outline-none h-10 pl-2 placeholder:text-placeholder text-placeholder focus:placeholder:text-opacity-0"
                  type="email"
                  placeholder="Correo"
                  name="user_email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-2xl md:text-4xl " htmlFor="">
                  Mensaje
                </label>
                <textarea
                  className="outline-none h-40 pl-2 placeholder:text-placeholder text-placeholder pt-2 focus:placeholder:text-opacity-0"
                  placeholder="Mensaje"
                  name="user_message"
                />
              </div>
              <button
                className="mt-5 text-2xl md:text-3xl  bg-redj w-[100%] py-3 md:py-8 px-2.5"
                type="submit"
                value="Send"
              >
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
