const modeData = [
  {
    id: 1,
    mode: "pomodoro",
    isModeActive: true,
  },
  {
    id: 2,
    mode: "short break",
    isModeActive: false,
  },
  {
    id: 3,
    mode: "long break",
    isModeActive: false,
  },
];

const handleSelectingActiveMode = (id) => {
  modeData.forEach(mode => mode.id === id ? mode.isModeActive = true: mode.isModeActive = false)
}

export{
  modeData,
  handleSelectingActiveMode,
}
