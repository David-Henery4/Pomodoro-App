import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/Context";
import { LoadingBar, ProgressBar, CircleProgress } from "../components";

const Timer = () => {
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  //
  const [defaultSecs, setDefaultSecs] = useState(0);
  const { activeMode, handleTimeChange, resetMinsAndSecs, mode, activeTheme } =
    useGlobalContext();
  // activeMode.timerSecs
  const handleCountdown = () => {
    handleTimeChange();
  };
  //
  useEffect(() => {
    if (hasTimerStarted) {
      const Id = setInterval(handleCountdown, 1000);
      setIntervalId(Id);
      if (activeMode.timerMins === 0 && activeMode.timerSecs === 0) {
        clearInterval(intervalId);
        setHasTimerStarted(!hasTimerStarted);
        setIsTimerActive(!isTimerActive);
        setIsTimerCompleted(true);
      }
      //
      return () => clearInterval(Id);
    }
  }, [activeMode.timerSecs, activeMode.timerMins, hasTimerStarted]);
  //***********************************************************//
  return (
    <div className="pt-12 pb-[79px]">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center smlTab:w-[410px] smlTab:h-[410px]">
        <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end relative">
          <CircleProgress/>
          <p className="text-[80px]">
            {`${activeMode.timerMins}`.padStart(2, 0)}:
            {`${activeMode.timerSecs}`.padStart(2, 0)}
          </p>
          {isTimerCompleted || (
            <button
              className="text-sm tracking-thirdHeading uppercase self-start relative z-10"
              onClick={() => {
                setHasTimerStarted(!hasTimerStarted);
                setIsTimerActive(!isTimerActive);
                setIsTimerCompleted(false);
              }}
            >
              {hasTimerStarted || "Start"}
              {isTimerActive && "Pause"}
            </button>
          )}
          {isTimerCompleted && (
            <button
              className="text-sm tracking-thirdHeading uppercase self-start relative z-10"
              onClick={() => {
                // setDefaultSecs(0);
                // setProgress(0);
                resetMinsAndSecs(activeMode.id);
                setHasTimerStarted(!hasTimerStarted);
                setIsTimerActive(!isTimerActive);
                setIsTimerCompleted(false);
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
