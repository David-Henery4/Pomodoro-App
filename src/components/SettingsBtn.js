import React from 'react'
import { SettingsIcon } from '../assets';
import { useGlobalContext } from '../hooks/Context';

const SettingsBtn = ({ setIsSettingsModalOpen}) => {
  const { resetWhenNotConfirmed } = useGlobalContext();
  return (
    <footer>
      <div
        className="hover:cursor-pointer"
        onClick={() => setIsSettingsModalOpen(true)}
      >
        <SettingsIcon onClick={resetWhenNotConfirmed}/>
      </div>
    </footer>
  );
};

export default SettingsBtn