import Link from "next/link"

export default function Card ({title, image, category = "Other", size = 80, boolean, tag, id}) {
  const titleArray = title.split(' ')
  const viewTitle = titleArray.splice(0, 8).join(' ')
  let flag = boolean? "bg-slate-50 w-full flex flex-row-reverse" : "bg-slate-50 w-full flex flex-row-reverse sm:flex-row items-center gap-4"
  return (
    <div  className={flag}>
      <div className="basis-[65%]">
        <span className="text-[10px] font-mono tracking-[0.1rem]">{category}</span>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h3 className="break-normal font-custom font-semibold hover:underline underline-offset-1 cursor-pointer lg:text-base md:text-sm sm:text-xs text-2xl" >{`${viewTitle}...`}</h3>
        </Link>
      </div>
      <div className={`basis-[35%] h-[120px] sm:h-[80px]`}>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className={`w-full h-full lg:h-[${size}px] cursor-pointer`} src={image} alt="Imagen on trending"/>
        </Link>
      </div>
    </div>
  )

}