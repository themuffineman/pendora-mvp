import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-5xl font-light tracking-tighter text-black w-[40rem] leading-[3.5rem] text-center'>The lead finding tool for website makers</h1>
        <h2 className='text-xl font-medium tracking-tight text-[#b3b3b3] w-[40rem] text-center'>Extract more in depth data about a business's website. From page speed, tech stack, TTI speed, ad platforms used and much more coming soon .</h2>
        <div id="#features" className='flex gap-2'>
            <Link href={'/dashboard'} className=' px-5 p-2 text-lg text-white bg-black rounded-md'>Try it out now. No signup required.</Link>
            {/* <Link href={'/login'} className='px-5 p-2 text-lg text-black bg-white border border-[#e4e3e3] hover:bg-[#FAFAFA] rounded-md'>Learn More</Link> */}
        </div>
        <Image
            src={'/page-speed.png'}
            width={900}
            height={900}
            className='mt-10 rounded-md'
        />
    </div>
  )
}

export default Hero