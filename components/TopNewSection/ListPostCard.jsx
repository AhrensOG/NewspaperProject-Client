const ListPostCard = ({ title, subTitle = false, image }) => {
  return (
    <div className='pb-1 pt-3 flex '>
      <div className='pt-1 pb-1 basis-[70%]'>
        <h1 className='text-[.7rem] font-custom font-semibold leading-[.95rem] break-normal tracking-tighter hover:underline underline-offset-1 cursor-pointer lg:text-[1rem] lg:leading-5'>{title}</h1>
        <span className='text-[10px] font-thin'>CHAINED</span>
      </div>
      <div className='basis-[30%] hover:cursor-pointer'>
        <img className='sm:h-[70%] md:h-full pb-4 pl-4' src={image} alt='PostImage' width='100%'/>
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