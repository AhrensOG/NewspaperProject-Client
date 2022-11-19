const Tag = ({ title = "Selecciones de hoy"}) => {
  return (
    <div className="w-full">
        <h4 className="p-2">
          <span className="p-1 pr-2 pl-2 bg-black text-white">{title}</span>
        </h4>
    </div>
  )
}

export default Tag;