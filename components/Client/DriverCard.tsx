'use client'
import t from "@/datas/teams.json"
import d from "@/datas/drivers.json"
import { CSSProperties, useState } from "react"
import { Circle } from "lucide-react"

interface prop{
  fname: string,
  lname: string,
  team: string
}

const DriverCard = ({fname,lname,team} : prop) => {
  const [imgUrl,setImgUrl] = useState(() => {
    for(let driver of d.drivers){
      if(driver.name == (fname+" "+lname)) return driver.imgUrl
    }
    return "error"
  })

  const [bgColor,setBgColor] = useState(() => {
    for(let team_obj of t.teams){
      if(team_obj.name == team) return team_obj.bgcolor
    }
    return "error"
  })

  const hex2rgb = (hex : string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
     
    return { r, g, b };
  }

  const imgStyle : CSSProperties = {
    clipPath:"rect(0px 145px 250px 0px)"
  } 

  const textStyle : CSSProperties = {
    backgroundImage: "linear-gradient(to bottom,transparent 0%,"+bgColor+" 100%)"
  }

  return (
    <div className="relative aspect-[0.6666] flex flex-col w-[181px] items-center rounded-[8px]" style={{backgroundColor:bgColor}}>
        <img className="absolute top-[20px] z-0 w-[84%] transition duration-300 hover:scale-[1.05]" src={imgUrl} alt={fname+lname+"_img"} style={imgStyle}/>
        <div className="absolute flex flex-col items-center z-1 bottom-[0px] pt-[16px] pb-[16px] rounded-[8px] w-full" style={textStyle}>
           <p className="font-f1 font-extralight">{fname}</p>
            <p className="font-f1 font-[900]">{lname}</p>
        </div>
    </div>
  )
}

export default DriverCard