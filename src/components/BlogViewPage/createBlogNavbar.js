import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function CreateBlogNavbar() {
  return (
    <>
        <header className="  bg-[rgb(3,3,3)] shadowarevei sticky top-0 z-50 py-3 ">
      <div className="relative flex  justify-between items-center   h-min w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto">
        <div className="  ">
          <img className=' h-6 ' src="/img/Group.png" alt="" />
        </div>
        <div className="flex justify-center items-center gap-5">
        <Link to='/blog/dashboard' className=" space-x-3 text-white  py-2 flex">
        <BiLogOut fontSize={21} />
        <button className='    rounded whitespace-nowrap self-end w-max h-min' >Back to Dashboard</button>
      </Link>
      <Link to='/blogs' className='text-[rgba(86,206,226,1)]'>Blogs</Link>
      <div className=" bg-white h-10 w-10 rounded-full"></div>
      </div>
      </div>
    </header>
    </>
  )
}
