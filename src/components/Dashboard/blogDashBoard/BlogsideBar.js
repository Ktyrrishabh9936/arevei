import React from 'react';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { IoHomeOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDesignServices, MdOutlinePersonPin } from 'react-icons/md';
import { logout } from '../../../Redux/slices/authSlice';

const BlogSidebar = () => {
        const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside className="w-1/5 bg-[rgb(171,171,171)] flex flex-col items-center py-6 gap-y-8 h-screen sticky top-0">
      <div className="mb-8  flex items-center pt-16 max-h-[40%]">
        <img src="/img/ArevieLogo.png" alt="Arevei Logo" className=" h-20 md:h-40 xl:h-55 " />
      </div>
      <nav className="space-y-6 h-full flex justify-center flex-col">
        <a href="/" className="flex items-center text-black">
        <IoHomeOutline/>
          <Link to='' className="ml-2">Home</Link>
        </a>
        <a href="/" className="flex items-center text-black">
      <MdOutlineDesignServices/>
          <Link to="myblogs" className="ml-2">My Blog</Link>
        </a>
        <a href="/" className="flex items-center text-black">
      <IoMailUnreadOutline/>

          <span className="ml-2">Messages</span>
        </a>
        <a href="/" className="flex items-center text-black">
      <HiOutlinePaintBrush/>

          <span className="ml-2">Write a Blog</span>
        </a>
        <a href="/" className="flex items-center text-black">
      <MdOutlinePersonPin/>

          <span className="ml-2">Settings</span>
        </a>
      </nav>
      <button className='bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap w-max' onClick={()=>{
          dispatch(logout());
          navigate('/login');
        }}>Sign Out</button>
    </aside>
  );
};

export default BlogSidebar;
