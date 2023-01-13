import React from "react";

const LoadingBar = (props) => {
  let {
    size = 150,
    progress = 0,
    trackWidth = 0,
    trackColor = `#ddd`,
    indicatorWidth = 2,
    indicatorColor = `#F87070`,
    indicatorCap = `round`,
    label = `Loading...`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;
  //
  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);
  //
  return (
    <div
      className="svg-pi-wrapper top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[92.6%] w-[92.6%]"
      // style={{ width: size, height: size }}
    >
      <svg
        className="svg-pi"
        viewBox="25 5 100 140"
        style={{ width: "100%", height: "100%" }}
      >
        <circle
          className="svg-pi-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          // stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          className={`svg-pi-indicator ${
            spinnerMode ? "svg-pi-indicator--spinner" : ""
          }`}
          style={{ animationDuration: spinnerSpeed * 1000 }}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={5}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>
    </div>
  );
};

export default LoadingBar;
