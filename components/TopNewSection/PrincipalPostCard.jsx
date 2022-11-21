import Image from 'next/image'
import Link from 'next/link';

const PrincipalPostCard = ({ title, subTitle = false, image, category, tag, id }) => {
  return (
    <div className='pb-1 pt-3 mr-1'>
      <div className='pb-1 hover:cursor-pointer'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className='w-full h-[250px] lg:h-[300px]' src={image} alt='PostImage'/>
        </Link>
      </div>
      <div>
        <span className='text-[15px] text-slate-600 font-mono tracking-[0.1rem]'>{category}</span>
      </div>
      <div>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h1 className='text-[3rem] font-bold font-custom leading-[3rem] break-normal tracking-[-0.18rem] pt-2 pb-2 hover:underline underline-offset-1 cursor-pointer lg:text-[3.3rem] lg:leading-[3.3rem] md:text-[2.5rem] md:leading-[2.5rem]'>{title}</h1>
        </Link>
        <span className='text-[10px] font-thin'>CHAINED</span>
      </div>
      {
        subTitle 
        ? <div className='pt-2'> <h4 className='text-sm font-light lg:text-xl'>{ subTitle }</h4> </div>
        : <div></div>
      }
    </div>
  )
}

export default PrincipalPostCard;