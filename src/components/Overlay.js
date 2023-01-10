import React from 'react'

const Overlay = ({ isSettingsModalOpen, setIsSettingsModalOpen }) => {
  return (
    <div
      className={`${
        isSettingsModalOpen ? "block" : "hidden"
      } absolute left-0 top-0 w-full h-full bg-overlayColor/50`}
      onClick={() => {
        setIsSettingsModalOpen(false)
      }}
    ></div>
  );
};

export default Overlay