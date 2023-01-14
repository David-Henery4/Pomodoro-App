import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ mins = 0, secs = 0, hasTimerStarted }) => {
  //
  const [minutes, setMinutes] = useState(mins * 60000);
  const [seconds, setSeconds] = useState(secs * 1000);
  //
  const [setSetTime, setTime] = useState(minutes + seconds);
  const [startTime, setStartTime] = useState(Date.now());
  const [futureTime, setFutureTime] = useState(startTime + setSetTime);
  //
  const [angle, setAngle] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  //
  const countdownTimer = () => {
    const currentTime = Date.now();
    const currentRemainingTime = futureTime - currentTime;
    const currentAngle = (currentRemainingTime / setSetTime) * 360;
    setAngle(currentAngle);
    setRemainingTime(currentRemainingTime);
    // progress indicator
    // timer
    // sec-condition
    // end
  };
  //
  const intervalId = useRef();
  // let intervalId.current;
  useEffect(() => {
    if(hasTimerStarted){
      intervalId.current = setInterval(countdownTimer);
      if (remainingTime < 0) {
        console.log("fin");
        clearInterval(intervalId.current);
      }
    }
      return () => clearInterval(intervalId.current);
  }, [remainingTime, intervalId.current]);
  //
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[92.6%] w-[92.6%] z-[1] bg-darkBlue rounded-full grid place-items-center overflow-hidden">
      <div
        style={{
          transform: angle > 180 ? "rotate(180deg)" : `rotate(${angle}deg)`,
          display: remainingTime < 0 && "none",
        }}
        className="semicircle"
      ></div>
      <div
        style={{
          transform:
            angle > 180 ? `rotate(${angle}deg)` : `rotate(${angle}deg)`,
          display: remainingTime < 0 && "none",
        }}
        className="semicircle"
      ></div>
      <div
        style={{
          display: angle > 180 ? "none" : "block",
          zIndex: "100",
        }}
        className="semicircle"
      ></div>
      <div className="outermost-circle"></div>
    </div>
  );
};

export default ProgressBar;
