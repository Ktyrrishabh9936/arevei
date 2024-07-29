import React from 'react';

const UserProfile = () => {
  return (
    <section className="flex items-center mb-12 w-[50%] mx-auto ">
      <img src="img/man.png" alt="Shiva" className="h-20 w-20 rounded-full mr-4" />
      <div className='flex  items-center gap-7'>
        <div className="flex flex-col pr-20">
        <h2 className="text-3xl">Shiva</h2>
        <p className="text-[rgba(130,130,130)]">Hey I am the Founder of Zolvit and a Explorer Vakilsearch.pvt.ltd www.Shiva.com</p>
        </div>
        <div className="mt-4 flex">
          <button className="bg-gradient-to-r from-[rgba(155,225,63)] to-[rgba(86,206,226)]   gradient-button text-[rgba(155,225,63)] p-0.5 rounded mr-2 whitespace-nowrap"><div className='w-full h-full  bg-[rgb(3,3,3)] px-4 py-2'>My Offers</div></button>
          <button className="bg-gradient-to-r from-[rgba(155,225,63)] to-[rgba(86,206,226)]   gradient-button text-[rgba(155,225,63)] p-0.5 rounded mr-2 whitespace-nowrap"><div className='w-full h-full  bg-[rgb(3,3,3)] px-4 py-2'>Brand Files</div></button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
