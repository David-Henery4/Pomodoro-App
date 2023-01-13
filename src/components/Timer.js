import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/Context";
import { LoadingBar } from "../components";

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
  // activeMode.timerMins > 0 ? activeMode.timerMins * 600 : 600; // 3 seconds
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = ((mode[activeMode.id - 1].timerMins * 60) * 1000);
      // ? activeMode.timerMins * (mode[activeMode.id - 1].timerMins * 60)
      // : mode[activeMode.id - 1].timerMins * 600; // 3 seconds
  // console.log(mode[activeMode.id - 1].timerMins * 600)
  useEffect(() => {
    if (hasTimerStarted) {
      let loadingTimeout = setTimeout(() => {
        if (loading >= 100) return;
        setProgress(progress + 1);
      }, loadingDuration / 100);
      if (progress === 100) {
        setLoading(false);
      }
      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [progress, loading, hasTimerStarted]);
  //***************************************************************//
  return (
    <div className="pt-12 pb-[79px]">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center smlTab:w-[410px] smlTab:h-[410px]">
        <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end relative">
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-primaryRed rounded-full h-[92.6%] w-[92.6%]"></div> */}
          <LoadingBar progress={progress} trackWidth={5} indicatorWidth={10}/>
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
                setProgress(0);
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
