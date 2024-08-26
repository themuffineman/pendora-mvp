import React from 'react'

const Features = () => {
    const features = ['Emails', 'Phone Number', 'Page Speed', 'Tech Stack', 'Ad platforms used by website', 'Website Perfomance improvements', 'Social media profiles']
  return (
    <div className='flex flex-col gap-[2rem] items-center mb-10 '>
        <h3 className="text-5xl font-light tracking-tighter text-black w-[40rem] leading-[3.5rem] text-center">Pricing</h3>
        <div className='flex gap-2 flex-col bg-white rounded-xl w-[25rem] p-4 h-[30rem] justify-between shadow-xl shadow-slate-200 ring-[3px] ring-neutral-300'>
            <h4 className='text-medium font-bold tracking-wide text-black text-left rounded-md bg-[#F6F6F6] w-max p-2 '>Starter</h4>
            <div className='flex items-end' >
                <span className='text-5xl text-black font-light tracking-tight'>$0</span>
                <span className='text-sm text-[#b3b3b3]'>/per month</span>
            </div>
            <div>
                {features.map((feature)=>(
                    <div className='flex gap-2 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                        <span className='text-sm font-semibold '>
                            {feature}
                        </span>
                    </div>
                ))}                
            </div>
            <div>
                <button className='bg-black rounded-md p-2 px-4 flex justify-center items-center text-white w-full'>Subscribe</button>
            </div>
        </div>
        
    </div>
)
}

export default Features