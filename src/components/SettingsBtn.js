import React from 'react'
import { SettingsIcon } from '../assets';

const SettingsBtn = ({ setIsSettingsModalOpen}) => {
  return (
    <footer>
      <div
        className="hover:cursor-pointer"
        onClick={() => setIsSettingsModalOpen(true)}
      >
        <SettingsIcon />
      </div>
    </footer>
  );
};

export default SettingsBtn