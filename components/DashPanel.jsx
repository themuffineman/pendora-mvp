"use client"
import React, { useState } from 'react'
const DashPanel = ({setLeads, leads}) => {
  const [status, setStatus] = useState(false)
  const [statusUpdate, setStatusUpdate]=useState('')
  const [service, setService] = useState('')
  const [location, setLocation] = useState('')
  const [wsId, setWsId]=useState('')
  async function fetchLeads(e){
    try {
      e.preventDefault()
      setStatus(true)
      const socket = new WebSocket('wss://prometheus-kynx.onrender.com/api/google-maps');
      
      socket.addEventListener('open', () => {
        setStatusUpdate('Connection Established');
        setTimeout(setStatusUpdate('Scraping the web...'), 2000);        
      });
      
      socket.addEventListener('message', event => {
        try {
          const message = JSON.parse(event.data);
          handleMessage(message);
        } catch (err) {
          console.error('Error parsing WebSocket message:', err);
        }
      });

      socket.addEventListener('error', (error) => {
        console.error('Connection error:', error);
        setStatusUpdate(`Failed to connect to Scraper`);
        setTimeout(()=>{
          setStatus(false)
        },3000)
        socket.close()
      });

      socket.addEventListener('close', ()=>{
        setStatusUpdate('Connection to scraper closed')
        setStatus(false)
      })
      
    }catch (error) {
      console.error(error)
    }
  }
  async function handleMessage(message){
    if(message.type === 'lead'){
      setStatusUpdate(message.data)
      setLeads((prev)=> {
        const copyPrev = prev? JSON.parse(JSON.stringify(prev)) : []
        const lead = JSON.parse(message.data)
        copyPrev.push(lead)
        return copyPrev
      })
    }else if(message.type === 'id'){
      setWsId(message.data)
      console.log('fetching')
      await fetch(`https://prometheus-kynx.onrender.com/api/google-maps`,{
        method: 'POST',
        body: JSON.stringify({
          service,
          location,
          pagination: 0,
          clientId: wsId
        }),
        headers: {
          'x-api-key': 12345
        }
      })
      setStatus(false)
    }else{
      setStatusUpdate('Error parsing lead data')
    }
  }
  function downloadCSV(data) {
    // Convert the data to a CSV format
    const csv = convertToCSV(data);
    
    // Create a Blob from the CSV string
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href attribute to a URL representing the Blob object
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'leadList.csv');
    
    // Append the link to the document body and trigger a click to initiate the download
    document.body.appendChild(link);
    link.click();
    
    // Remove the link element after the download is initiated
    document.body.removeChild(link);
  }
  function convertToCSV(data) {
    // Extract headers from the data keys
    const headers = Object.keys(data[0]);
    
    // Create the CSV string, starting with the headers
    let csvContent = headers.join(',') + '\n';
    
    // Loop through each object and create a CSV row
    data.forEach(obj => {
        const row = headers.map(header => {
            const value = obj[header];
            // If the value is an array, join it with a semicolon, otherwise, just return the value
            return Array.isArray(value) ? value.join(';') : value;
        });
        csvContent += row.join(',') + '\n';
    });
    
    return csvContent;
  }
  function cancelRequest(){
    fetch(`https://prometheus-kynx.onrender.com/api/cancel-process?clientId=${wsId}`)
    setStatusUpdate('Aborting...')
  }
  return (
    <div className='w-full pt-10 flex flex-col items-start gap-4'>
        <h2 className='text-3xl font-light tracking-tighter text-black'>Data Extractor</h2>
        <div className='flex w-full items-center justify-between'>
            <form onSubmit={(e)=> fetchLeads(e)} className='flex gap-2'>
                <input placeholder='Service' onChange={(e)=>{setService(e.target.value)}} className='w-[12rem] pl-2 h-10 rounded-md bg-neutral-200 active:ring active:ring-black ' type="text" required="true" />
                <input placeholder='Location' onChange={(e)=> {setLocation(e.target.value)}} className='w-[12rem] pl-2 h-10 rounded-md bg-neutral-200 active:ring active:ring-black ' type="search" required="true" />
                <button type="submit" className='bg-black text-white rounded-md p-2 px-4'>Extract</button>
            </form>
            <div className='flex gap-1 items-center bg-black p-2 px-4 rounded-md hover:cursor-pointer' onClick={()=>{ downloadCSV(leads)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path></svg>
                <span className='text-[12px] text-white'>Export CSV</span>
            </div>
        </div>
        <section className={` ${status? 'flex' : 'hidden'} gap-5 items-center rounded-md bg-neutral-950 p-4 ring-1 ring-neutral-900 fixed bottom-3 left-1/2 -translate-x-1/2 w-max`}>
          <div className="size-5 rounded-full border-2 border-neutral-700 border-t-neutral-400 animate-spin"/>
          <p className="text-white flex items-center justify-center">
            {statusUpdate}
          </p>
          <button onClick={ ()=> cancelRequest() } className=" rounded-md p-3 bg-neutral-950 ring-1 ring-neutral-900 hover:scale-[1px] transition hover:bg-red-600 text-white ">Cancel</button>
        </section>
    </div>
  )
}

export default DashPanel