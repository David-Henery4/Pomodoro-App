import React from 'react'

const Timer = () => {
  return (
    <div className="pt-12 pb-[79px]">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center">
        <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end">
          <p className="text-[80px]">17:59</p>
          <p className="text-sm tracking-thirdHeading uppercase self-start">
            pause
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer