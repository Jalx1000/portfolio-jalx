import React from "react";
import jal from "../assets/jal.svg";

const Nav = () => {
  return (
    <header className="flex justify-between mx-20 mt-5">
      <img src={jal} alt="LOGO" />
      <nav className="">
        <div className="w-[91px] h-[150px] bg-white">
          <div className="h-[131px] bg-blackj flex justify-center ">
            <div className=" bg-redj h-[55px] w-[55px] flex justify-center items-center mt-4">
              <div className="flex flex-col items-end">
                <span className="bg-white h-[6px] w-[41px]"></span>
                <span className="bg-white h-[6px] my-[5px] w-[24px]"></span>
                <span className="bg-white h-[6px] w-[33px]"></span>
              </div>
            </div>
          </div>
        </div>
        <ul className="hidden">
          <li>Home</li>
          <li>Contribuciones</li>
          <li>b</li>
          <li>n</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
