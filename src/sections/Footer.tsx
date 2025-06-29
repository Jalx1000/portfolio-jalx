// import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="w-100%">
      <article className="pl-3  md:pl-0 w-[90%] md:w-[90%] m-auto flex flex-col-reverse sm:flex-col md:flex-row md:justify-between justify-center border-t-2 border-white pt-[75px] pb-[30px]">
        <div className="md:w-10/12 xl:w-11/12">
          <p className="text-2xl mb-[46px] md:w-[80%] xl:w-[60%] text-justify   leading-8">
            TRABAJAR EN DESARROLLO Y DISEÑO ME HA DADO UN MAYOR SENTIDO DE LO
            EXTRAORDINARIO EN MI TRABAJO DIGITAL
          </p>
          <p className="text-placeholder text-xl md:text-2xl">
            &copy;JAVIER MOGRO - ALL RIGHTS RESERVED {year.getFullYear()}
          </p>
        </div>
        <ul className="mb-4 md:mb-0 ">
          <li className="text-2xl">
            <a
              className="link	"
              target="_blank"
              href="https://www.linkedin.com/in/javier-alejandro-mogro-pe%C3%B1afiel"
            >
              LINKEDLN
            </a>
          </li>
          <li className="text-2xl">
            <a
              className="link"
              target="_blank"
              href="https://github.com/jalx1000"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
};

export default Footer;
