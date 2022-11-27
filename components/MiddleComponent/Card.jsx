export default function Card ({buy, sell, variation, name}) {

  return(
    <div className="bg-slate-700 rounded-md">
      <div>
        <h2 className=" font-roboto flex justify-center text-sky-400">
          {name}
        </h2>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <p className=" flex justify-center text-white font-roboto">COMPRA</p>
          <h3 className=" flex justify-center text-white">{buy}</h3>
        </div>
        <div className="basis-1/2">
          <p className="  flex justify-center text-white font-roboto">VENTA</p>
          <h3 className="  flex justify-center text-white">{sell}</h3>
        </div>
      </div>
      <div className=" ">
        <p className="  flex justify-center text-white font-roboto ">VARIACIÓN</p>
        <h2 className="  flex justify-center text-white ">{variation}</h2>
      </div>
    </div>
  )

}