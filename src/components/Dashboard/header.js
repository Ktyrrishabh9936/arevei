import React, { useState } from 'react';
import { logout } from '../../Redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import LoginModal from '../pages/LoginModal';
// import SignupModal from '../pages/SignupModal';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [isSignupOpen, setIsSignupOpen] = useState(false);

  // const handleOpenLogin = () => setIsLoginOpen(true);
  // const handleCloseLogin = () => setIsLoginOpen(false);
  // const handleOpenSignup = () => setIsSignupOpen(true);
  // const handleCloseSignup = () => setIsSignupOpen(false);

  return (
    <header className="  bg-[rgb(3,3,3)] shadowarevei sticky top-0 ">
      <div className="relative flex  items-center py-4  h-min">
      {/* <div className=" flex justify-center items-center  ">
      <div className='flex'>
        <button
          onClick={handleOpenLogin}
          className="bg-green-500 text-white p-1 rounded "
        >
           Login
        </button>
        <button
          onClick={handleOpenSignup}
          className="bg-blue-400 text-white p-1 rounded "
        >
           Signup 
        </button>
      </div>
      <LoginModal open={isLoginOpen} handleClose={handleCloseLogin} />
      <SignupModal open={isSignupOpen} handleClose={handleCloseSignup} />
    </div> */}
    
        <div className="flex justify-center w-full self-center  ">
          <img className=' h-6 ' src="img/Group.png" alt="" />
        </div>
        <div className="absolute right-6 top-3 space-x-3">
        <button className='bg-[#9baba7] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max' onClick={()=>{
          dispatch(logout());
        }}>Logout</button>
      <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max ">Book a Service Now</button>
      </div>
      </div>
    </header>
  );
};

export default Header;
