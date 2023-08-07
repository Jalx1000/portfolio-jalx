import { ProyectConfig } from "../../type/ProyectType";
import { motion } from "framer-motion";

const Proyects = [
  {
    id: 1,
    title: "Dashboard",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    image: {
      src: "src/assets/miau.png",
      alt: "Dashboard",
    },
    route: "https://tailwindcss.com/docs/width",
    stacks: [
      { name: "React", version: "18" },
      { name: "Mongo" },
      { name: "Node" },
      { name: "Express" },
    ],
  },
  {
    id: 2,
    title: "Primer portfolio",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 2",
    image: {
      src: "src/assets/primer-porfolio.png",
      alt: "Dashboard",
    },
    route: "https://jalx1000.github.io/JAL.github.io/#portfolio",
    stacks: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
  },
  {
    id: 3,
    title: "Dashboard2",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 2",
    image: {
      src: "data:image/jpeg;base64,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",
      alt: "Dashboard",
    },
    route: "https://tailwindcss.com/docs/width",
    stacks: [
      { name: "React", version: "18" },
      { name: "Mongo" },
      { name: "Node" },
      { name: "Express" },
    ],
  },
  {
    id: 4,
    title: "Dashboard2",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 2",
    image: {
      src: "data:image/jpeg;base64,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",
      alt: "Dashboard",
    },
    route: "https://tailwindcss.com/docs/width",
    stacks: [
      { name: "React", version: "18" },
      { name: "Mongo" },
      { name: "Node" },
      { name: "Express" },
    ],
  },
  {
    id: 5,
    title: "Dashboard2",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 2",
    image: {
      src: "data:image/jpeg;base64,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",
      alt: "Dashboard",
    },
    route: "https://tailwindcss.com/docs/width",
    stacks: [
      { name: "React", version: "18" },
      { name: "Mongo" },
      { name: "Node" },
      { name: "Express" },
    ],
  },
];

const ProyectsList = () => {
  return (
    <section>
      <article className="">
        <div>
          <p>PROYECTOS</p>
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="overflow-visible max-h-[500px] border flex flex-col justify-center  items-center md:flex-row"
          >
            {Proyects.map((proyect: ProyectConfig) => {
              return (
                <motion.div
                  key={proyect.id}
                  // onClick={() => setSelectedId(item.id)
                  className=" relative flex flex-col items-center mr-5 left-52 w-[500px]"
                >
                  <img
                    className="border  w-full select-none"
                    src={proyect.image.src}
                    alt={proyect.image.alt}
                  />
                  <div className="opacity-0 hover:opacity-100 hover:duration-300 absolute bottom-2.5 px-5">
                    <motion.h3 className="text-xl">{proyect.title}</motion.h3>
                    <motion.p className="my-2 text-justify line-clamp-3">
                      {proyect.description}
                    </motion.p>
                    <motion.button>
                      <a className="link" href={proyect.route}>
                        Ver mas
                      </a>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default ProyectsList;
