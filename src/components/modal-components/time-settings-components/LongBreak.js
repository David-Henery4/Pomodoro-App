import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets";

const LongBreak = ({longBreakMins,setLongBreakMins}) => {
  return (
    <div className="w-full flex justify-between items-center smlTab:flex-col smlTab:gap-[10px] smlTab:w-auto smlTab:items-start">
      <p className="text-xs text-lighterBlue/40">long break</p>
      <div className="py-2 rounded-[10px] bg-lightGrey p-3 w-[140px] flex items-center justify-between">
        <p>{longBreakMins}</p>
        <div className="flex flex-col gap-[9px]">
          <ArrowUpIcon className="hover:cursor-pointer" onClick={() => {
            setLongBreakMins(longBreakMins + 1)
          }}/>
          <ArrowDownIcon className="hover:cursor-pointer" onClick={() => {
            setLongBreakMins(longBreakMins - 1)
            if (longBreakMins <= 0) setLongBreakMins(0)
          }}/>
        </div>
      </div>
    </div>
  );
}

export default LongBreak