import React, { useEffect } from 'react'
import Header from '../Dashboard/header'
import UserProfile from '../HomePage/userProfile'
import ServiceCards from '../HomePage/ServiceCards'
import authService from '../../Redux/RequestServices/authService';
import { useDispatch, useSelector } from 'react-redux';
import BlogHeader from '../Dashboard/blogDashBoard/blogheader';
export default function BlogHome() {
  const dispatch= useDispatch();
  const {auth} = useSelector(store=>store);
  const user = auth.user;
  useEffect(()=>{
            dispatch(authService.getUser())
},[user?.jwt])
  return (
    <>
      <BlogHeader />

      <div className="flex justify-center flex-col min-h-[calc(100vh-64px)]">
        <section className=" space-y-10 text-center my-8 py-8">
      <h1 className="text-[clamp(2.3rem,2.7vw,3rem)] font-bold">Welcome <span className="text-[rgba(155,225,63)] capitalize">{user?.firstName}</span></h1>

          <p className="text-lg text-[rgb(130,130,130)]  max-w-xl mx-auto">At Arevei, we Build Brand Identity that help you to save and create unique identity in the market.</p>
        </section>
        <UserProfile />
        <ServiceCards />
        </div>
    </>
  )
}
