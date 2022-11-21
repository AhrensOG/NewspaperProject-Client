import Link from "next/link"

const ListPostCard = ({ title, subTitle = false, image, tag, id }) => {
  return (
    <div className='pb-1 pt-3 flex '>
      <div className='pt-1 pb-1 basis-[70%]'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h1 className='text-[.7rem] font-custom font-semibold leading-[.95rem] break-normal tracking-tighter hover:underline underline-offset-1 cursor-pointer lg:text-[1rem] lg:leading-5'>{title}</h1>
        </Link>
        <span className='text-[10px] font-thin'>CHAINED</span>
      </div>
      <div className='basis-[30%] hover:cursor-pointer'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className='sm:h-[70%] md:h-full pb-4 pl-4' src={image} alt='PostImage' width='100%'/>
        </Link>
      </div>
      {
        subTitle 
        ? <div className='pt-6'> <h4 className='text-sm font-light'>{ subTitle }</h4> </div>
        : <div></div>
      }
    </div>
  )
}

export default ListPostCard