import React from 'react';

const ServiceCards = () => {
  return (
    <section className="grid grid-cols-3 gap-8 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <div className="bg-[rgba(13,13,13,1)] px-4 py-12 text-center rounded">
        <h3 className="text-xl mb-1 font-bold">Explore Subscription</h3>
        <p className="text-[rgba(130,130,130)] mb-4">Explore the Money Saver Service</p>
        <button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Explore</button>
      </div>
      <div className="bg-[rgba(13,13,13,1)] px-4 py-12 text-center rounded">
        <h3 className="text-xl mb-1 font-bold">Track Progress</h3>
        <p className="text-[rgba(130,130,130)] mb-4">How Much did I save with Arevei</p>
        <button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Check Progress</button>
      </div>
      <div className="bg-[rgba(13,13,13,1)] px-4 py-12 text-center rounded">
        <h3 className="text-xl mb-1 font-bold">Payment & Invoices</h3>
      <p className="text-[rgba(130,130,130)] mb-4">How Much did I save with Arevei</p>
        <button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Pay Now</button>
      </div>
    </section>
  );
};

export default ServiceCards;
