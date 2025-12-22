'use client'
import { ChevronLeft,ChevronRight } from "lucide-react"

const DriverAction = () => {
  return (
    <div className="flex items-center">
        <p className='mr-[16px] text-[17px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>View all</p>
        <button className="mr-[10px] bg-transparent border-none w-fit p-[4px] hover:bg-[#333]"><ChevronLeft size={26} /></button>
        <button className="bg-transparent border-none w-fit p-[4px] hover:bg-[#333]"><ChevronRight size={26} /></button>
    </div>
  )
}

export default DriverAction