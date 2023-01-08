import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../assets";

const TimeSettings = () => {
  return (
    <div className="w-full pb-6 grid gap-[18px] border-b border-b-lineGrey smlTab:gap-[26px]">
      <h4 className="text-center text-[11px] tracking-fouthHeading uppercase smlTab:text-left">
        Time (minutes)
      </h4>
      {/* TIME SETTINGS */}
      <div className="flex flex-col w-full justify-center items-center gap-2 smlTab:flex-row smlTab:justify-between">
        {/* POMODORO */}
        <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
          <p className="text-xs text-lighterBlue/40">pomodoro</p>
          <div className="bg-lightGrey rounded-[10px] py-2 px-3 w-[140px] flex items-center justify-between">
            <p>25</p>
            <div className="flex flex-col gap-[9px]">
              <ArrowUpIcon />
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        {/* SHORT BREAK */}
        <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
          <p className="text-xs text-lighterBlue/40">short break</p>
          <div className="py-2 rounded-[10px] px-3 w-[140px] flex items-center justify-between bg-lightGrey">
            <p>25</p>
            <div className="flex flex-col gap-[9px]">
              <ArrowUpIcon />
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        {/* LONG BREAK */}
        <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
          <p className="text-xs text-lighterBlue/40">long break</p>
          <div className="py-2 rounded-[10px] bg-lightGrey p-3 w-[140px] flex items-center justify-between">
            <p>25</p>
            <div className="flex flex-col gap-[9px]">
              <ArrowUpIcon />
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        {/**/}
      </div>
    </div>
  );
};

export default TimeSettings;
