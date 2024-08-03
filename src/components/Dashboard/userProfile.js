import React from 'react';

const UserProfile = () => {
  return (
    <section className="flex items-center mb-16 w-[50%] mx-auto ">
      <img src="img/man.png" alt="Shiva" className="h-16 w-16 rounded-full mr-4" />
      <div className='flex  items-center gap-7'>
        <div className="flex flex-col">
        <h2 className="text-xl">Vinay Shakyawar</h2>
        <p className="text-[rgba(130,130,130)] line-clamp-2">Hey I am the Founder of Zolvit and a Explorer Arevei.pvt.Ltd <a href="https://www.arevei.com">www.arevei.com</a></p>
        </div>
        <div className="mt-4 flex min-w-[233px]">
          <button className="bg-gradient-to-r from-[rgba(155,225,63)] to-[rgba(86,206,226)]   gradient-button text-[rgba(155,225,63)] p-0.5 rounded mr-2 whitespace-nowrap"><div className='w-full h-full  bg-[rgb(3,3,3)] px-4 py-2 '>My Offers</div></button>
          <button className="bg-gradient-to-r from-[rgba(155,225,63)] to-[rgba(86,206,226)]   gradient-button text-[rgba(155,225,63)] p-0.5 rounded mr-2 whitespace-nowrap"><div className='w-full h-full  bg-[rgb(3,3,3)] px-4 py-2'>Brand Files</div></button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
