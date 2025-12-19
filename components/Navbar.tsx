import Image from 'next/image'

import f1tvimg from '@/public/f1-tv-logo.png'

import Navbtn from './Client/Navbtn'
import RaceSeries from './Client/RaceSeries'

const Navbar = () => {
  return (
    <>
      {/* FIA navbar */}
      <div className='flex min-h-[44px] justify-center items-center text-[14px]'>
        <div className='flex w-[93vw] gap-[12px] justify-center items-center'>
          {/* Left */}
          <div className='flex justify-center items-center gap-[16px]'>
            <img className='w-[31px] h-[21px]' src="https://www.environmentalreport.fia.com/wp-content/uploads/2023/03/Footer-logo.png" alt="fia_logo"/>

            {/* divider */}
            <div className='w-[1px] h-[16px] bg-[#303037]'></div>

            <span className='relative z-2'><RaceSeries /></span>
          </div>

          {/* Right */}
          <ul className='flex gap-[12px] ml-auto uppercase'>
            <li className='p-[6px] hover:border-b-[1px] hover:cursor-pointer'>Authentics</li>
            <li className='p-[6px] hover:border-b-[1px] hover:cursor-pointer'>Store</li>
            <li className='p-[6px] hover:border-b-[1px] hover:cursor-pointer'>Tickets</li>
            <li className='p-[6px] hover:border-b-[1px] hover:cursor-pointer'>Hospitality</li>
            <li className='p-[6px] hover:border-b-[1px] hover:cursor-pointer'>Experiences</li>
          </ul>

          {/* divider */}
          <div className='w-[1px] h-[16px] bg-[#303037]'></div>

          <Image className='w-[100px] h-[16px]' src={f1tvimg} alt='f1_tv_logo' />

          {/* divider */}
          <div className='w-[1px] h-[16px] bg-[#303037]'></div>

          {/* Action */}
          <div className='flex gap-[8px]'>
            <button className='border-none bg-black hover:bg-[#333]'>Sign In</button>
            <button className='border-none hover:bg-[#ca0500]'>Subscribe</button>
          </div>
        </div>
          
      </div>

      {/* F1 navbar */}
      <div className='sticky top-0 left-0 bg-[#15151E] flex min-h-[72px] items-center z-1'>
        <div className='relative w-full bg-[repeating-linear-gradient(-45deg,#15151E,_#15151E_20px,#333_20px,_#333_50px,#15151E_50px,#15151E_55px,_#333_55px,#333_85px,#15151E_85px,#15151E_95px)]'>
          <div className='absolute z-2 top-[0px] left-[0px] min-h-[72px] w-full bg-linear-to-t opacity-65 from-[#15151E] to-[#333]'></div>
          <div className='flex pl-[48px] items-center min-h-[72px] gap-[36px]'>
            <img className='relative z-3 w-[96px] h-[24px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/250px-F1.svg.png?20210221014215" alt='f1_logo'/>
            <div className="flex text-[16px] font-f1 font-[500] tracking-[1px] gap-[36px]">
              <Navbtn title='Schedule' link='/'/>
              <Navbtn title='Results' link='/'/>
              <Navbtn title='News' link='/'/>
              <Navbtn title='Drivers' link='/'/>
              <Navbtn title='Teams' link='/'/>
              <Navbtn title='Fantasy & Gaming' link='/'/>
              <Navbtn title="F1 Members' Area" link='/'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar