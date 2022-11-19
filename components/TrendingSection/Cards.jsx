export default function Card ({title, image, category = "Other" }) {

  return (
    <div  className="bg-slate-50 flex flex-row">
      <div className="w-[130px]">
        <span>{category}</span>
        <h3 className="py-4 ">{title}</h3>
      </div>
      <div>
        <img className="w-[100px] h-[100px] " src={image} alt="Imagen on trending"/>
      </div>
    </div>
  )

}