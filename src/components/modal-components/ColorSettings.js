import React from "react";
import { TickIcon } from "../../assets";

const ColorSettings = () => {
  return (
    <div className="w-full pt-6 pb-[6px] text-center flex flex-col justify-center items-center gap-[18px] smlTab:flex-row smlTab:justify-between">
      <h4 className="tracking-fouthHeading uppercase text-[11px]">color</h4>
      <div className="w-[152px] flex justify-center items-center gap-4">
        <div className="hover:cursor-pointer bg-primaryRed w-10 h-10 grid place-items-center font-kumbh rounded-full">
          <TickIcon />
        </div>
        <div className="hover:cursor-pointer w-10 h-10 grid place-items-center font-slab rounded-full bg-primaryAqua"></div>
        <div className="hover:cursor-pointer w-10 h-10 grid place-items-center bg-primaryPurple font-space rounded-full"></div>
      </div>
    </div>
  );
};

export default ColorSettings;
