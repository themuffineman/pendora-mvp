import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    // #FAFAFA
  return (
    <div className='w-max h-max p-2 rounded-lg flex gap-5 justify-between items-center bg-white fixed top-3 shadow-lg shadow-slate-200'>
      <Link href={'#home'}  className='text-[#606060] hover:text-black text-[12px] hover:bg-[#F5F5F5] rounded-[4px] font-medium tracking-wide p-2 '>Home</Link>
      <Link href={'#features'} className='text-[#606060] hover:text-black text-[12px] hover:bg-[#e4e4e4] rounded-[4px] font-medium tracking-wide p-2 '>Features</Link>
      {/* <Link href={'#pricing'} className='text-[#606060] hover:text-black text-[12px] hover:bg-[#F5F5F5] rounded-[4px] font-medium tracking-wide p-2 '>Pricing</Link> */}
      <div className='flex gap-2'>
        {/* <Link href={'/login'} className='px-5 p-2 text-xs text-black bg-white border border-[#e4e3e3] hover:bg-[#FAFAFA] rounded-md'>Login</Link> */}
        <Link href={'/dashboard'} className=' px-5 p-2 text-xs text-white bg-black rounded-md'>Try now for free</Link>
      </div>
    </div>
)
}

export default Navbar