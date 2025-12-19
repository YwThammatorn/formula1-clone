'use client'
import Link from "next/link"

import { ChevronDown } from "lucide-react"

interface strprop{
    title: string,
    link: string
}

const Navbtn = ({title,link} : strprop) => {
  return (
    <div className='relative z-3 flex justify-center items-center gap-[5px] border-transparent border-b-[2px] min-h-[72px] hover:border-b-[2px] hover:border-white hover:cursor-pointer'>
        <Link href={link}>{title}</Link>
        {title == "F1 Members' Area" ? 
            <div></div>
            :
            <ChevronDown className="w-[12px] h-[12px]" />
        }
    </div>
  )
}

export default Navbtn