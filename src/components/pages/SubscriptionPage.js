import React from 'react';
import Header from '../Dashboard/header';

const Subscription = () => {
  return (
        <>
        <Header/>
    <div className="  text-white flex flex-col justify-center items-center px-3 w-full md:w-[95%] lg:w-[87%] xl:w-[77%] mx-auto">
    <div className=" space-y-10 text-center my-14 w-[70%] mx-auto">
      <h1 className="text-6xl font-bold text-center text-[clamp(2.5rem,3vw,3.75rem)] ">Let us manage your Brand</h1>
          <p className="text-xl text-[rgba(130,130,130,1)]  ">Make Small Payments Monthly Until You make the Profits.</p>
        </div>

      <h2 className="text-[clamp(1.4rem,1.7vw,2rem)] font-bold mb-4">Get a team of Professionals working for your Brand</h2>
      <div className="flex w-full bg-[rgb(0,0,0)]">
      <div className=" p-6 rounded-lg shadow-md w-[38%] mt-8 flex items-center justify-center">
        <div className="space-y-6 ">
          <p className="text-2xl font-bold">Arevei <span className=' text-[rgba(155,225,63)]'>Brand Solution</span></p>

          <p className='text-[rgba(130,130,130)]'>Launch Exceptional Brands faster, manage your business better, and work more freely.</p>
          
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8   w-[62%]">
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-xl">Collaboration</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Time Matters</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Business Growth</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
        <div className=" p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Creativity</h3>
          <p className='text-[rgba(130,130,130)]'>Launch sites at scale with custom templates and reusable components in a drag-and-drop interface.</p>
        </div>
      </div>
      </div>
     <a href="https://www.arevei.com/meet"><button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap  w-max my-6 ">Schedule a Meeting</button></a> 
    </div>
    </>

  );
}

export default Subscription;
