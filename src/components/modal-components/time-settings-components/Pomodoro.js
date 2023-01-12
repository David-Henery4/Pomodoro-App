import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets";

const Pomodoro = ({ mode, timerMins, id, handleChangeMinsSettings }) => {
  return (
    <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
      <p className="text-xs text-lighterBlue/40">{mode}</p>
      <div className="bg-lightGrey rounded-[10px] py-2 px-3 w-[140px] flex items-center justify-between">
        <p>{timerMins}</p>
        <div className="flex flex-col gap-[9px]">
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
