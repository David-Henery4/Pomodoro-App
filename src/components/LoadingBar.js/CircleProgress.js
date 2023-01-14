import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleProgress = ({ time, hasTimerStarted, activeTheme,setKey,keyValue }) => {
  const [size,setSize] = useState(248)
  //
  useEffect(() => {
  const medQuery = window.matchMedia("(min-width: 630px)")
  const handleMedQuery = (match) => {
    if (match.matches){
      setSize(339)
    } else {
      setSize(248)
    }
  } 
  medQuery.addEventListener("change",handleMedQuery)
  handleMedQuery(medQuery)
  return () => medQuery.removeEventListener("change", handleMedQuery)
  }, [])
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <CountdownCircleTimer
        key={keyValue}
        className="mx-auto"
        size={size}
        strokeWidth={9}
        isPlaying={hasTimerStarted}
        duration={time.mode[time.activeMode.id - 1].timerMins * 60}
        colors={activeTheme.hex}
        colorsTime={[10, 6, 3, 0]}
        rotation={"counterclockwise"}
        trailColor="none"
      ></CountdownCircleTimer>
    </div>
  );
};

export default CircleProgress;
