import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets";

const Pomodoro = ({ mode, timerMins, id, handleChangeMinsSettings }) => {
  const MIN_VALUE = 1
  const MAX_VALUE = 99;
  //
  const handleOnBlur = (e) => {
    if (e.target.value <= 0){
      handleChangeMinsSettings(id, "NEW", MIN_VALUE);
    }
    if (e.target.value >= 100){
      handleChangeMinsSettings(id, "NEW", MAX_VALUE);
    }
  }
  //
  return (
    <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
      <p className="text-xs text-lighterBlue/40">{mode}</p>
      <div className="rounded-[10px] w-[140px] flex items-center justify-between relative">
        <input
          type="number"
          className="w-full h-full py-2 px-3 bg-lightGrey rounded-[10px] outline-none"
          min={MIN_VALUE}
          value={timerMins}
          onBlur={handleOnBlur}
          onChange={(e) => {
            handleChangeMinsSettings(id, "NEW", e.target.value);
          }}
        />
        <div className="flex flex-col gap-[9px] absolute right-4">
          <ArrowUpIcon
            className="hover:cursor-pointer"
            onClick={() => {
              handleChangeMinsSettings(id, "INC");
            }}
          />
          <ArrowDownIcon
            className="hover:cursor-pointer"
            onClick={() => {
              handleChangeMinsSettings(id, "DEC");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
