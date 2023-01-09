import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets";

const ShortBreak = ({shortBreakMins,setShortBreakMins}) => {
  return (
    <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
      <p className="text-xs text-lighterBlue/40">short break</p>
      <div className="py-2 rounded-[10px] px-3 w-[140px] flex items-center justify-between bg-lightGrey">
        <p>{shortBreakMins}</p>
        <div className="flex flex-col gap-[9px]">
          <ArrowUpIcon className="hover:cursor-pointer" onClick={() => {
            setShortBreakMins(shortBreakMins + 1)
          }}/>
          <ArrowDownIcon className="hover:cursor-pointer" onClick={() => {
            setShortBreakMins(shortBreakMins - 1)
            if (shortBreakMins <= 0) setShortBreakMins(0)
          }}/>
        </div>
      </div>
    </div>
  );
}

export default ShortBreak