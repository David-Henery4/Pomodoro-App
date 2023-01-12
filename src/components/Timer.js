import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/Context";

const Timer = () => {
  // start,restart,pause
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  // const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  //
  const [defaultSecs, setDefaultSecs] = useState(0);
  const { activeMode, handleMinsChange, resetMins } = useGlobalContext();
  //
  const handleCountdown = () => {
    if (activeMode.timerMins >= 0) {
      setDefaultSecs((oldValue) => {
        return oldValue - 1;
      });
    }
    if (defaultSecs === 0) {
      setDefaultSecs(59);
      handleMinsChange(activeMode.id);
    }
  };
  //
  useEffect(() => {
    if (hasTimerStarted) {
      const Id = setInterval(handleCountdown, 1000);
      setIntervalId(Id);
      if (activeMode.timerMins === 0 && defaultSecs === 0) {
        console.log("stop");
        clearInterval(intervalId);
        setHasTimerStarted(!hasTimerStarted);
        setIsTimerActive(!isTimerActive);
        setIsTimerCompleted(true)
        // setIsTimerPaused(!isTimerPaused)
      }
      //
      return () => clearInterval(Id);
    }
  }, [defaultSecs, activeMode.timerMins, hasTimerStarted]);
  //
  return (
    <div className="pt-12 pb-[79px]">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center">
        <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end">
          <p className="text-[80px]">
            {`${activeMode.timerMins}`.padStart(2, 0)}:
            {`${defaultSecs}`.padStart(2, 0)}
          </p>
          {isTimerCompleted || (
            <button
              className="text-sm tracking-thirdHeading uppercase self-start"
              onClick={() => {
                // handleCountdown();
                setHasTimerStarted(!hasTimerStarted);
                setIsTimerActive(!isTimerActive);
                setIsTimerCompleted(false);
                // setIsTimerPaused(!isTimerPaused);
              }}
            >
              {hasTimerStarted || "Start"}
              {isTimerActive && "Pause"}
            </button>
          )}
          {isTimerCompleted && (
            <button
              className="text-sm tracking-thirdHeading uppercase self-start"
              onClick={() => {
                // handleCountdown();
                setDefaultSecs(0)
                resetMins(activeMode.id)
                setHasTimerStarted(!hasTimerStarted);
                setIsTimerActive(!isTimerActive);
                setIsTimerCompleted(false)
                // setIsTimerPaused(!isTimerPaused);
              }}
            >
              restart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
