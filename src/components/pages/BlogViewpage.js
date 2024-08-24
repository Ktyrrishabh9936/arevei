import React, { useEffect, useState } from 'react'
import BlogNavigation from '../BlogViewPage/Navigation'
import CTAbuttons from '../BlogViewPage/CTAbuttons'
import BlogContent from '../BlogViewPage/BlogContent'
import CreateAccount from './CreateAccountOverlay';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import blogService from '../../Redux/RequestServices/blogService';

export default function Blogpage() {
  const [createAccOpen, setcreateAccOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const {blogReducer} = useSelector(store=>store);
  const Blogdata = blogReducer.blog;
  const handleOpenAcc = () => setcreateAccOpen(true);
  const handleCloseAcc = () => setcreateAccOpen(false);

  useEffect(()=>{
    setTimeout(()=>{
      handleOpenAcc();
    },7000);
    return()=>{
      clearTimeout();
    }
  },[])
  useEffect(()=>{
    dispatch(blogService.findBlogs(params.id))
},[params.id])
  return (
    <>
    <CreateAccount open={createAccOpen} handleClose={handleCloseAcc}/>
    
        <div className=' bg-[rgb(3,3,3)]'>
    <BlogNavigation />
    <div className=" max-w-4xl mx-auto py-8">
      <div className=" text-white  ">
  <div className=" mx-auto text-center">
        <div className="">
                <div className="h-80 " style={{background:`linear-gradient(transparent,black),url(${(Blogdata?.coverImage||`${window.location.origin}/img/coverimage.jpeg`)}) center center /cover no-repeat`}}>
                        {/* <img src="/img/coverimage.jpeg" className=' bg-cover bg-center' alt="" /> */}
                </div>
                <div className=" relative rounded-full ">
                        <img src="/img/profile.png" className='h-32 mx-auto rounded-full' alt="" />
                </div>
        </div>
        <CTAbuttons/>
    <h1 className="text-[clamp(2.3rem,2.7vw,3rem)]  font-bold my-4 ">
      {blogReducer.blog?.headline}
    </h1>
    <p className=" mb-8 text-[rgb(130,130,130)] " >
    {blogReducer.blog?.subHeadline}
    </p>
    
  </div>
</div>
{/* <BlogContent/>
<div className="w-[70%] mx-auto overflow-hidden my-8" >
        <img src="/img/conimage.jpeg" className='bg-cover bg-center' alt="" />
</div>
<BlogContent/>
<CTAbuttons/> */}
<div className="w-[90%] mx-auto text-white" dangerouslySetInnerHTML={{__html:blogReducer.blog?.content}}>
</div>
</div>

<div className=" text-white w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto py-16">
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
<footer className="bg-black text-[rgb(130,130,130)]  py-8">
  <div className="max-w-6xl mx-auto flex justify-between">
  <div className=' space-y-8 flex flex-col justify-center items-center '>
    <div className="w-max">
      <img src="/img/Arevei-Mixlogo.png" alt="" />
    </div>
    <ul className=' list-none flex gap-x-7'>
      <li className=''><FaFacebook fontSize={30}/></li>
      <li className=''><FaLinkedin fontSize={30}/></li>
      <li className=''><FaYoutube fontSize={30}/></li>
      <li className=''><FaInstagram fontSize={30}/></li>
    </ul>
  </div>
  <div className="  flex gap-x-10">
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
  </div>
  <div className="mt-8 text-center text-[rgb(23,23,23)]">
    <p>© 2024 Shakyawar Mediatech LLP. All Rights Reserved.</p>
  </div>
</footer>
    </div>
    </>
  )
}
