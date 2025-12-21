import { ExternalLink } from "lucide-react"

import DriverCard from "@/components/Client/DriverCard"

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
      <div className="flex flex-col w-full gap-[32px] pl-[48px] pr-[48px]">
        <p className="text-[32px] font-f1-bold tracking-[1px] uppercase">Drivers</p>
        <div className="flex gap-[16px]">
          {teams.slice(0,3).map((content,index) => {
              return (
                data.filter(prev => prev.team_name == content).map((d,i) => {
                  return (
                      <DriverCard fname={d.first_name} lname={d.last_name} team={content} />
                  )
                })
          )})}
        </div>
        {/* divider */}
        <div className="bg-white h-[1px] pl-[48px] pr-[48px]"></div>
      </div>
    </div>
  );
}
