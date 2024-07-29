import React from 'react';

const Header = () => {
  return (
    <header className="flex  items-center mb-12 p-5 relative bg-[rgb(3,3,3)] shadowarevei">
        <div className="flex justify-center w-full self-center ">
          <img className=' h-8 ' src="img/Group.png" alt="" />
        </div>
      <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max absolute right-6 top-4">Book a Service Now</button>
    </header>
  );
};

export default Header;
