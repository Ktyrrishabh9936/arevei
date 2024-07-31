import React from 'react';
import Header from '../Dashboard/header';

const ProjectSlotBooking = () => {
  return (
        <>
        <Header/>
    <div className="  text-white flex flex-col justify-center items-center px-3 w-full md:w-[95%] lg:w-[87%] xl:w-[77%] mx-auto">
    <div className=" space-y-6 text-center my-1 w-[70%] mx-auto">
      <h1 className=" font-bold text-center text-[clamp(2.2rem,2.8vw,3.3rem)] leading-none">Pay Advance Amount and book your Project Slot</h1>
          <p className="text-xl text-[rgba(130,130,130,1)] text-[clamp(1rem,1.3vw,1.5rem)] ">This Amount is used to Allocate the Sufficient Resource for your Project</p>
        </div>
        <div className="my-10"> 
      <h2 className="text-[clamp(1.2rem,1.5vw,1.7rem)] font-bold mb-4 text-center">Get a Professionals working for your Project</h2>
      <div className="flex w-full bg-[rgb(0,0,0)] ">
      <div className=" p-6 rounded-lg shadow-md w-[38%] mt-8 flex items-center justify-center">
        <div className="text-center ">
          <span className="text-xl font-semibold">Amount</span>
          <div className="text-4xl font-bold my-4  text-[rgba(130,130,130)]">3000</div>
          <button className="bg-[rgba(155,225,63)] hover:bg-green-700 text-black  font-bold py-2.5 px-4 rounded-md mt-2">Pay Now</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8   w-[62%]">
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-base">Collaboration</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-base">Time Matters</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-base">Business Growth</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-base">Creativity</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
      </div>
      </div>
      </div>
      <p className="my-4 text-center text-sm text-gray-400">You will be redirected to an external payment page, all amount is inclusive of 18% GST</p>
    </div>
    </>

  );
}

export default ProjectSlotBooking;
