import React from 'react'
import { useGlobalContext } from '../hooks/Context';

const StateSelection = () => {
  const { activeTheme, mode, handleChangeMode } =
    useGlobalContext();
  //
  return (
    <div className="w-full h-16 py-2 px-[6px] flex items-center bg-darkBlue text-xs rounded-[31px] max-w-[373px]">
      {mode.map(mode=> {
        return (
          <button
            key={mode.id}
            className={`${
              mode.isActive && `${activeTheme.name} text-lighterBlue`
            } h-full w-full rounded-[26px] text-darkGrey`}
            onClick={() => {
              handleChangeMode(mode.id)
            }}
          >
            {mode.mode}
          </button>
        );
      })}
    </div>
  );
}

export default StateSelection