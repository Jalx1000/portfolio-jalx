import EngagedLogo from "../assets/engaged.svg";
import CognosLogo from "../assets/cognos.svg";
const Contribuciones = () => {
  return (
    <section id="contribuciones" className="py-20">
      <header>
        <h2 className="text-center text-4xl">CONTRIBUCIONES</h2>
        <h4 className="text-center text-[#9C9C9C] text-3xl">
          Empresas en las que colabore
        </h4>
      </header>
      <div className="flex justify-center py-[50px] px-[30px]">
        <img className="sm:mr-[25px] " src={EngagedLogo} alt="Engaged" />
        <img className="sm:ml-[25px] " src={CognosLogo} alt="Cognos" />
      </div>
    </section>
  );
};

export default Contribuciones;
