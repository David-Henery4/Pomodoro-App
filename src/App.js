import { useState } from "react";
import {StateSelection, Timer, SettingsBtn, SettingsModal} from "./components"

function App() {
  const [isSettingsModalOpen,setIsSettingsModalOpen] = useState(false)
  //
  return (
    <div className="App font-bold text-darkGrey w-full h-screen bg-lighterBlue">
      <SettingsModal isSettingsModalOpen={isSettingsModalOpen} setIsSettingsModalOpen={setIsSettingsModalOpen}/>
      <main className="w-full flex flex-col items-center pt-8 gap-[39px]">
        <h1 className="text-2xl">pomodoro</h1>
        {/* CONTENT */}
        <section className="w-full flex flex-col items-center px-6">
          {/* STATE SELECTION BTNS */}
          <StateSelection />
          {/* MAIN TIMER SECTION */}
          <Timer />
          {/* SETTINGS ICON */}
          <SettingsBtn setIsSettingsModalOpen={setIsSettingsModalOpen} />
        </section>
      </main>
    </div>
  );
}

export default App;
