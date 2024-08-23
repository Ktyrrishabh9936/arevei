import React from 'react'
import BlogHeader from '../Dashboard/blogDashBoard/blogheader';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
export default function MyBlogpage() {
  return (
        <div className='min-h-screen'>
        <BlogHeader/>
        <div className="max-w-4xl mx-auto  text-white mt-10 mb-7">
          {/* Repeat this block for each item */}
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className=" group flex items-center justify-between py-4 border-b border-[rgb(19,19,19)] hover:bg-[#424242] px-5 rounded-md">
              <div className="flex items-center">
                <HiOutlinePaintBrush className="text-lime-500 mr-2" fontSize={20} />
                <p className="text-gray-300 group-hover:text-[rgb(155,225,63)] cursor-pointer">
                  Some bite-sized tips and tricks for improving website design.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-[rgb(72,72,72)] group-hover:text-white">
                <p className="text-sm ">15th August 2024</p>
                <p className="text-sm ">00:15 HRS</p>
                <p className="text-sm ">1.9K</p>
                <button className=" hover:text-red-400">Del</button>
                <button className=" hover:text-gray-400">Hold</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
