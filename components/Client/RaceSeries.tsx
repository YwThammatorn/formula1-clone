'use client'
import { ChevronDown,ChevronUp } from "lucide-react"
import { useRef } from "react"

const RaceSeries = () => {
  const selectRef = useRef<HTMLSpanElement>(null)
  const series = [
    'F1',
    'F2',
    'F3',
    'F1 Academy'  
  ]

  const handleShow = (e) => {
    e.preventDefault()
    if(selectRef.current) selectRef.current.hidden = !selectRef.current.hidden
  }

  return (
    <span className="relative">
        {/* button */}
        <button onClick={handleShow} className='flex h-[32px] justify-center items-center pt-[8px] pl-[16px] pb-[8px] border-none bg-transparent hover:bg-[#333]'>
            <div className='flex items-center gap-[6px]'>
                <p>Race Series</p>
                {
                    selectRef.current?.hidden ?
                    <ChevronDown className='w-[12px] h-[12px]'/>
                    :
                    <ChevronUp className='w-[12px] h-[12px]'/>
                }
            </div>
        </button>

        {/* select */}
        <span ref={selectRef} className="absolute mt-[10px]" hidden>
            <div className="relative z-10 bg-[#15151E] grid uppercase w-max text-[16px] font-[600] gap-[8px] p-[4px] text-white border-white border-[2px] rounded-[8px]">
                {series.map((content,index) => {
                    return (
                        content == 'F1' ?
                        <div key={index} className="w-full shrink-0 p-[8px] opacity-40">{content}<sup>&reg;</sup></div>
                        :
                        <a key={index} className="w-full shrink-0 p-[8px] hover:cursor-pointer hover:underline hover:bg-[#333]">{content}<sup>&trade;</sup></a>
                    )
                })}
            </div>
        </span>
        
    </span>
  )
}

export default RaceSeries