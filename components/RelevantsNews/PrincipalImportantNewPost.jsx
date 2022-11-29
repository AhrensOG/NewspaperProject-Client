import Link from 'next/link'
import React from 'react'
import PrincipalImportantSectionCarousel from '../Carrousel/PrincipalImportantSectionCarousel'

const PrincipalImportantNewPost = ({ title, image, description, category = 'Policial', tag, id }) => {
  return (
    <div className=''>
      <div>
        <PrincipalImportantSectionCarousel images={image} id={id} tag={tag}/>
      </div>
      <div>
        <span className='text-[15px] text-slate-600 font-mono tracking-[0.1rem]'>{category}</span>
      </div>
      <div className='w-[70%]'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h1 className='pt-2 font-bold font-custom break-normal tracking-[-0.18rem] pb-2 hover:underline underline-offset-1 cursor-pointer lg:text-[3.5rem] lg:leading-[4rem] md:text-[2.5rem] md:leading-[2.5rem]'>{title}</h1>
        </Link>
      </div>
      <div className='pb-4'>
        <span>HANS LORD</span>
      </div>
      <div>
        <p className='font-sans lg:text-[1.425rem] md:text-[1rem]'>{description}</p>
      </div>
    </div>
  )
}

export default PrincipalImportantNewPost