import React from 'react'
import BlogNavigation from '../BlogPage/Navigation'
import { useLocation } from 'react-router-dom'
import CTAbuttons from '../BlogPage/CTAbuttons'
import BlogContent from '../BlogPage/BlogContent'

export default function Blogpage() {
  return (
        <div className=' bg-[rgb(3,3,3)]'>
    <BlogNavigation/>
    <div className=" max-w-4xl mx-auto py-8">
      <div className=" text-white  ">
  <div className=" mx-auto text-center">
        <div className="">
                <div className="h-80 " style={{background:`linear-gradient(transparent,black),url(${window.location.origin}/img/coverimage.jpeg) center center /cover no-repeat`}}>
                        {/* <img src="/img/coverimage.jpeg" className=' bg-cover bg-center' alt="" /> */}
                </div>
                <div className=" relative rounded-full ">
                        <img src="/img/profile.png" className='h-32 mx-auto rounded-full' alt="" />
                </div>
        </div>
        <CTAbuttons/>
    <h1 className="text-[clamp(2.3rem,2.7vw,3rem)]  font-bold my-4 ">
      Some bite-sized tips and tricks for improving website design.
    </h1>
    <p className=" mb-8 text-[rgb(130,130,130)] " >
      At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
    </p>
    
  </div>
</div>
<CTAbuttons/>
<BlogContent/>
<div className="w-[70%] mx-auto overflow-hidden my-8" >
        <img src="/img/conimage.jpeg" className='bg-cover bg-center' alt="" />
</div>
<BlogContent/>
<CTAbuttons/>
</div>

<div className=" text-white w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto">
  <div className=" mx-auto py-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="">
        <img src="" className='h-60 bg-white' alt="" />
        <p className=" font-bold">Creating Engaging Content for Your WordPress Website</p>
      </div>
      <div className="">
        <img src="" className='h-60 bg-white' alt="" />
        <p className=" font-bold">Creating Engaging Content for Your WordPress Website</p>
      </div>
      <div className="">
        <img src="" className='h-60 bg-white' alt="" />
        <p className=" font-bold">Creating Engaging Content for Your WordPress Website</p>
      </div>
      <div className="">
        <img src="" className='h-60 bg-white' alt="" />
        <p className=" font-bold">Creating Engaging Content for Your WordPress Website</p>
      </div>
    </div>
  </div>
</div>
<footer className="bg-black text-gray-500 ">
  <div className="max-w-6xl mx-auto flex justify-between">
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Company</h3>
      <ul className="space-y-2">
        <li>About</li>
        <li>Contact</li>
        <li>Payment</li>
        <li>Careers</li>
        <li>Work</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
      <ul className="space-y-2">
        <li>Privacy Policy</li>
        <li>Refund</li>
        <li>Terms & Condition</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
      <ul className="space-y-2">
        <li>Blog</li>
        <li>Newsletter</li>
        <li>Brand Guidelines</li>
      </ul>
    </div>
  </div>
  <div className="mt-8 text-center text-gray-400">
    <p>© 2024 Arevei. All Rights Reserved.</p>
  </div>
</footer>
    </div>
  )
}
