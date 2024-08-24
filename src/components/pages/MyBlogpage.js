import React, { useEffect } from 'react'
import BlogHeader from '../Dashboard/blogDashBoard/blogheader';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import blogService from '../../Redux/RequestServices/blogService';
export default function MyBlogpage() {
  const {blogReducer} = useSelector(store=>store);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(blogService.getMyBlogs())
  },[])
  return (
        <div className='min-h-screen'>
        <BlogHeader/>
        <div className="max-w-4xl mx-auto  text-white mt-10 mb-7">
          {/* Repeat this block for each item */}
          {blogReducer.myblog?.map((blog, index) => (
            <div key={index} className=" group flex items-center justify-between py-4 border-b border-[rgb(19,19,19)] hover:bg-[#424242] px-5 rounded-md">
              <div className="flex items-center">
                <HiOutlinePaintBrush className="text-lime-500 mr-2" fontSize={20} />
                <p className="text-gray-300 group-hover:text-[rgb(155,225,63)] cursor-pointer">
                  {blog?.headline}
                </p>
              </div>
              <div className="flex items-center space-x-4 text-[rgb(72,72,72)] group-hover:text-white">
                <p className="text-sm ">{new Date(blog.createdAt).toLocaleDateString()}</p>
                <p className="text-sm ">{new Date(blog.createdAt).toLocaleTimeString()}</p>
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
