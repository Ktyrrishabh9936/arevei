import React from 'react'
import Sidebar from './sideBar'
import Header from './header'
import UserProfile from './userProfile'
import ServiceCards from './ServiceCards'
export default function Dashboard() {
  return (
        <div className="flex min-h-screen bg-[rgba(3,3,3,1)] text-white">
      <Sidebar />
      <main className="w-4/5 ">
        <Header />
        <section className=" space-y-10 text-center my-14 py-14 ">
      <h1 className="text-6xl font-bold">Welcome <span className="text-[rgba(155,225,63)]">Shiva!</span></h1>

          <p className="text-xl text-[rgba(130,130,130,1)]  max-w-xl mx-auto">At Arevei, we Build Brand Identity that help you to save and create unique identity in the market.</p>
        </section>
        <UserProfile />
        <ServiceCards />
      </main>
    </div>

  )
}
