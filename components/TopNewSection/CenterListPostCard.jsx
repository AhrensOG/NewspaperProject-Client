import Link from 'next/link'
import React from 'react'

const CenterListPostCard = ({ title, subTitle = false, image, category }) => {
  return (
    <div className='pb-2 pt-3 mr-1 ml-1'>
      <div className='hover:cursor-pointer'>
        <Link href={`/detalle/${title}`}>
          <img className='w-full md:h-[110px] lg:h-[160px]' src={image} alt='PostImage'/>
        </Link>
      </div>
      <div>
        <span className='text-[10px] font-mono tracking-[0.1rem]'>{category}</span>
      </div>
      <div>
      <Link href={`/detalle/${title}`}>
        <h1 className='text-[1.2rem] font-custom font-medium leading-7 break-normal tracking-[-0.08rem] hover:underline underline-offset-1 cursor-pointer lg:text-[1.4rem] lg:leading-8 md:text-[1rem] md:leading-6 md:tracking-[-0.06rem]'>{title}</h1>
      </Link>
        <span className='text-[10px] font-thin'>CHAINED</span>
      </div>
      {
        subTitle 
        ? <div className='pt-6'> <h4 className='text-sm font-light'>{ subTitle }</h4> </div>
        : <div></div>
      }
    </div>
  )
}

export default CenterListPostCard