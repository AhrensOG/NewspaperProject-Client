import React from "react";

const LateralIcons = ({logo1, logo2}) => {
  return (
    <div className="flex flex-col items-center lg:gap-4 md:gap-2 sm:gap-1">
      <div className="lg:w-[50px] lg:h-[50px] md:w-[40px] w-[40px] h-[40px]">
        <img src={logo1} alt="" />
      </div>
      <div className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]">
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default LateralIcons;
