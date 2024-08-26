import React from 'react'

const DashPanel = () => {
  return (
    <div className='w-full p-24 pt-10 flex flex-col items-start gap-4'>
        <h2 className='text-3xl font-light tracking-tighter text-black'>Data Extractor</h2>
        <div className='flex w-full items-center justify-between'>
            <div className='flex gap-2'>
                <input placeholder='Service' className='w-[12rem] pl-2 h-10 rounded-md bg-neutral-200 active:ring active:ring-black ' type="text" />
                <input placeholder='Location' className='w-[12rem] pl-2 h-10 rounded-md bg-neutral-200 active:ring active:ring-black ' type="text" />
                <button className='bg-black text-white rounded-md p-2 px-4'>Extract</button>
            </div>
            <div className='flex gap-1 items-center bg-black p-2 px-4 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path></svg>
                <span className='text-[12px] text-white'>Export CSV</span>
            </div>
        </div>
    </div>
  )
}

export default DashPanel