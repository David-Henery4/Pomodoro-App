import { SettingsIcon } from "./assets";

function App() {
  return (
    <div className="App font-bold text-darkGrey w-full h-screen bg-lighterBlue">
      <main className="w-full flex flex-col items-center pt-8 gap-[39px]">
        <h1 className="text-2xl">pomodoro</h1>
        {/* CONTENT */}
        <section className="w-full flex flex-col items-center px-6">
          {/* STATE/TYPE SELECTION BTNS */}
          <div className="w-full h-16 py-2 px-[6px] flex items-center bg-darkBlue text-xs rounded-[31px]">
            <button className="bg-primaryRed h-full w-full rounded-[26px] text-lighterBlue">
              pomodoro
            </button>
            <button className="text-darkGrey h-full w-full rounded-[26px]">
              short break
            </button>
            <button className="text-darkGrey w-full h-full rounded-[26px]">
              long break
            </button>
          </div>
          {/* MAIN TIMER SECTION */}
          <div className="pt-12 pb-[79px]">
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-timerBaseColourTwo to-timerBaseColourOne shadow-mainTimer grid place-items-center">
              <div className="bg-darkBlue rounded-full h-[89.3%] w-[89.3%] grid place-items-center items-end">
                <p className="text-[80px]">17:59</p>
                <p className="text-sm tracking-thirdHeading uppercase self-start">pause</p>
              </div>
            </div>
          </div>
          {/* SETTINGS ICON */}
          <footer>
            <div>
              <SettingsIcon />
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
