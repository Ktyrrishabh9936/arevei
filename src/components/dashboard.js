import React from 'react'
import Sidebar from './Dashboard/sideBar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
        <div className="flex min-h-screen bg-[rgba(3,3,3,1)] text-white text-sm">
      <Sidebar />
      <main className="w-4/5 ">
      <Outlet/>
      </main>
    </div>

  )
}
