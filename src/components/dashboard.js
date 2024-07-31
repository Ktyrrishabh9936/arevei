import React from 'react'
import Sidebar from './Dashboard/sideBar'
import Homepage from './pages/homepage'
import { Route ,Routes } from 'react-router-dom'
import ProjectSlotBooking from './pages/paymentAndInvoices'
import Subscription from './pages/SubscriptionPage'
import ProjectDashboard from './pages/projectsPage'
import CustomStepper from './ProjectPage/projectStatus'
export default function Dashboard() {
  return (
        <div className="flex min-h-screen bg-[rgba(3,3,3,1)] text-white text-sm">
      <Sidebar />
      <main className="w-4/5 ">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/paymentInvoices' element={<ProjectSlotBooking/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/trackProgess' element={<ProjectDashboard/>}/>
      </Routes>
      </main>
    </div>

  )
}
