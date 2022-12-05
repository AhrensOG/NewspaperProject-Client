import Link from "next/link"

export default function DetailCard ({title, image, category = "Other", tag, id}) {

  return (
    <div  className="bg-slate-50 w-full flex flex-row-reverse" >
      <div className="basis-[65%]">
        <span className="text-[10px] font-mono tracking-[0.1rem]">{category}</span>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h3 className="font-custom font-semibold hover:underline underline-offset-1 cursor-pointer lg:text-xl lg:leading-5 sm:text-base sm:leading-4 text-base break-all" >{title}</h3>
        </Link>
      </div>
      <div className={`basis-[35%]`}>
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className={`p-2 w-full lg:h-[130px] md:h-[110px] sm:h-[120px] h-full cursor-pointer`} src={image} alt="Imagen on trending"/>
        </Link>
      </div>
    </div>
  )

}