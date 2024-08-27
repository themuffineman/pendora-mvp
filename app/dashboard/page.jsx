"use client"
import DashNav from '@/components/DashNav'
import DashPanel from '@/components/DashPanel'
import DashTable from '@/components/DashTable'
import React, { useState } from 'react'

const page = () => {
  const h = {name: 'Acme Inc', url: 'acme.com', phone: '(233)-3456', emails: ['j@acme.com', 'p@acme.com', 'r@acme.com'], twitter: 'twitter.com', linkedin: 'linkedin.com', facebook: 'facebook.com', instagram: 'instagram.com', pageSpeed: '45s', tti: '3.4s', adPlatform: ['Meta Ads'], techStack: ['Wordpress']}
  const [leads, setLeads]= useState([h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h])
  return (
    <div className="flex min-h-screen flex-col items-center relative bg-[#f8f8f8]">
      <DashNav/>
      <div className="flex flex-col items-center px-16 gap-4 w-full">
        <DashPanel setLeads={setLeads} leads={leads}/>
        <DashTable leads={leads}/>
      </div>
    </div>
  )
}

export default page