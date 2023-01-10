import React from 'react'
import { useGlobalContext } from '../../hooks/Context'; 
import {fontData, handleFontChange} from '../../settings-data/fontData';

export const FontSetting = () => {
  const { setActiveFont, setNewFont } = useGlobalContext();
  //
  return (
    <div className="w-full py-6 text-center flex flex-col justify-center items-center gap-[18px] border-b border-b-lineGrey smlTab:flex-row smlTab:justify-between">
      <h4 className="tracking-fouthHeading uppercase text-[11px]">font</h4>
      <div className="w-[152px] flex justify-center items-center gap-4">
        {fontData.map((font, i) => {
          return (
            <div
              key={font.id}
              className={`${
                font.isActiveFont && "bg-darkBlue text-baseWhite"
              } ${font.isActiveFont || "bg-lightGrey text-lighterBlue"}  font-${
                font.fontName
              } rounded-full w-10 h-10  grid place-items-center hover:cursor-pointer`}
              onClick={() => {
                console.log(fontData)
                handleFontChange(font.id);
                setNewFont(font.fontName);
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