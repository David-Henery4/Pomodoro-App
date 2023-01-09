import React from "react";
import { useState } from "react";
import {Pomodoro,LongBreak,ShortBreak} from "./time-settings-components";

const TimeSettings = () => {
  const [pomodoroMins, setPomodoroMins] = useState(25);
  const [shortBreakMins, setShortBreakMins] = useState(5);
  const [longBreakMins, setLongBreakMins] = useState(15);
  //
  return (
    <div className="w-full pb-6 grid gap-[18px] border-b border-b-lineGrey smlTab:gap-[26px]">
      <h4 className="text-center text-[11px] tracking-fouthHeading uppercase smlTab:text-left">
        Time (minutes)
      </h4>
      {/* TIME SETTINGS */}
      <div className="flex flex-col w-full justify-center items-center gap-2 smlTab:flex-row smlTab:justify-between">
        {/* POMODORO */}
        <Pomodoro pomodoroMins={pomodoroMins} setPomodoroMins={setPomodoroMins}/>
        {/* SHORT BREAK */}
        <ShortBreak setShortBreakMins={setShortBreakMins} shortBreakMins={shortBreakMins}/>
        {/* LONG BREAK */}
        <LongBreak setLongBreakMins={setLongBreakMins} longBreakMins={longBreakMins}/>
        {/**/}
      </div>
    </div>
  );
};

export default TimeSettings;
