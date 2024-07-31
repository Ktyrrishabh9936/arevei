import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  return (
    <section className="grid grid-cols-3 gap-8 w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
      <div className="bg-[rgba(13,13,13,1)] px-4 py-8 text-center rounded">
        <h3 className="text-lg mb-1 font-bold">Explore Subscription</h3>
        <p className="text-[rgba(130,130,130)] mb-4">Explore the Money Saver Service</p>
      <Link to='/subscription'><button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Explore</button></Link>
      </div>
      <div className="bg-[rgba(13,13,13,1)] px-4 py-8 text-center rounded">
        <h3 className="text-lg mb-1 font-bold">Track Progress</h3>
        <p className="text-[rgba(130,130,130)] mb-4">How Much did I save with Arevei</p>
        <Link to='/trackProgess'><button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Check Progress</button></Link>
      </div>
      <div className="bg-[rgba(13,13,13,1)] px-4 py-8 text-center rounded">
        <h3 className="text-lg mb-1 font-bold">Payment & Invoices</h3>
      <p className="text-[rgba(130,130,130)] mb-4">How Much did I save with Arevei</p>
        <Link to='/paymentInvoices'><button className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded mt-6">Pay Now</button></Link>
      </div>
    </section>
  );
};

export default ServiceCards;
