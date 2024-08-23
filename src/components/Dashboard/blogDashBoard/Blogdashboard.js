import React from 'react'
import { Outlet } from 'react-router-dom'
import BlogSidebar from './BlogsideBar'

export default function BlogDashboard() {
  return (
        <div className="flex min-h-screen bg-[rgba(3,3,3,1)] text-white text-sm">
      <BlogSidebar />
      <main className="w-4/5 ">
      <Outlet/>
      </main>
    </div>

  )
}
