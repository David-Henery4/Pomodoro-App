import React from "react";
import {
  ModalHeader,
  TimeSettings,
  FontSetting,
  ColorSettings,
} from "./modal-components";

const SettingsModal = ({ isSettingsModalOpen, setIsSettingsModalOpen }) => {
  return (
    <div className={`max-w-[540px] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-darkBlue bg-baseWhite w-11/12 ${isSettingsModalOpen ? "block": "hidden"}`}>
      <ModalHeader setIsSettingsModalOpen={setIsSettingsModalOpen}/>
      <section className="w-full px-6 pt-6">
        {/* TIME */}
        <TimeSettings />
        {/* FONT */}
        <FontSetting />
        {/* COLOUR */}
        <ColorSettings />
      </section>
      <button className="primary-btn w-[140px] h-[53px] relative left-1/2 -translate-x-1/2 -bottom-[26.5px] text-baseWhite">
        Apply
      </button>
    </div>
  );
};

export default SettingsModal;
