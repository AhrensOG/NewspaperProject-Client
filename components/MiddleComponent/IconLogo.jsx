import React from 'react'
import LateralIcons from './LateralIcons'

const IconLogo = () => {
  return (
  <div className="flex flex-row justify-center">
    <div className='flex flex-row items-center justify-center md:basis-[20%] basis-[30%]'>
      <LateralIcons logo1={"/instagramLogo.png"} logo2={"/twitterLogo.png"}/>
    </div>
    <div className="lg:w-[240px] lg:h-[130px] md:w-[200px] md:h-[120px] w-[120px] h-[100px] md:basis-[60%] basis-[40%]">
      <img src="/Logo.png" alt="Logo png" className="w-full h-full" />
    </div>
    <div className="flex flex-row items-center justify-center md:basis-[20%] basis-[30%]">
      <LateralIcons logo1={"/youtubeLogo.png"} logo2={"/facebookLogo.png"}/>
    </div>
  </div>
  )
}

export default IconLogo