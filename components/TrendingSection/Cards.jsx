export default function Card ({title, image, category = "Other", size = 80, boolean}) {
  const titleArray = title.split(' ')
  const viewTitle = titleArray.splice(0, 8).join(' ')
  let flag = boolean? "bg-slate-50 w-full flex flex-row-reverse" : "bg-slate-50 w-full flex "
  return (
    <div  className={flag}>
      <div className="basis-[65%]">
        <span className="text-[10px] font-mono tracking-[0.1rem]">{category}</span>
        <h3 className="break-normal font-custom font-semibold hover:underline underline-offset-1 cursor-pointer lg:text-base md:text-xs" >{`${viewTitle}...`}</h3>
      </div>
      <div className={`basis-[35%] h-[${size}px]`}>
        <img className={`p-2 w-full h-full lg:h-[${size}px] cursor-pointer`} src={image} alt="Imagen on trending"/>
      </div>
    </div>
  )

}