import React from 'react'
import { useGlobalContext } from '../../hooks/Context'; 

export const FontSetting = () => {
  const { setNewFont, handleChangeFont, font } = useGlobalContext();
  //
  return (
    <div className="w-full py-6 text-center flex flex-col justify-center items-center gap-[18px] border-b border-b-lineGrey smlTab:flex-row smlTab:justify-between">
      <h4 className="tracking-fouthHeading uppercase text-[11px]">font</h4>
      <div className="w-[152px] flex justify-center items-center gap-4">
        {font.map((font, i) => {
          return (
            <div
              key={font.id}
              className={`${
                font.isActive && "bg-darkBlue text-baseWhite"
              } ${font.isActive || "bg-lightGrey text-lighterBlue"}  font-${
                font.fontName
              } rounded-full w-10 h-10  grid place-items-center hover:cursor-pointer`}
              onClick={() => {
                handleChangeFont(font.id);
                setNewFont({ id: font.id, name: font.fontName, letterSpacing: font.letterSpacing });
              }}
            >
              <p>Aa</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FontSetting