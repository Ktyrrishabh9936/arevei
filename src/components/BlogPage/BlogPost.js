import React from 'react'
import CTAbuttons from './CTAbuttons'

export default function BlogPost({headline,content}) {
  return (
    <>
      <div className=" max-w-4xl mx-auto py-8">
      <div className=" text-white  ">
  <div className=" mx-auto text-center">
        <div className="">
                <div className="h-80 " style={{background:`linear-gradient(transparent,black),url(${window.location.origin}/img/coverimage.jpeg) center center /cover no-repeat`}}>
                </div>
                <div className=" relative rounded-full ">
                        <img src="/img/profile.png" className='h-32 mx-auto rounded-full' alt="" />
                </div>
        </div>
        <CTAbuttons/>
    <h1 className="text-[clamp(2.3rem,2.7vw,3rem)]  font-bold my-4 ">
      {headline}
    </h1>
    <p className=" mb-8 text-[rgb(130,130,130)] " >
      At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
    </p>
    
  </div>
</div>
{/* <BlogContent/>
<div className="w-[70%] mx-auto overflow-hidden my-8" >
        <img src="/img/conimage.jpeg" className='bg-cover bg-center' alt="" />
</div>
<BlogContent/> */}
<div dangerouslySetInnerHTML={{__html:content}} ></div>
<CTAbuttons/>
</div>
    </>
  )
}
