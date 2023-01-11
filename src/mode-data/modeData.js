const modeData = [
  {
    id: 1,
    mode: "pomodoro",
    isActive: true,
    timerMins: 1,
    timerSecs: 0
  },
  {
    id: 2,
    mode: "short break",
    isActive: false,
    timerMins: 5,
    timerSecs: 0
  },
  {
    id: 3,
    mode: "long break",
    isActive: false,
    timerMins: 15,
    timerSecs: 0
  },
];

// const handleSelectingActiveMode = (id) => {
//   modeData.forEach(mode => mode.id === id ? mode.isModeActive = true: mode.isModeActive = false)
// }

export{
  modeData,
}
