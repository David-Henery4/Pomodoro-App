import React from "react";
import { TickIcon } from "../../assets";
import { useGlobalContext } from "../../hooks/Context"; 

const ColorSettings = () => {
  const { setNewTheme, themeData, handleChangeColor } = useGlobalContext();
  return (
    <div className="w-full pt-6 pb-[6px] text-center flex flex-col justify-center items-center gap-[18px] smlTab:flex-row smlTab:justify-between">
      <h4 className="tracking-fouthHeading uppercase text-[11px]">color</h4>
      <div className="w-[152px] flex justify-center items-center gap-4">
        {themeData.map(color => {
          return (
            <div
              key={color.id}
              className={`hover:cursor-pointer bg-primary${color.name} w-10 h-10 grid place-items-center font-kumbh rounded-full`}
              onClick={() => {
                handleChangeColor(color.id)
                setNewTheme({id: color.id, name: color.name})
              }}
            >
              {color.isActiveTheme && <TickIcon />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSettings;
