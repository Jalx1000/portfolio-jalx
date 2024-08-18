import EngagedLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-engaged.svg";
import CognosLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-cognos.svg";
import BelcasLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-belcas.svg";
import TecbelLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-tecbel.svg";
import PagosnetLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-pagosnet.svg";
import MiscuetnasLogo from "../assets/colaboraciones/jalx-colaboraciones-icon-miscuentas.svg";
const Contribuciones = () => {
  return (
    <section id="contribuciones" className="py-20 mb-20">
      <header>
        <h2 className="text-center text-4xl">CONTRIBUCIONES</h2>
        <h4 className="text-center text-[#9C9C9C] text-3xl">
          Empresas en las que colabore
        </h4>
      </header>
      <div className="flex justify-center py-[50px] px-[30px]">
        <img
          className="sm:mr-[25px] select-none"
          src={EngagedLogo}
          alt="Engaged"
        />
        <img
          className="sm:ml-[25px] select-none"
          src={CognosLogo}
          alt="Cognos"
        />
        <img
          className="sm:ml-[25px] select-none"
          src={BelcasLogo}
          alt="Belcas"
        />
        <img
          className="sm:ml-[25px] select-none"
          src={TecbelLogo}
          alt="Tecbel"
        />
        <img
          className="sm:ml-[25px] select-none"
          src={PagosnetLogo}
          alt="Tecbel"
        />
        <img
          className="sm:ml-[25px] select-none"
          src={MiscuetnasLogo}
          alt="Tecbel"
        />
      </div>
    </section>
  );
};

export default Contribuciones;
