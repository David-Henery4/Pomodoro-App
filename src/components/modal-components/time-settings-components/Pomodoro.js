import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets";

const Pomodoro = ({ mode, timerMins, id, handleChangeMinsSettings }) => {
  const [currentMins, setCurrentMins] = useState(timerMins);
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
              // console.log("yes")
              // setCurrentMins(currentMins + 1);
            }}
          />
          <ArrowDownIcon
            className="hover:cursor-pointer"
            onClick={() => {
              handleChangeMinsSettings(id, "DEC");
              // setPomodoroMins(pomodoroMins - 1);
              // if (pomodoroMins <= 0) setPomodoroMins(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
