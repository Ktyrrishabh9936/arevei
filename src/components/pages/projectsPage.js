import React from 'react';
import Header from '../Dashboard/header';
import CustomStepper, { ProjectStatus } from '../ProjectPage/projectStatus';

const ProjectDashboard = () => {
  const steps = [
    'Payment Received',
    'Project Manager Assigned',
    'Project Brief and Research',
    'Design and Prototype',
    'Review',
    'Reiteration',
    '2nd Part Payment',
    'Final Delivery',
    'Feedback and Post Sales',
  ];
  return (
        <>
        <Header/>
    <div className="  text-white flex flex-col justify-center items-center p-6 px-3 w-full md:w-[95%] lg:w-[87%] xl:w-[77%] mx-auto">
        <div className="flex justify-between space-x-8 mt-2 text-center mb-8 w-full font-semibold text-lg">
          <span>Project Name: Brochure Design</span>
          <span>Plan: Brandlite</span>
          <span>Subscription: Nil</span>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full max-w-4xl">
        <div className="bg-[rgba(13,13,13)] p-6 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Project Cost</h2>
          <p className="mb-2 text-sm text-[rgb(130,130,130)]">Arevei Brochure</p>
          <div className=" my-4 text-[clamp(1rem,1.5vw,1.8rem)] font-bold">$500.00</div>
        </div>
        <div className="bg-[rgba(13,13,13)] p-6 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Total Savings</h2>
          <p className="mb-2 text-sm text-[rgb(130,130,130)]">25% Off on Total Cost</p>
          <div className=" my-4 text-[clamp(1rem,1.5vw,1.8rem)] font-bold">$400.00 Saved</div>
        </div>
        <div className="bg-[rgba(13,13,13)] p-6 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Project Duration</h2>
          <p className="mb-2 text-sm text-[rgb(130,130,130)]">Expected Completion Time</p>
          <div className=" my-4 text-[clamp(1rem,1.5vw,1.8rem)] font-bold">3 Weeks</div>
        </div>
      </div>

      <div className="w-full  mb-8">
        <h2 className="text-lg font-bold mb-4">Project Status</h2>
        <CustomStepper steps={steps} activeStep={4}/>
        {/* <div className="flex flex-col md:flex-row items-center justify-between text-center text-sm space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center">
            <span>8:00 PM, 28th July</span>
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <span>Payment Received</span>
          </div>
          <div className="flex flex-col items-center">
            <span>8:00 PM, 28th July</span>
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <span>Project Manager Assigned</span>
          </div>
          <div className="flex flex-col items-center">
            <span>8:00 PM, 28th July</span>
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <span>Project Brief and Research</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <span>Design and Prototype</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <span>Review</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <span>Reiteration</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <span>2nd Part Payment</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <span>Final Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <span>Feedback and Post Sales</span>
          </div>
        </div> */}
      </div>
      <div className="flex w-full justify-between">
      <div className=" my-auto">
        <h2 className="text-xl font-bold">Expected ETA: 00:00 HRS, 00 Month Year</h2>
      </div>
      <div className="flex flex-col-reverse text-right">
      <div className="flex justify-center space-x-4 text-sm">

        <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap  w-max my-6 ">My Docs</button>
        <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap  w-max my-6 ">My Services</button>
        <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap  w-max my-6 ">Contact Project Manager</button>

      </div>

      <div className=" ">
        <p>Client ID: ARC1XXXX</p>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default ProjectDashboard;
