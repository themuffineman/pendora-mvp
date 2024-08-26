import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-5xl font-light tracking-tighter text-black w-[40rem] leading-[3.5rem] text-center'>The lead generation tool for website developers</h1>
        <h2 className='text-xl font-medium tracking-tight text-[#b3b3b3] w-[40rem] text-center'>Introduce a modern abstraction to any Kubernetes cluster, and enable 
        engineers to work efficiently with their microservices with rich tooling.</h2>
        <div className='flex gap-2'>
            <Link href={'/sign-up'} className=' px-5 p-2 text-lg text-white bg-black rounded-md'>Get Started</Link>
            <Link href={'/login'} className='px-5 p-2 text-lg text-black bg-white border border-[#e4e3e3] hover:bg-[#FAFAFA] rounded-md'>Learn More</Link>
        </div>
        <Image
            src={'/hero-image.avif'}
            width={900}
            height={900}
            className='mt-10'
        />
    </div>
  )
}

export default Hero