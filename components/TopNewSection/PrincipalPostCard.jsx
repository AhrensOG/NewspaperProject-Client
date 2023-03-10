import Link from 'next/link';
import PrincipalPostCarousel from '../Carrousel/PrincipalPostCarousel';

const PrincipalPostCard = ({ title, subTitle = false, image, category, tag, id }) => {
  return (
    <div className='pb-1 pt-3 mr-1'>
      <div className='pb-1 hover:cursor-pointer'>
        <PrincipalPostCarousel images={image} id={id} tag={tag}/>
      </div>
      <div>
        <span className='text-[15px] text-slate-600 font-mono tracking-[0.1rem]'>{category}</span>
      </div>
      <div>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h1 className='font-bold font-custom break-normal pt-2 pb-2 hover:underline underline-offset-1 cursor-pointer lg:text-[3.3rem] lg:leading-[3.3rem] md:text-[2.5rem] md:leading-[2.5rem] md:tracking-[-0.18rem] sm:text-[2rem] sm:leading-[2rem] sm:tracking-[-0.10rem] text-2xl leading-6 tracking-[-0.06rem]'>{title}</h1>
        </Link>
        <span className='text-[10px] font-thin'>CHAINED</span>
      </div>
      {
        subTitle 
        ? <div className='pt-2'> <h4 className='text-sm font-light lg:text-xl break-all'>{ subTitle }</h4> </div>
        : <div></div>
      }
    </div>
  )
}

export default PrincipalPostCard;