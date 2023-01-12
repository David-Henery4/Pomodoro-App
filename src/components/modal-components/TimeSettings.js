import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../hooks/Context";
import {Pomodoro,LongBreak,ShortBreak} from "./time-settings-components";

const TimeSettings = () => {
  const [pomodoroMins, setPomodoroMins] = useState(25);
  const [shortBreakMins, setShortBreakMins] = useState(5);
  const [longBreakMins, setLongBreakMins] = useState(15);
  //
  const { preAppliedMode, handleChangeMinsSettings } = useGlobalContext();
  //
  return (
    <div className="w-full pb-6 grid gap-[18px] border-b border-b-lineGrey smlTab:gap-[26px]">
      <h4 className="text-center text-[11px] tracking-fouthHeading uppercase smlTab:text-left">
        Time (minutes)
      </h4>
      {/* TIME SETTINGS */}
      <div className="flex flex-col w-full justify-center items-center gap-2 smlTab:flex-row smlTab:justify-between">
        {/* POMODORO */}
        {preAppliedMode.map(item => {
          return (
            <Pomodoro
              key={item.id}
              {...item}
              handleChangeMinsSettings={handleChangeMinsSettings}
            />
          );
        })}
        {/**/}
      </div>
    </div>
  );
};

export default TimeSettings;
