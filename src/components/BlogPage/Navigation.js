import React from 'react'

export default function BlogNavigation() {
  return (
    <>
        <header className="  bg-[rgb(3,3,3)] shadowarevei sticky top-0 z-50 py-3 ">
      <div className="relative flex  justify-between items-center   h-min w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto">
        <div className="  ">
          <img className=' h-6 ' src="/img/Group.png" alt="" />
        </div>
        <div className=" w-[30%]  flex  relative rounded-full">
                <input type="text" className=' bg-[rgb(21,21,21)]   w-full pl-5 pr-[94px]  py-2 rounded-full text-white ' placeholder='Search' />
                <button className=' text-gray-600 px-3 w-min absolute right-2 h-full border-l-2 border-gray-900'>cmd+k</button>
        </div>
        <div className=" space-x-3">
        <button className=' border-2 border-blue-300 text-white px-4 py-2 rounded whitespace-nowrap self-end w-max' >Write</button>
      <button type='button' className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max ">Schedule a Meeting</button>
      </div>
      </div>
    </header>
    </>
  )
}
