import React from 'react'
import { CloseIcon } from '../../assets';

const ModalHeader = ({ setIsSettingsModalOpen}) => {
  return (
    <section className="w-full p-6 flex justify-between items-center border-b border-b-lineGrey smlTab:pt-[34px] smlTab:pb-[31px] smlTab:px-10">
      <h3 className="text-xl">Settings</h3>
      <CloseIcon className='hover:cursor-pointer' onClick={() => setIsSettingsModalOpen(false)}/>
    </section>
  );
};

export default ModalHeader