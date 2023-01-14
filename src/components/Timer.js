import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/Context";
import { CircleProgress } from "../components";

const Timer = () => {
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  //
  const {
    activeMode,
    handleTimeChange,
    resetMinsAndSecs,
    mode,
    activeTheme,
    activeFont,
    key,
    setKey,
  } = useGlobalContext();
  //
  const handleCountdown = () => {
    handleTimeChange();
  };
  //
  useEffect(() => {
    setKey((prevKey) => prevKey + 1)
    setHasTimerStarted(false)
    setIsTimerActive(false)
  },[mode])
  //
  useEffect(() => {
    if (hasTimerStarted) {
      const Id = setInterval(handleCountdown, 1000);
      setIntervalId(Id);
      if (activeMode.timerMins === 0 && activeMode.timerSecs === 0) {
        clearInterval(intervalId);
        setHasTimerStarted(!hasTimerStarted);
        setKey((prevKey) => prevKey + 1);
        setIsTimerActive(!isTimerActive);
        setIsTimerCompleted(true);
      }
      //
      return () => clearInterval(Id);
    }
  }, [activeMode.timerSecs, activeMode.timerMins, hasTimerStarted]);
  //***********************************************************//
  return (
    <div className="pt-12 pb-[79px] smlTab:pt-[45px] smlTab:pb-[63px]">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center smlTab:w-[410px] smlTab:h-[410px]">
        <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end relative">
          <CircleProgress time={{mode, activeMode}} hasTimerStarted={hasTimerStarted} activeTheme={activeTheme} setKey={setKey} keyValue={key}/>
          <p className={`text-[80px] ${activeFont.letterSpacing} smlTab:text-[100px]`}>
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
