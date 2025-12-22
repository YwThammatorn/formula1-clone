import { ExternalLink } from "lucide-react"

import DriverCard from "@/components/Client/DriverCard"
import DriverAction from "@/components/Client/DriverAction"
import { CSSProperties } from "react"

interface Driver{
  driver_number: number,
  meeting_key: number,
  session_key: number,
  first_name: string,
  last_name: string,
  country_code: string,
  team_name: string
}

export default async function Home() {
  const response = await fetch(
    'https://api.openf1.org/v1/drivers?session_key=latest'
  ).then((response) => response.json())
  const data : Driver[] = await response
  const teams = [...new Set(data.map(prev => prev.team_name))]

  const tSideRightStyle : CSSProperties = {
    clipPath: "polygon(100% 0%,0% 100%,100% 100%)" //triangle
  }

  const tSideLeftStyle : CSSProperties = {
    clipPath: "polygon(0% 0%,100% 0%,0% 100%)" //triangle
  }

  const tUpStyle : CSSProperties = {
    clipPath: "polygon(50% 0%,0% 100%,100% 100%)" //triangle
  }

  const tDownStyle : CSSProperties = {
    clipPath: "polygon(0% 0%,100% 0%,50% 100%)" //triangle
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* ads banner */}
      <img className="pt-[32px] pb-[32px]" src="https://tpc.googlesyndication.com/simgad/8171615571012266444" alt="ads_banner"/>
      
      {/* news */}
      <div>

      </div>

      {/* external links */}
      <div className="flex w-full font-f1 font-[899] text-black bg-black gap-[16px] pt-[32px] pb-[32px] pl-[48px] pr-[48px]">
        <div className="flex items-center w-[344px] h-[56px] p-[16px] uppercase bg-[#c1c4f4] rounded-[5px]">{new Date().getFullYear() + 1} schedule <ExternalLink className="ml-auto"/></div>
        <div className="flex items-center w-[344px] h-[56px] p-[16px] uppercase bg-[#c1c4f4] rounded-[5px]">{new Date().getFullYear()} standings <ExternalLink className="ml-auto"/></div>
        <div className="flex items-center w-[344px] h-[56px] p-[16px] uppercase bg-[#c1c4f4] rounded-[5px]">Latest news <ExternalLink className="ml-auto"/></div>
        <div className="flex items-center w-[344px] h-[56px] p-[16px] uppercase bg-[#c1c4f4] rounded-[5px]">Latest video <ExternalLink className="ml-auto"/></div>
      </div>

      {/* featured video */}
      <div>

      </div>

      {/* editor's picks */}
      <div>

      </div>
      
      {/* ads banner */}
      <div className="flex bg-black w-full justify-center">
        <img className="pt-[32px] pb-[32px]" src="https://tpc.googlesyndication.com/simgad/8171615571012266444" alt="ads_banner"/>
      </div>

      {/* drivers */}
      <div className="flex flex-col w-full gap-[32px] pt-[32px] pl-[48px] pr-[48px]">
        <div className="flex justify-between">
          {/* text */}
           <p className="text-[32px] font-f1-bold tracking-[1px] uppercase">Drivers</p>
           {/* action */}
           <DriverAction />
        </div>
       
        <div className="flex gap-[16px] overflow-hidden">
          {teams.map((content,index) => {
              return (
                data.filter(prev => prev.team_name == content).map((d,i) => {
                  return (
                      <DriverCard key={i} fname={d.first_name} lname={d.last_name} team={content} />
                  )
                })
          )})}
        </div>
        {/* divider */}
        <div className="bg-white h-[1px] pl-[48px] pr-[48px]"></div>

        {/* stripes */}
        {/* stripes */}
        <div className="relative flex flex-col gap-[1px]">
            <div className="absolute z-4 top-[12px] right-0 w-[33px] h-[11px] bg-[#15151E]"></div>
            <div className="absolute z-4 right-0 w-[22px] h-[11px] bg-[#15151E]"></div>
            <div className="absolute z-4 right-[22px] w-[11px] h-[11px] bg-[#15151E]" style={tSideRightStyle}></div>
            <div className="absolute z-4 top-[12px] right-[33px] w-[11px] h-[11px] bg-[#15151E]" style={tSideRightStyle}></div>
            
            <div className="absolute z-5 right-[20.5px] w-[11px] h-[11px] bg-[#e10600]" style={tSideRightStyle}></div>
            <div className="absolute z-5 right-[6px] w-[11px] h-[11px] bg-[#e10600]" style={tSideLeftStyle}></div>
            <div className="absolute z-5 top-[12px] right-[31.5px] w-[11px] h-[11px] bg-[#e10600]" style={tSideRightStyle}></div>
            <div className="absolute z-5 top-[12px] right-[16px] w-[11px] h-[11px] bg-[#e10600]" style={tSideLeftStyle}></div>
            
            <div className="absolute z-6 right-[17px] w-[3.5px] h-[11px] bg-[#e10600]"></div>
            <div className="absolute z-6 top-[12px] right-[26.5px] w-[5.5px] h-[11px] bg-[#e10600]"></div>
            <div className="absolute z-6 top-[10.5px] right-[18.25px] w-[14.5px] h-[2px] bg-[#e10600]"></div>

            <div className="relative w-full h-[11px] bg-[#e10600]"></div>
            <div className="relative w-full h-[11px] bg-[#e10600]"></div>
        </div>
      </div>
    </div>
  );
}
