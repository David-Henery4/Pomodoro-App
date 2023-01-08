import React from 'react'

export const FontSetting = () => {
  return (
    <div className="w-full py-6 text-center flex flex-col justify-center items-center gap-[18px] border-b border-b-lineGrey">
      <h4 className="tracking-fouthHeading uppercase text-[11px]">font</h4>
      <div className="w-[152px] flex justify-center items-center gap-4">
        <div className="bg-darkBlue font-kumbh rounded-full w-10 h-10 text-baseWhite grid place-items-center">
          <p>Aa</p>
        </div>
        <div className="h-10 w-11 grid place-items-center font-slab rounded-full bg-lightGrey">
          <p>Aa</p>
        </div>
        <div className="h-10 w-11 grid place-items-center text-lighterBlue/75 font-space rounded-full bg-lightGrey">
          <p>Aa</p>
        </div>
      </div>
    </div>
  );
}

export default FontSetting