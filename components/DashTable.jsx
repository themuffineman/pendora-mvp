import React from 'react'
import Lead from './Lead';
import { ScrollArea } from "@/components/ui/scroll-area"


function DashTable({leads}) {
  return (
    <div className="overflow-y-auto grid grid-cols-1 grid-flow-row gap-4 items-center w-full p-3 rounded-md border border-neutral-200 h-[22rem]">
      {leads.map((lead)=>(
        <Lead lead={lead}/>
      ))}
    </div>
  );
}

export default DashTable