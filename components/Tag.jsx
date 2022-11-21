const Tag = ({ title = "Selecciones de hoy"}) => {
  return (
    <div className="w-full">
        <h4 className="pt-2 pb-2">
          <span className=" tracking-tighter text-base font-roboto uppercase pb-2 pt-2 pr-2 pl-2 bg-black text-white">{title}</span>
        </h4>
    </div>
  )
}

export default Tag;