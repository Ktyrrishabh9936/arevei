import React from 'react';

const Header = () => {
  return (
    <header className="  bg-[rgb(3,3,3)] shadowarevei sticky top-0 ">
      <div className="relative flex  items-center  p-5">
        <div className="flex justify-center w-full self-center ">
          <img className=' h-6 ' src="img/Group.png" alt="" />
        </div>
      <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max absolute right-6 top-4">Book a Service Now</button>
      </div>
    </header>
  );
};

export default Header;
