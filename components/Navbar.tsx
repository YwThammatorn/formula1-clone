import Image from 'next/image'
import f1tvimg from '@/public/f1-tv-logo.png'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex flex-col max-w-full">
      {/* FIA navbar */}
      <div className='flex min-h-[44px] justify-center items-center text-[14px]'>
        <div className='flex w-[93vw] gap-[12px] justify-center items-center'>
          {/* Left */}
          <img className='w-[31px] h-[21px] mr-[4px]' src="https://www.environmentalreport.fia.com/wp-content/uploads/2023/03/Footer-logo.png" alt="fia_logo"/>

          {/* divider */}
          <div className='w-[1px] h-[16px] bg-[#303037]'></div>

          <button className='flex h-[32px] justify-center items-center ml-[4px] pt-[6px] pl-[16px] pb-[6px] border-none bg-transparent hover:bg-[#333]'>
            <div className='flex items-center gap-[4px]'>
              <p>Race Series</p>
              <ChevronDown className='w-[12px] h-[12px]'/>
            </div>
          </button>

          {/* Right */}
          <ul className='flex gap-[12px] ml-auto uppercase'>
            <li className='p-[6px] hover:border-b-[1px] cursor-pointer'>Authentics</li>
            <li className='p-[6px] hover:border-b-[1px] cursor-pointer'>Store</li>
            <li className='p-[6px] hover:border-b-[1px] cursor-pointer'>Tickets</li>
            <li className='p-[6px] hover:border-b-[1px] cursor-pointer'>Hospitality</li>
            <li className='p-[6px] hover:border-b-[1px] cursor-pointer'>Experiences</li>
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
      <div className='flex min-h-[72px] justify-center items-center'>

      </div>
    </div>
  )
}

export default Navbar