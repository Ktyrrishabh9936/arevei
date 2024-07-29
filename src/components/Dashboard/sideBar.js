import React from 'react';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { IoHomeOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { MdOutlineDesignServices, MdOutlinePersonPin } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-[rgba(155,225,63,1)] flex flex-col items-center py-6 gap-y-8">
      <div className="mb-8 h-[50%] flex items-center">
        <img src="img/ArevieLogo.png" alt="Arevei Logo" className=" h-20 md:h-40 xl:h-60  o" />
      </div>
      <nav className="space-y-6 h-[50%]">
        <a href="#" className="flex items-center text-black">
        <IoHomeOutline/>
          <span className="ml-2">Home</span>
        </a>
        <a href="#" className="flex items-center text-black">
      <MdOutlineDesignServices/>
          <span className="ml-2">My Services</span>
        </a>
        <a href="#" className="flex items-center text-black">
      <IoMailUnreadOutline/>

          <span className="ml-2">Schedule a Meeting</span>
        </a>
        <a href="#" className="flex items-center text-black">
      <HiOutlinePaintBrush/>

          <span className="ml-2">Services</span>
        </a>
        <a href="#" className="flex items-center text-black">
      <MdOutlinePersonPin/>

          <span className="ml-2">Settings</span>
        </a>
      </nav>
      <button className="mt-auto bg-transparent text-black border-2 border-black  px-4 py-2 rounded">Raise Complaint</button>
    </aside>
  );
};

export default Sidebar;
