import DashNav from '@/components/DashNav'
import DashPanel from '@/components/DashPanel'
import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center relative bg-[#f8f8f8]">
        <DashNav/>
        <DashPanel/>
    </div>
  )
}

export default page