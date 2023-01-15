import { useState } from "react";
import { useGlobalContext } from "./hooks/Context";
import {StateSelection, Timer, SettingsBtn, SettingsModal, Overlay} from "./components"

function App() {
  const {activeFont} = useGlobalContext()
  const [isSettingsModalOpen,setIsSettingsModalOpen] = useState(false)
  //
  //
  return (
    <div className={`App ${activeFont.name} font-bold text-darkGrey w-full min-h-screen bg-lighterBlue`}>
      <Overlay isSettingsModalOpen={isSettingsModalOpen} setIsSettingsModalOpen={setIsSettingsModalOpen}/>
      <SettingsModal isSettingsModalOpen={isSettingsModalOpen} setIsSettingsModalOpen={setIsSettingsModalOpen}/>
      <main className="w-full flex flex-col items-center pt-8 gap-[45px] smlTab:gap-[55px] smlTab:pb-[56px] smlTab:pt-12">
        <h1 className="text-2xl">pomodoro</h1>
        {/* CONTENT */}
        <div className="w-full flex flex-col items-center px-6">
          {/* STATE SELECTION BTNS */}
          <StateSelection />
          {/* MAIN TIMER SECTION */}
          <Timer />
          {/* SETTINGS ICON */}
          <SettingsBtn setIsSettingsModalOpen={setIsSettingsModalOpen} />
        </div>
      </main>
    </div>
  );
}

export default App;
