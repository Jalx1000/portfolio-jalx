import { ProyectConfig } from "../../type/ProyectType";

export const Proyect = ({
  id,
  title,
  description,
  image,
  route,
  // stacks,
}: ProyectConfig) => {
  return (
    <div key={id} className="relative borde flex flex-col items-center w-[90%] mr-5 left-52">
      <img className="w-[100%]" src={image.src} alt={image.alt} />{" "}
      <div className="opacity-0 hover:opacity-100 hover:duration-300 absolute bottom-2.5 px-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="my-2 text-justify line-clamp-3">{description}</p>
        <button>
          <a
            className="font-bold link"
            href={route}
          >
            Ver mas
          </a>
        </button>
      </div>
    </div>
  );
};
