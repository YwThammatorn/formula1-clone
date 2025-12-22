import { Facebook,Twitter,Instagram,Youtube } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

import Displaybtn from './Client/Displaybtn'
import { CSSProperties } from 'react'

const Footer = () => {

  const triangleStyle : CSSProperties ={
    clipPath: "polygon(0% 0%,100% 0%,0% 100%)" //triangle
  }

  return (
    <div className='w-full'>
        {/* our partners black */}
        <div className='flex flex-col gap-[48px] bg-[#1C1C25] p-[48px]'>
            <div className='flex'>
                <p className='text-[32px] font-f1-bold tracking-[1px] uppercase'>Our Partners</p>
                <button className='ml-auto border-none bg-transparent'>View all</button>
            </div>
            <div className='flex flex-wrap gap-[48px] justify-center items-center'>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lvmh.webp" alt="LVMH"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/pirelli.webp" alt="Pirelli"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/aramco.webp" alt="Aramco"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.webp" alt="AWS"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lenovo.webp" alt="Lenovo"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/dhl.webp" alt="DHL"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/qatar.webp" alt="Qatar Airways"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/msc.webp" alt="MSC"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/crypto.com.webp" alt="Crypto.com"/></div>
                <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/salesforce.webp" alt="Salesforce"/></div>
            </div>
        </div>

        {/* our partners dark gray */}
        <div className='flex flex-wrap bg-[#303037] gap-[48px] p-[48px] justify-center items-center'>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/louis%20vuitton.webp" alt="Louis Vuitton"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/TAGH_Shield_Monochrome_White-pw1.webp" alt="TAG Heuer"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Amex.webp" alt="American Express"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/santander.webp" alt="Santander"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/allwyn.webp" alt="Allwyn"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/globant.webp" alt="Globant"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/las%20vegas.webp" alt="Las Vegas Convention and Visitors Authority"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Paramount+.webp" alt="Paramount"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/barilla.webp" alt="Barilla"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/liqui-moly.webp" alt="Liqui Moly"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/nestle.webp" alt="Nestle"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/pwc.webp" alt="PwC"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/pepsico.webp" alt="PepsiCo"/></div>
        </div>

        {/* our partners gray */}
       <div className='flex flex-wrap bg-[#47464C] gap-[48px] p-[48px] justify-center items-center'>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/puma.webp" alt="Puma"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/TATA.webp" alt="TATA"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/aggreko.webp" alt="Aggreko"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/BBS.webp" alt="BBS"/></div>
            <div className='flex justify-center items-center rounded-[5px] hover:bg-[#333] hover:cursor-pointer'><img className="min-w-[56px] max-w-[80px] h-[45px] object-contain" src="https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/mcdonalds.webp" alt="McDonalds"/></div>
        </div>

        {/* footer */}
        <div className='grid gap-[32px] p-[48px]'>
            <div className='flex items-center'>
                <p className='text-[40px] font-f1-bold tracking-[1px] uppercase'>Download the official f1 app</p>
                <div className='flex gap-[8px] ml-auto'>
                    <img className='w-[121px] h-[41px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" alt="download_appstore"/>
                    <img className='w-[121px] h-[41px]' src="https://de.enervent.com/wp-content/uploads/2018/11/google-play-badge-logo-png-transparent.png" alt="download_appstore"/>
                </div>
            </div>
            <ul className='flex justify-between text-[17px]'>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>Schedule</li>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>Drivers</li>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>News</li>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>Teams</li>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>Fantasy & Gaming</li>
                <li className='pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>Cookie Preferences</li>
                <li className='flex items-center pb-[5px] bg-[linear-gradient(#e10600_0_0)] bg-bottom-left bg-[length:0%_5px] bg-no-repeat transition-[background-size] duration-300 cursor-pointer hover:bg-[length:100%_5px]'>More <ChevronDown className='w-[17px] h-[17px] pl-[3px]'/></li>
            </ul>
            <div className="flex gap-[24px]">
                <img className='relative w-[64px] h-[16px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/250px-F1.svg.png?20210221014215" alt='f1_logo'/>
                {/* stripes */}
                <div className="relative flex flex-col gap-[1px]">
                   <div className="absolute z-5 w-[7px] h-[7px] bg-[#15151E]"></div>
                   <div className="absolute z-5 left-[7px] w-[7px] h-[7px] bg-[#15151E]" style={triangleStyle}></div>
                   <div className="absolute z-5 top-[8px] w-[7px] h-[7px] bg-[#15151E]" style={triangleStyle}></div>
                   <div className="relative w-[87vw] h-[7px] bg-[#e10600]"></div>
                   <div className="relative w-[87vw] h-[7px] bg-[#e10600]"></div>
                </div>
            </div>

            {/* social media */}
            <div className="flex items-center pt-[16px]">
                <div className="flex gap-[24px]">
                    <Facebook className='w-[20px] h-[20px]'/>
                    <Twitter className='w-[20px] h-[20px]'/>
                    <Instagram className='w-[20px] h-[20px]'/>
                    <Youtube className='w-[20px] h-[20px]'/>
                </div>
                <div className='ml-auto'><Displaybtn /></div>
            </div>

            {/* warning */}
            <p className='text-[12px] text-[#aaaaaa]'>&copy; 2025-2026 Clone Website Inspired by Formula 1. Created for Educational Purpose Only</p>
        </div>
    </div>
  )
}

export default Footer