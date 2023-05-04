import Link from "next/link"

const ListPostCard = ({ title, subTitle = false, image, tag, id }) => {
  return (
    <div className='flex flex-row'>
      <div className='py-1 basis-[70%]'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h1 className='text-2xl leading-7 sm:text-[0.845rem] sm:leading-4 md:text-sm lg:text-base lg:leading-5 font-custom font-semibold break-normal tracking-tighter hover:underline underline-offset-1 cursor-pointer'>{title}</h1>
        </Link>
        <span className='text-[10px] font-thin'>OPINION</span>
      </div>
      <div className='basis-[30%] hover:cursor-pointer'>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className='h-full sm:h-[70%] md:h-full pb-4 pl-4' src={image} alt='PostImage' width='100%'/>
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