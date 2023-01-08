import React from 'react'

const StateSelection = () => {
  //
  return (
    <div className="w-full h-16 py-2 px-[6px] flex items-center bg-darkBlue text-xs rounded-[31px] max-w-[373px]">
      <button className="bg-primaryRed h-full w-full rounded-[26px] text-lighterBlue">
        pomodoro
      </button>
      <button className="text-darkGrey h-full w-full rounded-[26px]">
        short break
      </button>
      <button className="text-darkGrey w-full h-full rounded-[26px]">
        long break
      </button>
    </div>
  );
}

export default StateSelection