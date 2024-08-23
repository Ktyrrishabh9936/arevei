import React, { useState } from 'react'
import CTAbuttons from './CTAbuttons'
import { FiUpload } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'

export default function BlogPost({File,setFile,head,content}) {
  const [Avatar,setAvatar] = useState(`${window.location.origin}/img/coverimage.jpeg`);
 
const handleFileChange = (e) => {
  setFile(e.target.files[0]);
  console.log(e.target.files);
    setAvatar(URL.createObjectURL(e.target.files[0]));
};

const handleRemoveFile = () => {
  setFile(null);
  setAvatar(`${window.location.origin}/img/coverimage.jpeg`);
};
  return (
    <>
      <div className=" max-w-4xl mx-auto py-8">
      <div className=" text-white  ">
  <div className=" mx-auto text-center">
        <div className="">
                <div className="h-80 group relative" style={{background:`linear-gradient(transparent,black),url(${Avatar}) center center /cover no-repeat`}}>
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 w-full h-full bg-[#2c496499]  flex space-x-4  text-white flex-col gap-2 justify-center items-center " >
                <div className="relative flex flex-col items-center justify-center w-64 h-64 bg-black rounded-lg shadow-md">
      {!File ? (
        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
          <FiUpload className="w-12 h-12 text-blue-500" />
          <span className="mt-2 text-base font-medium text-gray-700">Choose a file</span>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-medium text-gray-700 mb-4">
            {File.name}
          </p>
          <button
            onClick={handleRemoveFile}
            className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full hover:bg-red-600"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      )}
             </div>
                        </div>
               

   </div>
                <div className=" relative rounded-full ">
                        <img src="/img/profile.png" className='h-32 mx-auto rounded-full' alt="" />
                </div>
        </div>
        <CTAbuttons/>
    <h1 className="text-[clamp(2.3rem,2.7vw,3rem)]  font-bold my-4 ">
      {head.Heading}
    </h1>
    <p className=" mb-8 text-[rgb(130,130,130)] " >
      {head.SubHeading}
    </p>
    
  </div>
</div>

<div dangerouslySetInnerHTML={{__html:content}} ></div>
<CTAbuttons/>
</div>
    </>
  )
}
